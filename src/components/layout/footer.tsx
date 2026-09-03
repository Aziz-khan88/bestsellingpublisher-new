"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa6";

// Exact Vector Open Book SVG matching reference icon media_1788461810204.png
function CyanBookIcon({ className = "w-6 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0 drop-shadow-[0_0_8px_rgba(0,163,224,0.9)]`}
    >
      {/* Center Spine Line */}
      <path
        d="M48 24V52"
        stroke="#00A3E0"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Left Inner Page */}
      <path
        d="M48 24C41 19 35 15 29 14V42C35 44 41 48 48 52"
        stroke="#00A3E0"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Inner Page */}
      <path
        d="M48 24C55 19 61 15 67 14V42C61 44 55 48 48 52"
        stroke="#00A3E0"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Middle Page Layer */}
      <path
        d="M29 22H23V46C31 48 39 50 48 52"
        stroke="#00A3E0"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Middle Page Layer */}
      <path
        d="M67 22H73V46C65 48 57 50 48 52"
        stroke="#00A3E0"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Outer Cover Layer */}
      <path
        d="M23 27H18V50C27 52 37 53 48 54"
        stroke="#00A3E0"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Outer Cover Layer */}
      <path
        d="M73 27H78V50C69 52 59 53 48 54"
        stroke="#00A3E0"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Center V Notch */}
      <path
        d="M48 53L46 56L48 57L50 56L48 53Z"
        fill="#00A3E0"
        stroke="#00A3E0"
        strokeWidth="1"
      />
    </svg>
  );
}

// Glowing Cyan Line with Center Flare Dot for Column Headers
function TitleUnderline() {
  return (
    <div className="relative w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E0] to-transparent my-3.5 flex items-center justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0]" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-black text-slate-200 pt-24 sm:pt-28 pb-4 sm:pb-5 overflow-hidden font-sans border-t border-white/5">
      {/* Background Graphic: Antique Leather Book, Inkwell & Feather Quill (Right Edge) */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[460px] lg:w-[580px] xl:w-[650px] pointer-events-none select-none z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/footer-quill-bg.jpg"
            alt="Vintage Book with Quill in Inkwell"
            fill
            priority
            className="object-contain object-right-bottom opacity-80"
          />
          {/* Subtle gradient to dissolve any soft boundaries into pure solid black on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90" />
        </div>
      </div>

      {/* Main Responsive Shell matching Header width exactly */}
      <div className="relative z-10 w-[97%] lg:w-[98%] max-w-[1850px] mx-auto">
        {/* Main 5-Column Row with Exact Baseline Top-Alignment */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 pb-12 sm:pb-14">
          
          {/* Column 1: Brand Logo, Narrative Summary & Social Channels (28% Width) */}
          <div className="w-full lg:w-[27%] lg:pr-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block select-none mb-3">
                <div className="relative w-[210px] sm:w-[235px] h-[48px] sm:h-[54px]">
                  <Image
                    src="/logo.png"
                    alt="Best Selling Publisher"
                    fill
                    className="object-contain object-left drop-shadow-[0_0_15px_rgba(64,190,226,0.35)]"
                  />
                </div>
              </Link>

              <p className="text-[13.5px] sm:text-[14px] text-slate-300 leading-relaxed max-w-sm mt-3 font-normal">
                Best Selling Publisher supports authors with editing, design, formatting, publishing setup, 
                and marketing services selected in an approved project scope.
              </p>
            </div>

            {/* 7 Social Media Ring Icons using Official FontAwesome 6 Suite */}
            <div className="mt-8 flex items-center gap-2.5 flex-wrap">
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700/90 bg-black hover:border-[#00A3E0] hover:text-[#00A3E0] text-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,163,224,0.4)] active:scale-95"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700/90 bg-black hover:border-[#00A3E0] hover:text-[#00A3E0] text-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,163,224,0.4)] active:scale-95"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700/90 bg-black hover:border-[#00A3E0] hover:text-[#00A3E0] text-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,163,224,0.4)] active:scale-95"
                aria-label="X"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>

              {/* Pinterest */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700/90 bg-black hover:border-[#00A3E0] hover:text-[#00A3E0] text-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,163,224,0.4)] active:scale-95"
                aria-label="Pinterest"
              >
                <FaPinterestP className="w-3.5 h-3.5" />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700/90 bg-black hover:border-[#00A3E0] hover:text-[#00A3E0] text-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,163,224,0.4)] active:scale-95"
                aria-label="TikTok"
              >
                <FaTiktok className="w-3.5 h-3.5" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700/90 bg-black hover:border-[#00A3E0] hover:text-[#00A3E0] text-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,163,224,0.4)] active:scale-95"
                aria-label="YouTube"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700/90 bg-black hover:border-[#00A3E0] hover:text-[#00A3E0] text-slate-200 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_0_10px_rgba(0,163,224,0.4)] active:scale-95"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Animated Vertical Divider 1 with glowing cyan top dot */}
          <div className="hidden lg:flex flex-col items-center self-stretch mx-4">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#00A3E0] via-slate-800/80 to-transparent relative">
              <span className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0] animate-pulse" />
            </div>
          </div>

          {/* Column 2: QUICK LINKS (Generous Spacing between List Items) */}
          <div className="w-full lg:w-[13%]">
            <h4 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-white">
              QUICK LINKS
            </h4>
            <TitleUnderline />

            <ul className="space-y-6 sm:space-y-6.5 text-[14px] sm:text-[14.5px] text-white pt-1">
              {[
                { name: "Home", href: "/" },
                { name: "Blogs", href: "/blogs" },
                { name: "About Us", href: "/about-us" },
                { name: "Book Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 hover:text-[#00A3E0] transition-colors group"
                  >
                    <span className="text-[#00A3E0] font-bold text-sm select-none transition-transform group-hover:translate-x-0.5">
                      &gt;
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Animated Vertical Divider 2 with glowing cyan top dot */}
          <div className="hidden lg:flex flex-col items-center self-stretch mx-4">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#00A3E0] via-slate-800/80 to-transparent relative">
              <span className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0] animate-pulse" />
            </div>
          </div>

          {/* Column 3: OUR SERVICES (Exact Cyan Open Book Icon + Generous Spacing) */}
          <div className="w-full lg:w-[18%]">
            <h4 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-white">
              OUR SERVICES
            </h4>
            <TitleUnderline />

            <ul className="space-y-4 sm:space-y-4.5 text-[14px] sm:text-[14.5px] text-white pt-1">
              {[
                { name: "Book Publishing", href: "/book-publishing-services" },
                { name: "Digital Book Publishing", href: "/book-publishing-services" },
                { name: "Amazon Publishing", href: "/book-publishing-services" },
                { name: "Self Publishing", href: "/book-publishing-services" },
                { name: "Children Illustration", href: "/book-cover-design" },
                { name: "Amazon Book Publishing", href: "/book-publishing-services" },
                { name: "Ebook Publishing", href: "/book-publishing-services" },
              ].map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="flex items-center gap-3 hover:text-[#00A3E0] transition-colors group"
                  >
                    <CyanBookIcon className="w-5 h-4 text-[#00A3E0]" />
                    <span>{svc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Animated Vertical Divider 3 with glowing cyan top dot */}
          <div className="hidden lg:flex flex-col items-center self-stretch mx-4">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#00A3E0] via-slate-800/80 to-transparent relative">
              <span className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0] animate-pulse" />
            </div>
          </div>

          {/* Column 4: CONTACT US (Exact Icons, White Text & Generous Spacing) */}
          <div className="w-full lg:w-[19%]">
            <h4 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-white">
              CONTACT US
            </h4>
            <TitleUnderline />

            <ul className="space-y-5 sm:space-y-5.5 text-[14px] sm:text-[14.5px] text-white pt-1">
              {/* Email 1 */}
              <li className="flex items-start gap-3">
                <svg className="w-[18px] h-[14px] shrink-0 mt-1" viewBox="0 0 24 18" fill="none" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="24" height="18" rx="2" />
                  <path d="M2 2L12 10L22 2" />
                </svg>
                <a
                  href="mailto:inquiries@bestsellingpublisher.com"
                  className="hover:text-[#00A3E0] transition-colors break-all leading-snug"
                >
                  inquiries@bestsellingpublisher.com
                </a>
              </li>

              {/* Email 2 */}
              <li className="flex items-start gap-3">
                <svg className="w-[18px] h-[14px] shrink-0 mt-1" viewBox="0 0 24 18" fill="none" stroke="#00A3E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="24" height="18" rx="2" />
                  <path d="M2 2L12 10L22 2" />
                </svg>
                <a
                  href="mailto:info@bestsellingpublisher.com"
                  className="hover:text-[#00A3E0] transition-colors break-all leading-snug"
                >
                  info@bestsellingpublisher.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <FaPhone className="w-4 h-4 text-[#00A3E0] shrink-0 mt-1" />
                <a
                  href="tel:8556666675"
                  className="hover:text-[#00A3E0] transition-colors leading-snug font-medium"
                >
                  (855) 666-6675
                </a>
              </li>

              {/* Address 1 */}
              <li className="flex items-start gap-3">
                <svg className="w-4 h-5 fill-[#00A3E0] shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="leading-snug text-white">
                  9518 Mykawa Road,<br />
                  Houston, TX 77048
                </span>
              </li>

              {/* Address 2 */}
              <li className="flex items-start gap-3">
                <svg className="w-4 h-5 fill-[#00A3E0] shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="leading-snug text-white">
                  445 S Figueroa St,<br />
                  Los Angeles, CA 90071
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: DMCA & Payment Cards Box + Calligraphy Slogan (23% Width) */}
          <div className="w-full lg:w-[23%] flex flex-col items-start pl-0 lg:pl-3 z-10">
            {/* Interactive DMCA & Payment Cards Box */}
            <div className="relative w-[240px] rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md p-3.5 shadow-2xl hover:border-[#00A3E0]/50 transition-all select-none">
              {/* DMCA Badge Header */}
              <div className="border border-amber-400/90 rounded-[5px] overflow-hidden flex items-center h-[34px] shadow-sm bg-black mb-2.5">
                <div className="bg-gradient-to-r from-lime-600 via-green-600 to-green-500 h-full px-3 flex items-center justify-center text-white font-extrabold text-[12px] tracking-wider shadow-inner">
                  DMCA
                </div>
                <div className="bg-black h-full px-3.5 flex items-center justify-center text-white font-black text-[12px] tracking-widest">
                  PROTECTED
                </div>
              </div>

              {/* 4 Payment Cards Row */}
              <div className="flex items-center gap-1.5">
                {/* MasterCard */}
                <div className="w-11 h-7 rounded bg-[#0a1b3a] border border-white/10 flex items-center justify-center overflow-hidden p-0.5 shadow-sm">
                  <div className="flex items-center -space-x-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#eb001b]" />
                    <div className="w-4 h-4 rounded-full bg-[#f79e1b] opacity-90" />
                  </div>
                </div>

                {/* Visa */}
                <div className="w-11 h-7 rounded bg-white flex items-center justify-center overflow-hidden px-1 shadow-sm">
                  <span className="text-[#1a1f71] font-black italic text-[11px] tracking-tight">VISA</span>
                </div>

                {/* American Express */}
                <div className="w-11 h-7 rounded bg-[#006fcf] flex items-center justify-center overflow-hidden px-0.5 shadow-sm">
                  <span className="text-white font-black text-[7px] leading-[8px] text-center tracking-tighter">
                    AMERICAN<br />EXPRESS
                  </span>
                </div>

                {/* Discover */}
                <div className="w-11 h-7 rounded bg-white flex items-center justify-center overflow-hidden px-0.5 shadow-sm relative">
                  <span className="text-[#1f2421] font-extrabold text-[8.5px] tracking-tight">DISCOVER</span>
                  <div className="absolute -bottom-2 -right-1 w-5 h-5 rounded-full bg-[#ff6000]/80" />
                </div>
              </div>
            </div>

            {/* Cursive Calligraphy Slogan: "Your Story. Our Expertise." */}
            <div className="mt-6 select-none">
              <div className="relative w-[185px] h-[95px]">
                <Image
                  src="/footer-slogan.png"
                  alt="Your Story. Our Expertise."
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exact Bottom Horizontal Divider with 4 Glowing Cyan Dots & Exact Center Book Vector */}
        <div className="relative w-full flex items-center justify-between my-5">
          {/* Left Line Segment with Outer and Inner Cyan Dots */}
          <div className="flex-1 flex items-center">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0] shrink-0" />
            <div className="flex-1 h-[2px] bg-[#00A3E0]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0] shrink-0" />
          </div>

          {/* Center Book Icon (Exact Glowing Multi-Layered Cyan Open Book from Reference) */}
          <div className="px-3 sm:px-5 flex items-center justify-center shrink-0">
            <CyanBookIcon className="w-[100px] h-[100px]" />
          </div>

          {/* Right Line Segment with Inner and Outer Cyan Dots */}
          <div className="flex-1 flex items-center">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0] shrink-0" />
            <div className="flex-1 h-[2px] bg-[#00A3E0]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00A3E0] shadow-[0_0_10px_#00A3E0] shrink-0" />
          </div>
        </div>

        {/* Copyright Line with minimal, balanced bottom padding */}
        <div className="text-center pt-1 pb-1 text-[15px] sm:text-[16px] md:text-[16.5px] text-white font-normal tracking-wide">
          © 2026 - All Rights Reserved{" "}
          <span className="text-[#00A3E0] font-normal hover:underline cursor-pointer">
            Infiniti Media INC
          </span>
        </div>
      </div>
    </footer>
  );
}
