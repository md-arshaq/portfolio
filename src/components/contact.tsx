"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const socials = [
  { href: "mailto:arshaq2312@gmail.com", icon: "fa-solid fa-envelope", label: "Email", desc: "arshaq2312@gmail.com", gradient: "from-rose-500 to-pink-600", glow: "rgba(255,45,107,0.12)" },
  { href: "https://github.com/md-arshaq", icon: "fab fa-github", label: "GitHub", desc: "md-arshaq", gradient: "from-slate-500 to-slate-700", glow: "rgba(148,163,184,0.1)" },
  { href: "https://www.linkedin.com/in/mohammedarshaq7/", icon: "fab fa-linkedin-in", label: "LinkedIn", desc: "mohammedarshaq7", gradient: "from-blue-500 to-sky-600", glow: "rgba(0,229,255,0.12)" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--neon-cyan) 0%, transparent 60%)", filter: "blur(120px)" }} />
      </div>

      <div className="relative z-10">
        <SectionHeading number="06" subtitle="GET IN TOUCH" title="Contact" center />

        {/* Big CTA */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Let&apos;s build something{" "}
            <span className="gradient-text">together</span>
          </h3>
          <p className="text-text-muted text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Got a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="bento-card p-6 text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 40%, ${s.glow}, transparent 70%)` }} />

              <div className="relative">
                <motion.div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} mx-auto mb-4 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <i className={`${s.icon} text-xl text-white`} />
                </motion.div>
                <h4 className="text-base font-bold text-text-primary mb-1">{s.label}</h4>
                <p className="text-text-muted text-xs truncate">{s.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Direct CTA button */}
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <motion.a
            href="mailto:arshaq2312@gmail.com"
            className="btn-neon-filled inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-semibold text-sm"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <i className="fa-solid fa-paper-plane text-xs" />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
