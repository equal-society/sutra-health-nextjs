import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
const emailjsPatientTemplateId =
  process.env.EMAILJS_PATIENT_TEMPLATE_ID;
const emailjsDoctorTemplateId =
  process.env.EMAILJS_DOCTOR_TEMPLATE_ID;
const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
const emailjsPrivateKey = process.env.EMAILJS_PRIVATE_KEY;

const doctorEmail =
  process.env.DOCTOR_EMAIL || "equal.society@gmail.com";

const enrollmentFormUrl =
  process.env.ENROLLMENT_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLSfcyoJRA-FH5XsXQ-mN6kzYNy0z3WpR7vPU_4BPr8nday_7TQ/viewform?pli=1";

type AppointmentBody = {
  name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  age?: string | number;
  date?: string;
  time?: string;
};

type Schedule = {
  day_of_week: number;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number | null;
  active: boolean;
};

/**
 * Convert HH:MM into minutes.
 */
function timeToMinutes(value: string): number {
  const [hours, minutes] = value
    .slice(0, 5)
    .split(":")
    .map(Number);

  return hours * 60 + minutes;
}

/**
 * Get the current date/time components in India.
 */
function getIndiaDateTime() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );

  return {
    date: `${values.year}-${values.month}-${values.day}`,
    hours: Number(values.hour),
    minutes: Number(values.minute),
  };
}

/**
 * Get weekday for an appointment date in India.
 * JavaScript getDay(): Sunday = 0 ... Saturday = 6.
 */
function getIndiaDayOfWeek(dateString: string): number {
  const date = new Date(`${dateString}T12:00:00Z`);

  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
  }).format(date);

  const weekdays: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return weekdays[weekday];
}

/**
 * Format date for India.
 */
function formatDate(dateString: string): string {
  return new Date(
    `${dateString}T00:00:00`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format HH:MM into 12-hour time.
 */
function formatTime(timeString: string): string {
  const [hourString, minuteString] =
    timeString.split(":");

  const hour = Number(hourString);
  const minute = Number(minuteString);

  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${String(minute).padStart(
    2,
    "0"
  )} ${ampm}`;
}

/**
 * Small delay used between EmailJS requests.
 *
 * EmailJS has request-rate limits, so we don't
 * fire both emails at exactly the same time.
 */
function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/**
 * Send an email through EmailJS REST API.
 */
async function sendEmailJS(
  templateId: string,
  templateParams: Record<string, string>
) {
  if (
    !emailjsServiceId ||
    !emailjsPublicKey ||
    !emailjsPrivateKey ||
    !templateId
  ) {
    throw new Error(
      "EmailJS environment variables are missing."
    );
  }

  const response = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: emailjsServiceId,
        template_id: templateId,
        user_id: emailjsPublicKey,
        accessToken: emailjsPrivateKey,
        template_params: templateParams,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `EmailJS failed (${response.status}): ${errorText}`
    );
  }

  return true;
}

/**
 * POST /api/appointments
 */
export async function POST(request: NextRequest) {
  try {
    // ==================================================
    // ENVIRONMENT VARIABLES
    // ==================================================

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Supabase environment variables are missing.",
        },
        { status: 500 }
      );
    }

    if (
      !emailjsServiceId ||
      !emailjsPatientTemplateId ||
      !emailjsDoctorTemplateId ||
      !emailjsPublicKey ||
      !emailjsPrivateKey
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "EmailJS environment variables are missing.",
        },
        { status: 500 }
      );
    }

    // ==================================================
    // SUPABASE
    // ==================================================

    const supabase = createClient(
      supabaseUrl,
      supabaseKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // ==================================================
    // READ REQUEST
    // ==================================================

    let body: AppointmentBody;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request body.",
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      gender,
      age,
      date,
      time,
    } = body;

    // ==================================================
    // REQUIRED FIELDS
    // ==================================================

    if (
      !name ||
      !email ||
      !phone ||
      !gender ||
      age === undefined ||
      age === null ||
      !date ||
      !time
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide all required appointment information.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // CLEAN VALUES
    // ==================================================

    const patientName = String(name).trim();
    const patientEmail = String(email).trim();
    const patientPhone = String(phone).trim();
    const patientGender = String(gender).trim();
    const patientAge = Number(age);
    const appointmentDate = String(date).trim();
    const appointmentTime = String(time).trim();

    // ==================================================
    // VALIDATE NAME
    // ==================================================

    if (
      patientName.length < 2 ||
      patientName.length > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid name.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // VALIDATE AGE
    // ==================================================

    if (
      !Number.isInteger(patientAge) ||
      patientAge < 1 ||
      patientAge > 120
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid age.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // VALIDATE EMAIL
    // ==================================================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(patientEmail)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // VALIDATE DATE
    // ==================================================

    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(
        appointmentDate
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment date.",
        },
        { status: 400 }
      );
    }

    const selectedDate = new Date(
      `${appointmentDate}T00:00:00`
    );

    if (
      Number.isNaN(selectedDate.getTime())
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment date.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // VALIDATE TIME
    // ==================================================

    if (
      !/^\d{2}:\d{2}$/.test(
        appointmentTime
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment time.",
        },
        { status: 400 }
      );
    }

    const [hours, minutes] =
      appointmentTime
        .split(":")
        .map(Number);

    if (
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid appointment time.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // PREVENT PAST DATES
    // ==================================================

    const indiaNow = getIndiaDateTime();
    const todayString = indiaNow.date;

    if (appointmentDate < todayString) {
      return NextResponse.json(
        {
          success: false,
          error:
            "You cannot book an appointment for a past date.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // DAY OF WEEK
    // ==================================================

    const dayOfWeek =
      getIndiaDayOfWeek(appointmentDate);

    // ==================================================
    // CHECK DOCTOR AVAILABILITY
    // ==================================================

    const [
      { data: schedules, error: scheduleError },
      { data: availabilityOverride, error: overrideError },
      { data: blockedDate, error: blockedDateError },
    ] = await Promise.all([
      // Weekly schedule
      supabase
        .from("availability_schedule")
        .select(
          "day_of_week, start_time, end_time, slot_duration_minutes, active"
        )
        .eq("day_of_week", dayOfWeek)
        .eq("active", true)
        .order("start_time", {
          ascending: true,
        }),

      // Date-specific custom availability
      supabase
        .from("availability_overrides")
        .select("appointment_date, slots, active")
        .eq("appointment_date", appointmentDate)
        .eq("active", true)
        .maybeSingle(),

      // Blocked date / blocked slots
      supabase
        .from("blocked_dates")
        .select(
          "date, blocked_slots, is_full_day_blocked"
        )
        .eq("date", appointmentDate)
        .maybeSingle(),
    ]);

    if (scheduleError) {
      console.error(
        "Schedule lookup error:",
        scheduleError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify doctor's availability.",
        },
        { status: 500 }
      );
    }

    if (overrideError) {
      console.error(
        "Availability override lookup error:",
        overrideError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify date-specific availability.",
        },
        { status: 500 }
      );
    }

    if (blockedDateError) {
      console.error(
        "Blocked date lookup error:",
        blockedDateError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify blocked dates.",
        },
        { status: 500 }
      );
    }

    // ==================================================
    // FULL-DAY BLOCK
    // ==================================================

    if (blockedDate?.is_full_day_blocked === true) {
      return NextResponse.json(
        {
          success: false,
          error:
            "The doctor is not available on the selected date.",
        },
        { status: 409 }
      );
    }

    // ==================================================
    // BLOCKED SLOT
    // ==================================================

    const blockedSlots = Array.isArray(
      blockedDate?.blocked_slots
    )
      ? blockedDate.blocked_slots
      : [];

    const normalizedBlockedSlots =
      blockedSlots.map((slot: unknown) =>
        String(slot).slice(0, 5)
      );

    const requestedSlot =
      appointmentTime.slice(0, 5);

    if (
      normalizedBlockedSlots.includes(
        requestedSlot
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "The selected appointment time is not available.",
        },
        { status: 409 }
      );
    }

    // ==================================================
    // CUSTOM AVAILABILITY OVERRIDE
    // ==================================================

    if (availabilityOverride) {
      const customSlots = Array.isArray(
        availabilityOverride.slots
      )
        ? availabilityOverride.slots
        : [];

      const normalizedCustomSlots =
        customSlots.map((slot: unknown) =>
          String(slot).slice(0, 5)
        );

      if (
        !normalizedCustomSlots.includes(
          requestedSlot
        )
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "The selected appointment time is not available.",
          },
          { status: 409 }
        );
      }
    } else {
      // ==================================================
      // NORMAL WEEKLY SCHEDULE
      // ==================================================

      if (
        !schedules ||
        schedules.length === 0
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "The doctor is not available on the selected date.",
          },
          { status: 409 }
        );
      }

      const requestedMinutes =
        timeToMinutes(appointmentTime);

      const validSchedule =
        (schedules as Schedule[]).find(
          (schedule) => {
            const startMinutes =
              timeToMinutes(
                schedule.start_time
              );

            const endMinutes =
              timeToMinutes(
                schedule.end_time
              );

            const duration =
              Number(
                schedule.slot_duration_minutes
              ) || 15;

            return (
              requestedMinutes >=
                startMinutes &&
              requestedMinutes + duration <=
                endMinutes &&
              (requestedMinutes -
                startMinutes) %
                duration ===
                0
            );
          }
        );

      if (!validSchedule) {
        return NextResponse.json(
          {
            success: false,
            error:
              "The selected appointment time is not available.",
          },
          { status: 409 }
        );
      }
    }

    // ==================================================
    // IF TODAY, PREVENT PAST TIME
    // ==================================================

    if (appointmentDate === todayString) {
      const currentMinutes =
        indiaNow.hours * 60 +
        indiaNow.minutes;

      if (
        requestedMinutes <=
        currentMinutes
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "That appointment time has already passed.",
          },
          { status: 409 }
        );
      }
    }

    // ==================================================
    // CHECK EXISTING APPOINTMENT
    // ==================================================

    const {
      data: existingAppointment,
      error: existingError,
    } = await supabase
      .from("appointments")
      .select("id, status")
      .eq(
        "appointment_date",
        appointmentDate
      )
      .eq(
        "appointment_time",
        appointmentTime
      )
      .neq("status", "cancelled")
      .limit(1)
      .maybeSingle();

    if (existingError) {
      console.error(
        "Existing appointment error:",
        existingError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify the selected appointment time.",
        },
        { status: 500 }
      );
    }

    if (existingAppointment) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This appointment slot has already been booked. Please select another time.",
        },
        { status: 409 }
      );
    }

    // ==================================================
    // CREATE JITSI MEETING
    // ==================================================

    const meetingId =
      `sutra-health-${crypto.randomUUID()}`;

    const meetingUrl =
      `https://meet.jit.si/${meetingId}`;

    // ==================================================
    // INSERT APPOINTMENT
    // ==================================================

    const {
      data: appointment,
      error: insertError,
    } = await supabase
      .from("appointments")
      .insert({
        patient_name: patientName,
        patient_email: patientEmail,
        patient_phone: patientPhone,
        patient_age: patientAge,
        patient_gender: patientGender,
        appointment_date:
          appointmentDate,
        appointment_time:
          appointmentTime,
        status: "confirmed",
        meeting_url: meetingUrl,
      })
      .select()
      .single();

    if (insertError) {
      console.error(
        "Appointment insert error:",
        insertError
      );

      if (
        insertError.code === "23505"
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "This appointment slot was just booked by another patient. Please select another time.",
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to save the appointment.",
        },
        { status: 500 }
      );
    }

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Appointment could not be created.",
        },
        { status: 500 }
      );
    }

    // ==================================================
    // FORMAT DATE & TIME
    // ==================================================

    const formattedDate =
      formatDate(appointmentDate);

    const formattedTime =
      formatTime(appointmentTime);

    // ==================================================
    // PATIENT EMAIL
    // ==================================================

    let patientEmailStatus:
      | "sent"
      | "failed" = "failed";

    try {
      await sendEmailJS(
        emailjsPatientTemplateId,
        {
          to_name: patientName,
          to_email: patientEmail,
          email: patientEmail,
          date: formattedDate,
          time: formattedTime,
          meeting_link: meetingUrl,
          enrollment_link:
            enrollmentFormUrl,
        }
      );

      patientEmailStatus = "sent";

      console.log(
        "PATIENT EMAIL SENT:",
        patientEmail
      );
    } catch (error) {
      console.error(
        "PATIENT EMAIL FAILED:",
        error
      );
    }

    // ==================================================
    // WAIT BEFORE SECOND EMAIL
    // ==================================================

    await delay(1100);

    // ==================================================
    // DOCTOR EMAIL
    // ==================================================

    let doctorEmailStatus:
      | "sent"
      | "failed" = "failed";

    try {
      await sendEmailJS(
        emailjsDoctorTemplateId,
        {
          to_email: doctorEmail,
          patient_name: patientName,
          patient_email: patientEmail,
          patient_phone: patientPhone,
          date: formattedDate,
          time: formattedTime,
          meeting_link: meetingUrl,
        }
      );

      doctorEmailStatus = "sent";

      console.log(
        "DOCTOR EMAIL SENT:",
        doctorEmail
      );
    } catch (error) {
      console.error(
        "DOCTOR EMAIL FAILED:",
        error
      );
    }

    // ==================================================
    // SUCCESS
    // ==================================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Appointment booked successfully.",

        emailStatus: {
          patient:
            patientEmailStatus,
          doctor:
            doctorEmailStatus,
        },

        appointment: {
          id: appointment.id,
          name: patientName,
          email: patientEmail,
          phone: patientPhone,
          patient_age: patientAge,
          gender: patientGender,
          date: appointmentDate,
          time: appointmentTime,
          status: appointment.status,
          meeting_url: meetingUrl,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Appointment API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to create appointment.",
      },
      { status: 500 }
    );
  }
}