"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Code2,
  Briefcase,
  GraduationCap,
  Trophy,
  Mail,
  User,
  ExternalLink,
  X,
  FileText,
  Sparkles,
  Command,
  Check,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const copyEmail = () => {
    navigator.clipboard.writeText("arshaq2312@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const items = [
    {
      title: "Projects Showcase",
      subtitle: "GradeWise AI, TubeMind, NovaChat",
      icon: Code2,
      category: "Navigation",
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      title: "Samsung R&D Experience",
      subtitle: "G2P Transformer, Phonetic Folding Research",
      icon: Briefcase,
      category: "Navigation",
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      title: "Technical Skills Matrix",
      subtitle: "AI/ML, Python, React, Next.js, PyTorch, LangChain",
      icon: Sparkles,
      category: "Navigation",
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      title: "Academic Record",
      subtitle: "BMS College of Engineering (BE CS Data Science, 8.87 CGPA)",
      icon: GraduationCap,
      category: "Navigation",
      action: () => {
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      title: "Achievements & Rating",
      subtitle: "LeetCode 1600+ (1500+ DSA), CodeChef 2★, Nutanix NCA",
      icon: Trophy,
      category: "Navigation",
      action: () => {
        document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      title: "Copy Email Address",
      subtitle: "arshaq2312@gmail.com",
      icon: copied ? Check : Mail,
      category: "Action",
      action: copyEmail,
    },
    {
      title: "Download Resume",
      subtitle: "PDF Version (July 2026)",
      icon: FileText,
      category: "Action",
      action: () => {
        window.open("/Arshaq_Resume_JULY_26_updated.pdf", "_blank");
        onClose();
      },
    },
    {
      title: "GitHub Profile",
      subtitle: "github.com/md-arshaq",
      icon: ExternalLink,
      category: "External",
      action: () => {
        window.open("https://github.com/md-arshaq", "_blank");
        onClose();
      },
    },
    {
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/mohammedarshaq7",
      icon: User,
      category: "External",
      action: () => {
        window.open("https://www.linkedin.com/in/mohammedarshaq7/", "_blank");
        onClose();
      },
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-xl bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10"
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {/* Search */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/5 gap-3">
              <Search className="w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search commands or sections..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-white placeholder-zinc-500 text-sm outline-none font-mono"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-0.5">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-zinc-500 text-xs font-mono">
                  No matches.
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-zinc-800 border border-white/5 text-zinc-400 group-hover:text-white transition-colors">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-white transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-zinc-500 font-mono">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-white/5">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-zinc-950 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <div className="flex items-center gap-1.5">
                <Command className="w-3 h-3" />
                <span>Command Search</span>
              </div>
              <div>
                <span className="px-1 py-0.5 rounded bg-white/5">ESC</span> to exit
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
