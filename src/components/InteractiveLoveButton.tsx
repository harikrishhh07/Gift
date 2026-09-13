"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { wishesService } from "@/services/wishesService";

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const InteractiveLoveButton: React.FC = () => {
  const [loveCount, setLoveCount] = useState(348);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setLoveCount(wishesService.getLoveCount());
  }, []);

  const handleSendLove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = wishesService.incrementLoveCount();
    setLoveCount(newCount);
    setIsAnimating(true);

    // Trigger golden burst confetti
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ["#D4AF37", "#F5E6AB", "#FFFDF7", "#C5A059"],
      shapes: ["circle"],
      ticks: 120,
      gravity: 0.8,
      scalar: 0.8,
    });

    // Add floating hearts
    const newHearts: FloatingHeart[] = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120,
      y: -20 - Math.random() * 40,
      size: Math.random() * 12 + 16,
    }));

    setFloatingHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    // Clean up hearts after animation finishes
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => !newHearts.includes(h)));
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-8">
      {/* Floating Hearts Container */}
      <div className="absolute -top-12 pointer-events-none">
        <AnimatePresence>
          {floatingHearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 1, y: 0, x: h.x, scale: 0.6 }}
              animate={{ opacity: 0, y: -120, x: h.x * 1.5, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute text-[#D4AF37]"
              style={{ fontSize: `${h.size}px` }}
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        onClick={handleSendLove}
        className={`group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#111116] via-[#1a1a24] to-[#111116] border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 transform active:scale-95 cursor-pointer ${
          isAnimating ? "scale-105 border-[#FFF5C0]" : ""
        }`}
      >
        <div className="p-2 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#070709] transition-all duration-300">
          <Heart className="w-5 h-5 fill-current animate-pulse" />
        </div>

        <div className="flex flex-col items-start text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#FFFDF7] group-hover:text-[#F5E6AB] transition-colors">
            Send Love ❤️
          </span>
          <span className="text-xs text-[#D4AF37] font-heading font-medium">
            {loveCount.toLocaleString()} people sent their love
          </span>
        </div>

        <Sparkles className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};
