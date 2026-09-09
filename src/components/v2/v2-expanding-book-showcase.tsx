"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Star,
  BookOpen,
  ArrowRight,
  Award,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  TrendingUp,
  Layers,
} from "lucide-react";

export interface SpotlightBook {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  author: string;
  genreCategory: "All" | "Memoir" | "Fiction" | "Non-Fiction" | "Children";
  genre: string;
  badge: string;
  badgeColor: string;
  accentGlow: string;
  image: string;
  rating: number;
  reviewsCount: number;
  salesCopies: string;
  formats: string[];
  synopsis: string;
  link: string;
  deliverables: string[];
}

export const ALL_SPOTLIGHT_BOOKS: SpotlightBook[] = [
  {
    id: "son-of-the-sea",
    num: "01",
    title: "Son Of The Sea",
    subtitle: "Rising, Healing & Still Me",
    author: "Dylan Sandhu",
    genreCategory: "Memoir",
    genre: "Autobiography & Memoir",
    badge: "#1 Amazon Bestseller",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
    accentGlow: "from-sky-500/20 via-cyan-500/10 to-transparent",
    image: "/live-books/son-of-the-sea.webp",
    rating: 5.0,
    reviewsCount: 580,
    salesCopies: "32,000+ Copies",
    formats: ["Embossed Hardcover", "Paperback", "Kindle"],
    synopsis:
      "A raw, unforgettable journey of overcoming catastrophic adversity, rising against impossible odds, and rediscovering purpose. Ranked #1 in Biographies & Memoirs.",
    link: "/book/son-of-the-sea-rising-healing-still-me",
    deliverables: ["Ghostwriting Support", "Cover Art Direction", "Global KDP Launch"],
  },
  {
    id: "dark-lake",
    num: "02",
    title: "Dark Lake",
    subtitle: "A Rock Falls Winter Mystery",
    author: "Richard Schinnow",
    genreCategory: "Fiction",
    genre: "Mystery & Thriller",
    badge: "Top 10 Kindle Thriller",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
    image: "/live-books/dark-lake.webp",
    rating: 4.8,
    reviewsCount: 390,
    salesCopies: "28,500+ Copies",
    formats: ["Paperback", "Audio Edition", "Kindle Unlimited"],
    synopsis:
      "A chilling mystery unraveling across the frozen countryside of Rock Falls where long-buried secrets resurface under the winter ice. Translated into multiple languages.",
    link: "/book/dark-lake",
    deliverables: ["Thriller Editorial", "Atmospheric Cover Art", "Goodreads Push"],
  },
  {
    id: "history-of-money",
    num: "03",
    title: "The History of Money",
    subtitle: "Creation Of The Federal Reserve",
    author: "John Indelicato",
    genreCategory: "Non-Fiction",
    genre: "Finance & Economics",
    badge: "WSJ Recommended",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    accentGlow: "from-amber-500/20 via-yellow-500/10 to-transparent",
    image: "/live-books/history-of-money.webp",
    rating: 4.9,
    reviewsCount: 540,
    salesCopies: "45,000+ Copies",
    formats: ["Collector's Hardcover", "Ebook", "Audio"],
    synopsis:
      "An authoritative deep-dive into the secretive creation and lasting global economic impact of the Federal Reserve Bank. Praised by financial analysts worldwide.",
    link: "/book/the-history-of-money-the-creation-of-the-federal-reserve-bank",
    deliverables: ["Archival Editorial", "Typesetting & Indexing", "Library of Congress"],
  },
  {
    id: "fleagiliad",
    num: "04",
    title: "Fleagiliad: Literary Vampire",
    subtitle: "Greed, Grace & Ancient Empires",
    author: "Paul Marlee",
    genreCategory: "Fiction",
    genre: "Epic Literary Fiction",
    badge: "Independent Book Award",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/40",
    accentGlow: "from-purple-500/20 via-indigo-500/10 to-transparent",
    image: "/live-books/fleagiliad.webp",
    rating: 4.9,
    reviewsCount: 520,
    salesCopies: "19,000+ Copies",
    formats: ["Luxe Hardcover", "Paperback", "Ebook"],
    synopsis:
      "Blending South American history with magical realism and philosophical suspense, Fleagiliad explores the eternal conflict between greed and spiritual grace.",
    link: "/book/fleagiliad-literary-vampire",
    deliverables: ["Developmental Edit", "Concept Artwork", "Worldwide Distribution"],
  },
  {
    id: "balanced-as-fck",
    num: "05",
    title: "Balanced As F*ck",
    subtitle: "Mastering the 8 Things that Matter",
    author: "Ben Evans",
    genreCategory: "Non-Fiction",
    genre: "Mindset & Productivity",
    badge: "Amazon #1 Mindset Pick",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-400/40",
    accentGlow: "from-rose-500/20 via-pink-500/10 to-transparent",
    image: "/live-books/balanced-as-fck.webp",
    rating: 5.0,
    reviewsCount: 612,
    salesCopies: "38,000+ Copies",
    formats: ["Trade Hardcover", "Paperback", "Kindle"],
    synopsis:
      "In Balanced As F*CK, Ben Evans delivers a high-voltage, no-excuses blueprint for mastering health, wealth, relationships, and peace of mind amid modern chaos.",
    link: "/book/balanced-as-fck-mastering-the-8-things-that-matter",
    deliverables: ["Non-Fiction Structuring", "Modern Cover Design", "National PR Campaign"],
  },
  {
    id: "forest-and-trees",
    num: "06",
    title: "Forest and Trees",
    subtitle: "Whose Rock Whose Wagon",
    author: "Kevin MacPhee",
    genreCategory: "Children",
    genre: "Children's & Illustrated",
    badge: "Amazon Illustrated Pick",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/40",
    accentGlow: "from-blue-500/20 via-cyan-500/10 to-transparent",
    image: "/live-books/forest-and-trees.webp",
    rating: 4.9,
    reviewsCount: 482,
    salesCopies: "24,000+ Copies",
    formats: ["Full-Color Hardcover", "Paperback", "Kindle Kids"],
    synopsis:
      "Told through gentle rhyme and vibrant illustrations, giving families an inspiring, heartwarming way to talk about empathy, kindness, and helping one another.",
    link: "/book/forest-and-trees-whose-rock-whose-wagon",
    deliverables: ["Character Illustration", "Rhyme Editing", "Prepress Print QC"],
  },
  {
    id: "dont-birds-fly",
    num: "07",
    title: "Don't Birds Want to Fly in the Sky",
    subtitle: "An Unforgettable City Adventure",
    author: "Isobel Kleinman",
    genreCategory: "Children",
    genre: "Children's & Illustrated",
    badge: "Children's Book Choice",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-400/40",
    accentGlow: "from-teal-500/20 via-emerald-500/10 to-transparent",
    image: "/live-books/dont-birds-fly.webp",
    rating: 4.8,
    reviewsCount: 315,
    salesCopies: "16,500+ Copies",
    formats: ["Illustrated Paperback", "Kindle Kids"],
    synopsis:
      "A playful, heartwarming rhyming adventure teaching young readers patience, environmental love, and empathy through delightful urban animal encounters.",
    link: "/book/dont-birds-want-to-fly-in-the-sky",
    deliverables: ["Children's Verse Editing", "Full-Page Illustrated Art", "IngramSpark Distribution"],
  },
  {
    id: "downsizing-your-nest",
    num: "08",
    title: "Downsizing Your Nest",
    subtitle: "Simplifying Your Next Chapter",
    author: "Greg Myers",
    genreCategory: "Non-Fiction",
    genre: "Home & Lifestyle Guide",
    badge: "Top Home Guide",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-400/40",
    accentGlow: "from-orange-500/20 via-amber-500/10 to-transparent",
    image: "/live-books/downsizing-your-nest.webp",
    rating: 4.8,
    reviewsCount: 290,
    salesCopies: "14,200+ Copies",
    formats: ["Paperback", "Ebook"],
    synopsis:
      "A compassionate, step-by-step practical guide for homeowners looking to declutter, simplify, and transition smoothly to their next vibrant stage of life.",
    link: "/book/downsizing-your-nest",
    deliverables: ["Copyediting & Proofing", "Checklist Interior Layout", "Global Retail Distribution"],
  },
  {
    id: "weight-of-mothers-love",
    num: "09",
    title: "The Weight of a Mother's Love",
    subtitle: "A Memoir of Devotion & Healing",
    author: "Roberta Smith",
    genreCategory: "Memoir",
    genre: "Autobiography & Memoir",
    badge: "Inspiring Memoir",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-400/40",
    accentGlow: "from-pink-500/20 via-rose-500/10 to-transparent",
    image: "/live-books/weight-of-mothers-love.webp",
    rating: 4.9,
    reviewsCount: 430,
    salesCopies: "21,000+ Copies",
    formats: ["Luxe Paperback", "Kindle Edition"],
    synopsis:
      "A deeply moving memoir recounting unconditional maternal devotion, enduring tragic loss, and navigating the winding path toward emotional peace and grace.",
    link: "/book/the-weight-of-a-mothers-love",
    deliverables: ["Memoir Mentorship", "Custom Portrait Design", "Amazon Category Optimization"],
  },
  {
    id: "safe-in-his-arms",
    num: "10",
    title: "Safe in His Arms",
    subtitle: "Courage, Healing & Faith",
    author: "Barbara A. Wilkey",
    genreCategory: "Fiction",
    genre: "Clean Romance & Fiction",
    badge: "Clean Romance Leader",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
    accentGlow: "from-indigo-500/20 via-purple-500/10 to-transparent",
    image: "/live-books/safe-in-his-arms.webp",
    rating: 4.9,
    reviewsCount: 465,
    salesCopies: "26,000+ Copies",
    formats: ["Paperback", "Ebook", "Audio Edition"],
    synopsis:
      "An uplifting, emotional story exploring trust, restored faith, overcoming old scars, and having the courage to welcome love back into a wounded heart.",
    link: "/book/safe-in-his-arms",
    deliverables: ["Romance Editing", "Character Artwork", "KDP Select Launch"],
  },
  {
    id: "more-moments-of-light",
    num: "11",
    title: "More Moments of Light",
    subtitle: "The Journey Continues",
    author: "Loi Miller Eberle",
    genreCategory: "Fiction",
    genre: "Poetry & Reflection",
    badge: "Reflective Poetry Pick",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-400/40",
    accentGlow: "from-violet-500/20 via-purple-500/10 to-transparent",
    image: "/live-books/more-moments-of-light.webp",
    rating: 4.9,
    reviewsCount: 275,
    salesCopies: "12,800+ Copies",
    formats: ["Hardcover", "Paperback", "Ebook"],
    synopsis:
      "A contemplative collection of lyrical essays, reflections, and poetic verses inviting readers to pause, heal, and uncover quiet truth in everyday moments.",
    link: "/book/more-moments-of-light-the-journey-continues",
    deliverables: ["Poetic Typesetting", "Minimalist Cover Art", "Barnes & Noble Launch"],
  },
  {
    id: "nobody-believes-anymore",
    num: "12",
    title: "Nobody Believes Anymore",
    subtitle: "Re-Kindling the Embers of Ancestors",
    author: "Jim H. Parks",
    genreCategory: "Memoir",
    genre: "Autobiography & Memoir",
    badge: "Cultural Heritage Selection",
    badgeColor: "bg-stone-500/20 text-stone-300 border-stone-400/40",
    accentGlow: "from-stone-500/20 via-slate-500/10 to-transparent",
    image: "/live-books/nobody-believes-anymore.webp",
    rating: 4.8,
    reviewsCount: 310,
    salesCopies: "15,400+ Copies",
    formats: ["Paperback", "Audiobook"],
    synopsis:
      "A heartfelt family memoir celebrating the lost art of oral storytelling and passing timeless ancestral wisdom down through generations in a hectic modern era.",
    link: "/book/nobody-believes-anymore",
    deliverables: ["Oral History Archival", "Heritage Typography", "Audiobook Production"],
  },
];

const GENRE_CATEGORIES = [
  { id: "All", label: "All Titles (12)" },
  { id: "Memoir", label: "Memoir & Autobiography (3)" },
  { id: "Fiction", label: "Fiction & Thrillers (4)" },
  { id: "Non-Fiction", label: "Non-Fiction & Business (3)" },
  { id: "Children", label: "Children's & Illustrated (2)" },
] as const;

export function V2ExpandingBookShowcase() {
  const [selectedGenre, setSelectedGenre] = React.useState<"All" | "Memoir" | "Fiction" | "Non-Fiction" | "Children">("All");
  const [page, setPage] = React.useState<number>(0);
  const PAGE_SIZE = 6;

  // Filtered books based on genre
  const filteredBooks = React.useMemo(() => {
    if (selectedGenre === "All") return ALL_SPOTLIGHT_BOOKS;
    return ALL_SPOTLIGHT_BOOKS.filter((b) => b.genreCategory === selectedGenre);
  }, [selectedGenre]);

  // When "All" is selected, paginate by 6 so cards have expansive breathing room on desktop
  const displayedBooks = React.useMemo(() => {
    if (selectedGenre !== "All") return filteredBooks;
    const start = page * PAGE_SIZE;
    return filteredBooks.slice(start, start + PAGE_SIZE);
  }, [selectedGenre, filteredBooks, page]);

  const totalPages = Math.ceil(filteredBooks.length / PAGE_SIZE);

  // Active expanded book ID (defaults to first displayed book)
  const [activeId, setActiveId] = React.useState<string>(displayedBooks[0]?.id || "son-of-the-sea");

  // Keep activeId in sync if current book is not in displayed set
  React.useEffect(() => {
    if (displayedBooks.length > 0 && !displayedBooks.some((b) => b.id === activeId)) {
      setActiveId(displayedBooks[0].id);
    }
  }, [displayedBooks, activeId]);

  return (
    <section className="relative py-20 lg:py-28 bg-[#020818] border-t border-b border-cyan-500/15 overflow-hidden w-full">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Panoramic Max-Width Container (Matching V2 Portfolio Max-Width: w-[97%] max-w-[1850px]) */}
      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10 px-2 sm:px-4 lg:px-6">
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,163,224,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Interactive Accordion Showcase • All 12 Published Titles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Flagship Releases.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00A3E0] to-cyan-200">
                Proven Impact.
              </span>
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our published titles spanning memoirs, crime thrillers, financial deep-dives, and illustrated stories. Hover or tap any title to reveal its full journey and reader metrics.
            </p>
          </div>

          {/* Stepper / Pagination & Indicator */}
          <div className="flex flex-wrap items-center gap-4">
            {selectedGenre === "All" && totalPages > 1 && (
              <div className="flex items-center gap-2 bg-[#0B1B36]/80 backdrop-blur-md border border-cyan-500/30 rounded-full px-3 py-1.5 shadow-lg text-xs font-semibold">
                <span className="text-slate-300">
                  Showing {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, ALL_SPOTLIGHT_BOOKS.length)} of {ALL_SPOTLIGHT_BOOKS.length} Titles
                </span>
                <div className="w-[1px] h-3.5 bg-slate-700 mx-1" />
                <button
                  onClick={() => {
                    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
                  }}
                  className="p-1 rounded-full text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-colors"
                  title="Previous Set"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
                  }}
                  className="p-1 rounded-full text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-colors"
                  title="Next Set"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Full Interactive Accordion</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GENRE CATEGORY FILTER TABS                                */}
        {/* Allows author to switch between All 12, Memoir, Fiction   */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {GENRE_CATEGORIES.map((cat) => {
            const isSelected = selectedGenre === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedGenre(cat.id);
                  setPage(0);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#00A3E0] to-[#00E5FF] text-[#020818] shadow-[0_0_20px_rgba(0,163,224,0.4)]"
                    : "bg-[#0B1B36]/70 text-slate-300 hover:text-white hover:bg-[#0B1B36] border border-cyan-500/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL EXPANDING ACCORDION (DESKTOP / TABLET)         */}
        {/* Inspired by Framer Interactive Sliding Gallery            */}
        {/* ========================================================= */}
        <div className="hidden md:flex flex-row items-stretch gap-3 lg:gap-4 h-[550px] lg:h-[570px] w-full select-none">
          <AnimatePresence>
            {displayedBooks.map((book) => {
              const isActive = activeId === book.id;

              return (
                <motion.div
                  key={book.id}
                  layout
                  onClick={() => setActiveId(book.id)}
                  onMouseEnter={() => setActiveId(book.id)}
                  transition={{
                    layout: { type: "spring", stiffness: 220, damping: 28 },
                  }}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-colors duration-500 ${
                    isActive
                      ? "flex-[4.2] border-cyan-500/60 shadow-[0_20px_50px_rgba(0,163,224,0.25)]"
                      : "flex-1 border-white/10 hover:border-cyan-400/30 shadow-lg"
                  } bg-[#061126]`}
                >
                  {/* Background Full Cover Artwork with Depth */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-width: 1440px) 40vw, 25vw"
                      className={`object-cover object-center transition-all duration-700 ${
                        isActive
                          ? "scale-105 opacity-30 filter blur-[2px]"
                          : "scale-100 opacity-60 filter grayscale-[20%] hover:grayscale-0 hover:opacity-80"
                      }`}
                    />
                    {/* Atmospheric gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isActive
                          ? "from-[#020818] via-[#020818]/90 to-[#020818]/40"
                          : "from-black/95 via-black/60 to-black/40"
                      } transition-all duration-500`}
                    />
                  </div>

                  {/* ========================================== */}
                  {/* COLLAPSED STATE (Inactive Card)           */}
                  {/* Sleek architectural vertical strip        */}
                  {/* ========================================== */}
                  {!isActive && (
                    <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-6 px-3">
                      {/* Top Index Number */}
                      <span className="font-mono text-cyan-400 font-bold text-lg tracking-wider drop-shadow-md">
                        {book.num}
                      </span>

                      {/* Rotated Vertical Title */}
                      <div className="my-auto flex items-center justify-center">
                        <p
                          className="text-white/90 text-sm lg:text-base font-bold tracking-widest uppercase whitespace-nowrap drop-shadow-md"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {book.title}
                        </p>
                      </div>

                      {/* Bottom Indicator */}
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/15 text-cyan-400 group-hover:scale-110 transition-transform">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* ========================================== */}
                  {/* EXPANDED STATE (Active Card)              */}
                  {/* Cinematic showcase with 3D cover & copy    */}
                  {/* ========================================== */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative z-10 w-full h-full p-6 lg:p-8 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Bar: Index + Category Pill + Rating */}
                      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-cyan-400 font-extrabold text-xl lg:text-2xl">
                            {book.num}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${book.badgeColor} backdrop-blur-md flex items-center gap-1.5`}
                          >
                            <Award className="w-3 h-3 text-cyan-300" />
                            <span>{book.badge}</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{book.rating.toFixed(1)}</span>
                          <span className="text-slate-400 font-normal">
                            ({book.reviewsCount}+)
                          </span>
                        </div>
                      </div>

                      {/* Center Area: High-Res 3D Cover Mockup + Details */}
                      <div className="grid grid-cols-12 gap-6 lg:gap-8 my-auto items-center py-2">
                        {/* Left: 3D Floating Book Artwork */}
                        <div className="col-span-4 lg:col-span-4 flex items-center justify-center">
                          <div className="relative group/cover w-[160px] h-[230px] lg:w-[200px] lg:h-[285px] rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_35px_rgba(0,163,224,0.35)] transition-transform duration-500 group-hover/cover:scale-105">
                            {/* Realistic Book Spine Highlight */}
                            <div className="absolute top-0 left-0 bottom-0 w-3.5 bg-gradient-to-r from-white/35 via-white/10 to-transparent z-20 rounded-l pointer-events-none" />
                            {/* Inner page edge depth */}
                            <div className="absolute -bottom-1.5 left-2 right-1 h-2 bg-slate-200/85 rounded-b shadow-sm z-0 pointer-events-none" />

                            <Image
                              src={book.image}
                              alt={book.title}
                              fill
                              className="object-cover rounded-lg z-10"
                              priority
                            />
                          </div>
                        </div>

                        {/* Right: Book Story, Accolades & Impact */}
                        <div className="col-span-8 lg:col-span-8 flex flex-col justify-center space-y-3">
                          <div>
                            <p className="text-xs uppercase font-semibold tracking-wider text-cyan-400 mb-1 flex items-center gap-1">
                              <span>{book.genre}</span>
                              <span className="text-slate-500">•</span>
                              <span className="text-slate-300 font-normal">
                                By {book.author}
                              </span>
                            </p>
                            <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
                              {book.title}
                            </h3>
                            <p className="text-sm font-medium text-slate-300 italic">
                              {book.subtitle}
                            </p>
                          </div>

                          <p className="text-slate-300 text-xs lg:text-sm leading-relaxed line-clamp-3">
                            {book.synopsis}
                          </p>

                          {/* Deliverables tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {book.deliverables.map((item, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                              >
                                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>

                          {/* Sales and formats highlight */}
                          <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 pt-1">
                            <span className="flex items-center gap-1 text-emerald-400">
                              <TrendingUp className="w-3.5 h-3.5" />
                              <span>{book.salesCopies}</span>
                            </span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-400">
                              {book.formats.join(" · ")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Published with 100% Royalties to Author</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Link
                            href={book.link}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00A3E0] to-[#00E5FF] text-[#020818] text-xs lg:text-sm font-bold shadow-[0_0_20px_rgba(0,163,224,0.4)] hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all"
                          >
                            <BookOpen className="w-4 h-4" />
                            <span>Explore Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* MOBILE / TOUCH ACCORDION FALLBACK (< 768px)               */}
        {/* Stacks vertically with tap-to-expand smooth motion        */}
        {/* ========================================================= */}
        <div className="md:hidden flex flex-col gap-3">
          {filteredBooks.map((book) => {
            const isActive = activeId === book.id;

            return (
              <div
                key={book.id}
                onClick={() => setActiveId(isActive ? "" : book.id)}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isActive
                    ? "border-cyan-500/60 bg-[#061126] shadow-xl"
                    : "border-white/10 bg-[#030d22]"
                }`}
              >
                {/* Collapsed Header Bar */}
                <div className="p-4 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-cyan-400 font-bold text-base">
                      {book.num}
                    </span>
                    <div className="text-left">
                      <p className="text-white font-bold text-sm leading-tight">
                        {book.title}
                      </p>
                      <p className="text-xs text-slate-400">{book.genre}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full border ${book.badgeColor}`}
                    >
                      {book.badge}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                        isActive ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Content Drawer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-5 pt-2 border-t border-white/10"
                    >
                      <div className="flex gap-4 items-center mb-4">
                        <div className="relative w-24 h-36 shrink-0 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1 text-left">
                          <p className="text-xs font-semibold text-cyan-300">
                            By {book.author}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            <span>{book.rating.toFixed(1)}</span>
                            <span className="text-slate-400 font-normal">
                              ({book.reviewsCount}+ reviews)
                            </span>
                          </div>
                          <p className="text-xs text-emerald-400 font-medium">
                            {book.salesCopies} sold
                          </p>
                          <p className="text-xs text-slate-300 line-clamp-2">
                            {book.synopsis}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={book.link}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#00A3E0] to-[#00E5FF] text-[#020818] text-xs font-bold shadow-md"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Explore Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
