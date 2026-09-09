"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
  MessageSquareText,
  BookOpen,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "Royalties & Rights" | "Timeline & Process" | "Distribution" | "Pricing & Plans";
  question: string;
  answer: string;
  takeaway: string;
  badge: string;
}

const CATEGORIES = [
  "All Topics",
  "Royalties & Rights",
  "Timeline & Process",
  "Distribution",
  "Pricing & Plans",
] as const;

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Timeline & Process",
    badge: "60-90 Days Standard",
    question: "How long does it take from manuscript to worldwide publication?",
    answer:
      "Most projects take between 60 to 90 days from approved manuscript to worldwide retail availability on Amazon, Barnes & Noble, and IngramSpark. Expedited 30 to 45-day timelines are available for time-sensitive launches, while extensive developmental edits and custom illustrated children's books may take 90 to 120 days.",
    takeaway: "Structured 5-milestone publishing roadmap with author review checkpoints at every phase.",
  },
  {
    id: "faq-2",
    category: "Royalties & Rights",
    badge: "100% Legal Ownership",
    question: "Will I retain 100% of my book's copyright, film, and media rights?",
    answer:
      "Yes, unconditionally. Best Selling Publisher operates strictly as your work-for-hire publishing and production partner. You retain 100% ownership of your manuscript, characters, world-building, cover artwork, and all future adaptation rights (audiobook, TV/film, foreign translations).",
    takeaway: "Zero restrictive multi-book contracts. You can republish or modify your book at any time.",
  },
  {
    id: "faq-3",
    category: "Royalties & Rights",
    badge: "0% Agency Commission",
    question: "How do royalty payouts work, and does Best Selling Publisher take a cut?",
    answer:
      "We take 0% of your royalties. All net royalties earned across Amazon KDP, IngramSpark, Barnes & Noble, Apple Books, and Google Play are paid 100% directly from distributors into your designated author bank account. You track live daily sales through your own personal publisher dashboard.",
    takeaway: "100% of all retail and digital earnings deposit straight to you—no middlemen, no delays.",
  },
  {
    id: "faq-4",
    category: "Distribution",
    badge: "40,000+ Retailers",
    question: "Where will my book be available for readers to purchase?",
    answer:
      "Your book will be distributed worldwide across 40,000+ physical bookstores, online retailers, and public libraries in 190+ countries—including Amazon (Hardcover, Paperback, Kindle), Barnes & Noble, IngramSpark, Apple Books, Google Play, Rakuten Kobo, and Baker & Taylor.",
    takeaway: "Global catalog inclusion with official Bowker registered ISBNs and barcodes in your author name.",
  },
  {
    id: "faq-5",
    category: "Pricing & Plans",
    badge: "Milestone Installments",
    question: "Do I have to pay for the entire publishing project upfront?",
    answer:
      "No. We provide flexible, milestone-based installment plans tied directly to agreed deliverables. You only approve payments as each project stage (editorial review, custom cover design, interior typesetting, prepress quality check) is completed to your 100% satisfaction.",
    takeaway: "Pay as you go with zero hidden fees, verified deliverables, and milestone review checkpoints.",
  },
  {
    id: "faq-6",
    category: "Timeline & Process",
    badge: "Prestige Editorial",
    question: "What if my manuscript needs developmental editing or ghostwriting assistance?",
    answer:
      "Our team includes veteran developmental editors, ghostwriters, and copyeditors who have worked on New York Times and Wall Street Journal bestsellers. We can elevate a rough draft, outline, or completed manuscript to industry-standard trade publication quality.",
    takeaway: "Personalized editorial support tailored to your exact genre, style, and commercial ambitions.",
  },
];

export function V2FAQSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All Topics");
  const [openId, setOpenId] = React.useState<string | null>("faq-1");

  const filteredFaqs = React.useMemo(() => {
    if (selectedCategory === "All Topics") return FAQS;
    return FAQS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-slate-200/80">
      {/* Soft Ambient Background Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-cyan-100/40 via-sky-50/30 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>Author Knowledge Base & FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#0B1B36] tracking-tight leading-tight mb-4">
            Everything You Need to Know Before Publishing
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparent answers regarding copyright retention, 100% author royalties, worldwide bookstore distribution, and milestone delivery.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#00A3E0] text-white shadow-md shadow-cyan-500/25"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/60"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2-COLUMN SPLIT LAYOUT: CONCIERGE CARD + INTERACTIVE FAQS */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Author Concierge Card (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-gradient-to-b from-slate-50 via-white to-cyan-50/40 border border-slate-200/90 p-6 sm:p-8 shadow-[0_10px_30px_rgba(11,27,54,0.05)] flex flex-col justify-between">
              <div>
                {/* Director Avatar Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00A3E0] to-[#00E5FF] text-white flex items-center justify-center mb-5 shadow-lg shadow-cyan-400/30 ring-4 ring-cyan-100">
                  <MessageSquareText className="w-7 h-7" />
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-100/80 text-[#00A3E0] mb-2.5">
                  Senior Publishing Support
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1B36] mb-3 leading-snug">
                  Have a Specific Question About Your Manuscript?
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Our senior publishing directors review drafts, evaluate genre-specific market demand, and outline customized publishing scopes with zero obligation.
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2.5 mb-8 pb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                    <span>Free Manuscript Scope Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                    <span>100% Direct Royalty Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                    <span>No Obligation Contract Review</span>
                  </div>
                </div>
              </div>

              {/* Direct Call & Consultation Action */}
              <div className="space-y-3">
                <a
                  href="tel:+18556666675"
                  className="w-full py-3 px-4 rounded-xl bg-[#00A3E0] hover:bg-[#008fca] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (855) 666-6675</span>
                </a>

                <a
                  href="#consultation"
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B1B36] border border-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <span>Request Free Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive High-Impact Accordion Cards */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openId === faq.id;
                  const itemNumber = (idx + 1).toString().padStart(2, "0");

                  return (
                    <motion.div
                      key={faq.id}
                      layout
                      className={`group rounded-2xl transition-all duration-300 border overflow-hidden ${
                        isOpen
                          ? "bg-white border-2 border-[#00A3E0] shadow-[0_12px_36px_rgba(0,163,224,0.12)] ring-4 ring-cyan-50"
                          : "bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-cyan-400/50 shadow-xs"
                      }`}
                    >
                      {/* Accordion Header Bar */}
                      <button
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className="w-full py-5 px-5 sm:px-7 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                      >
                        <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                          {/* Number Badge */}
                          <span
                            className={`font-serif text-lg sm:text-xl font-black shrink-0 transition-colors ${
                              isOpen
                                ? "text-[#00A3E0]"
                                : "text-slate-300 group-hover:text-[#00A3E0]"
                            }`}
                          >
                            {itemNumber}
                          </span>

                          <div>
                            {/* Category Micro-Badge */}
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
                                {faq.category}
                              </span>
                              <span className="text-[10.5px] font-semibold text-cyan-600">
                                {faq.badge}
                              </span>
                            </div>

                            {/* Question Headline */}
                            <h4
                              className={`text-base sm:text-lg font-serif font-bold transition-colors leading-snug ${
                                isOpen
                                  ? "text-[#00A3E0]"
                                  : "text-[#0B1B36] group-hover:text-[#00A3E0]"
                              }`}
                            >
                              {faq.question}
                            </h4>
                          </div>
                        </div>

                        {/* Plus / Minus Morphing Toggle Icon */}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "bg-[#00A3E0] text-white shadow-md shadow-cyan-500/30 rotate-180"
                              : "bg-slate-100 group-hover:bg-cyan-50 text-slate-500 group-hover:text-[#00A3E0]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {/* Expanded Accordion Body */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                          >
                            <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-100">
                              {/* Detailed Answer Paragraph */}
                              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-4">
                                {faq.answer}
                              </p>

                              {/* Highlighted Author Takeaway Box */}
                              <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-cyan-50/80 to-sky-50/50 border border-cyan-200/80 flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                                <div className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-medium">
                                  <strong className="text-[#0B1B36] font-bold">Author Guarantee: </strong>
                                  {faq.takeaway}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Trust Guarantee Pill */}
        <div className="mt-14 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs text-slate-700 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
            <span>All contracts include our 100% Royalty Ownership Charter and designated author approval milestones.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
