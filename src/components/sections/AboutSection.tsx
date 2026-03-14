import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { SectionReveal, RippleButton } from "../ui";
import { languageLevels } from "../../data";
import { cn } from "../../utils/cn";

export function AboutSection() {
  const [bioMode, setBioMode] = useState<"fr" | "en">("fr");

  return (
    <SectionReveal id="about" className="container-shell py-20 sm:py-24">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
            À propos
          </p>
          <h2 className="section-title">
            Une approche produit, humaine et performante
          </h2>
          <p className="section-copy">
            Un profil polyvalent capable de concevoir des expériences web et mobiles
            élégantes, robustes et alignées avec les attentes utilisateur.
          </p>
        </div>
        <div className="glass inline-flex rounded-full p-1">
          <button
            type="button"
            onClick={() => setBioMode("fr")}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition",
              bioMode === "fr"
                ? "bg-emerald-400/18 text-emerald-300"
                : "text-white/55"
            )}
          >
            FR
          </button>
          <button
            type="button"
            onClick={() => setBioMode("en")}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition",
              bioMode === "en"
                ? "bg-emerald-400/18 text-emerald-300"
                : "text-white/55"
            )}
          >
            EN
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
          style={{ transformStyle: "preserve-3d" }}
          className="glass rounded-[30px] p-7 sm:p-8"
        >
          <div style={{ transform: "translateZ(22px)" }}>
            <p className="text-lg leading-8 text-white/76">
              {bioMode === "fr"
                ? "Développeuse full-stack passionnée par la création d'applications web et mobiles. Expérimentée en MERN stack et PHP (Laravel), en développement mobile cross-platform avec React Native et Flutter, ainsi qu'en conception UX/UI pour créer des produits utiles, modernes et impactants."
                : "Full-stack developer passionate about crafting premium web and mobile experiences. Experienced with the MERN stack, PHP Laravel, cross-platform mobile development using React Native and Flutter, and thoughtful UX/UI design to build useful, polished and scalable digital products."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-pop rounded-3xl border border-white/8 bg-black/16 p-5">
                <p className="text-sm text-white/50">Email</p>
                <a
                  href="mailto:habiba.elmahfoudi@email.com"
                  className="mt-2 inline-block text-white transition hover:text-emerald-300"
                >
                  habiba.elmahfoudi@email.com
                </a>
              </div>
              <div className="surface-pop rounded-3xl border border-white/8 bg-black/16 p-5">
                <p className="text-sm text-white/50">Localisation</p>
                <p className="mt-2 text-white">Rabat, Maroc</p>
              </div>
            </div>


          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
          style={{ transformStyle: "preserve-3d" }}
          className="glass rounded-[30px] p-7 sm:p-8"
        >
          <div style={{ transform: "translateZ(22px)" }}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">Langues</h3>
              <span className="text-sm text-white/46">
                Communication & adaptabilité
              </span>
            </div>
            <div className="space-y-6">
              {languageLevels.map((language, index) => (
                <div key={language.label}>
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                    <span className="text-white/82">{language.label}</span>
                    <span className="text-emerald-300">{language.level}</span>
                  </div>
                  <div className="progress-track h-2 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.12 }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--green-600),var(--primary),var(--green-400))]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
