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
  DollarSign,
  Layers,
  Clock,
  Tag,
  Check,
  HelpCircle,
} from "lucide-react";

// Global trigger helper
export function openSubscriptionPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-subscription-popup"));
  }
}

const PUBLISHING_NEEDS = [
  { id: "ghostwriting", label: "Ghostwriting & Writing" },
  { id: "editing", label: "Comprehensive Editing" },
  { id: "cover", label: "Custom Cover & Spine Art" },
  { id: "formatting", label: "Interior Print & eBook Layout" },
  { id: "distribution", label: "Global Amazon & IngramSpark" },
  { id: "marketing", label: "Book Marketing & PR Launch" },
  { id: "illustration", label: "Children's Book Illustrations" },
  { id: "audiobook", label: "Audiobook Production" },
];

const PACKAGES = [
  {
    id: "starter",
    name: "Starter Author Package",
    tag: "Essential Launch",
    desc: "Amazon KDP setup, professional layout, custom ebook/paperback cover & ISBN.",
  },
  {
    id: "bestseller",
    name: "Bestseller Standard Suite",
    tag: "Most Popular",
    desc: "Full copy & line edit, bespoke illustration/cover, 40K global bookstore distribution.",
    popular: true,
  },
  {
    id: "vip",
    name: "VIP Global Launch & PR",
    tag: "Maximum Impact",
    desc: "Ghostwriting guidance, hardcover + audio, national PR campaigns & bestseller ranking.",
  },
  {
    id: "custom",
    name: "Custom Tailored Package",
    tag: "Flexible Scope",
    desc: "Pick and choose exact deliverables customized to your manuscript's requirements.",
  },
];

const BUDGET_RANGES = [
  "Under $1,500",
  "$1,500 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+ (VIP Suite)",
];

const MANUSCRIPT_STATUSES = [
  "Complete Manuscript",
  "Work in Progress (Drafting)",
  "Idea / Outline Stage",
  "Published Book (Need Relaunch/PR)",
];

export function V2SubscriptionPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Form state
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [selectedNeeds, setSelectedNeeds] = React.useState<string[]>([
    "editing",
    "cover",
    "distribution",
  ]);
  const [selectedPackage, setSelectedPackage] = React.useState("bestseller");
  const [selectedBudget, setSelectedBudget] = React.useState("$3,000 – $5,000");
  const [manuscriptStatus, setManuscriptStatus] = React.useState("Complete Manuscript");
  const [timeline, setTimeline] = React.useState("Next 30 Days");
  const [notes, setNotes] = React.useState("");

  // Toggle Needs
  const toggleNeed = (id: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Event listener for manual open
  React.useEffect(() => {
    const handleOpen = () => {
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-subscription-popup", handleOpen);
    return () => {
      window.removeEventListener("open-subscription-popup", handleOpen);
    };
  }, []);

  // Automatic timed popup trigger (once per session after 7 seconds)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const hasShown = sessionStorage.getItem("bsp_subscription_popup_shown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("bsp_subscription_popup_shown", "true");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle ESC key and body lock
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", duration: 0.38, bounce: 0.12 }}
            className="relative w-full max-w-3xl lg:max-w-4xl max-h-[92vh] flex flex-col bg-[#061126] border border-cyan-500/40 rounded-3xl shadow-[0_25px_80px_rgba(0,163,224,0.35)] z-10 my-auto text-slate-100 overflow-hidden font-sans"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-96 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-64 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer z-30 shadow-sm"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {submitted ? (
              /* Success Screen */
              <div className="p-8 sm:p-12 text-center overflow-y-auto space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Subscription & Scope Request Confirmed
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    Welcome to the Best Selling Publisher Circle!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mt-2 leading-relaxed">
                    Thank you, <strong className="text-cyan-300">{name || "Author"}</strong>. We have registered your custom publishing requirements and locked in your promotional publishing rate.
                  </p>
                </div>

                {/* Voucher Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-[#0B1B36] to-blue-950/50 border-2 border-dashed border-cyan-400/60 max-w-md mx-auto text-center shadow-lg shadow-cyan-500/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Exclusive Subscriber Voucher
                  </span>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-[#00E5FF] tracking-widest my-1 drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                    VIP-AUTHOR-2026
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Saves up to $500 on all custom packages + Includes Free ISBN & Barcode Registration.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-5 rounded-2xl bg-[#0B1B36]/80 border border-cyan-500/30 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-2 text-slate-300">
                  <div className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span className="text-slate-400">Selected Package:</span>
                    <strong className="text-white">
                      {PACKAGES.find((p) => p.id === selectedPackage)?.name}
                    </strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span className="text-slate-400">Allocated Budget:</span>
                    <strong className="text-emerald-400 font-bold">{selectedBudget}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span className="text-slate-400">Manuscript Status:</span>
                    <span className="text-white">{manuscriptStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Assigned Director:</span>
                    <span className="text-cyan-300 font-semibold">Priority Queue (Under 2h Review)</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#00A3E0] to-[#0284C7] hover:from-[#40bee2] hover:to-[#00A3E0] text-white font-bold text-sm shadow-[0_4px_20px_rgba(0,163,224,0.4)] transition-all cursor-pointer"
                  >
                    Done & Return to Site
                  </button>

                  <a
                    href="tel:+18556666675"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-300" />
                    <span>Call Directly: (855) 666-6675</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Multi-Input Customizer Form */
              <div className="flex flex-col h-full overflow-hidden">
                {/* Modal Header */}
                <div className="px-6 sm:px-8 pt-6 sm:pt-7 pb-4 border-b border-cyan-500/20 bg-gradient-to-r from-[#0A1835] via-[#061126] to-[#0A1F3E] shrink-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#00E5FF]" />
                      <span>Author Subscription & Project Scope</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                      ⚡ 20% Subscriber Discount Applied
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                    Tell Us What You Need –{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00A3E0] to-[#40bee2] font-serif">
                      We Build to Your Package & Budget
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    Select your exact requirements, preferred package tier, and budget. Our publishing directors will engineer a tailored proposal with 100% royalty guarantees.
                  </p>
                </div>

                {/* Form Body (Scrollable with elegant styling) */}
                <form
                  onSubmit={handleSubmit}
                  className="flex-1 overflow-y-auto px-6 sm:px-8 py-5 space-y-6 text-slate-200"
                >
                  {/* =================================================== */}
                  {/* SECTION 1: CUSTOMER DATA (Name, Email, Phone)       */}
                  {/* =================================================== */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <User className="w-4 h-4 text-cyan-400" />
                        <span>1. Your Author Contact Information *</span>
                      </label>
                      <span className="text-[11px] text-slate-400">Strictly confidential</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Full Name *"
                          className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address *"
                          className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone / WhatsApp *"
                          className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
                        />
                      </div>
                    </div>
                  </div>

                  {/* =================================================== */}
                  {/* SECTION 2: THEIR NEED (Publishing Services Chips)    */}
                  {/* =================================================== */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>2. What Does Your Book Need? (Select All That Apply)</span>
                      </label>
                      <span className="text-[11px] text-cyan-300 font-semibold">
                        {selectedNeeds.length} selected
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                      {PUBLISHING_NEEDS.map((item) => {
                        const isChecked = selectedNeeds.includes(item.id);
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => toggleNeed(item.id)}
                            className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between gap-1.5 cursor-pointer select-none ${
                              isChecked
                                ? "bg-gradient-to-r from-cyan-950/90 to-[#0B2545] border-2 border-[#00E5FF] text-white shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                                : "bg-[#020818]/80 border-slate-700/80 text-slate-300 hover:border-cyan-500/50 hover:bg-[#0B1B36] hover:text-white"
                            }`}
                          >
                            <span className="truncate">{item.label}</span>
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border ${
                                isChecked
                                  ? "bg-[#00E5FF] border-[#00E5FF] text-[#020818]"
                                  : "border-slate-600 bg-slate-800/60"
                              }`}
                            >
                              {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* =================================================== */}
                  {/* SECTION 3: THEIR PACKAGE TIER                        */}
                  {/* =================================================== */}
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 mb-2.5">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span>3. Choose Your Preferred Package Level</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {PACKAGES.map((pkg) => {
                        const isSelected = selectedPackage === pkg.id;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => setSelectedPackage(pkg.id)}
                            className={`relative p-3.5 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                              isSelected
                                ? "bg-gradient-to-br from-cyan-950/90 via-[#0B1F3D] to-[#061126] border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,163,224,0.3)]"
                                : "bg-[#020818]/80 border-slate-700/80 hover:border-cyan-500/50 hover:bg-[#0B1B36]/80 text-slate-300"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div>
                                <h4 className="text-xs sm:text-sm font-bold text-white">
                                  {pkg.name}
                                </h4>
                                <span className="inline-block text-[10px] font-bold text-[#00E5FF] uppercase tracking-wider mt-0.5">
                                  {pkg.tag}
                                </span>
                              </div>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? "border-cyan-400 bg-[#00A3E0] text-white"
                                    : "border-slate-600 bg-slate-800/60"
                                }`}
                              >
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-snug">
                              {pkg.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* =================================================== */}
                  {/* SECTION 4: THEIR BUDGET RANGE                        */}
                  {/* =================================================== */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-emerald-400" />
                        <span>4. What Is Your Estimated Budget Range?</span>
                      </label>
                      <span className="text-[11px] text-slate-400 font-medium">Flexible payment plans available</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {BUDGET_RANGES.map((range) => {
                        const isSelected = selectedBudget === range;
                        return (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setSelectedBudget(range)}
                            className={`py-2 px-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer select-none ${
                              isSelected
                                ? "bg-gradient-to-r from-emerald-950/90 to-slate-900 border-2 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)] ring-1 ring-emerald-400/50"
                                : "bg-[#020818]/80 border-slate-700/80 text-slate-300 hover:bg-[#0B1B36] hover:border-emerald-500/50 hover:text-white"
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* =================================================== */}
                  {/* SECTION 5: MANUSCRIPT STAGE & TIMELINE              */}
                  {/* =================================================== */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Current Manuscript Stage
                      </label>
                      <select
                        value={manuscriptStatus}
                        onChange={(e) => setManuscriptStatus(e.target.value)}
                        className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer shadow-inner"
                      >
                        {MANUSCRIPT_STATUSES.map((st) => (
                          <option key={st} value={st} className="bg-[#061126] text-white">
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-1.5">
                        Desired Launch Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer shadow-inner"
                      >
                        <option value="Immediate (Ready Now)" className="bg-[#061126] text-white">Immediate (Ready Now)</option>
                        <option value="Next 30 Days" className="bg-[#061126] text-white">Next 30 Days</option>
                        <option value="1 – 3 Months" className="bg-[#061126] text-white">1 – 3 Months</option>
                        <option value="3 – 6 Months" className="bg-[#061126] text-white">3 – 6 Months</option>
                        <option value="Exploring Options" className="bg-[#061126] text-white">Exploring Options</option>
                      </select>
                    </div>
                  </div>

                  {/* SECTION 6: OPTIONAL NOTES */}
                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5">
                      Specific Notes or Book Synopsis (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. My book is a 65,000-word historical thriller, looking to publish on Amazon & Barnes & Noble..."
                      className="w-full bg-[#020818]/90 border border-cyan-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner resize-none"
                    />
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-2 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-slate-300">
                      <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>100% Royalties & Copyright Retained</span>
                      </span>
                      <span className="hidden sm:inline text-slate-600">•</span>
                      <span className="hidden sm:inline text-slate-400">Zero Obligation</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#00A3E0] via-[#0284C7] to-[#0077B6] hover:from-[#40bee2] hover:to-[#00A3E0] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,163,224,0.4)] hover:shadow-[0_6px_25px_rgba(0,163,224,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {loading ? (
                        <span>Configuring Scope...</span>
                      ) : (
                        <>
                          <span>Submit & Claim 20% Author Discount</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
