"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface V2TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  spotlightColor?: string;
  isLight?: boolean;
}

/**
 * V2TiltCard
 * High-performance 3D Parallax Tilt Card with Dynamic Cursor Spotlight Glow
 * Inspired by Framer Sleek3dTiltCardver2, optimized for Next.js & TailwindCSS.
 */
export function V2TiltCard({
  children,
  className = "",
  tiltAmount = 8,
  spotlightColor = "rgba(0, 163, 224, 0.12)",
  isLight = true,
}: V2TiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [spotlightPos, setSpotlightPos] = React.useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Framer Motion spring physics with damping and stiffness
  const springConfig = { damping: 24, stiffness: 170, mass: 0.8 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    setSpotlightPos({ x: xPos, y: yPos });
    mouseX.set(xPos / rect.width - 0.5);
    mouseY.set(yPos / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full overflow-hidden transition-shadow duration-300 ${className}`}
      >
        {/* Dynamic Cursor Spotlight Radial Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: isLight
              ? `radial-gradient(480px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 65%)`
              : `radial-gradient(550px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 48%)`,
          }}
        />

        {/* Card Content with 3D Depth Preservation */}
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-20 h-full flex flex-col justify-between"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
