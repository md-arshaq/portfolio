"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const roles = ["Full-Stack Developer", "AI/ML Engineer", "Problem Solver"];

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
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const rise = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const firstName = "Mohammed";
  const lastName = "Arshaq";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[10%] w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 60%)",
            filter: "blur(130px)",
          }}
        />
        <div
          className="absolute bottom-[0%] right-[5%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,121,249,0.06) 0%, transparent 60%)",
            filter: "blur(130px)",
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Floating gradient orb — decorative */}
      <motion.div
        className="absolute top-[12%] right-[5%] w-[300px] h-[300px] md:w-[420px] md:h-[420px] gradient-orb opacity-35 hidden lg:block"
        animate={{
          scale: [1, 1.1, 0.93, 1],
          rotate: [0, 20, -12, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary small orb */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-[180px] h-[180px] hidden lg:block"
        style={{
          background: "linear-gradient(135deg, rgba(34,211,238,0.3), rgba(99,102,241,0.25))",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          y: [0, -20, 10, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={rise} className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-neb-emerald/15 bg-neb-emerald/[0.04] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neb-emerald/60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neb-emerald" />
            </span>
            <span className="text-neb-emerald/90 text-[11px] font-semibold tracking-[2px] uppercase">
              Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Name — large display */}
        <h1
          className="hero-name mb-8"
          style={{ opacity: 1, filter: "none", transform: "none" }}
        >
          {/* Stagger each letter */}
          <span className="inline-block">
            {firstName.split("").map((char, i) => (
              <motion.span
                key={`f-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <br />
          <span className="inline-block">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={`l-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Role — typewriter */}
        <motion.div variants={rise} className="mb-7">
          <p className="font-mono text-base sm:text-lg md:text-xl text-text-secondary tracking-wide">
            <span className="text-neb-indigo/50 mr-1.5">{">"}</span>
            <span className="text-neb-cyan font-medium">{text}</span>
            <span
              className="inline-block w-[2px] h-[0.85em] bg-neb-cyan ml-0.5 align-middle rounded-full"
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={rise}
          className="text-text-muted text-sm md:text-[15px] max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Software Engineering student passionate about AI Engineering,
          full-stack development, and building scalable, intelligent
          software solutions through continuous learning and innovative
          problem-solving.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={rise} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-nebula-filled inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold group"
          >
            <Sparkles size={14} />
            View projects
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-nebula inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
          >
            <Mail size={14} />
            Get in touch
          </a>
        </motion.div>

        {/* Minimal tech strip */}
        <motion.div variants={rise} className="mt-24">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["React", "Next.js", "FastAPI", "Python", "TypeScript", "PyTorch"].map((tech, i) => (
              <motion.span
                key={tech}
                className="text-text-muted/20 text-[10px] font-bold tracking-[3px] uppercase cursor-default"
                whileHover={{ color: "rgba(129,140,248,0.5)", scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={rise} className="mt-16 flex justify-center">
          <motion.div
            className="w-[24px] h-[38px] rounded-full border border-text-muted/12 flex items-start justify-center pt-2.5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.div
              className="w-[3px] h-[7px] rounded-full bg-neb-indigo/60"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}