import { Phone, MessageCircle, Star, Users, Music, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import pistaDaBallo from "@/assets/pista-da-ballo.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${pistaDaBallo}')`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">
              La Discoteca Privata di Roma
            </span>
          </motion.div>

          {/* Logo */}
          <motion.h1 
            className="font-script text-6xl md:text-8xl lg:text-9xl text-primary mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            747 Disco
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-2xl md:text-3xl text-foreground font-semibold mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            La tua festa. Solo i tuoi invitati. Zero compromessi.
          </motion.p>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Niente estranei, niente sorprese sul conto, niente impianti da karaoke. 
            Solo tu, i tuoi amici, e una festa che ricorderete per sempre.
          </motion.p>

          {/* USP Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-5 py-3 border border-primary/50">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Capienza fino a 200 persone</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-5 py-3 border border-primary/50">
              <Music className="h-5 w-5 text-primary" />
              <span className="font-medium">DJ + Impianto Pro</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-5 py-3 border border-primary/50">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Ciampino • Parcheggio</span>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="tel:+393343662827"
              className="flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-lg font-bold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              Chiama Ora
            </motion.a>
            <motion.a
              href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20organizzare%20una%20festa%20al%20747%20Disco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 text-lg font-bold hover:bg-[#128C7E] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Price anchor */}
          <motion.div 
            className="inline-block bg-card/90 backdrop-blur border-2 border-primary p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
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
