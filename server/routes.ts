import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertClientRegistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit inquiry" 
        });
      }
    }
  });

  // Client registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertClientRegistrationSchema.parse(req.body);
      const registration = await storage.createClientRegistration(validatedData);
      res.json({ success: true, registration });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit registration" 
        });
      }
    }
  });

  // Admin authentication
  app.post("/api/admin/login", async (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || "noahsarc2024";
    
    if (password === adminPassword) {
      const token = Buffer.from(`admin:${Date.now()}`).toString('base64');
      res.json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  });

  // Admin middleware
  const adminAuth = async (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: "Access denied" });
    }
    
    const token = authHeader.substring(7);
    
    try {
      const decoded = Buffer.from(token, 'base64').toString();
      if (decoded.startsWith('admin:')) {
        next();
      } else {
        res.status(401).json({ success: false, message: "Access denied" });
      }
    } catch (error) {
      res.status(401).json({ success: false, message: "Access denied" });
    }
  };

  // Protected admin routes
  app.get("/api/contact", adminAuth, async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  app.get("/api/registrations", adminAuth, async (req, res) => {
    try {
      const registrations = await storage.getClientRegistrations();
      res.json({ success: true, registrations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch registrations" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
