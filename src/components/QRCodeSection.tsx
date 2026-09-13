"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, Download, Sparkles, Heart } from "lucide-react";

export const QRCodeSection: React.FC = () => {
  const websiteUrl = "https://gift-ochre-two.vercel.app";

  return (
    <section id="qr-code" className="relative py-20 px-6 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 gold-border-glow flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-heading font-medium">
              Digital Invitation & Wishes
            </span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl gold-text-gradient font-normal mb-2">
            Scan to Celebrate ❤️
          </h3>

          <p className="text-sm text-[#B8B09F] font-heading max-w-md mx-auto mb-8 italic">
            Scan this customized gold QR code to instantly open the wedding wishing website on any phone!
          </p>

          {/* Luxury Frame around QR Code */}
          <div className="relative group p-4 sm:p-6 rounded-2xl bg-[#070709] border border-[#D4AF37]/40 shadow-[0_0_40px_rgba(212,175,55,0.25)] mb-8">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden p-3 bg-[#070709] border border-[#D4AF37]/20 flex items-center justify-center">
              <img
                src="/images/qr-code.png"
                alt="Lavanya & Praveenn Custom QR Code"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#F5E6AB]">
              <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{websiteUrl}</span>
            </div>
          </div>

          {/* Download Button */}
          <a
            href="/images/qr-code.png"
            download="Lavanya_Praveenn_Wedding_QR.png"
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6AB] to-[#C5A059] text-[#070709] text-xs uppercase tracking-widest font-heading font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Customized QR Code</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
