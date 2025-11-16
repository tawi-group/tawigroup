import 'dotenv/config';
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD
    ) {
      console.warn(
        'Email configuration missing. Email sending will be disabled.'
      );
      return;
    }

    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.transporter) {
      console.error('Email transporter not initialized. Skipping email send.');
      return false;
    }

    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: options.to,
        subject: options.subject,
        html: options.html,
      });
      console.log(`Email sent successfully to ${options.to}`);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async sendContactNotification(contact: {
    name: string;
    email: string;
    organization?: string;
    message: string;
    newsletter?: string;
  }): Promise<boolean> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1E372F; color: #B38629; padding: 20px; text-align: center; }
            .content { background-color: #f4f4f4; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1E372F; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${contact.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${contact.email}</div>
              </div>
              ${
                contact.organization
                  ? `
              <div class="field">
                <div class="label">Organization:</div>
                <div class="value">${contact.organization}</div>
              </div>
              `
                  : ''
              }
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${contact.message}</div>
              </div>
              <div class="field">
                <div class="label">Newsletter Subscription:</div>
                <div class="value">${
                  contact.newsletter === 'true' ? 'Yes' : 'No'
                }</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Tawi Group contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    return await this.sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || '',
      subject: `New Contact Form Submission from ${contact.name}`,
      html,
    });
  }

  async sendConfirmationEmail(contact: {
    name: string;
    email: string;
  }): Promise<boolean> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1E372F; color: #B38629; padding: 20px; text-align: center; }
            .content { background-color: #f4f4f4; padding: 20px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Tawi Group</h1>
            </div>
            <div class="content">
              <p>Dear ${contact.name},</p>
              <p>Thank you for reaching out to Tawi Group. We have received your message and will get back to you within 24 hours.</p>
              <p>Our team is committed to providing strategic consulting services that drive meaningful community transformation.</p>
              <p>Best regards,<br>The Tawi Group Team</p>
            </div>
            <div class="footer">
              <p>Tawi Group - Strategic Consulting for Political Leaders</p>
              <p>OBC Kitengela, Namanga Road</p>
            </div>
          </div>
        </body>
      </html>
    `;

    return await this.sendEmail({
      to: contact.email,
      subject: 'Thank you for contacting Tawi Group',
      html,
    });
  }
}

export const emailService = new EmailService();
