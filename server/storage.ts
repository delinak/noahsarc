import { users, contactInquiries, clientRegistrations, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type ClientRegistration, type InsertClientRegistration } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  createClientRegistration(registration: InsertClientRegistration): Promise<ClientRegistration>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getClientRegistrations(): Promise<ClientRegistration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactInquiries: Map<number, ContactInquiry>;
  private clientRegistrations: Map<number, ClientRegistration>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentRegistrationId: number;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.clientRegistrations = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentRegistrationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date() 
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async createClientRegistration(insertRegistration: InsertClientRegistration): Promise<ClientRegistration> {
    const id = this.currentRegistrationId++;
    const registration: ClientRegistration = { 
      ...insertRegistration, 
      id, 
      createdAt: new Date() 
    };
    this.clientRegistrations.set(id, registration);
    return registration;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getClientRegistrations(): Promise<ClientRegistration[]> {
    return Array.from(this.clientRegistrations.values());
  }
}

export const storage = new MemStorage();
