"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-12 px-6 border-t border-[#D4AF37]/20 bg-[#050507] text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-heading font-medium">
            Forever & Always
          </span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </div>

        <p className="font-heading text-lg sm:text-xl text-[#FFFDF7]/90 italic font-light mb-2">
          With Love, Laughter & Blessings
        </p>

        <h2 className="font-script text-4xl sm:text-6xl gold-text-gradient my-2">
          Lavanya & Praveenn
        </h2>

        <p className="text-xs sm:text-sm text-[#B8B09F] font-heading max-w-md my-3 font-light">
          Thank you for being part of their beautiful journey.
        </p>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent my-8" />

        {/* Required Credit */}
        <div className="flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]/90 font-heading font-medium">
            Designed by Yashwanth Friends
          </p>
        </div>
      </div>
    </footer>
  );
};
