"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Simple status badge with active pulsing beacon dot */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-steel opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-steel"></span>
          </span>
          <span className="text-zinc-300">Samsung PRISM R&D Intern</span>
        </div>

        {/* Elegant Gradient Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="gradient-text-steel">Mohammed Arshaq</span>
        </h1>

        {/* Minimal Sub-Headline */}
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
          Full-Stack Developer & AI/ML Engineer. Building clean, intelligent systems using PyTorch, FastAPI, Next.js, and retrieval-augmented generation (RAG) pipelines.
        </p>

        {/* Text Stat Ribbon (Separated by bullets) */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono text-zinc-500 py-3 border-y border-white/5 max-w-md mx-auto">
          <span className="hover:text-accent-steel transition-colors cursor-default">8.87 CGPA</span>
          <span>•</span>
          <span className="hover:text-accent-steel transition-colors cursor-default">1500+ DSA Problems</span>
          <span>•</span>
          <span className="hover:text-accent-steel transition-colors cursor-default">LeetCode 1600+</span>
        </div>

        {/* Action Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.08)] hover:scale-[1.02]"
          >
            <span>Selected Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:border-accent-steel/30 font-bold text-xs transition-colors"
          >
            <span>Get in touch</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}