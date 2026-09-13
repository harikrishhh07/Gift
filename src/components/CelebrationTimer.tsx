"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Heart } from "lucide-react";

export const CelebrationTimer: React.FC = () => {
  // Target date: September 12, 2026, 19:00:00 IST (UTC+5:30)
  const targetDate = new Date("2026-09-12T19:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-8 sm:p-12 text-center gold-border relative"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-xs uppercase tracking-widest text-[#F5E6AB]">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>12 September 2026 • 7:00 PM IST</span>
            </div>
          </div>

          {timeLeft.isPast ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-4 flex flex-col items-center gap-3"
            >
              <h3 className="font-heading text-3xl sm:text-5xl gold-text-gradient font-semibold">
                THE CELEBRATION HAS BEGUN! ✨
              </h3>
              <p className="font-script text-3xl text-[#F5E6AB] flex items-center gap-2">
                <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
                Let&apos;s celebrate Lavanya & Praveenn!
                <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              </p>
            </motion.div>
          ) : (
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#FFFDF7] font-normal mb-8">
                Counting Down To The Celebration
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINUTES", value: timeLeft.minutes },
                  { label: "SECONDS", value: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl bg-black/60 border border-[#D4AF37]/20 flex flex-col items-center justify-center"
                  >
                    <span className="font-heading text-3xl sm:text-5xl gold-text-gradient font-bold tracking-tight">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8B09F] font-heading mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#B8B09F] font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Join us in showering blessings upon the happy couple</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
