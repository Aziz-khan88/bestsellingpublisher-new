"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";
import { openConsultationModal } from "@/components/v2/v2-consultation-modal";

export function V2FloatingDock() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#0B1B36]/90 backdrop-blur-md text-white border border-cyan-400/40 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-2xl text-xs font-semibold hover:border-cyan-400 transition-all">
      <button
        type="button"
        onClick={() => openConsultationModal()}
        className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors cursor-pointer bg-cyan-500/20 px-2.5 py-1 rounded-full border border-cyan-400/40 active:scale-95"
      >
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
        <span>⚡ Instant Quote</span>
      </button>

      <div className="w-[1px] h-4 bg-slate-700 mx-1" />

      <Link
        href="/"
        className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
        title="Switch to original version to compare"
      >
        <ArrowLeftRight className="w-3.5 h-3.5 text-[#00A3E0]" />
        <span className="hidden sm:inline">View Original V1</span>
      </Link>
    </div>
  );
}
