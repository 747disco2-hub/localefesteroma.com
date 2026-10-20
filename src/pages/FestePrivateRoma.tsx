import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Crown, Users, Music, Utensils, PartyPopper, ShieldCheck, Clock } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/ui/FAQSection";
import FAQSchema from "@/components/seo/FAQSchema";
import festaLaurea from "@/assets/festa-laurea.jpg";
import festa30 from "@/assets/festa-30-anni.jpg";
import genteDiverte from "@/assets/gente-diverte-3.jpg";

const faqs = [
  {
    question: "Cosa si intende per festa privata?",
    answer:
      "Una festa privata è un evento riservato esclusivamente ai tuoi invitati. Nessun estraneo, nessuna sorpresa. Affitti uno spazio in esclusiva e decidi tu ogni dettaglio: musica, orari, menu, dress code. È la differenza tra 'organizzare una festa' e 'vivere la TUA festa'.",
  },
  {
    question: "Quanto costa organizzare una festa privata a Roma nel 2026?",
    answer:
      "I prezzi variano enormemente: da 1.500€ per soluzioni base a 6.000€+ per eventi luxury. Il problema? Spesso i preventivi nascondono costi extra. Al 747 Disco partiamo da €1.590 all-inclusive: location, DJ, catering, open bar. Zero sorprese, tutto incluso.",
  },
  {
    question: "Quali tipi di location esistono per feste private a Roma?",
    answer:
      "Le opzioni sono: sale feste (economiche ma limitate), ristoranti con sala privata (focus sul cibo, poco ballo), ville e loft (costosi e da allestire completamente), discoteche private (esperienza completa con impianto professionale). Per feste con ballo, la discoteca privata è imbattibile.",
  },
  {
    question: "Cosa deve avere una location per feste private?",
    answer:
      "Tre cose non negoziabili: esclusività (nessun estraneo), impianto audio/luci professionale, e un pacchetto chiaro senza costi nascosti. Bonus: parcheggio, staff dedicato, e flessibilità sugli orari.",
  },
  {
    question: "Con quanto anticipo prenotare una festa privata a Roma?",
    answer:
      "Per weekend e periodi festivi (Natale, Capodanno, primavera): almeno 2-3 mesi. Per date infrasettimanali: 3-4 settimane. Il nostro consiglio? Prima prenoti, più scelta hai sulle date migliori.",
  },
];

export default function FestePrivateRoma() {
  return (
    <>
      <SEOHead
        title="Feste Private Roma 2026 | Location Esclusiva + Pacchetti All-Inclusive"
        description="Organizza la tua festa privata a Roma: location esclusiva, DJ, catering e open bar. Pacchetti all-inclusive da €1.590. Scopri 747 Disco, la discoteca privata a Ciampino."
        canonical="/feste-private-roma"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src={festa30} 
            alt="Festa privata 30 anni al 747 Disco Roma" 
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
            Feste Private <span className="text-primary">a Roma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-4">
            Basta feste in locali affollati. Basta sorprese sul preventivo.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Vuoi una festa dove ci sei solo tu e i tuoi invitati? Dove la musica è quella che scegli tu, 
            il buffet è abbondante e l'open bar non finisce dopo un'ora? Sei nel posto giusto.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <img src={festaLaurea} alt="Festa di laurea al 747 Disco Roma" className="w-full aspect-video object-cover" />
            <img src={festa30} alt="Festa 30 anni al 747 Disco" className="w-full aspect-video object-cover" />
            <img src={genteDiverte} alt="Gente che si diverte al 747 Disco" className="w-full aspect-video object-cover" />
          </div>
        </div>
      </section>

      {/* Il Problema */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Il problema delle feste private a Roma
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Hai mai organizzato una festa e scoperto all'ultimo che il "pacchetto completo" 
              non includeva le bevande? O che la "sala esclusiva" era separata dal locale principale 
              solo da una tenda?
            </p>
            <p>
              <strong className="text-foreground">La verità è questa:</strong> la maggior parte delle 
              location per feste a Roma promette molto e mantiene poco. Prezzi che lievitano, 
              spazi condivisi, impianti audio da karaoke.
            </p>
            <p>
              Noi facciamo esattamente l'opposto.
            </p>
          </div>
        </div>
      </section>

      {/* Cosa Offriamo */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Cosa significa "festa privata" al <span className="text-primary">747 Disco</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Esclusività Totale",
                desc: "Quando prenoti, il locale è TUO. Nessun altro gruppo, nessun estraneo. Solo tu e chi decidi di invitare.",
              },
              {
                icon: Music,
                title: "Impianto da Discoteca Vera",
                desc: "Pista da ballo, luci professionali, impianto audio da 10.000W. Non una sala con uno stereo attaccato.",
              },
              {
                icon: Utensils,
                title: "Catering + Open Bar Vero",
                desc: "Buffet abbondante che dura tutta la serata. Open bar senza trucchi: bevi quello che vuoi, quanto vuoi.",
              },
              {
                icon: Clock,
                title: "Orari Flessibili",
                desc: "La festa inizia quando vuoi tu e finisce quando decidi tu. Niente 'dovete uscire entro mezzanotte'.",
              },
              {
                icon: Users,
                title: "Staff Dedicato",
                desc: "DJ professionista, personale di sala, fotografo. Un team che lavora per far funzionare tutto.",
              },
              {
                icon: Crown,
                title: "Zero Sorprese",
                desc: "Il prezzo che vedi è il prezzo che paghi. Tutto incluso, nessun extra nascosto.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-card border border-border"
              >
                <item.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipi di Feste */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Per quali occasioni?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Il 747 Disco è perfetto per qualsiasi festa privata dove vuoi ballare, 
            divertirti e fare le cose in grande:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "🎂 Compleanni (18 anni, 30, 40, 50...)",
              "🎓 Lauree e diplomi",
              "💍 Addii al nubilato e celibato",
              "🎉 Feste di fine anno scolastico",
              "🏢 Eventi aziendali e team building",
              "🎊 Anniversari e celebrazioni familiari",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-background border border-border">
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confronto Prezzi */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Quanto costa davvero una festa privata a Roma?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Ecco un confronto onesto. Se organizzi tutto da solo, questi sono i costi reali:
          </p>
          
          <div className="bg-card border border-border p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">Festa "fai da te" per 50 persone:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between border-b border-border pb-2">
                <span>Affitto sala/location</span>
                <span className="text-foreground font-medium">€600 - €1.200</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Catering (€25-40 a persona)</span>
                <span className="text-foreground font-medium">€1.250 - €2.000</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>DJ + impianto audio</span>
                <span className="text-foreground font-medium">€400 - €800</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Bevande / Open bar</span>
                <span className="text-foreground font-medium">€300 - €600</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Fotografo</span>
                <span className="text-foreground font-medium">€200 - €400</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="font-bold text-foreground">TOTALE</span>
                <span className="font-bold text-foreground">€2.750 - €5.000</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/10 border border-primary p-6">
            <h3 className="font-bold text-lg mb-4 text-primary">Pacchetto 747 Disco All-Inclusive:</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-foreground font-medium">Tutto incluso, 50 persone</p>
                <p className="text-sm text-muted-foreground">Location + DJ + Catering + Open Bar + Foto + Pulizia</p>
              </div>
              <span className="text-3xl font-bold text-primary">da €1.590</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principale */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <PartyPopper className="h-16 w-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a organizzare la tua festa?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chiamaci o scrivici su WhatsApp. Ti rispondiamo subito con disponibilità 
            e preventivo personalizzato. Nessun impegno, nessuna pressione.
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
              href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20informazioni%20per%20una%20festa%20privata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Scrivici su WhatsApp
            </a>
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
                Tutto quello che devi sapere per i diciotto anni perfetti
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
