"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -500, y: -500 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 250}px, ${pos.current.y - 250}px)`;
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
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[2] hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(99,102,241,0.035) 0%, rgba(34,211,238,0.015) 40%, transparent 65%)",
        filter: "blur(50px)",
        transition: "transform 0.08s linear",
      }}
    />
  );
}
