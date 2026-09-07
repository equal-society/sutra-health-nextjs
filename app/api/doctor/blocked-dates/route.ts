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

  return [...new Set(normalized)].sort();
}

// ---------------------------------------------------------
// GET
// ---------------------------------------------------------
//
// GET /api/doctor/blocked-dates?date=2026-09-10
//
// Returns the block configuration for that date.
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

    const { data, error } = await supabaseAdmin
      .from("blocked_dates")
      .select(
        "id, date, blocked_slots, is_full_day_blocked, created_at, updated_at",
      )
      .eq("date", date)
      .maybeSingle();

    if (error) {
      console.error("Get blocked date error:", error);

      return jsonError(
        "Failed to load blocked date information.",
        500,
      );
    }

    return NextResponse.json({
      success: true,
      date,
      blocked: data ?? null,
      is_full_day_blocked: data?.is_full_day_blocked ?? false,
      blocked_slots: data?.blocked_slots ?? [],
    });
  } catch (error) {
    console.error("Blocked dates GET error:", error);

    return jsonError("Internal server error.", 500);
  }
}

// ---------------------------------------------------------
// POST
// ---------------------------------------------------------
//
// POST /api/doctor/blocked-dates
//
// Full-day block:
//
// {
//   "date": "2026-09-10",
//   "is_full_day_blocked": true,
//   "blocked_slots": []
// }
//
// Individual slots:
//
// {
//   "date": "2026-09-10",
//   "is_full_day_blocked": false,
//   "blocked_slots": [
//     "16:00",
//     "16:30"
//   ]
// }
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
      blocked_slots?: unknown;
      is_full_day_blocked?: unknown;
    };

    if (!isValidDate(data.date)) {
      return jsonError(
        "A valid date is required in YYYY-MM-DD format.",
      );
    }

    const date = data.date;

    const isFullDayBlocked =
      data.is_full_day_blocked === true;

    const blockedSlots = normalizeSlots(
      data.blocked_slots ?? [],
    );

    if (!blockedSlots) {
      return jsonError(
        "blocked_slots must be an array of valid HH:mm times.",
      );
    }

    // A full-day block does not need individual slots.
    const finalBlockedSlots = isFullDayBlocked
      ? []
      : blockedSlots;

    // -----------------------------------------------------
    // If nothing is blocked, remove the record.
    // -----------------------------------------------------

    if (
      !isFullDayBlocked &&
      finalBlockedSlots.length === 0
    ) {
      const { error: deleteError } = await supabaseAdmin
        .from("blocked_dates")
        .delete()
        .eq("date", date);

      if (deleteError) {
        console.error(
          "Remove empty blocked date error:",
          deleteError,
        );

        return jsonError(
          "Failed to remove blocked date.",
          500,
        );
      }

      return NextResponse.json({
        success: true,
        message: "All blocks removed for this date.",
        date,
      });
    }

    // -----------------------------------------------------
    // Upsert block
    // -----------------------------------------------------

    const { data: savedBlock, error } = await supabaseAdmin
      .from("blocked_dates")
      .upsert(
        {
          date,
          blocked_slots: finalBlockedSlots,
          is_full_day_blocked: isFullDayBlocked,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "date",
        },
      )
      .select(
        "id, date, blocked_slots, is_full_day_blocked, created_at, updated_at",
      )
      .single();

    if (error) {
      console.error(
        "Save blocked date error:",
        error,
      );

      return jsonError(
        "Failed to save blocked date.",
        500,
      );
    }

    return NextResponse.json({
      success: true,

      message: isFullDayBlocked
        ? "The entire day has been blocked."
        : "Blocked slots saved successfully.",

      blocked: savedBlock,
    });
  } catch (error) {
    console.error("Blocked dates POST error:", error);

    return jsonError("Internal server error.", 500);
  }
}

// ---------------------------------------------------------
// DELETE
// ---------------------------------------------------------
//
// DELETE /api/doctor/blocked-dates?date=2026-09-10
//
// Completely removes all blocking for that date.
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
      .from("blocked_dates")
      .delete()
      .eq("date", date);

    if (error) {
      console.error(
        "Delete blocked date error:",
        error,
      );

      return jsonError(
        "Failed to remove blocked date.",
        500,
      );
    }

    return NextResponse.json({
      success: true,

      message: "All blocks removed for this date.",

      date,
    });
  } catch (error) {
    console.error("Blocked dates DELETE error:", error);

    return jsonError("Internal server error.", 500);
  }
}