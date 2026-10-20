import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, X, Users, Euro, Music, AlertTriangle, Lightbulb } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/ui/FAQSection";
import FAQSchema from "@/components/seo/FAQSchema";
import discoLogo from "@/assets/disco-logo-747.jpg";
import tortaSfondo from "@/assets/torta-sfondo-747.jpg";

const faqs = [
  {
    question: "Quanto costa affittare una sala feste a Roma?",
    answer:
      "Le sale feste a Roma costano da €200 a €1.500 in base a dimensioni e servizi. Sale base per piccoli gruppi: €200-400. Sale attrezzate per 50-80 persone: €500-800. Sale premium con tutto incluso: €800-1.500. Attenzione: spesso il prezzo non include catering e bevande.",
  },
  {
    question: "Cosa è incluso nell'affitto di una sala feste?",
    answer:
      "Dipende dalla sala. Il minimo: spazio, tavoli, sedie, pulizia. Sale migliori includono: cucina, frigorifero, impianto audio base, stoviglie. Raramente trovi: DJ, catering, open bar, fotografo. Chiedi sempre un elenco dettagliato prima di prenotare.",
  },
  {
    question: "Sala feste o discoteca: cosa scelgo?",
    answer:
      "Sala feste: ideale per bambini, feste familiari, eventi senza ballo. Costi più bassi ma devi organizzare tutto tu. Discoteca: perfetta per 18 anni, lauree, compleanni adulti. Costa di più ma è tutto incluso e l'atmosfera è incomparabile. Se vuoi ballare, scegli la discoteca.",
  },
  {
    question: "Posso portare cibo e bevande in una sala feste?",
    answer:
      "Molte sale feste permettono catering esterno (è uno dei loro vantaggi). Alcune richiedono un contributo per uso cucina. Altre hanno accordi con catering specifici. Verifica sempre questa opzione: può fare grande differenza sul budget totale.",
  },
  {
    question: "Quali sono gli orari tipici delle sale feste?",
    answer:
      "La maggior parte delle sale offre slot di 3-5 ore, tipicamente pomeriggio (15-20) o sera (19-24). Gli orari extra si pagano (€50-150/ora). Per feste lunghe, una discoteca spesso conviene di più perché gli orari sono più flessibili.",
  },
];

export default function SalaFesteRoma() {
  return (
    <>
      <SEOHead
        title="Sala Feste Roma 2026 | Prezzi, Pro e Contro + Alternativa Migliore"
        description="Cerchi una sala feste a Roma? Guida completa con prezzi reali, cosa è incluso e quando conviene. Scopri quando una discoteca privata è la scelta migliore."
        canonical="/sala-feste-roma"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src={discoLogo} 
            alt="747 Disco logo illuminato" 
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
            Sala Feste <span className="text-primary">Roma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-4">
            Le sale feste sono economiche. Ma sono la scelta giusta per te?
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Una sala feste può essere perfetta... o un disastro. Dipende dal tipo di festa che vuoi fare. 
            Questa guida ti aiuta a capire quando conviene e quando è meglio scegliere altro.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <img src={discoLogo} alt="Disco con logo 747 Disco" className="w-full aspect-video object-cover" />
            <img src={tortaSfondo} alt="Torta con sfondo scritta 747 illuminata" className="w-full aspect-video object-cover" />
          </div>
        </div>
      </section>

      {/* Quando Sì, Quando No */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Sala feste: quando sì, quando no
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary/10 border border-primary">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Scegli una sala feste se:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Organizzi una festa per bambini (fino a 10-12 anni)</li>
                <li>• Vuoi un evento familiare tranquillo</li>
                <li>• Il ballo non è una priorità</li>
                <li>• Hai un budget limitato</li>
                <li>• Preferisci gestire catering e allestimento in autonomia</li>
              </ul>
            </div>
            
            <div className="p-6 bg-destructive/10 border border-destructive/30">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <X className="h-5 w-5 text-destructive" />
                NON scegliere una sala feste se:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Vuoi ballare (l'impianto audio sarà inadeguato)</li>
                <li>• Organizzi un 18° compleanno o una laurea</li>
                <li>• Vuoi un'atmosfera da "vera festa"</li>
                <li>• Non vuoi occuparti di catering, bevande, DJ...</li>
                <li>• Hai più di 50 invitati</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prezzi Reali */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Quanto costa davvero una sala feste a Roma?
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Sala Base</h3>
                <span className="text-xl font-bold text-primary">€200 - €400</span>
              </div>
              <p className="text-muted-foreground mb-3">
                Solo lo spazio, tavoli e sedie. Tutto il resto (cibo, bevande, musica, decorazioni) 
                lo porti tu. Ideale per feste di bambini con budget ridotto.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Capienza tipica:</strong> 20-40 persone
              </p>
            </div>
            
            <div className="p-6 bg-card border border-border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Sala Attrezzata</h3>
                <span className="text-xl font-bold text-primary">€500 - €800</span>
              </div>
              <p className="text-muted-foreground mb-3">
                Spazio più cucina attrezzata, frigorifero, impianto audio base. 
                Puoi cucinare in loco o appoggiarti a un catering.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Capienza tipica:</strong> 40-70 persone
              </p>
            </div>
            
            <div className="p-6 bg-card border border-border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Sala Premium</h3>
                <span className="text-xl font-bold text-primary">€800 - €1.500</span>
              </div>
              <p className="text-muted-foreground mb-3">
                Spazio completo con arredi di qualità, impianto audio decente, 
                area bambini, possibilità di servizi aggiuntivi.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Capienza tipica:</strong> 60-100 persone
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-accent/10 border border-accent/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-2">Attenzione ai costi nascosti</p>
                <p className="text-muted-foreground">
                  Il prezzo della sala è solo l'inizio. Aggiungi: catering (€20-40 a persona), 
                  bevande (€5-15 a persona), DJ (€300-500), decorazioni (€100-300), 
                  pulizia extra (€50-100). Una festa "economica" in sala può facilmente 
                  superare i €2.000 totali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confronto con Discoteca */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Sala Feste vs Discoteca: il confronto onesto
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold">Aspetto</th>
                  <th className="text-left p-4 font-bold">Sala Feste</th>
                  <th className="text-left p-4 font-bold text-primary">Discoteca (747 Disco)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Prezzo base</td>
                  <td className="p-4">€300 - €800</td>
                  <td className="p-4">da €1.590</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Cosa è incluso</td>
                  <td className="p-4">Solo lo spazio</td>
                  <td className="p-4">Tutto: DJ, catering, open bar, foto</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Costo totale reale</td>
                  <td className="p-4">€1.500 - €3.000+</td>
                  <td className="p-4">€1.590 - €2.590</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Impianto audio</td>
                  <td className="p-4">Basic (stereo)</td>
                  <td className="p-4">Professionale (10.000W)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Pista da ballo</td>
                  <td className="p-4">No</td>
                  <td className="p-4">Sì, vera</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Luci professionali</td>
                  <td className="p-4">No</td>
                  <td className="p-4">Sì</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-foreground">Stress organizzativo</td>
                  <td className="p-4">Alto (gestisci tutto tu)</td>
                  <td className="p-4">Zero (pensiamo a tutto noi)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Ideale per</td>
                  <td className="p-4">Bambini, feste tranquille</td>
                  <td className="p-4">18 anni, lauree, feste con ballo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="p-8 bg-card border border-border">
            <div className="flex items-start gap-4">
              <Lightbulb className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-4">Il nostro consiglio sincero</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Se stai organizzando una festa per bambini o un evento familiare tranquillo, 
                  una sala feste può essere la scelta giusta. Risparmierai e avrai flessibilità.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Ma se stai organizzando un <strong className="text-foreground">18° compleanno</strong>, 
                  una <strong className="text-foreground">laurea</strong>, o qualsiasi festa dove 
                  vuoi <strong className="text-foreground">ballare e divertirti</strong>... 
                  una sala feste sarà una delusione.
                </p>
                <p className="text-lg text-foreground font-medium">
                  In quel caso, una discoteca privata come il 747 Disco è la scelta che 
                  ti farà dire "ne è valsa la pena".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Vuoi qualcosa in più di una sala feste?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Al 747 Disco trovi tutto quello che una sala feste non può darti: 
            pista da ballo vera, impianto professionale, DJ, catering, open bar. 
            E costa meno di quanto pensi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+393343662827"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Chiama per un Preventivo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20info%20sui%20pacchetti%20747%20Disco"
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
              to="/location-compleanni-roma"
              className="p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Location Compleanni Roma</h3>
              <p className="text-sm text-muted-foreground">
                Tutte le tipologie di location a confronto
              </p>
            </Link>
            <Link
              to="/feste-private-roma"
              className="p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Feste Private Roma</h3>
              <p className="text-sm text-muted-foreground">
                Guida completa alle feste private
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
