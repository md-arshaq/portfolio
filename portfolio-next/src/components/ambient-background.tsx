"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top-left violet glow */}
      <motion.div
        className="absolute -top-[25%] -left-[15%] w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right blue glow */}
      <motion.div
        className="absolute -bottom-[20%] -right-[15%] w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center rose glow */}
      <motion.div
        className="absolute top-[50%] left-[40%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251,113,133,0.04) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 70, -50, 0], y: [0, -50, 40, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
