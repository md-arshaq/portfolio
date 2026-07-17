"use client";

import { motion } from "framer-motion";
import {
  Code2, Database, Server, Brain, Palette,
  Zap, GitBranch, Cloud, Terminal, Cpu, Layers,
  Box, Workflow, MessageSquare, Container,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "./section-heading";

interface Skill {
  name: string;
  Icon: LucideIcon;
}

interface Category {
  title: string;
  TitleIcon: LucideIcon;
  color: string;
  borderColor: string;
  iconBg: string;
  tagStyle: string;
  span: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Languages",
    TitleIcon: Code2,
    color: "neb-indigo",
    borderColor: "border-neb-indigo/10 hover:border-neb-indigo/35",
    iconBg: "from-indigo-500 to-blue-600",
    tagStyle: "bg-neb-indigo/[0.05] text-neb-indigo/90 border-neb-indigo/10 hover:border-neb-indigo/30",
    span: "lg:row-span-2",
    skills: [
      { name: "C", Icon: Terminal },
      { name: "Java", Icon: Code2 },
      { name: "Python", Icon: Code2 },
      { name: "JavaScript", Icon: Zap },
      { name: "TypeScript", Icon: Layers },
    ],
  },
  {
    title: "Web Development",
    TitleIcon: Palette,
    color: "neb-cyan",
    borderColor: "border-neb-cyan/10 hover:border-neb-cyan/35",
    iconBg: "from-cyan-500 to-indigo-600",
    tagStyle: "bg-neb-cyan/[0.05] text-neb-cyan/90 border-neb-cyan/10 hover:border-neb-cyan/30",
    span: "",
    skills: [
      { name: "React.js", Icon: Zap },
      { name: "Next.js", Icon: Layers },
      { name: "Node.js", Icon: Server },
      { name: "FastAPI", Icon: Zap },
      { name: "Socket.IO", Icon: MessageSquare },
      { name: "Tailwind CSS", Icon: Palette },
    ],
  },
  {
    title: "AI / ML",
    TitleIcon: Brain,
    color: "neb-magenta",
    borderColor: "border-neb-magenta/10 hover:border-neb-magenta/35",
    iconBg: "from-magenta-500 to-purple-600",
    tagStyle: "bg-neb-magenta/[0.05] text-neb-magenta/90 border-neb-magenta/10 hover:border-neb-magenta/30",
    span: "lg:col-span-2",
    skills: [
      { name: "TensorFlow", Icon: Cpu },
      { name: "PyTorch", Icon: Cpu },
      { name: "LangChain", Icon: Workflow },
      { name: "HuggingFace", Icon: Brain },
      { name: "RAG", Icon: Layers },
      { name: "ChromaDB", Icon: Database },
    ],
  },
  {
    title: "Databases & Tools",
    TitleIcon: Database,
    color: "neb-gold",
    borderColor: "border-neb-gold/10 hover:border-neb-gold/35",
    iconBg: "from-amber-500 to-orange-600",
    tagStyle: "bg-neb-gold/[0.05] text-neb-gold/90 border-neb-gold/10 hover:border-neb-gold/30",
    span: "",
    skills: [
      { name: "MongoDB", Icon: Database },
      { name: "PostgreSQL", Icon: Database },
      { name: "Redis", Icon: Box },
      { name: "Docker", Icon: Container },
      { name: "Git", Icon: GitBranch },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="relative z-10">
        <SectionHeading number="01" subtitle="EXPERTISE" title="Skills & Technologies" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className={`nebula-card p-8 group ${cat.span} ${cat.borderColor} animated-border`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: ci * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4.5 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <cat.TitleIcon size={16} className="text-white" />
                </div>
                <h3 className="text-[13px] font-bold tracking-[2px] text-text-secondary uppercase">
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(({ name, Icon }, si) => (
                  <motion.span
                    key={name}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-semibold border cursor-default transition-all duration-300 hover:-translate-y-0.5 ${cat.tagStyle}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.03, duration: 0.35 }}
                  >
                    <Icon size={11} className="opacity-60" />
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}