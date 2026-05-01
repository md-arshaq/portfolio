"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const ids = navItems.map((i) => i.href.slice(1));
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && el.getBoundingClientRect().top <= 150) {
        setActive(ids[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-bg-base/75 backdrop-blur-2xl border-b border-glass-border shadow-[0_2px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }}
            className="relative group text-xl font-extrabold tracking-tight">
            <span className="gradient-text">MA</span>
            <span className="text-text-secondary font-light ml-0.5 hidden sm:inline">rshaq</span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-400" />
          </a>

          {/* Desktop nav — pill bar */}
          <div className="hidden lg:flex items-center gap-0.5 rounded-full px-1.5 py-1 border border-glass-border bg-bg-card/40 backdrop-blur-xl">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}
                onClick={(e) => { e.preventDefault(); go(item.href); }}
                className={`relative px-3.5 py-1.5 text-[12px] font-medium rounded-full transition-colors duration-200 ${
                  active === item.href.slice(1) ? "text-text" : "text-text-muted hover:text-text-secondary"
                }`}>
                {item.label}
                {active === item.href.slice(1) && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/15"
                    layoutId="navPill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2.5">
            <motion.button onClick={toggleTheme} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.92 }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-text-muted hover:text-primary border border-glass-border bg-bg-card/30 backdrop-blur-xl transition-all hover:border-primary/20"
              aria-label="Toggle theme">
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.i key="sun" className="fa-solid fa-sun text-xs"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} />
                ) : (
                  <motion.i key="moon" className="fa-solid fa-moon text-xs"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} />
                )}
              </AnimatePresence>
            </motion.button>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[5px] border border-glass-border bg-bg-card/30 backdrop-blur-xl"
              aria-label="Menu">
              <motion.span className="block w-4 h-[1.5px] bg-text-muted rounded-full"
                animate={mobileOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }} />
              <motion.span className="block w-4 h-[1.5px] bg-text-muted rounded-full"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="block w-4 h-[1.5px] bg-text-muted rounded-full"
                animate={mobileOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 z-[99] bg-bg-base/97 backdrop-blur-3xl flex flex-col items-center justify-center gap-7 lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {navItems.map((item, i) => (
              <motion.a key={item.href} href={item.href}
                onClick={(e) => { e.preventDefault(); go(item.href); }}
                className={`text-2xl font-semibold ${active === item.href.slice(1) ? "gradient-text" : "text-text-muted hover:text-text"}`}
                initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }} transition={{ delay: i * 0.05, duration: 0.35 }}>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
