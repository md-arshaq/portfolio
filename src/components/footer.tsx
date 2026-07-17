"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="relative border-t border-border-subtle bg-void/80 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neb-indigo/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-xs">
          © 2026 Mohammed Arshaq. All rights reserved.
        </p>
        <p className="text-text-secondary text-[11px] flex items-center gap-1.5 font-medium">
          Crafted with
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-flex"
          >
            <Heart size={10} className="text-neb-rose fill-neb-rose" />
          </motion.span>
          using
          <span className="text-neb-indigo font-bold">Next.js</span>·
          <span className="text-neb-cyan font-bold">Tailwind</span>·
          <span className="text-neb-magenta font-bold">Framer Motion</span>
        </p>
      </div>
    </motion.footer>
  );
}