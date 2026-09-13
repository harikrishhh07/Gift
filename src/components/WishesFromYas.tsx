"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Quote, Star } from "lucide-react";

export const WishesFromYas: React.FC = () => {
  return (
    <section id="wishes-from-yashwanth" className="relative py-24 px-6 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(212,175,55,0.14)_0%,_transparent_70%)] pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-heading font-medium">
              A Special Note of Love
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl gold-text-gradient font-normal"
          >
            Wishes from Yashwanth & Friends 💌
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-[#B8B09F] font-heading max-w-lg mx-auto mt-3 italic font-light"
          >
            A heartfelt blessing from Yashwanth & Friends for Lavanya & Praveenn on their beautiful union.
          </motion.p>
        </div>

        {/* Feature Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-8 sm:p-14 border border-[#D4AF37]/40 gold-border-glow relative"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-6 left-6 text-[#D4AF37]/40 text-xl font-heading">✦</div>
          <div className="absolute top-6 right-6 text-[#D4AF37]/40 text-xl font-heading">✦</div>
          <div className="absolute bottom-6 left-6 text-[#D4AF37]/40 text-xl font-heading">✦</div>
          <div className="absolute bottom-6 right-6 text-[#D4AF37]/40 text-xl font-heading">✦</div>

          <Quote className="w-12 h-12 text-[#D4AF37]/20 mb-6 mx-auto" />

          {/* Letter Body */}
          <div className="space-y-6 text-center">
            <h3 className="font-script text-3xl sm:text-5xl gold-text-gradient font-normal">
              Dear Lavanya & Praveenn,
            </h3>

            <p className="font-heading text-lg sm:text-2xl text-[#FFFDF7]/95 leading-relaxed italic font-light max-w-2xl mx-auto">
              &ldquo;Seeing you two together fills our hearts with so much pure joy and happiness. You complement each other in every way, bringing warmth, laughter, and light into every room you enter.&rdquo;
            </p>

            <p className="font-heading text-base sm:text-xl text-[#B8B09F] leading-relaxed font-light max-w-2xl mx-auto">
              May your home always be blessed with unconditional love, spontaneous laughter, quiet peace, and endless beautiful moments. Here&apos;s to a lifelong fairytale journey together!
            </p>

            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />

            {/* Signature Badge */}
            <div className="flex flex-col items-center justify-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5E6AB]">
                <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="font-script text-2xl font-bold">With All Our Love</span>
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
              </div>

              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-heading font-semibold mt-1">
                Yashwanth & Friends
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
