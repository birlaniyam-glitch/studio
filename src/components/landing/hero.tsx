import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 container max-w-4xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          We build top-tier commercial utility (MEP) infrastructure.
        </h1>
        <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl">
          Delivering robust, high-quality engineering infrastructure for lasting performance.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
