import { CalendarCheck, Check, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import FAQSchema from "@/components/seo/FAQSchema";
import FAQSection from "@/components/ui/FAQSection";
import festaLaurea from "@/assets/festa-laurea.jpg";
import genteDiverte from "@/assets/gente-diverte-3.jpg";

const faqs = [
  { question: "Quanto costa una festa per teenagers al 747 Disco?", answer: "Il Pacchetto Teen costa €899 per 4 ore, dalle 14:30 alle 18:30, e include fino a 30 ragazzi. Per ogni invitato oltre i 30 è previsto un supplemento di €10." },
  { question: "Per quali età è adatta la festa Teen?", answer: "La formula è pensata per feste di 13, 14, 15, 16 e 17 anni, con un’organizzazione adatta a ragazzi e famiglie." },
  { question: "Cosa comprende il Pacchetto Teen?", answer: "Comprende location in esclusiva, buffet dolce e salato, open bar analcolico, torta, DJ set e animazione con SIAE inclusa, oltre a un event planner dedicato." },
  { question: "È possibile personalizzare la festa?", answer: "Sì. Tema, decorazioni, torta e dettagli del buffet possono essere concordati in anticipo con il nostro team." },
];

const inclusions = [
  "Location privata in esclusiva",
  "Fino a 30 ragazzi inclusi",
  "Tramezzini, bruschettine e paninetti misti",
  "Pizzette rustiche e margherita",
  "Open bar analcolico: succhi e bibite",
  "Torta a scelta e brindisi",
  "DJ set e animazione con SIAE inclusa",
  "Event planner dedicato",
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "name": "Feste per Teenagers Roma", "description": "Feste private per ragazzi dai 13 ai 17 anni a Ciampino, con location esclusiva, DJ, buffet e open bar analcolico.", "provider": { "@id": "https://localefesteroma.com/#organization" }, "areaServed": [{ "@type": "City", "name": "Roma" }, { "@type": "City", "name": "Ciampino" }], "audience": { "@type": "PeopleAudience", "suggestedMinAge": 13, "suggestedMaxAge": 17 }, "offers": { "@type": "Offer", "url": "https://localefesteroma.com/feste-per-teenagers-roma", "price": "899", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "description": "Pacchetto Teen: 4 ore, fino a 30 ragazzi inclusi." } },
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://localefesteroma.com/" }, { "@type": "ListItem", "position": 2, "name": "Feste per Teenagers Roma", "item": "https://localefesteroma.com/feste-per-teenagers-roma" }] },
  ],
};

export default function FesteTeenagersRoma() {
  return (
    <>
      <SEOHead title="Feste Teenagers Roma: 13, 14, 15, 16 e 17 Anni | 747 Disco" description="Feste per teenagers a Roma e Ciampino: location privata, DJ set, buffet, open bar analcolico e torta. Pacchetto Teen da €899 fino a 30 ragazzi." canonical="/feste-per-teenagers-roma" />
      <FAQSchema faqs={faqs} />
      <Helmet>
        <meta name="keywords" content="feste teenagers roma, festa 13 anni roma, festa 14 anni roma, festa 15 anni roma, festa 16 anni roma, festa 17 anni roma, location feste minorenni roma, festa adolescenti roma, discoteca privata teenagers roma" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <img src={festaLaurea} alt="Ragazzi festeggiano una festa privata al 747 Disco" className="absolute inset-0 h-full w-full object-cover opacity-35" fetchPriority="high" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">13 · 14 · 15 · 16 · 17 anni</p>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl">Feste per teenagers a Roma.<br /><span className="text-primary">In esclusiva, come le immaginano loro.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">Un pomeriggio di musica, amici e divertimento in una discoteca privata a Ciampino. Organizzato con attenzione ai ragazzi e tranquillità per i genitori.</p>
          <a href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20informazioni%20sul%20Pacchetto%20Teen%20da%20899%20euro" target="_blank" rel="noopener noreferrer" className="hero-cta-primary mt-8"><CalendarCheck className="h-5 w-5" /> Verifica disponibilità</a>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Pacchetto Teen</p>
            <h2 className="mt-3 text-4xl">Una festa completa, con un prezzo chiaro.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">La formula pensata per una festa di 4 ore, dalle 14:30 alle 18:30. Tutto è già organizzato: voi pensate agli invitati.</p>
            <div className="mt-7 flex items-end gap-3"><span className="text-6xl font-bold text-primary">€899</span><span className="pb-2 text-muted-foreground">fino a 30 ragazzi</span></div>
            <p className="mt-2 text-sm text-muted-foreground">Persona extra: €10 · Pacchetto base di 4 ore</p>
            <a href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20personalizzare%20una%20festa%20Teen" target="_blank" rel="noopener noreferrer" className="hero-cta-secondary mt-8"><MessageCircle className="h-5 w-5" /> Personalizza la festa</a>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-background p-7 md:p-9">
            <h3 className="text-2xl">Cosa include</h3>
            <ul className="mt-6 space-y-3">
              {inclusions.map((item) => <li key={item} className="flex gap-3 text-foreground/85"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <img src={genteDiverte} loading="lazy" decoding="async" alt="Gruppo di ragazzi durante una festa al 747 Disco" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Per ragazzi, con criterio</p>
            <h2 className="mt-3 text-4xl">Libertà per loro. Serenità per voi.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">L’ambiente è riservato al vostro gruppo e il programma è costruito insieme. Musica, buffet e animazione hanno il ritmo giusto per una festa Teen, con un referente presente per ogni dettaglio.</p>
            <div className="mt-7 flex items-center gap-3 text-foreground"><ShieldCheck className="h-6 w-6 text-primary" /><span>Location privata e organizzazione dedicata</span></div>
            <div className="mt-4 flex items-center gap-3 text-foreground"><Users className="h-6 w-6 text-primary" /><span>Fino a 30 ragazzi inclusi nel pacchetto base</span></div>
          </div>
        </div>
      </section>
      <section className="bg-card py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Feste 13–17 anni a Roma</p>
          <h2 className="mt-3 text-4xl">La formula giusta per una festa di adolescenti.</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
            <p>Organizzare una festa per teenagers a Roma significa trovare un luogo che faccia sentire i ragazzi protagonisti e che sia semplice da gestire per i genitori. Al 747 Disco il gruppo ha una location riservata a Ciampino, musica, buffet e un programma chiaro già definito.</p>
            <p>Il Pacchetto Teen è indicato per feste di 13, 14, 15, 16 e 17 anni: si svolge nel pomeriggio, include bevande analcoliche e può essere personalizzato con tema, torta e dettagli decorativi. Per una festa di maggiore età, scopri anche la nostra <Link to="/festa-18-anni-roma" className="text-primary underline underline-offset-4">pagina dedicata alle feste di 18 anni a Roma</Link>.</p>
            <p>La posizione in Roma Sud, vicino a Ciampino, permette agli invitati di raggiungere la location con facilità. Prima di prenotare puoi richiedere disponibilità e fissare un appuntamento per vedere gli spazi dal vivo.</p>
          </div>
        </div>
      </section>
      <FAQSection title="Domande sulle feste per teenagers" faqs={faqs} className="bg-card" />
    </>
  );
}
