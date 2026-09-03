"use client";

import * as React from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Pause, Sparkles } from "lucide-react";

export function GsapDemo() {
  const container = React.useRef<HTMLDivElement>(null);
  const tl = React.useRef<gsap.core.Timeline | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          repeat: -1,
          yoyo: true,
          onReverseComplete: () => setIsPlaying(true),
        })
        .to(".gsap-box-1", {
          rotation: 360,
          scale: 1.15,
          borderRadius: "50%",
          duration: 1.8,
          ease: "elastic.out(1, 0.4)",
        })
        .to(
          ".gsap-box-2",
          {
            y: -25,
            scale: 1.1,
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
            duration: 1.2,
            ease: "power2.inOut",
          },
          "-=1.2"
        )
        .to(
          ".gsap-box-3",
          {
            x: 20,
            rotation: -45,
            duration: 1.4,
            ease: "back.out(1.7)",
          },
          "-=1.0"
        );
    },
    { scope: container }
  );

  const togglePlay = () => {
    if (!tl.current) return;
    if (tl.current.paused()) {
      tl.current.play();
      setIsPlaying(true);
    } else {
      tl.current.pause();
      setIsPlaying(false);
    }
  };

  const restart = () => {
    if (!tl.current) return;
    tl.current.restart();
    setIsPlaying(true);
  };

  return (
    <div
      ref={container}
      className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md flex flex-col gap-6"
    >
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/5 pb-4">
        <div>
          <h4 className="text-base font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            GSAP 3 Timeline Engine
          </h4>
          <p className="text-xs text-slate-400">
            Hardware-accelerated animation loop with `@gsap/react` scoping
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            icon={isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            onClick={togglePlay}
          >
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            icon={<RotateCcw className="w-3.5 h-3.5" />}
            onClick={restart}
          >
            Restart
          </Button>
        </div>
      </div>

      <div className="h-32 flex items-center justify-around gap-4 bg-black/30 rounded-xl p-4 border border-white/5 overflow-hidden">
        <div className="gsap-box-1 w-16 h-16 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/30">
          GSAP 1
        </div>
        <div className="gsap-box-2 w-16 h-16 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-purple-500/30">
          GSAP 2
        </div>
        <div className="gsap-box-3 w-16 h-16 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-cyan-500/30">
          GSAP 3
        </div>
      </div>
    </div>
  );
}
