import Marquee from "react-fast-marquee";
import { Leaf } from "lucide-react";
import { TRUST_BADGES } from "@/lib/site-data";

export function TrustMarquee() {
  const items = [...TRUST_BADGES, "5-Star Rated", "NDIS & Aged Care Friendly", "Free Quotes"];
  return (
    <div data-testid="trust-marquee" className="border-y border-border bg-cards py-5">
      <Marquee speed={38} gradient={false} autoFill pauseOnHover>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-8">
            <Leaf className="h-4 w-4 text-primary" strokeWidth={1.75} />
            <span className="font-heading text-lg font-bold tracking-tight text-secondary md:text-xl">
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
