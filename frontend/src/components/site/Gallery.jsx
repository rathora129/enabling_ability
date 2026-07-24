import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { GALLERY } from "@/lib/site-data";

export function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" data-testid="gallery-section" className="bg-cards py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel>Our Work</SectionLabel>
            <Reveal>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
                A gallery of gardens <span className="text-primary">we&apos;re proud of.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              Tap any image to explore our recent lawn, garden and property maintenance projects.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 gap-4 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(g)}
              data-testid={`gallery-item-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-white/90 text-primary opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" strokeWidth={2} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-[60] grid place-items-center bg-secondary/90 p-6 backdrop-blur-md"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              data-testid="lightbox-close"
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
