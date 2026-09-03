import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#02050e] text-slate-100">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center pt-36 pb-20 px-4">
        <div className="w-[97%] lg:w-[98%] max-w-[1850px] mx-auto text-center py-20 px-6 sm:px-12 rounded-3xl bg-[#06070a]/90 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#40bee2] mb-3 px-3.5 py-1 rounded-full bg-[#40bee2]/10 border border-[#40bee2]/30">
            Page Setup Ready
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Book Cover Design
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Award-Winning Custom Illustration & Layout
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Route: /book-cover-design</span>
            <span>•</span>
            <span className="text-[#40bee2]">Ready for Section Design</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
