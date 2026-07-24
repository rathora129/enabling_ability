import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Users, Clock, BadgeDollarSign } from "lucide-react";
import { KineticHeading } from "@/lib/motion";
import { BUSINESS } from "@/lib/site-data";

const HERO_IMG =
  "https://images.unsplash.com/photo-1782939355849-4a748ada9c84?crop=entropy&cs=srgb&fm=jpg&w=1920&q=68&fit=crop&ixlib=rb-4.1.0";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Users, label: "Professional Team" },
  { icon: Clock, label: "Reliable Service" },
  { icon: BadgeDollarSign, label: "Affordable Pricing" },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section id="home" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 scale-110">
        <img src={HERO_IMG} alt="Beautiful home with a lush, professionally maintained green lawn" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 z-0 bg-gradient-to-r from-secondary via-secondary/70 to-secondary/20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-secondary/80 via-transparent to-secondary/30" />

      <motion.div style={{ y: contentY }} className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-40">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Premium Lawn &amp; Garden Care · {BUSINESS.region}
          </motion.span>

          <h1 className="font-heading text-[2.7rem] font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <KineticHeading
              lines={["Professional Lawn", "Mowing & Garden"]}
              delay={0.25}
            />
            <span className="kinetic-line">
              <motion.span
                className="block text-primary"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 + 0.24 }}
              >
                Maintenance Services
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Reliable lawn mowing, gardening, property maintenance and outdoor care
            delivered with quality, consistency and genuine attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              data-testid="hero-quote-btn"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-cta transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Request Free Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a
              href={BUSINESS.phoneHref}
              data-testid="hero-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
              Call Now
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating trust badges */}
      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.12, duration: 0.6 }}
                className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl"
                data-testid={`hero-badge-${i}`}
              >
                <b.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                {b.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
