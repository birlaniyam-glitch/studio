'use server';

import 'dotenv/config';
import { z } from 'zod';
import { Resend } from 'resend';
import { QuoteRequestSchema, type QuoteRequestInput } from '@/lib/schemas';

export async function sendQuoteRequest(input: QuoteRequestInput) {
  console.log("Server Action 'sendQuoteRequest' started.");
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Server Action Error: RESEND_API_KEY is not found in process.env.");
    return { success: false, error: 'Configuration Error: The RESEND_API_KEY was not found. Please ensure the .env.local file is in the root directory and the server has been restarted.' };
  }

  if (apiKey.trim() === "") {
    console.error("Server Action Error: RESEND_API_KEY is an empty string.");
    return { success: false, error: 'Configuration Error: The RESEND_API_KEY is empty. Please provide a valid key in the .env.local file.' };
  }
  
  const resend = new Resend(apiKey);

  const validatedFields = QuoteRequestSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid fields provided."
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  try {
    console.log("Attempting to send email via Resend...");
    const { data, error } = await resend.emails.send({
      from: 'Birla Infra Projects <onboarding@resend.dev>',
      to: ['birlainfraprojects@gmail.com'],
      reply_to: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request Received</h2>
        <p>You have received a new quote request from your website.</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: `Resend Error: ${error.message}` };
    }

    console.log("Email sent successfully!");
    return { success: true, error: null };
  } catch (exception) {
    console.error("General Sending Exception:", exception);
    return { success: false, error: 'An unexpected server error occurred. Please try again.' };
  }
}
