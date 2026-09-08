import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { V2HeroSection } from "@/components/v2/v2-hero-section";
import { V2PortfolioShowcase } from "@/components/v2/v2-portfolio-showcase";
import { V2CoreServicesSection } from "@/components/v2/v2-core-services-section";
import { V2RoyaltyGuaranteeSection } from "@/components/v2/v2-royalty-guarantee-section";
import { HowWeStructureSection } from "@/components/sections/how-we-structure-section";
import { V2AuthorSpotlightSection } from "@/components/v2/v2-author-spotlight-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";
import { Footer } from "@/components/layout/footer";
import { Eye, ArrowLeftRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Selling Publisher | Professional Book Publishing & Distribution",
  description:
    "Comprehensive book publishing services: Amazon KDP setup, professional editing, custom cover design, global printing, and marketing. 100% royalties to authors.",
};

export default function HomeV2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030611] text-slate-100 overflow-x-hidden w-full max-w-full">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. V2 Master Hero: Single Authoritative Publishing Hero */}
      <V2HeroSection />

      {/* 3. Bestseller Book Portfolio Showcase (Filterable 3D Mockups) */}
      <V2PortfolioShowcase />

      {/* 4. 6 Core Publishing Pillars (Deliverables & Scope) */}
      <V2CoreServicesSection />

      {/* 5. 100% Royalty & Author Rights Protection Charter */}
      <V2RoyaltyGuaranteeSection />

      {/* 6. How We Structure Publishing (Scroll-Driven Bidirectional Roadmap) */}
      <HowWeStructureSection />

      {/* 7. Author Success Stories & Reviews */}
      <V2AuthorSpotlightSection />

      {/* 8. Free Publishing Consultation & Scope Registration */}
      <ConsultationFormSection />

      {/* 9. Footer */}
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
