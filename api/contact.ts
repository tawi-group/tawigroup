import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from './_lib/db.js';
import { emailService } from './_lib/email.js';
import { insertContactSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validatedData = insertContactSchema.parse(req.body);
    
    // Save to database
    const contact = await storage.createContact(validatedData);
    console.log('New contact submission saved to database:', contact.id);
    
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

    return res.status(200).json({ 
      success: true, 
      message: "Thank you for your message! We will get back to you within 24 hours.",
      id: contact.id,
      emailSent: notificationSent && confirmationSent
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors
      });
    }
    
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request"
    });
  }
}
