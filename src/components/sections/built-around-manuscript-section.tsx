"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone, PenTool, LayoutGrid, Rocket, Globe } from "lucide-react";

interface ServiceGlassCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  bgImage: string;
}

function ServiceGlassCard({
  icon,
  title,
  subtitle,
  description,
  bgImage,
}: ServiceGlassCardProps) {
  return (
    <div className="group relative rounded-2xl border border-cyan-500/35 hover:border-cyan-300/90 bg-[#030c1e]/90 backdrop-blur-md overflow-hidden p-7 sm:p-8 xl:p-9 min-h-[250px] sm:min-h-[270px] xl:min-h-[295px] flex flex-col justify-between shadow-[0_0_24px_rgba(0,163,224,0.14)] hover:shadow-[0_0_36px_rgba(0,163,224,0.35)] transition-all duration-500 transform hover:-translate-y-1">
      {/* Real Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          className="object-cover object-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 mix-blend-screen"
        />
        {/* Gradients for deep contrast and crisp typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020712] via-[#030e22]/90 to-[#04142e]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,163,224,0.18),transparent_70%)]" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Top Row: Circular Glow Icon Badge + Title & Cyan Divider */}
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#02142d]/95 border border-cyan-400/80 flex items-center justify-center text-[#00A3E0] shadow-[0_0_18px_rgba(0,163,224,0.45)] group-hover:shadow-[0_0_26px_rgba(0,163,224,0.7)] group-hover:border-cyan-300 group-hover:scale-105 transition-all duration-300 shrink-0">
              {icon}
            </div>

            <div className="pt-0.5">
              <h3 className="text-white font-sans font-bold text-lg sm:text-[20px] xl:text-[22px] leading-snug">
                {title}
                {subtitle && (
                  <>
                    <br />
                    <span>{subtitle}</span>
                  </>
                )}
              </h3>

              {/* Cyan Diamond Accent Line */}
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-8 h-[1.5px] bg-[#00A3E0]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#00A3E0] bg-[#020712]" />
                <div className="w-8 h-[1.5px] bg-[#00A3E0]" />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 font-sans text-xs sm:text-[14px] xl:text-[14.5px] leading-relaxed font-normal mt-4 pl-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BuiltAroundManuscriptSection() {
  const cards = [
    {
      icon: <PenTool className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300" strokeWidth={1.8} />,
      title: "Editing",
      description:
        "Expert editing that refines your story, strengthens clarity, and elevates impact.",
      bgImage: "/card-editing-bg.jpg",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300" strokeWidth={1.8} />,
      title: "Design &",
      subtitle: "Formatting",
      description:
        "Professional design and formatting for print and digital—polished, consistent, and on-brand.",
      bgImage: "/card-formatting-bg.jpg",
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300" strokeWidth={1.8} />,
      title: "Publishing",
      subtitle: "Setup",
      description:
        "Complete publishing setup and compliance so your book is ready for every channel.",
      bgImage: "/card-publishing-bg.jpg",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300" strokeWidth={1.8} />,
      title: "Distribution",
      subtitle: "Support",
      description:
        "Global distribution support to get your book in front of readers wherever they are.",
      bgImage: "/card-distribution-bg.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-[#020712] text-white pt-32 sm:pt-40 lg:pt-48 xl:pt-56 pb-32 sm:pb-44 lg:pb-52 px-3 sm:px-6 lg:px-10 overflow-hidden">
      {/* Keyframe animations for orbit rotation and star flare */}
      <style>{`
        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitCounter {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes starSparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.85;
            filter: drop-shadow(0 0 8px #00A3E0);
          }
          50% {
            transform: scale(1.3) rotate(45deg);
            opacity: 1;
            filter: drop-shadow(0 0 18px #38bdf8);
          }
        }
      `}</style>

      {/* Top Wave Transition: Asymmetric flowing wave with multi-layer neon glow */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          className="relative block w-full h-20 sm:h-28 md:h-36 lg:h-44"
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Linear gradient for primary glowing wave stroke */}
            <linearGradient id="waveStrokeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.45" />
              <stop offset="15%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="28%" stopColor="#67E8F9" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#00A3E0" stopOpacity="0.8" />
              <stop offset="78%" stopColor="#38BDF8" stopOpacity="1" />
              <stop offset="90%" stopColor="#BAE6FD" stopOpacity="1" />
              <stop offset="100%" stopColor="#00A3E0" stopOpacity="0.65" />
            </linearGradient>

            {/* Neon Glow Filter */}
            <filter id="waveGlowFilter" x="-10%" y="-40%" width="120%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="glow1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="glow2" />
              <feMerge>
                <feMergeNode in="glow2" />
                <feMergeNode in="glow1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Soft Backlight Aura above cards */}
            <radialGradient id="troughAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#020712" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Fill the top part with #EFF7FD to seamlessly blend with the section above */}
          <path
            d="M 0,0 L 1440,0 L 1440,62 C 1390,82 1310,114 1220,118 C 1100,123 960,105 820,72 C 680,40 520,14 380,14 C 270,14 200,38 140,58 C 90,74 40,68 0,50 Z"
            fill="#EFF7FD"
          />

          {/* 2. Soft Backlight Glow Blob behind the right-hand wave trough */}
          <ellipse cx="1160" cy="116" rx="260" ry="42" fill="url(#troughAura)" />

          {/* 3. Echo Wave Line 3 (faintest ripple on top-left) */}
          <path
            d="M 0,116 C 55,134 105,140 155,124 C 215,104 270,80 380,80 C 450,80 540,98 640,122 C 710,138 770,148 830,152"
            stroke="#00A3E0"
            strokeWidth="1.2"
            strokeOpacity="0.15"
            strokeLinecap="round"
          />

          {/* 4. Echo Wave Line 2 (subtle mid ripple on top-left) */}
          <path
            d="M 0,94 C 50,112 100,118 150,102 C 210,82 270,58 380,58 C 470,58 580,78 690,104 C 770,122 840,134 920,140"
            stroke="#00A3E0"
            strokeWidth="1.3"
            strokeOpacity="0.28"
            strokeLinecap="round"
          />

          {/* 5. Echo Wave Line 1 (pronounced ripple directly under left crest) */}
          <path
            d="M 0,72 C 45,90 95,96 145,80 C 205,60 270,36 380,36 C 490,36 620,58 740,86 C 840,110 930,126 1020,132"
            stroke="#00A3E0"
            strokeWidth="1.5"
            strokeOpacity="0.42"
            strokeLinecap="round"
          />

          {/* 6. Primary Illuminated Cyan Glowing Wave Crest Line */}
          <path
            d="M 0,50 C 40,68 90,74 140,58 C 200,38 270,14 380,14 C 520,14 680,40 820,72 C 960,105 1100,123 1220,118 C 1310,114 1390,82 1440,62"
            stroke="url(#waveStrokeGlow)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#waveGlowFilter)"
          />

          {/* 7. Crisp Bright Core Highlight Line */}
          <path
            d="M 0,50 C 40,68 90,74 140,58 C 200,38 270,14 380,14 C 520,14 680,40 820,72 C 960,105 1100,123 1220,118 C 1310,114 1390,82 1440,62"
            stroke="#E0F2FE"
            strokeWidth="1.2"
            strokeOpacity="0.85"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Topographic Contour Wave Lines in Background (Bottom-Left & Section Base) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="w-full h-full opacity-25"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="topoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00A3E0" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Radiating concentric topographic soundwaves from bottom-left corner */}
          <path d="M -60,420 C 50,460 160,540 200,680 C 230,780 220,870 180,950" stroke="url(#topoGrad)" strokeWidth="1.2" />
          <path d="M -60,370 C 70,420 200,510 250,670 C 285,790 275,890 230,970" stroke="url(#topoGrad)" strokeWidth="1.2" />
          <path d="M -60,320 C 90,380 240,480 300,660 C 340,800 330,910 280,990" stroke="url(#topoGrad)" strokeWidth="1.2" />
          <path d="M -60,270 C 110,340 280,450 350,650 C 395,810 385,930 330,1010" stroke="url(#topoGrad)" strokeWidth="1.2" />
          <path d="M -60,220 C 130,300 320,420 400,640 C 450,820 440,950 380,1030" stroke="url(#topoGrad)" strokeWidth="1.2" />
          <path d="M -60,170 C 150,260 360,390 450,630 C 505,830 495,970 430,1050" stroke="url(#topoGrad)" strokeWidth="1.2" />
          <path d="M -60,120 C 170,220 400,360 500,620 C 560,840 550,990 480,1070" stroke="url(#topoGrad)" strokeWidth="1.2" />

          {/* Flowing horizontal topographical wave lines traversing across the lower section */}
          <path d="M -100,680 C 200,620 520,740 820,700 C 1120,660 1340,760 1600,710" stroke="url(#topoGrad)" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M -100,715 C 200,655 520,775 820,735 C 1120,695 1340,795 1600,745" stroke="url(#topoGrad)" strokeWidth="1" strokeOpacity="0.4" />
          <path d="M -100,750 C 200,690 520,810 820,770 C 1120,730 1340,830 1600,780" stroke="url(#topoGrad)" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M -100,785 C 200,725 520,845 820,805 C 1120,765 1340,865 1600,815" stroke="url(#topoGrad)" strokeWidth="1" strokeOpacity="0.25" />
          <path d="M -100,820 C 200,760 520,880 820,840 C 1120,800 1340,900 1600,850" stroke="url(#topoGrad)" strokeWidth="1" strokeOpacity="0.2" />
          <path d="M -100,855 C 200,795 520,915 820,875 C 1120,835 1340,935 1600,885" stroke="url(#topoGrad)" strokeWidth="1" strokeOpacity="0.15" />
        </svg>
      </div>

      {/* Ambient Radial Mesh Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Subtle Star / Dust Particle Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_0.75px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none z-0" />

      {/* Main Responsive Container matching Header & Footer width (max-w-[1850px]) */}
      <div className="relative w-[97%] lg:w-[98%] max-w-[1850px] mx-auto z-10 px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-5 flex flex-col items-start max-w-xl xl:max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#00A3E0]" />
              <span className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#00A3E0] uppercase">
                A CLEAR PUBLISHING PROCESS
              </span>
            </div>

            {/* Main Headline (in Editorial Serif) */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-normal leading-[1.12] tracking-tight text-white mb-2">
              Built Around
              <br />
              <span className="text-[#00A3E0] font-serif">Your Manuscript</span>
            </h2>

            {/* Cyan Diamond Accent Line */}
            <div className="flex items-center gap-2 my-5 sm:my-6">
              <div className="w-12 h-[1.5px] bg-[#00A3E0]" />
              <div className="w-2 h-2 rotate-45 border border-[#00A3E0] bg-[#020712]" />
              <div className="w-12 h-[1.5px] bg-[#00A3E0]" />
            </div>

            {/* Highlighted Lead Paragraph (in Serif matching reference screenshot) */}
            <p className="font-serif text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-normal leading-snug mb-5 text-white">
              <span className="text-[#00A3E0]">Editing, design, formatting</span>, and{" "}
              <span className="text-[#00A3E0]">publication support</span> in one documented workflow.
            </p>

            {/* Narrative Body (in Clean Sans) */}
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
              A clear, author-focused process that guides your book from manuscript to market—on time, on brand, and ready to reach readers everywhere.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#008fc0] text-white font-sans font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Connect with Us!
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+18000000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[#00A3E0] bg-[#030d1d]/80 hover:bg-[#05152e] text-[#00A3E0] font-sans font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                Call us NOW!
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Service Cards wrapped in Circular Orbit with Moving Dots */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-10 sm:py-14 lg:py-16 xl:py-20">
            
            {/* Circular Orbit Ring with Moving Dots circumscribing the 4 Cards (Fully Centered, Generous Clearance) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              
              {/* 1. Static Ambient Cyan Glow Behind the Orbit Circle */}
              <div className="w-[560px] sm:w-[660px] lg:w-[740px] xl:w-[820px] h-[560px] sm:h-[660px] lg:h-[740px] xl:h-[820px] rounded-full bg-[radial-gradient(circle,rgba(0,163,224,0.15)_0%,rgba(0,163,224,0.03)_60%,transparent_80%)] blur-2xl pointer-events-none" />

              {/* 2. Main Glowing Circle Orbit Track */}
              <div className="absolute w-[520px] sm:w-[620px] lg:w-[700px] xl:w-[780px] h-[520px] sm:h-[620px] lg:h-[700px] xl:h-[780px] rounded-full border border-cyan-400/40 shadow-[0_0_28px_rgba(0,163,224,0.25)] pointer-events-none" />

              {/* 3. Secondary Faint Dashed Outer Accent Orbit */}
              <div className="absolute w-[570px] sm:w-[680px] lg:w-[760px] xl:w-[840px] h-[570px] sm:h-[680px] lg:h-[760px] xl:h-[840px] rounded-full border border-dashed border-cyan-500/18 pointer-events-none" />

              {/* 4. Primary Rotating Orbit with Moving Dots & 4-Point Lens Flare Star */}
              <div
                className="absolute w-[520px] sm:w-[620px] lg:w-[700px] xl:w-[780px] h-[520px] sm:h-[620px] lg:h-[700px] xl:h-[780px] rounded-full pointer-events-none"
                style={{ animation: "orbitRotate 28s linear infinite" }}
              >
                {/* Moving Dot 1: Top (12 o'clock) */}
                <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A3E0] shadow-[0_0_14px_#00A3E0]" />

                {/* Moving Dot 2: Top-Right (2 o'clock) */}
                <span className="absolute top-[14%] right-[14%] w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />

                {/* Moving Dot 3: Right (3 o'clock) */}
                <span className="absolute top-1/2 -right-[5px] -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A3E0] shadow-[0_0_12px_#00A3E0]" />

                {/* Moving Dot 4: Bottom-Right (4:30) */}
                <span className="absolute bottom-[14%] right-[14%] w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />

                {/* Moving Dot 5: Bottom (6 o'clock) */}
                <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#00A3E0] shadow-[0_0_16px_#00A3E0]" />

                {/* Moving Dot 6: Bottom-Left (7:30) */}
                <span className="absolute bottom-[14%] left-[14%] w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />

                {/* Prominent Luminous Star Flare Node at Left (9 o'clock) matching screenshot */}
                <div
                  className="absolute top-1/2 -left-[14px] -translate-y-1/2 flex items-center justify-center pointer-events-none"
                  style={{ animation: "starSparkle 4s ease-in-out infinite" }}
                >
                  {/* Glowing Center Core */}
                  <span className="w-4 h-4 rounded-full bg-white shadow-[0_0_18px_#00A3E0,0_0_32px_#38bdf8]" />
                  {/* Horizontal Lens Flare Beam */}
                  <span className="absolute w-9 h-[1.5px] bg-cyan-200 shadow-[0_0_10px_#00A3E0]" />
                  {/* Vertical Lens Flare Beam */}
                  <span className="absolute h-9 w-[1.5px] bg-cyan-200 shadow-[0_0_10px_#00A3E0]" />
                </div>
              </div>

              {/* 5. Counter-Rotating Orbit Ring with Secondary Micro-Dots */}
              <div
                className="absolute w-[520px] sm:w-[620px] lg:w-[700px] xl:w-[780px] h-[520px] sm:h-[620px] lg:h-[700px] xl:h-[780px] rounded-full pointer-events-none"
                style={{ animation: "orbitCounter 38s linear infinite" }}
              >
                <span className="absolute top-[28%] left-[5%] w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_8px_#38bdf8]" />
                <span className="absolute bottom-[28%] right-[5%] w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_8px_#38bdf8]" />
                <span className="absolute top-[8%] left-[30%] w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0]" />
              </div>
            </div>

            {/* 4 Cards Grid - Substantial, Luxurious Height */}
            <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {cards.map((card, idx) => (
                <ServiceGlassCard
                  key={idx}
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  bgImage={card.bgImage}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
