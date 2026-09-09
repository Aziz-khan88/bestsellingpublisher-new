"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { V2ThreeDistributionGlobe } from "./v2-three-distribution-globe";

export function V2DistributionMarketingSection() {
  return (
    <section className="relative w-full bg-[#020818] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-slate-800/80">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
          
          {/* ======================================================== */}
          {/* CARD 1: GLOBAL DISTRIBUTION (Real-Time Three.js 3D Globe) */}
          {/* ======================================================== */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-3xl bg-gradient-to-b from-[#07172F] via-[#040E1E] to-[#020712] border border-cyan-500/20 hover:border-cyan-400/60 p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00E5FF] text-[11px] font-bold uppercase tracking-wider mb-4">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Distribution Network & Projections</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1.5 leading-tight">
                Your Book. Everywhere.
              </h3>
              <p className="text-xs uppercase font-bold tracking-widest text-[#00E5FF] mb-3 font-mono">
                Worldwide Bookstore & Retail Distribution
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Real-time worldwide distribution projection across 40,000+ bookstores, retailers, and public libraries in 190+ countries in Hardcover, Paperback, and eBook formats.
              </p>

              {/* Real-Time Interactive Three.js 3D Globe with Floating Book Projection */}
              <div className="mb-6">
                <V2ThreeDistributionGlobe />
              </div>

              {/* Retailer Platform Badges */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { name: "Amazon KDP", projection: "Global Reach" },
                  { name: "Barnes & Noble", projection: "In-Store & Online" },
                  { name: "IngramSpark", projection: "40K Bookstores" },
                  { name: "Apple Books", projection: "50+ Countries" },
                  { name: "Google Play", projection: "Digital Global" },
                  { name: "Rakuten Kobo", projection: "International" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="py-2 px-2.5 rounded-lg bg-[#071428] border border-white/10 text-center group-hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-slate-200 truncate">{item.name}</div>
                    <div className="text-[10px] text-cyan-400 font-mono">{item.projection}</div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#consultation"
              className="w-full py-3 px-5 rounded-xl bg-[#00A3E0] hover:bg-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore Global Distribution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* ======================================================== */}
          {/* CARD 2: MARKETING THAT SELLS (3D Rocket & Growth Graph)  */}
          {/* ======================================================== */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-3xl bg-gradient-to-b from-[#07172F] via-[#040E1E] to-[#020712] border border-cyan-500/20 hover:border-cyan-400/60 p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[#00E5FF] text-[11px] font-bold uppercase tracking-wider mb-4">
                <Rocket className="w-3.5 h-3.5" />
                <span>Marketing That Converts</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1.5 leading-tight">
                Be Seen. Be Heard. Be Read.
              </h3>
              <p className="text-xs uppercase font-bold tracking-widest text-[#00E5FF] mb-3 font-mono">
                Explosive Book Marketing & Author Growth
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Propel your book with data-driven marketing projection, Amazon category velocity, and targeted PR campaigns designed to turn first-time readers into lifelong fans.
              </p>

              {/* 3D Launching Rocket & Growth Graphic with Ample Height */}
              <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden mb-6 border border-cyan-400/30 bg-[#020815] shadow-[inset_0_0_40px_rgba(0,163,224,0.15)] flex items-center justify-center group">
                <Image
                  src="/v2-marketing-rocket.jpg"
                  alt="Be Seen. Be Heard. Be Read. Book Marketing Rocket & Growth"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                {/* Soft Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E1E]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Growth Projection Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#040E20]/90 backdrop-blur-md border border-cyan-400/35 text-[11px] font-bold uppercase tracking-wider text-[#00E5FF] shadow-lg shadow-cyan-500/20">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Projected Growth: +1500%</span>
                  </div>
                </div>

                <div className="absolute bottom-3.5 right-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#040E20]/90 backdrop-blur-md border border-white/10 text-[10.5px] text-slate-200">
                    <Sparkles className="w-3 h-3 text-[#00E5FF]" />
                    <span>Be Seen · Be Heard · Be Read</span>
                  </div>
                </div>
              </div>

              {/* Campaign Capabilities List */}
              <div className="space-y-2 mb-6">
                {[
                  "Launch Projection: Amazon Bestseller Rank in 3 Categories",
                  "Reach Projection: 250K+ Monthly Active Readers via Ads & PR",
                  "Author Branding: Verified Goodreads Reviews & Press Release",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#consultation"
              className="w-full py-3 px-5 rounded-xl bg-transparent hover:bg-cyan-500/10 text-cyan-300 hover:text-white border border-cyan-400/50 hover:border-cyan-300 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore Marketing Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
