"use client";

export default function InteractiveCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-black">
      {/* Orb 1: Steel-Blue Fluid Light */}
      <div 
        className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[110px] animate-orb-1"
        style={{
          background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
        }}
      />

      {/* Orb 2: Silver-Indigo Fluid Light */}
      <div 
        className="absolute top-[30%] right-[10%] w-[550px] h-[550px] rounded-full opacity-[0.1] blur-[110px] animate-orb-2"
        style={{
          background: "radial-gradient(circle, #818cf8 0%, transparent 70%)",
        }}
      />

      {/* Center Soft Accent Spotlight */}
      <div 
        className="absolute top-[60%] left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
        style={{
          background: "radial-gradient(circle, #c084fc 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
