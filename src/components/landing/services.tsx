import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    id: "service-tailored",
    title: "Tailored Projects",
    description: "Custom-engineered solutions designed to meet the unique demands of your commercial utility projects.",
    imageHint: "engineering blueprint"
  },
  {
    id: "service-mep",
    title: "Efficient MEP Systems",
    description: "We deliver systems optimized for peak performance and streamlined operations, ensuring long-term efficiency.",
    imageHint: "hvac systems"
  },
  {
    id: "service-support",
    title: "Dedicated Support",
    description: "Our team provides seamless integration and continuous project support to drive improvement and success.",
    imageHint: "construction support"
  },
];

export default function Services() {
  const serviceImages = PlaceHolderImages.filter(p => services.some(s => s.id === p.id));

  return (
    <section id="services" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive MEP Solutions</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From initial design to final implementation, we offer a complete suite of services to ensure your project's success.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 py-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {services.map((service) => {
            const image = serviceImages.find(img => img.id === service.id);
            return (
              <Card key={service.title} className="h-full overflow-hidden">
                {image && (
                   <div className="relative h-48 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
