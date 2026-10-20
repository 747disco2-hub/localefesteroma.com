import { Music, Utensils, Camera, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import angoloBar from "@/assets/angolo-bar.jpg";
import genteDiverte from "@/assets/gente-diverte-2.jpg";

const features = [
  {
    icon: Music,
    title: "DJ Professionisti",
    description: "Musica, ritmo e conduzione pensati per il tuo gruppo.",
  },
  {
    icon: Utensils,
    title: "Catering di Qualità",
    description: "Un menu da scegliere insieme, con soluzioni per ogni esigenza.",
  },
  {
    icon: Camera,
    title: "Servizio Foto",
    description: "I momenti importanti restano con te, anche dopo la festa.",
  },
  {
    icon: Sparkles,
    title: "Spazi da vivere",
    description: "Un ambiente curato, pronto ad accogliere il tuo stile.",
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={angoloBar}
                alt="Angolo bar 747 Disco Roma"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                  Completamente Ristrutturata
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={genteDiverte}
                alt="Festa al 747 Disco Roma - Gente che si diverte"
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">
              Tutto quello che serve.<br /><span className="text-primary">Solo per voi.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              747 Disco è uno spazio privato a Ciampino, progettato per farvi stare bene insieme. Pista, bar, musica e servizio: ogni elemento è già al suo posto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              <strong className="text-foreground">Nessun estraneo, nessun dettaglio lasciato al caso.</strong> Tu scegli le persone e l’atmosfera; noi rendiamo semplice organizzare una serata memorabile.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature.title} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
