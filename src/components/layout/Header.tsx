import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo-747disco.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Festa 18 anni", href: "/festa-18-anni-roma" },
  { label: "Feste private", href: "/feste-private-roma" },
  { label: "Location compleanni", href: "/location-compleanni-roma" },
  { label: "Sala feste", href: "/sala-feste-roma" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/98 border-b border-white/10" : "bg-background/94 border-b border-white/5"}`}>
      <div className="container mx-auto px-4">
        <div className="flex min-h-[68px] items-center justify-between gap-5">
          <Link to="/" className="flex shrink-0 items-center py-2" aria-label="747 Disco Roma, home">
            <img src={logo} alt="747 Disco Roma" className="h-11 w-auto object-contain" />
          </Link>

          <nav className="hidden xl:flex items-center justify-center gap-1" aria-label="Navigazione principale">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.href} to={item.href} aria-current={isActive ? "page" : undefined} className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-semibold tracking-tight transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-primary after:transition-transform ${isActive ? "text-primary after:scale-x-100" : "text-foreground/75 hover:bg-white/5 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex shrink-0 items-center">
            <a href="tel:+393343662827" className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              <Phone className="h-4 w-4" />
              Chiama ora
            </a>
          </div>

          <button className="xl:hidden rounded-lg p-2 text-foreground hover:bg-white/5" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Chiudi menu" : "Apri menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav id="mobile-navigation" className="xl:hidden border-t border-white/10 py-3" aria-label="Navigazione mobile">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/5 hover:text-primary" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href="tel:+393343662827" className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" />
              Chiama ora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
