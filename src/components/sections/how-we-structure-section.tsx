"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Users,
  Headphones,
  FileCheck,
  Target,
  FileText,
  Lightbulb,
  Play,
  Pause,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isRightCol?: boolean;
  pinRef?: (el: HTMLDivElement | null) => void;
  cardRef?: (el: HTMLDivElement | null) => void;
  isActive?: boolean;
  isCompleted?: boolean;
  isHovered?: boolean;
  hasArrivalBurst?: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

function StepCard({
  number,
  icon,
  title,
  description,
  isRightCol,
  pinRef,
  cardRef,
  isActive,
  isCompleted,
  isHovered,
  hasArrivalBurst,
  className = "",
  onMouseEnter,
  onMouseLeave,
  onClick,
}: StepCardProps) {
  const isHighlighted = isActive || isHovered;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 transition-all duration-400 transform cursor-pointer ${
        isHighlighted
          ? "border-2 border-[#00A3E0] shadow-[0_12px_28px_-6px_rgba(0,163,224,0.18),0_4px_10px_-2px_rgba(0,0,0,0.03)] ring-1 ring-[#00A3E0]/30 -translate-y-1.5"
          : isCompleted
          ? "border border-cyan-200/80 shadow-[0_4px_16px_-4px_rgba(12,24,42,0.06)] hover:border-cyan-300 hover:shadow-[0_8px_22px_-6px_rgba(0,163,224,0.14)] hover:-translate-y-1"
          : "border border-slate-200/90 shadow-[0_3px_14px_-4px_rgba(12,24,42,0.05)] hover:border-cyan-300/80 hover:shadow-[0_8px_20px_-6px_rgba(0,163,224,0.12)] hover:-translate-y-1"
      } ${className}`}
    >
      {/* Horizontal Micro-Dock Stem anchoring the pin directly to the card border */}
      <div
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-[2px] w-4 z-20 pointer-events-none transition-all duration-300 ${
          isRightCol
            ? "-left-4 bg-gradient-to-r from-[#00A3E0] to-transparent"
            : "-right-4 bg-gradient-to-l from-[#00A3E0] to-transparent"
        } ${isHighlighted || isCompleted ? "opacity-100 bg-[#00A3E0]" : "opacity-40"}`}
      />

      {/* Waypoint Pin on Card Border matching user layout */}
      <div
        ref={pinRef}
        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 z-30 w-8 h-8 items-center justify-center pointer-events-none transition-all duration-300 ${
          isRightCol ? "-left-4" : "-right-4"
        }`}
      >
        {/* Arrival Shockwave Ripple when the dot touches this card */}
        {(hasArrivalBurst || isHighlighted) && (
          <span className="absolute inset-0 rounded-full bg-[#00A3E0] opacity-40 animate-ping pointer-events-none" />
        )}

        {/* Clean, Crisp Multi-Layer Waypoint Disc (NO muddy blur) */}
        <div
          className={`w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 shadow-sm ${
            isHighlighted
              ? "scale-115 border-[#0080ff] ring-4 ring-cyan-200/60"
              : isCompleted
              ? "border-[#00A3E0] ring-2 ring-cyan-100"
              : "border-slate-300 group-hover:border-[#00A3E0]"
          }`}
        >
          {/* Inner Jewel */}
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              isHighlighted
                ? "bg-[#0080ff] scale-125"
                : isCompleted
                ? "bg-[#00A3E0]"
                : "bg-slate-300 group-hover:bg-[#00A3E0]"
            }`}
          />
        </div>
      </div>

      <div className="flex items-start gap-4 sm:gap-5">
        {/* Left: Number & Circular Icon Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 pt-0.5">
          <span
            className={`font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight transition-all duration-300 ${
              isHighlighted
                ? "text-[#0080ff] scale-105"
                : isCompleted
                ? "text-[#00A3E0]"
                : "text-slate-400 group-hover:text-[#00A3E0]"
            }`}
          >
            {number}
          </span>
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
              isHighlighted
                ? "border-cyan-400 bg-[#00A3E0] text-white shadow-[0_0_16px_rgba(0,163,224,0.35)] scale-105"
                : isCompleted
                ? "border-cyan-300 bg-cyan-50 text-[#00A3E0]"
                : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-[#00A3E0]"
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Right: Title, Status Badge & Description */}
        <div className="flex-1 min-w-0">
          {/* Status Badge Pill */}
          <div className="flex items-center gap-2 mb-1">
            {isActive ? (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide uppercase bg-cyan-50 text-[#0080ff] border border-cyan-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0080ff] animate-ping" />
                Active Step
              </span>
            ) : isCompleted ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold tracking-wide uppercase bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Connected
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-medium tracking-wide uppercase bg-slate-100 text-slate-400">
                Phase {number}
              </span>
            )}
          </div>

          <h3
            className={`font-bold text-base sm:text-lg lg:text-[18px] mb-1 leading-snug transition-colors duration-300 ${
              isHighlighted ? "text-[#0080ff]" : "text-[#0B1B36] group-hover:text-[#00A3E0]"
            }`}
          >
            {title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface Segment {
  p0: { x: number; y: number };
  p1: { x: number; y: number };
  p2: { x: number; y: number };
  p3: { x: number; y: number };
  len: number;
  pathD: string;
}

function getCubicBezier(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number },
  t: number
) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const mt3 = mt2 * mt;
  const t2 = t * t;
  const t3 = t2 * t;

  return {
    x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x,
    y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y,
  };
}

function approximateLength(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number },
  samples = 30
) {
  let len = 0;
  let prev = p0;
  for (let i = 1; i <= samples; i++) {
    const pt = getCubicBezier(p0, p1, p2, p3, i / samples);
    const dx = pt.x - prev.x;
    const dy = pt.y - prev.y;
    len += Math.sqrt(dx * dx + dy * dy);
    prev = pt;
  }
  return len;
}

export function HowWeStructureSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const pinRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  // Coordinates & Segment geometry
  const [segments, setSegments] = React.useState<Segment[]>([]);
  const [pts, setPts] = React.useState<{ x: number; y: number }[]>([]);

  // User interaction & animation state
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const [burstPin, setBurstPin] = React.useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState<boolean>(false);

  // Continuous progress from 0.0 (Step 01) to 5.0 (Step 06) driven by scroll
  const [progress, setProgress] = React.useState<number>(0);

  const targetProgressRef = React.useRef<number>(0);
  const currentProgressRef = React.useRef<number>(0);
  const lastActiveStepRef = React.useRef<number>(0);

  const stepsData = [
    {
      number: "01",
      stepIdx: 0,
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />,
      title: "Experienced Project Team",
      shortLabel: "Team",
      description:
        "Each project is assigned to the editing, design, formatting, publishing, or marketing roles included in the approved scope.",
    },
    {
      number: "02",
      stepIdx: 1,
      icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />,
      title: "Publishing Support",
      shortLabel: "Support",
      description:
        "We coordinate the selected publishing services against documented deliverables, review checkpoints, and release requirements.",
    },
    {
      number: "03",
      stepIdx: 2,
      icon: <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />,
      title: "Range of Services",
      shortLabel: "Services",
      description:
        "Available services include writing support, editing, cover design, formatting, publishing setup, marketing assets, articles, press releases, and scripts. The signed order identifies the services included in each project.",
    },
    {
      number: "04",
      stepIdx: 3,
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />,
      title: "Defined Project Goals",
      shortLabel: "Goals",
      description:
        "The project brief records the manuscript goals, deliverables, review responsibilities, and acceptance criteria before work begins.",
    },
    {
      number: "05",
      stepIdx: 4,
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />,
      title: "Project-Specific Quotes",
      shortLabel: "Quotes",
      description:
        "Pricing is based on the services, manuscript condition, deliverables, and schedule documented in the approved order.",
    },
    {
      number: "06",
      stepIdx: 5,
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />,
      title: "Passion and Creativity",
      shortLabel: "Launch",
      description:
        "The project plan assigns the roles responsible for each deliverable and records the author review checkpoints required before release.",
    },
  ];

  const leftSteps = [stepsData[0], stepsData[2], stepsData[4]];
  const rightSteps = [stepsData[1], stepsData[3], stepsData[5]];

  // Measure pins and build the 5 bezier segments
  const calculateGeometry = React.useCallback(() => {
    if (!containerRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();
    if (cRect.width === 0 || cRect.height === 0) return;

    const newPts: { x: number; y: number }[] = [];
    for (let i = 0; i < 6; i++) {
      const pinEl = pinRefs.current[i];
      if (!pinEl) return;
      const r = pinEl.getBoundingClientRect();
      newPts.push({
        x: r.left + r.width / 2 - cRect.left,
        y: r.top + r.height / 2 - cRect.top,
      });
    }
    setPts(newPts);

    const newSegs: Segment[] = [];
    for (let i = 0; i < 5; i++) {
      const from = newPts[i];
      const to = newPts[i + 1];
      let p1: { x: number; y: number };
      let p2: { x: number; y: number };

      if (i % 2 === 0) {
        // Left to Right (01 -> 02, 03 -> 04, 05 -> 06)
        const dx = to.x - from.x;
        p1 = { x: from.x + dx * 0.45, y: from.y };
        p2 = { x: to.x - dx * 0.45, y: to.y };
      } else {
        // Right to Left (02 -> 03, 04 -> 05)
        const dx = from.x - to.x;
        const dy = to.y - from.y;
        p1 = { x: from.x - dx * 0.45, y: from.y + dy * 0.15 };
        p2 = { x: to.x + dx * 0.45, y: to.y - dy * 0.15 };
      }

      const len = approximateLength(from, p1, p2, to);
      const pathD = `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} C ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}, ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
      newSegs.push({ p0: from, p1, p2, p3: to, len, pathD });
    }

    setSegments(newSegs);
  }, []);

  React.useEffect(() => {
    calculateGeometry();

    const handleResize = () => calculateGeometry();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => calculateGeometry());
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const t1 = setTimeout(calculateGeometry, 80);
    const t2 = setTimeout(calculateGeometry, 300);
    const t3 = setTimeout(calculateGeometry, 800);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [calculateGeometry]);

  // Calculate target progress [0.0 to 5.0] strictly from user scroll position
  // When scrolling DOWN -> progresses 0.0 -> 5.0 (Step 01 down to Step 06)
  // When scrolling UP   -> reverses 5.0 -> 0.0 (Step 06 back to Step 01)
  const calculateTargetFromScroll = React.useCallback(() => {
    if (!containerRef.current) return 0;

    // Focal eye-level reading line in the viewport (48% from top)
    const focusY = window.innerHeight * 0.48;

    // Check individual card centers
    const cardCenters: number[] = [];
    for (let i = 0; i < 6; i++) {
      const el = cardRefs.current[i];
      if (el) {
        const rect = el.getBoundingClientRect();
        cardCenters.push(rect.top + rect.height * 0.45);
      }
    }

    if (cardCenters.length === 6) {
      if (focusY <= cardCenters[0]) {
        return 0;
      }
      if (focusY >= cardCenters[5]) {
        return 5.0;
      }
      for (let i = 0; i < 5; i++) {
        const topY = cardCenters[i];
        const botY = cardCenters[i + 1];
        if (focusY >= topY && focusY <= botY) {
          const span = botY - topY;
          return span > 0 ? i + (focusY - topY) / span : i;
        }
      }
    }

    // Fallback if cards not yet measured
    const cRect = containerRef.current.getBoundingClientRect();
    const totalH = cRect.height;
    if (totalH <= 0) return 0;
    const raw = ((focusY - cRect.top) / totalH) * 5.0;
    return Math.max(0, Math.min(5, raw));
  }, []);

  // Jump or smooth scroll to specific step when user clicks an interactive pill or card
  const handleSelectStep = (stepIdx: number) => {
    const el = cardRefs.current[stepIdx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      targetProgressRef.current = stepIdx;
    }
  };

  // Scroll tracking and smooth damping (lerp) engine:
  // Liquid-smooth inertia so notched scroll wheels glide continuously
  React.useEffect(() => {
    let animId: number;

    const onScroll = () => {
      targetProgressRef.current = calculateTargetFromScroll();
    };

    // Any manual wheel or touch interaction pauses auto-tour
    const onUserInteract = () => {
      if (isAutoPlaying) {
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onUserInteract, { passive: true });
    window.addEventListener("touchmove", onUserInteract, { passive: true });

    // Initial check
    const initialTarget = calculateTargetFromScroll();
    targetProgressRef.current = initialTarget;
    currentProgressRef.current = initialTarget;
    setProgress(initialTarget);

    const LERP = 0.14; // smooth fluid damping

    const tick = () => {
      const target = targetProgressRef.current;
      const diff = target - currentProgressRef.current;

      if (Math.abs(diff) > 0.001) {
        currentProgressRef.current += diff * LERP;
        const p = currentProgressRef.current;
        setProgress(p);

        // Detect step change to trigger burst on pin
        const activeIdx = Math.min(5, Math.max(0, Math.floor(p + 0.15)));
        if (activeIdx !== lastActiveStepRef.current) {
          setBurstPin(activeIdx);
          setTimeout(() => setBurstPin(null), 700);
          lastActiveStepRef.current = activeIdx;
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onUserInteract);
      window.removeEventListener("touchmove", onUserInteract);
      cancelAnimationFrame(animId);
    };
  }, [calculateTargetFromScroll, isAutoPlaying]);

  // Optional auto-tour timer if user clicks play
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      const next = (lastActiveStepRef.current + 1) % 6;
      handleSelectStep(next);
    }, 3400);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Geometry derivations for current step, segment, and moving dot
  const currentSeg = Math.min(4, Math.floor(progress));
  const segProgress = Math.min(1.0, Math.max(0, progress - currentSeg));
  const activeStep = Math.min(5, Math.max(0, Math.floor(progress + 0.15)));

  // Compute current dot coordinates along the active bezier curve
  let dotPos: { x: number; y: number } | null = null;
  let trail1Pos: { x: number; y: number } | null = null;
  let trail2Pos: { x: number; y: number } | null = null;

  if (segments.length === 5 && pts.length === 6) {
    if (progress <= 0.01) {
      dotPos = pts[0];
    } else if (progress >= 4.99) {
      dotPos = pts[5];
    } else {
      const seg = segments[currentSeg];
      if (seg) {
        dotPos = getCubicBezier(seg.p0, seg.p1, seg.p2, seg.p3, segProgress);
        trail1Pos = getCubicBezier(
          seg.p0,
          seg.p1,
          seg.p2,
          seg.p3,
          Math.max(0, segProgress - 0.05)
        );
        trail2Pos = getCubicBezier(
          seg.p0,
          seg.p1,
          seg.p2,
          seg.p3,
          Math.max(0, segProgress - 0.1)
        );
      }
    }
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F5F9FD] via-[#FFFFFF] to-[#EFF7FD] pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-10 overflow-hidden font-sans">
      {/* Keyframe animations for flowing pearls inside connected pipeline */}
      <style>{`
        @keyframes flowPearls {
          from {
            stroke-dashoffset: 38;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* Background Decorative Sketches */}
      <div className="absolute left-0 bottom-6 lg:bottom-12 w-72 sm:w-96 lg:w-[460px] pointer-events-none select-none opacity-20 lg:opacity-35 mix-blend-multiply z-0 transform -translate-x-10 sm:translate-x-0">
        <Image
          src="/vintage-book-quill.jpg"
          alt="Vintage book with quill pen sketch"
          width={560}
          height={420}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="absolute right-0 bottom-4 lg:bottom-10 w-72 sm:w-96 lg:w-[440px] pointer-events-none select-none opacity-20 lg:opacity-35 mix-blend-multiply z-0 transform translate-x-10 sm:translate-x-0">
        <Image
          src="/vintage-book-stack.jpg"
          alt="Vintage stacked books sketch"
          width={560}
          height={420}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Subtle Blueprint Ambient Grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.09] z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-50,220 C400,320 800,120 1650,260"
          stroke="#00A3E0"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          fill="none"
        />
        <path
          d="M-50,680 C350,560 950,780 1650,610"
          stroke="#00A3E0"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-sm sm:text-base font-semibold text-[#00A3E0] tracking-wide mb-2">
            Plan Your Next Publishing Project
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-medium text-[#0B1B36] tracking-tight leading-tight">
            How We Structure Publishing Support
          </h2>

          {/* Centered Cyan Diamond Accent Divider */}
          <div className="flex items-center justify-center gap-2.5 mt-3.5">
            <div className="w-14 sm:w-20 h-[1.5px] bg-[#00A3E0]/70" />
            <div className="w-2.5 h-2.5 rotate-45 border-1.5 border-[#00A3E0] bg-white shadow-sm" />
            <div className="w-14 sm:w-20 h-[1.5px] bg-[#00A3E0]/70" />
          </div>
        </div>

        {/* Uniqueness Feature 1: Interactive Roadmap Controller Dock (Frosted Glass Scrubber) */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-[0_4px_20px_-4px_rgba(12,24,42,0.06)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B1B36]">
              <Sparkles className="w-4 h-4 text-[#00A3E0]" />
              <span>Interactive Publishing Roadmap</span>
              <span className="text-slate-400">·</span>
              <span className="text-[#00A3E0] font-bold">
                Step {stepsData[activeStep].number} of 06: {stepsData[activeStep].title}
              </span>
            </div>

            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-cyan-50 hover:text-[#00A3E0] transition-colors"
              title={isAutoPlaying ? "Pause Auto-Tour (Scroll is always active)" : "Resume Auto-Tour (or scroll down)"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Auto-Tour: Playing</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Scroll / Auto-Tour</span>
                </>
              )}
            </button>
          </div>

          {/* Clickable Step Pills */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
            {stepsData.map((step) => {
              const isPillActive = activeStep === step.stepIdx;
              const isPillCompleted = progress >= step.stepIdx + 0.85;
              return (
                <button
                  key={step.number}
                  onClick={() => handleSelectStep(step.stepIdx)}
                  className={`flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    isPillActive
                      ? "bg-[#00A3E0] text-white shadow-sm shadow-cyan-500/30 scale-[1.02]"
                      : isPillCompleted
                      ? "bg-cyan-50/80 text-[#0080ff] border border-cyan-200/80 hover:bg-cyan-100/60"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-[#0B1B36]"
                  }`}
                >
                  <span className="opacity-75">{step.number}</span>
                  <span className="truncate">{step.shortLabel}</span>
                  {isPillCompleted && <CheckCircle2 className="w-3 h-3 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Steps Grid with Dynamic Crisp Vector Connector */}
        <div ref={containerRef} className="relative">
          {/* Dynamic SVG Connector (Desktop LG+) - Crisp & Clean (Zero Muddy Blurs) */}
          {segments.length === 5 && (
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
              {/* 1. Underlying Crisp Blueprint Guide Track (Hairline, sharp, no blur) */}
              {segments.map((seg, idx) => (
                <path
                  key={`guide-${idx}`}
                  d={seg.pathD}
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              ))}

              {/* 2. Completed Segments: Crisp Vivid Cyan Conduit with Slow Gliding Pearls */}
              {segments.map((seg, idx) => {
                const isCompletedSeg = idx < currentSeg;
                if (!isCompletedSeg) return null;

                return (
                  <g key={`completed-${idx}`}>
                    {/* Crisp cyan baseline */}
                    <path
                      d={seg.pathD}
                      fill="none"
                      stroke="#00A3E0"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                    {/* Calm slow-gliding luminous pearls */}
                    <path
                      d={seg.pathD}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.2"
                      strokeDasharray="4 18"
                      strokeLinecap="round"
                      style={{
                        animation: "flowPearls 12s linear infinite",
                      }}
                    />
                  </g>
                );
              })}

              {/* 3. In-Progress Segment: Crisp progressive draw up to current dot position */}
              {segments[currentSeg] && (
                <g key="drawing-seg">
                  <path
                    d={segments[currentSeg].pathD}
                    fill="none"
                    stroke="#00A3E0"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeDasharray={segments[currentSeg].len}
                    strokeDashoffset={
                      segments[currentSeg].len * (1 - segProgress)
                    }
                  />
                  <path
                    d={segments[currentSeg].pathD}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeDasharray={segments[currentSeg].len}
                    strokeDashoffset={
                      segments[currentSeg].len * (1 - segProgress)
                    }
                  />
                </g>
              )}

              {/* 4. The Celestial Courier Spark (Moving Dot) - Crisp, luminous, no dirty blur */}
              {dotPos && (
                <g>
                  {/* Trailing Micro-Spark 2 */}
                  {trail2Pos && (
                    <circle
                      cx={trail2Pos.x}
                      cy={trail2Pos.y}
                      r="2"
                      fill="#7dd3fc"
                      opacity="0.5"
                    />
                  )}

                  {/* Trailing Micro-Spark 1 */}
                  {trail1Pos && (
                    <circle
                      cx={trail1Pos.x}
                      cy={trail1Pos.y}
                      r="3.2"
                      fill="#38bdf8"
                      opacity="0.8"
                    />
                  )}

                  {/* Outer Crisp Cyan Ring */}
                  <circle
                    cx={dotPos.x}
                    cy={dotPos.y}
                    r="8.5"
                    fill="#00A3E0"
                  />

                  {/* Inner Pure White Hot Core */}
                  <circle
                    cx={dotPos.x}
                    cy={dotPos.y}
                    r="4.2"
                    fill="#FFFFFF"
                  />
                </g>
              )}
            </svg>
          )}

          {/* Cards 2-Column Grid on Desktop, Sequential 01-06 Stack on Mobile */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-28 lg:gap-y-10 relative z-10">
            {/* Left Column (01, 03, 05) */}
            <div className="contents lg:flex lg:flex-col lg:gap-10">
              {leftSteps.map((step) => {
                const isCardCompleted = progress >= step.stepIdx + 0.85;
                const isCardActive =
                  (activeStep === step.stepIdx && !isCardCompleted) ||
                  (step.stepIdx === 0 && progress < 0.85);
                const isCardBurst = burstPin === step.stepIdx;
                const mobileOrderClass =
                  step.stepIdx === 0
                    ? "order-1 lg:order-none"
                    : step.stepIdx === 2
                    ? "order-3 lg:order-none"
                    : "order-5 lg:order-none";

                return (
                  <StepCard
                    key={step.number}
                    number={step.number}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    className={mobileOrderClass}
                    pinRef={(el) => {
                      pinRefs.current[step.stepIdx] = el;
                    }}
                    cardRef={(el) => {
                      cardRefs.current[step.stepIdx] = el;
                    }}
                    isActive={isCardActive}
                    isCompleted={isCardCompleted}
                    hasArrivalBurst={isCardBurst}
                    isHovered={hoveredIdx === step.stepIdx}
                    onMouseEnter={() => setHoveredIdx(step.stepIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => handleSelectStep(step.stepIdx)}
                  />
                );
              })}
            </div>

            {/* Right Column (02, 04, 06) */}
            <div className="contents lg:flex lg:flex-col lg:gap-10 lg:pt-14">
              {rightSteps.map((step) => {
                const isCardCompleted = progress >= step.stepIdx + 0.85;
                const isCardActive =
                  (activeStep === step.stepIdx && !isCardCompleted) ||
                  (step.stepIdx === 0 && progress < 0.85);
                const isCardBurst = burstPin === step.stepIdx;
                const mobileOrderClass =
                  step.stepIdx === 1
                    ? "order-2 lg:order-none"
                    : step.stepIdx === 3
                    ? "order-4 lg:order-none"
                    : "order-6 lg:order-none";

                return (
                  <StepCard
                    key={step.number}
                    number={step.number}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    isRightCol
                    className={mobileOrderClass}
                    pinRef={(el) => {
                      pinRefs.current[step.stepIdx] = el;
                    }}
                    cardRef={(el) => {
                      cardRefs.current[step.stepIdx] = el;
                    }}
                    isActive={isCardActive}
                    isCompleted={isCardCompleted}
                    hasArrivalBurst={isCardBurst}
                    isHovered={hoveredIdx === step.stepIdx}
                    onMouseEnter={() => setHoveredIdx(step.stepIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => handleSelectStep(step.stepIdx)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons - Standardized Global System */}
        <div className="w-full max-w-md mx-auto sm:max-w-none flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-14 sm:mt-16 relative z-20">
          <a
            href="#consultation"
            className="cta-btn-base cta-btn-primary cta-btn-item"
          >
            <span>Connect with Us!</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="tel:+18556666675"
            className="cta-btn-base cta-btn-outline-light cta-btn-item"
          >
            <Phone className="w-4 h-4" />
            <span>Call us NOW!</span>
          </a>
        </div>
      </div>
    </section>
  );
}
