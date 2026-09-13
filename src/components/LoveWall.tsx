"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const LOVE_QUOTES = [
  { text: "Forever looks beautiful on you two.", author: "Siddharth & Meera", delay: 0 },
  { text: "Two hearts, one forever.", author: "Pooja & Friends", delay: 0.15 },
  { text: "Here's to a lifetime of happiness and endless smiles!", author: "Vikram & Group", delay: 0.3 },
  { text: "May your love grow stronger with every passing day.", author: "Deepak Uncle", delay: 0.45 },
  { text: "The perfect match made in heaven!", author: "Kavya & Neha", delay: 0.6 },
  { text: "Wishing you a fairytale journey filled with joy.", author: "Rohan & Family", delay: 0.75 },
];

export const LoveWall: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#070709] via-[#0e0e14] to-[#070709]">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[radial-gradient(circle,_rgba(212,175,55,0.1)_0%,_transparent_70%)] pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[radial-gradient(circle,_rgba(245,230,171,0.08)_0%,_transparent_70%)] pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
              Whispers of Joy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl gold-text-gradient font-normal"
          >
            Wall of Love ❤️
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-[#B8B09F] font-heading max-w-xl mx-auto mt-3 italic font-light"
          >
            Sweet short notes and heartfelt blessings from friends and family.
          </motion.p>
        </div>

        {/* Floating Wall Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOVE_QUOTES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: item.delay }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="luxury-card rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 flex flex-col justify-between relative group shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-4">
                <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]/30 group-hover:scale-110 transition-transform" />
                <Star className="w-3.5 h-3.5 text-[#F5E6AB]/40" />
              </div>

              <p className="font-script text-2xl sm:text-3xl text-[#FFFDF7] my-3 leading-snug">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="mt-4 pt-3 border-t border-[#D4AF37]/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-heading font-medium">
                  {item.author}
                </span>
                <span className="text-[10px] text-[#B8B09F]">✦ With Love</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
