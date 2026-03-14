import type { ComponentType, JSX } from "react";


export type ProjectCategory = "Web" | "Mobile" | "Jeux" | "Tous";

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  link: string;
  accent: string;
  image: string
  github?: string
  demo?: string
}
export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
};

export type EducationItem = {
  degree: string;
  period: string;
  school: string;
  city: string;
  detail: string;
};

export type ShowcaseCard = {
  title: string;
  subtitle: string;
  badge: string;
  icon: ComponentType<{ className?: string }>;
  meta: string;
  stats: Array<{ value: string; label: string }>;
  tags: string[];
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export type LanguageLevel = {
  label: string;
  level: string;
  value: number;
};

export type StatItem = {
  value: string;
  label: string;
};