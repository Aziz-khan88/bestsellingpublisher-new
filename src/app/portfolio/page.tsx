import * as React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { V2PortfolioShowcase } from "@/components/v2/v2-portfolio-showcase";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";
import { Sparkles, BookOpen, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Bestselling Book Portfolio | Best Selling Publisher",
  description:
    "Explore our published titles across fiction, children's books, memoirs, and non-fiction. Review authors, scope of work, and global distribution.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030611] text-slate-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Page Hero Header (Standard Max-Width) */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-gradient-to-b from-[#060D1E] to-[#030611]">
          <div className="relative w-full max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Published Titles Showcase</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Our Published Bestsellers
            </h1>

            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
              Browse books published and distributed worldwide by Best Selling Publisher. Discover author stories, custom cover designs, and publication scopes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                100% Author Royalty Retained
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Amazon & IngramSpark Distributed
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#00E5FF]" />
                Hardcover, Paperback & Ebook
              </span>
            </div>
          </div>
        </section>

        {/* Standard Max-Width Portfolio Showcase Component */}
        <V2PortfolioShowcase />

        {/* Free Consultation Section */}
        <ConsultationFormSection />
      </main>

      <Footer />
    </div>
  );
}
