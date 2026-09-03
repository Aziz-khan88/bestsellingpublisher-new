"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glow" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm rounded-xl gap-2",
      lg: "px-7 py-3.5 text-base rounded-2xl gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110",
      secondary:
        "bg-slate-800/90 text-slate-100 border border-slate-700/60 hover:bg-slate-700/80 hover:border-slate-600",
      outline:
        "bg-transparent border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400",
      glow:
        "relative bg-slate-900 text-white font-semibold border border-indigo-500/50 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:border-purple-400",
      ghost:
        "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          icon && <span className="inline-flex shrink-0">{icon}</span>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
