import { useEffect, useState, type MouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";

// ─── Typewriter hook ────────────────────────────────────────────────────────
export function useTypewriter(words: string[], speed = 85, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index] ?? "";
    const timeout = window.setTimeout(
      () => {
        if (!deleting && subIndex === currentWord.length) {
          setDeleting(true);
          return;
        }
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : subIndex === currentWord.length ? pause : speed
    );
    return () => window.clearTimeout(timeout);
  }, [deleting, index, pause, speed, subIndex, words]);

  return `${words[index]?.slice(0, subIndex) ?? ""}`;
}

// ─── Magnetic hover hook ────────────────────────────────────────────────────
export function useMagnetic(strength = 28) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set((offsetX / rect.width) * strength);
    y.set((offsetY / rect.height) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { style: { x: springX, y: springY }, onMouseMove, onMouseLeave };
}

// ─── Ripple effect hook ─────────────────────────────────────────────────────
export function useRipple() {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleRipple = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { x, y, id }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);
  };

  return { ripples, handleRipple };
}

// ─── Tilt motion hook (3D card tilt on mouse move) ──────────────────────────
export function useTiltMotion(intensity = 16) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 140, damping: 14, mass: 0.4 });
  const springY = useSpring(rotateY, { stiffness: 140, damping: 14, mass: 0.4 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percentX = (event.clientX - rect.left) / rect.width;
    const percentY = (event.clientY - rect.top) / rect.height;
    rotateY.set((percentX - 0.5) * intensity);
    rotateX.set((0.5 - percentY) * intensity);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    style: { rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" as const },
    onMouseMove,
    onMouseLeave,
  };
}