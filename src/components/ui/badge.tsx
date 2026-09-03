import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "outline";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-800 text-slate-300 border-slate-700/60",
    primary: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    secondary: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    outline: "bg-transparent text-slate-400 border-white/10",
  };

  const dotColors = {
    default: "bg-slate-400",
    primary: "bg-indigo-400",
    secondary: "bg-purple-400",
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotColors[variant]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotColors[variant]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
