import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, buildWhatsAppLink } from "@/lib/site-data";

export function MobileCTA() {
  const waLink = buildWhatsAppLink({ service: "General enquiry" });
  return (
    <div data-testid="mobile-sticky-cta" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-white/90 p-3 backdrop-blur-xl sm:hidden">
      <a href={BUSINESS.phoneHref} data-testid="mobile-cta-call" className="flex items-center justify-center gap-2 rounded-full border border-secondary py-3 text-sm font-bold text-secondary">
        <Phone className="h-4 w-4" strokeWidth={2} /> Call Now
      </a>
      <a href={waLink} target="_blank" rel="noopener noreferrer" data-testid="mobile-cta-whatsapp" className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white shadow-cta">
        <MessageCircle className="h-4 w-4" strokeWidth={2} /> Free Quote
      </a>
    </div>
  );
}
