"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Brain, Trophy, Target, Flame, Code2 } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./section-heading";

/* ===== Animated counter hook ===== */
function useCounter(target: number, duration = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
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
    Icon: Target,
    color: "neb-cyan",
    gradient: "from-cyan-500 to-indigo-600",
  },
  {
    label: "DSA Problems",
    value: 1500,
    suffix: "+",
    sub: "LeetCode, GFG & CodeChef",
    Icon: Code2,
    color: "neb-indigo",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    label: "CodeChef",
    value: 2,
    suffix: "★",
    sub: "Competitive Programmer",
    Icon: Flame,
    color: "neb-magenta",
    gradient: "from-magenta-500 to-purple-600",
  },
];

const certs = [
  {
    title: "Nutanix Certified Associate (NCA)",
    sub: "Cloud Computing Certification",
    Icon: Award,
    image: "/images/NUTANIX-NCA.png",
    gradient: "from-cyan-500 to-indigo-600",
  },
  {
    title: "Simplilearn ML using Python",
    sub: "Machine Learning Certification",
    Icon: Brain,
    image: "/images/Intro to Machine Learning.png",
    gradient: "from-magenta-500 to-purple-600",
  },
];

const colorTextMap: Record<string, string> = {
  "neb-cyan": "text-neb-cyan",
  "neb-indigo": "text-neb-indigo",
  "neb-magenta": "text-neb-magenta",
};

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
}) {
  const count = useCounter(stat.value, 2000, inView);
  const colorText = colorTextMap[stat.color] || "text-neb-indigo";

  return (
    <motion.div
      className="nebula-card stat-card p-8 text-center border-border-medium hover:border-neb-indigo/30 animated-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ y: -6 }}
    >
      <div className="relative">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} mx-auto mb-5 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
        >
          <stat.Icon size={20} className="text-white" />
        </div>

        <p className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2 font-mono tracking-tight">
          {count}
          <span className={colorText}>{stat.suffix}</span>
        </p>
        <p className="text-[14px] font-bold text-text-secondary mb-1">
          {stat.label}
        </p>
        <p className="text-[12px] text-text-muted">{stat.sub}</p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="relative z-10" ref={ref}>
        <SectionHeading
          number="05"
          subtitle="ACCOMPLISHMENTS"
          title="Achievements"
        />

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} inView={isInView} />
          ))}
        </div>

        {/* Certifications header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <Trophy size={18} className="text-neb-indigo" />
            <h3 className="text-[13px] font-bold tracking-[2px] text-text-secondary uppercase">
              Certifications
            </h3>
          </div>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className="nebula-card overflow-hidden group border-border-medium hover:border-neb-indigo/30 animated-border"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.65,
                delay: 0.4 + i * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{ y: -6 }}
            >
              {/* Image area */}
              <div className="relative h-[200px] overflow-hidden bg-void-surface">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <c.Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-text-primary leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-[12px] text-text-secondary mt-0.5">{c.sub}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
