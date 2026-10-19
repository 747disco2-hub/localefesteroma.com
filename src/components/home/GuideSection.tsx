import { Link } from "react-router-dom";
import { ArrowRight, Cake, PartyPopper, MapPin, Building } from "lucide-react";

const guides = [
  {
    icon: Cake,
    title: "Festa 18 Anni Roma",
    description:
      "Guida completa per organizzare i diciotto anni perfetti: location, budget, consigli e cosa evitare.",
    href: "/festa-18-anni-roma",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: PartyPopper,
    title: "Feste Private Roma",
    description:
      "Tutto quello che devi sapere per organizzare una festa privata a Roma: tipologie, costi e servizi inclusi.",
    href: "/feste-private-roma",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: MapPin,
    title: "Location Compleanni Roma",
    description:
      "Le migliori location per festeggiare un compleanno a Roma: dalla sala feste alla discoteca privata.",
    href: "/location-compleanni-roma",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Building,
    title: "Sala Feste Roma",
    description:
      "Come scegliere una sala feste a Roma: capienza, servizi, catering e tutto quello che devi considerare.",
    href: "/sala-feste-roma",
    color: "bg-accent/20 text-accent",
  },
];

export default function GuideSection() {
  return (
    <section id="guida" className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>Guide Complete per la Tua Festa</h2>
          <p className="mt-4 text-muted-foreground">
            Ogni tipologia di evento ha esigenze diverse. Scopri le nostre guide 
            approfondite per trovare la soluzione perfetta per te.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              to={guide.href}
              className="group bg-background rounded-xl p-6 lg:p-8 border border-border card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${guide.color} mb-4`}>
                <guide.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {guide.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {guide.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-primary font-medium">
                Leggi la guida
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
