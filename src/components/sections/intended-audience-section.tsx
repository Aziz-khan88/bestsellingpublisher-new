"use client";

import * as React from "react";
import { ArrowRight, Phone } from "lucide-react";

export function IntendedAudienceSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#ffffff] via-[#f8fbfe] to-[#edf6fc] text-[#0f172a] pt-14 sm:pt-18 lg:pt-22 pb-20 sm:pb-24 lg:pb-28 overflow-hidden border-b border-slate-200/60 font-sans">

      {/* =========================================================================
          KEYFRAME STYLES: Flowing Contour Waves, Rotating Orbits, Ringing Phone
         ========================================================================= */}
      <style>{`
        @keyframes waveContourFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120; }
        }

        @keyframes waveFloatSlow {
          0%, 100% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-7px) scaleY(1.02); }
        }

        @keyframes trajectoryFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -32; }
        }

        @keyframes badgeOrbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes phoneRing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
        }
      `}</style>

      {/* =========================================================================
          BACKGROUND ARTWORK:
          Fine flowing wave contour lines on bottom-left and right side
         ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        style={{ animation: "waveFloatSlow 8s ease-in-out infinite" }}
      >
        <svg
          viewBox="0 0 1440 650"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="intendedWaveGradLeft" x1="0%" y1="100%" x2="50%" y2="50%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#7dd3fc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="intendedWaveGradRight" x1="50%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0" />
              <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00A3E0" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {/* Left Flowing Curves (Fanning out from bottom-left corner) */}
          {[
            { d: "M -60 650 C 120 540 280 580 440 500 C 600 420 720 480 880 430", w: 1.5, o: 0.85, delay: 0 },
            { d: "M -60 620 C 120 510 280 550 440 470 C 600 390 720 450 880 400", w: 1.3, o: 0.75, delay: 0.4 },
            { d: "M -60 590 C 120 480 280 520 440 440 C 600 360 720 420 880 370", w: 1.2, o: 0.65, delay: 0.8 },
            { d: "M -60 560 C 120 450 280 490 440 410 C 600 330 720 390 880 340", w: 1.1, o: 0.55, delay: 1.2 },
            { d: "M -60 530 C 120 420 280 460 440 380 C 600 300 720 360 880 310", w: 1.0, o: 0.45, delay: 1.6 },
            { d: "M -60 500 C 120 390 280 430 440 350 C 600 270 720 330 880 280", w: 0.9, o: 0.35, delay: 2.0 },
          ].map((line, i) => (
            <path
              key={`left-${i}`}
              d={line.d}
              stroke="url(#intendedWaveGradLeft)"
              strokeWidth={line.w}
              strokeOpacity={line.o}
              fill="none"
              strokeDasharray="1400"
              style={{
                animation: `waveContourFlow 16s linear infinite`,
                animationDelay: `-${line.delay}s`,
              }}
            />
          ))}

          {/* Right Flowing Curves (Sweeping up along the right edge) */}
          {[
            { d: "M 600 650 C 820 580 1020 620 1200 480 C 1340 360 1420 220 1480 80", w: 1.5, o: 0.85, delay: 0 },
            { d: "M 640 650 C 860 550 1060 590 1240 450 C 1370 330 1450 190 1500 50", w: 1.3, o: 0.75, delay: 0.5 },
            { d: "M 680 650 C 900 520 1100 560 1280 420 C 1400 300 1470 160 1520 20", w: 1.2, o: 0.65, delay: 1.0 },
            { d: "M 720 650 C 940 490 1140 530 1320 390 C 1430 270 1490 130 1540 -10", w: 1.0, o: 0.5, delay: 1.5 },
          ].map((line, i) => (
            <path
              key={`right-${i}`}
              d={line.d}
              stroke="url(#intendedWaveGradRight)"
              strokeWidth={line.w}
              strokeOpacity={line.o}
              fill="none"
              strokeDasharray="1400"
              style={{
                animation: `waveContourFlow 18s linear infinite`,
                animationDelay: `-${line.delay}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* =========================================================================
          FOREGROUND CONTENT: Header + 3 Process Cards (01, 02, 03) + CTAs
         ========================================================================= */}
      <div className="relative z-10 w-[94%] sm:w-[95%] max-w-[1380px] mx-auto px-4 sm:px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-3">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.2em] text-[#00A3E0] uppercase">
              PREPARE. ORGANIZE. PUBLISH.
            </span>
          </div>

          {/* Headline (Editorial Serif font matching Playfair Display) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-serif font-normal text-[#0c182a] leading-[1.18] tracking-tight">
            Prepare Your Work for Its Intended
            <br />
            <span className="text-[#00A3E0] relative inline-block">
              Audience and Channels
              {/* Cyan Underline Stroke */}
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-[3px] bg-[#00A3E0] rounded-full" />
            </span>
          </h2>

          {/* Narrative Paragraph */}
          <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto mt-6">
            We organize the selected publishing deliverables around your manuscript, intended audience, release formats, and author review checkpoints.
          </p>
        </div>

        {/* =========================================================================
            3 PROCESS STEP CARDS WITH ENLARGED PROMINENT ICONS (82% Card Height)
           ========================================================================= */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          
          {/* Animated Connecting Trajectory Line across the 3 cards (Desktop) */}
          <div className="hidden lg:block absolute top-[44%] -translate-y-[50%] left-0 right-0 w-full pointer-events-none z-0">
            <svg
              viewBox="0 0 1340 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Dashed Trajectory Curve */}
              <path
                d="M 10 75 Q 45 25 90 35 Q 150 55 240 100 Q 380 140 480 75 Q 525 25 570 35 Q 630 55 720 100 Q 860 140 960 75 Q 1005 25 1050 35 Q 1110 65 1200 80 L 1320 80"
                stroke="#00A3E0"
                strokeWidth="1.8"
                strokeDasharray="5 5"
                style={{ animation: "trajectoryFlow 2.5s linear infinite" }}
              />

              {/* Waypoint Cyan Dots & Diamonds */}
              <circle cx="20" cy="75" r="3.5" fill="#00A3E0" />
              <polygon points="90,31 94,35 90,39 86,35" fill="#00A3E0" />
              <polygon points="340,118 344,122 340,126 336,122" fill="#00A3E0" />
              <polygon points="570,31 574,35 570,39 566,35" fill="#00A3E0" />
              <polygon points="820,118 824,122 820,126 816,122" fill="#00A3E0" />
              <polygon points="1050,31 1054,35 1050,39 1046,35" fill="#00A3E0" />

              {/* Terminal Right Arrowhead */}
              <polygon points="1320,75 1335,80 1320,85" fill="#00A3E0" />
            </svg>
          </div>

          {/* Cards Grid: 3 Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 sm:gap-16 lg:gap-8 xl:gap-12 relative z-10">

            {/* CARD 01: Publishing Project Coordination */}
            <div className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_48px_rgba(0,163,224,0.2)] hover:-translate-y-1.5 transition-all duration-300 pt-7 sm:pt-8 pb-7 sm:pb-8 pr-6 sm:pr-8 pl-22 sm:pl-26 lg:pl-24 xl:pl-28 flex flex-col justify-center min-h-[175px] sm:min-h-[190px] group cursor-pointer">
              
              {/* ENLARGED Circular Icon Badge (82% of card height, centered on left edge) */}
              <div className="absolute left-0 top-[44%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                
                {/* Outer Dashed Rotating Orbit Ring */}
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-34 lg:h-34 rounded-full border border-dashed border-[#00A3E0]/70 flex items-center justify-center pointer-events-none"
                  style={{ animation: "badgeOrbitSpin 32s linear infinite" }}
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                </div>

                {/* White Raised Circular Plate */}
                <div className="absolute z-10 w-24 h-24 sm:w-27 sm:h-27 lg:w-29 lg:h-29 rounded-full bg-white p-2 shadow-[0_10px_30px_rgba(0,163,224,0.32)] border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {/* Inner Vibrant Cyan Disc */}
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#008de4] to-[#00A3E0] flex items-center justify-center shadow-inner text-white">
                    {/* ENLARGED 3 Users Icon */}
                    <svg viewBox="0 0 32 32" fill="none" className="w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      {/* Center User */}
                      <circle cx="16" cy="11" r="4" />
                      <path d="M9.5 24.5c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
                      {/* Left User */}
                      <circle cx="7.5" cy="13.5" r="2.8" />
                      <path d="M2.5 24.5c0-2.8 2.2-5 5-5" />
                      {/* Right User */}
                      <circle cx="24.5" cy="13.5" r="2.8" />
                      <path d="M24.5 19.5c2.8 0 5 2.2 5 5" />
                    </svg>
                  </div>
                </div>

                {/* ENLARGED Number Badge: 01 */}
                <div className="absolute -bottom-1 -right-1 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#00A3E0] text-[#00A3E0] font-bold text-[14px] sm:text-[15px] flex items-center justify-center shadow-md">
                  01
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-[17px] sm:text-[18px] lg:text-[18.5px] font-bold text-[#0f172a] group-hover:text-[#0080ff] transition-colors leading-snug mb-2.5">
                Publishing Project Coordination
              </h3>
              <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-slate-600 leading-[1.55]">
                We coordinate the editing, design, formatting, metadata, publishing setup, and review checkpoints included in the approved project scope.
              </p>
            </div>

            {/* CARD 02: Assigned Project Roles */}
            <div className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_48px_rgba(0,163,224,0.2)] hover:-translate-y-1.5 transition-all duration-300 pt-7 sm:pt-8 pb-7 sm:pb-8 pr-6 sm:pr-8 pl-22 sm:pl-26 lg:pl-24 xl:pl-28 flex flex-col justify-center min-h-[175px] sm:min-h-[190px] group cursor-pointer">
              
              {/* ENLARGED Circular Icon Badge (82% of card height, centered on left edge) */}
              <div className="absolute left-0 top-[44%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                
                {/* Outer Dashed Rotating Orbit Ring */}
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-34 lg:h-34 rounded-full border border-dashed border-[#00A3E0]/70 flex items-center justify-center pointer-events-none"
                  style={{ animation: "badgeOrbitSpin 32s linear infinite" }}
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                </div>

                {/* White Raised Circular Plate */}
                <div className="absolute z-10 w-24 h-24 sm:w-27 sm:h-27 lg:w-29 lg:h-29 rounded-full bg-white p-2 shadow-[0_10px_30px_rgba(0,163,224,0.32)] border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {/* Inner Vibrant Cyan Disc */}
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#008de4] to-[#00A3E0] flex items-center justify-center shadow-inner text-white">
                    {/* ENLARGED User with Star Icon */}
                    <svg viewBox="0 0 32 32" fill="none" className="w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="15" cy="11" r="5" />
                      <path d="M6.5 26c0-4.8 3.8-8.5 8.5-8.5s8.5 3.7 8.5 8.5" />
                      {/* Star Badge at bottom-right */}
                      <polygon points="23,17 24.5,20.2 28,20.7 25.5,23.2 26,26.8 23,25.1 20,26.8 20.5,23.2 18,20.7 21.5,20.2" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                </div>

                {/* ENLARGED Number Badge: 02 */}
                <div className="absolute -bottom-1 -right-1 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#00A3E0] text-[#00A3E0] font-bold text-[14px] sm:text-[15px] flex items-center justify-center shadow-md">
                  02
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-[17px] sm:text-[18px] lg:text-[18.5px] font-bold text-[#0f172a] group-hover:text-[#0080ff] transition-colors leading-snug mb-2.5">
                Assigned Project Roles
              </h3>
              <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-slate-600 leading-[1.55]">
                The project plan identifies the roles responsible for each deliverable and the author approvals required before final release.
              </p>
            </div>

            {/* CARD 03: Defined Scope and Quote */}
            <div className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_48px_rgba(0,163,224,0.2)] hover:-translate-y-1.5 transition-all duration-300 pt-7 sm:pt-8 pb-7 sm:pb-8 pr-6 sm:pr-8 pl-22 sm:pl-26 lg:pl-24 xl:pl-28 flex flex-col justify-center min-h-[175px] sm:min-h-[190px] group cursor-pointer">
              
              {/* ENLARGED Circular Icon Badge (82% of card height, centered on left edge) */}
              <div className="absolute left-0 top-[44%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                
                {/* Outer Dashed Rotating Orbit Ring */}
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-34 lg:h-34 rounded-full border border-dashed border-[#00A3E0]/70 flex items-center justify-center pointer-events-none"
                  style={{ animation: "badgeOrbitSpin 32s linear infinite" }}
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                </div>

                {/* White Raised Circular Plate */}
                <div className="absolute z-10 w-24 h-24 sm:w-27 sm:h-27 lg:w-29 lg:h-29 rounded-full bg-white p-2 shadow-[0_10px_30px_rgba(0,163,224,0.32)] border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {/* Inner Vibrant Cyan Disc */}
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#008de4] to-[#00A3E0] flex items-center justify-center shadow-inner text-white">
                    {/* ENLARGED Document with Checkmark Icon */}
                    <svg viewBox="0 0 32 32" fill="none" className="w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 5a2 2 0 0 1 2-2h10l6 6v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5z" />
                      <line x1="11" y1="12" x2="16" y2="12" strokeWidth="2.2" />
                      <line x1="11" y1="16" x2="19" y2="16" strokeWidth="2.2" />
                      <line x1="11" y1="20" x2="15" y2="20" strokeWidth="2.2" />
                      {/* Checkmark Circle */}
                      <circle cx="21.5" cy="21.5" r="5" fill="#00A3E0" stroke="white" strokeWidth="2.2" />
                      <path d="M19.5 21.5l1.5 1.5 3-3" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* ENLARGED Number Badge: 03 */}
                <div className="absolute -bottom-1 -right-1 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#00A3E0] text-[#00A3E0] font-bold text-[14px] sm:text-[15px] flex items-center justify-center shadow-md">
                  03
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-[17px] sm:text-[18px] lg:text-[18.5px] font-bold text-[#0f172a] group-hover:text-[#0080ff] transition-colors leading-snug mb-2.5">
                Defined Scope and Quote
              </h3>
              <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-slate-600 leading-[1.55]">
                Services can be combined into a project-specific scope. Deliverables, revision rounds, schedule, and pricing are confirmed in the approved order.
              </p>
            </div>

          </div>
        </div>

        {/* =========================================================================
            CTA BUTTONS: Centered below the 3 Cards
           ========================================================================= */}
        <div className="mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Button 1: Connect with Us! */}
          <button
            type="button"
            className="h-[46px] sm:h-[48px] px-8 rounded-lg bg-[#009fe3] hover:bg-[#008ac5] text-white font-semibold text-[14.5px] sm:text-[15px] flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(0,159,227,0.32)] hover:shadow-[0_8px_24px_rgba(0,159,227,0.42)] transition-all duration-300 group active:scale-95 cursor-pointer"
          >
            <span>Connect with Us!</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* Button 2: Call us NOW! (Phone Icon on the Left, matching reference) */}
          <button
            type="button"
            className="h-[46px] sm:h-[48px] px-7 sm:px-8 rounded-lg bg-white border-[1.5px] border-[#00A3E0] hover:bg-[#00A3E0]/5 text-[#00A3E0] font-semibold text-[14.5px] sm:text-[15px] flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-300 group active:scale-95 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#00A3E0] group-hover:[animation:phoneRing_0.6s_ease-in-out_infinite]" />
            <span>Call us NOW!</span>
          </button>
        </div>

      </div>
    </section>
  );
}
