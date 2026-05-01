"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const roles = ["Software Engineer", "Web Developer", "Problem Solver"];

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.a>
  );
}

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
    const t = setTimeout(tick, isDeleting ? 45 : 95);
    return () => clearTimeout(t);
  }, [tick, isDeleting]);

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
  };
  const rise = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Decorative rotating rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px]">
          <motion.div className="w-full h-full rounded-full border border-primary/[0.04]"
            animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px]">
          <motion.div className="w-full h-full rounded-full border border-secondary/[0.04]"
            animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <motion.div className="w-full h-full rounded-full border border-accent-rose/[0.05]"
            animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
        </div>

        {/* Floating accent dots */}
        {[
          { cls: "top-[14%] right-[24%]", bg: "bg-primary", shadow: "shadow-[0_0_18px_var(--primary)]", delay: 0 },
          { cls: "bottom-[20%] left-[18%]", bg: "bg-secondary", shadow: "shadow-[0_0_14px_var(--secondary)]", delay: 1 },
          { cls: "top-[38%] left-[8%]", bg: "bg-accent-green", shadow: "shadow-[0_0_12px_var(--accent-green)]", delay: 2 },
          { cls: "bottom-[32%] right-[14%]", bg: "bg-accent-rose", shadow: "shadow-[0_0_14px_var(--accent-rose)]", delay: 0.5 },
          { cls: "top-[60%] right-[30%]", bg: "bg-accent-amber", shadow: "shadow-[0_0_10px_var(--accent-amber)]", delay: 1.5 },
        ].map((dot, i) => (
          <motion.div key={i}
            className={`absolute ${dot.cls} w-1.5 h-1.5 rounded-full ${dot.bg} ${dot.shadow}`}
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          />
        ))}

        {/* Large glow orbs */}
        <div className="absolute top-[20%] left-[25%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", filter: "blur(140px)" }} />
        <div className="absolute bottom-[15%] right-[20%] w-[400px] h-[400px] rounded-full opacity-12"
          style={{ background: "radial-gradient(circle, var(--secondary) 0%, transparent 70%)", filter: "blur(120px)" }} />
      </div>

      {/* Main content */}
      <motion.div className="relative z-10 text-center max-w-4xl" variants={stagger} initial="hidden" animate="visible">
        <motion.p variants={rise} className="text-text-secondary text-lg md:text-xl font-light mb-4">
          Hi, I&apos;m
        </motion.p>

        <motion.h1 variants={rise}
          className="text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
          <span className="gradient-text">Mohammed</span>
          <br />
          <span className="gradient-text">Arshaq</span>
        </motion.h1>

        <motion.h2 variants={rise} className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-light mb-8">
          Aspiring{" "}
          <span className="text-primary-light font-semibold">{text}</span>
          <span className="inline-block w-[2.5px] h-[0.9em] bg-primary-light ml-1 align-middle rounded-full"
            style={{ animation: "blink 1s step-end infinite" }} />
        </motion.h2>

        <motion.p variants={rise}
          className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
          Building strong foundations in Computer Science through problem-solving, web development, and real-world projects.
        </motion.p>

        {/* Magnetic CTA buttons */}
        <motion.div variants={rise} className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton href="#projects"
            className="btn-glow group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_35px_var(--glow-primary)]">
            View My Work
            <i className="fa-solid fa-arrow-down text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
          </MagneticButton>
          <MagneticButton href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-glass-border text-text-secondary font-semibold text-sm hover:border-primary/25 hover:text-text hover:bg-primary/[0.04] transition-all duration-300 backdrop-blur-sm">
            Let&apos;s Connect
          </MagneticButton>
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div variants={rise} className="mt-20 overflow-hidden">
          <p className="text-text-muted/40 text-[10px] tracking-[3px] uppercase mb-4">Technologies I work with</p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-base to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-base to-transparent z-10" />
            <motion.div className="flex gap-8 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-8 items-center">
                  {["React", "Next.js", "Node.js", "Python", "TypeScript", "MongoDB", "TailwindCSS", "Flask", "Socket.io", "Firebase"].map((tech) => (
                    <span key={`${setIdx}-${tech}`} className="text-text-muted/30 text-sm font-medium">{tech}</span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
