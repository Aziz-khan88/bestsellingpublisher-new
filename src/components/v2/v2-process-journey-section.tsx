"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MessageSquareText,
  FileEdit,
  Palette,
  Globe,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "Share your vision, manuscript goals, and timeline with our senior publishing director.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Manuscript Development",
    description: "Comprehensive developmental editing, copyediting, and proofreading to ensure perfection.",
    icon: FileEdit,
  },
  {
    step: "03",
    title: "Design & Formatting",
    description: "Custom trade cover design, interior typography, and ebook/print prepress layout.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Publishing & Distribution",
    description: "Official ISBN registration, copyright archiving, and worldwide distribution on 100+ platforms.",
    icon: Globe,
  },
  {
    step: "05",
    title: "Marketing & Growth",
    description: "Amazon category optimization, PR outreach, review campaigns, and reader acquisition.",
    icon: TrendingUp,
  },
];

export function V2ProcessJourneySection() {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-slate-200/80">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-cyan-100/40 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Our Proven Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#0B1B36] tracking-tight leading-tight mb-3">
              From Manuscript to Masterpiece
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A transparent, collaborative 5-milestone roadmap designed to guide authors seamlessly from initial idea to global bookshelf distribution.
            </p>
          </div>

          <a
            href="#consultation"
            className="cta-btn-base cta-btn-primary shrink-0 self-start lg:self-auto inline-flex items-center gap-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5-Step Connected Timeline Layout */}
        <div className="relative">
          {/* Horizontal Connecting Guide Rail (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-cyan-100 via-cyan-400/50 to-cyan-100 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isCurrent = activeStep === idx;
              return (
                <motion.div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative group rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col items-center text-center border ${
                    isCurrent
                      ? "bg-white border-2 border-[#00A3E0] shadow-[0_12px_32px_rgba(0,163,224,0.18)]"
                      : "bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-cyan-400/50 hover:shadow-md"
                  }`}
                >
                  {/* Step Number Circle with Glow */}
                  <div
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300 ${
                      isCurrent
                        ? "bg-gradient-to-tr from-[#00A3E0] to-[#00E5FF] text-white shadow-lg shadow-cyan-400/30 ring-4 ring-cyan-100"
                        : "bg-white text-[#00A3E0] border border-slate-200 group-hover:border-cyan-400 group-hover:shadow-sm"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span
                      className={`absolute -bottom-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isCurrent
                          ? "bg-[#0B1B36] text-white"
                          : "bg-white border border-slate-200 text-slate-700"
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B1B36] mb-2 group-hover:text-[#00A3E0] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
