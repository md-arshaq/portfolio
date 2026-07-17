"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, GraduationCap, School } from "lucide-react";
import SectionHeading from "./section-heading";

const schools = [
  {
    name: "BMS College of Engineering",
    degree: "B.E. in Computer Science (Data Science)",
    period: "Aug 2023 – May 2027",
    location: "Bengaluru, India",
    image: "/images/BMS_College_of_Engineering.png",
    stat: { label: "CGPA", value: "8.87" },
    color: "neb-cyan",
    gradientIcon: "from-cyan-500 to-indigo-600",
    Icon: GraduationCap,
  },
  {
    name: "Shaheen Falcon PU College",
    degree: "PUC (Class XII)",
    period: "Aug 2021 – May 2023",
    location: "Bengaluru, India",
    image: null,
    stat: { label: "Aggregate", value: "89.5%" },
    color: "neb-magenta",
    gradientIcon: "from-magenta-500 to-purple-600",
    Icon: School,
  },
];

const colorAccentMap: Record<string, { border: string; glow: string; text: string; tag: string }> = {
  "neb-cyan": {
    border: "border-neb-cyan/10 hover:border-neb-cyan/35",
    glow: "var(--neb-cyan)",
    text: "text-neb-cyan",
    tag: "bg-neb-cyan/[0.05] text-neb-cyan/95 border-neb-cyan/10",
  },
  "neb-magenta": {
    border: "border-neb-magenta/10 hover:border-neb-magenta/35",
    glow: "var(--neb-magenta)",
    text: "text-neb-magenta",
    tag: "bg-neb-magenta/[0.05] text-neb-magenta/95 border-neb-magenta/10",
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className="relative z-10">
        <SectionHeading number="04" subtitle="ACADEMICS" title="Education" />

        <div className="max-w-4xl">
          <div className="relative pl-8 md:pl-16">
            {/* Vertical timeline connector */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-void-surface">
              <motion.div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--neb-cyan), var(--neb-magenta), transparent)",
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="space-y-10">
              {schools.map((s, i) => {
                const colors = colorAccentMap[s.color];
                return (
                  <div key={s.name} className="relative">
                    {/* Timeline glowing dot */}
                    <div className="absolute left-[-2rem] md:left-[-4rem] top-10 -translate-x-1/2">
                      <motion.div
                        className={`w-4 h-4 rounded-full bg-void border-[3px]`}
                        style={{
                          borderColor: colors.glow,
                          boxShadow: `0 0 16px ${colors.glow}`,
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 300 }}
                      />
                    </div>

                    {/* Card container */}
                    <motion.div
                      className={`nebula-card p-8 md:p-10 ${colors.border} animated-border`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.15,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-6">
                        <div className="flex items-center gap-5">
                          {s.image ? (
                            <div className="w-14 h-14 rounded-2xl bg-white p-2 flex-shrink-0 shadow-lg flex items-center justify-center">
                              <Image
                                src={s.image}
                                alt={s.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradientIcon} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                              <s.Icon size={22} className="text-white" />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
                              {s.name}
                            </h3>
                            <p className={`${colors.text} font-bold text-sm mt-1`}>
                              {s.degree}
                            </p>
                          </div>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full ${colors.tag} text-xs font-bold whitespace-nowrap font-mono self-start sm:self-auto`}>
                          <Calendar size={11} /> {s.period}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        {/* Grade/Stat Box */}
                        <div className={`flex items-center gap-4 px-5 py-3 rounded-2xl bg-void-surface border border-border-medium`}>
                          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.gradientIcon} flex items-center justify-center shadow-md`}>
                            <s.Icon size={12} className="text-white" />
                          </div>
                          <div>
                            <p className="text-[10px] text-text-muted uppercase tracking-[2px] font-bold font-mono">
                              {s.stat.label}
                            </p>
                            <p className={`text-xl font-extrabold ${colors.text} leading-none mt-1`}>
                              {s.stat.value}
                            </p>
                          </div>
                        </div>

                        <p className="text-text-secondary text-sm flex items-center gap-2">
                          <MapPin size={11} className={`${colors.text} opacity-80`} /> {s.location}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}