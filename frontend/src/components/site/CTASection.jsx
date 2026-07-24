import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { BUSINESS } from "@/lib/site-data";

export function CTASection() {
  return (
    <section data-testid="cta-section" className="bg-background pb-24 md:pb-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center noise-overlay md:px-16 md:py-24">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />

          <motion.div
            className="pointer-events-none absolute inset-0 -z-0"
            aria-hidden
          />
          <div className="relative">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white/80">
              Need Reliable Lawn &amp; Garden Services?
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-black leading-[1.02] tracking-tight text-white md:text-6xl">
              Get your free quote today.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              No obligation, no pressure — just a friendly chat about how we can help your outdoor space thrive.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                data-testid="cta-quote-btn"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                Request Free Quote
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                data-testid="cta-call-btn"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <Phone className="h-5 w-5" /> {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
