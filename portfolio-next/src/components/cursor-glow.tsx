"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${target.current.x - 200}px, ${target.current.y - 200}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${pos.current.x - 12}px, ${pos.current.y - 12}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Large glow that follows the cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[2] hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(56,189,248,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
          transition: "transform 0.05s linear",
        }}
      />
      {/* Small trailing dot */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998] hidden md:block mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          transition: "transform 0.08s ease-out",
        }}
      />
    </>
  );
}
