"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Brain, Target, Flame, Code2 } from "lucide-react";
import Image from "next/image";

function useCounter(target: number, duration = 1500, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, inView]);

  return count;
}

const stats = [
  {
    label: "LeetCode Rating",
    value: 1600,
    suffix: "+",
    sub: "Top 20% Globally",
    icon: Target,
  },
  {
    label: "DSA Problems Solved",
    value: 1500,
    suffix: "+",
    sub: "LeetCode, GFG & CodeChef",
    icon: Code2,
  },
  {
    label: "CodeChef Rating",
    value: 2,
    suffix: "★",
    sub: "Competitive Programmer",
    icon: Flame,
  },
];

const certs = [
  {
    title: "Nutanix Certified Associate (NCA)",
    sub: "Cloud Infrastructure & Enterprise Systems",
    image: "/images/NUTANIX-NCA.png",
  },
  {
    title: "Simplilearn Machine Learning with Python",
    sub: "Supervised & Unsupervised ML Algorithms",
    image: "/images/Intro to Machine Learning.png",
  },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-left space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Achievements & Milestones
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Competitive programming ratings, database problem solving counts, and certifications.
        </p>
      </div>

      {/* Stats HUD Row */}
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const IconComp = stat.icon;
          const count = useCounter(stat.value, 1500, inView);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="minimal-card p-6 text-center group"
            >
              <div className="p-2 w-fit mx-auto mb-3 bg-zinc-900 border border-white/5 group-hover:border-accent-steel/30 text-zinc-400 group-hover:text-accent-steel rounded-xl transition-all">
                <IconComp className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white font-mono tracking-tight group-hover:text-accent-steel transition-colors">
                {count}
                <span className="text-zinc-400 group-hover:text-accent-steel/80">{stat.suffix}</span>
              </div>
              <div className="text-xs font-bold text-zinc-300 mt-1">{stat.label}</div>
              <div className="text-[10px] font-mono text-zinc-500 mt-0.5">{stat.sub}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="minimal-card minimal-card-silver p-5 flex items-center gap-5 group"
          >
            <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
              <Image
                src={cert.image}
                alt={cert.title}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider group-hover:text-accent-silver transition-colors">
                Credential
              </div>
              <h3 className="text-sm font-bold text-white leading-snug mt-0.5 group-hover:text-accent-silver transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
                {cert.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
