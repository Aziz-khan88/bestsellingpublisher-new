"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Search,
  FileText,
  BookOpen,
  CheckCircle2,
  Globe,
  Megaphone,
  Film,
  PenTool,
  ArrowRight,
  Sparkles,
  Layers,
  Compass,
  Heart,
  TrendingUp,
  UserCheck,
  Palette,
  BookMarked,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(false);
  const [genreMenuOpen, setGenreMenuOpen] = React.useState(false);

  const servicesTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const genreTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const toggleServices = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (genreTimeoutRef.current) clearTimeout(genreTimeoutRef.current);
    setGenreMenuOpen(false);
    setServicesMenuOpen((prev) => !prev);
  };

  const toggleGenre = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (genreTimeoutRef.current) clearTimeout(genreTimeoutRef.current);
    setServicesMenuOpen(false);
    setGenreMenuOpen((prev) => !prev);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (genreTimeoutRef.current) clearTimeout(genreTimeoutRef.current);
    setGenreMenuOpen(false);
    setServicesMenuOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 350);
  };

  const handleGenreEnter = () => {
    if (genreTimeoutRef.current) clearTimeout(genreTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesMenuOpen(false);
    setGenreMenuOpen(true);
  };

  const handleGenreLeave = () => {
    genreTimeoutRef.current = setTimeout(() => {
      setGenreMenuOpen(false);
    }, 350);
  };

  // Close menus on outside click and on Escape key
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#desktop-navbar-container")) {
        setServicesMenuOpen(false);
        setGenreMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesMenuOpen(false);
        setGenreMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Writing Services: The Suite
  const theSuiteItems = [
    {
      title: "SEO Writing",
      subtitle: "Rank on search engines with high-intent keywords.",
      href: "/seo-content-writing-services",
      icon: Search,
    },
    {
      title: "Article Writing",
      subtitle: "Thought leadership & published features.",
      href: "/article-writing-services",
      icon: FileText,
    },
    {
      title: "Magazine Writing",
      subtitle: "Editorial and publication-grade narrative stories.",
      href: "/magazine-writing",
      icon: BookOpen,
    },
    {
      title: "Book Editing",
      subtitle: "Developmental, line, copy editing & proofreading.",
      href: "/book-editing",
      icon: CheckCircle2,
    },
  ];

  // Writing Services: Extensions
  const extensionsItems = [
    {
      title: "Web Copy Writing",
      subtitle: "High-converting sales pages & website messaging.",
      href: "/web-copywriting-services",
      icon: Globe,
    },
    {
      title: "Press Release",
      subtitle: "Media distribution & international press announcements.",
      href: "/press-release-writing-services",
      icon: Megaphone,
    },
    {
      title: "Script Writing",
      subtitle: "Screenplays, audio narration & promotional trailers.",
      href: "/script-writing-services",
      icon: Film,
    },
    {
      title: "Ghost Writing",
      subtitle: "Full-length manuscript ghostwriting under your name.",
      href: "/ghostwriting-services",
      icon: PenTool,
    },
  ];

  // Genre: Fiction & Literature
  const fictionGenres = [
    {
      title: "Sci-Fi & Cyberpunk",
      subtitle: "Epic world-building, dystopian futures, and tech fiction.",
      href: "/genre#scifi",
      icon: Sparkles,
    },
    {
      title: "Mystery & Thriller",
      subtitle: "High-stakes suspense, detective crime, and psychological noir.",
      href: "/genre#thriller",
      icon: Compass,
    },
    {
      title: "Romance & Drama",
      subtitle: "Emotional character arcs, contemporary & historical love.",
      href: "/genre#romance",
      icon: Heart,
    },
    {
      title: "Fantasy & Supernatural",
      subtitle: "Magical realism, urban fantasy, and mythological sagas.",
      href: "/genre#fantasy",
      icon: BookOpen,
    },
  ];

  // Genre: Non-Fiction & Specialty
  const nonFictionGenres = [
    {
      title: "Memoir & Biography",
      subtitle: "Personal life narratives, legacy stories, and executive biographies.",
      href: "/genre#memoir",
      icon: UserCheck,
    },
    {
      title: "Business & Leadership",
      subtitle: "Entrepreneurship, wealth strategy, and executive management.",
      href: "/genre#business",
      icon: TrendingUp,
    },
    {
      title: "Self-Help & Mindset",
      subtitle: "Personal growth, productivity, and habit transformation.",
      href: "/genre#selfhelp",
      icon: Compass,
    },
    {
      title: "Children's Illustrated",
      subtitle: "Full-color illustrations, picture books, and middle-grade.",
      href: "/genre#children",
      icon: Palette,
    },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 pointer-events-none px-2 sm:px-4">
      {/* 97%-98% Full width container with overflow-visible */}
      <div
        id="desktop-navbar-container"
        className="relative w-[97%] lg:w-[98%] max-w-[1850px] mx-auto pointer-events-auto overflow-visible"
      >
        
        {/* Animated Rotating Laser Border Shell */}
        <div className="absolute inset-0 rounded-2xl p-[1.8px] overflow-hidden pointer-events-none shadow-[0_0_35px_-4px_rgba(64,190,226,0.45)]">
          {/* 360deg Rotating Laser Shine Beam */}
          <div
            className="absolute -inset-[350%] animate-border-beam"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 315deg, rgba(64, 190, 226, 0.35) 335deg, #40bee2 350deg, #ffffff 357deg, transparent 360deg)`,
            }}
          />
          {/* Header dark background surface inside the border */}
          <div className="w-full h-full bg-[#02050e]/95 backdrop-blur-2xl rounded-2xl" />
        </div>

        {/* Crisp cyan ambient border accent */}
        <div className="absolute inset-0 rounded-2xl border border-[#40bee2]/30 pointer-events-none" />

        {/* Inner Header Bar: relative z-20 & overflow-visible */}
        <div className="relative z-20 w-full h-[76px] sm:h-[82px] xl:h-[88px] px-4 sm:px-7 xl:px-9 flex items-center justify-between">
          
          {/* 1. Left: Brand Logo */}
          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <Link href="/" className="flex items-center select-none group">
              <div className="relative w-[190px] sm:w-[225px] xl:w-[245px] h-[46px] sm:h-[52px]">
                <Image
                  src="/logo.png"
                  alt="Best Selling Publisher"
                  fill
                  priority
                  className="object-contain object-left drop-shadow-[0_0_15px_rgba(64,190,226,0.4)]"
                />
              </div>
            </Link>

            {/* Vertical divider matching screenshot */}
            <div className="h-8 w-[1px] bg-slate-700/80 mx-1 hidden lg:block" />
          </div>

          {/* 2. Middle: Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-5 2xl:gap-x-6 xl:gap-x-5 lg:gap-x-3.5 text-[14px] xl:text-[14.5px] 2xl:text-[15px] font-medium tracking-normal">
            {/* 1. Home */}
            <Link
              href="/"
              className="relative py-2 text-[#40bee2] font-semibold transition-colors group"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] rounded-full" />
            </Link>

            {/* 2. About */}
            <Link
              href="/about-us"
              className="relative py-2 text-white hover:text-[#40bee2] transition-colors group"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </Link>

            {/* 3. Writing Services (Full-Width Mega Menu) */}
            <div
              className="relative py-2"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={toggleServices}
                className="flex items-center gap-1.5 text-white hover:text-[#40bee2] transition-colors cursor-pointer group py-1"
                aria-haspopup="true"
                aria-expanded={servicesMenuOpen}
              >
                <span>Writing Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesMenuOpen ? "rotate-180 text-[#40bee2]" : "text-slate-300"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] origin-left transition-transform duration-300 rounded-full ${
                    servicesMenuOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            </div>

            {/* 4. Genre (Full-Width Mega Menu) */}
            <div
              className="relative py-2"
              onMouseEnter={handleGenreEnter}
              onMouseLeave={handleGenreLeave}
            >
              <button
                type="button"
                onClick={toggleGenre}
                className="flex items-center gap-1.5 text-white hover:text-[#40bee2] transition-colors cursor-pointer group py-1"
                aria-haspopup="true"
                aria-expanded={genreMenuOpen}
              >
                <span>Genre</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    genreMenuOpen ? "rotate-180 text-[#40bee2]" : "text-slate-300"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] origin-left transition-transform duration-300 rounded-full ${
                    genreMenuOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            </div>

            {/* 5. Marketing */}
            <Link
              href="/book-marketing"
              className="relative py-2 text-white hover:text-[#40bee2] transition-colors group"
            >
              <span>Marketing</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </Link>

            {/* 6. Publication */}
            <Link
              href="/book-publishing-services"
              className="relative py-2 text-white hover:text-[#40bee2] transition-colors group"
            >
              <span>Publication</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </Link>

            {/* 7. Printing */}
            <Link
              href="/book-printing"
              className="relative py-2 text-white hover:text-[#40bee2] transition-colors group"
            >
              <span>Printing</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </Link>

            {/* 8. Cover Design */}
            <Link
              href="/book-cover-design"
              className="relative py-2 text-white hover:text-[#40bee2] transition-colors group"
            >
              <span>Cover Design</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </Link>

            {/* 9. Portfolio */}
            <Link
              href="/portfolio"
              className="relative py-2 text-white hover:text-[#40bee2] transition-colors group"
            >
              <span>Portfolio</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </Link>

            {/* 10. Contact Us */}
            <Link
              href="/contact-us"
              className="relative py-2 text-white hover:text-[#40bee2] transition-colors group"
            >
              <span>Contact Us</span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#40bee2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </Link>
          </nav>

          {/* 3. Right: Exact Cyan Call Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+18556666675"
              className="h-[42px] sm:h-[46px] px-4 sm:px-6 rounded-xl border-2 border-[#40BEE2] bg-[#40BEE2] hover:bg-transparent text-white hover:text-[#40BEE2] flex items-center gap-2.5 font-semibold text-[14px] sm:text-[15px] shadow-[0_0_25px_rgba(64,190,226,0.45)] hover:shadow-[0_0_35px_rgba(64,190,226,0.65)] transition-all duration-300 shrink-0 active:scale-95 group"
            >
              <Phone className="w-4 h-4 text-white group-hover:text-[#40BEE2] fill-current shrink-0 transition-colors" />
              <span className="whitespace-nowrap font-semibold tracking-tight">
                (855) 666-6675
              </span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-[#40bee2] hover:border-[#40bee2] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 4. Full-Width Writing Services Mega Menu */}
        <AnimatePresence>
          {servicesMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
              className="absolute top-[calc(100%+8px)] left-0 right-0 w-full rounded-3xl bg-[#06070a]/98 border border-white/10 backdrop-blur-3xl p-7 sm:p-9 shadow-[0_35px_80px_rgba(0,0,0,0.95)] z-50 text-left pointer-events-auto before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-['']"
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                onClick={() => setServicesMenuOpen(false)}
              >
                {/* Column 1: THE SUITE */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#40bee2]" />
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#40bee2] uppercase block">
                      THE SUITE
                    </span>
                  </div>
                  <div className="space-y-2">
                    {theSuiteItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-[#40bee2]/30 transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#40bee2] group-hover:border-[#40bee2]/40 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-white group-hover:text-[#40bee2] transition-colors leading-snug">
                              {item.title}
                            </div>
                            <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: EXTENSIONS */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-3.5 h-3.5 text-[#40bee2]" />
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#40bee2] uppercase block">
                      EXTENSIONS
                    </span>
                  </div>
                  <div className="space-y-2">
                    {extensionsItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-[#40bee2]/30 transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#40bee2] group-hover:border-[#40bee2]/40 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-white group-hover:text-[#40bee2] transition-colors leading-snug">
                              {item.title}
                            </div>
                            <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: FEATURED GUIDE */}
                <div className="lg:col-span-4 h-full">
                  <div className="h-full rounded-2xl bg-[#0c0d12] border border-white/[0.08] p-5 flex flex-col justify-between hover:border-[#40bee2]/40 transition-colors group/guide">
                    <div>
                      <div className="relative w-full h-[130px] rounded-xl overflow-hidden mb-4 bg-black border border-white/5">
                        <Image
                          src="/mega-featured-wave.png"
                          alt="The practical guide to resilient publishing"
                          fill
                          className="object-cover group-hover/guide:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase block mb-1.5">
                        FEATURED GUIDE
                      </span>

                      <h4 className="text-[15px] font-bold text-white leading-snug group-hover/guide:text-[#40bee2] transition-colors mb-1.5">
                        The practical guide to resilient publishing
                      </h4>

                      <p className="text-[12px] text-slate-400 leading-relaxed">
                        Patterns, editorial checklists, and global publishing decisions used by bestselling authors.
                      </p>
                    </div>

                    <Link
                      href="/portfolio"
                      className="mt-4 text-[13px] font-semibold text-white hover:text-[#40bee2] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read the guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/guide:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div className="border-t border-white/[0.08] mt-8 pt-5 px-1 flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-6 text-slate-400">
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    What&apos;s new
                  </Link>
                  <Link href="/book-publishing-services" className="hover:text-white transition-colors">
                    Publishing Services
                  </Link>
                  <Link href="/book-marketing" className="hover:text-white transition-colors">
                    Book Marketing
                  </Link>
                </div>

                <Link
                  href="/contact-us"
                  className="font-semibold text-white hover:text-[#40bee2] flex items-center gap-1.5 transition-colors group/sales"
                >
                  <span>Talk to an expert</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/sales:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 5. Full-Width Genre Mega Menu */}
        <AnimatePresence>
          {genreMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={handleGenreEnter}
              onMouseLeave={handleGenreLeave}
              className="absolute top-[calc(100%+8px)] left-0 right-0 w-full rounded-3xl bg-[#06070a]/98 border border-white/10 backdrop-blur-3xl p-7 sm:p-9 shadow-[0_35px_80px_rgba(0,0,0,0.95)] z-50 text-left pointer-events-auto before:absolute before:-top-4 before:left-0 before:right-0 before:h-6 before:content-['']"
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                onClick={() => setGenreMenuOpen(false)}
              >
                {/* Column 1: FICTION & NOVELS */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BookMarked className="w-3.5 h-3.5 text-[#40bee2]" />
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#40bee2] uppercase block">
                      FICTION & NOVELS
                    </span>
                  </div>
                  <div className="space-y-2">
                    {fictionGenres.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-[#40bee2]/30 transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#40bee2] group-hover:border-[#40bee2]/40 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-white group-hover:text-[#40bee2] transition-colors leading-snug">
                              {item.title}
                            </div>
                            <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: NON-FICTION & SPECIALTY */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-3.5 h-3.5 text-[#40bee2]" />
                    <span className="text-[11px] font-bold tracking-[0.18em] text-[#40bee2] uppercase block">
                      NON-FICTION & SPECIALTY
                    </span>
                  </div>
                  <div className="space-y-2">
                    {nonFictionGenres.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-[#40bee2]/30 transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-[#40bee2] group-hover:border-[#40bee2]/40 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-white group-hover:text-[#40bee2] transition-colors leading-snug">
                              {item.title}
                            </div>
                            <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: FEATURED GENRE SPOTLIGHT */}
                <div className="lg:col-span-4 h-full">
                  <div className="h-full rounded-2xl bg-[#0c0d12] border border-white/[0.08] p-5 flex flex-col justify-between hover:border-[#40bee2]/40 transition-colors group/genreSpot">
                    <div>
                      <div className="relative w-full h-[130px] rounded-xl overflow-hidden mb-4 bg-black border border-white/5">
                        <Image
                          src="/mega-featured-wave.png"
                          alt="The Genre Publishing Strategy Blueprint"
                          fill
                          className="object-cover group-hover/genreSpot:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase block mb-1.5">
                        GENRE SPOTLIGHT
                      </span>

                      <h4 className="text-[15px] font-bold text-white leading-snug group-hover/genreSpot:text-[#40bee2] transition-colors mb-1.5">
                        Cross-Genre Publishing & Category Dominance
                      </h4>

                      <p className="text-[12px] text-slate-400 leading-relaxed">
                        Learn how bestselling authors strategically position fiction and non-fiction across global retailer categories.
                      </p>
                    </div>

                    <Link
                      href="/genre"
                      className="mt-4 text-[13px] font-semibold text-white hover:text-[#40bee2] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore genre catalog</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/genreSpot:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div className="border-t border-white/[0.08] mt-8 pt-5 px-1 flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-6 text-slate-400">
                  <Link href="/genre" className="hover:text-white transition-colors">
                    All Categories
                  </Link>
                  <Link href="/book-cover-design" className="hover:text-white transition-colors">
                    Custom Artwork
                  </Link>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </div>

                <Link
                  href="/contact-us"
                  className="font-semibold text-white hover:text-[#40bee2] flex items-center gap-1.5 transition-colors group/genreSales"
                >
                  <span>Consult a genre specialist</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/genreSales:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2.5 p-6 rounded-2xl bg-[#02050e]/98 border border-[#40bee2]/35 backdrop-blur-2xl shadow-2xl flex flex-col gap-3 font-sans max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-bold tracking-widest text-[#40bee2]">Navigation</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#40bee2] text-2xl"
                >
                  ×
                </button>
              </div>

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#40bee2] font-semibold text-base py-1"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#40bee2] text-sm py-1"
              >
                About
              </Link>

              {/* Mobile Writing Services */}
              <div className="border-t border-slate-800 pt-2.5">
                <span className="text-xs uppercase tracking-wider text-[#40bee2] font-bold">Writing Services</span>
                <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                  {[...theSuiteItems, ...extensionsItems].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-300 hover:text-[#40bee2] py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Genre */}
              <div className="border-t border-slate-800 pt-2.5">
                <span className="text-xs uppercase tracking-wider text-[#40bee2] font-bold">Genre</span>
                <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                  {[...fictionGenres, ...nonFictionGenres].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-300 hover:text-[#40bee2] py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/book-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#40bee2] text-sm py-1"
              >
                Marketing
              </Link>
              <Link
                href="/book-publishing-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#40bee2] text-sm py-1"
              >
                Publication
              </Link>
              <Link
                href="/book-printing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#40bee2] text-sm py-1"
              >
                Printing
              </Link>
              <Link
                href="/book-cover-design"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#40bee2] text-sm py-1"
              >
                Cover Design
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#40bee2] text-sm py-1"
              >
                Portfolio
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#40bee2] text-sm py-1"
              >
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
