import { Star, MapPin, Users, Music, Check } from "lucide-react";

export default function RecommendedSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="bg-gradient-to-br from-primary/5 via-secondary to-accent/10 rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-4">
                <Star className="h-4 w-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-foreground">
                  Location Più Recensita di Roma
                </span>
              </div>
              
              <h2 className="text-foreground">
                747 Disco: La Scelta Consigliata
              </h2>
              
              <p className="mt-4 text-muted-foreground">
                Dopo aver analizzato decine di location a Roma, 747 Disco emerge come 
                la scelta più apprezzata dagli organizzatori di feste private. 
                Combina spazi versatili, prezzi competitivi e un servizio professionale 
                che ha conquistato centinaia di recensioni positive.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Spazio modulare da 50 a 400 persone",
                  "Catering interno e pacchetti all-inclusive",
                  "Sistema audio e luci professionale",
                  "Staff dedicato per ogni evento",
                  "Parcheggio privato gratuito",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://747disco.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Scopri 747 Disco
                  <Star className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-6 text-center shadow-card">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 mb-3">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <p className="text-2xl font-display font-semibold text-foreground">4.9/5</p>
                <p className="text-sm text-muted-foreground">Su Google</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-card">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <p className="text-2xl font-display font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Recensioni</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-card">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <p className="text-2xl font-display font-semibold text-foreground">Roma Sud</p>
                <p className="text-sm text-muted-foreground">Zona EUR</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-card">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 mb-3">
                  <Music className="h-5 w-5 text-accent" />
                </div>
                <p className="text-2xl font-display font-semibold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Anni Esperienza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
