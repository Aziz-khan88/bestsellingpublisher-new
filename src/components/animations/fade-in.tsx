"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  fullWidth = false,
  className,
  ...props
}: FadeInProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 24, x: 0 };
      case "down":
        return { y: -24, x: 0 };
      case "left":
        return { x: 24, y: 0 };
      case "right":
        return { x: -24, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={fullWidth ? `w-full ${className ?? ""}` : className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
