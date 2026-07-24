export function Logo({ dark = false, className = "" }) {
  const textColor = dark ? "text-white" : "text-secondary";
  return (
    <a href="#home" data-testid="logo-link" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative h-11 w-11 overflow-hidden rounded-xl shadow-card ring-1 ring-black/5 transition-transform duration-300 group-hover:-rotate-6">
        <img src="/logo.png" alt="Enabling Ability logo" className="h-full w-full object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-lg font-extrabold tracking-tight ${textColor}`}>
          Enabling<span className="text-primary">Ability</span>
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-white/60" : "text-muted-foreground"}`}>
          Lawn &amp; Garden Care
        </span>
      </span>
    </a>
  );
}
