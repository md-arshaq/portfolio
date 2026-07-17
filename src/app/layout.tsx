import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import AmbientBackground from "@/components/ambient-background";
import CursorGlow from "@/components/cursor-glow";

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
      <body className="min-h-screen bg-void" suppressHydrationWarning>
        <SmoothScroll>
          <AmbientBackground />
          <CursorGlow />
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
