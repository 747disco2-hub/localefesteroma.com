import SEOHead from "@/components/seo/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import PackagesSection from "@/components/home/PackagesSection";
import LocationSection from "@/components/home/LocationSection";
import GallerySection from "@/components/home/GallerySection";
import VideoSection from "@/components/home/VideoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/ui/FAQSection";
import FAQSchema from "@/components/seo/FAQSchema";
import { Link } from "react-router-dom";
import { ArrowRight, PartyPopper, Users, MapPin, Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";

const homeFaqs = [
  {
    question: "Quanto costa affittare il 747 Disco per una festa privata?",
    answer:
      "I nostri pacchetti partono da €1.590 per il Menu 7 (promo lun-gio, fino a 40 persone) e arrivano a €2.590 per il Menu 7-4-7 all-inclusive fino a 50 persone. Tutto è incluso: location, DJ, catering, open bar e servizio fotografico.",
  },
  {
    question: "Dove si trova il 747 Disco?",
    answer:
      "747 Disco si trova in zona Ciampino, a Roma Sud. La posizione è strategica, facilmente raggiungibile e con ampio parcheggio disponibile per tutti gli ospiti.",
  },
  {
    question: "Posso organizzare una festa di 18 anni al 747 Disco?",
    answer:
      "Assolutamente sì! Le feste di 18 anni sono il nostro core business. Gestiamo correttamente la presenza di minorenni con politiche chiare sugli alcolici e personale formato.",
  },
  {
    question: "Cosa include il pacchetto all-inclusive?",
    answer:
      "I nostri pacchetti includono: location esclusiva (nessun estraneo), DJ professionista, impianto audio/luci, buffet completo, open bar, servizio fotografico, allestimento e pulizia finale.",
  },
  {
    question: "Con quanto anticipo devo prenotare?",
    answer:
      "Per weekend e periodi festivi, consigliamo di prenotare almeno 2-3 mesi prima. Per date infrasettimanali o periodi meno richiesti, 3-4 settimane possono essere sufficienti.",
  },
  {
    question: "Quanti invitati posso portare?",
    answer:
      "I nostri pacchetti standard sono per 40-50 persone. Per gruppi più numerosi, contattaci per un preventivo personalizzato.",
  },
];

const guideLinks = [
  {
    icon: PartyPopper,
    title: "Festa 18 Anni Roma",
    description: "Guida completa per organizzare la festa dei 18 anni perfetta",
    href: "/festa-18-anni-roma",
  },
  {
    icon: Users,
    title: "Feste Private Roma", 
    description: "Tutto sulle feste private: tipologie, costi e location",
    href: "/feste-private-roma",
  },
  {
    icon: MapPin,
    title: "Location Compleanni",
    description: "Come scegliere la location ideale per il tuo compleanno",
    href: "/location-compleanni-roma",
  },
  {
    icon: Calendar,
    title: "Sala Feste Roma",
    description: "Confronto tra sale feste e discoteche private",
    href: "/sala-feste-roma",
  },
];

// Schema.org structured data for LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://localefesteroma.com/#organization",
  "name": "747 Disco - Locale Feste Roma",
  "description": "Discoteca privata per feste di 18 anni, compleanni ed eventi a Roma. Pacchetti all-inclusive con DJ, catering e open bar da €1.590.",
  "url": "https://localefesteroma.com",
  "telephone": "+39 3343662827",
  "areaServed": ["Roma", "Ciampino", "Castelli Romani"],
  "knowsAbout": ["Feste di 18 anni", "Feste private", "Compleanni", "Eventi privati"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Viale J. F. Kennedy, 131",
    "addressLocality": "Ciampino",
    "addressRegion": "RM",
    "postalCode": "00043",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.8006",
    "longitude": "12.5942"
  },
  "priceRange": "€€",
  "image": "https://localefesteroma.com/og-image.jpg",
  "sameAs": [],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday", "Sunday"],
      "opens": "20:00",
      "closes": "02:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pacchetti Feste",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Menu 7 - Pacchetto Base",
        "price": "1590",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Menu 7-4 - Premium",
        "price": "2390",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Menu 7-4-7 - All Inclusive VIP",
        "price": "2590",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function Index() {
  return (
    <>
      <SEOHead
        title="Locale Feste Roma | 747 Disco - Discoteca Privata Feste 18 Anni Ciampino"
        description="Cerchi un locale per feste a Roma? 747 Disco è la discoteca privata per feste 18 anni, compleanni ed eventi. Pacchetti all-inclusive da €1.590 con DJ, catering e open bar. Zona Ciampino."
        canonical="/"
      />
      <FAQSchema faqs={homeFaqs} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta name="keywords" content="locale feste roma, discoteca privata roma, feste 18 anni roma, sala feste roma, location compleanni roma, 747 disco, feste private roma, affitto locale feste roma" />
      </Helmet>
      <HeroSection />
      
      {/* Guide Section - SEO Hub */}
      <section className="py-20 bg-card section-deferred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
              Guide <span className="text-primary">Feste Roma</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tutto quello che devi sapere per organizzare la tua festa perfetta a Roma
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guideLinks.map((guide) => (
              <Link
                key={guide.href}
                to={guide.href}
                className="group rounded-xl bg-background border border-border p-6 hover:border-primary hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,0,0,0.18)] transition-all duration-300"
              >
                <guide.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {guide.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  Scopri di più
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />
      <VideoSection />
      <GallerySection />
      <PackagesSection />
      <TestimonialsSection />
      <FAQSection faqs={homeFaqs} className="bg-card" />
      <ContactSection />
    </>
  );
}
