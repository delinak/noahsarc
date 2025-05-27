import { users, contactInquiries, clientRegistrations, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type ClientRegistration, type InsertClientRegistration } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  createClientRegistration(registration: InsertClientRegistration): Promise<ClientRegistration>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getClientRegistrations(): Promise<ClientRegistration[]>;
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

  async createClientRegistration(insertRegistration: InsertClientRegistration): Promise<ClientRegistration> {
    const [registration] = await db
      .insert(clientRegistrations)
      .values(insertRegistration)
      .returning();
    return registration;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db.select().from(contactInquiries).orderBy(contactInquiries.createdAt);
  }

  async getClientRegistrations(): Promise<ClientRegistration[]> {
    return await db.select().from(clientRegistrations).orderBy(clientRegistrations.createdAt);
  }
}

export const storage = new DatabaseStorage();
