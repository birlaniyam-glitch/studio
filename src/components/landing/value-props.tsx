import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Users, HardHat } from "lucide-react";

const valueProps = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: "Engineering Quality",
    description: "Our focus on robust, high-quality infrastructure ensures lasting performance and reliability for every project.",
  },
  {
    icon: <Users className="w-10 h-10 text-accent" />,
    title: "Client-Centric Approach",
    description: "We deliver tailored MEP solutions designed to meet your specific needs, ensuring high satisfaction and successful outcomes.",
  },
  {
    icon: <HardHat className="w-10 h-10 text-accent" />,
    title: "MEP Expertise",
    description: "With extensive experience in diverse commercial projects, our team brings unparalleled expertise to the table.",
  },
];

export default function ValueProps() {
  return (
    <section id="why-us" className="py-12 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Why Choose Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unwavering Commitment to Excellence</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We combine deep industry knowledge with a client-first mindset to deliver infrastructure that stands the test of time.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center text-center">
                <div className="mb-4">{prop.icon}</div>
                <CardTitle>{prop.title}</CardTitle>
                <CardDescription>{prop.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
