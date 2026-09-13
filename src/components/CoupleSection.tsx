"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-heading font-medium">
              Together In Love
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl gold-text-gradient font-normal"
          >
            Meet the Beautiful Couple
          </motion.h2>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Couple Image Frame */}
          <div className="md:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden gold-border-glow bg-[#070709] group">
              <img
                src="/images/couple-main.jpg"
                alt="Lavanya & Praveenn"
                className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-xs text-[#F5E6AB]">
                <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                <span>Unified Hearts</span>
              </div>
            </div>
          </div>

          {/* Couple Bio & Blessings */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-heading font-medium">
              Bride & Groom
            </span>

            <h3 className="font-script text-4xl sm:text-6xl gold-text-gradient my-2">
              Lavanya & Praveenn
            </h3>

            <div className="w-16 h-[1px] bg-[#D4AF37]/40 my-4" />

            <p className="font-heading text-lg sm:text-xl text-[#FFFDF7]/90 leading-relaxed font-light italic my-2">
              &ldquo;May your journey together be filled with endless love, beautiful memories, laughter, understanding, and countless reasons to smile.&rdquo;
            </p>

            <div className="mt-6 p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#D4AF37] animate-pulse fill-[#D4AF37]" />
              <span className="text-sm text-[#F5E6AB] font-heading">
                Bound by love, blessed by family & friends forever.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
