import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contatti" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
            Prenota un <span className="text-primary">Incontro</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hai domande sulla nostra location per feste di compleanno a Roma o vuoi scoprire tutti i dettagli dei nostri servizi? 
            Siamo a tua completa disposizione per aiutarti a organizzare un evento indimenticabile.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="tel:+393343662827"
              className="flex items-center justify-center gap-4 bg-primary text-primary-foreground p-6 hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-8 w-8" />
              <div className="text-left">
                <p className="text-sm opacity-80">Chiamaci</p>
                <p className="text-xl font-bold">+39 334 366 2827</p>
              </div>
            </motion.a>
            <motion.a
              href="https://wa.me/393343662827?text=Ciao!%20Vorrei%20informazioni%20per%20organizzare%20una%20festa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[#25D366] text-white p-6 hover:bg-[#25D366]/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="h-8 w-8" />
              <div className="text-left">
                <p className="text-sm opacity-80">WhatsApp</p>
                <p className="text-xl font-bold">Scrivici ora</p>
              </div>
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@747disco.it" className="hover:text-primary transition-colors">
                info@747disco.it
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Viale J. F. Kennedy, 131 Ciampino (RM)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}