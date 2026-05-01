"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

const projects = [
  {
    title: "Realtime Chat App",
    description: "A scalable full-stack chat platform with real-time messaging, secure JWT authentication, and live user status.",
    image: "/images/nova-chat.png",
    tags: ["React", "Node.js", "Socket.io", "TailwindCSS"],
    github: "https://github.com/md-arshaq/NovaChat",
    live: "https://nova-chat-ngd.vercel.app/chat",
    icon: "fa-solid fa-comments",
    accent: "text-primary-light",
    num: "01",
  },
  {
    title: "AI Trip Planner",
    description: "An AI-powered web app integrating Gemini AI for personalized travel itineraries with a responsive UI.",
    image: null,
    tags: ["React", "Gemini AI", "Firebase", "TailwindCSS"],
    github: "https://github.com/md-arshaq",
    live: "#",
    icon: "fa-solid fa-plane-departure",
    accent: "text-accent-rose",
    num: "02",
  },
  {
    title: "Sports Image Classification",
    description: "An ML model achieving 92% accuracy for classifying sports personalities with real-time prediction via Flask.",
    image: null,
    tags: ["Python", "OpenCV", "scikit-learn", "Flask"],
    github: "https://github.com/md-arshaq",
    live: "#",
    icon: "fa-solid fa-basketball",
    accent: "text-secondary",
    num: "03",
  },
  {
    title: "LeetMetric",
    description: "A web app fetching and displaying real-time LeetCode stats including global ranking and daily streaks via API.",
    image: null,
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/md-arshaq",
    live: "#",
    icon: "fa-solid fa-code",
    accent: "text-accent-amber",
    num: "04",
  },
];

function ProjectImage({ project }: { project: (typeof projects)[0] }) {
  const [err, setErr] = useState(false);
  if (!project.image || err) {
    return (
      <div className="absolute inset-0 bg-bg-surface flex items-center justify-center">
        <motion.i className={`${project.icon} text-4xl ${project.accent} opacity-20`}
          animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      </div>
    );
  }
  return (
    <Image src={project.image} alt={project.title} fill sizes="(max-width:768px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105" onError={() => setErr(true)} />
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative z-10">
        <SectionHeading subtitle="PORTFOLIO" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.title}
              className="glass-card overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(p)}>
              {/* Image area */}
              <div className="relative h-[200px] md:h-[220px] m-3.5 mb-0 rounded-xl overflow-hidden bg-bg-surface">
                <ProjectImage project={p} />
                {/* Number overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-[10px] font-bold tracking-wider ${p.accent} opacity-60`}>{p.num}</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-4 z-10">
                  <span className="text-[11px] font-semibold text-text flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-bg-card/60 backdrop-blur border border-glass-border">
                    <i className="fa-solid fa-expand text-[9px]" /> Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary-light transition-colors duration-300">{p.title}</h3>
                <p className="text-text-muted text-[13px] leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-primary/[0.06] text-primary-light/70 font-semibold border border-primary/[0.06]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="text-[13px] font-medium text-text-muted hover:text-primary-light transition-colors flex items-center gap-1.5">
                    <i className="fab fa-github" /> GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="text-[13px] font-medium text-text-muted hover:text-secondary transition-colors flex items-center gap-1.5">
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}>
            <motion.div className="glass-card max-w-2xl w-full mx-4 overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="relative h-[260px] bg-bg-surface">
                <ProjectImage project={selected} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent z-10" />
                <button onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-bg-base/60 backdrop-blur border border-glass-border flex items-center justify-center text-text hover:text-primary transition-colors">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-extrabold text-text mb-3">{selected.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-lg bg-primary/8 text-primary-light font-semibold border border-primary/8">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={selected.github} target="_blank" rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-semibold text-sm hover:shadow-[0_0_25px_var(--glow-primary)]">
                    <i className="fab fa-github" /> View Code
                  </a>
                  {selected.live !== "#" && (
                    <a href={selected.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-glass-border text-text-secondary font-semibold text-sm hover:border-primary/25 hover:text-text transition-all">
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
