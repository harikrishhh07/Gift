"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Filter, Quote } from "lucide-react";
import { Wish } from "@/services/wishesService";

interface DigitalGuestbookProps {
  wishes: Wish[];
}

export const DigitalGuestbook: React.FC<DigitalGuestbookProps> = ({ wishes }) => {
  const [filter, setFilter] = useState<"all" | "family" | "friends">("all");

  const filteredWishes = wishes.filter((w) => {
    if (filter === "all") return true;
    return w.category === filter;
  });

  return (
    <section id="guestbook" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-heading font-medium">
              Digital Keepsake
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl gold-text-gradient font-normal"
          >
            Messages From People Who Love You
          </motion.h2>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <Filter className="w-4 h-4 text-[#D4AF37]" />
            {[
              { id: "all", label: "All Wishes" },
              { id: "family", label: "Family" },
              { id: "friends", label: "Friends" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as "all" | "family" | "friends")}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 font-heading cursor-pointer ${
                  filter === item.id
                    ? "bg-[#D4AF37] text-[#070709] border-[#D4AF37] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-black/40 border-[#D4AF37]/20 text-[#B8B09F] hover:border-[#D4AF37]/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Wishes Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative group"
              >
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37]/15 group-hover:text-[#D4AF37]/30 transition-colors" />

                <div>
                  {/* Category Pill & Timestamp */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#F5E6AB] font-heading font-medium">
                      {wish.category === "family" ? "Family" : "Friends"}
                    </span>
                    <span className="text-[10px] text-[#B8B09F]/70 font-heading">
                      {new Date(wish.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Wish Message */}
                  <p className="font-heading text-base sm:text-lg text-[#FFFDF7]/90 leading-relaxed italic font-light my-2">
                    &ldquo;{wish.message}&rdquo;
                  </p>
                </div>

                {/* Sender Name & Footer */}
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-lg text-[#F5E6AB] font-medium">
                      {wish.name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] flex items-center gap-1 font-heading">
                      ✦ With Love
                    </span>
                  </div>

                  <div className="p-2 rounded-full bg-black/40 text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredWishes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#B8B09F] font-heading italic">
              No wishes found in this category yet. Be the first to leave one!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
