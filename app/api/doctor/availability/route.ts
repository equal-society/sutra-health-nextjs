import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;
const doctorEmail = process.env.DOCTOR_EMAIL!;

const supabaseAuth = createClient(
  supabaseUrl,
  supabasePublishableKey,
);

const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseSecretKey,
);

// ---------------------------------------------------------
// Helpers
// ---------------------------------------------------------

function jsonError(message: string, status = 400) {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status },
  );
}

function getBearerToken(request: NextRequest) {
  const authorization = request.headers.get("authorization");

  if (!authorization) {
    return null;
  }

  if (!authorization.toLowerCase().startsWith("bearer ")) {
    return null;
  }

  return authorization.substring(7).trim();
}

async function authenticateDoctor(request: NextRequest) {
  const token = getBearerToken(request);

  if (!token) {
    return {
      authenticated: false,
      user: null,
    };
  }

  const {
    data: { user },
    error,
  } = await supabaseAuth.auth.getUser(token);

  if (error || !user) {
    return {
      authenticated: false,
      user: null,
    };
  }

  const authenticatedEmail = user.email?.toLowerCase().trim();
  const allowedEmail = doctorEmail.toLowerCase().trim();

  if (!authenticatedEmail || authenticatedEmail !== allowedEmail) {
    return {
      authenticated: false,
      user,
    };
  }

  return {
    authenticated: true,
    user,
  };
}

function isValidDate(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  // YYYY-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  return date.toISOString().slice(0, 10) === value;
}

function isValidTime(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  // HH:mm
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

function normalizeSlots(slots: unknown): string[] | null {
  if (!Array.isArray(slots)) {
    return null;
  }

  const normalized = slots
    .filter((slot): slot is string => typeof slot === "string")
    .map((slot) => slot.trim())
    .filter((slot) => isValidTime(slot));

  // Remove duplicates and sort
  return [...new Set(normalized)].sort();
}

// ---------------------------------------------------------
// GET
// ---------------------------------------------------------
//
// GET /api/doctor/availability?date=2026-09-10
//
// Returns:
// - weekly schedule
// - date-specific override
// - effective slots for that date
// ---------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const auth = await authenticateDoctor(request);

    if (!auth.authenticated) {
      return jsonError("Unauthorized", 401);
    }

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date || !isValidDate(date)) {
      return jsonError(
        "A valid date is required in YYYY-MM-DD format.",
      );
    }

    // JS UTC day:
    // Sunday = 0
    // Monday = 1
    // ...
    const dateObject = new Date(`${date}T00:00:00Z`);
    const dayOfWeek = dateObject.getUTCDay();

    // -----------------------------------------------------
    // Get weekly schedule
    // -----------------------------------------------------

    const {
      data: weeklySchedule,
      error: weeklyError,
    } = await supabaseAdmin
      .from("availability_schedule")
      .select(
        "id, day_of_week, start_time, end_time, slot_duration_minutes, active",
      )
      .eq("day_of_week", dayOfWeek)
      .eq("active", true)
      .order("start_time", { ascending: true });

    if (weeklyError) {
      console.error("Weekly schedule error:", weeklyError);

      return jsonError(
        "Failed to load weekly availability.",
        500,
      );
    }

    // -----------------------------------------------------
    // Get date-specific override
    // -----------------------------------------------------

    const {
      data: override,
      error: overrideError,
    } = await supabaseAdmin
      .from("availability_overrides")
      .select(
        "id, appointment_date, slots, active, created_at, updated_at",
      )
      .eq("appointment_date", date)
      .maybeSingle();

    if (overrideError) {
      console.error("Availability override error:", overrideError);

      return jsonError(
        "Failed to load date-specific availability.",
        500,
      );
    }

    // -----------------------------------------------------
    // Effective slots
    // -----------------------------------------------------
    //
    // If an active override exists:
    // ONLY those slots are available.
    //
    // Otherwise:
    // use normal weekly schedule.
    // -----------------------------------------------------

    let effectiveSlots: string[] = [];
    let source: "override" | "weekly" = "weekly";

    if (override?.active === true) {
      effectiveSlots = normalizeSlots(override.slots) ?? [];
      source = "override";
    } else {
      for (const schedule of weeklySchedule ?? []) {
        const generated = generateSlots(
          schedule.start_time,
          schedule.end_time,
          schedule.slot_duration_minutes,
        );

        effectiveSlots.push(...generated);
      }

      effectiveSlots = [...new Set(effectiveSlots)].sort();
    }

    return NextResponse.json({
      success: true,

      date,

      day_of_week: dayOfWeek,

      weekly_schedule: weeklySchedule ?? [],

      override: override ?? null,

      effective_slots: effectiveSlots,

      source,
    });
  } catch (error) {
    console.error("Doctor availability GET error:", error);

    return jsonError(
      "Internal server error.",
      500,
    );
  }
}

// ---------------------------------------------------------
// POST
// ---------------------------------------------------------
//
// POST /api/doctor/availability
//
// Body:
//
// {
//   "date": "2026-09-10",
//   "slots": [
//     "16:00",
//     "16:15",
//     "16:30"
//   ]
// }
//
// This creates or updates the date-specific override.
// ---------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const auth = await authenticateDoctor(request);

    if (!auth.authenticated) {
      return jsonError("Unauthorized", 401);
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return jsonError("Invalid JSON body.");
    }

    if (!body || typeof body !== "object") {
      return jsonError("Invalid request body.");
    }

    const data = body as {
      date?: unknown;
      slots?: unknown;
      active?: unknown;
    };

    const date = data.date;

    if (!isValidDate(date)) {
      return jsonError(
        "A valid date is required in YYYY-MM-DD format.",
      );
    }

    const slots = normalizeSlots(data.slots);

    if (!slots) {
      return jsonError(
        "slots must be an array of valid HH:mm times.",
      );
    }

    // Optional active field.
    // Normally POST means activate the custom availability.
    const active =
      typeof data.active === "boolean"
        ? data.active
        : true;

    // -----------------------------------------------------
    // Upsert override
    // -----------------------------------------------------

    const {
      data: savedOverride,
      error,
    } = await supabaseAdmin
      .from("availability_overrides")
      .upsert(
        {
          appointment_date: date,
          slots,
          active,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "appointment_date",
        },
      )
      .select(
        "id, appointment_date, slots, active, created_at, updated_at",
      )
      .single();

    if (error) {
      console.error("Save availability override error:", error);

      return jsonError(
        "Failed to save availability.",
        500,
      );
    }

    return NextResponse.json({
      success: true,

      message: active
        ? "Custom availability saved successfully."
        : "Availability override disabled.",

      override: savedOverride,
    });
  } catch (error) {
    console.error("Doctor availability POST error:", error);

    return jsonError(
      "Internal server error.",
      500,
    );
  }
}

// ---------------------------------------------------------
// DELETE
// ---------------------------------------------------------
//
// DELETE /api/doctor/availability?date=2026-09-10
//
// Removes the custom override.
// That date will return to normal weekly availability.
// ---------------------------------------------------------

export async function DELETE(request: NextRequest) {
  try {
    const auth = await authenticateDoctor(request);

    if (!auth.authenticated) {
      return jsonError("Unauthorized", 401);
    }

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date || !isValidDate(date)) {
      return jsonError(
        "A valid date is required in YYYY-MM-DD format.",
      );
    }

    const { error } = await supabaseAdmin
      .from("availability_overrides")
      .delete()
      .eq("appointment_date", date);

    if (error) {
      console.error(
        "Delete availability override error:",
        error,
      );

      return jsonError(
        "Failed to reset availability.",
        500,
      );
    }

    return NextResponse.json({
      success: true,

      message:
        "Custom availability removed. The date now uses the normal weekly schedule.",

      date,
    });
  } catch (error) {
    console.error("Doctor availability DELETE error:", error);

    return jsonError(
      "Internal server error.",
      500,
    );
  }
}

// ---------------------------------------------------------
// Generate slots from weekly schedule
// ---------------------------------------------------------

function generateSlots(
  startTime: string,
  endTime: string,
  durationMinutes: number,
): string[] {
  if (!startTime || !endTime || !durationMinutes) {
    return [];
  }

  const start = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);

  if (start === null || end === null || end <= start) {
    return [];
  }

  if (durationMinutes <= 0) {
    return [];
  }

  const slots: string[] = [];

  for (
    let minutes = start;
    minutes + durationMinutes <= end;
    minutes += durationMinutes
  ) {
    slots.push(minutesToTime(minutes));
  }

  return slots;
}

function timeToMinutes(time: string): number | null {
  if (!isValidTime(time)) {
    return null;
  }

  const [hours, minutes] = time
    .split(":")
    .map(Number);

  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(
    minutes,
  ).padStart(2, "0")}`;
}