import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, BUSINESS } from "@/lib/site-data";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 240);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-white/40 shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Logo dark={!scrolled} />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  scrolled
                    ? "text-secondary hover:text-primary hover:bg-primary/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-get-quote-btn"
            className="group relative hidden overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-cta transition-transform duration-200 hover:scale-[1.03] active:scale-95 sm:inline-flex"
          >
            Get Free Quote
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
              scrolled ? "bg-secondary text-white" : "bg-white/15 text-white backdrop-blur"
            }`}
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-secondary/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-background p-6 shadow-2xl lg:hidden"
              data-testid="mobile-menu"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  data-testid="mobile-menu-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full bg-cards text-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                      className="block border-b border-border py-4 font-heading text-2xl font-bold text-secondary transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3">
                <a href="#contact" onClick={() => setOpen(false)} data-testid="mobile-get-quote-btn" className="block rounded-full bg-primary py-4 text-center font-bold text-white shadow-cta">
                  Get Free Quote
                </a>
                <a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-secondary py-4 text-center font-bold text-secondary">
                  <Phone className="h-4 w-4" /> {BUSINESS.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
