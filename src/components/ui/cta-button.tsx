import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CtaButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline-light" | "outline-dark";
  fullWidthOnMobile?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  asButton?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const ctaButtonVariants = {
  base: "h-12 sm:h-[50px] px-6 sm:px-8 rounded-xl font-sans font-bold text-[14.5px] sm:text-[15.5px] inline-flex items-center justify-center gap-2.5 whitespace-nowrap transition-all duration-200 active:scale-[0.98] select-none cursor-pointer",
  fullWidth: "w-full sm:w-auto sm:min-w-[190px]",
  variants: {
    primary:
      "bg-[#00A3E0] hover:bg-[#008fc0] text-white shadow-[0_4px_16px_rgba(0,163,224,0.28)] hover:shadow-[0_8px_24px_rgba(0,163,224,0.42)] hover:scale-[1.01]",
    "outline-light":
      "bg-white hover:bg-cyan-50/70 border-2 border-[#00A3E0] text-[#00A3E0] shadow-sm hover:shadow-md hover:scale-[1.01]",
    "outline-dark":
      "bg-[#030d1d]/85 hover:bg-[#061833] border-2 border-[#00A3E0] text-white shadow-sm hover:shadow-md hover:scale-[1.01]",
  },
};

export const CtaButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, CtaButtonProps>(
  (
    {
      variant = "primary",
      fullWidthOnMobile = true,
      icon,
      iconPosition = "right",
      asButton = false,
      type = "button",
      className,
      children,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const combinedClassName = cn(
      ctaButtonVariants.base,
      fullWidthOnMobile && ctaButtonVariants.fullWidth,
      ctaButtonVariants.variants[variant],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0 flex items-center">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0 flex items-center">{icon}</span>
        )}
      </>
    );

    if (asButton || !href) {
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          type={type}
          onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
          className={combinedClassName}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {content}
        </button>
      );
    }

    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          className={combinedClassName}
          {...props}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        href={href}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={combinedClassName}
        {...props}
      >
        {content}
      </a>
    );
  }
);

CtaButton.displayName = "CtaButton";

export interface CtaButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "center" | "right";
}

export function CtaButtonGroup({
  align = "left",
  className,
  children,
  ...props
}: CtaButtonGroupProps) {
  const alignClass =
    align === "center"
      ? "justify-center"
      : align === "right"
      ? "justify-end"
      : "justify-start";

  return (
    <div
      className={cn(
        "w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4",
        alignClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
