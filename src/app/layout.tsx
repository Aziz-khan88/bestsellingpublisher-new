import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-custom",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-custom",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Selling Publisher | Prepare Your Book for Every Channel",
  description:
    "Tailored publishing solutions, editorial, design, formatting, and worldwide distribution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", sansFont.variable, serifFont.variable)}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#02050e] text-slate-100">
        {children}
      </body>
    </html>
  );
}
