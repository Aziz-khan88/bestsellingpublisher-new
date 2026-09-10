"use client";

import * as React from "react";
import Image from "next/image";
import { Play, X, Menu, ArrowUpRight, Sparkles, BookOpenCheck } from "lucide-react";

interface V2PublishFlowHeroProps {
  hideNav?: boolean;
}

export function V2PublishFlowHero({ hideNav = false }: V2PublishFlowHeroProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = React.useState(false);

  // Set background video playback rate to 0.7 for smooth ambient motion
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  // Handle ESC key to close modal & drawer
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

  // Control modal video playback and body overflow
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
    <section className={`relative w-full min-h-screen px-6 sm:px-12 lg:px-16 py-6 flex flex-col justify-between bg-[#FAF7F2] text-[#161514] font-sans overflow-hidden border-b border-[#EADFCF] ${hideNav ? "pt-28 sm:pt-36 lg:pt-40" : ""}`}>
      {/* Import Google Fonts directly for Instrument Serif Display */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .publishflow-serif {
          font-family: 'Instrument Serif', Georgia, serif;
        }

        .pf-nav-link {
          position: relative;
        }
        .pf-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #00A3E0;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pf-nav-link:hover::after {
          width: 100%;
        }

        .pf-cta:hover .pf-arrow {
          transform: translate(3px, -3px);
        }

        @keyframes pfCyanPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); box-shadow: 0 0 8px rgba(0,163,224,0.4); }
          50% { opacity: 1; transform: scale(1.15); box-shadow: 0 0 16px rgba(0,163,224,0.75); }
        }
        .pf-live-cyan-pulse {
          animation: pfCyanPulse 2.5s infinite ease-in-out;
        }
      `}</style>

      {/* ======================================================== */}
      {/* BACKGROUND VIDEO ARTWORK & GRADIENT OVERLAYS (LIGHT THEME) */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        {/* Background Video (0.7x Ambient Motion) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-90 transition-opacity duration-1000"
        >
          <source src="/process_of_book_publishing.mp4" type="video/mp4" />
          <source src="/creative_studio_clean.mp4" type="video/mp4" />
        </video>

        {/* GRADIENT MASKING LAYERS (LIGHT WARM CREAM PALETTE) */}
        {/* 1. Left Column Gradient: Seamless warm cream fade covering the left text column */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[62%] lg:w-[56%] xl:w-[50%] bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/98 via-[#FAF7F2]/80 to-transparent z-10 pointer-events-none" />

        {/* 2. Top Navigation Overlay (Vertical Top-Down Gradient) */}
        <div className="absolute top-0 inset-x-0 h-44 sm:h-52 lg:h-60 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/95 via-[#FAF7F2]/45 to-transparent z-10 pointer-events-none" />

        {/* 3. Bottom Overlay (Matching Bottom-Up Vertical Gradient) */}
        <div className="absolute bottom-0 inset-x-0 h-44 sm:h-52 lg:h-60 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/95 via-[#FAF7F2]/45 to-transparent z-10 pointer-events-none" />

        {/* Center-right artwork area stays clear, naturally showing the author pen and paper */}
      </div>

      {/* ======================================================== */}
      {/* TOP NAVIGATION BAR (Visible when standalone)             */}
      {/* ======================================================== */}
      {!hideNav && (
        <nav className="relative z-20 w-full max-w-[1850px] mx-auto flex items-center justify-between py-2" aria-label="PublishFlow Navigation">
          {/* Left Logo with Brand Cyan Accent */}
          <a href="#publishflow" className="flex items-center gap-1.5 text-2xl sm:text-[28px] font-extrabold tracking-tight text-[#161514] group">
            <span>Best Selling Publisher</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] inline-block shadow-[0_0_10px_rgba(0,163,224,0.5)]"></span>
          </a>

          {/* Desktop Links with animated underline */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-[#635E59]">
            <a href="#how-it-works" className="pf-nav-link text-[#635E59] hover:text-[#00A3E0] transition-colors">How It Works</a>
            <a href="#services" className="pf-nav-link text-[#635E59] hover:text-[#00A3E0] transition-colors">Services</a>
            <a href="#pricing" className="pf-nav-link text-[#635E59] hover:text-[#00A3E0] transition-colors">Pricing</a>
            <a href="#resources" className="pf-nav-link text-[#635E59] hover:text-[#00A3E0] transition-colors">Resources</a>
            <a href="#authors" className="pf-nav-link text-[#635E59] hover:text-[#00A3E0] transition-colors">Authors</a>
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="group px-6 py-2.5 rounded-full border border-[#00A3E0] bg-[#00A3E0] hover:bg-[#0284C7] text-white text-sm font-bold tracking-tight transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-[0_2px_12px_rgba(0,163,224,0.3)] hover:shadow-[0_4px_20px_rgba(0,163,224,0.45)] active:scale-95"
            >
              <span>Start Publishing</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileDrawerOpen((prev) => !prev)}
            className="md:hidden p-2.5 rounded-xl border border-[#EADFCF] bg-white text-[#161514] hover:bg-[#F5EFE6] transition-colors cursor-pointer shadow-xs"
            aria-label="Toggle Mobile Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      )}

      {/* ======================================================== */}
      {/* MOBILE SLIDE-OVER DRAWER                                 */}
      {/* ======================================================== */}
      {!hideNav && isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setIsMobileDrawerOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />
          <aside className="relative ml-auto h-full w-[85%] max-w-sm bg-[#FAF7F2] border-l border-[#EADFCF] p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10 text-[#161514]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EADFCF]">
                <div className="text-xl font-extrabold text-[#161514] flex items-center gap-1">
                  Best Selling Publisher<span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] inline-block shadow-[0_0_8px_#00A3E0]"></span>
                </div>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="w-9 h-9 rounded-full bg-white border border-[#EADFCF] flex items-center justify-center text-[#635E59] hover:text-[#161514] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-5 pt-8 text-lg font-bold text-[#161514]">
                <a href="#how-it-works" onClick={() => setIsMobileDrawerOpen(false)} className="hover:text-[#00A3E0]">How It Works</a>
                <a href="#services" onClick={() => setIsMobileDrawerOpen(false)} className="hover:text-[#00A3E0]">Services</a>
                <a href="#pricing" onClick={() => setIsMobileDrawerOpen(false)} className="hover:text-[#00A3E0]">Pricing</a>
                <a href="#resources" onClick={() => setIsMobileDrawerOpen(false)} className="hover:text-[#00A3E0]">Resources</a>
                <a href="#authors" onClick={() => setIsMobileDrawerOpen(false)} className="hover:text-[#00A3E0]">Authors</a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EADFCF]">
              <button
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  setIsVideoModalOpen(true);
                }}
                className="w-full py-3.5 px-6 rounded-full bg-[#00A3E0] hover:bg-[#0284C7] text-white font-bold text-center text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(0,163,224,0.35)]"
              >
                <span>Start Publishing</span>
                <span>↗</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* ======================================================== */}
      {/* MAIN CONTENT (Light Warm Cream Theme)                    */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-[1850px] mx-auto my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Category, Headline, Paragraph, CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-8">
            
            {/* Category Tag with Cyan Live Pulse */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EADFCF] shadow-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0] pf-live-cyan-pulse" />
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#00A3E0]">
                • WE WRITE • WE PUBLISH • WE GROW
              </span>
            </div>

            {/* Display Headline: Charcoal Ink + Editorial Cyan Accent */}
            <h1 className="text-6xl sm:text-7xl lg:text-[88px] xl:text-[96px] leading-[0.95] tracking-tight font-extrabold text-[#161514]">
              Publishing That<br className="hidden sm:inline" />
              <span className="publishflow-serif italic font-normal text-[#00A3E0] tracking-normal block sm:inline">
                Inspires.
              </span>
            </h1>

            {/* Paragraph in Warm Muted Charcoal */}
            <p className="text-base sm:text-lg text-[#635E59] max-w-md leading-relaxed font-normal">
              We guide authors through every step of the publishing journey—from manuscript refinement to printed bestsellers in readers&apos; hands worldwide.
            </p>

            {/* Primary CTA Buttons + Avatars in Single Row */}
            <div className="pt-2 flex items-center gap-5 sm:gap-6 flex-wrap">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="pf-cta group px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00A3E0] via-[#0092cc] to-[#0077B6] hover:from-[#40bee2] hover:to-[#00A3E0] text-white font-bold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(0,163,224,0.35)] hover:shadow-[0_6px_28px_rgba(0,163,224,0.5)] flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <span>See Our Work</span>
                <span className="pf-arrow text-lg transition-transform duration-300">↗</span>
              </button>

              {/* 4 Overlapping Avatars directly beside CTA */}
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Published Author Elena"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Published Author Marcus"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-xs -ml-2.5"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Published Author Claire"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-xs -ml-2.5"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Published Author David"
                  className="w-10 h-10 rounded-full border-2 border-[#FAF7F2] object-cover shadow-xs -ml-2.5"
                />
              </div>
            </div>

            {/* Social Proof Subtext */}
            <p className="text-xs sm:text-sm font-medium text-[#635E59]">
              Trusted by <span className="text-[#161514] font-bold">2,000+ authors</span> across 40,000+ global bookstores
            </p>

          </div>

          {/* Right Column (Completely clear and open, showcasing artwork animation) */}
          <div className="hidden lg:col-span-5 xl:col-span-6 lg:block relative pointer-events-none" />

        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM FOOTER ACCENT BAR                                 */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-[1850px] mx-auto pt-4 border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#635E59] gap-3">
        <div className="flex items-center gap-6">
          <span>Editorial & Ghostwriting</span>
          <span>•</span>
          <span>Custom Cover Design</span>
          <span>•</span>
          <span>Global Amazon & IngramSpark Distribution</span>
        </div>
        <div>
          <span>© 2026 Best Selling Publisher. 100% Royalties to Authors.</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN VIDEO SHOWREEL MODAL                          */}
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
                <span className="w-2 h-2 rounded-full bg-[#00A3E0] pf-live-cyan-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  Best Selling Publisher Showreel
                </span>
                <span className="text-xs text-[#635E59] hidden sm:inline">• Complete Author Journey</span>
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
                <source src="/process_of_book_publishing.mp4" type="video/mp4" />
                <source src="/creative_studio_clean.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#635E59]">
              <p>Ready to publish your book? Our dedicated team guides you through every step.</p>
              <button
                onClick={() => setIsVideoModalOpen(false)}
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
