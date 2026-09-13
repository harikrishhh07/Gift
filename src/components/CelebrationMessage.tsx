"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export const CelebrationMessage: React.FC = () => {
  return (
    <section id="celebrate-love" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow & subtle ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,_rgba(212,175,55,0.12)_0%,_transparent_70%)] pointer-events-none rounded-full blur-2xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-8 sm:p-14 relative gold-border-glow"
        >
          {/* Decorative Corner Filigrees */}
          <div className="absolute top-4 left-4 text-[#D4AF37]/40 text-xl font-heading">✦</div>
          <div className="absolute top-4 right-4 text-[#D4AF37]/40 text-xl font-heading">✦</div>
          <div className="absolute bottom-4 left-4 text-[#D4AF37]/40 text-xl font-heading">✦</div>
          <div className="absolute bottom-4 right-4 text-[#D4AF37]/40 text-xl font-heading">✦</div>

          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-heading font-medium block mb-2">
            A Moment In Time
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl gold-text-gradient mb-6 font-normal">
            Today, We Celebrate Love
          </h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />

          <p className="font-heading text-lg sm:text-2xl text-[#FFFDF7]/90 leading-relaxed font-light italic max-w-2xl mx-auto">
            &ldquo;Two beautiful souls are beginning a new chapter together. Let&apos;s fill their journey with love, laughter, blessings, and unforgettable memories.&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/30" />
            <span className="font-script text-2xl text-[#F5E6AB]">Lavanya & Praveenn</span>
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
