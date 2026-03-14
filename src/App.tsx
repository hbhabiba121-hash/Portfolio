import { motion, useScroll, useSpring } from "framer-motion";
import { Header, Footer } from "./components/layout";
import {
  HeroSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "./components/sections";
import AnimatedLine from "../src/components/ui/AnimatedLine";

function App() {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.15,
  });

  return (
    <div className="relative bg-background text-foreground">
      <style>{`
        @keyframes ripple {
          from { transform: translate(-50%, -50%) scale(1); opacity: .55; }
          to   { transform: translate(-50%, -50%) scale(18); opacity: 0; }
        }
      `}</style>

      {/* Noise grid overlay */}
      <div className="grid-noise" />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[linear-gradient(90deg,var(--green-400),var(--primary),var(--green-600))] shadow-[0_0_18px_rgba(16,185,129,0.65)]"
      />

      <Header />

      <main>
        <HeroSection />
        <AnimatedLine />
        <ExperienceSection />
        <AnimatedLine />
        <EducationSection />
        <AnimatedLine />
        <ProjectsSection />
        <AnimatedLine />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export { App };
