"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Send, CheckCircle2, User, MessageSquare, Tag } from "lucide-react";
import { wishesService, Wish } from "@/services/wishesService";

interface WishesSectionProps {
  onWishAdded: (wish: Wish) => void;
}

export const WishesSection: React.FC<WishesSectionProps> = ({ onWishAdded }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<"family" | "friends">("friends");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; message?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (name.trim().length > 50) {
      newErrors.name = "Name should be under 50 characters";
    }

    if (!message.trim()) {
      newErrors.message = "Please write your blessing message";
    } else if (message.trim().length < 5) {
      newErrors.message = "Message should be at least 5 characters long";
    } else if (message.trim().length > 300) {
      newErrors.message = "Message should be under 300 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newWish = wishesService.addWish(name, message, category);
      onWishAdded(newWish);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success state
      setTimeout(() => {
        setName("");
        setMessage("");
        setIsSubmitted(false);
      }, 5000);
    }, 600);
  };

  return (
    <section id="wishes" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 mb-3"
          >
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-heading font-medium">
              Shower Blessings
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl gold-text-gradient font-normal"
          >
            Send Your Love & Wishes 💌
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-[#B8B09F] font-heading max-w-lg mx-auto mt-3 italic font-light"
          >
            Leave your heartfelt message for Laranya & Pareenn to cherish forever in their digital guestbook.
          </motion.p>
        </div>

        {/* Card Form container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-6 sm:p-10 gold-border-glow relative"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-[#FFFDF7] font-medium">
                  Wish Sent Successfully!
                </h3>

                <p className="font-script text-3xl gold-text-gradient max-w-md">
                  &ldquo;Your wishes have reached Laranya & Pareenn ❤️&rdquo;
                </p>

                <p className="text-xs uppercase tracking-widest text-[#B8B09F] font-heading pt-2">
                  Thank you for being part of their magical journey.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Category Selection */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-heading font-medium flex items-center gap-2 mb-2">
                    <Tag className="w-3.5 h-3.5" />
                    <span>I am sending wishes as</span>
                  </label>

                  <div className="flex gap-4">
                    {[
                      { id: "friends", label: "Friend / Colleague" },
                      { id: "family", label: "Family Member" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id as "friends" | "family")}
                        className={`flex-1 py-3 px-4 rounded-xl border text-xs uppercase tracking-widest transition-all duration-300 font-heading ${
                          category === cat.id
                            ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#F5E6AB] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                            : "bg-black/40 border-[#D4AF37]/20 text-[#B8B09F] hover:border-[#D4AF37]/40"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-heading font-medium flex items-center gap-2 mb-2">
                    <User className="w-3.5 h-3.5" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="e.g. Rahul Sharma"
                    maxLength={50}
                    className="w-full bg-black/60 border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-[#FFFDF7] placeholder-[#B8B09F]/50 outline-none transition-all duration-300 focus:ring-1 focus:ring-[#D4AF37]/50"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 font-heading">{errors.name}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-heading font-medium flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Your Blessing Message *</span>
                    </span>
                    <span className="text-[10px] text-[#B8B09F]">
                      {message.length}/300
                    </span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Write your beautiful wishes for Laranya & Pareenn..."
                    maxLength={300}
                    className="w-full bg-black/60 border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-[#FFFDF7] placeholder-[#B8B09F]/50 outline-none transition-all duration-300 focus:ring-1 focus:ring-[#D4AF37]/50 resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 font-heading">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5E6AB] to-[#C5A059] text-[#070709] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      Sending Wish...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send My Wishes</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
