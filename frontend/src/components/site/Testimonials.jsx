import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { TESTIMONIALS } from "@/lib/site-data";

const AVATAR_BG = ["bg-primary", "bg-accent", "bg-white/15"];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const id = setInterval(() => emblaApi.scrollNext(), 5500);
    return () => { emblaApi.off("select", onSelect); clearInterval(id); };
  }, [emblaApi]);

  return (
    <section id="testimonials" data-testid="testimonials-section" className="relative overflow-hidden bg-secondary py-24 text-white noise-overlay md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel dark>Customer Reviews</SectionLabel>
            <Reveal>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
                Loved by <span className="text-primary">500+ Australians.</span>
              </h2>
            </Reveal>
          </div>
          <div className="flex gap-3">
            <button onClick={scrollPrev} data-testid="testimonial-prev" aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={scrollNext} data-testid="testimonial-next" aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-cta transition-transform hover:scale-105">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full pr-6 md:basis-1/2 lg:basis-1/3">
                <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm" data-testid={`testimonial-${i}`}>
                  <Quote className="h-9 w-9 text-primary" strokeWidth={1.5} />
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-lg leading-relaxed text-white/90">“{t.text}”</p>
                  <div className="mt-7 flex items-center gap-3">
                    <span className={`grid h-12 w-12 place-items-center rounded-full font-heading text-lg font-black text-secondary ${AVATAR_BG[i % AVATAR_BG.length]}`}>
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm text-white/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${selected === i ? "w-8 bg-primary" : "w-2 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
