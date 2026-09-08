"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  DollarSign,
  FileCheck2,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Lock,
} from "lucide-react";

export function V2RoyaltyGuaranteeSection() {
  const guarantees = [
    {
      icon: <DollarSign className="w-6 h-6 text-[#00A3E0]" />,
      title: "100% Royalty Ownership",
      headline: "You Keep Every Cent Your Book Earns",
      description:
        "Unlike traditional vanity publishers or predatory agencies, we never take a percentage of your royalties. All earnings from Amazon, Barnes & Noble, Apple Books, and bookstores are deposited directly into your personal account.",
      highlight: "0% Commission Taken by Us",
    },
    {
      icon: <Lock className="w-6 h-6 text-[#00A3E0]" />,
      title: "100% Copyright & Rights Retained",
      headline: "Your Intellectual Property Belongs to You",
      description:
        "You retain all legal rights to your manuscript, characters, world-building, cover artwork, and future adaptations (audio, film, television, translations). You can republish or modify your book at any time.",
      highlight: "Full Legal Intellectual Property",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-[#00A3E0]" />,
      title: "Official Registered ISBNs & Barcodes",
      headline: "Legally Cataloged in the Author's Name",
      description:
        "We register authentic, official ISBNs for your paperback, hardcover, and digital editions. Your title is formally cataloged in the global Bowker database for worldwide library and retail discovery.",
      highlight: "Universal Bookstore Eligibility",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#00A3E0]" />,
      title: "Milestone Author Approvals",
      headline: "Nothing Goes Live Without Your Sign-Off",
      description:
        "Every phase—from initial edit and cover concept to interior layout and final print proof—includes designated author review rounds. We never release a file until you are 100% satisfied with the quality.",
      highlight: "Guaranteed Author Review Points",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFFFF] via-[#F4F9FD] to-[#EBF5FB] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Author Protection Charter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#0B1B36] tracking-tight leading-tight mb-3">
            Why Authors Trust Best Selling Publisher
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Publishing should empower the author—not strip away your hard-earned rights or royalties. Our transparent charter guarantees complete security, total legal ownership, and uncompromising quality.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-16">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_8px_24px_-6px_rgba(12,24,42,0.06)] p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-400/80 hover:shadow-[0_12px_32px_-6px_rgba(0,163,224,0.16)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#00A3E0] shadow-sm">
                    {item.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.highlight}</span>
                  </span>
                </div>

                <h3 className="text-xs font-bold uppercase tracking-wider text-[#00A3E0] mb-1">
                  {item.title}
                </h3>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#0B1B36] mb-3 leading-snug">
                  {item.headline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Trust Proof Bar */}
        <div className="bg-[#030d22] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-cyan-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#00E5FF] mb-2 block">
              Transparent Agreement · Written Scope
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2 leading-tight">
              Ready to Discuss Your Manuscript with Complete Peace of Mind?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Every project begins with a clear scope of work and signed deliverable schedule. No surprise fees, no hidden royalty clauses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto">
            <a
              href="#consultation"
              className="cta-btn-base cta-btn-primary w-full sm:w-auto text-center justify-center"
            >
              <span>Request Written Scope</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+18556666675"
              className="cta-btn-base cta-btn-outline-light w-full sm:w-auto text-center justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>(855) 666-6675</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
