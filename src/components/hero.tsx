"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const roles = ["Software Engineer", "Web Developer", "Problem Solver"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = roles[roleIndex];
    const next = isDeleting
      ? current.substring(0, text.length - 1)
      : current.substring(0, text.length + 1);
    setText(next);
    if (!isDeleting && next === current) setTimeout(() => setIsDeleting(true), 2200);
    else if (isDeleting && next === "") {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
  }, [text, roleIndex, isDeleting]);

  useEffect(() => {
    const t = setTimeout(tick, isDeleting ? 40 : 85);
    return () => clearTimeout(t);
  }, [tick, isDeleting]);

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const rise = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient glow — just two soft orbs, no clutter */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 65%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div className="relative z-10 text-center max-w-4xl" variants={stagger} initial="hidden" animate="visible">
        {/* Status badge */}
        <motion.div variants={rise} className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-neon-lime/15 bg-neon-lime/[0.03]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime/60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-lime" />
            </span>
            <span className="text-neon-lime/80 text-[11px] font-medium tracking-wider uppercase">Open to opportunities</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={rise} className="hero-name mb-8">
          Mohammed
          <br />
          Arshaq
        </motion.h1>

        {/* Role — monospace typewriter */}
        <motion.div variants={rise} className="mb-6">
          <p className="font-mono text-base sm:text-lg md:text-xl text-text-secondary tracking-wide">
            <span className="text-neon-cyan/40 mr-1.5">~/</span>
            aspiring{" "}
            <span className="text-neon-cyan font-medium">{text}</span>
            <span
              className="inline-block w-[2px] h-[0.85em] bg-neon-cyan ml-0.5 align-middle rounded-full"
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={rise}
          className="text-text-muted text-sm md:text-[15px] max-w-md mx-auto mb-14 leading-relaxed"
        >
          Building strong foundations in Computer Science through
          problem&#8209;solving, web&nbsp;development, and real&#8209;world projects.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={rise} className="flex flex-col sm:flex-row gap-3.5 justify-center">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/25 text-neon-cyan text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-neon-cyan/15 hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
          >
            View projects
            <i className="fa-solid fa-arrow-down text-[10px] transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-border-medium text-text-secondary text-sm font-semibold transition-all duration-300 hover:border-text-muted hover:text-text-primary"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Minimal tech strip */}
        <motion.div variants={rise} className="mt-20">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {["React", "Next.js", "Node.js", "Python", "TypeScript", "MongoDB"].map((tech) => (
              <span key={tech} className="text-text-muted/25 text-[11px] font-medium tracking-wider uppercase">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={rise} className="mt-14 flex justify-center">
          <motion.div
            className="w-[22px] h-[34px] rounded-full border border-text-muted/15 flex items-start justify-center pt-2"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.div
              className="w-[3px] h-[6px] rounded-full bg-neon-cyan/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
