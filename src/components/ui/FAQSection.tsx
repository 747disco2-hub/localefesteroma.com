import { FAQItem } from "@/components/seo/FAQSchema";

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
    <section className={`section-padding faq-section ${className}`} aria-labelledby="faq-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-10 md:mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.18em] mb-3">Informazioni utili</p>
          <h2 id="faq-title" className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Risposte chiare su costi, disponibilità e organizzazione della tua festa privata a Roma.
          </p>
        </header>
        <div className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-foreground marker:content-none hover:text-primary">
                {faq.question}
                <span className="text-primary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
