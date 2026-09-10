"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Phone, MessageSquare, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { openConsultationModal } from "@/components/v2/v2-consultation-modal";

// 4 Feature Items with 100% Vector Crisp SVGs matching live site
const RIBBON_FEATURES = [
  {
    title: "Defined Scope",
    subtitle: "with Measurable Steps",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#00A3E0]">
        <path d="M18 4l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4L18 4z" fill="#00A3E0" />
        <path d="M10 8l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3L10 8z" fill="#00A3E0" />
        <path d="M26 8l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3L26 8z" fill="#00A3E0" />
        <circle cx="18" cy="19.5" r="3.2" stroke="#00A3E0" strokeWidth="1.8" />
        <path d="M13.2 29.5c0-2.8 2.1-4.8 4.8-4.8s4.8 2 4.8 4.8" stroke="#00A3E0" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="11.5" cy="21.5" r="2.5" stroke="#00A3E0" strokeWidth="1.6" />
        <path d="M7.8 30.5c0-2 1.6-3.5 3.7-3.5" stroke="#00A3E0" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="24.5" cy="21.5" r="2.5" stroke="#00A3E0" strokeWidth="1.6" />
        <path d="M24.5 27c2.1 0 3.7 1.5 3.7 3.5" stroke="#00A3E0" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Publishing Support for",
    subtitle: "Authors Worldwide",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#00A3E0]">
        <circle cx="18" cy="18" r="12" stroke="#00A3E0" strokeWidth="1.8" />
        <ellipse cx="18" cy="18" rx="5.2" ry="12" stroke="#00A3E0" strokeWidth="1.6" />
        <line x1="6" y1="18" x2="30" y2="18" stroke="#00A3E0" strokeWidth="1.6" />
        <path d="M8.5 12c2.8-1 6.2-1.5 9.5-1.5s6.7.5 9.5 1.5" stroke="#00A3E0" strokeWidth="1.5" />
        <path d="M8.5 24c2.8 1 6.2 1.5 9.5 1.5s6.7-.5 9.5-1.5" stroke="#00A3E0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Flexible Service",
    subtitle: "Custom Package Options",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#00A3E0]">
        <rect x="7.5" y="6.5" width="21" height="23" rx="2.5" stroke="#00A3E0" strokeWidth="1.8" />
        <path d="M22.5 6.5v8.5l-2.5-2-2.5 2V6.5" fill="#00A3E0" fillOpacity="0.25" stroke="#00A3E0" strokeWidth="1.6" strokeLinejoin="round" />
        <line x1="12" y1="14" x2="14.5" y2="14" stroke="#00A3E0" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 21.5h6m-6 0l2-2m-2 2l2 2" stroke="#00A3E0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "100% Royalties & Ownership",
    subtitle: "Kept 100% By The Author",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#00A3E0]">
        <path
          d="M18 5.5l2.2 1.8 2.8-.4 1.4 2.5 2.8.7.5 2.8 2 2.2-1 2.7.8 2.8-2.2 2-.5 2.8-2.8.7-1.4 2.5-2.8-.4L18 29.5l-2.2-1.8-2.8.4-1.4-2.5-2.8-.7-.5-2.8-2-2.2 1-2.7-.8-2.8 2.2-2 .5-2.8 2.8-.7 1.4-2.5 2.8.4L18 5.5z"
          stroke="#00A3E0"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M18 19.5l-.8-.7c-2.6-2.3-4.2-3.7-4.2-5.2 0-1.3 1-2.3 2.3-2.3.8 0 1.6.4 2 .9.4-.5 1.2-.9 2-.9 1.3 0 2.3 1 2.3 2.3 0 1.5-1.6 2.9-4.2 5.2l-.7.7z"
          fill="#00A3E0"
        />
      </svg>
    ),
  },
];

export function V2MidpageCtaSection() {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [stage, setStage] = React.useState("Complete Manuscript");
  const [quickSubmitted, setQuickSubmitted] = React.useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSubmitted(true);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#EFF7FD] via-[#FFFFFF] to-[#F7FAFD] text-slate-800 py-16 sm:py-24 overflow-hidden font-sans border-t border-b border-slate-200/80">
      {/* Keyframe styles for planetary orbit animations */}
      <style>{`
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Ambient background glow accents (Light Theme) */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-cyan-200/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />

      {/* Panoramic container matching V2 standard */}
      <div className="relative z-10 w-[97%] max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* MAIN ROW: Circular Portrait + Headline & Quick Form       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT: Iconic Circular Author Portrait with Planetary Orbit (Light Theme) */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <div className="relative w-[280px] xs:w-[330px] sm:w-[420px] lg:w-[450px] xl:w-[480px] h-[280px] xs:h-[330px] sm:h-[420px] lg:h-[450px] xl:h-[480px] flex items-center justify-center select-none">
              
              {/* Outer Rotating Cyan Orbit Ring */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-400/40 pointer-events-none"
                style={{ animation: "orbitRotate 35s linear infinite" }}
              >
                <span className="absolute -top-[5px] left-[50%] -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A3E0] shadow-[0_0_10px_rgba(0,163,224,0.6)]" />
                <span className="absolute bottom-[24%] left-[4%] w-3.5 h-3.5 rounded-full bg-[#0080ff] shadow-[0_0_12px_rgba(0,128,255,0.5)]" />
                <span className="absolute bottom-[14%] left-[9%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                <span className="absolute top-[28%] right-[4%] w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>

              {/* Secondary Inner Dashed Accent Ring */}
              <div
                className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-cyan-300/50 pointer-events-none"
                style={{ animation: "orbitCounter 45s linear infinite" }}
              >
                <span className="absolute top-1/2 -right-[4px] w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_rgba(0,163,224,0.6)]" />
              </div>

              {/* Circular Container with Pure White Disc & Soft Shadow */}
              <div className="relative z-10 w-[220px] xs:w-[260px] sm:w-[350px] lg:w-[370px] xl:w-[400px] h-[220px] xs:h-[260px] sm:h-[350px] lg:h-[370px] xl:h-[400px] rounded-full p-[4px] overflow-hidden shadow-[0_20px_55px_rgba(0,163,224,0.2)] bg-white border-2 border-cyan-200">
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-inner">
                  <Image
                    src="/author-photo-masked.png"
                    alt="Published Author"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating 3D Book Icon Badge */}
              <div
                className="absolute right-2 sm:right-6 bottom-4 sm:bottom-8 z-30 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#0070ea] to-[#00A3E0] border-4 border-white shadow-[0_12px_28px_rgba(0,163,224,0.45)] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
                style={{ animation: "floatSlow 4s ease-in-out infinite" }}
                onClick={() => openConsultationModal()}
                title="Book Consultation"
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
          </div>

          {/* RIGHT: Headline + Value Proposition + Inline Lead Capture */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>Would you like to know a secret?</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-serif font-bold text-[#0B1B36] leading-[1.18] tracking-tight">
                Less Is Never More for Us –{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3E0] via-[#0284C7] to-cyan-600 font-serif">
                  It Can Be If You Want It to Be!
                </span>
              </h2>

              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Choose the exact editorial, custom cover design, formatting, metadata, and launch-support deliverables your manuscript demands. 100% royalties and rights stay with you.
              </p>
            </div>

            {/* ====================================================== */}
            {/* MID-PAGE QUICK CONSULTATION FORM (LIGHT THEME)         */}
            {/* ====================================================== */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-cyan-200/90 shadow-[0_15px_45px_rgba(0,163,224,0.12)] backdrop-blur-md ring-2 ring-cyan-500/10">
              {quickSubmitted ? (
                <div className="flex items-center gap-4 py-3 text-left">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B1B36]">Project Scope Initiated!</h4>
                    <p className="text-xs text-slate-600">
                      Thanks, <span className="text-[#00A3E0] font-bold">{name}</span>. A senior publishing director is reviewing your requirements and will reach out shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm font-bold text-[#0B1B36] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-ping" />
                      <span>Request Instant Publishing Scope & Cost Breakdown</span>
                    </p>
                    <span className="text-[11px] text-slate-500 hidden sm:inline font-medium">
                      ⚡ Response within 2 hours
                    </span>
                  </div>

                  {/* 3 Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#00A3E0] focus:bg-white transition-all shadow-sm"
                    />

                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Email or Phone *"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#00A3E0] focus:bg-white transition-all shadow-sm"
                    />

                    <select
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#00A3E0] focus:bg-white transition-all cursor-pointer shadow-sm"
                    >
                      <option value="Complete Manuscript">Complete Manuscript</option>
                      <option value="Work in Progress">Work in Progress</option>
                      <option value="Idea / Outline Stage">Idea / Outline Stage</option>
                      <option value="Needs Ghostwriting">Needs Ghostwriting</option>
                    </select>
                  </div>

                  {/* Submit & Action Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#00A3E0] hover:bg-[#008cc2] text-white font-bold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,163,224,0.35)] hover:shadow-[0_6px_20px_rgba(0,163,224,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Claim Free Scope & Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>100% Royalties Guaranteed</span>
                      </span>
                      <span className="text-slate-300">•</span>
                      <span>No Obligation</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Connect Buttons (Call & Modal Trigger) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => openConsultationModal()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#00A3E0] hover:text-[#008cc2] border border-cyan-300 hover:border-cyan-400 font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#00A3E0]" />
                <span>Open Detailed Project Scope Drawer</span>
              </button>

              <a
                href="tel:+18556666675"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1B36] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#00E5FF]" />
                <span>Call Us NOW: (855) 666-6675</span>
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM: 4-POINT TRUST RIBBON TICKER (LIGHT THEME)        */}
        {/* ======================================================== */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {RIBBON_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-cyan-400/60 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200/80 group-hover:scale-105 transition-transform shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold text-[#0B1B36] group-hover:text-[#00A3E0] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
