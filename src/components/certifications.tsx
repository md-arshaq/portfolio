"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

const certs = [
  {
    title: "Nutanix Certified Associate 6",
    icon: "fa-solid fa-award",
    image: "/images/NUTANIX-NCA.png",
    gradient: "from-cyan-500 to-blue-600",
    accent: "neon-cyan",
  },
  {
    title: "Web Development Bootcamp",
    icon: "fa-solid fa-laptop-code",
    image: "/images/COMPLETE-WEB-DEV-BOOTCAMP.jpg",
    gradient: "from-lime-500 to-emerald-600",
    accent: "neon-lime",
  },
  {
    title: "Machine Learning – Kaggle",
    icon: "fa-solid fa-brain",
    image: "/images/Intro to Machine Learning.png",
    gradient: "from-pink-500 to-rose-600",
    accent: "neon-magenta",
  },
];

export default function Certifications() {
  const [modal, setModal] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative z-10">
        <SectionHeading number="05" subtitle="ACCOMPLISHMENTS" title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div key={c.title}
              className="bento-card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              onClick={() => setModal(c.image)}>

              <div className="p-7 pb-4 text-center">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <i className={`${c.icon} text-lg text-white`} />
                </div>
                <h3 className="text-base font-bold text-text-primary leading-snug">{c.title}</h3>
              </div>

              <div className="relative h-[170px] mx-3.5 mb-3.5 rounded-xl overflow-hidden">
                <Image src={c.image} alt={c.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-void/50 backdrop-blur border border-border-medium">
                    <i className="fa-solid fa-expand text-[9px]" /> View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {modal && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setModal(null)}>
            <motion.div className="relative max-w-[90%] max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
              <button onClick={() => setModal(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-void/80 backdrop-blur border border-border-medium flex items-center justify-center text-text-primary hover:text-neon-cyan transition-colors">
                <i className="fa-solid fa-xmark" />
              </button>
              <Image src={modal} alt="Certificate" width={900} height={650}
                className="rounded-2xl shadow-2xl shadow-black/50 max-h-[90vh] w-auto object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
