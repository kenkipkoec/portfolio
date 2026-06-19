import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create email transporter - Configure with your email service
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please complete all fields.' }, { status: 400 });
    }

    // Log the contact submission
    console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() });

    // Send emails using Nodemailer
    try {
      // Send email to portfolio owner
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: 'itsmetrokenaki@gmail.com',
        subject: `New Contact from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p><em>Sent at: ${new Date().toISOString()}</em></p>
        `,
      });

      // Send confirmation email to sender
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: email,
        subject: 'Message Received - Ngetich Ken',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p>Best regards,<br>Ngetich Ken</p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails - still respond successfully
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Unable to submit form.' }, { status: 500 });
  }
}
