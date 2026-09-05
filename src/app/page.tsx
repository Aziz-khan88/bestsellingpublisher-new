import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { MainHeroSection } from "@/components/sections/main-hero-section";
import { OneMissionHeroSection } from "@/components/sections/one-mission-hero-section";
import { AmazonServicesShowcaseSection } from "@/components/sections/amazon-services-showcase-section";
import { HowWeStructureSection } from "@/components/sections/how-we-structure-section";
import { BuiltAroundManuscriptSection } from "@/components/sections/built-around-manuscript-section";
import { IntendedAudienceSection } from "@/components/sections/intended-audience-section";
import { AmazonPublishingWorkflowSection } from "@/components/sections/amazon-publishing-workflow-section";
import { PublishingSecretSection } from "@/components/sections/publishing-secret-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#04060f] text-slate-100">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Top Main Hero Section: Prepare Your Book for Every Channel */}
      <MainHeroSection />

      {/* 3. Hero Section 2: One Mission: Your Story, Everywhere (3D Glass Shelves & 4 Books) */}
      <OneMissionHeroSection />

      {/* 3. Hero Section 2: Amazon Publishing Services (Magical 3D Open Book) */}
      <AmazonServicesShowcaseSection />

      {/* 4. How We Structure Publishing Support Section (Synchronized Sequential Connecting Cards) */}
      <HowWeStructureSection />

      {/* 5. Built Around Your Manuscript Section */}
      <BuiltAroundManuscriptSection />

      {/* 6. Prepare Your Work for Its Intended Audience and Channels */}
      <IntendedAudienceSection />

      {/* 7. Amazon Publishing Workflow Section */}
      <AmazonPublishingWorkflowSection />

      {/* 8. Publishing Secret Section */}
      <PublishingSecretSection />

      {/* 9. Consultation Registration CTA Section (Directly above Footer) */}
      <ConsultationFormSection />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
