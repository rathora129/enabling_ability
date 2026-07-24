import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Sparkles } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { STATS } from "@/lib/site-data";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-5xl font-black tracking-tight text-secondary md:text-6xl">
      {n}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

const CHAPTERS = [
  { no: "01", icon: Target, title: "Our Mission", text: "To take the stress out of outdoor upkeep — delivering dependable, high-quality lawn and garden care that lets Australians enjoy beautiful spaces without lifting a finger." },
  { no: "02", icon: Heart, title: "Our Values", text: "Respect, reliability and craftsmanship. We treat every property as if it were our own, and every client — including NDIS and Aged Care — with genuine care." },
  { no: "03", icon: Sparkles, title: "Our Promise", text: "Show up on time, communicate clearly, and leave every space looking its absolute best. If it isn't right, we make it right." },
];

export function About() {
  return (
    <section id="about" data-testid="about-section" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: image + stats */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>About Enabling Ability</SectionLabel>
              <Reveal delay={0.05}>
                <div className="relative mt-8 overflow-hidden rounded-[50%_50%_2rem_2rem/12%_12%_2rem_2rem] shadow-card-hover">
                  <img
                    src="https://images.pexels.com/photos/5163429/pexels-photo-5163429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=700"
                    alt="Professional landscaper caring for a premium lawn"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                </div>
              </Reveal>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <Reveal key={s.label} delay={0.1} className="rounded-3xl bg-cards p-5 text-center shadow-card">
                    <Counter value={s.value} suffix={s.suffix} />
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right: manifesto */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
                Locally trusted care for the<span className="text-primary"> spaces you love.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Founded and led by director <span className="font-semibold text-secondary">Sue Nandy</span>, Enabling
                Ability blends over a decade of hands-on experience with a modern, customer-first approach to lawn
                mowing, gardening and property maintenance.
              </p>
            </Reveal>

            <div className="mt-12 space-y-4">
              {CHAPTERS.map((c, i) => (
                <Reveal
                  key={c.no}
                  delay={i * 0.08}
                  className="group flex gap-5 rounded-3xl border border-border bg-white p-6 transition-shadow duration-300 hover:shadow-card md:p-8"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-sm font-black text-primary">{c.no}</span>
                    <span className="mt-3 h-full w-px bg-border" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/30 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <c.icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <h3 className="font-heading text-xl font-bold text-secondary">{c.title}</h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
