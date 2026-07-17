"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  MessageSquare,
  Video,
  ExternalLink,
  X,
  FileCode2,
} from "lucide-react";
import SectionHeading from "./section-heading";

const projects = [
  {
    title: "GradeWise AI",
    subtitle: "Sustainable AI Assessment Platform",
    description:
      "An AI-powered grading system for handwritten answer sheets via a three-stage pipeline: Mistral OCR → text structuring → Qwen2.5-0.5B SLM evaluation, with zero cloud dependency.",
    bullets: [
      "Built an async job system using FastAPI, Redis (caching + queue), and MongoDB (Motor) for non-blocking batch processing with real-time progress tracking.",
      "Developed a React + TypeScript frontend for grading review and analytics.",
    ],
    image: "/images/gradewise-ai.png",
    tags: ["FastAPI", "React", "MongoDB", "HuggingFace", "Redis"],
    github: "https://github.com/md-arshaq/GradeWiseAI",
    live: "#",
    Icon: GraduationCap,
    accent: "neb-indigo",
    num: "01",
  },
  {
    title: "TubeMind",
    subtitle: "YouTube Intelligence Platform",
    description:
      "A full-stack AI platform to chat with any YouTube video using a RAG pipeline: transcripts chunked, embedded via Gemini text-embedding-004, and stored in ChromaDB for semantic retrieval.",
    bullets: [
      "Engineered a LangChain retrieval chain with timestamp-aware chunking, delivering answers with precise video timestamp citations.",
      "Designed a Next.js 15 + TypeScript frontend with real-time chat, video summarization, and topic extraction; deployed on Vercel + Render.",
    ],
    image: "/images/tubemind.png",
    tags: ["Next.js", "FastAPI", "LangChain", "ChromaDB", "Gemini"],
    github: "https://github.com/md-arshaq/TubeMind",
    live: "https://tube-mind-yt.vercel.app/",
    Icon: Video,
    accent: "neb-cyan",
    num: "02",
  },
  {
    title: "NovaChat",
    subtitle: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat app with global and 1-on-1 messaging via persistent WebSocket connections using Socket.IO, React 18, and Node.js.",
    bullets: [
      "Engineered a Redis native data layer using Hashes for sessions, Sets for presence tracking, and Streams for chat history persistence.",
      "Implemented session-based auth with bcrypt hashing; designed a glassmorphism UI with typing indicators and Cloudinary-hosted avatars.",
    ],
    image: "/images/nova-chat-1.png",
    tags: ["React", "Node.js", "Socket.IO", "Redis", "Express"],
    github: "https://github.com/md-arshaq/NovaChat",
    live: "https://nova-chat-ngd.vercel.app",
    Icon: MessageSquare,
    accent: "neb-magenta",
    num: "03",
  },
];

const accentMap: Record<
  string,
  { text: string; bg: string; border: string; glow: string; dot: string }
> = {
  "neb-indigo": {
    text: "text-neb-indigo",
    bg: "bg-neb-indigo",
    border: "border-neb-indigo/15",
    glow: "rgba(129,140,248,0.15)",
    dot: "bg-neb-indigo",
  },
  "neb-cyan": {
    text: "text-neb-cyan",
    bg: "bg-neb-cyan",
    border: "border-neb-cyan/15",
    glow: "rgba(34,211,238,0.15)",
    dot: "bg-neb-cyan",
  },
  "neb-magenta": {
    text: "text-neb-magenta",
    bg: "bg-neb-magenta",
    border: "border-neb-magenta/15",
    glow: "rgba(232,121,249,0.15)",
    dot: "bg-neb-magenta",
  },
};

function ProjectImage({ project }: { project: (typeof projects)[0] }) {
  const [err, setErr] = useState(false);
  const a = accentMap[project.accent];
  if (!project.image || err) {
    return (
      <div className="absolute inset-0 bg-void-surface flex items-center justify-center">
        <motion.div
          className={`${a.text} opacity-20`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <project.Icon size={48} />
        </motion.div>
      </div>
    );
  }
  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(max-width:768px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setErr(true)}
      priority
    />
  );
}

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -4, y: x * 4 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="relative z-10">
        <SectionHeading number="02" subtitle="PORTFOLIO" title="Projects" />

        <div className="space-y-12">
          {projects.map((p, i) => {
            const a = accentMap[p.accent];
            const isEven = i % 2 === 1;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <TiltCard
                  className={`nebula-card animated-border cursor-pointer group overflow-hidden ${a.border}`}
                >
                  <div
                    className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"
                      } min-h-[320px]`}
                    onClick={() => setSelected(p)}
                  >
                    {/* Image side - styled as a premium browser mockup */}
                    <div className="relative w-full md:w-[48%] min-h-[240px] md:min-h-auto overflow-hidden bg-void-surface flex flex-col">
                      {/* Browser header bar */}
                      <div className="browser-frame-bar">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <div className="ml-4 px-3 py-0.5 rounded bg-void/50 text-[9px] font-mono text-text-muted/80 truncate max-w-[150px]">
                          {p.title.toLowerCase().replace(/\s+/g, "")}.io
                        </div>
                      </div>

                      {/* Viewport frame containing the screenshot */}
                      <div className="relative flex-1 min-h-[200px]">
                        <ProjectImage project={p} />

                        {/* Number overlay */}
                        <div className={`absolute top-4 ${isEven ? "right-4" : "left-4"} z-10`}>
                          <span className={`font-mono text-5xl font-extrabold ${a.text} opacity-15`}>
                            {p.num}
                          </span>
                        </div>

                        {/* Fade/glow layout decoration */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-void-card/90 via-transparent to-transparent`}
                        />
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      className={`w-full md:w-[52%] p-8 md:p-12 flex flex-col justify-center ${isEven ? "md:items-end md:text-right" : ""
                        }`}
                    >
                      <p className={`text-[10px] font-mono font-bold ${a.text} opacity-80 tracking-[2px] uppercase mb-3`}>
                        {p.subtitle}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4 tracking-tight group-hover:text-text-primary">
                        {p.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-md">
                        {p.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mb-7 ${isEven ? "md:justify-end" : ""
                          }`}
                      >
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className={`text-[10px] px-3 py-1 rounded-md font-bold border bg-void-elevated/40 ${a.text}/90 ${a.border}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div
                        className={`flex gap-5 ${isEven ? "md:justify-end" : ""}`}
                      >
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[13px] font-semibold text-text-secondary hover:text-neb-indigo transition-colors flex items-center gap-1.5"
                        >
                          <FileCode2 className="w-4 h-4" /> Code
                        </a>
                        {p.live !== "#" && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[13px] font-semibold text-text-secondary hover:text-neb-indigo transition-colors flex items-center gap-1.5"
                          >
                            <ExternalLink size={13} /> Live Demo
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

      {/* Modal Detail View */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="nebula-card max-w-2xl w-full mx-4 overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Browser frame styling inside modal */}
              <div className="browser-frame-bar relative z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <button
                  onClick={() => setSelected(null)}
                  className="ml-auto w-7 h-7 rounded-full bg-void/60 backdrop-blur border border-border-medium flex items-center justify-center text-text-secondary hover:text-neb-magenta transition-colors"
                >
                  <X size={13} />
                </button>
              </div>

              <div className="relative h-[280px] bg-void-surface">
                <ProjectImage project={selected} />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent z-10" />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-[11px] font-mono font-bold text-neb-indigo/80 tracking-wider uppercase mb-2">
                  {selected.subtitle}
                </p>
                <h3 className="text-2xl font-extrabold text-text-primary mb-4 tracking-tight">
                  {selected.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {selected.description}
                </p>
                {selected.bullets.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {selected.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary text-[13px] leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neb-indigo/60 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3.5 py-1.5 rounded-lg bg-neb-indigo/[0.06] text-neb-indigo font-bold border border-neb-indigo/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-nebula-filled inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                  >
                    <FileCode2 className="w-4 h-4" /> View Code
                  </a>
                  {selected.live !== "#" && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-nebula inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                    >
                      <ExternalLink size={13} /> Live Demo
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