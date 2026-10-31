import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------
// GET /api/doctor/appointments
//
// Returns the appointment list for the logged-in doctor only.
// Patient details (name, phone, email, age) are read on the
// server with the secret key, so the browser never queries the
// appointments table directly.
// ---------------------------------------------------------

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;
const doctorEmail = process.env.DOCTOR_EMAIL!;

function jsonError(message: string, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

export async function GET(request: NextRequest) {
  try {
    const authorization = request.headers.get("authorization") ?? "";

    if (!authorization.toLowerCase().startsWith("bearer ")) {
      return jsonError("Authentication required.", 401);
    }

    const token = authorization.substring(7).trim();

    const supabaseAuth = createClient(supabaseUrl, supabasePublishableKey);
    const {
      data: { user },
      error: authError,
    } = await supabaseAuth.auth.getUser(token);

    if (authError || !user) {
      return jsonError("Authentication required.", 401);
    }

    const userEmail = user.email?.toLowerCase().trim();

    if (
      !doctorEmail ||
      !userEmail ||
      userEmail !== doctorEmail.toLowerCase().trim()
    ) {
      return jsonError("You are not allowed to view appointments.", 403);
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey);

    const { data, error } = await supabaseAdmin
      .from("appointments")
      .select(
        `
          id,
          patient_name,
          patient_email,
          patient_phone,
          patient_age,
          patient_gender,
          appointment_date,
          appointment_time,
          status,
          meeting_url
        `,
      )
      .order("appointment_date", { ascending: true })
      .order("appointment_time", { ascending: true });

    if (error) {
      console.error("Appointments query error:", error);
      return jsonError("Unable to load appointments.", 500);
    }

    return NextResponse.json(
      { success: true, appointments: data ?? [] },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Doctor appointments error:", error);
    return jsonError("Unable to load appointments.", 500);
  }
}
