"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const categories = [
  {
    title: "Languages",
    icon: "fa-solid fa-code",
    color: "neon-cyan",
    borderColor: "border-neon-cyan/10 hover:border-neon-cyan/25",
    iconBg: "from-cyan-500 to-blue-600",
    tagStyle: "bg-neon-cyan/[0.06] text-neon-cyan/80 border-neon-cyan/10",
    span: "lg:row-span-2",
    skills: [
      { name: "Python", icon: "fab fa-python" },
      { name: "Java", icon: "fab fa-java" },
      { name: "C", icon: "fa-solid fa-c" },
      { name: "SQL", icon: "fa-solid fa-database" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "fa-solid fa-server",
    color: "neon-lime",
    borderColor: "border-neon-lime/10 hover:border-neon-lime/25",
    iconBg: "from-lime-500 to-emerald-600",
    tagStyle: "bg-neon-lime/[0.06] text-neon-lime/80 border-neon-lime/10",
    span: "",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express.js", icon: "fa-brands fa-node" },
      { name: "Flask", icon: "fa-solid fa-pepper-hot" },
      { name: "REST APIs", icon: "fa-solid fa-server" },
      { name: "Socket.io", icon: "fa-solid fa-network-wired" },
    ],
  },
  {
    title: "Web & Frontend",
    icon: "fa-solid fa-palette",
    color: "neon-magenta",
    borderColor: "border-neon-magenta/10 hover:border-neon-magenta/25",
    iconBg: "from-pink-500 to-rose-600",
    tagStyle: "bg-neon-magenta/[0.06] text-neon-magenta/80 border-neon-magenta/10",
    span: "",
    skills: [
      { name: "React.js", icon: "fab fa-react" },
      { name: "TailwindCSS", icon: "fa-brands fa-css3" },
    ],
  },
  {
    title: "Data & ML",
    icon: "fa-solid fa-brain",
    color: "neon-violet",
    borderColor: "border-neon-violet/10 hover:border-neon-violet/25",
    iconBg: "from-violet-500 to-purple-600",
    tagStyle: "bg-neon-violet/[0.06] text-neon-violet/80 border-neon-violet/10",
    span: "lg:col-span-2",
    skills: [
      { name: "Pandas", icon: "fa-solid fa-chart-line" },
      { name: "NumPy", icon: "fa-solid fa-calculator" },
      { name: "Matplotlib", icon: "fa-solid fa-chart-pie" },
      { name: "Seaborn", icon: "fa-solid fa-wave-square" },
      { name: "scikit-learn", icon: "fa-solid fa-robot" },
      { name: "OpenCV", icon: "fa-solid fa-eye" },
      { name: "Gemini AI", icon: "fa-solid fa-brain" },
    ],
  },
  {
    title: "Database & Tools",
    icon: "fa-solid fa-wrench",
    color: "neon-amber",
    borderColor: "border-neon-amber/10 hover:border-neon-amber/25",
    iconBg: "from-amber-500 to-orange-600",
    tagStyle: "bg-neon-amber/[0.06] text-neon-amber/80 border-neon-amber/10",
    span: "",
    skills: [
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
      { name: "Firebase", icon: "fa-solid fa-fire" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Vercel", icon: "fa-solid fa-cloud-arrow-up" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative z-10">
        <SectionHeading number="01" subtitle="EXPERTISE" title="Skills & Technologies" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className={`bento-card p-6 group ${cat.span} ${cat.borderColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center shadow-lg`}>
                  <i className={`${cat.icon} text-white text-xs`} />
                </div>
                <h3 className="text-xs font-bold tracking-[1.5px] text-text-secondary uppercase">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium border cursor-default transition-all duration-200 hover:-translate-y-0.5 ${cat.tagStyle}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.03, duration: 0.35 }}
                  >
                    <i className={`${skill.icon} text-[11px] opacity-50`} />
                    {skill.name}
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
