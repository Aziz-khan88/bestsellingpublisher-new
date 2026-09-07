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

// Exact quadratic Bézier spline sampling the user-specified shape() with 151 silky-smooth points
function getWaveSplinePoints(swell: number = 0): [number, number][] {
  function qb(p0: [number, number], c: [number, number], p1: [number, number], t: number): [number, number] {
    const inv = 1 - t;
    return [
      Number((inv * inv * p0[0] + 2 * inv * t * c[0] + t * t * p1[0]).toFixed(2)),
      Number((inv * inv * p0[1] + 2 * inv * t * c[1] + t * t * p1[1]).toFixed(2)),
    ];
  }

  // Exact 6 quadratic Bézier curve segments with subtle wave breathing swell
  const segs: { p0: [number, number]; c: [number, number]; p1: [number, number] }[] = [
    { p0: [0, 75 + swell * 0.3], c: [14.29, 45 + swell * 0.7], p1: [21.43, 46 + swell * 0.6] },
    { p0: [21.43, 46 + swell * 0.6], c: [28.57, 47 + swell * 0.8], p1: [35.71, 26 + swell * 0.9] },
    { p0: [35.71, 26 + swell * 0.9], c: [42.85, 5 + swell], p1: [50, 60 + swell * 0.4] },
    { p0: [50, 60 + swell * 0.4], c: [57.15, 115 - swell * 0.7], p1: [64.29, 132.5 - swell * 0.9] },
    { p0: [64.29, 132.5 - swell * 0.9], c: [71.43, 150 - swell], p1: [78.57, 82.5 - swell * 0.4] },
    { p0: [78.57, 82.5 - swell * 0.4], c: [85.71, 15 + swell * 0.6], p1: [100, 75 + swell * 0.3] },
  ];

  const pts: [number, number][] = [];
  segs.forEach((s, idx) => {
    const steps = 25;
    const startStep = idx === 0 ? 0 : 1;
    for (let i = startStep; i <= steps; i++) {
      pts.push(qb(s.p0, s.c, s.p1, i / steps));
    }
  });

  return pts;
}

// Base (A) and Swelled (B) spline points for silky wave morphing (151 points each)
const WAVE_POINTS_A = getWaveSplinePoints(0);
const WAVE_POINTS_B = getWaveSplinePoints(7);

function createPolygon(pts: [number, number][]): string {
  return `polygon(0% 0%, 100% 0%, ${[...pts]
    .reverse()
    .map(([x, y]) => `${x}% calc(100% - ${y}px)`)
    .join(", ")})`;
}

// Section clip-path polygon states (Zero kinks, 100% smooth curve)
const WAVY_SECTION_POLYGON_A = createPolygon(WAVE_POINTS_A);
const WAVY_SECTION_POLYGON_B = createPolygon(WAVE_POINTS_B);

// Helper to create ribbon polygon clip-paths for parallel wavy contour lines (Pure clip-path, zero SVG)
function createWavyLineClip(pts: [number, number][], offset: number, thickness: number): string {
  const forward = pts.map(([x, y]) => `${x}% calc(100% - ${y + offset}px)`);
  const reverse = [...pts].reverse().map(([x, y]) => `${x}% calc(100% - ${y + offset + thickness}px)`);
  return `polygon(${[...forward, ...reverse].join(", ")})`;
}

// Pre-computed clip-path strings for the 5 parallel wavy contour lines (both states for fluid animation)
const LINE_CLIP_CREST_A = createWavyLineClip(WAVE_POINTS_A, 0, 2.5);
const LINE_CLIP_CREST_B = createWavyLineClip(WAVE_POINTS_B, 0, 2.5);

const LINE_CLIP_1_A = createWavyLineClip(WAVE_POINTS_A, 12, 1.8);
const LINE_CLIP_1_B = createWavyLineClip(WAVE_POINTS_B, 12, 1.8);

const LINE_CLIP_2_A = createWavyLineClip(WAVE_POINTS_A, 26, 1.5);
const LINE_CLIP_2_B = createWavyLineClip(WAVE_POINTS_B, 26, 1.5);

const LINE_CLIP_3_A = createWavyLineClip(WAVE_POINTS_A, 42, 1.3);
const LINE_CLIP_3_B = createWavyLineClip(WAVE_POINTS_B, 42, 1.3);

const LINE_CLIP_4_A = createWavyLineClip(WAVE_POINTS_A, 60, 1.1);
const LINE_CLIP_4_B = createWavyLineClip(WAVE_POINTS_B, 60, 1.1);

export function MainHeroSection() {
  return (
    <div className="relative w-full bg-[#F7FAFD] overflow-hidden">
      <section className="relative w-full min-h-0 lg:min-h-[940px] xl:min-h-[980px] bg-[#030611] text-slate-100 font-sans pt-20 sm:pt-24 lg:pt-[9.5rem] xl:pt-[10rem] pb-16 sm:pb-20 lg:pb-24 xl:pb-[98px] wavy z-10 overflow-hidden">
        
        {/* Floating animation keyframes and Wavy clip-path */}
        <style>{`
          /* User-Specified Wavy Clip-Path with animated 151-point Bézier Polygon undulation */
          @keyframes waveMorphSection {
            0%, 100% {
              clip-path: ${WAVY_SECTION_POLYGON_A};
            }
            50% {
              clip-path: ${WAVY_SECTION_POLYGON_B};
            }
          }

          @keyframes waveMorphCrest {
            0%, 100% {
              clip-path: ${LINE_CLIP_CREST_A};
            }
            50% {
              clip-path: ${LINE_CLIP_CREST_B};
            }
          }

          @keyframes waveMorphLine1 {
            0%, 100% { clip-path: ${LINE_CLIP_1_A}; }
            50% { clip-path: ${LINE_CLIP_1_B}; }
          }
          @keyframes waveMorphLine2 {
            0%, 100% { clip-path: ${LINE_CLIP_2_A}; }
            50% { clip-path: ${LINE_CLIP_2_B}; }
          }
          @keyframes waveMorphLine3 {
            0%, 100% { clip-path: ${LINE_CLIP_3_A}; }
            50% { clip-path: ${LINE_CLIP_3_B}; }
          }
          @keyframes waveMorphLine4 {
            0%, 100% { clip-path: ${LINE_CLIP_4_A}; }
            50% { clip-path: ${LINE_CLIP_4_B}; }
          }

          /* Traveling Electric Laser Current along wave crest */
          @keyframes waveLaserStream {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          /* Breathing Neon Glow Pulse */
          @keyframes crestNeonPulse {
            0%, 100% {
              filter: drop-shadow(0 0 5px #00E5FF) drop-shadow(0 0 14px rgba(0, 163, 224, 0.85));
              opacity: 0.94;
            }
            50% {
              filter: drop-shadow(0 0 12px #00E5FF) drop-shadow(0 0 28px rgba(0, 229, 255, 1));
              opacity: 1;
            }
          }

          /* Topographic Sonar Wave Ripples */
          @keyframes sonarRipple1 {
            0%, 100% { opacity: 0.65; }
            50% { opacity: 0.98; filter: drop-shadow(0 0 6px rgba(0, 229, 255, 0.7)); }
          }
          @keyframes sonarRipple2 {
            0%, 100% { opacity: 0.45; }
            50% { opacity: 0.82; filter: drop-shadow(0 0 5px rgba(0, 229, 255, 0.5)); }
          }
          @keyframes sonarRipple3 {
            0%, 100% { opacity: 0.32; }
            50% { opacity: 0.68; filter: drop-shadow(0 0 4px rgba(0, 163, 224, 0.45)); }
          }
          @keyframes sonarRipple4 {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.52; filter: drop-shadow(0 0 4px rgba(0, 163, 224, 0.35)); }
          }

          /* Cyber Dot Matrix Grid Breathing */
          @keyframes cyberGridPulse {
            0%, 100% { opacity: 0.22; }
            50% { opacity: 0.36; }
          }

          .wavy {
            clip-path: ${WAVY_SECTION_POLYGON_A};
            animation: waveMorphSection 9s ease-in-out infinite;
            will-change: clip-path;
          }

          @keyframes floatBookArtwork {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
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
            border-radius: 16px;
            border: 1px solid rgba(0, 163, 224, 0.32);
            background: rgba(9, 21, 38, 0.72);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            box-shadow: 0 10px 24px -4px rgba(0, 163, 224, 0.12),
                        inset 0 1px 1px rgba(255, 255, 255, 0.15);
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .hero-platforms-dock-rotated {
            border-radius: 16px;
            border: 1px solid rgba(0, 163, 224, 0.32);
            background: rgba(7, 18, 34, 0.8);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            box-shadow: 0 10px 28px -6px rgba(0, 163, 224, 0.18),
                        inset 0 1px 1px rgba(255, 255, 255, 0.18);
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @media (max-width: 1023px) {
            .hero-feature-card-rotated,
            .hero-platforms-dock-rotated {
              transform: none !important;
            }
          }

          @media (min-width: 1024px) {
            .hero-feature-card-rotated {
              transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) rotateZ(-1deg);
              transform-origin: center right;
            }
            .hero-feature-card-rotated:hover {
              transform: perspective(1000px) rotateY(-1deg) rotateX(0.5deg) rotateZ(0deg) translateX(-4px) scale(1.02);
              border-color: rgba(0, 163, 224, 0.6);
              background: rgba(12, 28, 52, 0.85);
              box-shadow: 0 14px 32px -4px rgba(0, 163, 224, 0.25),
                          inset 0 1px 1px rgba(255, 255, 255, 0.3);
            }
            .hero-platforms-dock-rotated {
              transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) rotateZ(-1deg);
              transform-origin: center right;
            }
            .hero-platforms-dock-rotated:hover {
              transform: perspective(1000px) rotateY(-1deg) rotateX(0.5deg) rotateZ(0deg) translateX(-4px);
              border-color: rgba(0, 163, 224, 0.55);
            }
          }
        `}</style>

        {/* Ambient Cosmic Cyan & Blue Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[900px] h-[450px] sm:h-[700px] rounded-full bg-[#00A3E0]/15 blur-[140px]" />
          <div className="absolute top-1/4 right-0 sm:right-8 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] rounded-full bg-[#006699]/18 blur-[110px]" />
        </div>

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
        {/* PARALLEL WAVY CONTOUR LINES & CYBER GRID (Pure clip-path) */}
        {/* Exact match to topographic wave lines; ZERO SVGs used    */}
        {/* ======================================================== */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Cyber Dot Matrix Grid cascading from the wave into dark space */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(0, 163, 224, 0.75) 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px',
              maskImage: 'linear-gradient(to top, black 0%, black 170px, transparent 320px)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, black 170px, transparent 320px)',
              animation: 'cyberGridPulse 6s ease-in-out infinite',
            }}
          />

          {/* Contour Line 4: Faintest, deepest into the dark section with Sonar Ripple & Morph */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: LINE_CLIP_4_A,
              background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.35) 0%, rgba(0, 163, 224, 0.28) 38%, rgba(0, 163, 224, 0) 72%)',
              animation: 'waveMorphLine4 9s ease-in-out infinite, sonarRipple4 4s ease-in-out infinite 1.8s',
              willChange: 'clip-path, opacity',
            }}
          />

          {/* Contour Line 3 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: LINE_CLIP_3_A,
              background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.5) 0%, rgba(0, 163, 224, 0.4) 48%, rgba(0, 163, 224, 0) 82%)',
              animation: 'waveMorphLine3 9s ease-in-out infinite, sonarRipple3 4s ease-in-out infinite 1.2s',
              willChange: 'clip-path, opacity',
            }}
          />

          {/* Contour Line 2 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: LINE_CLIP_2_A,
              background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.68) 0%, rgba(0, 163, 224, 0.55) 60%, rgba(0, 163, 224, 0) 90%)',
              animation: 'waveMorphLine2 9s ease-in-out infinite, sonarRipple2 4s ease-in-out infinite 0.6s',
              willChange: 'clip-path, opacity',
            }}
          />

          {/* Contour Line 1 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: LINE_CLIP_1_A,
              background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.85) 0%, rgba(0, 163, 224, 0.72) 75%, rgba(0, 163, 224, 0.08) 98%)',
              animation: 'waveMorphLine1 9s ease-in-out infinite, sonarRipple1 4s ease-in-out infinite 0s',
              willChange: 'clip-path, opacity',
            }}
          />

          {/* Primary Wave Crest Line: Brilliant Electric Cyan Laser Beam with Traveling Current & Morph */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: LINE_CLIP_CREST_A,
              background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.7) 0%, #00A3E0 25%, #00E5FF 42%, #FFFFFF 50%, #00E5FF 58%, #00A3E0 75%, rgba(0, 229, 255, 0.7) 100%)',
              backgroundSize: '240% 100%',
              animation: 'waveMorphCrest 9s ease-in-out infinite, waveLaserStream 3.8s linear infinite, crestNeonPulse 4s ease-in-out infinite',
              willChange: 'clip-path, background-position, filter',
            }}
          />
        </div>

        <div className="relative w-[97%] max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 z-10">

          {/* 3-Column Main Hero Grid with bottom alignment so all content touches down to the clip-path */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-4 xl:gap-6 items-end">

            {/* ======================================================== */}
            {/* LEFT COLUMN: Pitch, Headline, CTAs, Stats (5 cols)     */}
            {/* Sits right down near the wave boundary with small margin */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-end text-left z-20 pb-2 lg:pb-0 lg:pr-2 lg:translate-y-2 xl:translate-y-3">

              {/* Eyebrow with Cyan Line */}
              <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
                <span className="w-10 sm:w-12 h-[2.5px] bg-[#00A3E0]" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.16em] text-[#00A3E0] uppercase font-sans">
                  YOUR STORY. OUR EXPERTISE. LIMITLESS REACH.
                </span>
              </div>

              {/* Main Headline (H1) - Responsive across all screens */}
              <h1 className="text-[32px] xs:text-[38px] sm:text-5xl lg:text-[50px] xl:text-[56px] 2xl:text-[60px] font-serif font-bold text-white tracking-tight leading-[1.08] mb-3 sm:mb-4">
                Prepare Your Book{" "}
                <br className="hidden sm:inline" />
                for{" "}
                <span className="italic font-serif text-[#00A3E0] font-normal">
                  Every Channel.
                </span>
              </h1>

              {/* Subtitle / Tagline */}
              <h3 className="text-base sm:text-xl lg:text-[22px] xl:text-[24px] font-serif mb-3 sm:mb-4 leading-snug">
                <span className="text-white font-medium">Built to Publish. </span>
                <span className="italic text-[#00A3E0] font-normal">
                  Ready to Reach Readers.
                </span>
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base lg:text-[15.5px] xl:text-[16.5px] leading-relaxed max-w-xl mb-5 sm:mb-6 font-normal">
                From expert editing to global distribution, we handle every step with precision, creativity, and care—so your book makes the impact it deserves.
              </p>

              {/* CTA Buttons - Standardized Global System */}
              <div className="cta-btn-group mb-5 sm:mb-7 lg:mb-8">
                <a
                  href="#consultation"
                  className="cta-btn-base cta-btn-primary cta-btn-item"
                >
                  <span>Connect with Us!</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </a>

                <a
                  href="#services"
                  className="cta-btn-base cta-btn-outline-dark cta-btn-item"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </a>
              </div>

              {/* Stats Counter Bar with Pure Unstacked Large Icons & Increased Font Sizes */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-5 xl:gap-6 pt-3.5 sm:pt-4 border-t border-slate-800/90">
                {/* Stat 1: Books Published */}
                <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#00A3E0] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-bold text-xl sm:text-2xl lg:text-[26px] text-white leading-none mb-1">
                      10,000+
                    </span>
                    <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight sm:whitespace-nowrap">
                      Books Published
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-[1px] h-9 sm:h-11 bg-slate-800 shrink-0" />

                {/* Stat 2: Distribution Channels */}
                <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#00A3E0] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-bold text-xl sm:text-2xl lg:text-[26px] text-white leading-none mb-1">
                      50+
                    </span>
                    <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight sm:whitespace-nowrap">
                      Distribution Channels
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-[1px] h-9 sm:h-11 bg-slate-800 shrink-0" />

                {/* Stat 3: Years of Excellence */}
                <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
                  <Rocket className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#00A3E0] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-bold text-xl sm:text-2xl lg:text-[26px] text-white leading-none mb-1">
                      10+
                    </span>
                    <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-tight sm:whitespace-nowrap">
                      Years of Excellence
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ======================================================== */}
            {/* CENTER COLUMN: Central 3D Books Artwork & Cosmic Ring   */}
            {/* Sits right down near the wave, sizes enlarged (4 cols)   */}
            {/* ======================================================== */}
            <div className="lg:col-span-4 xl:col-span-4 relative flex flex-col items-center justify-center lg:items-end lg:justify-end lg:self-end z-20 min-h-0 sm:min-h-0 lg:min-h-[560px] my-1 sm:my-2 lg:my-0 pt-0 lg:pt-4 lg:translate-x-3 xl:translate-x-5">
              {/* Ambient Cyan Radial Backlight - Scaled & centered around the book */}
              <div className="absolute top-1/2 lg:top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] xs:w-[280px] sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[590px] 2xl:w-[620px] h-[240px] xs:h-[280px] sm:h-[400px] md:h-[480px] lg:h-[550px] xl:h-[590px] 2xl:h-[620px] rounded-full bg-[#00A3E0]/18 blur-3xl pointer-events-none -z-10 animate-moon-pulse" />

              {/* CELESTIAL COSMIC RING & STARBURST FLARE - Centered directly behind the book */}
              <div className="absolute top-1/2 lg:top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] xs:w-[280px] sm:w-[390px] md:w-[460px] lg:w-[540px] xl:w-[580px] 2xl:w-[610px] h-[240px] xs:h-[280px] sm:h-[390px] md:h-[460px] lg:h-[540px] xl:h-[580px] 2xl:h-[610px] pointer-events-none z-0">
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

                  {/* Primary Celestial Glowing Ring */}
                  <circle cx="400" cy="400" r="320" stroke="url(#celestialRingGradient)" strokeWidth="2.4" filter="url(#celestialRingGlow)" />
                  <circle cx="400" cy="400" r="320" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.75" />

                  {/* Rotating Faint Energy Ring with Orbit Star Nodes */}
                  <g style={{ transformOrigin: '400px 400px', animation: 'innerOrbitSpin 55s linear infinite' }}>
                    <circle cx="400" cy="400" r="280" stroke="#00A3E0" strokeWidth="0.8" opacity="0.25" strokeDasharray="4 12" />
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

              {/* Distinct 3D Books Cutout Layer resting only some pixels above the wave */}
              <div className="relative w-full flex items-center justify-center lg:items-end lg:justify-end z-10">
                <div className="animate-float-hero-book w-full flex items-center justify-center lg:items-end lg:justify-end">
                  <div className="relative w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[570px] xl:max-w-[620px] 2xl:max-w-[650px] origin-bottom translate-y-0 sm:translate-y-1 lg:translate-y-4 xl:translate-y-5 transition-transform duration-500 hover:scale-[1.03]">
                    <Image
                      src="/main-hero-books.png"
                      alt="Prepare Your Book for Every Channel - Beyond the Horizon & Chapter One"
                      width={874}
                      height={815}
                      className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: 3 3D-Rotated Glass Cards + Platform Dock   */}
            {/* Sits adjacent to book and touches down right above wave  */}
            {/* ======================================================== */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-2.5 sm:gap-3.5 justify-end z-20 lg:-translate-x-1 xl:-translate-x-2 lg:translate-y-1.5">

              {/* Feature Card 1: Expert Editing (Enlarged Height, Premium Aesthetics) */}
              <div className="hero-feature-card-rotated p-3.5 sm:p-5 flex items-start gap-3.5 sm:gap-4 min-h-0 sm:min-h-[130px] lg:min-h-[136px] cursor-pointer group">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-cyan-500/25 via-[#00A3E0]/15 to-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-[#00A3E0] group-hover:text-white group-hover:border-cyan-400/80 group-hover:bg-[#00A3E0]/30 shrink-0 shadow-lg shadow-cyan-950/40 transition-all duration-300 mt-0.5">
                  <Edit3 className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-[15px] sm:text-[17px] text-white leading-snug group-hover:text-[#00A3E0] transition-colors">
                      Expert Editing
                    </h4>
                    <span className="text-[9.5px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/15 text-[#00E5FF] border border-cyan-400/30">
                      Top Tier
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                    Refining your story for clarity, structural flow, tone, and maximum reader impact.
                  </p>
                </div>
              </div>

              {/* Feature Card 2: Premium Formatting (3D Rotated) */}
              <div className="hero-feature-card-rotated p-3 sm:p-4 flex items-start gap-3 sm:gap-3.5 min-h-0 sm:min-h-[94px] cursor-pointer">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0 shadow-sm mt-0.5">
                  <BookMarked className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-sm sm:text-[15px] text-white leading-snug mb-0.5 sm:mb-1">
                    Premium Formatting
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                    Professional formatting for print and digital excellence.
                  </p>
                </div>
              </div>

              {/* Feature Card 3: Global Distribution (3D Rotated) */}
              <div className="hero-feature-card-rotated p-3 sm:p-4 flex items-start gap-3 sm:gap-3.5 min-h-0 sm:min-h-[94px] cursor-pointer">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-[#00A3E0] shrink-0 shadow-sm mt-0.5">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-sm sm:text-[15px] text-white leading-snug mb-0.5 sm:mb-1">
                    Global Distribution
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                    Delivering your book to leading platforms and readers worldwide.
                  </p>
                </div>
              </div>

              {/* Publishing Platforms Glassmorphic Dock (3D Rotated, touching down right above the wave) */}
              <div className="hero-platforms-dock-rotated p-3 sm:p-4 mt-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Publishing Platforms
                </span>

                {/* Row of Crisp Brand Logos */}
                <div className="grid grid-cols-5 items-center justify-items-center gap-1 sm:gap-2 text-slate-200">
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

      </section>
    </div>
  );
}
