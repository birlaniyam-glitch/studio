import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the advantages of integrated MEP systems?",
    answer: "Integrated MEP (Mechanical, Electrical, and Plumbing) systems ensure that all critical building components work together harmoniously. This leads to better performance, greater energy efficiency, lower operational costs, and simplified maintenance over the building's lifecycle.",
  },
  {
    question: "How do you ensure client support throughout a project?",
    answer: "We assign a dedicated project manager to each client, providing a single point of contact from start to finish. Our client-centric approach includes regular progress updates, transparent communication, and post-completion support to ensure your total satisfaction.",
  },
  {
    question: "Do you collaborate on projects outside your Delhi office?",
    answer: "Yes, while our main office is in Delhi, we have the capability and experience to manage and execute projects across India. We leverage technology and a flexible workforce to collaborate effectively regardless of location.",
  },
  {
    question: "What is a general overview of your services?",
    answer: "Birla Infra Projects specializes in the design, installation, and maintenance of commercial utility infrastructure. This includes HVAC systems, electrical grids, power distribution, lighting, plumbing, water management, and fire safety systems for a wide range of commercial properties.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-24">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Need Answers?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
