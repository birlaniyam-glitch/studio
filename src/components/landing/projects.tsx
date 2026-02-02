import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "project-1",
    title: "Corporate HQ Electrical Grid",
    description: "Complete overhaul of the main electrical infrastructure for a high-rise corporate headquarters.",
    testimonial: "Birla's precision and attention to detail were second to none. A truly professional team.",
    client: "- CEO, TechCorp",
    imageHint: "electrical grid"
  },
  {
    id: "project-2",
    title: "City Hospital HVAC System",
    description: "Design and installation of a state-of-the-art, energy-efficient HVAC system for a multi-wing hospital.",
    testimonial: "The new system has drastically reduced our energy costs and improved air quality for patients and staff.",
    client: "- Facilities Manager, City General",
    imageHint: "hvac systems"
  },
  {
    id: "project-3",
    title: "Luxury Hotel Plumbing Network",
    description: "A complex plumbing and water management system for a 500-room luxury hotel.",
    testimonial: "They delivered on time and on budget, with flawless execution. Highly recommended.",
    client: "- Project Lead, Oasis Hotels",
    imageHint: "plumbing pipes"
  },
  {
    id: "project-4",
    title: "Data Center Cooling Solution",
    description: "Custom MEP solution for a Tier 4 data center, focusing on redundant cooling and power.",
    testimonial: "Reliability is everything for us. Birla Infra Projects delivered a system we can count on 24/7.",
    client: "- CTO, SecureData Inc.",
    imageHint: "data center"
  },
];

export default function Projects() {
  const projectImages = PlaceHolderImages.filter(p => projects.some(proj => proj.id === p.id));

  return (
    <section id="projects" className="py-12 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Our Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We take pride in our work. Here are a few examples of how we've helped our clients achieve their goals.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {projects.map((project, index) => {
                const image = projectImages.find(img => img.id === project.id);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                          {image && (
                            <div className="relative aspect-video w-full mb-4">
                              <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover rounded-t-lg"
                                data-ai-hint={image.imageHint}
                              />
                            </div>
                          )}
                          <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </CardContent>
                        <CardFooter className="bg-muted/50 p-4">
                           <blockquote className="text-sm italic">
                            "{project.testimonial}" <cite className="not-italic font-medium">{project.client}</cite>
                           </blockquote>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
