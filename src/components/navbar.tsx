"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home", icon: "fa-solid fa-house" },
  { label: "Skills", href: "#skills", icon: "fa-solid fa-code" },
  { label: "Projects", href: "#projects", icon: "fa-solid fa-diagram-project" },
  { label: "Experience", href: "#experience", icon: "fa-solid fa-briefcase" },
  { label: "Education", href: "#education", icon: "fa-solid fa-graduation-cap" },
  { label: "Certs", href: "#certifications", icon: "fa-solid fa-award" },
  { label: "Contact", href: "#contact", icon: "fa-solid fa-envelope" },
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
            className="fixed bottom-6 left-1/2 z-[100] hidden lg:flex items-center gap-1 px-2 py-2 rounded-2xl dock-nav"
            initial={{ y: 80, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 80, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); go(item.href); }}
                  className="relative flex flex-col items-center gap-0.5 px-3.5 py-2 rounded-xl transition-all duration-200 group"
                >
                  <i className={`${item.icon} text-[13px] transition-colors duration-200 ${
                    isActive ? "text-neon-cyan" : "text-text-muted group-hover:text-text-secondary"
                  }`} />
                  <span className={`text-[9px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-neon-cyan" : "text-text-muted/60 group-hover:text-text-muted"
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-0.5 w-4 h-[2px] rounded-full bg-neon-cyan"
                      layoutId="dockIndicator"
                      style={{ boxShadow: "0 0 10px var(--neon-cyan), 0 0 20px rgba(0,229,255,0.2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
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
          background: visible ? "rgba(4,4,10,0.8)" : "transparent",
          backdropFilter: visible ? "blur(20px)" : "none",
          borderBottom: visible ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }}
            className="text-lg font-bold tracking-tight">
            <span className="gradient-text">MA</span>
            <span className="text-text-secondary font-light ml-0.5">rshaq</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-[5px] border border-border-medium bg-void-card/40 backdrop-blur-xl"
            aria-label="Menu"
          >
            <motion.span className="block w-4 h-[1.5px] bg-text-muted rounded-full"
              animate={mobileOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }} />
            <motion.span className="block w-4 h-[1.5px] bg-text-muted rounded-full"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span className="block w-4 h-[1.5px] bg-text-muted rounded-full"
              animate={mobileOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-void/97 backdrop-blur-3xl flex flex-col items-center justify-center gap-7 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => (
              <motion.a key={item.href} href={item.href}
                onClick={(e) => { e.preventDefault(); go(item.href); }}
                className={`text-xl font-semibold flex items-center gap-3 ${
                  active === item.href.slice(1) ? "text-neon-cyan" : "text-text-muted hover:text-text-primary"
                }`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <i className={`${item.icon} text-sm w-5 text-center`} />
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
