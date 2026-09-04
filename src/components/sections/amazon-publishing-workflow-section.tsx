"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

// Top/Side Dotted Matrix Grid with Individual Sparkling Animation (".. animation")
function DotGrid({
  cols = 6,
  rows = 4,
  className = "",
  skew = false,
}: {
  cols?: number;
  rows?: number;
  className?: string;
  skew?: boolean;
}) {
  return (
    <div
      className={`grid gap-2.5 pointer-events-none select-none ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        ...(skew ? { transform: "skewY(-14deg) rotate(-4deg)" } : {}),
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const colIdx = i % cols;
        const rowIdx = Math.floor(i / cols);
        const delay = (colIdx * 0.16 + rowIdx * 0.14).toFixed(2);

        return (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]"
            style={{
              animation: `dotSparkle 3.2s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              opacity: 0.45,
            }}
          />
        );
      })}
    </div>
  );
}

// 10 Workflow Package items matching reference 100%
const packageItems = [
  {
    title: "Idea research and analysis",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors duration-300">
        <circle cx="16" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M13.5 19.5h5M14 22.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 4.5v2.5M7.5 9.5l2 1.5M24.5 9.5l-2 1.5M6 15.5h2.5M23.5 15.5H26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 25l-2 3.5M20 25l2 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Proofreading review for grammar and consistency",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors duration-300">
        <path d="M8 5h11l6 6v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 11h5M11 15h9M11 19h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="21" cy="21" r="4.5" stroke="currentColor" strokeWidth="1.6" className="fill-white group-hover:fill-[#00A3E0] transition-colors" />
        <path d="M19.5 21l1 1 2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Book cover design and illustration",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors duration-300">
        <rect x="7" y="5" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <line x1="12" y1="21" x2="20" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 11l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 9l1.5 1.5M11 7l.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Traditional and self-publishing",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors duration-300">
        <path d="M6 7a2 2 0 0 1 2-2h7v18H8a2 2 0 0 0-2 2V7z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M26 7a2 2 0 0 0-2-2h-7v18h7a2 2 0 0 1 2 2V7z" stroke="currentColor" strokeWidth="1.8" />
        <line x1="15" y1="5" x2="15" y2="23" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="21.5" cy="14.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23.5 16.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Video Book Trailers",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors duration-300">
        <rect x="5" y="9" width="15" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 13l7-4v14l-7-4v-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <polygon points="11,13 15,16 11,19" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Manuscript drafting",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors duration-300">
        <rect x="7" y="5" width="18" height="22" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="11" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="11" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="11" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="11" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Branding and marketing",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors duration-300">
        <path d="M8 13v6h3l6 4V9l-6 4H8z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
        <path d="M11 19v4a1.5 1.5 0 0 0 1.5 1.5h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 12c1.2 1 2 2.3 2 4s-.8 3-2 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M23 9c2 1.8 3 4.2 3 7s-1 5.2-3 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function AmazonPublishingWorkflowSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8fbfe] via-[#f1f7fc] to-[#e6f1fa] text-[#0f172a] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden font-sans border-t border-slate-200/60">
      
      {/* =========================================================================
          KEYFRAME STYLES: Organic Living Waves, Sparkling Dots, Orbiting Badge
         ========================================================================= */}
      <style>{`
        @keyframes dotSparkle {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
            filter: drop-shadow(0 0 0px transparent);
          }
          50% {
            opacity: 1;
            transform: scale(1.35);
            filter: drop-shadow(0 0 4px #00A3E0);
          }
        }

        @keyframes waveFloatSlow {
          0%, 100% {
            transform: translateY(0px) scaleY(1);
          }
          50% {
            transform: translateY(-8px) scaleY(1.02);
          }
        }

        @keyframes waveContourFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -120;
          }
        }

        @keyframes badgeOrbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes badgeOrbitReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes badgeBobbing {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }

        @keyframes phoneRing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
        }

        @keyframes diagonalGlow {
          0%, 100% {
            opacity: 0.55;
          }
          50% {
            opacity: 0.95;
          }
        }
      `}</style>

      {/* =========================================================================
          BACKGROUND ARTWORK:
          1. Subtle Top Wavy Curves
          2. Top-Center Dot Grid Matrix (6x4)
          3. Right Bookstore Image with EXACT Parallelogram / Angled Chevron Cut
          4. Left & Right Translucent Cyan Diagonal Bands
          5. Far-Right Slanted Dot Grid Matrix (4x8)
          6. Bottom Flowing Sweeping Wave Ribbons & 14 Animated Contour Lines
          7. Bottom-Right Elevated Book Badge with Dual Rotating Orbits
         ========================================================================= */}

      {/* 1. Subtle Top Wavy Curves across the background */}
      <div className="absolute top-0 left-0 right-0 w-full h-36 pointer-events-none z-0 opacity-45">
        <svg viewBox="0 0 1440 180" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 45 C360 95 720 15 1080 65 C1260 90 1380 50 1440 35" stroke="#bae6fd" strokeWidth="1.2" />
          <path d="M0 70 C340 120 740 40 1100 85 C1280 110 1390 70 1440 55" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.65" />
          <path d="M0 95 C380 140 710 65 1060 105 C1240 125 1370 90 1440 75" stroke="#00A3E0" strokeWidth="0.8" strokeOpacity="0.45" />
        </svg>
      </div>

      {/* 2. Top-Center Dot Grid (6 cols x 4 rows) with Staggered Sparkling Waves */}
      <DotGrid
        cols={6}
        rows={4}
        className="absolute top-8 left-[45%] sm:left-[47%] lg:left-[49%] z-0"
      />

      {/* 3. Right Bookstore with EXACT Angled Chevron / Parallelogram Displacement */}
      {/* (Left Cut: 68% at top to 43% at bottom; Right Cut: 97% at top to 75% at bottom) */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
        style={{
          clipPath: "polygon(68% 0%, 97% 0%, 75% 100%, 43% 100%)",
        }}
      >
        <Image
          src="/amazon-publishing-store-crystal-uhd.jpg"
          alt="Amazon Publishing Flagship Store Interior"
          fill
          priority
          unoptimized
          className="object-cover object-[58%_35%] transition-transform duration-1000"
        />
        {/* Warm Boutique Bookstore Lighting & Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30 pointer-events-none" />
      </div>

      {/* 4a. Left Translucent Cyan Diagonal Band with Glowing Light Line */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{
          clipPath: "polygon(65.5% 0%, 68.5% 0%, 43.5% 100%, 40.5% 100%)",
          background: "linear-gradient(135deg, rgba(186, 230, 253, 0.65), rgba(0, 163, 224, 0.45))",
          animation: "diagonalGlow 4s ease-in-out infinite",
        }}
      />

      {/* 4b. Left Crisp White Accent Core Line */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-[2]"
        style={{
          clipPath: "polygon(67.8% 0%, 68.2% 0%, 43.2% 100%, 42.8% 100%)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      />

      {/* 4c. Right Translucent Cyan Diagonal Band */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{
          clipPath: "polygon(96.5% 0%, 99.5% 0%, 77.5% 100%, 74.5% 100%)",
          background: "linear-gradient(135deg, rgba(186, 230, 253, 0.55), rgba(56, 189, 248, 0.35))",
        }}
      />

      {/* 5. Far-Right Slanted Dot Grid Matrix (4 cols x 8 rows) */}
      <div className="hidden xl:block absolute right-3 top-[32%] z-[2] pointer-events-none select-none">
        <DotGrid cols={4} rows={8} skew={true} />
      </div>

      {/* 6. THE ANIMATED FLOWING WAVES & TOPOGRAPHICAL CONTOUR LINES (100% Vector SVG Layer) */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[180px] sm:h-[220px] lg:h-[260px] xl:h-[280px] pointer-events-none select-none z-[5] overflow-hidden"
        style={{ animation: "waveFloatSlow 7s ease-in-out infinite" }}
      >
        <svg
          viewBox="0 0 1920 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Primary Flowing Wave Gradient */}
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.6" />
              <stop offset="45%" stopColor="#7dd3fc" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#00A3E0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.7" />
            </linearGradient>

            {/* Sweeping Right Translucent Wave 1 (Under Badge) */}
            <linearGradient id="sweepingWave1" x1="40%" y1="100%" x2="100%" y2="20%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#7dd3fc" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#00A3E0" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.55" />
            </linearGradient>

            {/* Sweeping Right Translucent Wave 2 (Behind Badge) */}
            <linearGradient id="sweepingWave2" x1="50%" y1="100%" x2="100%" y2="10%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#bae6fd" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.4" />
            </linearGradient>

            {/* High-Contrast Contour Line Gradient (Luminous over Bookstore Floor) */}
            <linearGradient id="contourGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#7dd3fc" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Sweeping Wave 2: Billowing Translucent Crest behind Badge */}
          <path
            d="M 1100 320 C 1300 280 1480 210 1620 130 C 1720 70 1820 90 1920 110 L 1920 320 L 1100 320 Z"
            fill="url(#sweepingWave2)"
          />

          {/* Sweeping Wave 1: Dynamic Curving Wave cupping the Book Badge */}
          <path
            d="M 1200 320 C 1380 290 1520 230 1660 165 C 1760 120 1850 140 1920 155 L 1920 320 L 1200 320 Z"
            fill="url(#sweepingWave1)"
          />

          {/* Bottom Ambient Wave Ribbon */}
          <path
            d="M0 250 C320 225 540 280 840 230 C1140 180 1420 240 1920 180 L1920 320 L0 320 Z"
            fill="url(#waveGrad1)"
            opacity="0.35"
          />

          {/* 14 Animated Topographical Contour Wave Lines Sweeping Across Section and Bookstore Floor */}
          {[
            { d: "M 0 290 C 280 270 500 305 780 260 C 1080 210 1380 255 1680 200 C 1800 175 1880 190 1920 210", w: 1.5, o: 0.95, delay: 0 },
            { d: "M 0 278 C 280 258 500 293 780 248 C 1080 198 1380 243 1680 188 C 1800 163 1880 178 1920 198", w: 1.8, o: 0.9, delay: 0.35 },
            { d: "M 0 266 C 280 246 500 281 780 236 C 1080 186 1380 231 1680 176 C 1800 151 1880 166 1920 186", w: 1.6, o: 0.85, delay: 0.7 },
            { d: "M 0 254 C 280 234 500 269 780 224 C 1080 174 1380 219 1680 164 C 1800 139 1880 154 1920 174", w: 1.8, o: 0.8, delay: 1.05 },
            { d: "M 0 242 C 280 222 500 257 780 212 C 1080 162 1380 207 1680 152 C 1800 127 1880 142 1920 162", w: 2.0, o: 0.75, delay: 1.4 },
            { d: "M 0 230 C 280 210 500 245 780 200 C 1080 150 1380 195 1680 140 C 1800 115 1880 130 1920 150", w: 1.6, o: 0.7, delay: 1.75 },
            { d: "M 0 218 C 280 198 500 233 780 188 C 1080 138 1380 183 1680 128 C 1800 103 1880 118 1920 138", w: 1.5, o: 0.65, delay: 2.1 },
            { d: "M 0 206 C 280 186 500 221 780 176 C 1080 126 1380 171 1680 116 C 1800 91 1880 106 1920 126", w: 1.4, o: 0.6, delay: 2.45 },
            { d: "M 0 194 C 280 174 500 209 780 164 C 1080 114 1380 159 1680 104 C 1800 79 1880 94 1920 114", w: 1.3, o: 0.5, delay: 2.8 },
            { d: "M 0 182 C 280 162 500 197 780 152 C 1080 102 1380 147 1680 92 C 1800 67 1880 82 1920 102", w: 1.2, o: 0.4, delay: 3.15 },
            { d: "M 0 170 C 280 150 500 185 780 140 C 1080 90 1380 135 1680 80 C 1800 55 1880 70 1920 90", w: 1.1, o: 0.35, delay: 3.5 },
            { d: "M 0 158 C 280 138 500 173 780 128 C 1080 78 1380 123 1680 68 C 1800 43 1880 58 1920 78", w: 1.0, o: 0.3, delay: 3.85 },
          ].map((line, idx) => (
            <path
              key={idx}
              d={line.d}
              stroke="url(#contourGrad)"
              strokeWidth={line.w}
              strokeOpacity={line.o}
              fill="none"
              strokeDasharray="2400"
              style={{
                animation: `waveContourFlow 16s linear infinite`,
                animationDelay: `-${line.delay}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* 7. BOTTOM-RIGHT CIRCULAR BOOK BADGE WITH DUAL ROTATING ORBIT */}
      <div
        className="hidden lg:flex absolute right-[4%] xl:right-[6%] bottom-[8%] xl:bottom-[10%] z-20 items-center justify-center cursor-pointer pointer-events-auto select-none"
        style={{ animation: "badgeBobbing 4.5s ease-in-out infinite" }}
        title="Amazon Publishing Verified Badge"
      >
        {/* Outer Orbit Container */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 flex items-center justify-center">
          
          {/* Dashed Orbit Ring 1 (Clockwise) */}
          <div
            className="absolute inset-0 rounded-full border border-dashed border-[#00A3E0]/60"
            style={{ animation: "badgeOrbitSpin 32s linear infinite" }}
          >
            {/* Glowing Orbit Beads */}
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0]" />
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
          </div>

          {/* Dashed Orbit Ring 2 (Counter-Clockwise) */}
          <div
            className="absolute inset-3 rounded-full border border-dotted border-[#38bdf8]/40"
            style={{ animation: "badgeOrbitReverse 44s linear infinite" }}
          />

          {/* White Elevated Circular Disc with Soft Drop Shadow */}
          <div className="relative z-10 w-36 h-36 sm:w-42 sm:h-42 lg:w-46 lg:h-46 xl:w-48 xl:h-48 rounded-full bg-white p-3.5 shadow-[0_14px_40px_rgba(0,163,224,0.36)] border border-slate-100/90 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            
            {/* Inner Vibrant Royal Blue Disc */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#009fe3] via-[#0074c2] to-[#004a88] p-[3px] shadow-inner flex items-center justify-center">
              
              {/* Crisp Vector Open Book Icon matching reference (≡ ≡) */}
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              >
                {/* Book Spine Center */}
                <line x1="32" y1="13" x2="32" y2="49" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />

                {/* Left Page Outline */}
                <path
                  d="M32 17 C25 13 16 14 12 15 C10.5 15.5 10 16.5 10 18 L10 46 C10 47 10.8 47.8 11.8 47.5 C16 46 25 45.5 32 49"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Right Page Outline */}
                <path
                  d="M32 17 C39 13 48 14 52 15 C53.5 15.5 54 16.5 54 18 L54 46 C54 47 53.2 47.8 52.2 47.5 C48 46 39 45.5 32 49"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Outer Page Thickness Outlines */}
                <path
                  d="M10 22 L7 23 L7 49 C11 48 20 47.5 28 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.75"
                />
                <path
                  d="M54 22 L57 23 L57 49 C53 48 44 47.5 36 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.75"
                />

                {/* Horizontal Page Lines - Left Page (3 Lines) */}
                <line x1="16" y1="24" x2="27" y2="22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="16" y1="30" x2="27" y2="28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="16" y1="36" x2="27" y2="34" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />

                {/* Horizontal Page Lines - Right Page (3 Lines) */}
                <line x1="37" y1="22" x2="48" y2="24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="37" y1="28" x2="48" y2="30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="37" y1="34" x2="48" y2="36" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FOREGROUND CONTENT: Header + 10 Package Cards (5x2) + CTA Buttons
         ========================================================================= */}
      <div className="relative z-10 w-[97%] lg:w-[98%] max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px] sm:max-w-[740px] xl:max-w-[800px]">
          
          {/* Eyebrow Header */}
          <div className="mb-2.5">
            <span className="font-sans text-[13px] sm:text-[14px] font-bold tracking-widest text-[#00A3E0] uppercase">
              A DOCUMENTED PUBLISHING WORKFLOW
            </span>
          </div>

          {/* Main Headline (Editorial Serif Display matching other sections) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-serif font-bold text-[#0f172a] leading-[1.14] tracking-tight">
            Prepare Your Book for
            <br />
            <span className="text-[#00A3E0] font-serif">Amazon Publishing</span>
          </h2>

          {/* Body Narrative */}
          <p className="font-sans text-[14px] sm:text-[15px] text-slate-600 leading-relaxed max-w-xl mt-3.5">
            Our Amazon publishing support can include editing coordination, cover and interior preparation, metadata review, KDP setup guidance, and an author-approved release checklist.
          </p>

          {/* Cyan Pill Badge: "Our Package Include" */}
          <div className="mt-4 mb-4 inline-block">
            <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#00A3E0] text-white text-[12.5px] sm:text-[13px] font-semibold tracking-wide shadow-[0_4px_14px_rgba(0,163,224,0.35)] font-sans">
              Our Package Include
            </span>
          </div>

          {/* 7 Package Service Cards: Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-[660px] xl:max-w-[740px]">
            {packageItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center border border-slate-100 shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_26px_rgba(0,163,224,0.22)] hover:border-[#00A3E0]/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer justify-between min-h-[114px] sm:min-h-[122px]"
              >
                {/* Cyan Outline Circular Icon Badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#00A3E0] bg-[#f0f9ff]/60 flex items-center justify-center mb-1.5 group-hover:scale-110 group-hover:bg-[#00A3E0] transition-all duration-300 shrink-0 shadow-sm">
                  {item.icon}
                </div>

                {/* Title */}
                <span className="font-sans text-[11px] sm:text-[11.5px] font-semibold text-[#0f172a] group-hover:text-[#0080ff] transition-colors leading-[1.25] text-center line-clamp-3">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons Row: Sits neatly above the bottom flowing wave */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5 pb-2">
            {/* Button 1: Connect with Us! */}
            <button
              type="button"
              className="h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-lg bg-gradient-to-r from-[#0080ff] to-[#00A3E0] hover:from-[#0070ea] hover:to-[#0092db] text-white font-semibold text-[14px] sm:text-[14.5px] font-sans flex items-center justify-center gap-2.5 shadow-[0_6px_18px_rgba(0,128,255,0.32)] hover:shadow-[0_8px_24px_rgba(0,163,224,0.42)] transition-all duration-300 group active:scale-95 cursor-pointer"
            >
              <span>Connect with Us!</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Button 2: Call us NOW! (Phone Icon on the Right, matching reference) */}
            <button
              type="button"
              className="h-[44px] sm:h-[46px] px-5 sm:px-6 rounded-lg bg-white border-[1.5px] border-[#00A3E0] hover:bg-[#00A3E0]/5 text-[#00A3E0] font-semibold text-[14px] sm:text-[14.5px] font-sans flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-300 group active:scale-95 cursor-pointer"
            >
              <span>Call us NOW!</span>
              <Phone className="w-4 h-4 text-[#00A3E0] group-hover:[animation:phoneRing_0.6s_ease-in-out_infinite]" />
            </button>
          </div>

        </div>
      </div>

      {/* 8. Bottom Center Dots Accent (7 dots between sections) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none z-10 opacity-40">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
        ))}
      </div>

    </section>
  );
}
