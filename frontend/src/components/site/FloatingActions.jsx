import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { BUSINESS, buildWhatsAppLink } from "@/lib/site-data";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = buildWhatsAppLink({ service: "General enquiry" });

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden flex-col items-center gap-3 sm:flex">
        <AnimatePresence>
          {showTop && (
            <motion.button
              key="top"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="scroll-to-top"
              aria-label="Scroll to top"
              className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-white shadow-card-hover transition-transform hover:scale-110 active:scale-95"
            >
              <ArrowUp className="h-5 w-5" strokeWidth={2} />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={BUSINESS.phoneHref}
          data-testid="floating-call-btn"
          aria-label="Call us"
          className="grid place-items-center rounded-full bg-primary p-3.5 text-white shadow-cta transition-transform hover:scale-110 active:scale-95"
        >
          <Phone className="h-6 w-6" strokeWidth={2} />
        </a>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="relative grid place-items-center rounded-full bg-[#25D366] p-3.5 text-white shadow-card-hover transition-transform hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 -z-10 animate-ping-slow rounded-full bg-[#25D366]/60" />
          <MessageCircle className="h-6 w-6" strokeWidth={2} fill="currentColor" />
        </a>
      </div>
    </>
  );
}
