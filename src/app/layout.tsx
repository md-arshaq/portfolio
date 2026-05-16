import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Mohammed Arshaq | Portfolio",
  description:
    "Building strong foundations in Computer Science through problem-solving, web development, and real-world projects.",
  keywords: [
    "Mohammed Arshaq", "Portfolio", "Software Engineer",
    "Web Developer", "Full Stack Developer", "React", "Next.js",
  ],
  authors: [{ name: "Mohammed Arshaq" }],
  openGraph: {
    title: "Mohammed Arshaq | Portfolio",
    description: "Building strong foundations in Computer Science through problem-solving, web development, and real-world projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${outfit.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen bg-void" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            <AmbientBackground />
            <CursorGlow />
            <div className="relative z-10">{children}</div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
