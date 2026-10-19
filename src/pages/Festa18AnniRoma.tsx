import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Star, PartyPopper, AlertTriangle, Calendar, Music, Camera, Utensils, Users } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/ui/FAQSection";
import FAQSchema from "@/components/seo/FAQSchema";
import ragazza18Posa from "@/assets/ragazza-18-posa.jpg";
import amici18 from "@/assets/18-anni-amici.jpg";
import lentoPapa from "@/assets/lento-papa.jpg";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quanto costa una festa di 18 anni a Roma?",
    answer:
      "Dipende da cosa vuoi. Una festa 'fai da te' con 50+ invitati costa facilmente €2.500-4.000 (location + catering + DJ + bevande + decorazioni). Al 747 Disco parti da €1.590 all-inclusive: tutto compreso, zero stress.",
  },
  {
    question: "Qual è la location migliore per una festa di 18 anni?",
    answer:
      "Per i 18 anni serve una discoteca privata, non una sala feste. I ragazzi vogliono ballare, musica alta, luci da club. Una sala con uno stereo attaccato non funziona. Serve impianto professionale, pista vera, atmosfera da festa.",
  },
  {
    question: "Quanti invitati per una festa di 18 anni?",
    answer:
      "Il numero ideale è 40-80 persone. Meno di 30 e l'atmosfera è piatta. Più di 100 e diventa caotico (e costoso). Al 747 Disco ospitiamo fino a 50 persone con i pacchetti standard, ma possiamo gestire gruppi più grandi su richiesta.",
  },
  {
    question: "Cosa non può mancare a una festa di 18 anni?",
    answer:
      "Cinque cose non negoziabili: 1) Pista da ballo vera, 2) DJ che sa cosa mettere, 3) Buffet abbondante, 4) Open bar (gestito responsabilmente per i minorenni), 5) Fotografo per immortalare tutto. Il resto è bonus.",
  },
  {
    question: "Con quanto anticipo prenotare per i 18 anni?",
    answer:
      "Minimo 2 mesi, idealmente 3. I sabati di primavera e autunno vanno via subito. Se hai una data specifica in mente, non aspettare: le location migliori si prenotano con largo anticipo.",
  },
];

// Schema.org LocalBusiness + Event structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://localefesteroma.com/#organization",
      "name": "747 Disco",
      "description": "Discoteca privata per feste di 18 anni e eventi a Roma. Pacchetti all-inclusive con DJ, catering e open bar.",
      "url": "https://localefesteroma.com",
      "telephone": "+39 3343662827",
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
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "20:00",
        "closes": "02:00"
      }
    },
    {
      "@type": "Service",
      "name": "Festa 18 Anni Roma",
      "description": "Organizzazione completa festa 18 anni con discoteca privata, DJ professionista, catering e open bar inclusi",
      "provider": {
        "@id": "https://localefesteroma.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Roma"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1590",
          "priceCurrency": "EUR",
          "minPrice": "1590",
          "maxPrice": "2590"
        }
      }
    }
  ]
};

export default function Festa18AnniRoma() {
  return (
    <>
      <SEOHead
        title="Festa 18 Anni Roma 2026 | Discoteca Privata All-Inclusive da €1.590"
        description="Organizza la festa di 18 anni perfetta a Roma. Discoteca privata esclusiva con DJ, catering completo, open bar e servizio fotografico. Pacchetti all-inclusive da €1.590 al 747 Disco Ciampino."
        canonical="/festa-18-anni-roma"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta name="keywords" content="festa 18 anni roma, locale 18 anni roma, discoteca 18 anni roma, organizzare festa 18 anni, location 18 anni roma, feste diciotto anni roma, compleanno 18 anni roma, party 18 anni roma" />
      </Helmet>
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src={ragazza18Posa} 
            alt="Ragazza festeggia 18 anni al 747 Disco Roma" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
            Festa 18 Anni <span className="text-primary">Roma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-4">
            I 18 anni si festeggiano una volta sola. Fallo nel modo giusto.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Niente sale parrocchiali, niente "feste in casa che tanto è uguale". 
            I diciotto anni meritano una vera festa: discoteca privata, musica che spacca, 
            amici che ballano fino a tardi.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <img src={amici18} alt="Festa 18 anni con amici al 747 Disco" className="w-full aspect-video object-cover" />
            <img src={lentoPapa} alt="Ballo padre figlia festa 18 anni" className="w-full aspect-video object-cover" />
            <img src={ragazza18Posa} alt="Festeggiata 18 anni in posa" className="w-full aspect-video object-cover" />
          </div>
        </div>
      </section>

      {/* Il Problema */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 p-6 bg-destructive/10 border border-destructive/30 mb-8">
            <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Gli errori che rovinano i 18 anni</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Affittare una "sala feste" con impianto audio da karaoke</li>
                <li>• Sottovalutare il budget e dover tagliare sul cibo o le bevande</li>
                <li>• Prenotare troppo tardi e accontentarsi di quello che resta</li>
                <li>• Pensare che "tanto ai ragazzi basta poco" (spoiler: non è vero)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Cosa serve per una festa di 18 anni che spacca
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Una VERA discoteca, non una sala con luci",
                desc: "Pista da ballo vera, impianto audio professionale (non casse bluetooth), luci stroboscopiche, macchina del fumo. L'atmosfera fa il 50% della festa."
              },
              {
                title: "DJ che sa quello che fa",
                desc: "Non il cugino con Spotify. Un DJ professionista che legge la pista, sa quando pompare e quando rallentare, e ha l'attrezzatura giusta."
              },
              {
                title: "Cibo abbondante (non 3 pizzette a testa)",
                desc: "I ragazzi ballano, sudano, hanno fame. Un buffet scarso rovina tutto. Servono quantità generose e varietà."
              },
              {
                title: "Open bar gestito bene",
                desc: "Bevande per tutti, ma con responsabilità. Staff che sa gestire i minorenni, niente eccessi, divertimento sicuro."
              },
              {
                title: "Fotografo per i ricordi",
                desc: "Le foto fatte col telefono in discoteca vengono sempre male. Un fotografo con flash professionale cattura momenti che resteranno per sempre."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-card border border-border">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Quando iniziare a organizzare</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { time: "3 mesi prima", task: "Scegli la data e prenota la location. Le migliori vanno via subito." },
              { time: "2 mesi prima", task: "Definisci il pacchetto, conferma il numero di invitati stimato." },
              { time: "1 mese prima", task: "Manda gli inviti (WhatsApp va benissimo), raccogli conferme." },
              { time: "2 settimane prima", task: "Numero definitivo invitati, ultime conferme con la location." },
              { time: "1 settimana prima", task: "Playlist preferite al DJ, dettagli torta, relax." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-background border border-border">
                <span className="font-bold text-primary whitespace-nowrap">{item.time}</span>
                <span className="text-muted-foreground">{item.task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/10 border border-primary p-8 md:p-12 text-center">
            <PartyPopper className="h-16 w-16 text-primary mx-auto mb-6" />
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Vuoi una festa di 18 anni che spacca?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Al <strong className="text-foreground">747 Disco</strong> abbiamo organizzato centinaia 
              di feste di 18 anni. Sappiamo esattamente cosa funziona. Pacchetti all-inclusive 
              da €1.590: discoteca privata, DJ, catering, open bar, foto. Tu porti gli invitati, 
              noi pensiamo a tutto il resto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+393343662827"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Chiama Ora
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20organizzare%20una%20festa%20di%2018%20anni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-lg font-semibold hover:bg-[#128C7E] transition-colors"
              >
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      {/* Related Links */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Approfondisci</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/feste-private-roma"
              className="p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Feste Private Roma</h3>
              <p className="text-sm text-muted-foreground">
                Guida completa alle feste private nella capitale
              </p>
            </Link>
            <Link
              to="/location-compleanni-roma"
              className="p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Location Compleanni Roma</h3>
              <p className="text-sm text-muted-foreground">
                Confronto tra le migliori location per compleanni
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
