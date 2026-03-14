import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../utils/cn";
import { getCircularOffset } from "../../utils/cn";
import { showcaseCards } from "../../data";

export function ImmersiveShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseCards.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const goTo = (nextIndex: number) =>
    setActive((nextIndex + showcaseCards.length) % showcaseCards.length);
  const shift = (direction: number) =>
    setActive(
      (prev) => (prev + direction + showcaseCards.length) % showcaseCards.length
    );

  return (
    <div className="glass aurora-panel relative overflow-hidden rounded-[34px] p-5 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.26),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.14),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_34%)]" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/50">Immersive showcase</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">3D Motion Lab</h2>
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-300 glow-ring">
          Inspired by AWARDS motion systems
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/55">
        <span className="pill border-white/8 bg-white/5 px-3 py-1 text-[11px]">
          Glissez horizontalement
        </span>
        <span className="pill border-white/8 bg-white/5 px-3 py-1 text-[11px]">
          Les cartes pivotent en profondeur
        </span>
        <span className="pill border-white/8 bg-white/5 px-3 py-1 text-[11px]">
          Les éléments ressortent au hover
        </span>
      </div>

      <div
        className="perspective-strong mt-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="preserve-3d relative h-[420px]">
          {showcaseCards.map((card, index) => {
            const offset = getCircularOffset(index, active, showcaseCards.length);
            const isActive = offset === 0;
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) shift(1);
                  if (info.offset.x > 70) shift(-1);
                }}
                onClick={() => goTo(index)}
                animate={
                  reducedMotion
                    ? {
                        opacity: isActive ? 1 : 0.55,
                        x: offset * 48,
                        y: Math.abs(offset) * 6,
                        scale: isActive ? 1 : 0.95,
                      }
                    : {
                        x: offset * 132,
                        y: Math.abs(offset) * 26,
                        rotateY: offset * -44,
                        rotateX: isActive ? 0 : 8,
                        rotateZ: offset * 7,
                        scale: isActive ? 1 : 0.82,
                        opacity: isActive ? 1 : 0.52,
                      }
                }
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  zIndex: 30 - Math.abs(offset),
                  transformStyle: "preserve-3d",
                }}
                className="depth-card absolute inset-0 mx-auto h-full w-full max-w-[360px] cursor-grab active:cursor-grabbing"
              >
                <div className="glass specular relative h-full overflow-hidden rounded-[32px] border border-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-90 blur-2xl",
                      isActive
                        ? "from-emerald-400/26 via-emerald-500/16 to-transparent"
                        : "from-white/4 via-transparent to-transparent"
                    )}
                  />
                  <div className="hologrid absolute inset-0 opacity-45" />
                  <div className="absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="preserve-3d relative z-10 flex h-full flex-col">
                    <div
                      style={{ transform: "translateZ(30px)" }}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-2xl text-emerald-300 glow-ring">
                        <Icon />
                      </div>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                        {card.badge}
                      </span>
                    </div>

                    <div
                      style={{ transform: "translateZ(46px)" }}
                      className="mt-7 space-y-3"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {card.meta}
                      </p>
                      <h3 className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em] text-white">
                        {card.title}
                      </h3>
                      <p className="max-w-sm text-sm leading-7 text-white/68">
                        {card.subtitle}
                      </p>
                    </div>

                    <div
                      style={{ transform: "translateZ(54px)" }}
                      className="mt-7 grid grid-cols-3 gap-3"
                    >
                      {card.stats.map((item, statIndex) => (
                        <motion.div
                          key={item.label}
                          animate={isActive ? { y: [0, -4, 0] } : { y: 0 }}
                          transition={{
                            duration: 2.8,
                            repeat: isActive && !reducedMotion ? Infinity : 0,
                            delay: statIndex * 0.18,
                          }}
                          className="surface-pop rounded-2xl border border-white/10 bg-black/22 p-3 backdrop-blur-md"
                        >
                          <p className="text-lg font-semibold text-emerald-300">
                            {item.value}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                            {item.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div
                      style={{ transform: "translateZ(62px)" }}
                      className="mt-auto flex flex-wrap gap-2 pt-7"
                    >
                      {card.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          animate={isActive ? { y: [-1, -7 - tagIndex, -1] } : { y: 0 }}
                          transition={{
                            duration: 3.2,
                            repeat: isActive && !reducedMotion ? Infinity : 0,
                            delay: tagIndex * 0.1,
                          }}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/74 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {showcaseCards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Afficher ${card.title}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                active === index
                  ? "w-10 bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.5)]"
                  : "w-2.5 bg-white/22 hover:bg-white/40"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => shift(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-emerald-400/30 hover:text-emerald-300"
            aria-label="Carte précédente"
          >
            <FiArrowRight className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => shift(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-emerald-400/30 hover:text-emerald-300"
            aria-label="Carte suivante"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
