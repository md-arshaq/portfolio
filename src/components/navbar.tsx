"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Code2,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Trophy,
  Mail,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", Icon: Home },
  { label: "Skills", href: "#skills", Icon: Code2 },
  { label: "Projects", href: "#projects", Icon: FolderKanban },
  { label: "Experience", href: "#experience", Icon: Briefcase },
  { label: "Education", href: "#education", Icon: GraduationCap },
  { label: "Achievements", href: "#achievements", Icon: Trophy },
  { label: "Contact", href: "#contact", Icon: Mail },
];

export default function DockNav() {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > window.innerHeight * 0.4);
    const ids = navItems.map((i) => i.href.slice(1));
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && el.getBoundingClientRect().top <= 200) {
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
      {/* Desktop floating dock — bottom center */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            className="fixed bottom-6 left-1/2 z-[100] hidden lg:flex items-center gap-0.5 px-2.5 py-2.5 rounded-2xl dock-nav"
            initial={{ y: 80, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 80, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              const Icon = item.Icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); go(item.href); }}
                  className="relative flex flex-col items-center gap-0.5 px-3.5 py-2 rounded-xl transition-all duration-200 group"
                >
                  {/* Active pill background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-neb-indigo/10 border border-neb-indigo/15"
                      layoutId="dockPill"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  <Icon className={`relative z-10 w-[14px] h-[14px] transition-colors duration-200 ${isActive
                      ? "text-neb-indigo"
                      : "text-text-muted group-hover:text-text-secondary"
                      }`}
                  />
                  <span
                    className={`relative z-10 text-[9px] font-semibold tracking-wide transition-colors duration-200 ${isActive
                      ? "text-neb-indigo"
                      : "text-text-muted/50 group-hover:text-text-muted"
                      }`}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile top bar */}
      <motion.header
        className="fixed top-0 inset-x-0 z-[100] lg:hidden transition-all duration-500"
        style={{
          background: visible ? "rgba(6,8,15,0.85)" : "transparent",
          backdropFilter: visible ? "blur(24px)" : "none",
          borderBottom: visible
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); go("#home"); }}
            className="text-lg font-bold tracking-tight"
          >
            <span className="gradient-text">MA</span>
            <span className="text-text-secondary font-light ml-0.5">rshaq</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-[5px] border border-border-medium bg-void-card/40 backdrop-blur-xl"
            aria-label="Menu"
          >
            <motion.span
              className="block w-4 h-[1.5px] bg-text-muted rounded-full"
              animate={mobileOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block w-4 h-[1.5px] bg-text-muted rounded-full"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block w-4 h-[1.5px] bg-text-muted rounded-full"
              animate={mobileOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-void/97 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => {
              const Icon = item.Icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); go(item.href); }}
                  className={`text-xl font-semibold flex items-center gap-3 ${active === item.href.slice(1)
                    ? "text-neb-indigo"
                    : "text-text-muted hover:text-text-primary"
                    }`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}