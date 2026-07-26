"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Video,
  MessageSquare,
  ExternalLink,
  X,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "ai" | "web" | "all";
  description: string;
  bullets: string[];
  tags: string[];
  github: string;
  live: string;
  icon: any;
}

const projects: Project[] = [
  {
    id: "gradewise",
    title: "GradeWise AI",
    subtitle: "Sustainable On-Prem AI Assessment Platform",
    category: "ai",
    description:
      "An automated grading system for handwritten student answer sheets using a three-stage localized pipeline (OCR → Structuring → SLM evaluation) with zero cloud dependency.",
    bullets: [
      "Built an asynchronous batch processing system using FastAPI, Redis caching/queues, and MongoDB (Motor).",
      "Designed a responsive React + TypeScript interface displaying rubric performance analytics and student feedback.",
    ],
    tags: ["FastAPI", "React", "MongoDB", "Qwen2.5", "Redis"],
    github: "https://github.com/md-arshaq/GradeWiseAI",
    live: "#",
    icon: GraduationCap,
  },
  {
    id: "tubemind",
    title: "TubeMind",
    subtitle: "YouTube Intelligence Platform",
    category: "ai",
    description:
      "A full-stack RAG platform enabling conversational intelligence with any YouTube video via semantic vector search and timestamp-aware citations.",
    bullets: [
      "Engineered retrieval chains in LangChain with Gemini text-embeddings and ChromaDB for semantic segment mapping.",
      "Developed a Next.js 15 + TypeScript frontend featuring streaming chat responses, summaries, and topic indexing.",
    ],
    tags: ["Next.js 15", "FastAPI", "LangChain", "ChromaDB", "Gemini AI"],
    github: "https://github.com/md-arshaq/TubeMind",
    live: "https://tube-mind-yt.vercel.app/",
    icon: Video,
  },
  {
    id: "novachat",
    title: "NovaChat",
    subtitle: "Low-Latency Real-Time Messaging Platform",
    category: "web",
    description:
      "A full-stack real-time chat application with global rooms, 1-on-1 messaging, persistent WebSockets, and custom avatar management.",
    bullets: [
      "Designed a Redis-native data layer using Redis Hashes for user sessions, Sets for presence tracking, and Streams for message history.",
      "Built a clean React client featuring typing indicators and session-based bcrypt authentication.",
    ],
    tags: ["React 18", "Node.js", "Socket.IO", "Redis Streams", "Express"],
    github: "https://github.com/md-arshaq/NovaChat",
    live: "https://nova-chat-ngd.vercel.app",
    icon: MessageSquare,
  },
];

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "web">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-left space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Selected Projects
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Applications combining full-stack web engineering, databases, and localized or cloud-based AI.
        </p>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 pt-2">
          {[
            { id: "all", label: "All" },
            { id: "ai", label: "AI & ML" },
            { id: "web", label: "Web Systems" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                filter === tab.id
                  ? "bg-zinc-800 border-zinc-700 text-white font-semibold shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                  : "bg-transparent border-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const IconComp = project.icon;

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="minimal-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 group-hover:text-accent-steel group-hover:border-accent-steel/30 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-accent-steel transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-steel shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 group-hover:border-accent-steel/20 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-zinc-400 hover:text-accent-steel flex items-center gap-1 transition-colors"
                  >
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 hover:border-accent-steel/30 transition-all"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 text-xs font-bold flex items-center gap-1 hover:bg-accent-steel hover:text-zinc-950 transition-colors shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative w-full max-w-xl bg-zinc-950 rounded-2xl p-6 border border-white/10 shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-steel mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-zinc-300">
                <p>{selectedProject.description}</p>

                <div className="space-y-2">
                  <div className="font-semibold text-white">Highlights</div>
                  <ul className="space-y-1.5">
                    {selectedProject.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-steel shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/20 text-center text-xs font-mono text-white flex items-center justify-center gap-1.5"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                  {selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl bg-white text-zinc-950 text-center text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-zinc-200"
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}