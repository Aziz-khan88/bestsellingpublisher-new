"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Star,
} from "lucide-react";

export function V2HeroSection() {
  // Framer Motion mouse-tilt physics for the hero 3D book
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative w-full bg-[#030611] text-slate-100 font-sans pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glow & Blueprint Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center soft cyan glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#00A3E0]/20 via-[#00A3E0]/5 to-transparent blur-[120px]" />
        
        {/* Subtle geometric grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="v2HeroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00A3E0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#v2HeroGrid)" />
        </svg>
      </div>

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Clean, High-Converting Pitch               */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Trust Pill / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider w-fit mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Full-Service Independent Book Publishing</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-serif font-bold text-white tracking-tight leading-[1.08] mb-4"
            >
              Prepare Your Book for Every Channel.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00A3E0]">
                Built to Publish. Ready to Reach Readers.
              </span>
            </motion.h1>

            {/* Clear Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl mb-7 font-normal"
            >
              From professional editing and bespoke cover design to Amazon KDP setup, global bookstore printing, and targeted bestseller marketing—we coordinate every step so your book reaches readers worldwide. You keep <strong className="text-white font-semibold">100% royalties</strong> and retain <strong className="text-white font-semibold">all copyright ownership</strong>.
            </motion.p>

            {/* Key Deliverable Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
            >
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>100% Royalties to Author</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Amazon KDP & 40k Stores</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                <span>Author Milestone Approvals</span>
              </div>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="cta-btn-group mb-8"
            >
              <a
                href="#consultation"
                className="cta-btn-base cta-btn-primary cta-btn-item"
              >
                <span>Get Free Publishing Scope</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+18556666675"
                className="cta-btn-base cta-btn-outline-light cta-btn-item"
              >
                <Phone className="w-4 h-4" />
                <span>Call (855) 666-6675</span>
              </a>
            </motion.div>

            {/* Live Trust Metrics */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-white leading-none mb-1">
                  1,200+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-sans">
                  Books Published
                </div>
              </div>
              <div className="w-[1px] h-7 bg-slate-800" />
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#00E5FF] leading-none mb-1">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-sans">
                  Author Ownership
                </div>
              </div>
              <div className="w-[1px] h-7 bg-slate-800" />
              <div>
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-bold font-serif text-white leading-none mb-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-sans">
                  Verified Reviews
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Interactive 3D Perspective Tilt Book       */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Radial Backlight */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#00A3E0]/25 via-cyan-500/10 to-transparent blur-[80px] pointer-events-none" />

            {/* Interactive 3D Tilt Card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] aspect-[1/1] flex items-center justify-center cursor-pointer select-none"
            >
              {/* Realistic 3D Book Graphic */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,163,224,0.35)] border border-cyan-500/30 transition-transform duration-300 hover:scale-[1.02] bg-[#020713]">
                <Image
                  src="/hero-bestseller-book.jpg"
                  alt="The Art of the Bestseller - Best Selling Publisher"
                  width={680}
                  height={680}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Floating Live Badge 1: Top Right Amazon Bestseller */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-xl border border-slate-200/80 text-slate-900 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <span className="block text-[9.5px] uppercase font-bold tracking-wider text-slate-400">
                    Amazon Certified
                  </span>
                  <span className="block text-xs font-bold text-slate-900">
                    #1 Category Bestseller
                  </span>
                </div>
              </motion.div>

              {/* Floating Live Badge 2: Bottom Left Royalty Seal */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-2 sm:-left-4 bg-[#030d22]/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-xl border border-cyan-500/40 text-white flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00A3E0]/20 text-[#00E5FF] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div>
                  <span className="block text-[9.5px] uppercase font-bold tracking-wider text-cyan-400">
                    Author Protection
                  </span>
                  <span className="block text-xs font-bold text-white">
                    100% Royalties & Rights
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* GLOBAL DISTRIBUTION MARQUEE DOCK                         */}
        {/* ======================================================== */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-800/80">
          <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
            Distributed Across All Major Bookstores & Digital Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              <span className="text-[#00A3E0]">amazon</span> kdp
            </span>
            <span className="text-sm sm:text-base font-serif font-bold text-slate-200">
              Barnes & Noble
            </span>
            <span className="text-sm sm:text-base font-sans font-semibold text-slate-200 flex items-center gap-1">
              Apple Books
            </span>
            <span className="text-sm sm:text-base font-sans font-bold text-slate-200 tracking-wider">
              INGRAM<span className="text-[#00A3E0]">SPARK</span>
            </span>
            <span className="text-sm sm:text-base font-sans font-medium text-slate-200">
              Google Play Books
            </span>
            <span className="text-sm sm:text-base font-serif italic text-slate-200">
              Rakuten kobo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
