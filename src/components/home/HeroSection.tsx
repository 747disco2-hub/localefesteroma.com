import { CalendarCheck, MessageCircle, Music, Users, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import pistaDaBallo from "@/assets/pista-da-ballo.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden hero-surface">
      <Helmet>
        <link rel="preload" as="image" href={pistaDaBallo} fetchPriority="high" />
      </Helmet>
      <img src={pistaDaBallo} alt="Pista da ballo della discoteca privata 747 Disco a Ciampino" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-readable-overlay" />

      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            747 Disco · Ciampino, Roma
          </p>
          <h1 className="hero-title mb-6">
            La tua festa.<br />
            <span>Senza stress.</span><br />
            Tutto incluso.
          </h1>
          <p className="mx-auto mb-5 max-w-2xl text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            Una discoteca interamente riservata al tuo gruppo, con tutto ciò che serve per festeggiare davvero.
          </p>
          <p className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            DJ, catering, open bar e servizio foto. Un solo referente, un preventivo chiaro, nessun estraneo.
          </p>

          <div className="mb-9 flex flex-wrap justify-center gap-3 text-sm">
            <span className="hero-proof"><Users className="h-4 w-4" /> Fino a 200 invitati</span>
            <span className="hero-proof"><Music className="h-4 w-4" /> DJ e impianto professionale</span>
            <span className="hero-proof"><MapPin className="h-4 w-4" /> Parcheggio a Ciampino</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20verificare%20la%20disponibilit%C3%A0%20per%20una%20festa%20al%20747%20Disco" target="_blank" rel="noopener noreferrer" className="hero-cta-primary">
              <CalendarCheck className="h-5 w-5" />
              Verifica disponibilità
            </a>
            <a href="tel:+393343662827" className="hero-cta-secondary">
              <MessageCircle className="h-5 w-5" />
              Parla con noi
            </a>
          </div>
          <p className="mt-4 text-sm text-foreground/65">Pacchetti all-inclusive da <strong className="font-semibold text-primary">€1.590</strong></p>
        </div>
      </div>
    </section>
  );
}
