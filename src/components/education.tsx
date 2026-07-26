"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin, School } from "lucide-react";

const educationList = [
  {
    institution: "BMS College of Engineering",
    degree: "B.E. in Computer Science (Data Science)",
    period: "Aug 2023 – May 2027",
    location: "Bengaluru, India",
    score: "8.87 CGPA",
    image: "/images/BMS_College_of_Engineering.png",
    icon: GraduationCap,
  },
  {
    institution: "Shaheen Falcon PU College",
    degree: "Pre-University College (Class XII - PCMB)",
    period: "Aug 2021 – May 2023",
    location: "Bengaluru, India",
    score: "89.5% Aggregate",
    image: null,
    icon: School,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-left space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Education
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Academic foundation in computer science and data science engineering.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="minimal-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {item.image ? (
                      <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.institution}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 group-hover:border-accent-steel/30 text-zinc-400 flex items-center justify-center shrink-0 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-accent-steel transition-colors">
                        {item.institution}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {item.degree}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 group-hover:border-accent-steel/20 text-[10px] font-mono text-white shrink-0 transition-colors">
                    {item.score}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-steel" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-steel" />
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}