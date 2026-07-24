import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-secondary noise-overlay"
        >
          <div className="flex flex-col items-center">
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className="h-20 w-20 overflow-hidden rounded-2xl shadow-cta"
            >
              <img src="/logo.png" alt="Enabling Ability" className="h-full w-full object-cover" />
            </motion.span>
            <div className="mt-6 overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-2xl font-black tracking-tight text-white"
              >
                Enabling<span className="text-primary">Ability</span>
              </motion.p>
            </div>
            <div className="mt-5 h-0.5 w-40 overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full w-full bg-primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
