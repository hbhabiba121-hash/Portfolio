import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { SectionReveal } from "../ui";
import { education } from "../../data";

export function EducationSection() {
  return (
    <SectionReveal id="education" className="container-shell py-20 sm:py-24">
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
          Éducation
        </p>
        <h2 className="section-title">
          Une base académique orientée ingénierie
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{
              y: -12,
              scale: 1.02,
              rotateX: 7,
              rotateY: index % 2 === 0 ? -7 : 7,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass depth-card rounded-[30px] p-7"
          >
            <div
              style={{ transform: "translateZ(26px)" }}
              className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/12 text-emerald-300 glow-ring"
            >
              <FiBriefcase />
            </div>
            <div style={{ transform: "translateZ(34px)" }}>
              <p className="text-sm text-emerald-300">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.degree}
              </h3>
              <p className="mt-3 text-sm text-white/56">
                {item.school} • {item.city}
              </p>
              <p className="mt-5 text-sm leading-7 text-white/68">{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
}
