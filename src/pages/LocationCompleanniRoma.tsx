import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, X, MapPin, Star, Trophy, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/ui/FAQSection";
import FAQSchema from "@/components/seo/FAQSchema";
import internoSala from "@/assets/interno-sala.jpg";
import palchetto from "@/assets/palchetto-747.jpg";

const faqs = [
  {
    question: "Qual è la migliore location per compleanni a Roma?",
    answer:
      "Dipende dal tipo di festa. Per compleanni con ballo (18 anni, 30 anni, lauree), la scelta migliore è una discoteca privata come 747 Disco: impianto professionale, pista da ballo, pacchetti all-inclusive. Per feste familiari o bambini, meglio una sala feste o un ristorante.",
  },
  {
    question: "Quanto costa affittare una location per compleanno a Roma?",
    answer:
      "I prezzi variano molto: sale feste da €300, ristoranti con sala privata da €500, discoteche da €800-2.500. Ma attenzione: spesso il 'prezzo base' esclude catering, bevande e servizi. Al 747 Disco tutto è incluso da €1.590.",
  },
  {
    question: "Meglio una sala feste o una discoteca per un compleanno?",
    answer:
      "Sala feste: ideale per bambini e feste tranquille. Costa meno ma offre meno (spesso solo lo spazio). Discoteca: perfetta per chi vuole ballare. Costa di più ma include tutto (DJ, luci, audio professionale). Per 18 anni e feste giovanili, la discoteca vince sempre.",
  },
  {
    question: "Quali zone di Roma sono migliori per le location compleanni?",
    answer:
      "Ciampino e Roma Sud: ottimo rapporto qualità-prezzo, parcheggio facile, location ampie. Centro storico: atmosfera unica ma prezzi alti e parcheggio impossibile. EUR: buon compromesso. Parioli: location di prestigio, prezzi elevati.",
  },
  {
    question: "Cosa chiedere prima di prenotare una location?",
    answer:
      "Cinque domande fondamentali: 1) Cosa è incluso nel prezzo? 2) Posso portare catering esterno? 3) Quali sono gli orari e i costi extra? 4) C'è parcheggio? 5) Quali sono le politiche di cancellazione?",
  },
];

const locationTypes = [
  {
    name: "Discoteca Privata",
    ideal: "18 anni, lauree, compleanni adulti",
    pros: ["Impianto audio/luci professionale", "Pista da ballo vera", "Atmosfera da festa", "Pacchetti all-inclusive"],
    cons: ["Prezzo più alto", "Non adatta a bambini piccoli"],
    price: "€1.500 - €3.000",
    verdict: "La scelta migliore per chi vuole ballare",
  },
  {
    name: "Sala Feste",
    ideal: "Bambini, feste familiari",
    pros: ["Prezzo accessibile", "Flessibilità su catering", "Adatta a tutte le età"],
    cons: ["Impianto audio basic", "Spesso niente ballo", "Allestimento a carico tuo"],
    price: "€300 - €800",
    verdict: "Buona per feste senza ballo",
  },
  {
    name: "Ristorante con Sala",
    ideal: "Cene di compleanno, anniversari",
    pros: ["Cibo di qualità", "Gestione semplice", "Atmosfera elegante"],
    cons: ["Poco spazio per ballare", "Orari rigidi", "Focus sul cibo, non sulla festa"],
    price: "€40-80 a persona",
    verdict: "Perfetto se il cibo è la priorità",
  },
];

export default function LocationCompleanniRoma() {
  return (
    <>
      <SEOHead
        title="Location Compleanni Roma 2025 | Guida + La Migliore Scelta"
        description="Cerchi la location perfetta per un compleanno a Roma? Confronto tra discoteche, sale feste e ristoranti. Scopri perché 747 Disco è la scelta #1 per feste con ballo."
        canonical="/location-compleanni-roma"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src={internoSala} 
            alt="Interno 747 Disco Roma - location compleanni" 
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
            Location Compleanni <span className="text-primary">Roma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-4">
            La location sbagliata può rovinare anche la festa meglio organizzata.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Roma ha centinaia di location per compleanni. Il problema? Trovare quella giusta 
            per il TUO tipo di festa, senza sorprese sul prezzo e senza compromessi sulla qualità.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <img src={internoSala} alt="Interno sala 747 Disco" className="w-full aspect-video object-cover" />
            <img src={palchetto} alt="Palchetto con scritta 747 illuminata" className="w-full aspect-video object-cover" />
          </div>
        </div>
      </section>

      {/* Il Problema */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 p-6 bg-destructive/10 border border-destructive/30 mb-8">
            <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Gli errori più comuni</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Scegliere una location "bella nelle foto" senza visitarla</li>
                <li>• Non chiedere cosa è incluso nel prezzo (e scoprire costi extra dopo)</li>
                <li>• Prenotare una sala feste per una festa con ballo</li>
                <li>• Ignorare il problema parcheggio (i tuoi invitati ti ringrazieranno)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Confronto Location */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quale tipo di location fa per te?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ogni location ha pro e contro. Ecco un confronto onesto:
          </p>
          
          <div className="space-y-8">
            {locationTypes.map((loc) => (
              <div key={loc.name} className="bg-card border border-border p-6 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{loc.name}</h3>
                    <p className="text-sm text-primary">Ideale per: {loc.ideal}</p>
                  </div>
                  <span className="text-lg font-semibold text-foreground">{loc.price}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-3">Pro:</p>
                    <ul className="space-y-2">
                      {loc.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-3">Contro:</p>
                    <ul className="space-y-2">
                      {loc.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm font-medium text-primary">
                  → {loc.verdict}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Roma */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Le zone migliori a Roma
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary/10 border border-primary">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Ciampino / Roma Sud</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                La zona con il miglior rapporto qualità-prezzo. Location ampie, 
                parcheggio facile, prezzi competitivi. Dove si trova il 747 Disco.
              </p>
              <p className="text-xs text-primary font-medium">✓ Consigliata</p>
            </div>
            
            <div className="p-6 bg-background border border-border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-bold">Centro Storico</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Location affascinanti ma prezzi alle stelle. Parcheggio impossibile, 
                orari rigidi per restrizioni comunali.
              </p>
              <p className="text-xs text-muted-foreground">Bella ma poco pratica</p>
            </div>
            
            <div className="p-6 bg-background border border-border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-bold">EUR</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Buon compromesso tra accessibilità e qualità. 
                Alcune location interessanti, parcheggio discreto.
              </p>
              <p className="text-xs text-muted-foreground">Alternativa valida</p>
            </div>
            
            <div className="p-6 bg-background border border-border">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-bold">Parioli / Roma Nord</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Location di prestigio per chi ha budget elevato. 
                Ottima per eventi esclusivi, prezzi premium.
              </p>
              <p className="text-xs text-muted-foreground">Top di gamma, prezzi alti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            5 domande da fare PRIMA di prenotare
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "Cosa è incluso nel prezzo?", why: "Molte location pubblicizzano un prezzo base che esclude tutto. Chiedi sempre il costo 'chiavi in mano'." },
              { q: "Posso vedere la location prima di prenotare?", why: "Mai prenotare solo dalle foto. Una visita di 10 minuti ti evita sorprese." },
              { q: "Quali sono le regole su musica e orari?", why: "Alcune location hanno limiti di volume o orari di chiusura rigidi." },
              { q: "C'è parcheggio per gli invitati?", why: "A Roma il parcheggio può essere un incubo. Location con parcheggio = invitati felici." },
              { q: "Cosa succede se devo cancellare?", why: "Leggi le clausole di cancellazione PRIMA di pagare il deposito." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card border border-border">
                <p className="font-bold text-lg mb-2">{i + 1}. {item.q}</p>
                <p className="text-muted-foreground">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/10 border border-primary p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-8 w-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold">La nostra raccomandazione</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              Se stai cercando una location per un compleanno con ballo 
              (18 anni, 30 anni, laurea...), il <strong className="text-foreground">747 Disco</strong> è 
              la scelta che consigliamo. Zona Ciampino, parcheggio privato, pacchetti all-inclusive 
              da €1.590 con DJ, catering e open bar inclusi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+393343662827"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Chiama per Info
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/393343662827?text=Ciao!%20Cerco%20una%20location%20per%20un%20compleanno"
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
              to="/festa-18-anni-roma"
              className="p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Festa 18 Anni Roma</h3>
              <p className="text-sm text-muted-foreground">
                Guida specifica per organizzare i diciotto anni
              </p>
            </Link>
            <Link
              to="/sala-feste-roma"
              className="p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Sala Feste Roma</h3>
              <p className="text-sm text-muted-foreground">
                Quando una sala feste è la scelta giusta
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
