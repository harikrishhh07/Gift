"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize soft romantic ambient wedding chords using Web Audio API
  const startSynthMelody = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23]; // C4, E4, G4, C5, A4, F4 pentatonic romance
      let noteIndex = 0;

      oscillatorIntervalRef.current = setInterval(() => {
        if (!ctx || isMuted) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(notes[noteIndex], ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 3.0);

        noteIndex = (noteIndex + 1) % notes.length;
      }, 2500);

    } catch (e) {
      console.log("Web Audio not supported or blocked", e);
    }
  };

  const stopSynthMelody = () => {
    if (oscillatorIntervalRef.current) {
      clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSynthMelody();
      setIsPlaying(false);
    } else {
      startSynthMelody();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      stopSynthMelody();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <div className="luxury-card rounded-full p-1.5 border border-[#D4AF37]/40 backdrop-blur-lg flex items-center gap-2 shadow-[0_0_25px_rgba(0,0,0,0.8)]">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#070709] transition-all duration-300 text-xs font-heading font-medium tracking-wider cursor-pointer"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          <Music className={`w-3.5 h-3.5 ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "6s" }} />
          <span>{isPlaying ? "Music On" : "Play Music"}</span>
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>

        {/* Mute Button */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-2 rounded-full text-[#D4AF37] hover:text-[#F5E6AB] transition-colors"
            aria-label={isMuted ? "Unmute Music" : "Mute Music"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
};
