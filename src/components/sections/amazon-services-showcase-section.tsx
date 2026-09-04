"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export function AmazonServicesShowcaseSection() {
  const serviceFeatures = [
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

  {/* Exact SVG Paths for 3D Layered Orbital Circle around the isolated book */}
  const FULL_PATH =
    "M 1282.2,716.9 L 1281.3,731.3 L 1275.8,746.0 L 1265.7,760.9 L 1251.2,775.9 L 1232.3,790.9 L 1209.2,805.8 L 1182.1,820.5 L 1151.1,834.8 L 1116.6,848.7 L 1078.7,862.0 L 1037.8,874.6 L 994.1,886.5 L 948.1,897.5 L 900.0,907.6 L 850.2,916.7 L 799.1,924.7 L 747.1,931.6 L 694.6,937.2 L 642.0,941.7 L 589.6,944.9 L 538.0,946.8 L 487.4,947.3 L 438.2,946.6 L 390.9,944.6 L 345.8,941.2 L 303.2,936.6 L 263.5,930.8 L 227.0,923.8 L 193.8,915.6 L 164.4,906.4 L 138.9,896.2 L 117.5,885.1 L 100.4,873.1 L 87.7,860.4 L 79.4,847.0 L 75.8,833.1 L 76.7,818.7 L 82.2,804.0 L 92.3,789.1 L 106.8,774.1 L 125.7,759.1 L 148.8,744.2 L 175.9,729.5 L 206.9,715.2 L 241.4,701.3 L 279.3,688.0 L 320.2,675.4 L 363.9,663.5 L 409.9,652.5 L 458.0,642.4 L 507.8,633.3 L 558.9,625.3 L 610.9,618.4 L 663.4,612.8 L 716.0,608.3 L 768.4,605.1 L 820.0,603.2 L 870.6,602.7 L 919.8,603.4 L 967.1,605.4 L 1012.2,608.8 L 1054.8,613.4 L 1094.5,619.2 L 1131.0,626.2 L 1164.2,634.4 L 1193.6,643.6 L 1219.1,653.8 L 1240.5,664.9 L 1257.6,676.9 L 1270.3,689.6 L 1278.6,703.0 L 1282.2,716.9 Z";

  const FRONT_PATH =
    "M 1282.2,716.9 L 1281.3,731.3 L 1275.8,746.0 L 1265.7,760.9 L 1251.2,775.9 L 1232.3,790.9 L 1209.2,805.8 L 1182.1,820.5 L 1151.1,834.8 L 1116.6,848.7 L 1078.7,862.0 L 1037.8,874.6 L 994.1,886.5 L 948.1,897.5 L 900.0,907.6 L 850.2,916.7 L 799.1,924.7 L 747.1,931.6 L 694.6,937.2 L 642.0,941.7 L 589.6,944.9 L 538.0,946.8 L 487.4,947.3 L 438.2,946.6 L 390.9,944.6 L 345.8,941.2 L 303.2,936.6 L 263.5,930.8 L 227.0,923.8 L 193.8,915.6 L 164.4,906.4 L 138.9,896.2 L 117.5,885.1 L 100.4,873.1 L 87.7,860.4 L 79.4,847.0 L 75.8,833.1";

  const BACK_PATH =
    "M 75.8,833.1 L 76.7,818.7 L 82.2,804.0 L 92.3,789.1 L 106.8,774.1 L 125.7,759.1 L 148.8,744.2 L 175.9,729.5 L 206.9,715.2 L 241.4,701.3 L 279.3,688.0 L 320.2,675.4 L 363.9,663.5 L 409.9,652.5 L 458.0,642.4 L 507.8,633.3 L 558.9,625.3 L 610.9,618.4 L 663.4,612.8 L 716.0,608.3 L 768.4,605.1 L 820.0,603.2 L 870.6,602.7 L 919.8,603.4 L 967.1,605.4 L 1012.2,608.8 L 1054.8,613.4 L 1094.5,619.2 L 1131.0,626.2 L 1164.2,634.4 L 1193.6,643.6 L 1219.1,653.8 L 1240.5,664.9 L 1257.6,676.9 L 1270.3,689.6 L 1278.6,703.0 L 1282.2,716.9";

  const SWIRL_PATH =
    "M 1282.2,716.9 L 1289.8,695.0 L 1296.4,673.1 L 1302.1,651.4 L 1307.0,629.7 L 1311.0,608.1 L 1314.0,586.7 L 1316.1,565.3 L 1317.4,544.1 L 1317.8,523.0 L 1317.2,501.9 L 1315.8,480.9 L 1313.4,460.1 L 1310.2,439.3 L 1306.0,418.7 L 1301.0,398.1 L 1295.0,377.7 L 1288.2,357.3 L 1280.4,337.1 L 1271.8,317.0 L 1262.2,296.9";

  {/* Hero 3D Book & Layered Dotted Orbital Circle Component */}
  const HeroBookWithAnimatedOrbit = () => (
    <div className="relative w-full aspect-[1360/960] select-none">
      {/* 1. LAYER BEHIND BOOK (z-0): Back arc of orbital circle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
        viewBox="0 0 1360 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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

        {/* Ambient Radial Soft Glow centered behind book */}
        <radialGradient id="bookBackGlow" cx="50%" cy="65%" r="45%">
          <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#0052cc" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#010714" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="680" cy="620" rx="550" ry="340" fill="url(#bookBackGlow)" />

        {/* Back Arc: Faint Cyan Guide Rail */}
        <path
          d={BACK_PATH}
          stroke="#00A3E0"
          strokeWidth="1.6"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* Back Arc: Primary Animated Dotted Streaming Ring */}
        <path
          d={BACK_PATH}
          stroke="#00FFFF"
          strokeWidth="2.8"
          strokeDasharray="4 20"
          strokeLinecap="round"
          className="animate-orbit-dashes"
          filter="url(#orbitCyanGlow)"
          opacity="0.95"
        />

        {/* Back Arc: Secondary Reverse Micro-Dots */}
        <path
          d={BACK_PATH}
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeDasharray="3 16"
          strokeLinecap="round"
          className="animate-orbit-dashes-reverse"
          opacity="0.55"
        />
      </svg>

      {/* 2. MIDDLE LAYER (z-10): The Isolated 3D Magic Book (Zero background, 100% clean cutout) */}
      <div className="absolute left-[11.62%] top-[12.5%] w-[76.84%] h-[74.27%] z-10">
        <Image
          src="/isolated_magic_book_clean.png"
          alt="Amazon Publishing Services - 3D Open Book with Alpine Mountain Sunrise"
          fill
          sizes="(max-width: 1024px) 90vw, 850px"
          className="object-contain drop-shadow-[0_25px_60px_rgba(0,163,224,0.38)]"
          priority
        />
      </div>

      {/* 3. LAYER IN FRONT OF BOOK (z-20): Front arc of orbital circle, pearls & sparkles */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
        viewBox="0 0 1360 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Front Arc: Faint Cyan Guide Rail */}
        <path
          d={FRONT_PATH}
          stroke="#00A3E0"
          strokeWidth="1.6"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* Front Arc: Primary Animated Dotted Streaming Ring */}
        <path
          d={FRONT_PATH}
          stroke="#00FFFF"
          strokeWidth="2.8"
          strokeDasharray="4 20"
          strokeLinecap="round"
          className="animate-orbit-dashes"
          filter="url(#orbitCyanGlow)"
          opacity="0.95"
        />

        {/* Front Arc: Secondary Reverse Micro-Dots */}
        <path
          d={FRONT_PATH}
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeDasharray="3 16"
          strokeLinecap="round"
          className="animate-orbit-dashes-reverse"
          opacity="0.55"
        />

        {/* Upward Right Swooping Tail Arc */}
        <path
          d={SWIRL_PATH}
          stroke="#00FFFF"
          strokeWidth="2.2"
          strokeDasharray="4 18"
          strokeLinecap="round"
          className="animate-orbit-dashes"
          filter="url(#orbitCyanGlow)"
          opacity="0.85"
        />

        {/* Starburst Cross Flares at Key Energy Anchors */}
        {/* Right branch junction flare */}
        <g transform="translate(1282, 717)">
          <circle r="3.5" fill="#FFFFFF" />
          <circle r="9" fill="#00FFFF" opacity="0.8" filter="url(#pearlCoreGlow)" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.95" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.95" />
        </g>
        {/* Left loop apex flare */}
        <g transform="translate(76, 833)">
          <circle r="3" fill="#FFFFFF" />
          <circle r="7.5" fill="#38BDF8" opacity="0.75" filter="url(#pearlCoreGlow)" />
          <line x1="-11" y1="0" x2="11" y2="0" stroke="#00FFFF" strokeWidth="1.2" opacity="0.85" />
          <line x1="0" y1="-11" x2="0" y2="11" stroke="#00FFFF" strokeWidth="1.2" opacity="0.85" />
        </g>
        {/* Front bottom apex flare */}
        <g transform="translate(487, 947)">
          <circle r="3.5" fill="#FFFFFF" />
          <circle r="8.5" fill="#00E5FF" opacity="0.8" filter="url(#pearlCoreGlow)" />
          <line x1="-13" y1="0" x2="13" y2="0" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.9" />
          <line x1="0" y1="-13" x2="0" y2="13" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.9" />
        </g>

        {/* Traveling Starburst Pearls (Orbiting smoothly along the 360 loop) */}
        <g>
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path={FULL_PATH}
          />
          <circle r="4" fill="#FFFFFF" />
          <circle r="9" fill="#00E5FF" opacity="0.8" filter="url(#pearlCoreGlow)" />
          <line x1="-13" y1="0" x2="13" y2="0" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
          <line x1="0" y1="-13" x2="0" y2="13" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        </g>

        <g>
          <animateMotion
            dur="9s"
            begin="2.25s"
            repeatCount="indefinite"
            path={FULL_PATH}
          />
          <circle r="3.5" fill="#FFFFFF" />
          <circle r="8" fill="#38BDF8" opacity="0.7" filter="url(#pearlCoreGlow)" />
          <line x1="-11" y1="0" x2="11" y2="0" stroke="#00FFFF" strokeWidth="1.2" opacity="0.85" />
          <line x1="0" y1="-11" x2="0" y2="11" stroke="#00FFFF" strokeWidth="1.2" opacity="0.85" />
        </g>

        <g>
          <animateMotion
            dur="9s"
            begin="4.5s"
            repeatCount="indefinite"
            path={FULL_PATH}
          />
          <circle r="4" fill="#FFFFFF" />
          <circle r="9" fill="#00E5FF" opacity="0.8" filter="url(#pearlCoreGlow)" />
          <line x1="-13" y1="0" x2="13" y2="0" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
          <line x1="0" y1="-13" x2="0" y2="13" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        </g>

        <g>
          <animateMotion
            dur="9s"
            begin="6.75s"
            repeatCount="indefinite"
            path={FULL_PATH}
          />
          <circle r="3.5" fill="#FFFFFF" />
          <circle r="8" fill="#38BDF8" opacity="0.7" filter="url(#pearlCoreGlow)" />
          <line x1="-11" y1="0" x2="11" y2="0" stroke="#00FFFF" strokeWidth="1.2" opacity="0.85" />
          <line x1="0" y1="-11" x2="0" y2="11" stroke="#00FFFF" strokeWidth="1.2" opacity="0.85" />
        </g>
      </svg>
    </div>
  );

  return (
    <section className="relative w-full bg-[#010714] text-white pt-14 sm:pt-20 pb-36 sm:pb-44 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans min-h-[760px] lg:min-h-[820px] xl:min-h-[880px]">
      
      {/* Floating & Orbit Keyframes */}
      <style>{`
        @keyframes floatMagicBook {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-0.3deg);
          }
        }
        @keyframes pulseAura {
          0%, 100% {
            opacity: 0.22;
            transform: scale(1);
          }
          50% {
            opacity: 0.40;
            transform: scale(1.06);
          }
        }
        @keyframes orbitDashes {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -480;
          }
        }
        @keyframes orbitDashesRev {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 400;
          }
        }
        .animate-float-book {
          animation: floatMagicBook 7s ease-in-out infinite;
        }
        .animate-aura-pulse {
          animation: pulseAura 5s ease-in-out infinite;
        }
        .animate-orbit-dashes {
          animation: orbitDashes 12s linear infinite;
        }
        .animate-orbit-dashes-reverse {
          animation: orbitDashesRev 16s linear infinite;
        }
      `}</style>

      {/* Atmospheric Background (Pure CSS Gradient Glow & Particles - NO static background image!) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial cyan atmosphere behind the book */}
        <div className="absolute top-[38%] right-[14%] -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-[#00A3E0]/18 blur-[150px] animate-aura-pulse" />
        <div className="absolute top-[48%] right-[18%] -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-blue-600/10 blur-[130px]" />
        
        {/* Scattered celestial particles */}
        <div className="absolute top-12 left-[28%] w-1 h-1 rounded-full bg-white/40 blur-[0.5px]" />
        <div className="absolute top-28 left-[44%] w-1.5 h-1.5 rounded-full bg-cyan-300/50 blur-[0.5px]" />
        <div className="absolute top-48 left-[14%] w-1 h-1 rounded-full bg-white/30" />
        <div className="absolute top-20 right-[38%] w-1 h-1 rounded-full bg-cyan-200/60" />
        <div className="absolute top-64 right-[8%] w-1.5 h-1.5 rounded-full bg-cyan-300/40 blur-[0.5px]" />
      </div>

      {/* DESKTOP HERO 3D BOOK & ANIMATED ORBIT (Hero Graphic on the right side) */}
      <div className="hidden lg:block absolute right-[-2%] xl:right-[1%] 2xl:right-[3%] top-[34%] xl:top-[36%] -translate-y-1/2 w-[52vw] max-w-[780px] xl:max-w-[880px] 2xl:max-w-[960px] pointer-events-none z-10 animate-float-book">
        <HeroBookWithAnimatedOrbit />
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="relative max-w-[1560px] mx-auto z-10">
        
        {/* Left Headline & Content Block */}
        <div className="lg:w-[52%] xl:w-[48%] flex flex-col justify-center mb-8 lg:mb-16">
          
          {/* Big 2-Tone Headline exactly matching reference (3 lines) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-serif font-bold leading-[1.16] tracking-tight mb-4">
            <span className="text-white block">
              Amazon Publishing Services
            </span>
            <span className="text-[#00A3E0] block font-serif font-bold mt-1.5">
              Editing, Design, and Distribution
            </span>
            <span className="text-[#00A3E0] block font-serif font-bold mt-1.5">
              Support for Authors
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-normal font-sans">
            We handle the technical and creative details of publishing,
            <br className="hidden sm:inline" /> so you can focus on what you do best—writing.
          </p>

          {/* Dual CTA Buttons */}
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
        <div className="block lg:hidden relative w-full max-w-[540px] mx-auto my-8 animate-float-book">
          <HeroBookWithAnimatedOrbit />
        </div>

        {/* 5 BOTTOM SERVICE CARDS (Exact match to reference: no top border, exact transparent cyan icons, vertical dividers) */}
        <div className="lg:w-[72%] xl:w-[68%] 2xl:w-[66%] grid grid-cols-2 sm:grid-cols-5 items-stretch pt-4 sm:pt-6">
          {serviceFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center px-3 sm:px-4 py-3 sm:py-0 ${
                idx !== serviceFeatures.length - 1
                  ? "sm:border-r sm:border-slate-700/60"
                  : ""
              }`}
            >
              {/* Exact Transparent Cyan Icon */}
              <div className="h-10 sm:h-11 flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={46}
                  height={42}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_4px_12px_rgba(0,163,224,0.45)]"
                />
              </div>

              {/* Title */}
              <h4 className="font-bold text-sm sm:text-[15px] text-white mb-1.5 tracking-tight">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-[12.5px] leading-snug max-w-[170px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* EXACT BOTTOM WAVE BORDER (Pure Vector SVG: Dip at left-center and sweeping up on the right) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-16 sm:h-24 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          {/* Light section fill transitioning seamlessly into the next section */}
          <path
            d="M 0 122 C 225 162, 394 186, 562 186 C 773 186, 1125 127, 1440 22 L 1440 200 L 0 200 Z"
            fill="#F5F9FD"
          />

          {/* Crisp subtle hairline border along the exact contour */}
          <path
            d="M 0 122 C 225 162, 394 186, 562 186 C 773 186, 1125 127, 1440 22"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Delicate flowing topographic contour curves in the white area on the right */}
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
