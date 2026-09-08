"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Award,
  Star,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
} from "lucide-react";

interface BookItem {
  id: string;
  title: string;
  author: string;
  genre: "Sci-Fi & Fantasy" | "Business & Leadership" | "Thriller & Mystery" | "Memoir & Non-Fiction";
  image: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  formats: string;
  scope: string[];
  synopsis: string;
}

const PORTFOLIO_BOOKS: BookItem[] = [
  {
    id: "silicon-horizon",
    title: "The Silicon Horizon",
    author: "Elena Vance",
    genre: "Sci-Fi & Fantasy",
    image: "/portfolio-scifi.jpg",
    badge: "New York Times Bestseller",
    rating: 4.9,
    reviewsCount: 428,
    formats: "Hardcover · Kindle · Audiobook",
    scope: [
      "Developmental & Line Editing",
      "Custom Digital Concept Cover Art",
      "Amazon KDP & Kindle Setup",
      "Global IngramSpark Distribution",
    ],
    synopsis:
      "A pulse-pounding vision of a hyper-connected metropolis where a lone cyber-agent discovers an encrypted conspiracy hidden within the city's power grid.",
  },
  {
    id: "echoes-of-leadership",
    title: "Echoes of Leadership",
    author: "Marcus Sterling",
    genre: "Business & Leadership",
    image: "/portfolio-business.jpg",
    badge: "Wall Street Journal Bestseller",
    rating: 5.0,
    reviewsCount: 512,
    formats: "Embossed Hardcover · Ebook",
    scope: [
      "Executive Ghostwriting & Editorial",
      "Gold-Foil Hardcover Design & Typesetting",
      "Worldwide Corporate Distribution",
      "National Media Press Release Campaign",
    ],
    synopsis:
      "The definitive biography of an international business pioneer, detailing battle-tested frameworks for high-stakes decisions and enduring executive impact.",
  },
  {
    id: "whispers-in-the-fog",
    title: "Whispers in the Fog",
    author: "Clara Montgomery",
    genre: "Thriller & Mystery",
    image: "/portfolio-thriller.jpg",
    badge: "Amazon #1 Category Bestseller",
    rating: 4.8,
    reviewsCount: 395,
    formats: "Paperback · Kindle Unlimited",
    scope: [
      "Comprehensive Copyediting",
      "Atmospheric Bespoke Cover Typography",
      "Amazon Keyword & Category Optimization",
      "Goodreads Author Campaign",
    ],
    synopsis:
      "Set in the eerie coastal forests of the Pacific Northwest, a retired detective is drawn back into an unsolved disappearance that mirrors her own darkest memories.",
  },
  {
    id: "beyond-the-horizon",
    title: "Beyond the Horizon",
    author: "James Walker",
    genre: "Sci-Fi & Fantasy",
    image: "/main-hero-books.png",
    badge: "Barnes & Noble Top Pick",
    rating: 4.9,
    reviewsCount: 618,
    formats: "Collector's Hardcover · Paperback · Ebook",
    scope: [
      "Full Multi-Stage Editorial Review",
      "3D Interior Chapter Illustrations",
      "Official International ISBN Registration",
      "Book Launch PR & Video Trailer",
    ],
    synopsis:
      "An epic saga of humanity's daring expedition beyond the edge of charted space, balancing existential discovery with the timeless bond of family.",
  },
  {
    id: "art-of-resilience",
    title: "The Art of Resilience",
    author: "David Sherman",
    genre: "Memoir & Non-Fiction",
    image: "/hero-book-1.png",
    badge: "USA Today Recommended",
    rating: 4.9,
    reviewsCount: 340,
    formats: "Paperback · Audiobook",
    scope: [
      "Manuscript Polishing & Structure",
      "Interior Formatting & Typography",
      "Audiobook Narration Coordination",
      "Author Podcast Placement Campaign",
    ],
    synopsis:
      "An inspiring personal memoir detailing the journey from catastrophic setback to triumphant revitalization, offering practical mindset lessons for life.",
  },
  {
    id: "shadows-of-the-past",
    title: "Shadows of the Past",
    author: "Arthur C. Morgan",
    genre: "Thriller & Mystery",
    image: "/hero-book-2.png",
    badge: "#1 New Release in Mystery",
    rating: 4.7,
    reviewsCount: 284,
    formats: "Paperback · Kindle Edition",
    scope: [
      "Proofreading & Consistency Check",
      "Custom Typography & Spines",
      "Amazon KDP Select Enrollment",
      "Promotional Pricing Strategy",
    ],
    synopsis:
      "A fast-paced legal mystery following a defense attorney who uncovers buried courtroom records that point toward the city's most respected civic leaders.",
  },
];

const GENRE_TABS = [
  "All Genres",
  "Sci-Fi & Fantasy",
  "Business & Leadership",
  "Thriller & Mystery",
  "Memoir & Non-Fiction",
] as const;

export function V2PortfolioShowcase() {
  const [selectedGenre, setSelectedGenre] = React.useState<string>("All Genres");
  const [selectedBook, setSelectedBook] = React.useState<BookItem | null>(null);

  const filteredBooks = React.useMemo(() => {
    if (selectedGenre === "All Genres") return PORTFOLIO_BOOKS;
    return PORTFOLIO_BOOKS.filter((b) => b.genre === selectedGenre);
  }, [selectedGenre]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F7FAFD] via-[#FFFFFF] to-[#EFF7FD] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Published Bestsellers Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#0B1B36] tracking-tight leading-tight mb-3">
            Crafted to Captivate. Built to Sell.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every manuscript we take on is treated as a marquee release. Explore a curated selection of recent titles we’ve edited, designed, formatted, and published onto major platforms worldwide.
          </p>
        </div>

        {/* ======================================================== */}
        {/* GENRE FILTER PILLS                                       */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {GENRE_TABS.map((genre) => {
            const isSelected = selectedGenre === genre;
            return (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#00A3E0] text-white shadow-md shadow-cyan-500/25"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {genre}
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE BOOK CARDS GRID                              */}
        {/* ======================================================== */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_6px_24px_-6px_rgba(12,24,42,0.08)] hover:shadow-[0_16px_36px_-8px_rgba(0,163,224,0.2)] hover:border-cyan-400/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wide uppercase bg-amber-50 border border-amber-200 text-amber-800">
                    <Award className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>{book.badge}</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {book.genre}
                  </span>
                </div>

                {/* 3D Realistic Book Presentation on Display Stage */}
                <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-200/60 rounded-xl flex items-center justify-center p-4 overflow-hidden mb-5 group-hover:bg-cyan-50/40 transition-colors">
                  {/* Subtle pedestal shadow */}
                  <div className="absolute bottom-3 w-[75%] h-5 bg-slate-950/15 rounded-full blur-md" />

                  <div className="relative w-full h-full max-w-[220px] flex items-center justify-center filter drop-shadow-[0_16px_28px_rgba(0,20,50,0.22)] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={380}
                      height={570}
                      className="w-auto h-full max-h-[250px] object-contain rounded-md"
                    />
                  </div>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="px-4 py-2.5 rounded-xl bg-white text-[#0B1B36] font-bold text-xs shadow-lg hover:bg-[#00A3E0] hover:text-white transition-all transform hover:scale-105 flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>View Publishing Details</span>
                    </button>
                  </div>
                </div>

                {/* Book Details */}
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0B1B36] leading-snug mb-1 group-hover:text-[#00A3E0] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-medium text-slate-500 mb-3">
                    By <span className="text-slate-800 font-semibold">{book.author}</span>
                  </p>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-slate-800">{book.rating}</span>
                    <span className="text-slate-400">({book.reviewsCount} reviews)</span>
                  </div>

                  {/* Available Formats */}
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mb-4 font-normal">
                    <Layers className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>{book.formats}</span>
                  </div>

                  {/* Card Button */}
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 hover:border-[#00A3E0] hover:text-[#00A3E0] hover:bg-cyan-50/50 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Read Author Success Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ======================================================== */}
        {/* BOTTOM CALLOUT PROMPT                                    */}
        {/* ======================================================== */}
        <div className="mt-14 sm:mt-16 bg-[#030d22] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-cyan-500/30">
          <div className="text-center md:text-left">
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
              Have a Manuscript Ready to Join Our Bestsellers?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Get an honest editorial evaluation, customized publishing scope, and direct distribution roadmap from our senior publishing team.
            </p>
          </div>
          <a
            href="#consultation"
            className="cta-btn-base cta-btn-primary shrink-0"
          >
            <span>Submit Manuscript for Review</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* QUICK PREVIEW / CASE STUDY MODAL                          */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 flex justify-center">
                  <div className="filter drop-shadow-[0_14px_24px_rgba(0,0,0,0.25)] max-w-[180px]">
                    <Image
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      width={320}
                      height={480}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-[#00A3E0] border border-cyan-200 mb-2">
                    {selectedBook.genre}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1 leading-snug">
                    {selectedBook.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    By {selectedBook.author} · {selectedBook.badge}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {selectedBook.synopsis}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-5">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Publishing Scope Executed by Our Team:
                    </h5>
                    <ul className="space-y-1.5">
                      {selectedBook.scope.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#consultation"
                      onClick={() => setSelectedBook(null)}
                      className="cta-btn-base cta-btn-primary flex-1 text-center"
                    >
                      <span>Publish a Book Like This</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
