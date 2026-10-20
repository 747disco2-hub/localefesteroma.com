import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contatti" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-script text-4xl text-primary">747 Disco</span>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Location esclusiva per feste ed eventi a Roma.
              Discoteca privata con DJ, catering e servizio all-inclusive.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com/747disco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/747disco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/393343662827"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] flex items-center justify-center text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Guide SEO */}
          <div>
            <h3 className="text-sm font-semibold mb-6 text-primary uppercase tracking-wider">
              Guide Feste Roma
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/festa-18-anni-roma" className="text-muted-foreground hover:text-primary transition-colors">
                  Festa 18 Anni Roma
                </Link>
              </li>
              <li>
                <Link to="/feste-private-roma" className="text-muted-foreground hover:text-primary transition-colors">
                  Feste Private Roma
                </Link>
              </li>
              <li>
                <Link to="/feste-per-teenagers-roma" className="text-muted-foreground hover:text-primary transition-colors">
                  Feste Teenagers Roma
                </Link>
              </li>
              <li>
                <Link to="/location-compleanni-roma" className="text-muted-foreground hover:text-primary transition-colors">
                  Location Compleanni Roma
                </Link>
              </li>
              <li>
                <Link to="/sala-feste-roma" className="text-muted-foreground hover:text-primary transition-colors">
                  Sala Feste Roma
                </Link>
              </li>
            </ul>
          </div>

          {/* 747 Disco */}
          <div>
            <h3 className="text-sm font-semibold mb-6 text-primary uppercase tracking-wider">
              747 Disco
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#location" className="text-muted-foreground hover:text-primary transition-colors">
                  Il Locale
                </a>
              </li>
              <li>
                <a href="#pacchetti" className="text-muted-foreground hover:text-primary transition-colors">
                  I Pacchetti
                </a>
              </li>
              <li>
                <a 
                  href="https://747disco.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sito Ufficiale →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-6 text-primary uppercase tracking-wider">
              Contatti
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+393343662827" className="hover:text-primary transition-colors">
                  +39 334 366 2827
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@747disco.it" className="hover:text-primary transition-colors">
                  info@747disco.it
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Viale J. F. Kennedy, 131 Ciampino (RM)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} 747 Disco. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
