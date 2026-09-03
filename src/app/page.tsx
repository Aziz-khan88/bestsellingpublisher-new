import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { AmazonPublishingWorkflowSection } from "@/components/sections/amazon-publishing-workflow-section";
import { PublishingSecretSection } from "@/components/sections/publishing-secret-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#04060f] text-slate-100">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center pt-28 pb-16 px-4">
        <div className="w-[90%] max-w-[1750px] mx-auto text-center py-20 border border-white/10 rounded-3xl bg-slate-950/60 backdrop-blur-md p-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8] mb-3 inline-block">
            Project Setup Clean & Ready
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Component-Wise Development
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Every section is built with pixel precision to match reference designs seamlessly.
          </p>
        </div>
      </main>

      {/* 2. Amazon Publishing Workflow Section */}
      <AmazonPublishingWorkflowSection />

      {/* 3. Publishing Secret Section */}
      <PublishingSecretSection />

      {/* 4. Consultation Registration CTA Section (Directly above Footer) */}
      <ConsultationFormSection />

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
