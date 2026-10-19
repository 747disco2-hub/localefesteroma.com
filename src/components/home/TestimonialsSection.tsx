import { Star } from "lucide-react";
import { motion } from "framer-motion";
import YouTubeFacade from "@/components/ui/YouTubeFacade";

const testimonials = [
  {
    name: "Samuele",
    event: "Festa 18 Anni",
    text: "Una serata incredibile! Il DJ era fantastico e il servizio impeccabile. Tutti i miei amici ne parlano ancora!",
    rating: 5,
  },
  {
    name: "Angelica",
    event: "Festa 18 Anni",
    text: "Ho festeggiato i miei 18 anni al 747 Disco e non potevo scegliere meglio. Location bellissima e staff super disponibile.",
    rating: 5,
  },
  {
    name: "Marco",
    event: "Festa di Laurea",
    text: "Evento organizzato alla perfezione. Il catering era ottimo e l'atmosfera unica. Lo consiglio a tutti!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase tracking-wider">
            I Vostri <span className="text-primary">Feedback</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Ascolta chi ha già festeggiato con noi: emozioni vere, sorrisi autentici e momenti indimenticabili
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-video">
            <YouTubeFacade 
              videoId="TQ6ik1GKR1o" 
              title="Video intervista - Compleanno Samuele" 
            />
          </div>
          <div className="aspect-video">
            <YouTubeFacade 
              videoId="mQiaS0-ox5A" 
              title="Intervista 18 Anni di Angelica" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
