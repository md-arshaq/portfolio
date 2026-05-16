"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer className="relative border-t border-border-subtle bg-void/80 backdrop-blur-xl"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-text-muted text-xs">© 2026 Mohammed Arshaq. All rights reserved.</p>
        <p className="text-text-muted text-[11px] flex items-center gap-1.5">
          Crafted with
          <motion.i className="fa-solid fa-heart text-neon-magenta text-[9px]"
            animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
          using
          <span className="text-neon-cyan font-medium">Next.js</span>·
          <span className="text-neon-lime font-medium">Tailwind</span>·
          <span className="text-neon-magenta font-medium">Framer Motion</span>
        </p>
      </div>
    </motion.footer>
  );
}
