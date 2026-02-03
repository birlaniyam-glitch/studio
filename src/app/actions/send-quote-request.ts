'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { QuoteRequestSchema, type QuoteRequestInput } from '@/lib/schemas';

export async function sendQuoteRequest(input: QuoteRequestInput) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return { success: false, error: 'The email service is not configured.' };
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  const validatedFields = QuoteRequestSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid fields provided."
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  try {
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
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (exception) {
    console.error("Sending Exception:", exception);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
