"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Phone,
  Mail,
  User,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
} from "lucide-react";

// Global helper to trigger the modal from anywhere in the app
export function openConsultationModal(initialGenre?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-consultation-modal", {
        detail: { genre: initialGenre || "" },
      })
    );
  }
}

export function V2ConsultationModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    genre: "Memoir & Autobiography",
    manuscriptStatus: "Complete Manuscript",
    notes: "",
  });

  // Listen for custom trigger events
  React.useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ genre?: string }>;
      if (customEvent.detail?.genre) {
        setFormData((prev) => ({ ...prev, genre: customEvent.detail.genre || prev.genre }));
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-consultation-modal", handleOpen);
    return () => {
      window.removeEventListener("open-consultation-modal", handleOpen);
    };
  }, []);

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant local submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-2xl bg-[#061126] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,163,224,0.3)] z-10 my-auto text-slate-100 overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer z-20"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              /* Success Confirmation */
              <div className="text-center py-8 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Consultation Request Confirmed!
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. A senior publishing director will review your project and contact you within 2 business hours.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2 text-slate-300 mt-4">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Immediate Next Steps:</span>
                  </div>
                  <p>• Initial manuscript assessment & genre category analysis</p>
                  <p>• Full breakdown of editing, cover art & distribution deliverables</p>
                  <p>• 100% Author Royalty guarantee verification</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-cyan-500 text-[#020818] font-bold text-sm hover:bg-cyan-400 transition-colors shadow-lg"
                  >
                    Back to Website
                  </button>
                </div>
              </div>
            ) : (
              /* Consultation Form */
              <div>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Instant Scope Assessment</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Discuss Your Book With a Senior Publisher
                  </h3>
                  <p className="mt-1 text-slate-300 text-xs sm:text-sm">
                    No waiting. Enter your details below to receive a custom publication blueprint, quote, and distribution roadmap.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <div className="relative flex items-center">
                        <User className="absolute left-3.5 w-4 h-4 text-cyan-400 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative flex items-center">
                        <Phone className="absolute left-3.5 w-4 h-4 text-cyan-400 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Genre */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3.5 w-4 h-4 text-cyan-400 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@example.com"
                          className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Book Genre
                      </label>
                      <div className="relative flex items-center">
                        <BookOpen className="absolute left-3.5 w-4 h-4 text-cyan-400 pointer-events-none" />
                        <select
                          value={formData.genre}
                          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                          className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
                        >
                          <option value="Memoir & Autobiography">Memoir & Autobiography</option>
                          <option value="Fiction & Thrillers">Fiction & Thrillers</option>
                          <option value="Non-Fiction & Business">Non-Fiction & Business</option>
                          <option value="Children's & Illustrated">Children's & Illustrated</option>
                          <option value="Poetry & Reflection">Poetry & Reflection</option>
                          <option value="Other / Multi-Genre">Other / Multi-Genre</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Manuscript Status & Goals */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Current Manuscript Status
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "Complete Manuscript",
                        "Work in Progress",
                        "Idea / Outline Stage",
                      ].map((status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => setFormData({ ...formData, manuscriptStatus: status })}
                          className={`py-2 px-2.5 rounded-xl text-xs font-medium border transition-all text-center ${
                            formData.manuscriptStatus === status
                              ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,163,224,0.3)] font-bold"
                              : "bg-[#020818]/60 border-white/10 text-slate-400 hover:border-white/20"
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes / Comments */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Goals or Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., Targeting Amazon KDP & Hardcover release, need ghostwriting and editorial support..."
                      className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Direct Call Quick Bar */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>100% Confidential · 100% Author Royalties</span>
                    </div>
                    <a
                      href="tel:+18556666675"
                      className="text-cyan-400 font-bold hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call (855) 666-6675</span>
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E0] to-[#00E5FF] text-[#020818] font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(0,163,224,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(0,229,255,0.65)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Project Scope...</span>
                    ) : (
                      <>
                        <span>Submit & Claim Publishing Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
