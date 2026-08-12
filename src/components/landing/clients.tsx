
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
    <section id="clients" className="py-16 md:py-24 bg-background border-y border-border/40 w-full">
      <div className="w-full px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground font-medium">
              Our Clientele
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Trusted by Industry Leaders
            </h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We are proud to partner with esteemed organizations to deliver world-class MEP infrastructure across India.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {clients.map((client) => {
            const image = clientImages.find(img => img.id === client.id);
            return (
              <div key={client.id} className="group relative flex flex-col items-center transition-all duration-300">
                <div className="relative h-32 w-64 md:h-40 md:w-80 transition-all duration-500 hover:scale-105">
                  {image ? (
                    <Image
                      src={image.imageUrl}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-ai-hint={image.imageHint}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full font-bold text-2xl text-muted-foreground border-2 border-dashed border-muted rounded-xl">
                       {client.name}
                    </div>
                  )}
                </div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="text-lg font-bold text-primary">
                    {client.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
