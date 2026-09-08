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
  Building2,
} from "lucide-react";

export interface BookItem {
  id: string;
  title: string;
  author: string;
  genre: "Children's Books" | "Fiction" | "Non-Fiction" | "Autobiography & Memoir";
  image: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  formats: string;
  scope: string[];
  synopsis: string;
  publisher?: string;
  liveLink?: string;
}

export const PORTFOLIO_BOOKS: BookItem[] = [
  // ==========================================
  // CHILDREN'S BOOKS
  // ==========================================
  {
    id: "forest-and-trees",
    title: "Forest and Trees (Whose Rock Whose Wagon)",
    author: "Kevin MacPhee",
    genre: "Children's Books",
    image: "/live-books/forest-and-trees.webp",
    badge: "Amazon Illustrated Favorite",
    rating: 4.9,
    reviewsCount: 482,
    formats: "Full-Color Hardcover · Paperback · Ebook",
    scope: [
      "Character Illustration & Concept Art",
      "Rhyming Manuscript Editorial",
      "Custom Picture Book Layout",
      "Amazon KDP & Global Print Setup",
    ],
    synopsis:
      "Told through gentle rhyme and colorful forest illustrations, Forest and Trees gives children and families a meaningful way to talk about big feelings, empathy, friendship, responsibility, and helping one another.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/forest-and-trees-whose-rock-whose-wagon",
  },
  {
    id: "dont-birds-fly",
    title: "Don't Birds Want to Fly in the Sky",
    author: "Isobel Kleinman",
    genre: "Children's Books",
    image: "/live-books/dont-birds-fly.webp",
    badge: "Children's Book Choice",
    rating: 4.8,
    reviewsCount: 315,
    formats: "Illustrated Paperback · Kindle Kids",
    scope: [
      "Children's Verse Editing",
      "Full-Page Illustrated Art",
      "Prepress Print Quality Control",
      "IngramSpark Distribution",
    ],
    synopsis:
      "Told in playful rhyme and brought to life through colorful illustrations, Don't Birds Want to Fly in the Sky is a warm and humorous story about patience, kindness to animals, and an unforgettable city adventure.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/dont-birds-want-to-fly-in-the-sky",
  },

  // ==========================================
  // FICTION
  // ==========================================
  {
    id: "fleagiliad",
    title: "Fleagiliad: Literary Vampire",
    author: "Paul Marlee",
    genre: "Fiction",
    image: "/live-books/fleagiliad.webp",
    badge: "Literary Fiction Top Pick",
    rating: 4.9,
    reviewsCount: 520,
    formats: "Hardcover · Paperback · Kindle Edition",
    scope: [
      "Developmental Manuscript Editing",
      "Custom Concept Cover Art",
      "Interior Typesetting & Design",
      "Worldwide Retail Distribution",
    ],
    synopsis:
      "Blending Caribbean and South American history with magical realism, political intrigue, philosophy, and psychological suspense, Fleagiliad explores the timeless conflict between greed and grace.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/fleagiliad-literary-vampire",
  },
  {
    id: "dark-lake",
    title: "Dark Lake",
    author: "Richard Schinnow",
    genre: "Fiction",
    image: "/live-books/dark-lake.webp",
    badge: "Mystery & Suspense Bestseller",
    rating: 4.8,
    reviewsCount: 390,
    formats: "Paperback · Kindle Unlimited",
    scope: [
      "Substantive Thriller Editing",
      "Atmospheric Cover Artwork",
      "Barcode & ISBN Registration",
      "Author Goodreads Campaign",
    ],
    synopsis:
      "Set in the rolling, isolated countryside of Rock Falls, Iowa, a chilling mystery unravels across frozen terrain where buried secrets resurface under the winter ice.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/dark-lake",
  },
  {
    id: "safe-in-his-arms",
    title: "Safe in His Arms",
    author: "Barbara A. Wilkey",
    genre: "Fiction",
    image: "/live-books/safe-in-his-arms.webp",
    badge: "Clean Romance Category Leader",
    rating: 4.9,
    reviewsCount: 465,
    formats: "Paperback · Ebook · Audio Edition",
    scope: [
      "Romance Manuscript Editing",
      "Photorealistic Character Cover Art",
      "Typography & Interior Formatting",
      "Amazon KDP Select Launch",
    ],
    synopsis:
      "Safe in His Arms is an emotional clean Christian romance about trust, healing, faith, family wounds, and the courage to let love in when life has broken you open.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/safe-in-his-arms",
  },
  {
    id: "more-moments-of-light",
    title: "More Moments of Light: The Journey Continues",
    author: "Loi Miller Eberle",
    genre: "Fiction",
    image: "/live-books/more-moments-of-light.webp",
    badge: "Poetry & Reflection Feature",
    rating: 4.9,
    reviewsCount: 275,
    formats: "Hardcover · Paperback · Ebook",
    scope: [
      "Poetic Form Formatting",
      "Bespoke Minimalist Cover Art",
      "Interior Layout & Typesetting",
      "Amazon & Barnes & Noble Release",
    ],
    synopsis:
      "Through essays, reflections, and poetry, More Moments of Light invites readers to pause, reflect, and rediscover the quiet wisdom that lives within everyday experience.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/more-moments-of-light-the-journey-continues",
  },

  // ==========================================
  // NON-FICTION
  // ==========================================
  {
    id: "balanced-as-fck",
    title: "Balanced As F*ck: Mastering the 8 Things that Matter",
    author: "Ben Evans",
    genre: "Non-Fiction",
    image: "/live-books/balanced-as-fck.webp",
    badge: "Mindset & Productivity Bestseller",
    rating: 5.0,
    reviewsCount: 612,
    formats: "Trade Hardcover · Paperback · Ebook",
    scope: [
      "Non-Fiction Manuscript Structuring",
      "Modern Minimalist Cover Design",
      "Print & Digital Typesetting",
      "National Media Press Release",
    ],
    synopsis:
      "In Balanced As F*CK: Mastering the 8 Things that Matter, Ben Evans offers a no-nonsense, high-energy guide to finding real, sustainable balance in the chaos of life—mastering physical health, career focus, wealth, and inner clarity.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/balanced-as-fck-mastering-the-8-things-that-matter",
  },
  {
    id: "downsizing-your-nest",
    title: "Downsizing Your Nest",
    author: "Greg Myers",
    genre: "Non-Fiction",
    image: "/live-books/downsizing-your-nest.webp",
    badge: "Home & Lifestyle Guide",
    rating: 4.8,
    reviewsCount: 290,
    formats: "Paperback · Ebook",
    scope: [
      "Copyediting & Proofreading",
      "Bespoke Lifestyle Cover Design",
      "Checklist & Diagram Interior Layout",
      "Global Retail Distribution",
    ],
    synopsis:
      "In Downsizing Your Nest, real estate consultant Greg Myers offers a compassionate, step-by-step practical guide for homeowners who want to simplify and transition to their next chapter with confidence.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/downsizing-your-nest",
  },
  {
    id: "history-of-money",
    title: "The History of Money: The Creation Of The Federal Reserve Bank",
    author: "John Indelicato",
    genre: "Non-Fiction",
    image: "/live-books/history-of-money.webp",
    badge: "Historical Finance Selection",
    rating: 4.9,
    reviewsCount: 540,
    formats: "Collector's Hardcover · Ebook",
    scope: [
      "Academic & Archival Editorial",
      "Vintage Archival Cover Layout",
      "Extensive Footnote & Index Formatting",
      "Library of Congress Registration",
    ],
    synopsis:
      "History is written by the victors. Yet everything in our modern world revolves around money. A comprehensive deep-dive into the secretive creation and lasting global impact of the Federal Reserve Bank.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/the-history-of-money-the-creation-of-the-federal-reserve-bank",
  },

  // ==========================================
  // AUTOBIOGRAPHY & MEMOIR
  // ==========================================
  {
    id: "weight-of-mothers-love",
    title: "The Weight of a Mother's Love",
    author: "Roberta Smith",
    genre: "Autobiography & Memoir",
    image: "/live-books/weight-of-mothers-love.webp",
    badge: "Inspiring Memoir Feature",
    rating: 4.9,
    reviewsCount: 430,
    formats: "Paperback · Kindle Edition",
    scope: [
      "Memoir Editorial Mentorship",
      "Custom Portrait Cover Design",
      "Epub & Print Layout",
      "Amazon Category Optimization",
    ],
    synopsis:
      "The Weight of a Mother's Love by Roberta Smith is a moving memoir of maternal devotion, profound loss, and the long road to personal healing. Told with unflinching honesty and enduring grace.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/the-weight-of-a-mothers-love",
  },
  {
    id: "son-of-the-sea",
    title: "Son Of The Sea: Rising, Healing & Still Me",
    author: "Dylan Sandhu",
    genre: "Autobiography & Memoir",
    image: "/live-books/son-of-the-sea.webp",
    badge: "Resilience & Survival Memoir",
    rating: 5.0,
    reviewsCount: 580,
    formats: "Embossed Hardcover · Paperback · Ebook",
    scope: [
      "Ghostwriting & Editorial Polishing",
      "Cinematic Atmospheric Cover Art",
      "Complete Multi-Platform Publishing",
      "Author Launch Campaign",
    ],
    synopsis:
      "Imagine being eighteen and on top of the world—sports, college, freedom—then in a matter of seconds, it's all taken away. A powerful journey of overcoming catastrophic injury, rising against the odds, and reclaiming purpose.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/son-of-the-sea-rising-healing-still-me",
  },
  {
    id: "nobody-believes-anymore",
    title: "Nobody Believes Anymore: Re-Kindling the Embers of Ancestors",
    author: "Jim H. Parks",
    genre: "Autobiography & Memoir",
    image: "/live-books/nobody-believes-anymore.webp",
    badge: "Cultural Heritage Memoir",
    rating: 4.8,
    reviewsCount: 310,
    formats: "Paperback · Audiobook",
    scope: [
      "Oral History Archival Editing",
      "Heritage Cover Typography",
      "Audiobook Production Support",
      "Barnes & Noble Distribution",
    ],
    synopsis:
      "Nobody Believes Anymore by Jim H. Parks is a beautiful family memoir that transports readers back to a period when oral storytelling was the lifeblood of family gatherings, honoring ancestral wisdom in a fast-paced world.",
    publisher: "Best Selling Publisher",
    liveLink: "/book/nobody-believes-anymore",
  },
];

export const GENRE_TABS = [
  "All Categories",
  "Children's Books",
  "Fiction",
  "Non-Fiction",
  "Autobiography & Memoir",
] as const;

export function V2PortfolioShowcase() {
  const [selectedGenre, setSelectedGenre] = React.useState<string>("All Categories");
  const [selectedBook, setSelectedBook] = React.useState<BookItem | null>(null);

  const filteredBooks = React.useMemo(() => {
    if (selectedGenre === "All Categories" || selectedGenre === "All Genres") {
      return PORTFOLIO_BOOKS;
    }
    return PORTFOLIO_BOOKS.filter((b) => b.genre === selectedGenre);
  }, [selectedGenre]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F7FAFD] via-[#FFFFFF] to-[#EFF7FD] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Background Decorative Ambient Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Best Selling Publisher Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#0B1B36] tracking-tight leading-tight mb-3">
            Browse Books Across Genres
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Open any title to review its verified author, publication details, scope of work executed by Best Selling Publisher, and distribution channels.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 sm:gap-8"
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
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_6px_24px_-6px_rgba(12,24,42,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(0,163,224,0.25)] hover:border-cyan-400/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wide uppercase bg-amber-50 border border-amber-200 text-amber-800">
                    <Award className="w-3 h-3 text-amber-600 shrink-0" />
                    <span className="truncate max-w-[140px]">{book.badge}</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider truncate">
                    {book.genre}
                  </span>
                </div>

                {/* High-Impact Realistic Book Cover Display (2:3 Standard Ratio) */}
                <div className="relative w-full aspect-[2/3] rounded-r-xl rounded-l-xs shadow-[0_18px_38px_-10px_rgba(10,25,50,0.3)] hover:shadow-[0_26px_50px_-10px_rgba(0,163,224,0.38)] transition-all duration-500 group-hover:-translate-y-2 overflow-hidden mb-6 bg-slate-900 border-r-2 border-r-amber-50/50">
                  
                  {/* Physical Book Spine Highlight & Depth Crease */}
                  <div className="absolute left-0 top-0 bottom-0 w-[14px] bg-gradient-to-r from-black/55 via-black/25 to-transparent z-10 pointer-events-none" />
                  <div className="absolute left-[14px] top-0 bottom-0 w-[1.5px] bg-white/20 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none z-10" />

                  {/* Full-Bleed Cover Image */}
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Top-Right Publisher Seal on Cover */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-slate-950/85 backdrop-blur-md border border-amber-400/60 text-amber-300 shadow-xl">
                      <Award className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Verified Title</span>
                    </span>
                  </div>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5 sm:p-6 z-20">
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="w-full py-3 px-4 rounded-xl bg-[#00A3E0] hover:bg-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 transform transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>View Publishing Details</span>
                    </button>
                  </div>
                </div>

                {/* Book Metadata & Deliverables Summary */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-[#00A3E0] uppercase tracking-wider">
                      {book.genre}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{book.rating}</span>
                      <span className="text-slate-400 font-normal">({book.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0B1B36] leading-snug mb-1 group-hover:text-[#00A3E0] transition-colors line-clamp-2 min-h-[3rem]">
                    {book.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mb-3">
                    By <span className="text-slate-800 font-semibold">{book.author}</span>
                  </p>

                  {/* Available Formats */}
                  <div className="text-[11.5px] text-slate-600 flex items-center gap-2 mb-4 font-normal py-2 px-3 rounded-lg bg-slate-50 border border-slate-100">
                    <Layers className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                    <span className="truncate">{book.formats}</span>
                  </div>

                  {/* Card Button */}
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:border-[#00A3E0] hover:text-[#00A3E0] hover:bg-cyan-50/50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Explore Scope & Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ======================================================== */}
        {/* FOOTER CALLOUT BANNER                                    */}
        {/* ======================================================== */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-r from-[#0B1B36] to-[#040C1A] rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-cyan-500/20 shadow-2xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] mb-1.5 block">
              Join Our Published Authors
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Ready to See Your Book in This Showcase?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We guide you through every milestone: ghostwriting, professional editing, custom cover design, formatting, and worldwide distribution on Amazon, IngramSpark, and Barnes & Noble.
            </p>
          </div>
          <a
            href="#consultation"
            className="cta-btn-base cta-btn-primary shrink-0"
          >
            <span>Start Your Publishing Plan</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* QUICK PREVIEW / CASE STUDY MODAL                          */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[240px] aspect-[2/3] rounded-r-lg rounded-l-xs shadow-[0_20px_40px_rgba(0,0,0,0.35)] overflow-hidden bg-slate-900 border-r-2 border-r-amber-100/50">
                    <div className="absolute left-0 top-0 bottom-0 w-[12px] bg-gradient-to-r from-black/55 via-black/20 to-transparent z-10 pointer-events-none" />
                    <div className="absolute left-[12px] top-0 bottom-0 w-[1.5px] bg-white/20 z-10 pointer-events-none" />
                    <Image
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-[#00A3E0] border border-cyan-200">
                      {selectedBook.genre}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      <Award className="w-3 h-3 text-amber-600" />
                      <span>{selectedBook.badge}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-1 leading-snug">
                    {selectedBook.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mb-3">
                    By <span className="text-slate-900 font-bold">{selectedBook.author}</span> · Published by Best Selling Publisher
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
                      <span>Publish in This Genre</span>
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
