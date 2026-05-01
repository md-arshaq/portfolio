"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const socials = [
  { href: "mailto:arshaq2312@gmail.com", icon: "fa-solid fa-envelope", label: "Email", desc: "arshaq2312@gmail.com", gradient: "from-rose-500 to-pink-600", glow: "rgba(244,114,182,0.2)" },
  { href: "https://github.com/md-arshaq", icon: "fab fa-github", label: "GitHub", desc: "md-arshaq", gradient: "from-slate-500 to-slate-700", glow: "rgba(148,163,184,0.15)" },
  { href: "https://www.linkedin.com/in/mohammedarshaq7/", icon: "fab fa-linkedin-in", label: "LinkedIn", desc: "mohammedarshaq7", gradient: "from-blue-500 to-sky-600", glow: "rgba(56,189,248,0.2)" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)", filter: "blur(120px)" }} />
      </div>

      <div className="relative z-10">
        <SectionHeading subtitle="GET IN TOUCH" title="Contact" center />

        {/* Big CTA statement */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Got a project in mind or want to collaborate? I&apos;d love to hear from you.
            <br className="hidden sm:block" />
            <span className="text-text-muted">Feel free to reach out through any channel below.</span>
          </p>
        </motion.div>

        {/* Social cards — interactive, with details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass-card p-6 text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                <h4 className="text-base font-bold text-text mb-1">{s.label}</h4>
                <p className="text-text-muted text-xs truncate">{s.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact form — full width, centered, premium */}
        <motion.div className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: 0.15 }}>

          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-secondary/6 to-transparent rounded-full blur-2xl" />

            <div className="relative">
              <h3 className="text-2xl font-extrabold text-text mb-2 text-center">
                Send me a <span className="gradient-text">message</span>
              </h3>
              <p className="text-text-muted text-sm text-center mb-8">
                I&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input type="text" placeholder="Your Name" required
                      className="w-full px-5 py-3.5 rounded-xl bg-bg-base/60 border border-glass-border text-text placeholder:text-text-muted/40 text-sm transition-all duration-300 focus:outline-none focus:border-primary/35 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.06),0_0_20px_rgba(139,92,246,0.04)]" />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10"
                      style={{ background: "radial-gradient(200px at 50% 50%, rgba(139,92,246,0.04), transparent)" }} />
                  </div>
                  <div className="relative group">
                    <input type="email" placeholder="Your Email" required
                      className="w-full px-5 py-3.5 rounded-xl bg-bg-base/60 border border-glass-border text-text placeholder:text-text-muted/40 text-sm transition-all duration-300 focus:outline-none focus:border-primary/35 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.06),0_0_20px_rgba(139,92,246,0.04)]" />
                  </div>
                </div>
                <div className="relative group">
                  <input type="text" placeholder="Subject"
                    className="w-full px-5 py-3.5 rounded-xl bg-bg-base/60 border border-glass-border text-text placeholder:text-text-muted/40 text-sm transition-all duration-300 focus:outline-none focus:border-primary/35 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.06),0_0_20px_rgba(139,92,246,0.04)]" />
                </div>
                <div className="relative group">
                  <textarea placeholder="Your Message" rows={5} required
                    className="w-full px-5 py-3.5 rounded-xl bg-bg-base/60 border border-glass-border text-text placeholder:text-text-muted/40 text-sm transition-all duration-300 focus:outline-none focus:border-primary/35 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.06),0_0_20px_rgba(139,92,246,0.04)] resize-none" />
                </div>
                <div className="flex justify-center pt-2">
                  <motion.button type="submit"
                    className="btn-glow inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-semibold text-sm transition-all hover:shadow-[0_0_35px_var(--glow-primary)]"
                    whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <i className="fa-solid fa-paper-plane text-xs" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
