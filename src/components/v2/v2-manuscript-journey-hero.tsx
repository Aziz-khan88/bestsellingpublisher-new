"use client";

import * as React from "react";
import { Play, X, Menu, ArrowUpRight, Sparkles, BookOpenCheck, ArrowRight } from "lucide-react";
import { openConsultationModal } from "@/components/v2/v2-consultation-modal";

interface V2ManuscriptJourneyHeroProps {
  hideNav?: boolean;
}

export function V2ManuscriptJourneyHero({ hideNav = true }: V2ManuscriptJourneyHeroProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = React.useState(false);

  // Set ambient background video playback rate to 0.75 for smooth cinematic motion
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoModalOpen(false);
        setIsMobileDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Control modal video playback
  React.useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0;
        modalVideoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = "";
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoModalOpen]);

  return (
    <section className="relative w-full min-h-screen px-6 sm:px-12 lg:px-16 py-12 sm:py-16 flex flex-col justify-between bg-[#FAF7F2] text-[#161514] font-sans overflow-hidden border-b border-[#EADFCF]">
      {/* Import Google Fonts directly for Instrument Serif Display */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .manuscript-serif {
          font-family: 'Instrument Serif', Georgia, serif;
        }

        .mj-cta:hover .mj-arrow {
          transform: translate(3px, -3px);
        }

        @keyframes mjCyanPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); box-shadow: 0 0 8px rgba(0,163,224,0.4); }
          50% { opacity: 1; transform: scale(1.15); box-shadow: 0 0 16px rgba(0,163,224,0.75); }
        }
        .mj-live-cyan-pulse {
          animation: mjCyanPulse 2.5s infinite ease-in-out;
        }
      `}</style>

      {/* ======================================================== */}
      {/* BACKGROUND VIDEO ARTWORK & GRADIENT OVERLAYS (LIGHT)     */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        {/* Background Video Artwork */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-90 transition-opacity duration-1000"
        >
          <source src="/manuscript_journey_publishing.mp4" type="video/mp4" />
          <source src="/process_of_book_publishing.mp4" type="video/mp4" />
        </video>

        {/* GRADIENT MASKING LAYERS (WARM CREAM PALETTE) */}
        {/* 1. Left Column Gradient: Seamless warm cream fade covering the left text column */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[62%] lg:w-[56%] xl:w-[50%] bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/98 via-[#FAF7F2]/80 to-transparent z-10 pointer-events-none" />

        {/* 2. Top Transition Gradient */}
        <div className="absolute top-0 inset-x-0 h-44 sm:h-52 lg:h-60 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/95 via-[#FAF7F2]/45 to-transparent z-10 pointer-events-none" />

        {/* 3. Bottom Transition Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-44 sm:h-52 lg:h-60 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/95 via-[#FAF7F2]/45 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Optional Top Navigation Bar if standalone */}
      {!hideNav && (
        <nav className="relative z-20 w-full max-w-[1850px] mx-auto flex items-center justify-between py-2" aria-label="Manuscript Journey Navigation">
          <a href="#manuscript-journey" className="flex items-center gap-1.5 text-2xl sm:text-[28px] font-extrabold tracking-tight text-[#161514] group">
            <span>Best Selling Publisher</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] inline-block shadow-[0_0_10px_rgba(0,163,224,0.5)]"></span>
          </a>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="group px-6 py-2.5 rounded-full border border-[#00A3E0] bg-[#00A3E0] hover:bg-[#0284C7] text-white text-sm font-bold tracking-tight transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-[0_2px_12px_rgba(0,163,224,0.3)] hover:shadow-[0_4px_20px_rgba(0,163,224,0.45)] active:scale-95"
            >
              <span>Watch Journey</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>
          </div>
        </nav>
      )}

      {/* ======================================================== */}
      {/* MAIN CONTENT (Manuscript Journey Storytelling)           */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-[1850px] mx-auto my-auto py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Eyebrow, Display Headline, Paragraph, CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-8">
            
            {/* Category Tag with Cyan Live Pulse */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EADFCF] shadow-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0] mj-live-cyan-pulse" />
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#00A3E0]">
                • MANUSCRIPT JOURNEY • EDITORIAL ROADMAP • GLOBAL LAUNCH
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-5xl sm:text-6xl lg:text-[76px] xl:text-[86px] leading-[0.96] tracking-tight font-extrabold text-[#161514]">
              Your Manuscript&apos;s Path<br className="hidden sm:inline" />
              <span className="manuscript-serif italic font-normal text-[#00A3E0] tracking-normal block sm:inline">
                To The World.
              </span>
            </h2>

            {/* Paragraph in Warm Muted Charcoal */}
            <p className="text-base sm:text-lg text-[#635E59] max-w-lg leading-relaxed font-normal">
              From an initial rough draft to comprehensive developmental editing, bespoke cover typography, and distribution across 40,000+ bookstores—experience the journey of turning ideas into published legacy.
            </p>

            {/* Primary Action Buttons + Social Proof */}
            <div className="pt-2 flex items-center gap-4 sm:gap-5 flex-wrap">
              {/* Button 1: Watch Video Showreel */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="mj-cta group px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00A3E0] via-[#0092cc] to-[#0077B6] hover:from-[#40bee2] hover:to-[#00A3E0] text-white font-bold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(0,163,224,0.35)] hover:shadow-[0_6px_28px_rgba(0,163,224,0.5)] flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch The Journey</span>
                <span className="mj-arrow text-lg transition-transform duration-300">↗</span>
              </button>

              {/* Button 2: Submit Manuscript Scope */}
              <button
                type="button"
                onClick={() => openConsultationModal()}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F5EFE6] border border-[#EADFCF] text-[#161514] hover:text-[#00A3E0] font-bold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-xs flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Submit Manuscript</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 4 Overlapping Author Avatars */}
              <div className="flex items-center pl-2">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Author Sophia"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
                  alt="Author David"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-xs -ml-2.5"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Author Rachel"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-xs -ml-2.5"
                />
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80"
                  alt="Author Thomas"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-xs -ml-2.5"
                />
              </div>
            </div>

            {/* Social Proof Subtext */}
            <p className="text-xs sm:text-sm font-medium text-[#635E59]">
              Over <span className="text-[#161514] font-bold">2,500+ manuscripts</span> successfully published · 100% Royalties kept by author
            </p>

          </div>

          {/* Right Column (Open canvas showcasing the manuscript journey video artwork) */}
          <div className="hidden lg:col-span-5 xl:col-span-6 lg:block relative pointer-events-none" />

        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM FOOTER ACCENT BAR: 3 MILESTONES                   */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-[1850px] mx-auto pt-6 border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#635E59] gap-4">
        <div className="flex items-center gap-6 flex-wrap font-medium">
          <span className="flex items-center gap-1.5">
            <strong className="text-[#00A3E0] font-bold">01.</strong> Developmental & Copy Editing
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <strong className="text-[#00A3E0] font-bold">02.</strong> Custom Typesetting & Cover Art
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <strong className="text-[#00A3E0] font-bold">03.</strong> Global Amazon & IngramSpark Launch
          </span>
        </div>
        <div>
          <span>© 2026 Best Selling Publisher. All Rights & Royalties Reserved by Author.</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN VIDEO LIGHTBOX MODAL                          */}
      {/* ======================================================== */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 lg:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-white border border-[#EADFCF] rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col text-[#161514]">
            {/* Header */}
            <div className="px-6 py-4 bg-[#FAF7F2] border-b border-[#EADFCF] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] mj-live-cyan-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  The Manuscript Publishing Journey
                </span>
                <span className="text-xs text-[#635E59] hidden sm:inline">• Full Author Process</span>
              </div>

              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-[#EADFCF] text-[#635E59] hover:text-[#161514] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Close Showreel Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative w-full aspect-video bg-black">
              <video
                ref={modalVideoRef}
                controls
                className="w-full h-full object-cover"
                poster="/amazon-publishing-ultra-master.png"
              >
                <source src="/manuscript_journey_publishing.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#635E59]">
              <p>Ready to start your manuscript&apos;s journey? Connect with our senior publishing directors.</p>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  openConsultationModal();
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00A3E0] to-[#0077B6] hover:from-[#40bee2] hover:to-[#00A3E0] text-white font-bold text-xs transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,163,224,0.35)]"
              >
                Start My Manuscript
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
