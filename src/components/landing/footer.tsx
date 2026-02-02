import Link from "next/link";
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
             <Link href="#" className="flex items-center">
              <Image src="/logo.png" alt="Birla Infra Projects Logo" width={80} height={80} />
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Engineering excellence in commercial utility and MEP infrastructure.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Services</Link></li>
              <li><Link href="#projects" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Projects</Link></li>
              <li><Link href="#faq" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">FAQ</Link></li>
              <li><Link href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+917303644927" className="block hover:underline text-primary-foreground/70 hover:text-primary-foreground">+91-7303644927</a>
                  <a href="tel:+919711771150" className="block hover:underline text-primary-foreground/70 hover:text-primary-foreground">+91-9711771150</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:birlainfraprojects@gmail.com" className="text-sm hover:underline text-primary-foreground/70 hover:text-primary-foreground">birlainfraprojects@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/70">Delhi Office, India</p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
             <ul className="space-y-2">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Birla Infra Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
