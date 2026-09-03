"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  BookOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black text-slate-300 pt-28 sm:pt-32 lg:pt-36 pb-14 min-h-[680px] lg:min-h-[720px] overflow-hidden font-sans border-t border-white/5">
      {/* Background Graphic: Antique Leather Book, Inkwell & Feather Quill (Flush with the Right Edge, Leaning Right) */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[480px] lg:w-[600px] xl:w-[680px] pointer-events-none select-none z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/footer-quill-bg.jpg"
            alt="Vintage Book with Quill in Inkwell"
            fill
            priority
            className="object-contain object-right-bottom opacity-75"
          />
          {/* Subtle gradient to dissolve into solid black on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
        </div>
      </div>

      {/* 97%-98% Responsive Shell matching design specifications */}
      <div className="relative z-10 w-[97%] lg:w-[98%] max-w-[1850px] mx-auto">
        {/* Main 5-Column Row with Exact Proportions and Generous Vertical Padding */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 pb-16">
          
          {/* Column 1: Brand Logo, Narrative Summary & Social Channels (28% Width) */}
          <div className="w-full lg:w-[28%] lg:pr-6 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block select-none mb-4">
                <div className="relative w-[220px] sm:w-[250px] h-[52px] sm:h-[58px]">
                  <Image
                    src="/logo.png"
                    alt="Best Selling Publisher"
                    fill
                    className="object-contain object-left drop-shadow-[0_0_15px_rgba(64,190,226,0.35)]"
                  />
                </div>
              </Link>

              <p className="text-[14px] sm:text-[14.5px] text-slate-300 leading-relaxed max-w-sm mt-4">
                Best Selling Publisher supports authors with editing, design, formatting, publishing setup, 
                and marketing services selected in an approved project scope.
              </p>
            </div>

            {/* 7 Social Media Ring Icons */}
            <div className="mt-9 flex items-center gap-3 flex-wrap">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700/80 bg-black hover:border-[#40bee2] hover:text-[#40bee2] text-slate-300 flex items-center justify-center transition-all text-sm font-bold shadow-sm hover:shadow-[0_0_12px_rgba(64,190,226,0.4)] active:scale-95"
                aria-label="Facebook"
              >
                f
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700/80 bg-black hover:border-[#40bee2] hover:text-[#40bee2] text-slate-300 flex items-center justify-center transition-all text-sm shadow-sm hover:shadow-[0_0_12px_rgba(64,190,226,0.4)] active:scale-95"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700/80 bg-black hover:border-[#40bee2] hover:text-[#40bee2] text-slate-300 flex items-center justify-center transition-all text-sm font-bold shadow-sm hover:shadow-[0_0_12px_rgba(64,190,226,0.4)] active:scale-95"
                aria-label="X"
              >
                𝕏
              </a>

              {/* Pinterest */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700/80 bg-black hover:border-[#40bee2] hover:text-[#40bee2] text-slate-300 flex items-center justify-center transition-all text-sm font-bold shadow-sm hover:shadow-[0_0_12px_rgba(64,190,226,0.4)] active:scale-95"
                aria-label="Pinterest"
              >
                P
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700/80 bg-black hover:border-[#40bee2] hover:text-[#40bee2] text-slate-300 flex items-center justify-center transition-all text-sm shadow-sm hover:shadow-[0_0_12px_rgba(64,190,226,0.4)] active:scale-95"
                aria-label="TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700/80 bg-black hover:border-[#40bee2] hover:text-[#40bee2] text-slate-300 flex items-center justify-center transition-all text-sm shadow-sm hover:shadow-[0_0_12px_rgba(64,190,226,0.4)] active:scale-95"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700/80 bg-black hover:border-[#40bee2] hover:text-[#40bee2] text-slate-300 flex items-center justify-center transition-all text-sm font-bold shadow-sm hover:shadow-[0_0_12px_rgba(64,190,226,0.4)] active:scale-95"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Animated Vertical Divider 1 with glowing cyan top dot */}
          <div className="hidden lg:flex flex-col items-center self-stretch mx-5">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#40bee2]/90 via-slate-800/80 to-transparent relative">
              <span className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#40bee2] shadow-[0_0_12px_#40bee2] animate-pulse" />
            </div>
          </div>

          {/* Column 2: QUICK LINKS (13% Width - Compact) */}
          <div className="w-full lg:w-[13%]">
            <div className="mb-6">
              <h4 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-wider text-white">
                QUICK LINKS
              </h4>
              <div className="h-[2.5px] w-14 bg-gradient-to-r from-[#40bee2] via-[#40bee2]/70 to-transparent rounded-full mt-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 animate-pulse" />
              </div>
            </div>

            <ul className="space-y-4 text-[14px] sm:text-[14.5px] text-slate-300">
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
                    className="flex items-center gap-2 hover:text-[#40bee2] transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#40bee2] shrink-0 transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Animated Vertical Divider 2 with glowing cyan top dot */}
          <div className="hidden lg:flex flex-col items-center self-stretch mx-5">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#40bee2]/90 via-slate-800/80 to-transparent relative">
              <span className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#40bee2] shadow-[0_0_12px_#40bee2] animate-pulse" />
            </div>
          </div>

          {/* Column 3: OUR SERVICES (17% Width - Compact) */}
          <div className="w-full lg:w-[17%]">
            <div className="mb-6">
              <h4 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-wider text-white">
                OUR SERVICES
              </h4>
              <div className="h-[2.5px] w-16 bg-gradient-to-r from-[#40bee2] via-[#40bee2]/70 to-transparent rounded-full mt-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 animate-pulse" />
              </div>
            </div>

            <ul className="space-y-4 text-[14px] sm:text-[14.5px] text-slate-300">
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
                    className="flex items-center gap-2 hover:text-[#40bee2] transition-colors group"
                  >
                    <BookOpen className="w-4 h-4 text-[#40bee2] shrink-0" />
                    <span>{svc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Animated Vertical Divider 3 with glowing cyan top dot */}
          <div className="hidden lg:flex flex-col items-center self-stretch mx-5">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#40bee2]/90 via-slate-800/80 to-transparent relative">
              <span className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#40bee2] shadow-[0_0_12px_#40bee2] animate-pulse" />
            </div>
          </div>

          {/* Column 4: CONTACT US (18% Width - Compact) */}
          <div className="w-full lg:w-[18%]">
            <div className="mb-6">
              <h4 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-wider text-white">
                CONTACT US
              </h4>
              <div className="h-[2.5px] w-14 bg-gradient-to-r from-[#40bee2] via-[#40bee2]/70 to-transparent rounded-full mt-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 animate-pulse" />
              </div>
            </div>

            <ul className="space-y-4 text-[14px] sm:text-[14.5px] text-slate-300">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#40bee2] shrink-0 mt-1" />
                <a
                  href="mailto:inquiries@bestsellingpublisher.com"
                  className="hover:text-[#40bee2] transition-colors break-all leading-snug"
                >
                  inquiries@bestsellingpublisher.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#40bee2] shrink-0 mt-1" />
                <a
                  href="mailto:info@bestsellingpublisher.com"
                  className="hover:text-[#40bee2] transition-colors break-all leading-snug"
                >
                  info@bestsellingpublisher.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#40bee2] shrink-0 mt-1" />
                <a
                  href="tel:8556666675"
                  className="hover:text-[#40bee2] transition-colors font-semibold leading-snug"
                >
                  (855) 666-6675
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#40bee2] shrink-0 mt-1" />
                <span className="leading-snug text-slate-400">
                  9518 Mykawa Road,<br />
                  Houston, TX 77048
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#40bee2] shrink-0 mt-1" />
                <span className="leading-snug text-slate-400">
                  445 S Figueroa St,<br />
                  Los Angeles, CA 90071
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: DMCA & Payment Cards Box + Calligraphy Slogan (24% Width) */}
          <div className="w-full lg:w-[24%] flex flex-col items-start lg:items-start pl-0 lg:pl-4 z-10">
            {/* Interactive DMCA & Payment Cards Box */}
            <div className="relative w-[250px] rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md p-4 shadow-2xl hover:border-[#40bee2]/50 transition-all cursor-pointer group select-none">
              {/* DMCA Badge Header */}
              <div className="border border-amber-400/90 rounded-[5px] overflow-hidden flex items-center h-[36px] shadow-sm bg-black mb-3">
                <div className="bg-gradient-to-r from-lime-600 via-green-600 to-green-500 h-full px-3.5 flex items-center justify-center text-white font-extrabold text-[13px] tracking-wider shadow-inner">
                  DMCA
                </div>
                <div className="bg-black h-full px-4 flex items-center justify-center text-white font-black text-[13px] tracking-widest">
                  PROTECTED
                </div>
              </div>

              {/* 4 Payment Cards Row */}
              <div className="flex items-center gap-2">
                {/* MasterCard */}
                <div className="w-12 h-8 rounded bg-[#0a1b3a] border border-white/10 flex items-center justify-center overflow-hidden p-0.5 shadow-sm">
                  <div className="flex items-center -space-x-2">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#eb001b]" />
                    <div className="w-4.5 h-4.5 rounded-full bg-[#f79e1b] opacity-90" />
                  </div>
                </div>

                {/* Visa */}
                <div className="w-12 h-8 rounded bg-white flex items-center justify-center overflow-hidden px-1 shadow-sm">
                  <span className="text-[#1a1f71] font-black italic text-[12px] tracking-tight">VISA</span>
                </div>

                {/* American Express */}
                <div className="w-12 h-8 rounded bg-[#006fcf] flex items-center justify-center overflow-hidden px-1 shadow-sm">
                  <span className="text-white font-black text-[8px] leading-[9px] text-center tracking-tighter">
                    AMERICAN<br />EXPRESS
                  </span>
                </div>

                {/* Discover */}
                <div className="w-12 h-8 rounded bg-white flex items-center justify-center overflow-hidden px-1 shadow-sm relative">
                  <span className="text-[#1f2421] font-extrabold text-[9px] tracking-tight">DISCOVER</span>
                  <div className="absolute -bottom-2 -right-1 w-6 h-6 rounded-full bg-[#ff6000]/80" />
                </div>
              </div>
            </div>

            {/* Cursive Calligraphy Slogan: "Your Story. Our Expertise." */}
            <div className="mt-9 select-none">
              <div className="relative w-[180px] h-[95px]">
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

        {/* Exact Bottom Horizontal Divider with 4 Glowing Cyan Dots & Center Book Icon */}
        <div className="relative w-full flex items-center justify-between my-8">
          {/* Left Line Segment with Outer and Inner Cyan Dots */}
          <div className="flex-1 flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0] shrink-0" />
            <div className="flex-1 h-[1.5px] bg-[#00A3E0]/85" />
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0] shrink-0" />
          </div>

          {/* Center Book Icon */}
          <div className="px-5 sm:px-6 flex items-center justify-center shrink-0">
            <div className="relative w-11 h-7 sm:w-12 sm:h-8">
              <Image
                src="/footer-center-book.png"
                alt="Center Book Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Line Segment with Inner and Outer Cyan Dots */}
          <div className="flex-1 flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0] shrink-0" />
            <div className="flex-1 h-[1.5px] bg-[#00A3E0]/85" />
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0] shrink-0" />
          </div>
        </div>

        {/* Copyright Line matching reference image */}
        <div className="text-center pt-2 text-[13.5px] sm:text-[14px] text-white font-normal tracking-normal">
          © 2026 - All Rights Reserved{" "}
          <span className="text-[#00A3E0] font-normal hover:underline cursor-pointer">
            Infiniti Media INC
          </span>
        </div>
      </div>
    </footer>
  );
}
