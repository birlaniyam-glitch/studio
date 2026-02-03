'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { QuoteRequestSchema, type QuoteRequestInput } from '@/lib/schemas';
import dotenv from 'dotenv';
import path from 'path';


export async function sendQuoteRequest(input: QuoteRequestInput) {
  console.log("Server Action 'sendQuoteRequest' started.");
  
  // Explicitly load .env.local for debugging
  const envPath = path.resolve(process.cwd(), '.env.local');
  const result = dotenv.config({ path: envPath });

  if (result.error) {
    console.log(`Dotenv: Attempted to load .env.local from ${envPath}`);
    console.error('Dotenv Error:', result.error);
  } else {
    console.log(`Dotenv: Successfully loaded .env.local from ${envPath}`);
    console.log('Dotenv: Parsed variables:', result.parsed ? Object.keys(result.parsed) : 'None');
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    console.error("Configuration Error: RESEND_API_KEY is missing, empty, or not loaded correctly.");
    console.log("Value of process.env.RESEND_API_KEY:", `'${apiKey}'`);
    console.log("To confirm, here are some environment variables Next.js can see on the server:");
    console.log(Object.keys(process.env).filter(key => key.startsWith('RESEND_') || key.startsWith('NEXT_') || key.startsWith('NODE_')));
    
    let errorMessage = 'Configuration Error: The email service is not configured correctly.';
    if (!apiKey) {
      errorMessage = 'Configuration Error: The RESEND_API_KEY was not found. Please ensure the .env.local file is in the root directory and the server has been restarted.';
    } else if (apiKey.trim() === '') {
      errorMessage = 'Configuration Error: The RESEND_API_KEY is empty. Please provide a valid key in the .env.local file.';
    }
    
    return { success: false, error: errorMessage };
  }
  
  const resend = new Resend(apiKey);

  const validatedFields = QuoteRequestSchema.safeParse(input);

  if (!validatedFields.success) {
    console.log("Server Action Error: Zod validation failed.", validatedFields.error.flatten());
    return {
      success: false,
      error: "Invalid fields provided. Please check your input."
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

    console.log("Email sent successfully!", data);
    return { success: true, error: null };
  } catch (exception) {
    console.error("General Sending Exception:", exception);
    return { success: false, error: 'An unexpected server error occurred. Please try again.' };
  }
}
