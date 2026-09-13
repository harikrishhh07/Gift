"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Couple", href: "#couple" },
    { name: "Celebration", href: "#celebrate-love" },
    { name: "Wishes from Yashwanth & Friends", href: "#wishes-from-yashwanth" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Couple Name */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Sparkles className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-script text-2xl md:text-3xl gold-text-gradient font-bold tracking-wider">
            L & P
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-heading tracking-widest uppercase text-[#FFFDF7]/80 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#wishes-from-yashwanth"
            onClick={(e) => handleScrollTo(e, "#wishes-from-yashwanth")}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6AB] to-[#C5A059] text-[#070709] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Wishes from Yashwanth & Friends</span>
            <Heart className="w-3.5 h-3.5 fill-[#070709]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#D4AF37] p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-[#D4AF37]/20 px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-base font-heading tracking-widest uppercase text-[#FFFDF7] hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#wishes-from-yashwanth"
                onClick={(e) => handleScrollTo(e, "#wishes-from-yashwanth")}
                className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6AB] to-[#C5A059] text-[#070709] mt-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              >
                <span>Wishes from Yashwanth & Friends 💌</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
