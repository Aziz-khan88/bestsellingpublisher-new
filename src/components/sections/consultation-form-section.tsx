"use client";

import * as React from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone, FaShieldHalved } from "react-icons/fa6";
import { ChevronDown, ArrowRight } from "lucide-react";

// Exact 8-Column x 6-Row Dotted Matrix Grid matching user reference
function DotGrid({
  cols = 8,
  rows = 6,
  className = "",
}: {
  cols?: number;
  rows?: number;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-4 sm:gap-[18px] select-none pointer-events-none ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        // Individual staggered delay and duration for organic one-by-one sparkling
        const delay = ((i * 191 + 47) % 3200) / 1000;
        const duration = 2.4 + ((i * 67) % 1300) / 1000;
        return (
          <span
            key={i}
            className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#9bc6ee] transition-all"
            style={{
              animation: `dotSparkle ${duration}s infinite ease-in-out`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

// Exact Translucent Cyan Glass Circles matching reference design bottom-left
function TranslucentGlassCircles() {
  return (
    <div className="absolute bottom-0 left-0 w-[420px] sm:w-[500px] lg:w-[600px] h-[360px] sm:h-[440px] pointer-events-none select-none z-0 overflow-hidden">
      <svg
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="bubble1" cx="40%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.14" />
            <stop offset="70%" stopColor="#00A3E0" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bubble2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.12" />
            <stop offset="75%" stopColor="#00A3E0" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bubble3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.10" />
            <stop offset="80%" stopColor="#00A3E0" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Bubble 1: Far-Left Circle */}
        <circle
          cx="60"
          cy="340"
          r="210"
          fill="url(#bubble1)"
          stroke="#00A3E0"
          strokeWidth="1.6"
          strokeOpacity="0.45"
        />

        {/* Bubble 2: Bottom-Center Overlapping Circle */}
        <circle
          cx="240"
          cy="420"
          r="230"
          fill="url(#bubble2)"
          stroke="#00A3E0"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />

        {/* Bubble 3: Upper-Left Circle */}
        <circle
          cx="20"
          cy="180"
          r="160"
          fill="url(#bubble3)"
          stroke="#00A3E0"
          strokeWidth="1.4"
          strokeOpacity="0.35"
        />

        {/* Bubble 4: Inner Accent Circle behind the badge */}
        <circle
          cx="170"
          cy="250"
          r="110"
          stroke="#00A3E0"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
}

// 3D Elevated Hexagonal Reader Badge Component
function ReaderHexBadge() {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center select-none">
      {/* Soft Ambient Cyan Glow */}
      <div className="absolute inset-0 rounded-3xl bg-[#00A3E0]/20 blur-md transform rotate-6" />

      {/* Outer Layered Poly/Hexagon Shell */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#e0f4fc] via-[#f2faff] to-[#cbebfb] border border-[#00A3E0]/45 shadow-[0_10px_25px_rgba(0,163,224,0.22)] p-[6px] flex items-center justify-center">
        {/* Inner Elevated White Core */}
        <div className="w-full h-full rounded-xl bg-white shadow-[0_4px_12px_rgba(0,163,224,0.18)] flex items-center justify-center">
          {/* Cyan Silhouette: Author/Reader with Book */}
          <svg viewBox="0 0 36 36" fill="none" className="w-10 h-10 text-[#0080ff]">
            {/* Head */}
            <circle cx="18" cy="9.5" r="4.2" fill="#0080ff" />
            {/* Shoulders / Torso */}
            <path
              d="M12 18.5C12 16 14.5 14.5 18 14.5C21.5 14.5 24 16 24 18.5V20.5H12V18.5Z"
              fill="#0080ff"
            />
            {/* Left Open Page */}
            <path
              d="M9.5 21C12 21 15 22.5 17.5 24.5V30.5C15 29 12 28 9.5 28V21Z"
              fill="#0080ff"
            />
            {/* Right Open Page */}
            <path
              d="M26.5 21C24 21 21 22.5 18.5 24.5V30.5C21 29 24 28 26.5 28V21Z"
              fill="#0080ff"
            />
            {/* Page Strokes */}
            <path
              d="M9.5 28.5H17.5"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M18.5 28.5H26.5"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Center Spine Notch */}
            <path
              d="M18 24.5V31"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ConsultationFormSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    referral: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full bg-[#f8fbfe] text-[#0f172a] py-20 lg:py-28 overflow-hidden font-sans border-t border-slate-200/80">

      {/* Keyframes for individual sparkling dots */}
      <style>{`
        @keyframes dotSparkle {
          0%, 100% {
            opacity: 0.28;
            transform: scale(1);
            filter: drop-shadow(0 0 0px transparent);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
            filter: drop-shadow(0 0 4px #00A3E0);
          }
        }
      `}</style>

      {/* 1. Background Image with mix-blend-mode: Metallic Fountain Pen Writing on Manuscript Paper */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/consultation-pen-bg.jpg"
          alt="Publishing Consultation Background"
          fill
          priority
          className="object-cover object-right mix-blend-multiply opacity-95"
        />
        {/* Soft pure white gradient overlay on left to ensure crystal clear readability of text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-[65%] sm:w-[55%]" />
      </div>

      {/* 2. Exact Overlapping Translucent Cyan Glass Bubbles / Circles (Bottom-Left) */}
      <TranslucentGlassCircles />

      {/* 3. Dotted Matrix Grids (Exact 8 cols x 6 rows) */}
      {/* Grid 1: Top-Center */}
      <DotGrid cols={8} rows={6} className="absolute top-8 left-[36%] lg:left-[41%] z-0" />
      {/* Grid 2: Bottom-Right */}
      <DotGrid cols={8} rows={6} className="absolute bottom-6 right-8 sm:right-16 lg:right-24 z-0" />

      {/* Main Responsive Container matching Header & Footer width exactly (max-w-[1850px]) */}
      <div className="relative z-10 w-[97%] lg:w-[98%] max-w-[1850px] mx-auto px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">

          {/* LEFT COLUMN: Editorial Pitch & Book Feature Box */}
          <div className="w-full lg:w-[46%] xl:w-[44%] flex flex-col justify-center">

            {/* Eyebrow Header with Cyan Line */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[14px] sm:text-[15px] font-bold tracking-widest text-[#00A3E0] uppercase">
                DISCUSS
              </span>
              <span className="text-[14px] sm:text-[15px] font-bold tracking-widest text-[#0f172a] uppercase">
                YOUR IDEAS
              </span>
              <div className="w-12 h-[2.5px] bg-[#00A3E0] ml-1 rounded-full" />
            </div>

            {/* Main Headline (Editorial Serif Display) */}
            <h2 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-serif font-bold text-[#0f172a] leading-[1.14] tracking-tight">
              Do You Have a Story Plot
              <br />
              In Mind? <span className="text-[#00A3E0]">Tell Us About It!</span>
            </h2>

            {/* Narrative Body Copy */}
            <p className="text-[16px] sm:text-[17.5px] text-slate-600 leading-relaxed max-w-xl mt-6">
              We value your time and energy, which is why we&apos;re here to help you transform your narrative into a beautifully written book.
            </p>

            {/* Feature Badge Box: 3D Hexagon with Reader Icon */}
            <div className="mt-10 sm:mt-14 flex items-center gap-5 select-none">
              <ReaderHexBadge />

              {/* Vertical Cyan Accent Divider */}
              <div className="w-[2.5px] h-14 bg-[#00A3E0] shrink-0 rounded-full" />

              {/* Copy */}
              <div>
                <h4 className="text-[18px] sm:text-[20px] font-bold text-[#0f172a]">
                  It&apos;s Time to Write Your Book!
                </h4>
                <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed mt-1.5 max-w-md">
                  Craft tales that transport, captivate, and linger in minds with Best Selling Publisher!
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Floating Registration Card */}
          <div className="w-full lg:w-[54%] xl:w-[56%] relative flex items-center justify-center lg:justify-start lg:pl-8 xl:pl-16 2xl:pl-24 pr-2 sm:pr-6">

            {/* Animated Rotating Laser Border Shell */}
            <div className="relative z-10 w-full max-w-[540px] sm:max-w-[560px] xl:max-w-[580px] rounded-[30px] p-[2.5px] overflow-hidden shadow-[0_20px_50px_rgba(0,163,224,0.14)] bg-[#dbeafe]">
              
              {/* 360deg Rotating Laser Beam */}
              <div
                className="absolute -inset-[350%] animate-border-beam pointer-events-none"
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 300deg, rgba(0, 163, 224, 0.4) 330deg, #00A3E0 350deg, #ffffff 358deg, transparent 360deg)`,
                }}
              />

              {/* Inner Solid White Card Surface */}
              <div className="relative z-10 bg-white rounded-[28px] p-7 sm:p-8 lg:p-9 border border-[#e2e8f0]">
                
                {/* Form Header matching exact feather badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm border border-[#7ec1f3]/50">
                    <Image
                      src="/feather-badge-clean.png"
                      alt="Feather Quill"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0f172a] tracking-tight">
                    Fill Your Registration
                  </h3>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Two-Column Inputs Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Left Sub-Column */}
                    <div className="space-y-3.5">
                      {/* Name Input */}
                      <div className="relative flex items-center h-[46px] rounded-[10px] border border-[#e2e8f0] bg-white px-3.5 focus-within:border-[#0067fe] focus-within:ring-2 focus-within:ring-[#0067fe]/15 transition-all">
                        <FaUser className="w-3.5 h-3.5 text-[#1e293b] shrink-0 mr-2.5" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent text-[14px] text-[#0f172a] placeholder:text-slate-400 outline-none"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="relative flex items-center h-[46px] rounded-[10px] border border-[#e2e8f0] bg-white px-3.5 focus-within:border-[#0067fe] focus-within:ring-2 focus-within:ring-[#0067fe]/15 transition-all">
                        <FaPhone className="w-3.5 h-3.5 text-[#1e293b] shrink-0 mr-2.5" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent text-[14px] text-[#0f172a] placeholder:text-slate-400 outline-none"
                        />
                      </div>
                    </div>

                    {/* Right Sub-Column */}
                    <div className="space-y-3.5 flex flex-col">
                      {/* Email Input */}
                      <div className="relative flex items-center h-[46px] rounded-[10px] border border-[#e2e8f0] bg-white px-3.5 focus-within:border-[#0067fe] focus-within:ring-2 focus-within:ring-[#0067fe]/15 transition-all">
                        <svg
                          className="w-4 h-4 text-[#1e293b] shrink-0 mr-2.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent text-[14px] text-[#0f172a] placeholder:text-slate-400 outline-none"
                        />
                      </div>

                      {/* Comments Textarea */}
                      <div className="h-[105px] min-h-[105px] rounded-[10px] border border-[#e2e8f0] bg-white px-3.5 py-2.5 focus-within:border-[#0067fe] focus-within:ring-2 focus-within:ring-[#0067fe]/15 transition-all flex flex-col justify-between">
                        <textarea
                          name="comments"
                          placeholder="Comments"
                          value={formData.comments}
                          onChange={handleChange}
                          className="w-full flex-1 bg-transparent text-[14px] text-[#0f172a] placeholder:text-slate-400 outline-none resize-none leading-relaxed"
                        />
                        <div className="self-end text-slate-300 pointer-events-none select-none">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <line x1="8" y1="2" x2="2" y2="8" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" />
                            <line x1="9" y1="5" x2="5" y2="9" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" />
                            <line x1="9" y1="8" x2="8" y2="9" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown: How did you hear about us? */}
                  <div className="pt-0.5">
                    <label className="block text-[12.5px] font-medium text-slate-700 mb-1.5">
                      How did you hear about us?{" "}
                      <span className="text-slate-400 font-normal text-xs">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full h-[46px] appearance-none rounded-[10px] border border-[#e2e8f0] bg-white px-3.5 text-[14px] text-slate-700 outline-none focus:border-[#0067fe] focus:ring-2 focus:ring-[#0067fe]/15 transition-all pr-10 cursor-pointer"
                      >
                        <option value="">Choose one</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media (Facebook / Instagram / X)</option>
                        <option value="referral">Friend or Colleague Referral</option>
                        <option value="ad">Online Advertisement</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1e293b] pointer-events-none" />
                    </div>
                  </div>

                  {/* Bottom Row: Exact Shield Reassurance & Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Privacy Reassurance with exact outline shield */}
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-6 h-7.5 shrink-0">
                        <Image
                          src="/shield-clean.png"
                          alt="Privacy Shield"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[11px] sm:text-[11.5px] text-slate-500 leading-tight">
                        We use your details only to respond to your request.
                        <br />
                        <span className="hover:underline cursor-pointer text-slate-600">
                          See our privacy policy.
                        </span>
                      </p>
                    </div>

                    {/* Submit Button in exact #0067fe blue */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto h-[46px] px-8 rounded-[10px] bg-[#0067fe] hover:bg-[#0057e0] text-white font-semibold text-[15px] flex items-center justify-center gap-2 shadow-[0_6px_18px_rgba(0,103,254,0.32)] transition-all duration-200 shrink-0 active:scale-95 cursor-pointer"
                    >
                      <span>Submit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
