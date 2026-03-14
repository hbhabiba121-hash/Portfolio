import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin, FiMoon, FiSend } from "react-icons/fi";
import { RippleButton } from "../ui";
import { useTypewriter } from "../../hooks";
import { typePhrases, heroStats } from "../../data";

export function HeroSection() {
  const typedText = useTypewriter(typePhrases);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 180]);
  const orbY = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-emerald-400/16 blur-[100px]"
      />
      <motion.div
        style={{ y: heroY }}
        className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-green-400/10 blur-[120px]"
      />

      <div className="container-shell relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-16 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill border-emerald-400/25 text-emerald-300">
              <FiMapPin /> Rabat, Maroc
            </span>

          </div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="text-sm uppercase tracking-[0.35em] text-white/45"
            >
              Développeuse Web & Mobile Cross-Platform
            </motion.p>
            <h1 className="max-w-full text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl whitespace-nowrap">
  Habiba <span className="text-gradient inline-block">El Mahfoudi</span>
</h1>
            <div className="min-h-[52px] text-2xl font-medium text-white/88 sm:text-3xl">
              <span>{typedText}</span>
              <span className="ml-1 inline-block h-7 w-[2px] translate-y-1 animate-pulse bg-emerald-300" />
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Développeuse full-stack passionnée par la création d'applications web et
              mobiles premium, alliant performance, esthétique, UX/UI soignée et
              interactions immersives inspirées des expériences digitales les plus
              primées.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <RippleButton
              primary
              href="#projects"
              className="shadow-[0_12px_40px_rgba(16,185,129,0.25)]"
            >
              Voir mes projets <FiArrowRight />
            </RippleButton>
            <RippleButton href="#contact">
              Me contacter <FiSend />
            </RippleButton>
              <RippleButton
                href="/public/CV - Habiba El Mahfoudi.pdf"
                className="border-white/12 bg-white/4 text-white"
              >Télécharger CV <FiDownload />
              </RippleButton>
          </div>

         
        </motion.div>

    
      </div>
    </section>
  );
}
