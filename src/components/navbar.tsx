"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Trophy,
  Mail,
  Command,
  FileText,
  Menu,
  X,
} from "lucide-react";
import CommandPalette from "./command-palette";

const navItems = [
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Sparkles },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Achievements", href: "#achievements", icon: Trophy },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function DockNav() {
  const [active, setActive] = useState("Projects");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActive(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 transition-all duration-300 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-accent-steel/30 hover:scale-[1.01] transition-all group"
          >
            <span className="text-xs font-bold font-mono tracking-tight text-white group-hover:text-accent-steel transition-colors">
              arshaq.dev
            </span>
          </a>

          {/* Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/85 px-2 py-1.5 rounded-full border border-white/5 shadow-xl">
            {navItems.map((item) => {
              const isActive = active.toLowerCase() === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`relative px-4 py-1.5 rounded-full text-xs transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5 border border-white/10 shadow-[0_0_12px_rgba(56,189,248,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Action Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="bg-zinc-900/80 px-3 py-1.5 rounded-xl border border-white/5 hover:border-accent-steel/30 text-zinc-300 hover:text-white transition-all text-xs flex items-center gap-2 group"
              title="Search (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent-steel transition-colors" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline text-[9px] text-zinc-500 font-mono">⌘K</kbd>
            </button>

            <a
              href="https://drive.google.com/file/d/1SAFGN7iEH5fl-QciYmAc5vVxwZBQVX4P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-bold transition-all shadow-[0_4px_15px_rgba(255,255,255,0.05)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden bg-zinc-900/80 p-2 rounded-xl border border-white/5 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 bg-zinc-900/90 rounded-2xl p-4 border border-white/5 shadow-2xl pointer-events-auto max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-2 gap-2 mb-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white text-xs font-mono"
                    >
                      <Icon className="w-3.5 h-3.5 text-accent-steel" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>

              <a
                href="https://drive.google.com/file/d/1SAFGN7iEH5fl-QciYmAc5vVxwZBQVX4P/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}