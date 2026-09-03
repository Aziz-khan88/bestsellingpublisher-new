"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

// 10 Package Service Items with Circular Cyan Outlines and Crisp SVGs (matching reference exactly)
const packageItems = [
  {
    title: "Idea research and analysis",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <circle cx="16" cy="14" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M13 21h6m-5 2.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 6V3.5M8.5 9L6 6.5M23.5 9L26 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16" cy="14" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Proofreading review for grammar and consistency",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <rect x="7" y="5" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 11l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="11" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="11" y1="22" x2="17" y2="22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Book cover design and illustration",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <rect x="6" y="5" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 18l6-6 3 3-6 6h-3v-3z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Traditional and self-publishing",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <rect x="5" y="7" width="10" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="7" width="10" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="8" y1="12" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Video Book Trailers",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <rect x="5" y="8" width="15" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <polygon points="20,13 27,8 27,24 20,19" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
        <polygon points="10,12 10,20 16,16" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Manuscript drafting",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <rect x="7" y="5" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <line x1="11" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="11" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="11" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Editorial review notes",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <path d="M6 6h15v20H6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 11l6-6 3 3-6 6h-3v-3z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <line x1="9" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="9" y1="19" x2="18" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Preparing text for publication",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <rect x="7" y="6" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 19V11m0 0l-3.5 3.5M16 11l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="11" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Selected distribution platforms",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="23" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="23" r="3" stroke="currentColor" strokeWidth="1.8" />
        <line x1="11.5" y1="10.5" x2="20.5" y2="10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="10.5" y1="11.5" x2="14.5" y2="20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="21.5" y1="11.5" x2="17.5" y2="20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Branding and marketing",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors">
        <path d="M6 14v4h3l6 4V10L9 14H6z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
        <path d="M19 12c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M22 9c2.5 1.8 4 4.2 4 7s-1.5 5.2-4 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function AmazonPublishingWorkflowSection() {
  return (
    <section className="relative w-full bg-[#f8fbfe] text-[#0f172a] py-12 lg:py-16 xl:py-20 overflow-hidden font-sans border-t border-slate-200/80">
      
      {/* Keyframe Styles */}
      <style>{`
        @keyframes phoneRing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
        }

        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.02); }
        }
      `}</style>

      {/* =========================================================================
          BACKGROUND ARTWORK: Authentic Full-Canvas Composition (100% matching user image)
          - Bottom organic waves flowing all the way across
          - Diagonal cut Amazon Publishing bookstore
          - Fine topographical contour lines
          - Circular blue book badge
          - Dot matrix patterns
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/amazon-publishing-exact-backdrop.png"
          alt="Amazon Publishing Background Flow with Bookstore & Waves"
          fill
          priority
          className="object-cover object-center lg:object-right"
        />
      </div>

      {/* Interactive hover zone over the Circular Book Badge */}
      <div
        className="hidden lg:block absolute right-[4%] xl:right-[6%] bottom-[8%] xl:bottom-[10%] w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 z-10 cursor-pointer pointer-events-auto rounded-full"
        style={{ animation: "badgeFloat 4.5s ease-in-out infinite" }}
        title="Amazon Publishing Verified Badge"
      />

      {/* =========================================================================
          FOREGROUND CONTENT: Workflow Header + 10 Package Cards (5x2) + CTA Buttons
         ========================================================================= */}
      <div className="relative z-10 w-[94%] sm:w-[95%] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[620px] sm:max-w-[660px] xl:max-w-[700px]">
          
          {/* Eyebrow Header */}
          <div className="mb-2 select-none">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-widest text-[#00A3E0] uppercase">
              A DOCUMENTED PUBLISHING WORKFLOW
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#0f172a] leading-[1.12] tracking-tight">
            Prepare Your Book for
            <br />
            <span className="text-[#00A3E0]">Amazon Publishing</span>
          </h2>

          {/* Body Narrative */}
          <p className="text-[14px] sm:text-[14.5px] text-slate-600 leading-relaxed max-w-xl mt-3">
            Our Amazon publishing support can include editing coordination, cover and interior preparation, metadata review, KDP setup guidance, and an author-approved release checklist.
          </p>

          {/* Cyan Pill Badge: "Our Package Include" */}
          <div className="mt-4 mb-4 inline-block">
            <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#00A3E0] text-white text-[12.5px] sm:text-[13px] font-semibold tracking-wide shadow-[0_4px_14px_rgba(0,163,224,0.35)] select-none">
              Our Package Include
            </span>
          </div>

          {/* 10 Package Service Cards: Exact 5 Columns x 2 Rows Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 max-w-[620px] xl:max-w-[670px]">
            {packageItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center border border-slate-100 shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_22px_rgba(0,163,224,0.18)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer justify-between min-h-[106px] sm:min-h-[114px]"
              >
                {/* Cyan Outline Circular Icon Badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#00A3E0] bg-[#f0f9ff]/40 flex items-center justify-center mb-1.5 group-hover:scale-110 group-hover:bg-[#00A3E0] transition-all duration-300 shrink-0 shadow-sm">
                  {item.icon}
                </div>

                {/* Title */}
                <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#0f172a] group-hover:text-[#0080ff] transition-colors leading-[1.25] text-center line-clamp-3">
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
              className="h-[44px] sm:h-[46px] px-6 sm:px-7 rounded-lg bg-gradient-to-r from-[#0080ff] to-[#00A3E0] hover:from-[#0070ea] hover:to-[#0092db] text-white font-semibold text-[14px] sm:text-[14.5px] flex items-center justify-center gap-2.5 shadow-[0_6px_18px_rgba(0,128,255,0.32)] hover:shadow-[0_8px_24px_rgba(0,163,224,0.42)] transition-all duration-300 group active:scale-95 cursor-pointer"
            >
              <span>Connect with Us!</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Button 2: Call us NOW! (Phone Icon on the Right, matching reference) */}
            <button
              type="button"
              className="h-[44px] sm:h-[46px] px-5 sm:px-6 rounded-lg bg-white border-[1.5px] border-[#00A3E0] hover:bg-[#00A3E0]/5 text-[#00A3E0] font-semibold text-[14px] sm:text-[14.5px] flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-300 group active:scale-95 cursor-pointer"
            >
              <span>Call us NOW!</span>
              <Phone className="w-4 h-4 text-[#00A3E0] group-hover:[animation:phoneRing_0.6s_ease-in-out_infinite]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
