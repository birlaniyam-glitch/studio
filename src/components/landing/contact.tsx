"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from 'next/link';

export default function Contact() {
  const subject = "Request for Quotation";
  const body = `Dear Birla Infra Projects,

I am interested in your services and would like to request a quotation.

Project Details: [Please describe your project or requirements here]

Thank you,
[Your Name]
[Your Company, if applicable]
[Your Phone Number]`;

  const mailtoHref = `mailto:birlainfraprojects@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="py-12 md:py-24 bg-secondary">
      <div className="container grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6 text-secondary-foreground">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-secondary-foreground sm:text-4xl">
              Contact Us
            </h2>
            <p className="text-secondary-foreground/80">
              Ready to start your next project? Get in touch with our team of experts. We're here to answer your questions and provide a detailed quote.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+917303644927" className="block hover:underline">+91-7303644927</a>
                <a href="tel:+919711771150" className="block hover:underline">+91-9711771150</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:birlainfraprojects@gmail.com" className="hover:underline">
                  birlainfraprojects@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Delhi Office</h3>
                <p>Serving clients across the nation from our headquarters in Delhi, India.</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Get a Quote</CardTitle>
            <CardDescription>Click the button below to open a pre-filled email draft in your default email client.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center pt-6">
            <Button asChild size="lg">
              <Link href={mailtoHref}>
                <Mail className="mr-2 h-5 w-5" />
                Request a Quote via Email
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
