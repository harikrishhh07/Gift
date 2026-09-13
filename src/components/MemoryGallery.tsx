"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "img-1",
    title: "Laranya & Pareenn",
    caption: "The radiant bride and handsome groom in royal gold.",
    src: "/images/couple-main.jpg",
    category: "Couple Portrait",
    aspect: "portrait",
  },
  {
    id: "img-2",
    title: "Chandelier & Golden Lights",
    caption: "Shining bright under the royal reception chandeliers.",
    src: "/images/couple-main.jpg",
    category: "Ambiance",
    aspect: "portrait",
  },
  {
    id: "img-3",
    title: "The Golden Beginning",
    caption: "Two hearts bound by sacred vows and endless warmth.",
    src: "/images/couple-main.jpg",
    category: "Ceremony",
    aspect: "square",
  },
  {
    id: "img-4",
    title: "A Shared Smile",
    caption: "Moments of pure joy, laughter, and lifelong promises.",
    src: "/images/couple-main.jpg",
    category: "Moments",
    aspect: "portrait",
  },
  {
    id: "img-5",
    title: "Sacred Union",
    caption: "Surrounded by blessings, golden flowers, and warmth.",
    src: "/images/couple-main.jpg",
    category: "Reception",
    aspect: "square",
  },
  {
    id: "img-6",
    title: "Forever & Always",
    caption: "Hand in hand towards a lifetime of beautiful horizons.",
    src: "/images/couple-main.jpg",
    category: "Portrait",
    aspect: "portrait",
  },
];

export const MemoryGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
              Treasured Moments
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl gold-text-gradient font-normal"
          >
            Moments of Love ❤️
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-[#B8B09F] font-heading max-w-xl mx-auto mt-3 italic font-light"
          >
            Explore the beautiful glimpses of Laranya & Pareenn&apos;s joyful celebration.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="luxury-card rounded-2xl overflow-hidden group cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 relative flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#070709]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Golden Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Hover Glow Ring */}
                <div className="absolute inset-0 border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-2xl transition-all duration-500 pointer-events-none" />

                {/* Zoom Icon Badge */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Title & Category Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-heading font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-xl text-[#FFFDF7] font-medium group-hover:text-[#F5E6AB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B8B09F] font-heading line-clamp-1 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#111116] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#070709] transition-all"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#111116]/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#070709] transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#111116]/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#070709] transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Active Image Box */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center p-2 rounded-2xl border border-[#D4AF37]/40 bg-[#070709] shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-xl max-h-[70vh] flex items-center justify-center">
                  <img
                    src={GALLERY_IMAGES[selectedImageIndex].src}
                    alt={GALLERY_IMAGES[selectedImageIndex].title}
                    className="max-h-[70vh] w-auto object-contain rounded-lg"
                  />
                </div>

                <div className="p-4 text-center max-w-xl">
                  <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] mb-1">
                    <Heart className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span>{GALLERY_IMAGES[selectedImageIndex].category}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-[#FFFDF7]">
                    {GALLERY_IMAGES[selectedImageIndex].title}
                  </h3>
                  <p className="text-sm text-[#B8B09F] mt-1 italic">
                    &ldquo;{GALLERY_IMAGES[selectedImageIndex].caption}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
