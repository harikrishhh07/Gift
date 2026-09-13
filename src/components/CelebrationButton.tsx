"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Stars } from "lucide-react";
import confetti from "canvas-confetti";

export const CelebrationButton: React.FC = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);

  const triggerCelebration = () => {
    setIsCelebrating(true);

    const luxuryColors = ["#D4AF37", "#F5E6AB", "#FFFDF7", "#C5A059", "#E6CA65", "#F7E7CE"];

    // Multi-shot luxury gold confetti blast
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: luxuryColors,
      disableForReducedMotion: true,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      scalar: 1.1,
    });
    fire(0.2, {
      spread: 60,
      scalar: 0.9,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      scalar: 1.0,
    });

    setTimeout(() => {
      setIsCelebrating(false);
    }, 4000);
  };

  return (
    <section className="relative py-20 px-6 text-center overflow-hidden">
      {/* Background radial highlight */}
      <AnimatePresence>
        {isCelebrating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/25 via-transparent to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 gold-border-glow flex flex-col items-center"
        >
          <div className="p-3 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] mb-4">
            <Stars className="w-6 h-6 animate-spin" style={{ animationDuration: "8s" }} />
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl gold-text-gradient font-normal mb-3">
            Join The Royal Celebration
          </h3>

          <p className="text-sm text-[#B8B09F] font-heading max-w-md mx-auto mb-8 italic">
            Click below to launch golden sparkles and shower your blessing upon Lavanya & Praveenn!
          </p>

          <button
            onClick={triggerCelebration}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF5C0] to-[#C5A059] text-[#070709] font-bold text-base sm:text-lg uppercase tracking-widest hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] transition-all duration-500 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 fill-[#070709] group-hover:rotate-45 transition-transform duration-500" />
            <span>LET&apos;S CELEBRATE! ✨</span>
            <Heart className="w-5 h-5 fill-[#070709] group-hover:scale-125 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
