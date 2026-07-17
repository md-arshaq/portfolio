"use client";

import { motion } from "framer-motion";
import { Mail, Code, User, Send, Trophy, Flame } from "lucide-react";
import SectionHeading from "./section-heading";

const socials = [
  {
    href: "mailto:arshaq2312@gmail.com",
    Icon: Mail,
    label: "Email",
    desc: "arshaq2312@gmail.com",
    gradient: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.15)",
  },
  {
    href: "https://github.com/md-arshaq",
    Icon: Code,
    label: "GitHub",
    desc: "md-arshaq",
    gradient: "from-slate-500 to-slate-700",
    glow: "rgba(148,163,184,0.12)",
  },
  {
    href: "https://www.linkedin.com/in/mohammedarshaq7/",
    Icon: User,
    label: "LinkedIn",
    desc: "mohammedarshaq7",
    gradient: "from-blue-500 to-sky-600",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    href: "https://leetcode.com/u/mhd_arshaq38",
    Icon: Trophy,
    label: "LeetCode",
    desc: "mhd_arshaq38",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    href: "https://www.codechef.com/users/md_arshaq",
    Icon: Flame,
    label: "CodeChef",
    desc: "md_arshaq",
    gradient: "from-teal-500 to-emerald-600",
    glow: "rgba(45,212,191,0.15)",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, var(--neb-indigo) 0%, transparent 60%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading number="06" subtitle="GET IN TOUCH" title="Contact" center />

        {/* Big visual banner header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary mb-5 tracking-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text">together</span>
          </h3>
          <p className="text-text-secondary text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Got a project in mind or want to collaborate? I&apos;d love to hear from
            you.
          </p>
        </motion.div>

        {/* Social media grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-16">
          {socials.map(({ href, Icon, label, desc, gradient, glow }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="nebula-card p-6 text-center group relative overflow-hidden border-border-medium hover:border-neb-indigo/35 animated-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {/* Radial glow pulse decoration */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 40%, ${glow}, transparent 70%)`,
                }}
              />

              <div className="relative">
                <motion.div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} mx-auto mb-4 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon size={22} className="text-white" />
                </motion.div>
                <h4 className="text-sm font-bold text-text-primary mb-1 tracking-tight">
                  {label}
                </h4>
                <p className="text-text-muted text-[11px] truncate px-1">{desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Dynamic CTA trigger button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="mailto:arshaq2312@gmail.com"
            className="btn-nebula-filled inline-flex items-center justify-center gap-2.5 px-12 py-4.5 rounded-full font-bold text-sm"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send size={14} />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}