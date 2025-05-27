import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  inquiryType: text("inquiry_type").notNull(),
  message: text("message").notNull(),
  privacyConsent: boolean("privacy_consent").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const clientRegistrations = pgTable("client_registrations", {
  id: serial("id").primaryKey(),
  // Client Information
  clientFirstName: text("client_first_name").notNull(),
  clientLastName: text("client_last_name").notNull(),
  clientDob: text("client_dob").notNull(),
  clientGender: text("client_gender"),
  insuranceId: text("insurance_id"),
  
  // Contact Information
  contactFirstName: text("contact_first_name").notNull(),
  contactLastName: text("contact_last_name").notNull(),
  relationship: text("relationship").notNull(),
  contactEmail: text("contact_email").notNull(),
  contactPhone: text("contact_phone").notNull(),
  
  // Services and Additional Info
  services: text("services").array(),
  specialNeeds: text("special_needs"),
  goals: text("goals"),
  registrationConsent: boolean("registration_consent").notNull(),
  hipaaConsent: boolean("hipaa_consent").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
});

export const insertClientRegistrationSchema = createInsertSchema(clientRegistrations).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertClientRegistration = z.infer<typeof insertClientRegistrationSchema>;
export type ClientRegistration = typeof clientRegistrations.$inferSelect;
