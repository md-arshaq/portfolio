import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import InteractiveCanvas from "@/components/interactive-canvas";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mohammed Arshaq | Full-Stack Developer & AI/ML Engineer",
  description:
    "Full-Stack Developer & AI/ML Engineer. Samsung PRISM Research Intern. Building intelligent systems with React, Next.js, FastAPI, PyTorch, and LangChain.",
  keywords: [
    "Mohammed Arshaq", "Portfolio", "Full Stack Developer",
    "AI ML Engineer", "Samsung PRISM", "React", "Next.js", "FastAPI",
    "PyTorch", "LangChain", "Software Engineer", "Bengaluru",
  ],
  authors: [{ name: "Mohammed Arshaq" }],
  openGraph: {
    title: "Mohammed Arshaq | Full-Stack Developer & AI/ML Engineer",
    description: "Full-Stack Developer & AI/ML Engineer. Samsung PRISM Research Intern. Building intelligent systems with modern web technologies and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${outfit.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-obsidian text-slate-100" suppressHydrationWarning>
        <SmoothScroll>
          <InteractiveCanvas />
          <div className="relative z-10">{children}</div>
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
