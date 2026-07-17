import dynamic from "next/dynamic";
import DockNav from "@/components/navbar";
import Hero from "@/components/hero";

// Lazy-load everything below the fold — reduces initial JS bundle
const Skills = dynamic(() => import("@/components/skills"));
const Projects = dynamic(() => import("@/components/projects"));
const Experience = dynamic(() => import("@/components/experience"));
const Education = dynamic(() => import("@/components/education"));
const Achievements = dynamic(() => import("@/components/achievements"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <>
      <DockNav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}