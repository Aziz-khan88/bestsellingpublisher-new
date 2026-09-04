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
      `}</style>

      {/* Top Wave Arch bridging from the Dark Navbar */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 lg:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1600,0 L1600,10 C1100,55 500,55 0,10 Z"
            fill="#04060f"
          />
        </svg>
      </div>

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

        {/* 2-Column Main Layout: Left Pitch & Right Exact 3D Glass Shelves */}
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

          {/* Right Column (7 cols on lg): Exact 3D Glass Pedestals & Shelves from User Design */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Ambient Cyan Glow behind shelves */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-[#00A3E0]/15 blur-3xl pointer-events-none -z-10" />

            {/* Exact 3D Glass Shelves Artwork with Floating Animation */}
            <div className="relative w-full max-w-[720px] animate-float-shelves transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/exact_shelves_uhd.png"
                alt="Plan Your Publishing Project - 3D Glass Shelves and Books"
                width={770}
                height={630}
                className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(0,163,224,0.18)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Transition bridging seamlessly into the Dark Amazon Services Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-10 sm:h-16 lg:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L1600,120 L1600,20 C1100,90 600,10 0,60 Z"
            fill="#010713"
          />
        </svg>
      </div>
    </section>
  );
}
