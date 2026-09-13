"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Share2, Copy, Check, MessageCircle, Heart } from "lucide-react";

export const ShareSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareText = "Come celebrate Lavanya & Praveenn ❤️ Send them your wishes here!";

  const handleCopyLink = () => {
    if (!currentUrl) return;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleWhatsAppShare = () => {
    const message = `${shareText}\n${currentUrl}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Lavanya & Praveenn | Wedding Wishes",
          text: shareText,
          url: currentUrl,
        });
      } catch (e) {
        console.log("Share cancelled or failed", e);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 gold-border"
        >
          <div className="flex justify-center mb-3">
            <div className="p-3 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
              <Heart className="w-5 h-5 fill-[#D4AF37]" />
            </div>
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl gold-text-gradient font-normal mb-2">
            Share the Love ❤️
          </h3>

          <p className="text-sm text-[#B8B09F] font-heading max-w-md mx-auto mb-8 italic">
            Invite friends and family to join in celebrating Lavanya & Praveenn!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppShare}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 text-xs uppercase tracking-widest font-heading font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black/60 hover:bg-[#D4AF37]/20 text-[#FFFDF7] border border-[#D4AF37]/40 text-xs uppercase tracking-widest font-heading font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#D4AF37]">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#D4AF37]" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {/* Web Share */}
            <button
              onClick={handleNativeShare}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#070709] text-xs uppercase tracking-widest font-heading font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Page</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
