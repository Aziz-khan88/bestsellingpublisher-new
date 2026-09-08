"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  Award,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

interface AuthorStory {
  author: string;
  role: string;
  bookTitle: string;
  genre: string;
  achievement: string;
  quote: string;
  rating: number;
}

const AUTHOR_STORIES: AuthorStory[] = [
  {
    author: "Dr. Rachel Martinez",
    role: "Clinical Psychologist & Author",
    bookTitle: "The Resilient Mind",
    genre: "Psychology & Self-Help",
    achievement: "#1 Amazon Category Bestseller",
    quote:
      "Best Selling Publisher treated my research with deep academic respect while giving the book the commercial polish of a New York Times bestseller. Within three weeks of launch, we hit #1 in Behavioral Psychology.",
    rating: 5,
  },
  {
    author: "David C. Thornton",
    role: "Mystery Novelist",
    bookTitle: "Vengeance in the Valley",
    genre: "Mystery & Crime Thriller",
    achievement: "Barnes & Noble Top Recommended Pick",
    quote:
      "The custom cover design alone doubled my pre-orders. When the physical proof copy arrived, the binding, paper weight, and interior typography blew me away. I couldn't be prouder to see it on bookstore shelves.",
    rating: 5,
  },
  {
    author: "Sarah Lin",
    role: "Debut Sci-Fi Author",
    bookTitle: "Chronicles of the Starborn",
    genre: "Science Fiction & YA",
    achievement: "Over 15,000 Copies Sold Globally",
    quote:
      "As a first-time author, navigating KDP, copyright, and IngramSpark was terrifying. Their team managed every technical milestone transparently. Best of all, I kept 100% of my royalties and full ownership.",
    rating: 5,
  },
];

export function V2AuthorSpotlightSection() {
  return (
    <section className="relative w-full bg-[#030611] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-[#00A3E0]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative w-[97%] max-w-[1850px] mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>Author Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-white tracking-tight leading-tight mb-3">
            From Manuscript to Reader Favorite
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real authors share their experience bringing manuscripts to life with Best Selling Publisher.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {AUTHOR_STORIES.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#070e20]/90 rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_12px_32px_-6px_rgba(0,163,224,0.18)] transition-all duration-300"
            >
              <div>
                {/* Stars & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#00E5FF] bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                    <Award className="w-3 h-3 text-[#00E5FF]" />
                    <span>{story.achievement}</span>
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <Quote className="w-8 h-8 text-[#00A3E0]/40 mb-3" />
                <p className="text-xs sm:text-[13.5px] text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="font-bold text-sm text-white">{story.author}</h4>
                <p className="text-xs text-[#00A3E0] font-medium">{story.role}</p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Book: <span className="text-slate-300 font-semibold">{story.bookTitle}</span> ({story.genre})
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
