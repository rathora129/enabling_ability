import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { SERVICES } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" data-testid="services-section" className="bg-cards py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <SectionLabel>What We Do</SectionLabel>
          <Reveal>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
              A complete outdoor care service, <span className="text-primary">under one roof.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From a quick fortnightly mow to full property transformations — whatever your garden needs, we&apos;ve got it covered.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Leaf;
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.06}
                as="div"
              >
                <motion.a
                  href="#contact"
                  data-testid={`service-card-${i}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                >
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-secondary">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
