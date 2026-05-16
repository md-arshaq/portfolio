"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  subtitle: string;
  title: string;
  center?: boolean;
}

export default function SectionHeading({ number, subtitle, title, center = false }: SectionHeadingProps) {
  return (
    <motion.div
      className={`relative mb-16 md:mb-20 ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {/* Section number watermark */}
      <span className="section-watermark">{number}</span>

      {/* Monospace label */}
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <span className="mono-label">{number}</span>
        <span className="w-8 h-px bg-neon-cyan/20" />
        <span className="mono-label">{subtitle}</span>
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
        {title}
      </h2>

      {/* Underline */}
      <motion.div
        className={`mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta ${center ? "mx-auto" : ""}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: center ? "center" : "left" }}
      />
    </motion.div>
  );
}
