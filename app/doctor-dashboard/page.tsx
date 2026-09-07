"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

type Appointment = {
  id: string;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  patient_age: number;
  patient_gender: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  meeting_url: string | null;
};

type WeeklySchedule = {
  id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  slot_duration_minutes: number;
  active: boolean;
};

type AvailabilityOverride = {
  id: number;
  appointment_date: string;
  slots: string[];
  active: boolean;
  created_at?: string;
  updated_at?: string;
};

type BlockedDate = {
  id: number;
  date: string;
  blocked_slots: string[];
  is_full_day_blocked: boolean;
  created_at?: string;
  updated_at?: string;
};

type AvailabilityResponse = {
  success: boolean;
  date: string;
  day_of_week: number;
  weekly_schedule: WeeklySchedule[];
  override: AvailabilityOverride | null;
  effective_slots: string[];
  source: "override" | "weekly";
  error?: string;
};

type BlockedDateResponse = {
  success: boolean;
  date: string;
  blocked: BlockedDate | null;
  is_full_day_blocked: boolean;
  blocked_slots: string[];
  error?: string;
};

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function DoctorDashboard() {
  const router = useRouter();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // --------------------------------------------------
  // AVAILABILITY MANAGEMENT
  // --------------------------------------------------

  const [availabilityDate, setAvailabilityDate] = useState("");
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [availabilitySaving, setAvailabilitySaving] = useState(false);

  const [weeklySchedule, setWeeklySchedule] = useState<WeeklySchedule[]>([]);
  const [normalSlots, setNormalSlots] = useState<string[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [availabilitySource, setAvailabilitySource] = useState<
    "weekly" | "override"
  >("weekly");
  const [hasAvailabilityOverride, setHasAvailabilityOverride] = useState(false);

  const [blockedSlots, setBlockedSlots] = useState<string[]>([]);
  const [isFullDayBlocked, setIsFullDayBlocked] = useState(false);
  const [blockedLoading, setBlockedLoading] = useState(false);
  const [blockedSaving, setBlockedSaving] = useState(false);

  // --------------------------------------------------
  // DATE HELPERS
  // --------------------------------------------------

  function getTodayString() {
    const now = new Date();

    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(now.getDate()).padStart(2, "0")}`;
  }

  // --------------------------------------------------
  // LOAD APPOINTMENTS
  // --------------------------------------------------

  async function loadAppointments() {
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/doctor-login");
        return;
      }

      const doctorEmail = process.env.NEXT_PUBLIC_DOCTOR_EMAIL;

      if (
        !doctorEmail ||
        !user.email ||
        user.email.toLowerCase() !== doctorEmail.toLowerCase()
      ) {
        await supabase.auth.signOut();
        router.replace("/doctor-login");
        return;
      }

      const { data, error: fetchError } = await supabase
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
        .order("appointment_date", {
          ascending: true,
        })
        .order("appointment_time", {
          ascending: true,
        });

      if (fetchError) {
        console.error("Appointments error:", fetchError);
        setError("Unable to load appointments.");
        return;
      }

      setAppointments((data ?? []) as Appointment[]);
    } catch (error) {
      console.error("Dashboard error:", error);
      setError("Unable to load appointments.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAppointments();
  }, []);

  // --------------------------------------------------
  // LOGOUT
  // --------------------------------------------------

  async function handleLogout() {
    await supabase.auth.signOut();

    router.replace("/doctor-login");
    router.refresh();
  }

  // --------------------------------------------------
  // GET AUTH SESSION
  // --------------------------------------------------

  async function getAccessToken() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      router.replace("/doctor-login");
      return null;
    }

    return session.access_token;
  }

  // --------------------------------------------------
  // UPDATE APPOINTMENT STATUS
  // --------------------------------------------------

  async function updateAppointmentStatus(
    id: string,
    status: "cancelled" | "completed",
  ) {
    const appointment = appointments.find((item) => item.id === id);

    if (!appointment) {
      return;
    }

    if (status === "cancelled") {
      const confirmed = window.confirm(
        `Cancel the appointment for ${appointment.patient_name} at ${formatTime(
          appointment.appointment_time,
        )}?`,
      );

      if (!confirmed) {
        return;
      }
    }

    if (status === "completed") {
      const confirmed = window.confirm(
        `Mark ${appointment.patient_name}'s appointment as completed?`,
      );

      if (!confirmed) {
        return;
      }
    }

    setUpdatingId(id);
    setError("");

    try {
      const token = await getAccessToken();

      if (!token) {
        return;
      }

      const response = await fetch("/api/appointments/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id,
          status,
        }),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        const text = await response.text();

        console.error("Status API returned non-JSON:", text);

        throw new Error(`Unexpected response (${response.status}).`);
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to update appointment.",
        );
      }

      await loadAppointments();
    } catch (error) {
      console.error("Appointment status error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to update appointment.",
      );
    } finally {
      setUpdatingId(null);
    }
  }

  // --------------------------------------------------
  // LOAD AVAILABILITY FOR SELECTED DATE
  // --------------------------------------------------

  async function loadAvailability(date: string) {
    if (!date) {
      return;
    }

    setAvailabilityLoading(true);
    setBlockedLoading(true);
    setError("");

    try {
      const token = await getAccessToken();

      if (!token) {
        return;
      }

      const [availabilityResponse, blockedResponse] = await Promise.all([
        fetch(`/api/doctor/availability?date=${encodeURIComponent(date)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch(`/api/doctor/blocked-dates?date=${encodeURIComponent(date)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const availabilityContentType =
        availabilityResponse.headers.get("content-type") || "";

      const blockedContentType =
        blockedResponse.headers.get("content-type") || "";

      if (!availabilityContentType.includes("application/json")) {
        throw new Error(
          `Availability API returned an unexpected response (${availabilityResponse.status}).`,
        );
      }

      if (!blockedContentType.includes("application/json")) {
        throw new Error(
          `Blocked dates API returned an unexpected response (${blockedResponse.status}).`,
        );
      }

      const availabilityData =
        (await availabilityResponse.json()) as AvailabilityResponse;

      const blockedData =
        (await blockedResponse.json()) as BlockedDateResponse;

      if (!availabilityResponse.ok || !availabilityData.success) {
        throw new Error(
          availabilityData.error || "Unable to load availability.",
        );
      }

      if (!blockedResponse.ok || !blockedData.success) {
        throw new Error(
          blockedData.error || "Unable to load blocked slots.",
        );
      }

      const weeklySlots = generateWeeklySlots(
        availabilityData.weekly_schedule,
      );

      setWeeklySchedule(availabilityData.weekly_schedule ?? []);
      setNormalSlots(weeklySlots);

      setAvailabilitySource(availabilityData.source);

      const overrideSlots = availabilityData.override?.slots ?? [];

      setHasAvailabilityOverride(
        availabilityData.override?.active === true,
      );

      // The editable selection shows the doctor's effective availability.
      setSelectedSlots(
        availabilityData.source === "override"
          ? overrideSlots
          : availabilityData.effective_slots ?? weeklySlots,
      );

      setBlockedSlots(blockedData.blocked_slots ?? []);
      setIsFullDayBlocked(blockedData.is_full_day_blocked === true);
    } catch (error) {
      console.error("Load availability error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to load availability.",
      );
    } finally {
      setAvailabilityLoading(false);
      setBlockedLoading(false);
    }
  }

  useEffect(() => {
    if (!availabilityDate) {
      return;
    }

    loadAvailability(availabilityDate);
  }, [availabilityDate]);

  // --------------------------------------------------
  // GENERATE NORMAL WEEKLY SLOTS
  // --------------------------------------------------

  function generateWeeklySlots(schedule: WeeklySchedule[]) {
    const slots: string[] = [];

    for (const item of schedule) {
      const start = timeToMinutes(item.start_time);
      const end = timeToMinutes(item.end_time);
      const duration = Number(item.slot_duration_minutes);

      if (start === null || end === null || duration <= 0) {
        continue;
      }

      for (
        let minutes = start;
        minutes + duration <= end;
        minutes += duration
      ) {
        slots.push(minutesToTime(minutes));
      }
    }

    return [...new Set(slots)].sort();
  }

  // --------------------------------------------------
  // SAVE CUSTOM AVAILABILITY
  // --------------------------------------------------

  async function saveAvailability() {
    if (!availabilityDate) {
      return;
    }

    setAvailabilitySaving(true);
    setError("");

    try {
      const token = await getAccessToken();

      if (!token) {
        return;
      }

      const response = await fetch("/api/doctor/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          date: availabilityDate,
          slots: selectedSlots,
          active: true,
        }),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          `Availability API returned an unexpected response (${response.status}).`,
        );
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to save availability.",
        );
      }

      setHasAvailabilityOverride(true);
      setAvailabilitySource("override");

      await loadAvailability(availabilityDate);

      setError("");
    } catch (error) {
      console.error("Save availability error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to save availability.",
      );
    } finally {
      setAvailabilitySaving(false);
    }
  }

  // --------------------------------------------------
  // RESET CUSTOM AVAILABILITY
  // --------------------------------------------------

  async function resetAvailability() {
    if (!availabilityDate) {
      return;
    }

    const confirmed = window.confirm(
      `Reset availability for ${formatDate(
        availabilityDate,
      )} back to the normal weekly schedule?`,
    );

    if (!confirmed) {
      return;
    }

    setAvailabilitySaving(true);
    setError("");

    try {
      const token = await getAccessToken();

      if (!token) {
        return;
      }

      const response = await fetch(
        `/api/doctor/availability?date=${encodeURIComponent(
          availabilityDate,
        )}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          `Availability API returned an unexpected response (${response.status}).`,
        );
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to reset availability.",
        );
      }

      await loadAvailability(availabilityDate);
    } catch (error) {
      console.error("Reset availability error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to reset availability.",
      );
    } finally {
      setAvailabilitySaving(false);
    }
  }

  // --------------------------------------------------
  // SAVE BLOCKED DATE / SLOTS
  // --------------------------------------------------

  async function saveBlockedSettings() {
    if (!availabilityDate) {
      return;
    }

    setBlockedSaving(true);
    setError("");

    try {
      const token = await getAccessToken();

      if (!token) {
        return;
      }

      const response = await fetch("/api/doctor/blocked-dates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          date: availabilityDate,
          is_full_day_blocked: isFullDayBlocked,
          blocked_slots: isFullDayBlocked ? [] : blockedSlots,
        }),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          `Blocked dates API returned an unexpected response (${response.status}).`,
        );
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to save blocked settings.",
        );
      }

      await loadAvailability(availabilityDate);
    } catch (error) {
      console.error("Save blocked settings error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to save blocked settings.",
      );
    } finally {
      setBlockedSaving(false);
    }
  }

  // --------------------------------------------------
  // CLEAR ALL BLOCKS
  // --------------------------------------------------

  async function clearBlockedSettings() {
    if (!availabilityDate) {
      return;
    }

    const confirmed = window.confirm(
      `Remove all blocked slots for ${formatDate(availabilityDate)}?`,
    );

    if (!confirmed) {
      return;
    }

    setBlockedSaving(true);
    setError("");

    try {
      const token = await getAccessToken();

      if (!token) {
        return;
      }

      const response = await fetch(
        `/api/doctor/blocked-dates?date=${encodeURIComponent(
          availabilityDate,
        )}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          `Blocked dates API returned an unexpected response (${response.status}).`,
        );
      }

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to clear blocked settings.",
        );
      }

      await loadAvailability(availabilityDate);
    } catch (error) {
      console.error("Clear blocked settings error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to clear blocked settings.",
      );
    } finally {
      setBlockedSaving(false);
    }
  }

  // --------------------------------------------------
  // SLOT TOGGLE HELPERS
  // --------------------------------------------------

  function toggleAvailabilitySlot(slot: string) {
    setSelectedSlots((current) =>
      current.includes(slot)
        ? current.filter((item) => item !== slot)
        : [...current, slot].sort(),
    );
  }

  function toggleBlockedSlot(slot: string) {
    setBlockedSlots((current) =>
      current.includes(slot)
        ? current.filter((item) => item !== slot)
        : [...current, slot].sort(),
    );
  }

  function selectAllAvailabilitySlots() {
    setSelectedSlots([...normalSlots]);
  }

  function clearAllAvailabilitySlots() {
    setSelectedSlots([]);
  }

  function selectAllBlockedSlots() {
    setBlockedSlots([...normalSlots]);
  }

  function clearAllBlockedSlots() {
    setBlockedSlots([]);
  }

  // --------------------------------------------------
  // DATE
  // --------------------------------------------------

  const todayString = getTodayString();

  // --------------------------------------------------
  // DASHBOARD COUNTS
  // --------------------------------------------------

  const todaysAppointments = appointments.filter(
    (appointment) =>
      appointment.appointment_date === todayString &&
      appointment.status === "confirmed",
  );

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.appointment_date > todayString &&
      appointment.status === "confirmed",
  );

  // --------------------------------------------------
  // FILTERED APPOINTMENTS
  // --------------------------------------------------

  const filteredAppointments = appointments.filter((appointment) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      appointment.patient_name.toLowerCase().includes(query) ||
      appointment.patient_email.toLowerCase().includes(query) ||
      appointment.patient_phone.toLowerCase().includes(query);

    const matchesDate =
      dateFilter === "all" || appointment.appointment_date === dateFilter;

    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;

    return matchesSearch && matchesDate && matchesStatus;
  });

  // --------------------------------------------------
  // AVAILABILITY DISPLAY
  // --------------------------------------------------

  const selectedDateObject = availabilityDate
    ? new Date(`${availabilityDate}T00:00:00`)
    : null;

  const selectedDayName = selectedDateObject
    ? DAY_NAMES[selectedDateObject.getDay()]
    : "";

  const displaySlots = useMemo(() => {
    const all = [...new Set([...normalSlots, ...selectedSlots])];
    return all.sort();
  }, [normalSlots, selectedSlots]);

  // --------------------------------------------------
  // FORMAT DATE
  // --------------------------------------------------

  function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  // --------------------------------------------------
  // FORMAT TIME
  // --------------------------------------------------

  function formatTime(time: string) {
    const [hourString, minuteString] = time.slice(0, 5).split(":");

    const hour = Number(hourString);
    const minute = Number(minuteString);

    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;

    return `${displayHour}:${String(minute).padStart(2, "0")} ${ampm}`;
  }

  // --------------------------------------------------
  // STATUS STYLE
  // --------------------------------------------------

  function statusClass(status: string) {
    if (status === "cancelled") {
      return "bg-red-50 text-red-700";
    }

    if (status === "completed") {
      return "bg-gray-100 text-gray-700";
    }

    return "bg-green-50 text-green-700";
  }

  // --------------------------------------------------
  // TIME HELPERS
  // --------------------------------------------------

  function timeToMinutes(time: string) {
    if (!/^\d{2}:\d{2}/.test(time)) {
      return null;
    }

    const [hours, minutes] = time.slice(0, 5).split(":").map(Number);

    if (
      Number.isNaN(hours) ||
      Number.isNaN(minutes) ||
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return null;
    }

    return hours * 60 + minutes;
  }

  function minutesToTime(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0",
    )}`;
  }

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FAF8F1] flex items-center justify-center">
        <p className="text-[#687A73]">Loading appointments...</p>
      </main>
    );
  }

  // --------------------------------------------------
  // DASHBOARD
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-[#FAF8F1]">
      {/* HEADER */}

      <header className="border-b border-[#E5E8E1] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-[#173F35]">
              Doctor Dashboard
            </h1>

            <p className="mt-1 text-sm text-[#687A73]">
              Manage appointments and availability
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-[#D9DED7] px-4 py-2 text-sm font-medium text-[#36594E] hover:bg-[#F1F4ED]"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ERROR */}

        {error && (
          <div className="mb-6 flex items-start justify-between gap-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <span>{error}</span>

            <button
              type="button"
              onClick={() => setError("")}
              className="font-semibold text-red-700 hover:text-red-900"
            >
              ×
            </button>
          </div>
        )}

        {/* STATS */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6">
            <p className="text-sm text-[#687A73]">Today's Appointments</p>

            <p className="mt-2 text-3xl font-bold text-[#173F35]">
              {todaysAppointments.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6">
            <p className="text-sm text-[#687A73]">Upcoming</p>

            <p className="mt-2 text-3xl font-bold text-[#173F35]">
              {upcomingAppointments.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E8E1] bg-white p-6">
            <p className="text-sm text-[#687A73]">Total Bookings</p>

            <p className="mt-2 text-3xl font-bold text-[#173F35]">
              {appointments.length}
            </p>
          </div>
        </div>

        {/* ==================================================
            AVAILABILITY MANAGEMENT
        ================================================== */}

        <section className="mt-10 rounded-2xl border border-[#E5E8E1] bg-white p-5 sm:p-6">
          <div>
            <h2 className="text-xl font-bold text-[#173F35]">
              Manage Availability
            </h2>

            <p className="mt-1 text-sm text-[#687A73]">
              Choose a date to customize available slots or block time.
              Custom availability affects only the selected date.
            </p>
          </div>

          {/* DATE PICKER */}

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr]">
            <div>
              <label
                htmlFor="availability-date"
                className="mb-2 block text-sm font-semibold text-[#36594E]"
              >
                Select date
              </label>

              <input
                id="availability-date"
                type="date"
                value={availabilityDate}
                min={todayString}
                onChange={(event) =>
                  setAvailabilityDate(event.target.value)
                }
                className="w-full rounded-xl border border-[#D9DED7] bg-white px-4 py-3 text-sm text-[#36594E] outline-none focus:border-[#173F35]"
              />

              {availabilityDate && (
                <div className="mt-3 rounded-xl bg-[#F5F7F2] p-3">
                  <p className="text-sm font-semibold text-[#173F35]">
                    {formatDate(availabilityDate)}
                  </p>

                  <p className="mt-1 text-xs text-[#687A73]">
                    {selectedDayName}
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-xl border border-[#E5E8E1] bg-[#FAF8F1] p-4">
              {availabilityLoading || blockedLoading ? (
                <p className="text-sm text-[#687A73]">
                  Loading availability...
                </p>
              ) : !availabilityDate ? (
                <p className="text-sm text-[#687A73]">
                  Select a date to manage availability.
                </p>
              ) : (
                <>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#E8F1EB] px-3 py-1 text-xs font-semibold text-[#36594E]">
                      {availabilitySource === "override"
                        ? "Custom availability"
                        : "Normal weekly schedule"}
                    </span>

                    {hasAvailabilityOverride && (
                      <span className="rounded-full bg-[#F2EEE1] px-3 py-1 text-xs font-semibold text-[#6B5B32]">
                        Date override active
                      </span>
                    )}

                    {isFullDayBlocked && (
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                        Full day blocked
                      </span>
                    )}
                  </div>

                  {weeklySchedule.length > 0 && (
                    <p className="mt-3 text-sm text-[#687A73]">
                      Normal schedule:{" "}
                      {weeklySchedule
                        .map(
                          (item) =>
                            `${formatTime(item.start_time)}–${formatTime(
                              item.end_time,
                            )}`,
                        )
                        .join(", ")}
                    </p>
                  )}

                  <p className="mt-2 text-xs text-[#687A73]">
                    {selectedSlots.length} available slot
                    {selectedSlots.length === 1 ? "" : "s"} selected
                    {" · "}
                    {blockedSlots.length} blocked slot
                    {blockedSlots.length === 1 ? "" : "s"}
                  </p>
                </>
              )}
            </div>
          </div>

          {availabilityDate && !availabilityLoading && (
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* CUSTOM AVAILABILITY */}

              <div className="rounded-2xl border border-[#E5E8E1] p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-bold text-[#173F35]">
                      Available slots
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#687A73]">
                      Select the slots patients can book on this date.
                      Saving creates a date-specific override.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={selectAllAvailabilitySlots}
                      className="rounded-lg border border-[#D9DED7] px-3 py-2 text-xs font-semibold text-[#36594E] hover:bg-[#F1F4ED]"
                    >
                      Select all
                    </button>

                    <button
                      type="button"
                      onClick={clearAllAvailabilitySlots}
                      className="rounded-lg border border-[#D9DED7] px-3 py-2 text-xs font-semibold text-[#36594E] hover:bg-[#F1F4ED]"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                {displaySlots.length === 0 ? (
                  <div className="mt-5 rounded-xl bg-[#FAF8F1] p-5 text-center">
                    <p className="text-sm font-medium text-[#36594E]">
                      No normal slots are configured for this day.
                    </p>

                    <p className="mt-1 text-xs text-[#687A73]">
                      You need to configure the weekly schedule in Supabase
                      before custom slots can be selected.
                    </p>
                  </div>
                ) : (
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {displaySlots.map((slot) => {
                      const selected = selectedSlots.includes(slot);
                      const blocked = blockedSlots.includes(slot);

                      return (
                        <button
                          key={`availability-${slot}`}
                          type="button"
                          onClick={() => toggleAvailabilitySlot(slot)}
                          className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                            selected
                              ? "border-[#173F35] bg-[#173F35] text-white"
                              : "border-[#D9DED7] bg-white text-[#687A73] hover:bg-[#F1F4ED]"
                          }`}
                        >
                          {formatTime(slot)}

                          {blocked && (
                            <span className="ml-1 text-[10px]">
                              · blocked
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={saveAvailability}
                    disabled={availabilitySaving || availabilityLoading}
                    className="rounded-xl bg-[#173F35] px-4 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {availabilitySaving
                      ? "Saving..."
                      : "Save custom availability"}
                  </button>

                  {hasAvailabilityOverride && (
                    <button
                      type="button"
                      onClick={resetAvailability}
                      disabled={availabilitySaving}
                      className="rounded-xl border border-[#D9DED7] px-4 py-3 text-sm font-semibold text-[#36594E] hover:bg-[#F1F4ED] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Reset to weekly schedule
                    </button>
                  )}
                </div>
              </div>

              {/* BLOCKED TIME */}

              <div className="rounded-2xl border border-[#E5E8E1] p-5">
                <div>
                  <h3 className="font-bold text-[#173F35]">
                    Block time
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#687A73]">
                    Prevent patients from booking the entire date or selected
                    time slots.
                  </p>
                </div>

                <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl border border-[#D9DED7] p-4">
                  <input
                    type="checkbox"
                    checked={isFullDayBlocked}
                    onChange={(event) =>
                      setIsFullDayBlocked(event.target.checked)
                    }
                    className="h-4 w-4"
                  />

                  <span>
                    <span className="block text-sm font-semibold text-[#36594E]">
                      Block entire day
                    </span>

                    <span className="mt-1 block text-xs text-[#687A73]">
                      No appointment can be booked on this date.
                    </span>
                  </span>
                </label>

                {!isFullDayBlocked && (
                  <>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={selectAllBlockedSlots}
                        className="rounded-lg border border-[#D9DED7] px-3 py-2 text-xs font-semibold text-[#36594E] hover:bg-[#F1F4ED]"
                      >
                        Block all
                      </button>

                      <button
                        type="button"
                        onClick={clearAllBlockedSlots}
                        className="rounded-lg border border-[#D9DED7] px-3 py-2 text-xs font-semibold text-[#36594E] hover:bg-[#F1F4ED]"
                      >
                        Clear blocked
                      </button>
                    </div>

                    {displaySlots.length === 0 ? (
                      <div className="mt-4 rounded-xl bg-[#FAF8F1] p-5 text-center">
                        <p className="text-sm text-[#687A73]">
                          No slots available to block.
                        </p>
                      </div>
                    ) : (
                      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {displaySlots.map((slot) => {
                          const blocked = blockedSlots.includes(slot);

                          return (
                            <button
                              key={`blocked-${slot}`}
                              type="button"
                              onClick={() => toggleBlockedSlot(slot)}
                              className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                                blocked
                                  ? "border-red-300 bg-red-50 text-red-700"
                                  : "border-[#D9DED7] bg-white text-[#687A73] hover:bg-[#F1F4ED]"
                              }`}
                            >
                              {formatTime(slot)}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={saveBlockedSettings}
                    disabled={blockedSaving || blockedLoading}
                    className="rounded-xl bg-[#173F35] px-4 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {blockedSaving ? "Saving..." : "Save blocked time"}
                  </button>

                  {(isFullDayBlocked || blockedSlots.length > 0) && (
                    <button
                      type="button"
                      onClick={clearBlockedSettings}
                      disabled={blockedSaving}
                      className="rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Remove all blocks
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ==================================================
            ALL APPOINTMENTS
        ================================================== */}

        <section className="mt-10">
          {/* TITLE + FILTERS */}

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#173F35]">
                All Appointments
              </h2>

              <p className="mt-1 text-sm text-[#687A73]">
                {filteredAppointments.length} appointment
                {filteredAppointments.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* SEARCH */}

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search patient..."
                className="w-full rounded-xl border border-[#D9DED7] bg-white px-4 py-3 text-sm text-[#36594E] outline-none placeholder:text-[#9AA7A1] focus:border-[#173F35] sm:w-64"
              />

              {/* DATE */}

              <select
                value={dateFilter}
                onChange={(event) => setDateFilter(event.target.value)}
                className="rounded-xl border border-[#D9DED7] bg-white px-4 py-3 text-sm text-[#36594E] outline-none focus:border-[#173F35]"
              >
                <option value="all">All Dates</option>

                {Array.from(
                  new Set(
                    appointments.map(
                      (appointment) => appointment.appointment_date,
                    ),
                  ),
                )
                  .sort()
                  .map((date) => (
                    <option key={date} value={date}>
                      {formatDate(date)}
                    </option>
                  ))}
              </select>

              {/* STATUS */}

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-[#D9DED7] bg-white px-4 py-3 text-sm text-[#36594E] outline-none focus:border-[#173F35]"
              >
                <option value="all">All Statuses</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* APPOINTMENT LIST */}

          <div className="mt-5 space-y-4">
            {filteredAppointments.length === 0 ? (
              <div className="rounded-2xl border border-[#E5E8E1] bg-white p-10 text-center">
                <p className="font-medium text-[#36594E]">
                  No appointments found.
                </p>

                <p className="mt-1 text-sm text-[#687A73]">
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              filteredAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  formatDate={formatDate}
                  formatTime={formatTime}
                  statusClass={statusClass}
                  updatingId={updatingId}
                  onStatusChange={updateAppointmentStatus}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

// ==================================================
// APPOINTMENT CARD
// ==================================================

const AppointmentCard = memo(function AppointmentCard({
  appointment,
  formatDate,
  formatTime,
  statusClass,
  updatingId,
  onStatusChange,
}: {
  appointment: Appointment;
  formatDate: (date: string) => string;
  formatTime: (time: string) => string;
  statusClass: (status: string) => string;
  updatingId: string | null;
  onStatusChange: (
    id: string,
    status: "cancelled" | "completed",
  ) => void;
}) {
  const isUpdating = updatingId === appointment.id;

  return (
    <div className="rounded-xl border border-[#E5E8E1] bg-white px-4 py-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* APPOINTMENT INFORMATION */}

        <div className="min-w-0 flex-1">
          {/* DATE / TIME / STATUS */}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-[#173F35]">
              {formatDate(appointment.appointment_date)}
            </span>

            <span className="font-semibold text-[#173F35]">
              {formatTime(appointment.appointment_time)}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClass(
                appointment.status,
              )}`}
            >
              {appointment.status}
            </span>
          </div>

          {/* PATIENT DETAILS */}

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-medium text-[#36594E]">
              {appointment.patient_name}
            </span>

            <span className="hidden text-[#C4CCC7] sm:inline">•</span>

            <span className="max-w-[260px] truncate text-sm text-[#687A73]">
              {appointment.patient_email}
            </span>

            <span className="hidden text-[#C4CCC7] sm:inline">•</span>

            <span className="text-sm text-[#687A73]">
              {appointment.patient_phone}
            </span>

            <span className="hidden text-[#C4CCC7] sm:inline">•</span>

            <span className="text-sm text-[#687A73]">
              Age {appointment.patient_age}
              {" · "}
              {appointment.patient_gender}
            </span>
          </div>
        </div>

        {/* ACTIONS */}

        <div className="flex shrink-0 flex-wrap gap-2">
          {/* JOIN */}

          {appointment.status === "confirmed" &&
            appointment.meeting_url && (
              <a
                href={appointment.meeting_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#173F35] px-3.5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              >
                Join
              </a>
            )}

          {/* COMPLETED */}

          {appointment.status === "confirmed" && (
            <button
              type="button"
              onClick={() =>
                onStatusChange(appointment.id, "completed")
              }
              disabled={isUpdating}
              className="rounded-lg border border-[#D9DED7] px-3.5 py-2 text-xs font-semibold text-[#36594E] transition-colors hover:bg-[#F1F4ED] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isUpdating ? "Updating..." : "Completed"}
            </button>
          )}

          {/* CANCEL */}

          {appointment.status === "confirmed" && (
            <button
              type="button"
              onClick={() =>
                onStatusChange(appointment.id, "cancelled")
              }
              disabled={isUpdating}
              className="rounded-lg border border-red-200 px-3.5 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
