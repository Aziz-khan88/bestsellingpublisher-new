"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

interface ServiceFeature {
  iconSrc: string;
  title: string;
  description: string;
}

const SERVICE_FEATURES: ServiceFeature[] = [
  {
    iconSrc: "/icon1_pen_clean.png",
    title: "Expert Editing",
    description: "Refining your manuscript for clarity and impact.",
  },
  {
    iconSrc: "/icon2_design_clean.png",
    title: "Premium Design",
    description: "Eye-catching covers that sell your story.",
  },
  {
    iconSrc: "/icon3_format_clean.png",
    title: "Perfect Formatting",
    description: "Print & digital formats done right.",
  },
  {
    iconSrc: "/icon4_globe_clean.png",
    title: "Global Distribution",
    description: "Publishing your book on leading platforms worldwide.",
  },
  {
    iconSrc: "/icon5_cloud_clean.png",
    title: "Publishing Support",
    description: "End-to-end guidance for a seamless publishing journey.",
  },
];

// Clean Standard SVG Geometry for 3D Perspective Orbit (1045 x 713 native coordinate space)
const ORBIT_PATHS = {
  // Front half of ellipse hugging the front spine and bottom cover
  front: "M 1034.8 634.4 A 520 150 8.5 0 1 36.2 550.6",
  // Back half of ellipse passing behind the upright pages
  back: "M 36.2 550.6 A 520 150 8.5 0 1 1034.8 634.4",
  // Full 360 loop for continuous particle orbiting
  full: "M 1034.8 634.4 A 520 150 8.5 0 1 36.2 550.6 A 520 150 8.5 0 1 1034.8 634.4 Z",
  // Right swooping energy tail
  swirl: "M 1034.8 634.4 C 1055 480, 1035 340, 965 214",
};

// Anchor points for sparkling flares
const FLARE_ANCHORS = [
  { x: 1035, y: 634, radius: 3, glow: 8, strokeLen: 14 },
  { x: 36, y: 551, radius: 2.5, glow: 7, strokeLen: 10 },
  { x: 688, y: 731, radius: 3, glow: 8, strokeLen: 12 },
  { x: 965, y: 214, radius: 2.5, glow: 6, strokeLen: 10 },
];

// Reusable Traveling Pearl Component
function TravelingPearl({
  delay = "0s",
  duration = "9s",
  size = 3.5,
}: {
  delay?: string;
  duration?: string;
  size?: number;
}) {
  return (
    <g>
      <animateMotion
        dur={duration}
        begin={delay}
        repeatCount="indefinite"
        path={ORBIT_PATHS.full}
      />
      <circle r={size} fill="#FFFFFF" />
      <circle
        r={size * 2.2}
        fill="#00E5FF"
        opacity="0.8"
        filter="url(#pearlCoreGlow)"
      />
      <line
        x1={-size * 3}
        y1="0"
        x2={size * 3}
        y2="0"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        opacity="0.9"
      />
      <line
        x1="0"
        y1={-size * 3}
        x2="0"
        y2={size * 3}
        stroke="#FFFFFF"
        strokeWidth="1.3"
        opacity="0.9"
      />
    </g>
  );
}

// 3D Hero Book Graphic with Layered Orbital Ring
function HeroBookWithAnimatedOrbit() {
  return (
    <div className="relative w-full aspect-[1045/713] select-none">
      {/* 1. LAYER BEHIND BOOK (z-0): Back arc of orbital circle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
        viewBox="0 0 1045 713"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="orbitCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pearlCoreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="bigBlur" />
            <feGaussianBlur stdDeviation="2" result="sharpBlur" />
            <feMerge>
              <feMergeNode in="bigBlur" />
              <feMergeNode in="sharpBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft atmospheric ambient glow behind the book */}
        <radialGradient id="bookBackGlow" cx="50%" cy="60%" r="45%">
          <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.25" />
          <stop offset="65%" stopColor="#0052cc" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#010714" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="520" cy="565" rx="480" ry="220" fill="url(#bookBackGlow)" />

        {/* Back Arc: Faint Guide Rail */}
        <path
          d={ORBIT_PATHS.back}
          stroke="#00A3E0"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Back Arc: Primary Animated Dotted Ring */}
        <path
          d={ORBIT_PATHS.back}
          stroke="#00FFFF"
          strokeWidth="2.6"
          strokeDasharray="4 18"
          strokeLinecap="round"
          className="animate-orbit-dashes"
          filter="url(#orbitCyanGlow)"
          opacity="0.95"
        />

        {/* Back Arc: Secondary Reverse Micro-Dots */}
        <path
          d={ORBIT_PATHS.back}
          stroke="#38BDF8"
          strokeWidth="1.4"
          strokeDasharray="3 14"
          strokeLinecap="round"
          className="animate-orbit-dashes-reverse"
          opacity="0.5"
        />
      </svg>

      {/* 2. MIDDLE LAYER (z-10): The Isolated 3D Magic Book */}
      <div className="absolute inset-0 w-full h-full z-10">
        <Image
          src="/isolated_magic_book_clean.png"
          alt="Amazon Publishing Services - 3D Open Book"
          fill
          sizes="(max-width: 1024px) 90vw, 600px"
          className="object-contain drop-shadow-[0_20px_50px_rgba(0,163,224,0.35)]"
          priority
        />
      </div>

      {/* 3. LAYER IN FRONT OF BOOK (z-20): Front arc, swirls, and starburst flares */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
        viewBox="0 0 1045 713"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Front Arc: Guide Rail */}
        <path
          d={ORBIT_PATHS.front}
          stroke="#00A3E0"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Front Arc: Primary Animated Dotted Ring */}
        <path
          d={ORBIT_PATHS.front}
          stroke="#00FFFF"
          strokeWidth="2.6"
          strokeDasharray="4 18"
          strokeLinecap="round"
          className="animate-orbit-dashes"
          filter="url(#orbitCyanGlow)"
          opacity="0.95"
        />

        {/* Front Arc: Secondary Reverse Micro-Dots */}
        <path
          d={ORBIT_PATHS.front}
          stroke="#38BDF8"
          strokeWidth="1.4"
          strokeDasharray="3 14"
          strokeLinecap="round"
          className="animate-orbit-dashes-reverse"
          opacity="0.5"
        />

        {/* Upward Right Swooping Tail */}
        <path
          d={ORBIT_PATHS.swirl}
          stroke="#00FFFF"
          strokeWidth="2.2"
          strokeDasharray="4 16"
          strokeLinecap="round"
          className="animate-orbit-dashes"
          filter="url(#orbitCyanGlow)"
          opacity="0.85"
        />

        {/* Starburst Cross Flares */}
        {FLARE_ANCHORS.map((flare, idx) => (
          <g key={idx} transform={`translate(${flare.x}, ${flare.y})`}>
            <circle r={flare.radius} fill="#FFFFFF" />
            <circle
              r={flare.glow}
              fill="#00FFFF"
              opacity="0.8"
              filter="url(#pearlCoreGlow)"
            />
            <line
              x1={-flare.strokeLen}
              y1="0"
              x2={flare.strokeLen}
              y2="0"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              opacity="0.95"
            />
            <line
              x1="0"
              y1={-flare.strokeLen}
              x2="0"
              y2={flare.strokeLen}
              stroke="#FFFFFF"
              strokeWidth="1.4"
              opacity="0.95"
            />
          </g>
        ))}

        {/* 4 Traveling Starburst Pearls along the 360 Orbit */}
        <TravelingPearl delay="0s" size={3.5} />
        <TravelingPearl delay="2.25s" size={3} />
        <TravelingPearl delay="4.5s" size={3.5} />
        <TravelingPearl delay="6.75s" size={3} />
      </svg>
    </div>
  );
}

export function AmazonServicesShowcaseSection() {
  return (
    <section className="relative w-full bg-[#010714] text-white pt-14 sm:pt-20 pb-36 sm:pb-44 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans min-h-[800px] lg:min-h-[860px] xl:min-h-[920px]">
      {/* Atmospheric Background Glow & Star Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[38%] right-[14%] -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-[#00A3E0]/18 blur-[150px] animate-aura-pulse" />
        <div className="absolute top-[48%] right-[18%] -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-blue-600/10 blur-[130px]" />
        
        {/* Scattered celestial particles */}
        <div className="absolute top-12 left-[28%] w-1 h-1 rounded-full bg-white/40 blur-[0.5px]" />
        <div className="absolute top-28 left-[44%] w-1.5 h-1.5 rounded-full bg-cyan-300/50 blur-[0.5px]" />
        <div className="absolute top-48 left-[14%] w-1 h-1 rounded-full bg-white/30" />
        <div className="absolute top-20 right-[38%] w-1 h-1 rounded-full bg-cyan-200/60" />
        <div className="absolute top-64 right-[8%] w-1.5 h-1.5 rounded-full bg-cyan-300/40 blur-[0.5px]" />
      </div>

      {/* DESKTOP HERO 3D BOOK & ANIMATED ORBIT (Standard prominent hero graphic scale) */}
      <div className="hidden lg:block absolute right-[0%] xl:right-[1.5%] 2xl:right-[3%] top-[31%] xl:top-[33%] -translate-y-1/2 w-[46vw] max-w-[640px] xl:max-w-[700px] 2xl:max-w-[760px] pointer-events-none z-10 animate-float-book">
        <HeroBookWithAnimatedOrbit />
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="relative max-w-[1560px] mx-auto z-10">
        {/* Left Headline & Content Block */}
        <div className="lg:w-[50%] xl:w-[46%] flex flex-col justify-center mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-serif font-bold leading-[1.16] tracking-tight mb-4">
            <span className="text-white block">Amazon Publishing Services</span>
            <span className="text-[#00A3E0] block font-serif font-bold mt-1.5">
              Editing, Design, and Distribution
            </span>
            <span className="text-[#00A3E0] block font-serif font-bold mt-1.5">
              Support for Authors
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-normal font-sans">
            We handle the technical and creative details of publishing,
            <br className="hidden sm:inline" /> so you can focus on what you do best—writing.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008fc0] text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Connect with Us!</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+18000000000"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl border-2 border-[#00A3E0] bg-[#020d1e] hover:bg-[#00A3E0]/20 text-white font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Call us NOW!</span>
              <Phone className="w-4 h-4 text-[#00A3E0]" />
            </a>
          </div>
        </div>

        {/* MOBILE/TABLET ONLY INLINE BOOK (< lg) */}
        <div className="block lg:hidden relative w-full max-w-[440px] sm:max-w-[500px] mx-auto my-8 animate-float-book">
          <HeroBookWithAnimatedOrbit />
        </div>

        {/* 5 BOTTOM SERVICE CARDS */}
        <div className="lg:w-[62%] xl:w-[58%] 2xl:w-[56%] grid grid-cols-2 sm:grid-cols-5 items-stretch pt-4 sm:pt-6">
          {SERVICE_FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center px-3 sm:px-4 py-3 sm:py-0 ${
                idx !== SERVICE_FEATURES.length - 1
                  ? "sm:border-r sm:border-slate-700/60"
                  : ""
              }`}
            >
              <div className="h-10 sm:h-11 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={46}
                  height={42}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_4px_12px_rgba(0,163,224,0.45)]"
                />
              </div>

              <h4 className="font-bold text-sm sm:text-[15px] text-white mb-1.5 tracking-tight">
                {feature.title}
              </h4>

              <p className="text-slate-400 text-xs sm:text-[12.5px] leading-snug max-w-[170px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM WAVE BORDER */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none" aria-hidden="true">
        <svg
          className="relative block w-full h-16 sm:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 122 C 225 162, 394 186, 562 186 C 773 186, 1125 127, 1440 22 L 1440 200 L 0 200 Z"
            fill="#F5F9FD"
          />
          <path
            d="M 0 122 C 225 162, 394 186, 562 186 C 773 186, 1125 127, 1440 22"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 960 185 C 1130 145, 1290 110, 1440 68"
            stroke="#00A3E0"
            strokeWidth="1.2"
            strokeOpacity="0.22"
            fill="none"
          />
          <path
            d="M 1050 192 C 1190 162, 1320 135, 1440 102"
            stroke="#00A3E0"
            strokeWidth="1"
            strokeOpacity="0.16"
            fill="none"
          />
          <path
            d="M 1140 197 C 1250 182, 1360 162, 1440 138"
            stroke="#00A3E0"
            strokeWidth="1"
            strokeOpacity="0.12"
            fill="none"
          />
          <path
            d="M 1230 200 C 1310 192, 1390 182, 1440 168"
            stroke="#00A3E0"
            strokeWidth="1"
            strokeOpacity="0.08"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
