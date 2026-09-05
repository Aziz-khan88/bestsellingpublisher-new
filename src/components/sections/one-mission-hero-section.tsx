"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  BookOpen,
  Users,
  Edit3,
  Globe,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export function OneMissionHeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#F7FAFD] via-[#FFFFFF] to-[#EFF7FD] pt-14 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-10 overflow-hidden font-sans">
      
      {/* Gentle Floating Animation Keyframes for the 3D Shelves */}
      <style>{`
        @keyframes floatShelves {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float-shelves {
          animation: floatShelves 6s ease-in-out infinite;
        }

        /* Pure CSS 3D Glass Shelf */
        .hero-glass-shelf {
          border-radius: 28px;
          border: 1.8px solid rgba(255, 255, 255, 0.9);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.24) 52%, rgba(210, 243, 255, 0.35) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 16px 36px -6px rgba(0, 163, 224, 0.18),
                      inset 0 2px 2px rgba(255, 255, 255, 0.98),
                      inset 1.5px 0 2px rgba(255, 255, 255, 0.6),
                      inset 0 -2px 3px rgba(0, 163, 224, 0.22);
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .hero-glass-shelf:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 42px -6px rgba(0, 163, 224, 0.24),
                      inset 0 2px 2px rgba(255, 255, 255, 1),
                      inset 0 -2px 3px rgba(0, 163, 224, 0.28);
        }
        .hero-glass-shelf::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, transparent 45%, rgba(255, 255, 255, 0.1) 100%);
          pointer-events: none;
        }
      `}</style>

      {/* Background Subtle Blueprint Wave Curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.14] z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-50,220 C420,300 860,140 1650,240"
          stroke="#00A3E0"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-50,620 C380,510 960,720 1650,560"
          stroke="#00A3E0"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          fill="none"
        />
      </svg>

      <div className="relative max-w-[1680px] mx-auto z-10 pt-4 sm:pt-6">
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow with Cyan Horizontal Dashes */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00A3E0]/80" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#00A3E0] uppercase font-sans">
              TRUSTED BY AUTHORS. CHOSEN BY STORIES.
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#00A3E0]/80" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#0B1B36] tracking-tight leading-tight">
            One Mission: Your Story,{" "}
            <span className="italic font-serif text-[#00A3E0] font-normal">
              Everywhere.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] max-w-2xl mx-auto mt-2 leading-relaxed font-normal">
            We combine craftsmanship, technology, and passion to bring your book to readers—wherever they are.
          </p>
        </div>

        {/* 2-Column Main Layout: Left Pitch & Right Pure CSS 3D Glass Shelves & Stands */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] font-bold text-xs tracking-wider uppercase mb-4 w-fit">
              <BookOpen className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>YOUR STORY, OUR EXPERTISE.</span>
            </div>

            {/* Big Section Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[#0B1B36] leading-[1.12] tracking-tight mb-3">
              Plan Your<br />
              <span className="italic font-serif text-[#00A3E0] font-normal">
                Publishing
              </span><br />
              Project
            </h2>

            {/* Cyan Accent Divider with Dot */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#00A3E0] shadow-sm" />
              <div className="w-14 h-[2px] bg-[#00A3E0]" />
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-6 font-normal">
              Choose the editing, design, formatting, publishing setup, and launch-support deliverables your manuscript requires.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-[#00A3E0] hover:bg-[#008fc0] text-white font-bold text-sm sm:text-base shadow-md shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="w-4 h-4" />
                <span>Connect with Us!</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+18000000000"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl border-2 border-[#00A3E0] bg-white text-[#00A3E0] hover:bg-cyan-50 font-bold text-sm sm:text-base shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Call us NOW!</span>
              </a>
            </div>

            {/* Bottom 4-Feature Floating Dock */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-[0_8px_24px_-6px_rgba(12,24,42,0.06)] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {/* Feature 1: Editing */}
              <div className="flex flex-col">
                <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-[#00A3E0] mb-2.5">
                  <Edit3 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0B1B36] mb-1">
                  Editing
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Refine your story for clarity, flow, and maximum impact.
                </p>
              </div>

              {/* Feature 2: Formatting */}
              <div className="flex flex-col">
                <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-[#00A3E0] mb-2.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0B1B36] mb-1">
                  Formatting
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Professional formatting for print and digital excellence.
                </p>
              </div>

              {/* Feature 3: Publishing Setup */}
              <div className="flex flex-col">
                <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-[#00A3E0] mb-2.5">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0B1B36] mb-1">
                  Publishing Setup
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Everything you need for a smooth and compliant launch.
                </p>
              </div>

              {/* Feature 4: Launch Support */}
              <div className="flex flex-col">
                <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-[#00A3E0] mb-2.5">
                  <Rocket className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0B1B36] mb-1">
                  Launch Support
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Strategic guidance to promote and grow your book.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols on lg): Pure CSS 3D Glass Shelves & Stands holding Books */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Ambient Cyan Glow behind shelves */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00A3E0]/15 blur-3xl pointer-events-none -z-10" />

            {/* Exact 3D Glass Shelves Showcase with Gentle Floating Animation */}
            <div className="relative w-full max-w-[640px] aspect-[640/520] select-none animate-float-shelves transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Multi-tier 3D Glass Podium Stage Background (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 640 520" preserveAspectRatio="none">
                <defs>
                  {/* Ambient Glow */}
                  <radialGradient id="stageGlow" cx="55%" cy="55%" r="50%">
                    <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.18" />
                    <stop offset="60%" stopColor="#00A3E0" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Upper Podium Tier Gradients */}
                  <radialGradient id="stagePodiumTop1" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
                    <stop offset="60%" stopColor="#f0f9ff" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#bfe8fd" stopOpacity="0.35" />
                  </radialGradient>
                  <linearGradient id="stagePodiumCyl1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#b8e6fc" stopOpacity="0.4" />
                  </linearGradient>

                  {/* Lower Podium Tier Gradients */}
                  <radialGradient id="stagePodiumTop2" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#f4fbff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#aae2fd" stopOpacity="0.35" />
                  </radialGradient>
                  <linearGradient id="stagePodiumCyl2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#a1defc" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Ambient Center Glow */}
                <ellipse cx="350" cy="310" rx="290" ry="190" fill="url(#stageGlow)" />

                {/* Concentric Blueprint Wave Lines */}
                <g stroke="#00A3E0" strokeWidth="1.2" fill="none" opacity="0.22">
                  <path d="M 110 410 C 230 480, 450 480, 630 360" />
                  <path d="M 160 435 C 270 495, 470 490, 630 390" />
                  <path d="M 210 455 C 310 505, 490 500, 630 420" />
                  <path d="M 260 475 C 350 515, 510 510, 630 445" />
                  <path d="M 45 280 C 130 180, 250 210, 350 240" strokeDasharray="4 6" />
                </g>

                {/* Upper Glass Tier (Back Podium) */}
                <path d="M 90 250 A 250 78 0 0 0 580 250 L 580 280 A 250 78 0 0 1 90 280 Z" fill="url(#stagePodiumCyl1)" />
                <ellipse cx="335" cy="250" rx="250" ry="78" fill="url(#stagePodiumTop1)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
                <path d="M 105 258 A 250 78 0 0 0 565 258" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.85" />

                {/* Lower Stepped Glass Tier (Front Podium) */}
                <g opacity="0.8">
                  <path d="M 120 335 A 230 72 0 0 0 570 335 L 570 365 A 230 72 0 0 1 120 365 Z" fill="url(#stagePodiumCyl2)" />
                  <ellipse cx="345" cy="335" rx="230" ry="72" fill="url(#stagePodiumTop2)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
                  <path d="M 135 344 A 230 72 0 0 0 555 344" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.9" />
                </g>
              </svg>

              {/* Shelf 01 (Back Left) - Upper Tier */}
              <div 
                className="hero-glass-shelf absolute flex flex-col items-center justify-end"
                style={{
                  left: "4.7%",
                  top: "4.8%",
                  width: "28.1%",
                  height: "49.0%",
                  zIndex: 10,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 left-4 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-bold text-base sm:text-lg tracking-wider font-sans leading-none">
                    01
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 1 Container */}
                <div className="relative z-10 mb-1.5 flex justify-center items-end">
                  <Image
                    src="/hero-book-1.png"
                    alt="Book 1 - Manuscript By David Sherman"
                    width={128}
                    height={202}
                    className="w-[124px] sm:w-[128px] h-auto object-contain drop-shadow-[0_8px_14px_rgba(0,30,60,0.15)]"
                    priority
                  />
                </div>
              </div>

              {/* Shelf 02 (Front Center-Left) - Foreground Shelf */}
              <div 
                className="hero-glass-shelf absolute flex flex-col items-center justify-end"
                style={{
                  left: "22.8%",
                  top: "29.2%",
                  width: "25.8%",
                  height: "48.5%",
                  zIndex: 30,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 left-4 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-bold text-base sm:text-lg tracking-wider font-sans leading-none">
                    02
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 2 Container */}
                <div className="relative z-10 mb-1 flex justify-center items-end">
                  <Image
                    src="/hero-book-2.png"
                    alt="Book 2 - Gemini in Twain by Alyssa K. Farrow"
                    width={128}
                    height={215}
                    className="w-[124px] sm:w-[128px] h-auto object-contain drop-shadow-[0_8px_14px_rgba(0,30,60,0.15)]"
                    priority
                  />
                </div>
              </div>
              {/* 3D Glass Pedestal Stand 02 holding Shelf 02 */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: "23.3%",
                  top: "74.6%",
                  width: "24.7%",
                  height: "9.2%",
                  zIndex: 28,
                }}
              >
                <svg viewBox="0 0 158 48" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="standTopGrad" cx="50%" cy="35%" r="55%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                      <stop offset="60%" stopColor="#e0f4ff" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#88d6fd" stopOpacity="0.4" />
                    </radialGradient>
                    <linearGradient id="standCylGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#84d4fb" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="standSideGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.5" />
                      <stop offset="15%" stopColor="#ffffff" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
                      <stop offset="85%" stopColor="#ffffff" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#00A3E0" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  {/* Soft Ground Contact Shadow */}
                  <ellipse cx="79" cy="34" rx="70" ry="11" fill="#00A3E0" opacity="0.22" filter="blur(3px)" />
                  {/* Cylinder Body */}
                  <path d="M 9 17 A 70 13 0 0 0 149 17 L 149 30 A 70 13 0 0 1 9 30 Z" fill="url(#standCylGrad)" />
                  <path d="M 9 17 A 70 13 0 0 0 149 17 L 149 30 A 70 13 0 0 1 9 30 Z" fill="url(#standSideGrad)" />
                  <path d="M 9 30 A 70 13 0 0 0 149 30" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" fill="none" />
                  {/* Top Disc Face */}
                  <ellipse cx="79" cy="17" rx="70" ry="13" fill="url(#standTopGrad)" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" />
                  {/* Specular Front Rim Highlight */}
                  <path d="M 16 20 A 70 13 0 0 0 142 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9" />
                </svg>
              </div>

              {/* Shelf 03 (Back Center-Right) - Upper Tier */}
              <div 
                className="hero-glass-shelf absolute flex flex-col items-center justify-end"
                style={{
                  left: "41.4%",
                  top: "12.5%",
                  width: "27.8%",
                  height: "51.9%",
                  zIndex: 12,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 left-4 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-bold text-base sm:text-lg tracking-wider font-sans leading-none">
                    03
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 3 Container */}
                <div className="relative z-10 mb-1.5 flex justify-center items-end">
                  <Image
                    src="/hero-book-3.png"
                    alt="Book 3 - Legacy of Love by Dr. Haroon Rasheed Khan"
                    width={128}
                    height={219}
                    className="w-[124px] sm:w-[128px] h-auto object-contain drop-shadow-[0_8px_14px_rgba(0,30,60,0.15)]"
                    priority
                  />
                </div>
              </div>

              {/* Shelf 04 (Front Right) - Foreground Shelf */}
              <div 
                className="hero-glass-shelf absolute flex flex-col items-center justify-end"
                style={{
                  left: "63.3%",
                  top: "29.2%",
                  width: "24.7%",
                  height: "48.5%",
                  zIndex: 25,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 left-4 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-bold text-base sm:text-lg tracking-wider font-sans leading-none">
                    04
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 4 Container */}
                <div className="relative z-10 mb-1 flex justify-center items-end">
                  <Image
                    src="/hero-book-4.png"
                    alt="Book 4 - Mrs. Endurance by Lizar James-Momes"
                    width={126}
                    height={217}
                    className="w-[122px] sm:w-[126px] h-auto object-contain drop-shadow-[0_8px_14px_rgba(0,30,60,0.15)]"
                    priority
                  />
                </div>
              </div>
              {/* 3D Glass Pedestal Stand 04 holding Shelf 04 */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: "63.8%",
                  top: "74.6%",
                  width: "23.8%",
                  height: "9.2%",
                  zIndex: 24,
                }}
              >
                <svg viewBox="0 0 152 48" className="w-full h-full" preserveAspectRatio="none">
                  {/* Soft Ground Contact Shadow */}
                  <ellipse cx="76" cy="34" rx="67" ry="11" fill="#00A3E0" opacity="0.22" filter="blur(3px)" />
                  {/* Cylinder Body */}
                  <path d="M 9 17 A 67 13 0 0 0 143 17 L 143 30 A 67 13 0 0 1 9 30 Z" fill="url(#standCylGrad)" />
                  <path d="M 9 17 A 67 13 0 0 0 143 17 L 143 30 A 67 13 0 0 1 9 30 Z" fill="url(#standSideGrad)" />
                  <path d="M 9 30 A 67 13 0 0 0 143 30" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" fill="none" />
                  {/* Top Disc Face */}
                  <ellipse cx="76" cy="17" rx="67" ry="13" fill="url(#standTopGrad)" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" />
                  {/* Specular Front Rim Highlight */}
                  <path d="M 16 20 A 67 13 0 0 0 136 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9" />
                </svg>
              </div>

              {/* Floating Pill Badge: Trusted by Authors. | Chosen by Stories. */}
              <div 
                className="absolute z-40 inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-cyan-200/80 shadow-[0_8px_24px_rgba(0,163,224,0.14)]"
                style={{
                  bottom: "3.8%",
                  right: "2.3%",
                }}
              >
                <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-700">
                  Trusted by Authors.
                </span>
                <span className="w-px h-3.5 bg-slate-300" />
                <span className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  Chosen by Stories.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
