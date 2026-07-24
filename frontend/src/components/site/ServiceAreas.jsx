import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { AREAS } from "@/lib/site-data";

const PINS = [
  { city: "Darwin", top: "16%", left: "42%" },
  { city: "Brisbane", top: "44%", left: "78%" },
  { city: "Sydney", top: "62%", left: "80%" },
  { city: "Melbourne", top: "74%", left: "68%" },
  { city: "Adelaide", top: "64%", left: "56%" },
  { city: "Perth", top: "58%", left: "16%" },
];

export function ServiceAreas() {
  return (
    <section id="service-areas" data-testid="service-areas-section" className="bg-cards py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Map */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-square w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-card">
              <svg viewBox="0 0 800 640" className="h-full w-full">
                <defs>
                  <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#A8D0B3" />
                    <stop offset="100%" stopColor="#0A2B1E" />
                  </linearGradient>
                  <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.6" fill="#0A2B1E" opacity="0.25" />
                  </pattern>
                </defs>
                <path
                  d="M 210 250 C 250 200 360 195 450 212 C 495 220 540 205 585 240 C 640 282 665 345 632 400 C 612 435 566 448 552 492 C 540 528 498 548 452 528 C 420 514 388 524 348 518 C 285 508 232 482 198 432 C 165 384 158 300 210 250 Z"
                  fill="url(#mapGrad)"
                  opacity="0.95"
                />
                <path
                  d="M 210 250 C 250 200 360 195 450 212 C 495 220 540 205 585 240 C 640 282 665 345 632 400 C 612 435 566 448 552 492 C 540 528 498 548 452 528 C 420 514 388 524 348 518 C 285 508 232 482 198 432 C 165 384 158 300 210 250 Z"
                  fill="url(#dots)"
                />
                <circle cx="560" cy="575" r="26" fill="url(#mapGrad)" opacity="0.95" />
              </svg>

              {PINS.map((p, i) => (
                <motion.div
                  key={p.city}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={{ top: p.top, left: p.left }}
                >
                  <div className="relative flex flex-col items-center">
                    <span className="whitespace-nowrap rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold text-white shadow-card">
                      {p.city}
                    </span>
                    <span className="relative mt-1 grid h-4 w-4 place-items-center">
                      <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-primary/60" />
                      <span className="relative h-3 w-3 rounded-full border-2 border-white bg-primary" />
                    </span>
                  </div>
                </motion.div>
              ))}

              <span className="absolute bottom-6 left-8 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-cta">
                Australia Wide
              </span>
            </div>
          </Reveal>

          {/* Copy + cards */}
          <div className="order-1 lg:order-2">
            <SectionLabel>Who We Serve</SectionLabel>
            <Reveal>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
                Serving homes &amp; businesses <span className="text-primary">across the country.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Whatever your setting, we tailor our service to suit. From single homes to large strata grounds — we&apos;ve got you covered.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {AREAS.map((a, i) => {
                const Icon = Icons[a.icon] || Icons.MapPin;
                return (
                  <Reveal
                    key={a.title}
                    delay={(i % 3) * 0.06}
                    className="group rounded-2xl border border-border bg-white p-5 transition-shadow duration-300 hover:shadow-card"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/30 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-bold text-secondary">{a.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
