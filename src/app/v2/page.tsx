import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { V2PublishFlowHero } from "@/components/v2/v2-publishflow-hero";
import { V2ManuscriptJourneyHero } from "@/components/v2/v2-manuscript-journey-hero";
import { V2HeroSection } from "@/components/v2/v2-hero-section";
import { V2AuthorPathSection } from "@/components/v2/v2-author-path-section";
import { V2ExpandingBookShowcase } from "@/components/v2/v2-expanding-book-showcase";
import { V2PortfolioShowcase } from "@/components/v2/v2-portfolio-showcase";
import { V2ResultsImpactSection } from "@/components/v2/v2-results-impact-section";
import { V2ProcessJourneySection } from "@/components/v2/v2-process-journey-section";
import { V2CoreServicesSection } from "@/components/v2/v2-core-services-section";
import { V2DistributionMarketingSection } from "@/components/v2/v2-distribution-marketing-section";
import { V2MidpageCtaSection } from "@/components/v2/v2-midpage-cta-section";
import { V2RoyaltyGuaranteeSection } from "@/components/v2/v2-royalty-guarantee-section";
import { V2FAQSection } from "@/components/v2/v2-faq-section";
import { V2ConsultationModal } from "@/components/v2/v2-consultation-modal";
import { V2SubscriptionPopup } from "@/components/v2/v2-subscription-popup";
import { V2FloatingDock } from "@/components/v2/v2-floating-dock";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";
import { Footer } from "@/components/layout/footer";

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
      {/* PUBLISHFLOW SIGNATURE HERO (Warm Cream & Ambient Video)  */}
      {/* ======================================================== */}
      <V2PublishFlowHero hideNav />

      {/* ======================================================== */}
      {/* MANUSCRIPT JOURNEY SHOWCASE (Second Video Section)        */}
      {/* ======================================================== */}
      <V2ManuscriptJourneyHero hideNav />

      {/* ======================================================== */}
      {/* BLOCK 1 (DARK THEME - #020818): Authority & Discovery    */}
      {/* ======================================================== */}
      {/* 2. V2 Master Hero: Authoritative Publishing Hero */}
      <V2HeroSection />

      {/* 3. Find Your Publishing Path (6 Persona Cards) + Live Stats Bar */}
      <V2AuthorPathSection />

      {/* 4. Interactive Flagship Book Accordion Showcase (Inspired by Framer Sliding Showcase) */}
      <V2ExpandingBookShowcase />

      {/* ======================================================== */}
      {/* BLOCK 2 (LIGHT THEME): Portfolio, Roadmap & Pillars      */}
      {/* ======================================================== */}
      {/* 5. Bestseller Book Portfolio Showcase */}
      <V2PortfolioShowcase />

      {/* 5. From Manuscript to Masterpiece (5-Milestone Roadmap) */}
      <V2ProcessJourneySection />

      {/* 6. Core Publishing Pillars (Deliverables & Scope) */}
      <V2CoreServicesSection />

      {/* 7. Restored Live Site Signature Mid-Page CTA Section ("Would you like to know a secret? Less Is Never More for Us" + Quick Form + 4 Trust Badges) */}
      <V2MidpageCtaSection />

      {/* 8. Dual Feature Showcase: Global Distribution (3D Globe) & Marketing (3D Rocket) */}
      <V2DistributionMarketingSection />

      {/* 9. Real Authors. Real Results. (Outcome & Sales Impact Cards) */}
      <V2ResultsImpactSection />

      {/* 10. 100% Royalty & Author Rights Charter */}
      <V2RoyaltyGuaranteeSection />

      {/* 10. Everything You Need to Know (Interactive FAQ Accordion) */}
      <V2FAQSection />

      {/* 11. Free Publishing Consultation & Scope Registration */}
      <ConsultationFormSection />

      {/* ======================================================== */}
      {/* BLOCK 5 (DARK THEME): Luxury Global Footer               */}
      {/* ======================================================== */}
      {/* 13. Footer */}
      <Footer />

      {/* Global Consultation Modal Drawer */}
      <V2ConsultationModal />

      {/* Multi-Input Author Subscription & Scope Customizer Popup */}
      <V2SubscriptionPopup />

      {/* Floating Action Dock */}
      <V2FloatingDock />
    </div>
  );
}
