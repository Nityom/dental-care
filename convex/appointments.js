import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const normalizeTimeTo24h = (timeValue) => {
  const trimmed = String(timeValue || "").trim();

  if (/^([01]\d|2[0-3]):[0-5]\d$/.test(trimmed)) {
    return trimmed;
  }

  const match12h = trimmed.match(/^(\d{1,2}):([0-5]\d)\s*(AM|PM)$/i);
  if (!match12h) {
    throw new Error("Invalid time format. Use HH:mm (e.g. 09:30).");
  }

  const rawHour = Number(match12h[1]);
  const minute = match12h[2];
  const meridiem = match12h[3].toUpperCase();

  let hour = rawHour % 12;
  if (meridiem === "PM") hour += 12;

  return `${String(hour).padStart(2, "0")}:${minute}`;
};

export const getBookedSlots = query({
  args: {
    appointment_date: v.string(),
    doctor_name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const appointments = args.doctor_name
      ? await ctx.db
          .query("appointments")
          .withIndex("by_date_doctor_time", (q) =>
            q.eq("appointment_date", args.appointment_date).eq("doctor_name", args.doctor_name)
          )
          .collect()
      : await ctx.db
          .query("appointments")
          .withIndex("by_date", (q) => q.eq("appointment_date", args.appointment_date))
          .collect();

    const normalized = appointments
      .filter((appt) => appt.status !== "CANCELLED")
      .map((appt) => {
        try {
          return normalizeTimeTo24h(appt.appointment_time);
        } catch {
          return appt.appointment_time;
        }
      });

    return [...new Set(normalized)];
  },
});

export const createAppointment = mutation({
  args: {
    appointment_date: v.string(),
    appointment_time: v.string(),
    dental_problem: v.string(),
    doctor_name: v.optional(v.string()),
    full_name: v.string(),
    phone: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const normalizedTime = normalizeTimeTo24h(args.appointment_time);

    const existingAppointments = await ctx.db
      .query("appointments")
      .withIndex("by_date_doctor_time", (q) =>
        q.eq("appointment_date", args.appointment_date).eq("doctor_name", args.doctor_name)
      )
      .collect();

    const hasConflict = existingAppointments.some((appt) => {
      if (appt.status === "CANCELLED") return false;
      try {
        return (
          normalizeTimeTo24h(appt.appointment_time) === normalizedTime &&
          appt.doctor_name === args.doctor_name
        );
      } catch {
        return appt.appointment_time === normalizedTime && appt.doctor_name === args.doctor_name;
      }
    });

    if (hasConflict) {
      throw new Error("This time slot is already booked");
    }

    const now = Date.now();

    return await ctx.db.insert("appointments", {
      ...args,
      appointment_time: normalizedTime,
      created_at: now,
      updated_at: now,
      status: "SCHEDULED",
    });
  },
});
