"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-left space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Work Experience
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Industrial R&D research in deep learning pipelines and speech processing models.
        </p>
      </div>

      {/* Samsung spotlight card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="minimal-card p-6 md:p-8 group"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-md">
              <Image
                src="/images/prism.png"
                alt="Samsung PRISM"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight group-hover:text-accent-steel transition-colors">
                Samsung R&D Institute India
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Research Intern, Samsung PRISM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-white/5 group-hover:border-accent-steel/30 text-xs font-mono text-zinc-400 self-start md:self-auto transition-colors">
            <Calendar className="w-3.5 h-3.5 text-accent-steel" />
            <span>Jan 2026 – Present</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 py-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-accent-steel" />
            Bengaluru, India (Remote Research)
          </span>
          <span>•</span>
          <span>Speech Synthesis (G2P)</span>
        </div>

        {/* Metrics summary list */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5 group-hover:border-accent-steel/20 text-xs font-mono transition-colors">
          <div>
            <div className="text-zinc-500">Vocab Reduction</div>
            <div className="text-accent-steel font-bold mt-0.5">31.6%</div>
          </div>
          <div>
            <div className="text-zinc-500">Dataset Size</div>
            <div className="text-white font-bold mt-0.5">54.7K (IndicTTS)</div>
          </div>
          <div>
            <div className="text-zinc-500">Speech Quality</div>
            <div className="text-white font-bold mt-0.5">MOS 4.77 / 4.78</div>
          </div>
          <div>
            <div className="text-zinc-500">Phoneme Error</div>
            <div className="text-accent-steel font-bold mt-0.5">PER 0.08%</div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-3 mt-6">
          {[
            "Built a unified multilingual Grapheme-to-Phoneme (G2P) seq2seq Transformer for Hindi, Gujarati, and Marathi trained on 54.7K-entry IndicTTS database, replacing three independent model architectures.",
            "Designed Acoustic Phonetic Folding: computed co-occurrence statistics (PPMI), mapped feature matrices via UMAP, and clustered similar sound representations via linguistic acoustic heuristics.",
            "Reduced target phoneme footprint by 31.6% (57 to 39 clusters) with minor variations in metrics (PER 0.08%, WER 0.35%) and equivalent quality score (validated by Mann-Whitney U test).",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-accent-steel shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}