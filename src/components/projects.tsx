"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

const projects = [
  {
    title: "Realtime Chat App",
    description: "A scalable full-stack chat platform with real-time messaging, secure JWT authentication, and live user status tracking across channels.",
    image: "/images/nova-chat.png",
    tags: ["React", "Node.js", "Socket.io", "TailwindCSS"],
    github: "https://github.com/md-arshaq/NovaChat",
    live: "https://nova-chat-ngd.vercel.app/chat",
    icon: "fa-solid fa-comments",
    accent: "neon-cyan",
    num: "01",
  },
  {
    title: "AI Trip Planner",
    description: "An AI-powered web app integrating Gemini AI for personalized travel itineraries with a responsive UI and real-time suggestion engine.",
    image: null,
    tags: ["React", "Gemini AI", "Firebase", "TailwindCSS"],
    github: "https://github.com/md-arshaq",
    live: "#",
    icon: "fa-solid fa-plane-departure",
    accent: "neon-magenta",
    num: "02",
  },
  {
    title: "Sports Image Classification",
    description: "An ML model achieving 92% accuracy for classifying sports personalities with real-time prediction via Flask and a custom-trained pipeline.",
    image: null,
    tags: ["Python", "OpenCV", "scikit-learn", "Flask"],
    github: "https://github.com/md-arshaq",
    live: "#",
    icon: "fa-solid fa-basketball",
    accent: "neon-lime",
    num: "03",
  },
  {
    title: "LeetMetric",
    description: "A web app fetching and displaying real-time LeetCode stats including global ranking, submission history, and daily streaks via API.",
    image: null,
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/md-arshaq",
    live: "#",
    icon: "fa-solid fa-code",
    accent: "neon-amber",
    num: "04",
  },
];

const accentMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  "neon-cyan": { text: "text-neon-cyan", bg: "bg-neon-cyan", border: "border-neon-cyan/15", glow: "rgba(0,229,255,0.15)" },
  "neon-magenta": { text: "text-neon-magenta", bg: "bg-neon-magenta", border: "border-neon-magenta/15", glow: "rgba(255,45,107,0.15)" },
  "neon-lime": { text: "text-neon-lime", bg: "bg-neon-lime", border: "border-neon-lime/15", glow: "rgba(181,255,59,0.12)" },
  "neon-amber": { text: "text-neon-amber", bg: "bg-neon-amber", border: "border-neon-amber/15", glow: "rgba(255,184,54,0.12)" },
};

function ProjectImage({ project }: { project: (typeof projects)[0] }) {
  const [err, setErr] = useState(false);
  if (!project.image || err) {
    const a = accentMap[project.accent];
    return (
      <div className="absolute inset-0 bg-void-surface flex items-center justify-center">
        <motion.i className={`${project.icon} text-5xl ${a.text} opacity-15`}
          animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      </div>
    );
  }
  return (
    <Image src={project.image} alt={project.title} fill sizes="(max-width:768px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105" onError={() => setErr(true)} />
  );
}

function TiltCard({ children, className }: { children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative z-10">
        <SectionHeading number="02" subtitle="PORTFOLIO" title="Projects" />

        <div className="space-y-6">
          {projects.map((p, i) => {
            const a = accentMap[p.accent];
            const isEven = i % 2 === 1;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className={`bento-card cursor-pointer group overflow-hidden ${a.border}`}>
                  <div className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} min-h-[280px]`}
                    onClick={() => setSelected(p)}>
                    {/* Image side */}
                    <div className="relative w-full md:w-[45%] h-[220px] md:h-auto overflow-hidden">
                      <ProjectImage project={p} />
                      {/* Number overlay */}
                      <div className={`absolute top-4 ${isEven ? "right-4" : "left-4"} z-10`}>
                        <span className={`font-mono text-4xl font-bold ${a.text} opacity-15`}>{p.num}</span>
                      </div>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 ${
                        isEven
                          ? "bg-gradient-to-l from-void-card/90 via-transparent to-transparent"
                          : "bg-gradient-to-r from-void-card/90 via-transparent to-transparent"
                      } hidden md:block`} />
                    </div>

                    {/* Content side */}
                    <div className={`w-full md:w-[55%] p-7 md:p-10 flex flex-col justify-center ${isEven ? "md:items-end md:text-right" : ""}`}>
                      <h3 className={`text-xl md:text-2xl font-bold text-text-primary mb-3 transition-colors duration-300 group-hover:${a.text}`}>
                        {p.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-5 max-w-md">{p.description}</p>
                      <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? "md:justify-end" : ""}`}>
                        {p.tags.map((t) => (
                          <span key={t} className={`text-[10px] px-2.5 py-1 rounded-md font-semibold border ${
                            `bg-${p.accent}/[0.06] ${a.text}/70 ${a.border}`
                          }`}>{t}</span>
                        ))}
                      </div>
                      <div className={`flex gap-5 ${isEven ? "md:justify-end" : ""}`}>
                        <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                          className={`text-[13px] font-medium text-text-muted hover:${a.text} transition-colors flex items-center gap-1.5`}>
                          <i className="fab fa-github" /> GitHub
                        </a>
                        {p.live !== "#" && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                            className={`text-[13px] font-medium text-text-muted hover:${a.text} transition-colors flex items-center gap-1.5`}>
                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}>
            <motion.div className="bento-card max-w-2xl w-full mx-4 overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="relative h-[260px] bg-void-surface">
                <ProjectImage project={selected} />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10" />
                <button onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-void/60 backdrop-blur border border-border-medium flex items-center justify-center text-text-primary hover:text-neon-cyan transition-colors">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-extrabold text-text-primary mb-3">{selected.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-lg bg-neon-cyan/[0.06] text-neon-cyan/80 font-semibold border border-neon-cyan/10">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={selected.github} target="_blank" rel="noopener noreferrer"
                    className="btn-neon-filled inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm">
                    <i className="fab fa-github" /> View Code
                  </a>
                  {selected.live !== "#" && (
                    <a href={selected.live} target="_blank" rel="noopener noreferrer"
                      className="btn-neon inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm">
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
