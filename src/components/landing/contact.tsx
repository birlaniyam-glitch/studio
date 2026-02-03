"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QuoteRequestSchema, type QuoteRequestInput } from "@/app/actions/send-quote-request";
import { sendQuoteRequest } from "@/app/actions/send-quote-request";

export default function Contact() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<QuoteRequestInput>({
    resolver: zodResolver(QuoteRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: QuoteRequestInput) {
    startTransition(async () => {
      try {
        const result = await sendQuoteRequest(values);

        if (result.success) {
          toast({
            title: "Request Sent!",
            description: "Thank you for your interest. We'll be in touch shortly.",
          });
          form.reset();
        } else {
          throw new Error(result.error || "An unknown error occurred.");
        }
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message || "Could not send your request. Please try again.",
        });
      }
    });
  }

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
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <Loader2 className="animate-spin" /> : "Submit Request"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
