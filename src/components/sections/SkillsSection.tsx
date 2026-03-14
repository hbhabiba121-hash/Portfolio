import { motion } from "framer-motion";
import { SectionReveal } from "../ui";
import { 
  SiReact, SiNodedotjs, SiJavascript, SiHtml5,  SiLaravel, SiBootstrap, 
  SiFlutter, SiMysql, SiMongodb, SiDocker, SiGithub 
} from "react-icons/si";

// Add a `color` property for hover
const allSkills = [
  { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },      // Orange/HTML5

  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" }, // Yellow
  { label: "React.js", Icon: SiReact, color: "#61DAFB" },   // Cyan
  { label: "Node.js / Express.js", Icon: SiNodedotjs, color: "#339933" }, // Green
  { label: "PHP / Laravel", Icon: SiLaravel, color: "#FF2D20" }, // Red/laravel
  { label: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" }, // Purple
  { label: "React Native", Icon: SiReact, color: "#61DAFB" },
  { label: "Flutter / Dart", Icon: SiFlutter, color: "#02569B" },
  { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "Git / GitHub", Icon: SiGithub, color: "#181717" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
];

export function SkillsSection() {
  return (
    <SectionReveal id="skills" className="py-20 sm:py-24">
<div className="mb-12 space-y-4 text-center">
  <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
    Mes Compétences
  </p>

  <h2 className="section-title text-center mx-auto">
    Technologies et outils que j’utilise au quotidien
  </h2>
</div>

      {/* Slider container */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }} // slide to left
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          {allSkills.concat(allSkills).map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center w-32 h-32 bg-white/5 rounded-2xl p-4 text-emerald-300 shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.2,
                y: -5,
                color: skill.color,   // Change icon color on hover
                textShadow: `0 0 8px ${skill.color}`,
              }}
            >
              <skill.Icon className="text-5xl mb-2" />
              <span className="text-sm text-white/70 text-center">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}