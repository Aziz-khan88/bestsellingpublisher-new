"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Edit3,
  Palette,
  Printer,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { V2TiltCard } from "./v2-tilt-card";

interface ServiceCardData {
  id: string;
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  checkmarks: string[];
  link: string;
  badge?: string;
}

const SERVICES_DATA: ServiceCardData[] = [
  {
    id: "amazon-publishing",
    number: "01",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Amazon Publishing & KDP Setup",
    badge: "Most Requested",
    description:
      "Complete Amazon Kindle Direct Publishing (KDP) preparation, metadata optimization, category selection, and print-on-demand setup.",
    checkmarks: [
      "KDP account configuration guidance",
      "Amazon 'Look Inside' feature setup",
      "BISAC category & keyword indexing",
      "Print-on-demand & Kindle enrollment",
    ],
    link: "/book-publishing-services",
  },
  {
    id: "book-editing",
    number: "02",
    icon: <Edit3 className="w-6 h-6" />,
    title: "Professional Editing & Proofreading",
    description:
      "Comprehensive developmental critique, line editing, syntax polishing, and proofreading following the Chicago Manual of Style.",
    checkmarks: [
      "Developmental & structural review",
      "Grammar, spelling & syntax check",
      "Tone, pacing & voice consistency",
      "Track-changes author review round",
    ],
    link: "/book-editing",
  },
  {
    id: "cover-design",
    number: "03",
    icon: <Palette className="w-6 h-6" />,
    title: "Custom Book Cover Design",
    badge: "Award-Winning Team",
    description:
      "Bespoke front cover, spine width calculation, and back cover wrap engineered to compete with New York Times bestsellers in your genre.",
    checkmarks: [
      "Custom genre-targeted concepts",
      "Full wrap print-ready PDF (300 DPI)",
      "Digital ebook & 3D sales mockups",
      "Author review & revision rounds",
    ],
    link: "/book-cover-design",
  },
  {
    id: "interior-typesetting",
    number: "04",
    icon: <FileText className="w-6 h-6" />,
    title: "Interior Formatting & Typesetting",
    description:
      "Impeccable book layout with custom chapter headers, drop caps, widow/orphan control, and responsive digital reflowable EPUB.",
    checkmarks: [
      "Custom interior typesetting & fonts",
      "Reflowable EPUB for Kindle & Apple",
      "Certified print-ready PDF with bleed",
      "Front matter, back matter & copyright",
    ],
    link: "/book-publishing-services",
  },
  {
    id: "printing-distribution",
    number: "05",
    icon: <Printer className="w-6 h-6" />,
    title: "Global Printing & Distribution",
    badge: "40,000+ Retailers",
    description:
      "Worldwide catalog inclusion across Amazon, Barnes & Noble, Apple Books, Google Play, and international bookstores via IngramSpark.",
    checkmarks: [
      "Hardcover, paperback & digital formats",
      "Official ISBN & barcode registration",
      "IngramSpark global distribution",
      "Author copies printed & shipped",
    ],
    link: "/book-printing",
  },
  {
    id: "book-marketing",
    number: "06",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Book Marketing & Bestseller PR",
    description:
      "Targeted marketing strategies, Amazon Ads management, press release syndication, and promotional campaigns to drive reader discovery.",
    checkmarks: [
      "Amazon Ads setup & keyword targeting",
      "National press release syndication",
      "Social media promotional graphics kit",
      "Cinematic video book trailer options",
    ],
    link: "/book-marketing",
  },
];

export function V2CoreServicesSection() {
  return (
    <section className="relative w-full bg-[#F8FAFC] text-slate-800 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-slate-200/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00A3E0]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>Comprehensive Publishing Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#0B1B36] tracking-tight leading-tight mb-3">
            Everything Required to Publish with Prestige
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you need a standalone service or complete end-to-end publishing, every deliverable is defined in an agreed scope and reviewed with author checkpoints before release.
          </p>
        </div>

        {/* 6 Services Grid with 3D Tilt & Cursor Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <V2TiltCard
                tiltAmount={7}
                spotlightColor="rgba(0, 163, 224, 0.14)"
                isLight={true}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-cyan-400/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,163,224,0.22)]"
              >
                <div>
                  {/* Top Number & Icon with 3D Pop */}
                  <div
                    style={{ transform: "translateZ(18px)" }}
                    className="flex items-center justify-between gap-3 mb-5 transition-transform duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-[#00A3E0] group-hover:bg-[#00A3E0] group-hover:text-white transition-all duration-300 shadow-xs [&_svg]:text-current [&_svg]:group-hover:text-white">
                      {service.icon}
                    </div>
                    <span className="font-serif text-3xl font-bold text-slate-300 group-hover:text-[#00A3E0]/60 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Optional Badge */}
                  {service.badge && (
                    <div style={{ transform: "translateZ(14px)" }} className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Title with 3D Depth */}
                  <h3
                    style={{ transform: "translateZ(12px)" }}
                    className="font-bold text-lg sm:text-xl text-[#0B1B36] mb-2 leading-snug group-hover:text-[#00A3E0] transition-colors"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{ transform: "translateZ(8px)" }}
                    className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-5 font-normal"
                  >
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <ul
                    style={{ transform: "translateZ(10px)" }}
                    className="space-y-2 mb-6 pb-6 border-b border-slate-100"
                  >
                    {service.checkmarks.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Link with 3D Pop */}
                <div style={{ transform: "translateZ(16px)" }}>
                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#00A3E0] group-hover:text-[#0082b3] transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </V2TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Scope CTA Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Need a custom package tailored specifically to your manuscript?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#consultation"
              className="cta-btn-base cta-btn-primary"
            >
              <span>Build Your Publishing Scope</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+18556666675"
              className="cta-btn-base cta-btn-secondary"
            >
              <span>Speak to a Senior Editor</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
