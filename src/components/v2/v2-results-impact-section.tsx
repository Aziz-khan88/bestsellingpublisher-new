"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface SuccessStory {
  author: string;
  genre: string;
  metric: string;
  subMetric: string;
  projection: string;
  quote: string;
  avatarBg: string;
  initials: string;
  tags: string[];
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    author: "James T.",
    genre: "Thriller & Suspense Author",
    metric: "#1 Bestseller",
    subMetric: "Amazon Category Leader in 3 Genres",
    projection: "1st-Year Royalty Projection: $140K+ Kept",
    quote:
      "Best Selling Publisher handled our developmental edit, cover art, and launch strategy. We broke into the Amazon Top 100 overall within 7 days.",
    avatarBg: "from-blue-600 to-cyan-500",
    initials: "JT",
    tags: ["Top 100 Overall", "1,200+ Reviews", "Ingram Distribution"],
  },
  {
    author: "Sophia L.",
    genre: "Memoir & Autobiography Author",
    metric: "250K+ Copies",
    subMetric: "Sold Worldwide Across Print & Audio",
    projection: "Readership Projection: 190+ Countries Live",
    quote:
      "From ghostwriting guidance to global audiobook production, their team treated my personal story with the utmost reverence and commercial polish.",
    avatarBg: "from-purple-600 to-pink-500",
    initials: "SL",
    tags: ["6 Translations", "Audiobook Bestseller", "Barnes & Noble In-Store"],
  },
  {
    author: "Daniel M.",
    genre: "Business & Leadership Author",
    metric: "$1M+ Revenue",
    subMetric: "Book Sales & High-Ticket Speaking Deals",
    projection: "Commercial ROI Projection: 10x Inbound Deals",
    quote:
      "Publishing our methodology turned our boutique firm into the definitive industry voice. The ROI on this publishing project was over 10x.",
    avatarBg: "from-amber-600 to-orange-500",
    initials: "DM",
    tags: ["Wall Street Featured", "Keynote Inquiries", "100% Royalties Kept"],
  },
];

export function V2ResultsImpactSection() {
  return (
    <section className="relative w-full bg-[#020818] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real Authors. Real Results.</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-tight mb-3">
              Proven Commercial Impact & Projections
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We don&apos;t just print books. We engineer bestseller launches that build author authority, worldwide readership projections, and 100% royalty retention.
            </p>
          </div>

          <a
            href="#consultation"
            className="cta-btn-base cta-btn-secondary shrink-0 self-start lg:self-auto inline-flex items-center gap-2"
          >
            <span>Read Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 High-Impact Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {SUCCESS_STORIES.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative group rounded-2xl bg-gradient-to-b from-[#08152B] via-[#050E1D] to-[#020712] border border-white/10 hover:border-cyan-400/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,163,224,0.2)]"
            >
              <div>
                {/* Author Avatar & Header Info */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md ring-2 ring-white/20`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-tight">
                      {item.author}
                    </h4>
                    <span className="text-xs text-cyan-300 font-medium">
                      {item.genre}
                    </span>
                  </div>
                </div>

                {/* Main Highlight Metric */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="text-3xl sm:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#00E5FF] tracking-tight mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {item.subMetric}
                  </div>
                </div>

                {/* Projection Tag */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/25 text-[11px] font-semibold text-[#00E5FF]">
                    <TrendingUp className="w-3 h-3 text-cyan-400" />
                    <span>{item.projection}</span>
                  </span>
                </div>

                {/* Author Quote */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Tags / Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10.5px] font-medium bg-[#0A1A33] border border-cyan-500/20 text-slate-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#00E5FF]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
