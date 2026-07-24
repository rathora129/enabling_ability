import { Reveal } from "@/lib/motion";

export function SectionLabel({ children, dark = false, className = "" }) {
  return (
    <Reveal
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] ${
        dark
          ? "border-white/20 bg-white/5 text-accent"
          : "border-border bg-white text-primary"
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </Reveal>
  );
}
