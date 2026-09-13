"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface OpeningIntroProps {
  onComplete: () => void;
}

const INTRO_STEPS = [
  { id: 1, text: "Love brought them together...", duration: 2500 },
  { id: 2, text: "Dreams brought them closer...", duration: 2500 },
  { id: 3, text: "And today...", duration: 2000 },
  { id: 4, text: "A beautiful new chapter begins.", duration: 2500 },
];

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showCoupleReveal, setShowCoupleReveal] = useState(false);

  useEffect(() => {
    if (currentStepIndex < INTRO_STEPS.length) {
      const timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, INTRO_STEPS[currentStepIndex].duration);
      return () => clearTimeout(timer);
    } else if (currentStepIndex === INTRO_STEPS.length) {
      setShowCoupleReveal(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 bg-[#050507] flex flex-col items-center justify-center p-6 text-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

      {/* Subtle floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <Sparkles className="absolute top-1/4 left-1/5 text-[#D4AF37] w-6 h-6 animate-pulse" />
        <Sparkles className="absolute bottom-1/3 right-1/4 text-[#F5E6AB] w-5 h-5 animate-pulse" style={{ animationDelay: "1s" }} />
        <Sparkles className="absolute top-1/2 right-1/5 text-[#D4AF37] w-4 h-4 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute top-8 right-8 z-50 text-xs tracking-widest uppercase text-[#B8B09F] hover:text-[#F5E6AB] border border-[#D4AF37]/30 hover:border-[#D4AF37] px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-md bg-black/40"
      >
        Skip Intro ✦
      </button>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
        <AnimatePresence mode="wait">
          {currentStepIndex < INTRO_STEPS.length && (
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <Heart className="w-6 h-6 text-[#D4AF37]/70 animate-pulse" />
              <p className="font-heading text-2xl md:text-4xl text-[#FFFDF7] tracking-wide font-light italic">
                &ldquo;{INTRO_STEPS[currentStepIndex].text}&rdquo;
              </p>
            </motion.div>
          )}

          {showCoupleReveal && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#FFF5C0] to-[#997A15] shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#070709]">
                  {/* Image cropped to couple illustration */}
                  <img
                    src="/images/couple-main.jpg"
                    alt="Lavanya & Praveenn"
                    className="w-full h-full object-cover object-bottom scale-110"
                  />
                </div>
              </div>

              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]"
                >
                  Celebrating The Union Of
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-script text-4xl md:text-6xl gold-text-gradient mt-1"
                >
                  Lavanya <span className="text-[#D4AF37] font-sans inline-block mx-1.5 text-3xl md:text-5xl animate-pulse">❤️</span> Praveenn
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B8B09F] mt-2"
              >
                <span>Love</span>
                <span>•</span>
                <span>Blessings</span>
                <span>•</span>
                <span>Forever</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
