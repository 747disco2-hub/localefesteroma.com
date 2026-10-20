import { Phone, MessageCircle, Star, Users, Music, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import pistaDaBallo from "@/assets/pista-da-ballo.jpg";

export default function HeroSection() {
	const reduceMotion = useReducedMotion();
	const reveal = reduceMotion ? { opacity: 1, y: 0 } : undefined;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-surface">
      <Helmet>
        <link rel="preload" as="image" href={pistaDaBallo} fetchPriority="high" />
      </Helmet>
      <img
        src={pistaDaBallo}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        className="hero-readable-overlay"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-background/65 border border-white/20 px-4 py-2 mb-7"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reveal ?? { opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">
              747 Disco · Ciampino, Roma
            </span>
          </motion.div>

          {/* Logo */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.055em] text-foreground mb-5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reveal ?? { opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
          >
            La tua festa privata.<br />Solo la tua.
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-2xl md:text-4xl text-foreground font-semibold leading-tight mb-4 max-w-3xl mx-auto text-balance tracking-tight"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reveal ?? { opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.5 }}
          >
            Un locale interamente riservato a te e alle persone che scegli.
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-foreground/90 mb-9 max-w-2xl mx-auto leading-relaxed"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reveal ?? { opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.5 }}
          >
            DJ, catering, open bar e foto in un unico progetto, curato con te dall’inizio alla fine.
          </motion.p>

          {/* USP Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-9"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reveal ?? { opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.45 }}
          >
            <div className="flex items-center gap-2 rounded-full bg-card/75 backdrop-blur px-4 py-2.5 border border-white/10">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Capienza fino a 200 persone</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-card/75 backdrop-blur px-4 py-2.5 border border-white/10">
              <Music className="h-5 w-5 text-primary" />
              <span className="font-medium">DJ + Impianto Pro</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-card/75 backdrop-blur px-4 py-2.5 border border-white/10">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Ciampino • Parcheggio</span>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reveal ?? { opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href="tel:+393343662827"
              className="flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-8 py-4 text-lg font-bold shadow-[0_12px_30px_hsl(var(--primary)/0.28)] hover:bg-primary/90 transition-colors"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Phone className="h-5 w-5" />
              Chiama Ora
            </motion.a>
            <motion.a
              href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20organizzare%20una%20festa%20al%20747%20Disco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-[#25D366] text-white px-8 py-4 text-lg font-bold shadow-[0_12px_30px_rgba(37,211,102,0.22)] hover:bg-[#128C7E] transition-colors"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Price anchor */}
          <motion.div 
            className="inline-block rounded-[1.5rem] bg-background/90 border border-white/15 px-8 py-6"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reveal ?? { opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Pacchetti All-Inclusive da
            </p>
            <p className="text-5xl md:text-6xl font-bold text-primary mb-2">
              €1.590
            </p>
            <p className="text-muted-foreground">
              Location + DJ + Catering + Open Bar + Foto
            </p>
            <p className="text-xs text-primary mt-3 font-medium">
              ✓ Tutto incluso, zero sorprese
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
