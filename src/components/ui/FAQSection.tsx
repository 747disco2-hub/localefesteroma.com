import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema, { FAQItem } from "@/components/seo/FAQSchema";

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

export default function FAQSection({
  title = "Domande Frequenti",
  faqs,
  className = "",
}: FAQSectionProps) {
  return (
    <section className={`section-padding ${className}`}>
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center mb-10">{title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
