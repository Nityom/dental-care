import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  appointments: defineTable({
    appointment_date: v.string(),
    appointment_time: v.string(),
    created_at: v.float64(),
    dental_problem: v.string(),
    doctor_name: v.optional(v.string()),
    duration_minutes: v.optional(v.float64()),
    full_name: v.string(),
    is_offline: v.optional(v.boolean()),
    notes: v.optional(v.string()),
    phone: v.string(),
    reminder_minutes_before: v.optional(v.float64()),
    reminder_note: v.optional(v.string()),
    status: v.optional(
      v.union(v.literal("SCHEDULED"), v.literal("COMPLETED"), v.literal("CANCELLED"))
    ),
    updated_at: v.float64(),
  })
    .index("by_date", ["appointment_date"])
    .index("by_date_doctor_time", [
      "appointment_date",
      "doctor_name",
      "appointment_time",
    ])
    .index("by_date_time", ["appointment_date", "appointment_time"])
    .index("by_phone", ["phone"]),
});
