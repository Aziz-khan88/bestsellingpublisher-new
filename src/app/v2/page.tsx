import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { V2HeroSection } from "@/components/v2/v2-hero-section";
import { V2AuthorPathSection } from "@/components/v2/v2-author-path-section";
import { V2PortfolioShowcase } from "@/components/v2/v2-portfolio-showcase";
import { V2ResultsImpactSection } from "@/components/v2/v2-results-impact-section";
import { V2ProcessJourneySection } from "@/components/v2/v2-process-journey-section";
import { V2CoreServicesSection } from "@/components/v2/v2-core-services-section";
import { V2DistributionMarketingSection } from "@/components/v2/v2-distribution-marketing-section";
import { V2RoyaltyGuaranteeSection } from "@/components/v2/v2-royalty-guarantee-section";
import { V2FAQSection } from "@/components/v2/v2-faq-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";
import { Footer } from "@/components/layout/footer";
import { ArrowLeftRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Selling Publisher | Professional Book Publishing & Distribution",
  description:
    "Comprehensive book publishing services: Amazon KDP setup, professional editing, custom cover design, global printing, and marketing. 100% royalties to authors.",
};

export default function V2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020818] text-slate-100 overflow-x-hidden w-full max-w-full font-sans">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* ======================================================== */}
      {/* BLOCK 1 (DARK THEME - #020818): Authority & Discovery    */}
      {/* ======================================================== */}
      {/* 2. V2 Master Hero: Authoritative Publishing Hero */}
      <V2HeroSection />

      {/* 3. Find Your Publishing Path (6 Persona Cards) + Live Stats Bar */}
      <V2AuthorPathSection />

      {/* ======================================================== */}
      {/* BLOCK 2 (LIGHT THEME): Portfolio, Roadmap & Pillars      */}
      {/* ======================================================== */}
      {/* 4. Bestseller Book Portfolio Showcase */}
      <V2PortfolioShowcase />

      {/* 5. From Manuscript to Masterpiece (5-Milestone Roadmap) */}
      <V2ProcessJourneySection />

      {/* 6. Core Publishing Pillars (Deliverables & Scope) */}
      <V2CoreServicesSection />

      {/* ======================================================== */}
      {/* BLOCK 3 (DARK THEME - #020818): Distribution & Proof     */}
      {/* ======================================================== */}
      {/* 7. Dual Feature Showcase: Global Distribution (3D Globe) & Marketing (3D Rocket) */}
      <V2DistributionMarketingSection />

      {/* 8. Real Authors. Real Results. (Outcome & Sales Impact Cards) */}
      <V2ResultsImpactSection />

      {/* ======================================================== */}
      {/* BLOCK 4 (LIGHT THEME): Guarantees, Answers & Inbound Form */}
      {/* ======================================================== */}
      {/* 9. 100% Royalty & Author Rights Charter */}
      <V2RoyaltyGuaranteeSection />

      {/* 10. Everything You Need to Know (Interactive FAQ Accordion) */}
      <V2FAQSection />

      {/* 11. Free Publishing Consultation & Scope Registration */}
      <ConsultationFormSection />

      {/* ======================================================== */}
      {/* BLOCK 5 (DARK THEME): Luxury Global Footer               */}
      {/* ======================================================== */}
      {/* 12. Footer */}
      <Footer />

      {/* Floating Demo Switcher Dock */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#0B1B36]/90 backdrop-blur-md text-white border border-cyan-400/40 rounded-full px-4 py-2.5 shadow-2xl text-xs font-semibold hover:border-cyan-400 transition-all">
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
        <span className="text-cyan-300">V2 Concept Active</span>
        <div className="w-[1px] h-4 bg-slate-700 mx-1" />
        <Link
          href="/"
          className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          title="Switch to original version to compare"
        >
          <ArrowLeftRight className="w-3.5 h-3.5 text-[#00A3E0]" />
          <span>View Original V1</span>
        </Link>
      </div>
    </div>
  );
}
