import { users, contactInquiries, jobApplications, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type JobApplication, type InsertJobApplication } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getJobApplications(): Promise<JobApplication[]>;
  updateContactInquiry(id: number, updates: Partial<ContactInquiry>): Promise<ContactInquiry>;
  updateJobApplication(id: number, updates: Partial<JobApplication>): Promise<JobApplication>;
  deleteContactInquiry(id: number): Promise<void>;
  deleteJobApplication(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [inquiry] = await db
      .insert(contactInquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const [application] = await db
      .insert(jobApplications)
      .values(insertApplication)
      .returning();
    return application;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db.select().from(contactInquiries).orderBy(contactInquiries.createdAt);
  }

  async getJobApplications(): Promise<JobApplication[]> {
    return await db.select().from(jobApplications).orderBy(jobApplications.id);
  }

  async updateContactInquiry(id: number, updates: Partial<ContactInquiry>): Promise<ContactInquiry> {
    const [inquiry] = await db
      .update(contactInquiries)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(contactInquiries.id, id))
      .returning();
    return inquiry;
  }

  async updateJobApplication(id: number, updates: Partial<JobApplication>): Promise<JobApplication> {
    const [application] = await db
      .update(jobApplications)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(jobApplications.id, id))
      .returning();
    return application;
  }

  async deleteContactInquiry(id: number): Promise<void> {
    await db.delete(contactInquiries).where(eq(contactInquiries.id, id));
  }

  async deleteJobApplication(id: number): Promise<void> {
    await db.delete(jobApplications).where(eq(jobApplications.id, id));
  }
}

export const storage = new DatabaseStorage();
