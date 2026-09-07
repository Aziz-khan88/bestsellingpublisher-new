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
  LayoutGrid,
  UploadCloud,
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

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10 pt-4 sm:pt-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column (5 cols on xl/2xl, 6 on lg) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] font-bold text-xs sm:text-[13px] tracking-wider uppercase mb-4 w-fit">
              <BookOpen className="w-4 h-4 text-[#00A3E0]" />
              <span>YOUR STORY, OUR EXPERTISE.</span>
            </div>

            {/* Big Section Headline: 2 Lines, No <br /> tags, Increased Font Sizes */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-serif font-bold text-[#0B1B36] leading-[1.08] tracking-tight mb-4">
              <span className="block">Plan Your</span>
              <span className="block">
                <span className="italic font-serif text-[#00A3E0] font-normal">
                  Publishing
                </span>{" "}
                Project
              </span>
            </h2>

            {/* Cyan Accent Divider with Dot */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-sm" />
              <div className="w-16 h-[2.5px] bg-[#00A3E0]" />
            </div>

            {/* Description - Increased font size */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-[17px] leading-relaxed max-w-xl mb-6 font-normal">
              Choose the editing, design, formatting, publishing setup, and launch-support deliverables your manuscript requires.
            </p>

            {/* CTA Buttons - Increased size */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#00A3E0] hover:bg-[#008fc0] text-white font-bold text-base sm:text-[17px] shadow-md shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="w-4.5 h-4.5" />
                <span>Connect with Us!</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>

              <a
                href="tel:+18000000000"
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-[#00A3E0] bg-white text-[#00A3E0] hover:bg-cyan-50 font-bold text-base sm:text-[17px] shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4.5 h-4.5" />
                <span>Call us NOW!</span>
              </a>
            </div>

            {/* Bottom 4-Feature Floating Dock - Increased Width & Spacious Layout */}
            <div className="w-full max-w-2xl xl:max-w-3xl bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-[0_10px_32px_-6px_rgba(12,24,42,0.08)] p-5 sm:p-6 grid grid-cols-2 gap-4 sm:gap-6">
              {/* Feature 1: Editing */}
              <div className="flex flex-col group">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/60 border border-cyan-200/90 flex items-center justify-center text-[#00A3E0] mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#0B1B36] mb-1.5 group-hover:text-[#00A3E0] transition-colors">
                  Manuscript Editing
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                  Refine clarity, tone, flow, and structure with expert feedback.
                </p>
              </div>

              {/* Feature 2: Formatting */}
              <div className="flex flex-col group">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/60 border border-cyan-200/90 flex items-center justify-center text-[#00A3E0] mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#0B1B36] mb-1.5 group-hover:text-[#00A3E0] transition-colors">
                  Design & Layout
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                  Standard interior typesetting and custom cover design options.
                </p>
              </div>

              {/* Feature 3: Publishing */}
              <div className="flex flex-col group">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/60 border border-cyan-200/90 flex items-center justify-center text-[#00A3E0] mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#0B1B36] mb-1.5 group-hover:text-[#00A3E0] transition-colors">
                  Publishing Setup
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                  Everything you need for a smooth and compliant launch.
                </p>
              </div>

              {/* Feature 4: Launch Support */}
              <div className="flex flex-col group">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100/60 border border-cyan-200/90 flex items-center justify-center text-[#00A3E0] mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#0B1B36] mb-1.5 group-hover:text-[#00A3E0] transition-colors">
                  Launch Support
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                  Strategic guidance to promote and grow your book.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols on xl/2xl, 6 on lg): Enlarged 3D Glass Shelves & Stands covering the right side */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end w-full">
            {/* Expanded Ambient Cyan Glow behind shelves */}
            <div className="absolute w-[650px] sm:w-[800px] lg:w-[920px] h-[550px] sm:h-[680px] rounded-full bg-gradient-to-tr from-[#00A3E0]/14 via-[#00A3E0]/18 to-cyan-300/10 blur-[90px] pointer-events-none -z-10" />

            {/* Enlarged 3D Glass Shelves Showcase covering the right side area */}
            <div className="relative w-full max-w-[760px] xl:max-w-[880px] 2xl:max-w-[980px] aspect-[650/510] select-none animate-float-shelves transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Multi-tier 3D Glass Podium Stage Background (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 650 510" preserveAspectRatio="none">
                <defs>
                  {/* Ambient Glow */}
                  <radialGradient id="stageGlow" cx="52%" cy="54%" r="52%">
                    <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.2" />
                    <stop offset="60%" stopColor="#00A3E0" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Upper Podium Tier Gradients */}
                  <radialGradient id="stagePodiumTop1" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
                    <stop offset="60%" stopColor="#f0f9ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#bfe8fd" stopOpacity="0.4" />
                  </radialGradient>
                  <linearGradient id="stagePodiumCyl1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#b8e6fc" stopOpacity="0.45" />
                  </linearGradient>

                  {/* Lower Podium Tier Gradients */}
                  <radialGradient id="stagePodiumTop2" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
                    <stop offset="50%" stopColor="#f4fbff" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#aae2fd" stopOpacity="0.4" />
                  </radialGradient>
                  <linearGradient id="stagePodiumCyl2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#a1defc" stopOpacity="0.45" />
                  </linearGradient>
                </defs>

                {/* Ambient Center Glow */}
                <ellipse cx="350" cy="305" rx="300" ry="195" fill="url(#stageGlow)" />

                {/* Concentric Blueprint Wave Lines */}
                <g stroke="#00A3E0" strokeWidth="1.2" fill="none" opacity="0.24">
                  <path d="M 80 405 C 220 480, 460 480, 645 355" />
                  <path d="M 130 430 C 260 495, 480 490, 645 385" />
                  <path d="M 180 450 C 300 505, 500 500, 645 415" />
                  <path d="M 230 470 C 340 515, 520 510, 645 440" />
                  <path d="M 30 275 C 120 175, 250 205, 360 235" strokeDasharray="4 6" />
                </g>

                {/* Upper Glass Tier (Back Podium - Spanning widely) */}
                <path d="M 55 245 A 290 82 0 0 0 635 245 L 635 277 A 290 82 0 0 1 55 277 Z" fill="url(#stagePodiumCyl1)" />
                <ellipse cx="345" cy="245" rx="290" ry="82" fill="url(#stagePodiumTop1)" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" />
                <path d="M 70 253 A 290 82 0 0 0 620 253" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.85" />

                {/* Lower Stepped Glass Tier (Front Podium - Spanning widely) */}
                <g opacity="0.82">
                  <path d="M 85 330 A 265 76 0 0 0 620 330 L 620 362 A 265 76 0 0 1 85 362 Z" fill="url(#stagePodiumCyl2)" />
                  <ellipse cx="352" cy="330" rx="265" ry="76" fill="url(#stagePodiumTop2)" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" />
                  <path d="M 100 339 A 265 76 0 0 0 605 339" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.9" />
                </g>
              </svg>

              {/* Shelf 01 (Back Left) - Upper Tier */}
              <div 
                className="hero-glass-shelf absolute flex flex-col items-center justify-end"
                style={{
                  left: "3.5%",
                  top: "3.0%",
                  width: "29.0%",
                  height: "51.0%",
                  zIndex: 10,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-5 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-extrabold text-sm sm:text-xl lg:text-2xl tracking-wider font-sans leading-none">
                    01
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 1 Container */}
                <div className="relative z-10 mb-2 flex justify-center items-end w-full px-2">
                  <Image
                    src="/hero-book-1.png"
                    alt="Book 1 - Manuscript By David Sherman"
                    width={240}
                    height={380}
                    className="w-[88%] max-w-[210px] h-auto object-contain drop-shadow-[0_12px_22px_rgba(0,30,60,0.18)] transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Shelf 02 (Front Center-Left) - Foreground Shelf */}
              <div 
                className="hero-glass-shelf absolute flex flex-col items-center justify-end"
                style={{
                  left: "22.0%",
                  top: "27.5%",
                  width: "26.5%",
                  height: "50.0%",
                  zIndex: 30,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-5 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-extrabold text-sm sm:text-xl lg:text-2xl tracking-wider font-sans leading-none">
                    02
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 2 Container */}
                <div className="relative z-10 mb-1.5 flex justify-center items-end w-full px-2">
                  <Image
                    src="/hero-book-2.png"
                    alt="Book 2 - Gemini in Twain by Alyssa K. Farrow"
                    width={240}
                    height={390}
                    className="w-[88%] max-w-[210px] h-auto object-contain drop-shadow-[0_12px_22px_rgba(0,30,60,0.18)] transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </div>
              {/* 3D Glass Pedestal Stand 02 holding Shelf 02 */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: "22.5%",
                  top: "74.5%",
                  width: "25.5%",
                  height: "9.5%",
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
                  left: "43.5%",
                  top: "10.5%",
                  width: "28.5%",
                  height: "53.0%",
                  zIndex: 12,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-5 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-extrabold text-sm sm:text-xl lg:text-2xl tracking-wider font-sans leading-none">
                    03
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 3 Container */}
                <div className="relative z-10 mb-2 flex justify-center items-end w-full px-2">
                  <Image
                    src="/hero-book-3.png"
                    alt="Book 3 - Legacy of Love by Dr. Haroon Rasheed Khan"
                    width={240}
                    height={400}
                    className="w-[88%] max-w-[210px] h-auto object-contain drop-shadow-[0_12px_22px_rgba(0,30,60,0.18)] transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Shelf 04 (Front Right) - Foreground Shelf (Spanning to cover the right side) */}
              <div 
                className="hero-glass-shelf absolute flex flex-col items-center justify-end"
                style={{
                  left: "67.5%",
                  top: "27.5%",
                  width: "26.0%",
                  height: "50.0%",
                  zIndex: 25,
                }}
              >
                {/* Shelf Number & Dots */}
                <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-5 z-20 flex flex-col items-start select-none pointer-events-none">
                  <span className="text-[#00A3E0] font-extrabold text-sm sm:text-xl lg:text-2xl tracking-wider font-sans leading-none">
                    04
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00A3E0]" />
                  </div>
                </div>
                {/* Book 4 Container */}
                <div className="relative z-10 mb-1.5 flex justify-center items-end w-full px-2">
                  <Image
                    src="/hero-book-4.png"
                    alt="Book 4 - Mrs. Endurance by Lizar James-Momes"
                    width={240}
                    height={390}
                    className="w-[88%] max-w-[210px] h-auto object-contain drop-shadow-[0_12px_22px_rgba(0,30,60,0.18)] transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </div>
              {/* 3D Glass Pedestal Stand 04 holding Shelf 04 */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: "68.0%",
                  top: "74.5%",
                  width: "25.0%",
                  height: "9.5%",
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
                className="absolute z-40 inline-flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-1.5 sm:py-3 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200/80 shadow-[0_10px_30px_rgba(0,163,224,0.18)]"
                style={{
                  bottom: "2.0%",
                  right: "1.0%",
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#00A3E0] shrink-0" />
                <span className="text-[10px] sm:text-sm font-bold text-slate-700 whitespace-nowrap">
                  Trusted by Authors.
                </span>
                <span className="w-px h-3 sm:h-3.5 bg-slate-300 shrink-0" />
                <span className="text-[10px] sm:text-sm text-slate-600 font-medium whitespace-nowrap">
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
