import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#04060f] text-slate-100">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Area - Components will be built here step-by-step */}
      <main className="flex-1 flex flex-col items-center justify-center pt-28 pb-16 px-4">
        <div className="w-[90%] max-w-[1750px] mx-auto text-center py-20 border border-white/10 rounded-3xl bg-slate-950/60 backdrop-blur-md p-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8] mb-3 inline-block">
            Project Setup Clean & Ready
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Component-Wise Development
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Codex ke temporary changes remove kar diye gaye hain. Ab hum ek ek component karke 
            exact reference ke mutabiq build karte hain.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
