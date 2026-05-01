"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  center?: boolean;
}

export default function SectionHeading({ subtitle, title, center = false }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 md:mb-20 ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-block text-[11px] font-bold tracking-[4px] uppercase text-primary-light/70 mb-4 px-4 py-1.5 rounded-full border border-primary/10 bg-primary/[0.04]">
        {subtitle}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight leading-[1.15]">
        {title}
      </h2>
      <motion.div
        className={`mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-primary to-secondary ${center ? "mx-auto" : ""}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ transformOrigin: center ? "center" : "left" }}
      />
    </motion.div>
  );
}
