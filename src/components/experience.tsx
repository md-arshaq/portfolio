"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="relative z-10">
        <SectionHeading number="03" subtitle="CAREER" title="Experience" />

        <div className="max-w-4xl">
          <div className="relative pl-8 md:pl-16">
            {/* Vertical glowing timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-void-surface">
              <motion.div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--neb-indigo), var(--neb-cyan), transparent)",
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Glowing active node marker */}
            <div className="absolute left-0 top-0 -translate-x-1/2">
              <motion.div
                className="w-4.5 h-4.5 rounded-full bg-neb-indigo border-[4px] border-void"
                style={{ boxShadow: "0 0 16px var(--neb-indigo)" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              />
            </div>

            {/* Main experience card block */}
            <motion.div
              className="nebula-card p-8 md:p-10 border-neb-indigo/10 hover:border-neb-indigo/35 animated-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white p-2.5 flex-shrink-0 shadow-lg flex items-center justify-center">
                    <Image
                      src="/images/prism.png"
                      alt="Samsung PRISM"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
                      Samsung R&D Institute India
                    </h3>
                    <p className="text-neb-indigo font-bold text-sm mt-1">
                      Research Intern, Samsung PRISM
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-neb-indigo/[0.05] text-xs font-bold text-neb-indigo/90 border border-neb-indigo/10 whitespace-nowrap font-mono self-start md:self-auto">
                  <Calendar size={11} /> Jan 2026 – Present
                </span>
              </div>

              <p className="text-text-secondary text-sm flex items-center gap-2 mb-6">
                <MapPin size={11} className="text-neb-indigo/80" /> Bengaluru, India
              </p>

              <ul className="space-y-4">
                {[
                  "Built a unified multilingual Grapheme-to-Phoneme (G2P) Transformer (seq2seq) for Hindi, Gujarati, and Marathi on a 54.7K-entry IndicTTS dataset, replacing the need for 3 separate per-language models.",
                  "Designed Acoustic Phonetic Folding: extracted phoneme co-occurrence statistics (PPMI), projected embeddings via UMAP, and applied K-Means clustering guided by linguistic phonetic features to merge acoustically similar phonemes.",
                  "Reduced output phoneme vocabulary by 31.6% (57 → 39 clusters) with negligible impact on accuracy (PER 0.08%, WER 0.35%) and speech quality (MOS 4.77 vs. 4.78, p = 0.53), validated via Mann-Whitney U testing.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3.5 text-text-secondary text-sm leading-relaxed"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neb-indigo/60 flex-shrink-0" />
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