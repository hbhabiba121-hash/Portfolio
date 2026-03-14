import { useRef, type ReactNode } from "react";
import { motion, useInView, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";
import { useTiltMotion } from "../../hooks";

// ─── ScrollReveal ────────────────────────────────────────────────────────────

export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── PageTransition ──────────────────────────────────────────────────────────

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(14px)", y: 30 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── InteractivePanel ────────────────────────────────────────────────────────

export function InteractivePanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const tilt = useTiltMotion(11);
  const glowBackground = useTransform(
    [tilt.glowX, tilt.glowY, tilt.pointerGlow],
    (values) => {
      const [x, y, alpha] = values as [number, number, number];
      return `radial-gradient(circle at ${x}% ${y}%, rgba(110, 231, 183, ${0.22 * alpha}), transparent 38%)`;
    }
  );

  return (
    <motion.div
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={cn("group relative [perspective:1600px]", className)}
    >
      <motion.div
        aria-hidden
        style={{ background: glowBackground, opacity: tilt.pointerGlow }}
        className="pointer-events-none absolute -inset-3 rounded-[2.75rem] blur-2xl"
      />
      <div className="relative [transform:translateZ(42px)]">{children}</div>
      <motion.div
        aria-hidden
        style={{ x: useTransform(tilt.rotateY, [-8, 8], [-18, 18]) }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(115deg,transparent_18%,rgba(255,255,255,0.14)_45%,transparent_72%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.div>
  );
}

// ─── SectionHeading ──────────────────────────────────────────────────────────

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <div className="text-[10px] font-semibold uppercase tracking-[0.5em] text-slate-400 dark:text-slate-500">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}