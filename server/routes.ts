import 'dotenv/config';
import type { Express } from 'express';
import { createServer, type Server } from 'http';
import { storage } from './storage';
import { emailService } from './email';
import { insertContactSchema } from '@shared/schema';
import { z } from 'zod';

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for production monitoring
  app.get('/api/health', (req, res) => {
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
    });
  });

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      // Save to database
      const contact = await storage.createContact(validatedData);
      console.log('New contact submission saved to database:', contact);

      // Send notification email to Tawi Group
      const notificationSent = await emailService.sendContactNotification({
        name: validatedData.name,
        email: validatedData.email,
        organization: validatedData.organization,
        message: validatedData.message,
        newsletter: validatedData.newsletter,
      });

      // Send confirmation email to the user
      const confirmationSent = await emailService.sendConfirmationEmail({
        name: validatedData.name,
        email: validatedData.email,
      });

      res.json({
        success: true,
        message:
          'Thank you for your message! We will get back to you within 24 hours.',
        id: contact.id,
        emailSent: notificationSent && confirmationSent,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({
          success: false,
          message: 'An error occurred while processing your request',
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get('/api/contacts', async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching contacts',
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
