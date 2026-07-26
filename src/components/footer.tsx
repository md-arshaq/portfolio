"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-obsidian-elevated/80 backdrop-blur-xl py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-slate-400">
            © 2026 Mohammed Arshaq. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Engineered with</span>
          <span className="text-neon-cyan font-bold">Next.js 15</span>
          <span>·</span>
          <span className="text-neon-emerald font-bold">Tailwind</span>
          <span>·</span>
          <span className="text-neon-violet font-bold">Framer Motion</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-2xl obsidian-glass border border-white/10 text-slate-300 hover:text-white hover:border-neon-cyan/40 transition-all flex items-center gap-1.5 text-xs font-mono"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}