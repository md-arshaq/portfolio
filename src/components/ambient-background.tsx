"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top-left indigo aurora */}
      <motion.div
        className="absolute top-[-20%] left-[-8%] w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 25, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center cyan pulse */}
      <motion.div
        className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[550px] h-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
        animate={{ x: [0, -50, 25, 0], y: [0, 35, -25, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right magenta glow */}
      <motion.div
        className="absolute bottom-[-15%] right-[-8%] w-[650px] h-[650px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,121,249,0.04) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, -35, 18, 0], y: [0, 28, -18, 0] }}
        transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
