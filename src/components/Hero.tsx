"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  const handleScrollToWishes = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#wishes-from-yashwanth")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCelebration = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#celebrate-love")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[radial-gradient(circle,_rgba(212,175,55,0.18)_0%,_transparent_70%)] pointer-events-none rounded-full blur-3xl" />

      {/* Hanging Golden Lights Vignette */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-heading font-medium">
            Lavanya & Praveenn • Wedding Celebration
          </span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </motion.div>

        {/* Powerful Emotional Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-xl sm:text-2xl md:text-3xl font-light italic text-[#FFFDF7]/90 tracking-wide mb-3"
        >
          Two Hearts. One Beautiful Journey.
        </motion.h2>

        {/* Main Couple Names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-script text-5xl sm:text-7xl md:text-8xl gold-text-gradient py-2 my-1 tracking-tight drop-shadow-[0_4px_25px_rgba(212,175,55,0.3)]"
        >
          Lavanya <span className="text-[#D4AF37] font-sans inline-block mx-2 text-4xl md:text-6xl animate-pulse">❤️</span> Praveenn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg text-[#B8B09F] font-heading max-w-xl mb-8 tracking-wider uppercase"
        >
          Let&apos;s celebrate their beautiful beginning
        </motion.p>

        {/* Hero Couple Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1 }}
          className="relative my-6 group"
        >
          {/* Glowing Outer Ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4AF37] via-[#FFF5C0] to-[#C5A059] opacity-40 blur-xl group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

          {/* Luxury Border Box */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#111116] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-sm sm:max-w-md">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#070709]">
              {/* Couple Image fitted cleanly to couple portrait */}
              <img
                src="/images/couple-main.jpg"
                alt="Lavanya and Praveenn Wedding Celebration"
                className="w-full h-full object-cover object-bottom scale-105 hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="font-script text-2xl text-[#F5E6AB]">Forever Begins Today</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full max-w-md"
        >
          <a
            href="#wishes-from-yashwanth"
            onClick={handleScrollToWishes}
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6AB] to-[#C5A059] text-[#070709] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Wishes from Yashwanth & Friends</span>
            <Sparkles className="w-4 h-4 fill-[#070709]" />
          </a>

          <a
            href="#celebrate-love"
            onClick={handleScrollToCelebration}
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-full border border-[#D4AF37]/50 text-[#FFFDF7] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 backdrop-blur-sm"
          >
            <span>Celebrate With Them</span>
            <Heart className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-14 flex flex-col items-center gap-2 text-[#B8B09F]"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-heading">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
