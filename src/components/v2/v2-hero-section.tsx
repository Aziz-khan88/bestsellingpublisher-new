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
import { V2ThreeHeroBook } from "./v2-three-hero-book";

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
    <section className="relative w-full bg-[#020818] text-slate-100 font-sans pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
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
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[#00E5FF] text-xs sm:text-sm font-bold uppercase tracking-wider w-fit mb-5"
            >
              <Sparkles className="w-4 h-4 text-[#00A3E0]" />
              <span>Full-Service Independent Book Publishing</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-serif font-bold text-white tracking-tight leading-[1.07] mb-5"
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
              className="text-slate-200 text-base sm:text-lg lg:text-[18px] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              From professional editing and bespoke cover design to Amazon KDP setup, global bookstore printing, and targeted bestseller marketing—we coordinate every step so your book reaches readers worldwide. You keep <strong className="text-white font-semibold">100% royalties</strong> and retain <strong className="text-white font-semibold">all copyright ownership</strong>.
            </motion.p>

            {/* Key Deliverable Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8"
            >
              <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                <span>100% Royalties to Author</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                <span>Amazon KDP & 40k Stores</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-medium text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
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
                className="cta-btn-base cta-btn-primary cta-btn-item text-sm sm:text-base font-bold py-3.5 px-7"
              >
                <span>Get Free Publishing Scope</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+18556666675"
                className="cta-btn-base cta-btn-outline-light cta-btn-item text-sm sm:text-base font-bold py-3.5 px-7"
              >
                <Phone className="w-4 h-4" />
                <span>Call (855) 666-6675</span>
              </a>
            </motion.div>

            {/* Live Trust Metrics */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-serif text-white leading-none mb-1.5">
                  1,200+
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-sans">
                  Books Published
                </div>
              </div>
              <div className="w-[1px] h-8 bg-slate-800" />
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-serif text-[#00E5FF] leading-none mb-1.5">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-sans">
                  Author Ownership
                </div>
              </div>
              <div className="w-[1px] h-8 bg-slate-800" />
              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-[34px] font-bold font-serif text-white leading-none mb-1.5">
                  <span>4.9</span>
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-sans">
                  Verified Reviews
                </div>
              </div>
              <div className="w-[1px] h-8 bg-slate-800" />
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-serif text-[#00E5FF] leading-none mb-1.5">
                  190+
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-sans">
                  Countries Projected
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Real-Time Three.js 3D Hardcover Book Stage */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px]">
            {/* Ambient Radial Backlight */}
            <div className="absolute w-[440px] sm:w-[580px] h-[440px] sm:h-[580px] rounded-full bg-gradient-to-tr from-[#00A3E0]/25 via-cyan-500/10 to-transparent blur-[100px] pointer-events-none" />

            {/* Three.js Interactive 3D Hardcover Book & Stage */}
            <div className="relative w-full h-full flex items-center justify-center">
              <V2ThreeHeroBook />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* GLOBAL DISTRIBUTION MARQUEE DOCK                         */}
        {/* ======================================================== */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-800/80">
          <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-300 mb-6">
            Distributed Across All Major Bookstores & Digital Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-85 hover:opacity-100 transition-all duration-300">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              <span className="text-[#00A3E0]">amazon</span> kdp
            </span>
            <span className="text-base sm:text-lg font-serif font-bold text-slate-100">
              Barnes & Noble
            </span>
            <span className="text-base sm:text-lg font-sans font-semibold text-slate-100 flex items-center gap-1">
              Apple Books
            </span>
            <span className="text-base sm:text-lg font-sans font-bold text-slate-100 tracking-wider">
              INGRAM<span className="text-[#00A3E0]">SPARK</span>
            </span>
            <span className="text-base sm:text-lg font-sans font-medium text-slate-100">
              Google Play Books
            </span>
            <span className="text-base sm:text-lg font-serif italic text-slate-100">
              Rakuten kobo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
