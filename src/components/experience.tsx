"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative z-10">
        <SectionHeading number="03" subtitle="CAREER" title="Experience" />

        <div className="max-w-3xl">
          <div className="relative pl-8 md:pl-12">
            {/* Vertical neon line */}
            <div className="absolute left-0 top-0 bottom-0 w-px">
              <motion.div className="w-full h-full"
                style={{ background: "linear-gradient(to bottom, var(--neon-cyan), var(--neon-magenta), transparent)" }}
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.2 }} />
            </div>

            {/* Glowing dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2">
              <motion.div
                className="w-3.5 h-3.5 rounded-full bg-neon-cyan border-[3px] border-void"
                style={{ boxShadow: "0 0 14px var(--neon-cyan)" }}
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              />
            </div>

            {/* Card */}
            <motion.div className="bento-card p-7 md:p-9 border-neon-cyan/10 hover:border-neon-cyan/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex-shrink-0">
                    <Image src="/images/prism.png" alt="Samsung PRISM" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Samsung PRISM</h3>
                    <p className="text-neon-cyan font-medium text-sm">Research Intern</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neon-cyan/[0.06] text-xs font-semibold text-neon-cyan/80 border border-neon-cyan/10 whitespace-nowrap font-mono">
                  <i className="fa-regular fa-calendar text-[10px]" /> Jan 2026 – Present
                </span>
              </div>

              <p className="text-text-muted text-sm flex items-center gap-2 mb-4">
                <i className="fa-solid fa-location-dot text-neon-cyan/60 text-[10px]" /> Bengaluru, India
              </p>

              <div className="pl-4 border-l-2 border-neon-cyan/15 mb-5">
                <p className="text-text-secondary text-sm">
                  <strong className="text-text-primary">Project:</strong> Multilingual Grapheme-to-Phoneme (G2P) Pipeline
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Built a seq2seq Transformer-based G2P system for Hindi, Gujarati, and Marathi.",
                  "Handled a dataset of ~54,000 clean samples across 3 languages with 57 unique phonemes.",
                  "Pipeline includes data preparation, baseline Transformer training, phoneme clustering, cluster-based retraining, and per-language evaluation.",
                ].map((item, i) => (
                  <motion.li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed"
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon-cyan/40 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
