"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const categories = [
  {
    title: "Languages",
    icon: "fa-solid fa-code",
    accent: "bg-primary/10 text-primary-light border-primary/10",
    iconBg: "bg-gradient-to-br from-violet-500 to-indigo-600",
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
    accent: "bg-accent-green/10 text-accent-green border-accent-green/10",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
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
    accent: "bg-secondary/10 text-secondary border-secondary/10",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    skills: [
      { name: "React.js", icon: "fab fa-react" },
      { name: "TailwindCSS", icon: "fa-brands fa-css3" },
    ],
  },
  {
    title: "Data & ML",
    icon: "fa-solid fa-brain",
    accent: "bg-accent-rose/10 text-accent-rose border-accent-rose/10",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
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
    accent: "bg-accent-amber/10 text-accent-amber border-accent-amber/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
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
        <SectionHeading subtitle="EXPERTISE" title="Skills & Technologies" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className={`glass-card p-6 group ${ci === 3 ? "lg:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-lg ${cat.iconBg} flex items-center justify-center`}>
                  <i className={`${cat.icon} text-white text-xs`} />
                </div>
                <h3 className="text-xs font-bold tracking-[1.5px] text-text-secondary uppercase">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium border cursor-default transition-all duration-200 hover:-translate-y-0.5 ${cat.accent}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.03, duration: 0.35 }}
                  >
                    <i className={`${skill.icon} text-[11px] opacity-60`} />
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
