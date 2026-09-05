"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Rocket,
  Edit3,
  BookMarked,
} from "lucide-react";

export function MainHeroSection() {
  return (
    <section className="relative w-full min-h-[850px] bg-[#030611] text-slate-100 overflow-hidden font-sans pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-14">
      
      {/* Floating animation keyframes for central artwork */}
      <style>{`
        @keyframes floatBookArtwork {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float-hero-book {
          animation: floatBookArtwork 6s ease-in-out infinite;
        }

        /* Celestial Orbit Ring Keyframes */
        @keyframes innerOrbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes innerCorePulse {
          0%, 100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        /* 3D Rotated Glass Feature Cards & Platform Dock */
        .hero-feature-card-rotated {
          border-radius: 18px;
          border: 1px solid rgba(0, 163, 224, 0.32);
          background: rgba(9, 21, 38, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 12px 28px -4px rgba(0, 163, 224, 0.12),
                      inset 0 1px 1px rgba(255, 255, 255, 0.15);
          transform: perspective(1000px) rotateY(-8.5deg) rotateX(3.5deg) rotateZ(-2deg);
          transform-origin: center right;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-feature-card-rotated:hover {
          transform: perspective(1000px) rotateY(-3deg) rotateX(1.5deg) rotateZ(-0.5deg) translateX(-4px) scale(1.02);
          border-color: rgba(0, 163, 224, 0.6);
          background: rgba(12, 28, 52, 0.85);
          box-shadow: 0 16px 36px -4px rgba(0, 163, 224, 0.25),
                      inset 0 1px 1px rgba(255, 255, 255, 0.3);
        }

        /* Publishing Platforms Dock (Rotated) */
        .hero-platforms-dock-rotated {
          border-radius: 16px;
          border: 1px solid rgba(0, 163, 224, 0.32);
          background: rgba(7, 18, 34, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 12px 32px -6px rgba(0, 163, 224, 0.18),
                      inset 0 1px 1px rgba(255, 255, 255, 0.18);
          transform: perspective(1000px) rotateY(-8.5deg) rotateX(3.5deg) rotateZ(-2deg);
          transform-origin: center right;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-platforms-dock-rotated:hover {
          transform: perspective(1000px) rotateY(-3deg) rotateX(1.5deg) rotateZ(-0.5deg) translateX(-4px);
          border-color: rgba(0, 163, 224, 0.55);
        }
      `}</style>

      {/* Ambient Cosmic Cyan & Blue Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[550px] sm:h-[700px] rounded-full bg-[#00A3E0]/15 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-8 w-[450px] h-[450px] rounded-full bg-[#006699]/18 blur-[110px] pointer-events-none -z-10" />

      {/* Cosmic Starfield Background Particles */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <g fill="#ffffff">
          <circle cx="120" cy="140" r="1.2" opacity="0.6" />
          <circle cx="280" cy="90" r="1.5" opacity="0.8" />
          <circle cx="450" cy="220" r="1.2" opacity="0.5" />
          <circle cx="680" cy="80" r="1.4" opacity="0.7" />
          <circle cx="890" cy="160" r="2" opacity="0.9" fill="#00A3E0" />
          <circle cx="1120" cy="110" r="1.2" opacity="0.5" />
          <circle cx="1340" cy="190" r="1.6" opacity="0.7" />
          <circle cx="1480" cy="90" r="1.4" opacity="0.6" />
          <circle cx="220" cy="380" r="1" opacity="0.4" />
          <circle cx="580" cy="420" r="1.5" opacity="0.6" />
          <circle cx="980" cy="340" r="1.8" opacity="0.8" fill="#00A3E0" />
          <circle cx="1280" cy="410" r="1.4" opacity="0.5" />
          <circle cx="1520" cy="320" r="1.6" opacity="0.7" />
        </g>
      </svg>

      {/* ======================================================== */}
      {/* GRAND CELESTIAL COSMIC RING & STARBURST FLARE            */}
      {/* Centered behind the books & spanning to right cards      */}
      {/* ======================================================== */}
      <div className="absolute top-[48%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[800px] lg:w-[880px] xl:w-[940px] h-[720px] sm:h-[800px] lg:h-[880px] xl:h-[940px] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 800 800" fill="none">
          <defs>
            <filter id="celestialRingGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur1" />
              <feGaussianBlur stdDeviation="16" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="flareCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="20%" stopColor="#A0F0FF" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#00A3E0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="flareBeamHorizontal" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="flareBeamVertical" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="celestialRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#00A3E0" stopOpacity="0.55" />
              <stop offset="70%" stopColor="#0077AA" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {/* Concentric Energy Arcs Curving to the Right behind cards */}
          <path d="M 620,280 C 670,330 710,400 720,490" stroke="#00A3E0" strokeWidth="1" opacity="0.25" />
          <path d="M 640,250 C 700,310 745,390 760,480" stroke="#00A3E0" strokeWidth="0.8" opacity="0.2" />
          <path d="M 660,220 C 730,290 780,380 795,470" stroke="#00A3E0" strokeWidth="0.7" opacity="0.15" />

          {/* Primary Celestial Glowing Ring */}
          <circle cx="400" cy="400" r="320" stroke="url(#celestialRingGradient)" strokeWidth="2.2" filter="url(#celestialRingGlow)" />
          <circle cx="400" cy="400" r="320" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.75" />

          {/* Rotating Faint Energy Ring with Orbit Star Nodes */}
          <g style={{ transformOrigin: '400px 400px', animation: 'innerOrbitSpin 55s linear infinite' }}>
            <circle cx="400" cy="400" r="280" stroke="#00A3E0" strokeWidth="0.8" opacity="0.22" strokeDasharray="4 12" />
            <circle cx="680" cy="400" r="2.5" fill="#00E5FF" opacity="0.85" />
            <circle cx="400" cy="120" r="2" fill="#FFFFFF" opacity="0.95" />
            <circle cx="120" cy="400" r="2" fill="#00A3E0" opacity="0.7" />
          </g>

          {/* Brilliant Starburst Flare at 10 o'clock (x=174, y=174) */}
          <g transform="translate(174, 174)">
            {/* Horizontal Lens Flare Beam */}
            <ellipse cx="0" cy="0" rx="90" ry="2.5" fill="url(#flareBeamHorizontal)" opacity="0.85" />
            {/* Vertical Diffraction Ray */}
            <ellipse cx="0" cy="0" rx="2.5" ry="60" fill="url(#flareBeamVertical)" opacity="0.8" />
            {/* Diagonal 45deg Rays */}
            <g transform="rotate(45)">
              <ellipse cx="0" cy="0" rx="45" ry="1.8" fill="url(#flareBeamHorizontal)" opacity="0.65" />
              <ellipse cx="0" cy="0" rx="1.8" ry="45" fill="url(#flareBeamVertical)" opacity="0.65" />
            </g>
            {/* Outer Cyan Halo */}
            <circle cx="0" cy="0" r="38" fill="url(#flareCoreGlow)" opacity="0.9" />
            {/* Intense White Core */}
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" filter="drop-shadow(0 0 8px #00E5FF)" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* 3-Column Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-3 xl:gap-6 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Pitch, Headline, CTAs, Stats (4 cols)     */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center text-left z-20">
            
            {/* Eyebrow with Cyan Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 sm:w-10 h-[2px] bg-[#00A3E0]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#00A3E0] uppercase font-sans">
                YOUR STORY. OUR EXPERTISE. LIMITLESS REACH.
              </span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-serif font-bold text-white tracking-tight leading-[1.12] mb-3">
              Prepare Your Book<br />
              for{" "}
              <span className="italic font-serif text-[#00A3E0] font-normal">
                Every Channel.
              </span>
            </h1>

            {/* Subtitle / Tagline */}
            <h3 className="text-base sm:text-lg lg:text-[19px] font-serif mb-4 leading-snug">
              <span className="text-white font-medium">Built to Publish. </span>
              <span className="italic text-[#00A3E0] font-normal">
                Ready to Reach Readers.
              </span>
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-lg mb-6 font-normal">
              From expert editing to global distribution, we handle every step with precision, creativity, and care—so your book makes the impact it deserves.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-[#00A3E0] hover:bg-[#008fc0] text-white font-bold text-sm sm:text-base shadow-md shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Connect with Us!</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl border border-slate-700/90 bg-[#081220]/80 hover:bg-[#0c1c33] hover:border-cyan-500/50 text-white font-bold text-sm sm:text-base shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats Counter Bar with Vertical Dividers (Single Row) */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 xl:gap-4 pt-4 border-t border-slate-800/80">
              {/* Stat 1: Books Published */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm sm:text-base text-white leading-tight">
                    10,000+
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 leading-snug whitespace-nowrap">
                    Books Published
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[1px] h-7 bg-slate-800 shrink-0" />

              {/* Stat 2: Distribution Channels */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm sm:text-base text-white leading-tight">
                    50+
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 leading-snug whitespace-nowrap">
                    Distribution Channels
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[1px] h-7 bg-slate-800 shrink-0" />

              {/* Stat 3: Years of Excellence */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0">
                  <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm sm:text-base text-white leading-tight">
                    10+
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 leading-snug whitespace-nowrap">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* CENTER COLUMN: Central 3D Books Artwork                  */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center min-h-[480px] sm:min-h-[520px] lg:min-h-[580px]">
            {/* Ambient Cyan Radial Backlight */}
            <div className="absolute w-[440px] sm:w-[500px] h-[440px] sm:h-[500px] rounded-full bg-[#00A3E0]/20 blur-3xl pointer-events-none -z-10 animate-moon-pulse" />

            {/* Distinct 3D Books Cutout Layer resting directly on the wave crest */}
            <div className="relative w-full flex items-center justify-center z-10">
              <div className="animate-float-hero-book w-full flex items-center justify-center">
                <div className="relative w-full max-w-[540px] sm:max-w-[600px] md:max-w-[660px] lg:max-w-[700px] xl:max-w-[740px] scale-[1.08] sm:scale-[1.12] lg:scale-[1.16] xl:scale-[1.20] origin-bottom translate-y-6 sm:translate-y-8 lg:translate-y-10 xl:translate-y-12 transition-transform duration-500 hover:scale-[1.24]">
                  <Image
                    src="/main-hero-books.png"
                    alt="Prepare Your Book for Every Channel - Beyond the Horizon & Chapter One"
                    width={874}
                    height={815}
                    className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.7)]"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 3 3D-Rotated Glass Cards + Platform Dock   */}
          {/* ======================================================== */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-3.5 sm:gap-4 justify-center z-20">
            
            {/* Feature Card 1: Expert Editing (3D Rotated) */}
            <div className="hero-feature-card-rotated p-3.5 sm:p-4 flex items-start gap-3.5 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0 shadow-sm">
                <Edit3 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm sm:text-[15px] text-white leading-snug mb-1">
                  Expert Editing
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  Refining your story for clarity, flow, and maximum impact.
                </p>
              </div>
            </div>

            {/* Feature Card 2: Premium Formatting (3D Rotated) */}
            <div className="hero-feature-card-rotated p-3.5 sm:p-4 flex items-start gap-3.5 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0 shadow-sm">
                <BookMarked className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm sm:text-[15px] text-white leading-snug mb-1">
                  Premium Formatting
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  Professional formatting for print and digital excellence.
                </p>
              </div>
            </div>

            {/* Feature Card 3: Global Distribution (3D Rotated) */}
            <div className="hero-feature-card-rotated p-3.5 sm:p-4 flex items-start gap-3.5 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0 shadow-sm">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm sm:text-[15px] text-white leading-snug mb-1">
                  Global Distribution
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  Delivering your book to leading platforms and readers worldwide.
                </p>
              </div>
            </div>

            {/* Publishing Platforms Glassmorphic Dock (3D Rotated) */}
            <div className="hero-platforms-dock-rotated p-3.5 sm:p-4 mt-1">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Publishing Platforms
              </span>
              
              {/* Row of Crisp Brand Logos */}
              <div className="flex items-center justify-between gap-2 text-slate-200">
                {/* Amazon Logo with Smile Curve */}
                <div className="flex flex-col items-center justify-center hover:opacity-100 opacity-90 transition-opacity cursor-pointer" title="Amazon">
                  <span className="font-bold text-xs sm:text-sm tracking-tight text-white leading-none">amazon</span>
                  <svg className="w-7 h-1.5 text-[#00A3E0] mt-0.5" viewBox="0 0 30 6" fill="currentColor">
                    <path d="M1 1 Q15 6 29 1 Q16 4 1 1 Z" />
                  </svg>
                </div>

                {/* Barnes & Noble */}
                <div className="flex flex-col text-[10px] sm:text-[11px] font-serif font-bold uppercase leading-tight text-white hover:text-[#00A3E0] transition-colors cursor-pointer text-center" title="Barnes & Noble">
                  <span>BARNES</span>
                  <span className="text-[9px] text-slate-300">&amp; NOBLE</span>
                </div>

                {/* IngramSpark */}
                <div className="flex items-center gap-0.5 text-[10px] sm:text-[11px] font-bold text-white hover:text-[#00A3E0] transition-colors cursor-pointer" title="IngramSpark">
                  <span className="text-[#00A3E0]">Ingram</span>
                  <span>Spark</span>
                </div>

                {/* Apple Books */}
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-white hover:text-[#00A3E0] transition-colors cursor-pointer" title="Apple Books">
                  <svg className="w-3.5 h-4 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.33-6.42-9.87-11.47-21.57-15.15-35.1-3.68-13.53-5.52-25.96-5.52-37.28 0-14.8 3.59-27.12 10.77-36.96 7.18-9.84 16.38-14.87 27.59-15.08 5.75 0 11.75 1.52 18 4.57 6.25 3.04 10.15 4.62 11.7 4.74 2.13-.24 6.25-1.92 12.36-5.04 6.11-3.12 12.01-4.57 17.7-4.35 13.53.64 24.32 5.54 32.36 14.71-11.83 7.18-17.63 17.06-17.41 29.63.22 9.87 4.07 18.06 11.55 24.58 7.48 6.52 16.32 10.16 26.52 10.92-2.12 6.53-4.73 13.1-7.83 19.72zM119.22 33.58c0-7.39 2.66-14.42 7.98-21.09 5.32-6.67 11.93-11.14 19.83-13.41.43 2.13.65 4.35.65 6.67 0 7.39-2.77 14.53-8.31 21.42-5.54 6.89-12.28 11.16-20.22 12.82-.11-2.12-.22-4.25-.22-6.41z" />
                  </svg>
                  <span className="text-[10px]">Books</span>
                </div>

                {/* Kobo */}
                <div className="text-xs sm:text-sm font-bold text-white hover:text-[#00A3E0] transition-colors cursor-pointer" title="Kobo">
                  <span>kobo</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Sweeping Bottom Wave Transition with Flowing Silk Waves & Neon Cyan Glow */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[180px] sm:h-[210px] md:h-[240px] lg:h-[270px] xl:h-[290px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 360"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="cyanWaveGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="waveFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F7FAFD" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <linearGradient id="cyanNeonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#00D4FF" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="65%" stopColor="#00E5FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00A3E0" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Flowing Cyan Silk Stream Lines (Continuous, Smooth, Solid - ZERO Dashes) */}
          <g>
            <path d="M -40,168.0 C 250,189.0 480,85.0 710,85.0 C 950,85.0 1180,198.5 1640,132.0" stroke="#00A3E0" strokeWidth="0.8" opacity="0.12" fill="none" />
            <path d="M -40,180.0 C 250,202.5 480,100.0 710,100.0 C 950,100.0 1180,211.2 1640,142.5" stroke="#00A3E0" strokeWidth="1.2" opacity="0.15" fill="none" />
            <path d="M -40,192.0 C 250,216.0 480,115.0 710,115.0 C 950,115.0 1180,224.0 1640,153.0" stroke="#00A3E0" strokeWidth="0.8" opacity="0.18" fill="none" />
            <path d="M -40,201.6 C 250,226.8 480,127.0 710,127.0 C 950,127.0 1180,234.2 1640,161.4" stroke="#00A3E0" strokeWidth="1.2" opacity="0.22" fill="none" />
            <path d="M -40,209.6 C 250,235.8 480,137.0 710,137.0 C 950,137.0 1180,242.7 1640,168.4" stroke="#00A3E0" strokeWidth="0.8" opacity="0.25" fill="none" />
            <path d="M -40,217.6 C 250,244.8 480,147.0 710,147.0 C 950,147.0 1180,251.2 1640,175.4" stroke="#00A3E0" strokeWidth="1.2" opacity="0.28" fill="none" />
            <path d="M -40,224.0 C 250,252.0 480,155.0 710,155.0 C 950,155.0 1180,258.0 1640,181.0" stroke="#00A3E0" strokeWidth="0.8" opacity="0.31" fill="none" />
            <path d="M -40,228.8 C 250,257.4 480,161.0 710,161.0 C 950,161.0 1180,263.1 1640,185.2" stroke="#00A3E0" strokeWidth="1.2" opacity="0.34" fill="none" />
            <path d="M -40,233.6 C 250,262.8 480,167.0 710,167.0 C 950,167.0 1180,268.2 1640,189.4" stroke="#00A3E0" strokeWidth="0.8" opacity="0.38" fill="none" />
            <path d="M -40,237.6 C 250,267.3 480,172.0 710,172.0 C 950,172.0 1180,272.4 1640,192.9" stroke="#00A3E0" strokeWidth="1.2" opacity="0.41" fill="none" />
            <path d="M -40,240.0 C 250,270.0 480,175.0 710,175.0 C 950,175.0 1180,275.0 1640,195.0" stroke="#00A3E0" strokeWidth="0.8" opacity="0.45" fill="none" />
          </g>

          {/* White Next-Section Fill with Exact Fitted Crest Contour */}
          <path
            d="M -40,240.0 C 250,270.0 480,175.0 710,175.0 C 950,175.0 1180,275.0 1640,195.0 L 1640,360 L -40,360 Z"
            fill="url(#waveFillGrad)"
          />

          {/* Glowing Neon Cyan Wave Rim / Stroke */}
          <path
            d="M -40,240.0 C 250,270.0 480,175.0 710,175.0 C 950,175.0 1180,275.0 1640,195.0"
            stroke="#00A3E0"
            strokeWidth="12"
            opacity="0.6"
            filter="url(#cyanWaveGlow)"
            fill="none"
          />
          <path
            d="M -40,240.0 C 250,270.0 480,175.0 710,175.0 C 950,175.0 1180,275.0 1640,195.0"
            stroke="url(#cyanNeonGrad)"
            strokeWidth="3.5"
            fill="none"
          />
        </svg>
      </div>

    </section>
  );
}
