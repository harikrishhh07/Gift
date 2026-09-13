"use client";

import React, { useEffect, useRef } from "react";

export const GoldParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Determine particle count based on screen width (lower on mobile for performance)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 75;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulseSpeed: number;
      color: string;
      sparkleTimer: number;
    }

    const goldColors = [
      "rgba(212, 175, 55, ", // Gold
      "rgba(245, 230, 171, ", // Light Gold
      "rgba(247, 231, 206, ", // Champagne
      "rgba(205, 160, 89, ",  // Warm Gold
    ];

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.2 + 0.5,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
      color: goldColors[Math.floor(Math.random() * goldColors.length)],
      sparkleTimer: Math.random() * 100,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move particle upward gently
        p.y += p.speedY;
        p.x += p.speedX;
        p.sparkleTimer += p.pulseSpeed;

        // Wrap around borders
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Gentle sparkle pulsing
        const currentOpacity = Math.abs(Math.sin(p.sparkleTimer)) * p.opacity + 0.15;

        // Draw particle glow
        ctx.beginPath();
        const fillStyle = `${p.color}${currentOpacity})`;
        ctx.fillStyle = fillStyle;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra subtle sparkle for larger particles
        if (p.size > 1.8 && Math.sin(p.sparkleTimer) > 0.8) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 250, 220, ${currentOpacity * 0.8})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x - p.size * 2, p.y);
          ctx.lineTo(p.x + p.size * 2, p.y);
          ctx.moveTo(p.x, p.y - p.size * 2);
          ctx.lineTo(p.x, p.y + p.size * 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
};
