import { Check, Phone, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    name: "Menu 7",
    subtitle: "Promo Lun-Gio",
    price: "1.590",
    people: "Fino a 40 persone",
    featured: true,
    highlights: [
      "Location esclusiva",
      "DJ e animazione",
      "Buffet completo + torta",
      "Open bar analcolico",
      "Servizio fotografico OMAGGIO",
    ],
  },
  {
    name: "Menu 7",
    subtitle: "Ven-Sab-Dom",
    price: "1.990",
    people: "Fino a 50 persone",
    featured: false,
    highlights: [
      "Location esclusiva",
      "DJ e animazione",
      "Buffet completo + torta",
      "Open bar analcolico",
      "Servizio fotografico OMAGGIO",
    ],
  },
  {
    name: "Menu 7-4",
    subtitle: "Premium",
    price: "2.390",
    people: "Fino a 50 persone",
    featured: false,
    highlights: [
      "Tutto del Menu 7 +",
      "Taglieri salumi & formaggi",
      "Cascata Prosciutto Crudo",
      "Mozzarella di Bufala",
      "Ricotta con confettura e miele",
    ],
  },
  {
    name: "Menu 7-4-7",
    subtitle: "All Inclusive VIP",
    price: "2.590",
    people: "Fino a 50 persone",
    featured: false,
    highlights: [
      "Tutto del Menu 7-4 +",
      "Secondo caldo a scelta",
      "Buffet dolci aggiuntivo",
    ],
  },
];

export default function PackagesSection() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section id="pacchetti" className="py-20 bg-card section-deferred">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
            I Nostri <span className="text-primary">Pacchetti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tutto incluso, prezzi chiari, zero sorprese. 
            Scegli il pacchetto, noi pensiamo a tutto il resto.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] ${
                pkg.featured
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Star className="h-3 w-3" />
                  Più Richiesto
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm">{pkg.subtitle}</p>
              </div>

              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-primary">€{pkg.price}</span>
                <p className="text-muted-foreground text-sm mt-1">{pkg.people}</p>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {pkg.highlights.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+393343662827"
                className={`flex items-center justify-center gap-2 w-full py-4 font-bold transition-colors ${
                  pkg.featured
                  ? "rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                    : "rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Phone className="h-4 w-4" />
                Prenota Ora
              </a>
            </div>
          ))}
        </div>

        {/* Detailed Menu Section */}
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setShowFullMenu(!showFullMenu)}
            className="w-full flex items-center justify-center gap-2 py-4 border border-primary text-primary hover:bg-primary/10 transition-colors font-semibold mb-8"
          >
            {showFullMenu ? "Nascondi Menu Completo" : "Scopri Cosa Include Ogni Menu"}
            <ChevronDown className={`h-5 w-5 transition-transform ${showFullMenu ? "rotate-180" : ""}`} />
          </button>

          {showFullMenu && (
            <div className="space-y-12 animate-in fade-in-0 duration-500">
              
              {/* MENU 7 BASE */}
              <article className="overflow-hidden bg-gradient-to-b from-card to-background border border-border shadow-lg">
                <header className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 py-6 px-8 border-b border-primary/30">
                  <h3 className="text-2xl md:text-3xl font-bold text-center tracking-wide">
                    <span className="text-primary">Menu 7</span>
                    <span className="block text-base font-normal text-muted-foreground mt-1">Il Pacchetto Base Completo</span>
                  </h3>
                </header>
                
                <div className="p-6 md:p-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Aperitivo */}
                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">🥂</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Aperitivo di Benvenuto</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Prosecco Bellini</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Succhi di frutta</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Patatine e finger food</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Bruschettine sfiziose</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Pizzette rosse e rustici</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Fagottini con würstel</li>
                      </ul>
                    </div>

                    {/* Buffet Salato */}
                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">🍕</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Buffet Salato</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Torte rustiche del giorno</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Tramezzini misti</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Pizzette Margherita</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Paninetti Napoletani</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Verdurine gratinate</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Panzerotti e patate al forno</li>
                      </ul>
                    </div>

                    {/* Primi Caldi */}
                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">🍝</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Primo Caldo (1 a scelta)</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Pennette alla Vodka</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Mezze maniche all'Amatriciana DOP</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Ravioli al pomodoro e basilico</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Ravioli in pesto di noci</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Ravioli alla crema di pistacchio</li>
                      </ul>
                    </div>

                    {/* Primi Freddi */}
                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">🥗</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Oppure Primo Freddo</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Insalata di farro con verdure</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Pasta con grana, rucola, pachino e speck</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Pasta con pesto DOP e pachino</li>
                      </ul>
                    </div>
                  </div>

                  {/* Torta e Servizi */}
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">🎂</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Torta e Beverage</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Torta a scelta</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Spumante per il brindisi</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Open bar analcolico</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">✨</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Servizi Inclusi</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Location in esclusiva</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> DJ e animazione</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Personale di sala</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Pulizia location</li>
                      </ul>
                    </div>
                  </div>

                  {/* Omaggio */}
                  <div className="mt-6 bg-primary/10 border border-primary/40 p-5 text-center">
                    <p className="text-lg font-bold text-primary flex items-center justify-center gap-2">
                      🎁 OMAGGIO: Servizio fotografico professionale + Servizio SIAE
                    </p>
                  </div>
                </div>
              </article>

              {/* MENU 7-4 */}
              <article className="overflow-hidden bg-gradient-to-b from-card to-background border border-border shadow-lg">
                <header className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 py-6 px-8 border-b border-accent/30">
                  <h3 className="text-2xl md:text-3xl font-bold text-center tracking-wide">
                    <span className="text-primary">Menu 7-4</span>
                    <span className="block text-base font-normal text-muted-foreground mt-1">Esperienza Premium</span>
                  </h3>
                </header>
                
                <div className="p-6 md:p-10">
                  <div className="bg-primary/10 border border-primary/30 p-4 text-center mb-8">
                    <p className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Include tutto del Menu 7, più:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">🧀</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Aggiunte Aperitivo</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Taglieri di salumi selezionati</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Formaggi stagionati</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 border border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <span className="text-xl">🥩</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Aggiunte Buffet Cena</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Cascata Prosciutto Crudo Parma</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Mozzarella di Bufala fresca</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Ricotta con confettura e miele</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* MENU 7-4-7 */}
              <article className="overflow-hidden bg-gradient-to-b from-primary/5 to-background border-2 border-primary shadow-xl">
                <header className="bg-gradient-to-r from-primary via-primary to-primary py-6 px-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-primary-foreground tracking-wide">
                    Menu 7-4-7
                    <span className="block text-base font-normal opacity-90 mt-1">All Inclusive VIP</span>
                  </h3>
                </header>
                
                <div className="p-6 md:p-10">
                  <div className="bg-primary/10 border border-primary/30 p-4 text-center mb-8">
                    <p className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      Include tutto del Menu 7-4, più:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/20 border border-primary/30 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/30 flex items-center justify-center">
                          <span className="text-xl">🍖</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Secondo Caldo (1 a scelta)</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Porchetta calda di Ariccia</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Polpette al vino con piselli</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Arrosto di arista o vitella</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/20 border border-primary/30 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/30 flex items-center justify-center">
                          <span className="text-xl">🍰</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Buffet Dolci Extra</h4>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Buffet dolci assortiti</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Oltre alla torta principale</li>
                        <li className="flex items-start gap-2"><span className="text-primary">•</span> Varietà di pasticceria mignon</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          )}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          <strong className="text-foreground">Hai un gruppo più grande di 50 persone?</strong>
          {" "}Contattaci per un preventivo personalizzato. 
          Possiamo organizzare eventi fino a 200 invitati.
        </p>
      </div>
    </section>
  );
}
