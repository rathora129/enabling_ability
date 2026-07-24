import * as Icons from "lucide-react";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { STEPS } from "@/lib/site-data";

export function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mx-auto">How It Works</SectionLabel>
          <Reveal>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
              Four simple steps to a <span className="text-primary">better garden.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {STEPS.map((step, i) => {
            const Icon = Icons[step.icon] || Icons.Check;
            return (
              <Reveal
                key={step.no}
                delay={i * 0.1}
                className="relative flex flex-col items-center rounded-3xl bg-cards p-8 text-center shadow-card"
              >
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white shadow-card ring-1 ring-border">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-primary font-heading text-xs font-black text-white">
                    {step.no}
                  </span>
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-secondary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
