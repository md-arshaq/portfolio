"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Brain,
  Palette,
  Terminal,
  Cpu,
  Layers,
  Box,
  Workflow,
  MessageSquare,
  Container,
  GitBranch,
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: { name: string; level: string; icon: any }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "aiml",
    title: "AI / ML & Speech",
    icon: Brain,
    skills: [
      { name: "PyTorch", level: "Advanced", icon: Cpu },
      { name: "TensorFlow", level: "Intermediate", icon: Cpu },
      { name: "LangChain", level: "Advanced", icon: Workflow },
      { name: "HuggingFace SLMs", level: "Advanced", icon: Brain },
      { name: "ChromaDB & RAG", level: "Advanced", icon: Database },
      { name: "Grapheme-to-Phoneme (G2P)", level: "Research", icon: Layers },
    ],
  },
  {
    id: "web",
    title: "Full-Stack Web Dev",
    icon: Palette,
    skills: [
      { name: "React.js 18/19", level: "Advanced", icon: Cpu },
      { name: "Next.js 15/16", level: "Advanced", icon: Layers },
      { name: "FastAPI", level: "Advanced", icon: Terminal },
      { name: "Node.js & Express", level: "Advanced", icon: Server },
      { name: "Socket.IO", level: "Advanced", icon: MessageSquare },
      { name: "Tailwind CSS v4", level: "Advanced", icon: Palette },
    ],
  },
  {
    id: "languages",
    title: "Core Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: "Expert", icon: Code2 },
      { name: "TypeScript", level: "Advanced", icon: Layers },
      { name: "JavaScript", level: "Advanced", icon: Code2 },
      { name: "Java", level: "Intermediate", icon: Code2 },
      { name: "C", level: "Intermediate", icon: Terminal },
    ],
  },
  {
    id: "tools",
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "Redis (Streams)", level: "Advanced", icon: Box },
      { name: "MongoDB (Motor Async)", level: "Advanced", icon: Database },
      { name: "PostgreSQL", level: "Intermediate", icon: Database },
      { name: "Docker", level: "Intermediate", icon: Container },
      { name: "Git & GitHub", level: "Advanced", icon: GitBranch },
    ],
  },
];

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const filteredCategories = skillCategories.filter(
    (c) => selectedCat === "all" || c.id === selectedCat
  );

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-left space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Technical Skills
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Core programming languages, machine learning infrastructure, web APIs, and databases.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setSelectedCat("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
              selectedCat === "all"
                ? "bg-zinc-800 border-zinc-700 text-white font-semibold shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                : "bg-transparent border-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                selectedCat === cat.id
                  ? "bg-zinc-800 border-zinc-700 text-white font-semibold shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                  : "bg-transparent border-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat) => {
          const IconComp = cat.icon;
          return (
            <motion.div
              key={cat.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="minimal-card p-6 group"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/5">
                <IconComp className="w-5 h-5 text-zinc-400 group-hover:text-accent-steel transition-colors" />
                <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-accent-steel transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Subgrid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cat.skills.map((skill, idx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-between group/chip hover:border-accent-steel/30 hover:bg-zinc-800/50 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <SkillIcon className="w-3.5 h-3.5 text-zinc-400 group-hover/chip:text-accent-steel transition-colors" />
                        <span className="text-xs font-medium text-zinc-300 group-hover/chip:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500">
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}