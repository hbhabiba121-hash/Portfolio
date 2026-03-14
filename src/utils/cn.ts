import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCircularOffset(index: number, active: number, total: number) {
  const raw = (index - active + total) % total;
  return raw > total / 2 ? raw - total : raw;
}
