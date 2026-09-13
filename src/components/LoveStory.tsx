"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Compass, Infinity, Stars } from "lucide-react";

const STORY_TIMELINE = [
  {
    icon: Compass,
    title: "Two Lives",
    subtitle: "Separate Paths, Destined to Meet",
    description:
      "Two distinct worlds, each filled with dreams, laughter, and aspirations, moving along parallel paths guided by fate towards a magical intersection.",
    tag: "Chapter I",
  },
  {
    icon: Sparkles,
    title: "One Beautiful Connection",
    subtitle: "A Spark That Lit Up Their Universe",
    description:
      "A quiet glance, a shared smile, and an instant spark that ignited something extraordinary. They discovered a profound warmth in each other's presence.",
    tag: "Chapter II",
  },
  {
    icon: Heart,
    title: "A Journey Together",
    subtitle: "Growing Stronger Side by Side",
    description:
      "Through season after season, sharing unspoken understanding, quiet moments, and endless happiness. Building trust, companionship, and timeless memories.",
    tag: "Chapter III",
  },
  {
    icon: Infinity,
    title: "Forever Begins",
    subtitle: "Two Hearts Bound for Eternity",
    description:
      "Hand in hand, stepping into a lifetime of togetherness. Today they promise to love, cherish, and celebrate one another through all of life's chapters.",
    tag: "Chapter IV",
  },
];

export const LoveStory: React.FC = () => {
  return (
    <section id="story" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 mb-3"
          >
            <Stars className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-heading font-medium">
              The Romantic Timeline
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl gold-text-gradient font-normal"
          >
            From Two Stories to One
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-[#B8B09F] font-heading max-w-xl mx-auto mt-3 italic font-light"
          >
            &ldquo;Every love story is beautiful, but theirs is our absolute favorite.&rdquo;
          </motion.p>
        </div>

        {/* Timeline Center Line */}
        <div className="absolute left-1/2 top-44 bottom-12 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent hidden md:block" />

        {/* Timeline Cards */}
        <div className="space-y-12 md:space-y-16">
          {STORY_TIMELINE.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Box */}
                <div className="w-full md:w-1/2 px-0 md:px-8">
                  <div className="luxury-card rounded-2xl p-6 sm:p-8 relative gold-border hover:gold-border-glow">
                    <span className="text-[10px] font-heading uppercase tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full inline-block mb-3 bg-black/40">
                      {item.tag}
                    </span>

                    <h3 className="font-heading text-2xl sm:text-3xl text-[#FFFDF7] font-medium mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs uppercase tracking-wider text-[#F5E6AB] font-heading mb-4">
                      {item.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#B8B09F] leading-relaxed font-heading font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon Marker */}
                <div className="my-4 md:my-0 relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#111116] border border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] text-[#D4AF37] md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon className="w-5 h-5 animate-pulse" />
                </div>

                {/* Empty Half for Grid Symmetry */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
