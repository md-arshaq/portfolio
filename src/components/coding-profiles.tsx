"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

/* ──────────────────────────────────────────────
   Platform definitions
   ────────────────────────────────────────────── */
const profiles = [
  {
    name: "LeetCode",
    handle: "@mhd_arshaq37",
    url: "https://leetcode.com/u/mhd_arshaq37/",
    description: "Solving data structures & algorithm problems daily",
    gradient: "from-[#FFA116] to-[#FFD700]",
    glowColor: "rgba(255, 161, 22, 0.15)",
    borderHover: "rgba(255, 161, 22, 0.35)",
    textHover: "#FFA116",
    embedUrl: "https://leetcard.jacoblin.cool/mhd_arshaq37?theme=dark&font=JetBrains%20Mono&ext=heatmap",
    logoSrc: "/images/leetcode-logo.svg",
  },
  {
    name: "GeeksforGeeks",
    handle: "@md_arshaq7",
    url: "https://www.geeksforgeeks.org/profile/md_arshaq7?tab=activity",
    description: "Practice, editorials & competitive programming",
    gradient: "from-[#2F8D46] to-[#00C853]",
    glowColor: "rgba(47, 141, 70, 0.15)",
    borderHover: "rgba(47, 141, 70, 0.35)",
    textHover: "#2F8D46",
    embedUrl: null,
    logoSrc: "/images/geeksforgeeks-logo.svg",
  },
  {
    name: "CodeChef",
    handle: "@md_arshaq",
    url: "https://www.codechef.com/users/md_arshaq",
    description: "Competitive programming contests & practice",
    gradient: "from-[#5B4638] to-[#C4A882]",
    glowColor: "rgba(91, 70, 56, 0.2)",
    borderHover: "rgba(196, 168, 130, 0.35)",
    textHover: "#C4A882",
    embedUrl: null,
    logoSrc: "/images/codechef-logo.svg",
  },
];

/* ──────────────────────────────────────────────
   Stagger animation variants
   ────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function CodingProfiles() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="coding-profiles"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* ── Section Header ── */}
      <div className="text-left space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Coding Profiles
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Where I grind algorithms, compete in contests, and push my problem-solving limits.
        </p>
      </div>

      {/* ── Profile Cards ── */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        {profiles.map((p) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1"
            style={
              {
                "--card-glow": p.glowColor,
                "--card-border": p.borderHover,
                "--card-accent": p.textHover,
              } as React.CSSProperties
            }
            whileHover={{
              boxShadow: `0 20px 50px -12px ${p.glowColor}`,
              borderColor: p.borderHover,
            }}
          >
            {/* Gradient orb behind card on hover */}
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{
                background: `radial-gradient(circle, ${p.textHover}44 0%, transparent 70%)`,
              }}
            />

            {/* Top row: logo + live dot */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 group-hover:border-[var(--card-border)] transition-all">
                  <Image src={p.logoSrc} alt={`${p.name} logo`} width={24} height={24} className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-white group-hover:transition-colors"
                    style={
                      {
                        "--tw-text-opacity": 1,
                      } as React.CSSProperties
                    }
                  >
                    <span className="group-hover:text-[var(--card-accent)] transition-colors">
                      {p.name}
                    </span>
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {p.handle}
                  </span>
                </div>
              </div>

              {/* Pulse dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: p.textHover }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: p.textHover }}
                />
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-zinc-400 leading-relaxed mb-5">
              {p.description}
            </p>

            {/* Bottom CTA */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 group-hover:text-[var(--card-accent)] transition-colors">
              <span>View Profile</span>
              <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* Bottom gradient line */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* ── LeetCode Heatmap Embed ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-white/5 bg-[var(--bg-card)] p-6 group hover:border-[rgba(255,161,22,0.2)] transition-all duration-300"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-24 right-1/4 h-48 w-48 rounded-full bg-[#FFA116]/5 blur-3xl" />

        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
            <Image src="/images/leetcode-logo.svg" alt="LeetCode logo" width={16} height={16} className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">LeetCode Activity</h3>
            <p className="text-[10px] font-mono text-zinc-500">
              Submission heatmap & stats
            </p>
          </div>
        </div>

        {/* LeetCode Card Embed */}
        <div className="w-full overflow-x-auto rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://leetcard.jacoblin.cool/mhd_arshaq37?theme=dark&font=JetBrains%20Mono&ext=heatmap"
            alt="LeetCode Stats for mhd_arshaq37"
            className="w-full max-w-[720px] mx-auto rounded-xl"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
