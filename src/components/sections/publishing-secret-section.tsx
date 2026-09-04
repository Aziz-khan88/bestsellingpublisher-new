"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone, BookOpen } from "lucide-react";

// Dotted Matrix Grid with Staggered Twinkling Animation
function DotGrid({
  cols = 8,
  rows = 6,
  className = "",
}: {
  cols?: number;
  rows?: number;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-3.5 sm:gap-4 select-none pointer-events-none ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const delay = ((i * 191 + 47) % 3200) / 1000;
        const duration = 2.4 + ((i * 67) % 1300) / 1000;
        return (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#9bc6ee] transition-all"
            style={{
              animation: `dotSparkle ${duration}s infinite ease-in-out`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

// 4 Feature Items with 100% Vector Crisp SVGs (zero image clipping or cut-offs)
const ribbonFeatures = [
  {
    title: "Defined Scope",
    subtitle: "with Measurable Steps",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#0080ff]">
        {/* 3 Stars on top */}
        <path d="M18 4l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4L18 4z" fill="#0080ff" />
        <path d="M10 8l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3L10 8z" fill="#0080ff" />
        <path d="M26 8l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3L26 8z" fill="#0080ff" />
        {/* Center User */}
        <circle cx="18" cy="19.5" r="3.2" stroke="#0080ff" strokeWidth="1.8" />
        <path d="M13.2 29.5c0-2.8 2.1-4.8 4.8-4.8s4.8 2 4.8 4.8" stroke="#0080ff" strokeWidth="1.8" strokeLinecap="round" />
        {/* Left User */}
        <circle cx="11.5" cy="21.5" r="2.5" stroke="#0080ff" strokeWidth="1.6" />
        <path d="M7.8 30.5c0-2 1.6-3.5 3.7-3.5" stroke="#0080ff" strokeWidth="1.6" strokeLinecap="round" />
        {/* Right User */}
        <circle cx="24.5" cy="21.5" r="2.5" stroke="#0080ff" strokeWidth="1.6" />
        <path d="M24.5 27c2.1 0 3.7 1.5 3.7 3.5" stroke="#0080ff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Publishing Support for",
    subtitle: "Authors Worldwide",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#0080ff]">
        <circle cx="18" cy="18" r="12" stroke="#0080ff" strokeWidth="1.8" />
        <ellipse cx="18" cy="18" rx="5.2" ry="12" stroke="#0080ff" strokeWidth="1.6" />
        <line x1="6" y1="18" x2="30" y2="18" stroke="#0080ff" strokeWidth="1.6" />
        <path d="M8.5 12c2.8-1 6.2-1.5 9.5-1.5s6.7.5 9.5 1.5" stroke="#0080ff" strokeWidth="1.5" />
        <path d="M8.5 24c2.8 1 6.2 1.5 9.5 1.5s6.7-.5 9.5-1.5" stroke="#0080ff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Flexible Service",
    subtitle: "Options",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#0080ff]">
        <rect x="7.5" y="6.5" width="21" height="23" rx="2.5" stroke="#0080ff" strokeWidth="1.8" />
        <path d="M22.5 6.5v8.5l-2.5-2-2.5 2V6.5" fill="#0080ff" fillOpacity="0.25" stroke="#0080ff" strokeWidth="1.6" strokeLinejoin="round" />
        <line x1="12" y1="14" x2="14.5" y2="14" stroke="#0080ff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 21.5h6m-6 0l2-2m-2 2l2 2" stroke="#0080ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ownership and Royalties",
    subtitle: "Return to the Rightful Owner",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#0080ff]">
        <path
          d="M18 5.5l2.2 1.8 2.8-.4 1.4 2.5 2.8.7.5 2.8 2 2.2-1 2.7.8 2.8-2.2 2-.5 2.8-2.8.7-1.4 2.5-2.8-.4L18 29.5l-2.2-1.8-2.8.4-1.4-2.5-2.8-.7-.5-2.8-2-2.2 1-2.7-.8-2.8 2.2-2 .5-2.8 2.8-.7 1.4-2.5 2.8.4L18 5.5z"
          stroke="#0080ff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M18 19.5l-.8-.7c-2.6-2.3-4.2-3.7-4.2-5.2 0-1.3 1-2.3 2.3-2.3.8 0 1.6.4 2 .9.4-.5 1.2-.9 2-.9 1.3 0 2.3 1 2.3 2.3 0 1.5-1.6 2.9-4.2 5.2l-.7.7z"
          fill="#0080ff"
        />
        <path d="M13 28l-3.2 4.2 4.6-1.1" stroke="#0080ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 28l3.2 4.2-4.6-1.1" stroke="#0080ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function PublishingSecretSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#edf6fc] via-[#f7fbfe] to-[#edf6fd] text-[#0f172a] py-16 lg:py-24 overflow-hidden font-sans border-t border-slate-200/80">

      {/* Keyframes for animations */}
      <style>{`
        @keyframes dotSparkle {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
            filter: drop-shadow(0 0 0px transparent);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
            filter: drop-shadow(0 0 4px #00A3E0);
          }
        }

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

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes phoneRing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
        }
      `}</style>

      {/* Background Soft Organic Flowing Wave Lines */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-40">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path
            d="M-100 280C200 180 450 380 750 260C1050 140 1250 320 1550 220"
            stroke="#bae6fd"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          <path
            d="M-50 340C250 240 500 440 800 320C1100 200 1300 380 1600 280"
            stroke="#e0f2fe"
            strokeWidth="3"
          />
          <path
            d="M0 420C300 320 550 520 850 400C1150 280 1350 460 1650 360"
            stroke="#bae6fd"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Dotted Grid: Top Center/Right of Portrait */}
      <DotGrid cols={8} rows={6} className="absolute top-8 left-[34%] lg:left-[39%] z-0" />

      {/* Main Responsive Container */}
      <div className="relative z-10 w-[94%] sm:w-[95%] max-w-[1440px] mx-auto px-4">

        {/* TOP / MAIN ROW: Circular Portrait + Copy & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT COLUMN: Circular Author Portrait with Orbit, White Disc & Badge */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-start xl:pl-2">
            
            {/* Outer Concentric Orbit Ring Container (Enlarged) */}
            <div className="relative w-[380px] sm:w-[460px] lg:w-[490px] xl:w-[530px] h-[380px] sm:h-[460px] lg:h-[490px] xl:h-[530px] flex items-center justify-center select-none">
              
              {/* 1. Outermost Rotating Cyan Orbit Ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#38bdf8]/40 pointer-events-none"
                style={{ animation: "orbitRotate 35s linear infinite" }}
              >
                {/* Planetary Cyan & Blue Beads revolving along the orbit */}
                <span className="absolute -top-[4px] left-[50%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0]" />
                <span className="absolute bottom-[24%] left-[4%] w-3 h-3 rounded-full bg-[#0080ff] shadow-[0_0_10px_#0080ff]" />
                <span className="absolute bottom-[17%] left-[7.5%] w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
                <span className="absolute bottom-[11%] left-[12%] w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" />
                <span className="absolute top-[28%] right-[5%] w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
              </div>

              {/* 2. Secondary Inner Dashed Accent Ring (Rotating in Reverse) */}
              <div
                className="absolute inset-6 sm:inset-7 rounded-full border border-dashed border-[#7dd3fc]/35 pointer-events-none"
                style={{ animation: "orbitCounter 48s linear infinite" }}
              >
                <span className="absolute top-1/2 -right-[3px] w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
              </div>

              {/* 3. Middle Layer: Pure White Circular Disc with Animated Cyan Laser Rim */}
              <div className="relative z-10 w-[320px] sm:w-[390px] lg:w-[420px] xl:w-[455px] h-[320px] sm:h-[390px] lg:h-[420px] xl:h-[455px] rounded-full p-[2.5px] overflow-hidden shadow-[0_20px_55px_rgba(0,163,224,0.18)] bg-[#dbeafe]">
                
                {/* 360deg Rotating Laser Border Sweep */}
                <div
                  className="absolute -inset-[200%] animate-border-beam pointer-events-none"
                  style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 300deg, rgba(0, 163, 224, 0.45) 330deg, #00A3E0 350deg, #ffffff 358deg, transparent 360deg)`,
                  }}
                />

                {/* Inner White Disc Surface */}
                <div className="relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center p-4 sm:p-5 lg:p-5.5 border border-[#cbe5fb]">
                  
                  {/* Exact Author Circular Photo */}
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner group cursor-pointer">
                    <Image
                      src="/author-photo-masked.png"
                      alt="Author reading book"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* 4. Interactive Book Badge (Scaled up to match enlarged circle) */}
              <div
                className="absolute right-4 sm:right-6 lg:right-6 bottom-7 sm:bottom-9 lg:bottom-10 z-30 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-[#0070ea] to-[#00a3e0] border-4 border-white shadow-[0_12px_28px_rgba(0,163,224,0.5)] flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-300 group"
                style={{ animation: "floatSlow 4s ease-in-out infinite" }}
                title="Best Selling Publisher"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H12v18H6.5a2.5 2.5 0 0 0-2.5 2.5z" stroke="white" strokeWidth="1.8" fill="none" />
                  <path d="M12 20V2h5.5A2.5 2.5 0 0 1 20 4.5v15a2.5 2.5 0 0 0-2.5-2.5H12z" stroke="white" strokeWidth="1.8" fill="none" />
                  <line x1="6.5" y1="7" x2="9.5" y2="7" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="6.5" y1="11" x2="9.5" y2="11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="6.5" y1="15" x2="9.5" y2="15" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="14.5" y1="7" x2="17.5" y2="7" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="14.5" y1="11" x2="17.5" y2="11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="14.5" y1="15" x2="17.5" y2="15" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Eyebrow, Main Headline & CTA Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center pl-0 lg:pl-2 xl:pl-4">

            {/* Eyebrow Header */}
            <h4 className="text-[17px] sm:text-[19px] font-semibold text-[#009fe3] tracking-wide mb-3">
              Would you like to know a secret?
            </h4>

            {/* Main Headline (Editorial Serif Display) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-serif font-bold text-[#0f172a] leading-[1.18] tracking-tight mb-8">
              Less Is Never More for Us –
              <br />
              It Can Be If You Want It to <span className="text-[#00A3E0] font-serif">Be!</span>
            </h2>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">

              {/* Button 1: Connect with Us! */}
              <button
                type="button"
                className="h-[48px] px-8 rounded-lg bg-gradient-to-r from-[#0080ff] to-[#00a6f4] hover:from-[#0070ea] hover:to-[#0092db] text-white font-semibold text-[15px] flex items-center justify-center gap-2.5 shadow-[0_8px_22px_rgba(0,128,255,0.32)] hover:shadow-[0_10px_28px_rgba(0,163,224,0.45)] transition-all duration-300 group active:scale-95 cursor-pointer"
              >
                <span>Connect with Us!</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* Button 2: Call us NOW! */}
              <button
                type="button"
                className="h-[48px] px-7 rounded-lg bg-white border-[1.5px] border-[#0080ff] hover:bg-[#0080ff]/5 text-[#0080ff] font-semibold text-[15px] flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-300 group active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 group-hover:[animation:phoneRing_0.6s_ease-in-out_infinite]" />
                <span>Call us NOW!</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Floating White Feature Ribbon (Expanded Height & Crisp SVGs) */}
        <div className="mt-14 sm:mt-20 w-full max-w-[1380px] mx-auto bg-white/95 backdrop-blur-md rounded-[24px] sm:rounded-[28px] border border-slate-200/90 shadow-[0_16px_45px_rgba(0,163,224,0.1)] py-7 sm:py-8 lg:py-9 px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-0 items-center">
            {ribbonFeatures.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4.5 group cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  idx !== 0 ? "lg:border-l lg:border-slate-200/90 lg:pl-6 xl:pl-8" : "lg:pr-4"
                }`}
              >
                {/* Crisp Vector Icon Badge (100% Unclipped) */}
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-full border-[1.5px] border-[#38bdf8]/40 bg-[#f0f9ff] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-[#e0f2fe] group-hover:border-[#0080ff] transition-all duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="font-bold text-[15.5px] sm:text-[16.5px] text-[#0f172a] leading-snug group-hover:text-[#0080ff] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[13px] sm:text-[13.5px] text-slate-500 leading-tight mt-1">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
