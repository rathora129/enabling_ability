import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="relative overflow-hidden bg-secondary pt-20 text-white noise-overlay">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-xs leading-relaxed text-white/65">
              Premium lawn mowing, gardening and property maintenance delivered across Australia with quality,
              consistency and genuine care.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#home" aria-label="Social link" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white/50">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/75 transition-colors hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white/50">Popular Services</h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-white/75 transition-colors hover:text-primary">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white/50">Get In Touch</h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white/80 transition-colors hover:text-primary">
                  <Phone className="h-5 w-5 shrink-0" strokeWidth={1.75} /> {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={BUSINESS.emailHref} className="flex items-center gap-3 break-all text-white/80 transition-colors hover:text-primary">
                  <Mail className="h-5 w-5 shrink-0" strokeWidth={1.75} /> {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5 shrink-0" strokeWidth={1.75} /> {BUSINESS.region}
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-bold text-white">Business Hours</p>
              {BUSINESS.hours.map((h) => (
                <div key={h.day} className="mt-2 flex justify-between text-sm text-white/65">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-white/55 md:flex-row">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Director: {BUSINESS.director} · Fully Insured · ABN available on request</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-primary hover:text-primary" data-testid="footer-back-to-top">
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
