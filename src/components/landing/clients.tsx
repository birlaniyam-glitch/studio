
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const clients = [
  {
    id: "client-godrej",
    name: "Godrej & Boyce Mfg Co Ltd",
  },
];

export default function Clients() {
  const clientImages = PlaceHolderImages.filter(p => clients.some(c => c.id === p.id));

  return (
    <section id="clients" className="py-12 md:py-24 bg-background border-y border-border/40">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Our Clientele
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud to partner with esteemed organizations like Godrej & Boyce to deliver world-class MEP infrastructure.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {clients.map((client) => {
            const image = clientImages.find(img => img.id === client.id);
            return (
              <div key={client.id} className="group relative flex flex-col items-center transition-all duration-300">
                <div className="relative h-24 w-64 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                  {image ? (
                    <Image
                      src={image.imageUrl}
                      alt={client.name}
                      fill
                      className="object-contain"
                      data-ai-hint={image.imageHint}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full font-bold text-xl text-muted-foreground">
                       {client.name}
                    </div>
                  )}
                </div>
                <span className="mt-4 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
