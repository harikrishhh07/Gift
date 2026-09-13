"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { GoldParticleBackground } from "@/components/GoldParticleBackground";
import { OpeningIntro } from "@/components/OpeningIntro";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CelebrationMessage } from "@/components/CelebrationMessage";
import { CoupleSection } from "@/components/CoupleSection";
import { CelebrationTimer } from "@/components/CelebrationTimer";
import { WishesFromYas } from "@/components/WishesFromYas";
import { QRCodeSection } from "@/components/QRCodeSection";
import { InteractiveLoveButton } from "@/components/InteractiveLoveButton";
import { CelebrationButton } from "@/components/CelebrationButton";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ShareSection } from "@/components/ShareSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative bg-[#070709] text-[#FFFDF7] min-h-screen">
      {/* Background Particle Animation */}
      <GoldParticleBackground />

      {/* Opening Intro Modal */}
      <AnimatePresence>
        {showIntro && <OpeningIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Main Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CelebrationMessage />
        <CoupleSection />
        <CelebrationTimer />

        {/* Dedicated Wishes from Yashwanth & Friends Section */}
        <WishesFromYas />

        {/* Customized QR Code Section */}
        <QRCodeSection />

        {/* Interactive Love & Celebration CTAs */}
        <div className="py-12 flex flex-col items-center">
          <InteractiveLoveButton />
          <CelebrationButton />
        </div>

        <ShareSection />
        <Footer />
        <AudioPlayer />
      </div>
    </main>
  );
}
