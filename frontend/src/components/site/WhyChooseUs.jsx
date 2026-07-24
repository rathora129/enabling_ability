import * as Icons from "lucide-react";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { WHY_US, BUSINESS } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section id="why-us" data-testid="why-us-section" className="relative overflow-hidden bg-secondary py-24 text-white noise-overlay md:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel dark>Why Choose Us</SectionLabel>
            <Reveal>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
                The difference is in <span className="text-primary">how we work.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/70">
                We&apos;re not just another mowing service. Every job is backed by insurance, professional equipment and a
                team that genuinely cares about the result.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w, i) => {
            const Icon = Icons[w.icon] || Icons.Check;
            return (
              <Reveal
                key={w.title}
                delay={(i % 4) * 0.06}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-cta">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{w.desc}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-primary p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">Ready to see the difference for yourself?</h3>
            <p className="mt-1 text-white/85">Join 500+ happy customers across Australia.</p>
          </div>
          <a href={BUSINESS.phoneHref} data-testid="why-us-call-btn" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-primary transition-transform hover:scale-[1.03] active:scale-95">
            <Icons.Phone className="h-5 w-5" strokeWidth={2} /> {BUSINESS.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
