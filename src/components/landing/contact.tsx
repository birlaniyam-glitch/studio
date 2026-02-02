import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
               <div className="grid gap-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
