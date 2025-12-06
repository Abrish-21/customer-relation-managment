import { pgTable, text, timestamp, uuid, jsonb, bigserial } from "drizzle-orm/pg-core";

export const appointments = pgTable("appointments", {
  id: uuid("id").primaryKey().defaultRandom(),
  patientName: text("patient_name").notNull(),
  phone: text("phone").notNull(),
  startTs: timestamp("start_ts", { withTimezone: true }).notNull(),
  endTs: timestamp("end_ts", { withTimezone: true }).notNull(),
  status: text("status").notNull().default("scheduled"),
  notes: text("notes"),
  lastContactAttempt: timestamp("last_contact_attempt", { withTimezone: true }),
  lastTranscript: jsonb("last_transcript"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const appointmentAudit = pgTable("appointment_audit", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  appointmentId: uuid("appointment_id")
    .references(() => appointments.id, { onDelete: "cascade" }),
  actionBy: text("action_by"),
  actionType: text("action_type"),
  meta: jsonb("meta"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
