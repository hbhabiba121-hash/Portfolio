import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../utils/cn";
import { useMagnetic, useRipple } from "../../hooks";
import type { Skill } from "../../types";

// ─── SectionReveal ───────────────────────────────────────────────────────────
export function SectionReveal({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 42 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── RippleButton ────────────────────────────────────────────────────────────
export function RippleButton({
  children,
  href,
  primary,
  className,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  primary?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const magnetic = useMagnetic();
  const { ripples, handleRipple } = useRipple();

  const sharedClass = cn(
    "group relative inline-flex overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
    primary
      ? "text-slate-950"
      : "border border-white/10 bg-white/5 text-white hover:border-emerald-400/40 hover:bg-white/8",
    className
  );

  const inner = (
    <motion.span
      style={magnetic.style}
      onMouseMove={magnetic.onMouseMove as (e: MouseEvent<HTMLElement>) => void}
      onMouseLeave={magnetic.onMouseLeave}
      onClick={handleRipple as (e: MouseEvent<HTMLElement>) => void}
      className={sharedClass}
    >
      {primary && (
        <span className="absolute inset-0 bg-[linear-gradient(135deg,var(--green-400),var(--primary),var(--green-600))]" />
      )}
      {!primary && (
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-400/10 opacity-0 transition group-hover:opacity-100" />
      )}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/60"
          style={{
            left: ripple.x,
            top: ripple.y,
            animation: "ripple 700ms ease-out forwards",
          }}
        />
      ))}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {inner}
      </a>
    );
  }

  return <button type={type}>{inner}</button>;
}

// ─── SkillBar ────────────────────────────────────────────────────────────────
export function SkillBar({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="text-white/82">{skill.label}</span>
        <span className="text-emerald-300">{skill.value}%</span>
      </div>
      <div className="progress-track h-2 overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.value}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--green-600),var(--primary),var(--green-400))] shadow-[0_0_22px_rgba(16,185,129,0.35)]"
        />
      </div>
    </div>
  );
}