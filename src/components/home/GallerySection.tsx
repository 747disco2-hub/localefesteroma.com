import { motion } from "framer-motion";
import pistaDaBallo from "@/assets/pista-da-ballo.jpg";
import internoSala from "@/assets/interno-sala.jpg";
import angoloBar from "@/assets/angolo-bar.jpg";
import palchetto747 from "@/assets/palchetto-747.jpg";
import genteBalla from "@/assets/gente-balla.jpg";
import genteDiverte2 from "@/assets/gente-diverte-2.jpg";

const galleryImages = [
  { src: pistaDaBallo, alt: "Pista da ballo 747 Disco Roma" },
  { src: internoSala, alt: "Interno sala 747 Disco" },
  { src: angoloBar, alt: "Angolo bar 747 Disco Roma" },
  { src: palchetto747, alt: "Palchetto con scritta 747 illuminata" },
  { src: genteBalla, alt: "Ragazze ballano alla festa 747 Disco Roma" },
  { src: genteDiverte2, alt: "Giovani si divertono al 747 Disco" },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            Le Nostre <span className="text-primary">Feste</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ogni settimana ospitiamo feste indimenticabili. Guarda cosa aspettarti.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
