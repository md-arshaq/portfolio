"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative z-10">
        <SectionHeading subtitle="ACADEMICS" title="Education" />

        <div className="max-w-3xl">
          <div className="relative pl-8 md:pl-12">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px">
              <motion.div className="w-full h-full bg-gradient-to-b from-secondary/50 via-primary/30 to-transparent"
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.2 }} style={{ transformOrigin: "top" }} />
            </div>

            {/* Dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2">
              <motion.div className="w-3.5 h-3.5 rounded-full bg-secondary border-[3px] border-bg-base shadow-[0_0_12px_var(--secondary)]"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }} />
            </div>

            {/* Card */}
            <motion.div className="glass-card p-7 md:p-9"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex-shrink-0">
                    <Image src="/images/BMS_College_of_Engineering.png" alt="BMS College" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text">BMS College of Engineering</h3>
                    <p className="text-secondary font-medium text-sm">B.E. in CS (Data Science)</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/[0.06] text-xs font-semibold text-secondary border border-secondary/10 whitespace-nowrap">
                  <i className="fa-regular fa-calendar text-[10px]" /> Aug 2023 – May 2027
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* CGPA */}
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-secondary/[0.05] border border-secondary/[0.08]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent-green flex items-center justify-center">
                    <i className="fa-solid fa-graduation-cap text-white text-[10px]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider font-bold">CGPA</p>
                    <p className="text-xl font-extrabold text-secondary leading-none">8.74</p>
                  </div>
                </div>

                <p className="text-text-muted text-sm flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-secondary text-[10px]" /> Bengaluru, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
