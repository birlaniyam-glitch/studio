'use server';

import { z } from 'zod';
import { Resend } from 'resend';

export const QuoteRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type QuoteRequestInput = z.infer<typeof QuoteRequestSchema>;

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
    await resend.emails.send({
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

    return { success: true, error: null };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
}
