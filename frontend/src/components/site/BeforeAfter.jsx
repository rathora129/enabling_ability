import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { SectionLabel } from "./SectionLabel";
import { BEFORE_AFTER } from "@/lib/site-data";

function Comparison({ item }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div className="w-full">
      <div
        ref={ref}
        data-testid="before-after-slider"
        className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-[2rem] shadow-card-hover"
        onMouseDown={(e) => { dragging.current = true; setFromClientX(e.clientX); }}
        onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => setFromClientX(e.touches[0].clientX)}
        onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
      >
        <img src={item.after} alt={`${item.label} after`} className="absolute inset-0 h-full w-full object-cover" draggable={false} loading="lazy" />
        <span className="absolute bottom-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">AFTER</span>

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={item.before}
            alt={`${item.label} before`}
            className="absolute inset-0 h-full w-full max-w-none object-cover"
            style={{ width: ref.current ? ref.current.offsetWidth : "100%" }}
            draggable={false}
            loading="lazy"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white">BEFORE</span>
        </div>

        <div className="absolute inset-y-0 flex items-center" style={{ left: `calc(${pos}% - 1px)` }}>
          <div className="h-full w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]" />
          <button
            aria-label="Drag to compare"
            className="absolute left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-white text-primary shadow-card-hover"
          >
            <MoveHorizontal className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>
      <p className="mt-4 text-center font-heading text-lg font-bold text-secondary">{item.label}</p>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="before-after" data-testid="before-after-section" className="bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="mx-auto">Real Results</SectionLabel>
          <Reveal>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-secondary md:text-5xl">
              Before &amp; after <span className="text-primary">transformations.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Drag the slider to see the Enabling Ability difference for yourself.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {BEFORE_AFTER.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <Comparison item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
