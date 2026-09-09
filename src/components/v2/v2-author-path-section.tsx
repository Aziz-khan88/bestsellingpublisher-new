"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  PenTool,
  BookOpen,
  Building2,
  Heart,
  Rocket,
  ChevronRight,
  FileCheck,
  Users,
  Globe2,
  Award,
  ThumbsUp,
} from "lucide-react";

interface AuthorPath {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
  tagline: string;
}

const AUTHOR_PATHS: AuthorPath[] = [
  {
    id: "first-time",
    title: "First-Time Author",
    description: "We'll guide you through every milestone from draft to global launch.",
    icon: Sparkles,
    badge: "Guided Mentorship",
    tagline: "Step-by-Step",
  },
  {
    id: "fiction",
    title: "Fiction Author",
    description: "Bring your world, characters, and storylines vividly to life.",
    icon: PenTool,
    badge: "Creative Freedom",
    tagline: "Fantasy · Thriller · Romance",
  },
  {
    id: "non-fiction",
    title: "Non-Fiction Author",
    description: "Share proven frameworks, research, and ideas that educate and inspire.",
    icon: BookOpen,
    badge: "Thought Leadership",
    tagline: "Science · Self-Help · History",
  },
  {
    id: "business",
    title: "Business Author",
    description: "Build authority, generate inbound leads, and elevate your personal brand.",
    icon: Building2,
    badge: "Brand Authority",
    tagline: "CEOs · Founders · Coaches",
  },
  {
    id: "memoir",
    title: "Memoir Author",
    description: "Preserve your life lessons, heritage, and unique journey for generations.",
    icon: Heart,
    badge: "Personal Legacy",
    tagline: "Your Life · Your Voice",
  },
  {
    id: "returning",
    title: "Returning Author",
    description: "Expand your catalog, optimize royalties, and reach wider audiences.",
    icon: Rocket,
    badge: "Scale Catalog",
    tagline: "Global Distribution",
  },
];

const PROOF_METRICS = [
  {
    icon: FileCheck,
    numericValue: 300,
    suffix: "K+",
    label: "Manuscripts Reviewed",
  },
  {
    icon: Users,
    numericValue: 150,
    suffix: "K+",
    label: "Authors Represented",
  },
  {
    icon: Globe2,
    numericValue: 24,
    suffix: "+",
    label: "Countries Served",
  },
  {
    icon: Award,
    numericValue: 1000,
    suffix: "+",
    label: "Publishing Experts",
  },
  {
    icon: ThumbsUp,
    numericValue: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: 1 - (1 - t)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function V2AuthorPathSection() {
  const [activePath, setActivePath] = React.useState<string>("first-time");

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F7FAFD] via-[#FFFFFF] to-[#EFF6FC] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-b border-slate-200/80">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[360px] bg-gradient-to-r from-cyan-100/60 via-sky-100/40 to-blue-100/50 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        {/* Section Header with Divider Lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-[#00A3E0]/40" />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/90 text-[#00A3E0] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase tracking-[0.22em]">
              Find Your Publishing Path
            </span>
          </div>
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-[#00A3E0]/40" />
        </div>

        {/* 6 Interactive Animated Author Path Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4 mb-12">
          {AUTHOR_PATHS.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activePath === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActivePath(item.id)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className={`relative group text-left rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isSelected
                    ? "bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE]/50 border-2 border-[#00A3E0] shadow-[0_12px_32px_-6px_rgba(0,163,224,0.25)] ring-4 ring-cyan-500/10"
                    : "bg-white hover:bg-slate-50/90 border-slate-200/90 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] hover:border-cyan-400 hover:shadow-[0_12px_28px_-8px_rgba(0,163,224,0.18)]"
                }`}
              >
                {/* Active Indicator Top Stripe */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-[#00A3E0] to-sky-400" />
                )}

                <div>
                  {/* Icon Frame */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      isSelected
                        ? "bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30 scale-105"
                        : "bg-cyan-50 text-[#0088CC] group-hover:bg-[#00A3E0] group-hover:text-white group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-bold text-[#0B1B36] mb-1.5 leading-snug group-hover:text-[#0088CC] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#0088CC]">
                    {item.tagline}
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected
                        ? "text-[#0088CC] translate-x-1"
                        : "text-slate-400 group-hover:text-[#0088CC] group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* LIVE STATS & ANIMATED PROOF COUNTER BOX                   */}
        {/* ======================================================== */}
        <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.1)] p-6 sm:p-8 backdrop-blur-md overflow-hidden">
          {/* Top Accent Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-[#00A3E0] to-emerald-400" />

          {/* Counter Box Header / Live Ticker Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Verified Publishing Performance Metrics
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-500">
              <Sparkles className="w-3 h-3 text-[#00A3E0]" />
              Real-Time Impact Counter
            </span>
          </div>

          {/* 5 Distinct Live Counter Cells */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {PROOF_METRICS.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-2 sm:px-4 group cursor-default pt-4 sm:pt-0"
                >
                  {/* Icon Pill */}
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#00A3E0] shadow-xs group-hover:scale-110 group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300 mb-2.5">
                    <MetricIcon className="w-5 h-5" />
                  </div>

                  {/* Counter Number with Smooth Animated Count-Up */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#0B1B36] tracking-tight group-hover:text-[#0088CC] transition-colors leading-none mb-1.5">
                    <AnimatedCounter target={metric.numericValue} suffix={metric.suffix} />
                  </div>

                  {/* Metric Label */}
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
