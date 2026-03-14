import {
  FiCode,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiSmartphone,
} from "react-icons/fi";
import type {
  EducationItem,
  ExperienceItem,
  LanguageLevel,
  NavItem,
  Project,
  ShowcaseCard,
  SocialLink,
} from "../types";
import "./i18n";
export const navItems: NavItem[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Expérience", href: "#experience" },
  { label: "Éducation", href: "#education" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const typePhrases = [
  "Développeuse Full-Stack",
  "Mobile Cross-Platform",
  "UX/UI Enthusiast",
];

export const showcaseCards: ShowcaseCard[] = [
  {
    title: "Immersive Web Systems",
    subtitle: "Interfaces premium, motion design et architecture front moderne.",
    badge: "Slide to rotate",
    icon: FiGlobe,
    meta: "React • Motion • UX polish",
    stats: [
      { value: "90%", label: "React.js" },
      { value: "95%", label: "HTML/CSS" },
      { value: "A+", label: "UI feel" },
    ],
    tags: ["Parallax", "Micro-interactions", "Glass depth"],
  },
  {
    title: "Full-Stack Product Build",
    subtitle:
      "Conception de produits MERN & Laravel orientés usage, clarté et performance.",
    badge: "Depth layers",
    icon: FiLayers,
    meta: "MERN • Laravel • APIs",
    stats: [
      { value: "85%", label: "Node/Express" },
      { value: "80%", label: "Laravel" },
      { value: "2", label: "Stages" },
    ],
    tags: ["Dashboards", "Workflows", "Scalable UX"],
  },
  {
    title: "Cross-Platform Mobile",
    subtitle:
      "Applications mobiles fluides avec attention au détail visuel et à l'expérience utilisateur.",
    badge: "Hover to pop-out",
    icon: FiSmartphone,
    meta: "React Native • Flutter",
    stats: [
      { value: "85%", label: "React Native" },
      { value: "80%", label: "Flutter" },
      { value: "3", label: "Apps ideas" },
    ],
    tags: ["Maps", "Discovery", "Smooth flows"],
  },
];
export const projects: Project[] = [
  {
    title: "Nballgou",
    description:
      "Plateforme citoyenne permettant aux habitants de Rabat de signaler les problèmes urbains et suivre leur résolution.",
    category: "Web",
    tech: ["React", "Next.js", "Node.js", "Mapbox", "Tailwind"],
    link: "https://nbellghou.vercel.app",
    accent: "from-emerald-400/25 via-emerald-500/12 to-transparent",
    image: "/public/projects/nballgou.png",
    github: "https://github.com/hbhabiba121-hash/Nbellghou",
    demo: "https://nbellghou.vercel.app",
  },

  {
    title: "HayVision",
    description:
      "Plateforme d’analyse immobilière pour explorer les quartiers de Rabat et visualiser les tendances du marché.",
    category: "Web",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    link: "https://hayvision.vercel.app",
    accent: "from-green-400/25 via-emerald-500/12 to-transparent",
    image: "/public/projects/hayvision.png",
    github: "https://github.com/hbhabiba121-hash/HayVision",
    demo: "https://hayvision.vercel.app",
  },

  {
    title: "Arkanna",
    description:
      "Plateforme e-commerce pour une coopérative marocaine produisant des cosmétiques naturels à base d’argan.",
    category: "Web",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://arkanna-six.vercel.app",
    accent: "from-amber-400/25 via-orange-400/12 to-transparent",
    image: "/public/projects/arkanna.png",
    github: "https://github.com/hbhabiba121-hash/Arkanna-Cooperative",
    demo: "https://arkanna-six.vercel.app",
  },
 {
    title: "Rabat Sale Guide",
    description:
      "Application mobile touristique pour découvrir Rabat et Salé : lieux culturels, restaurants, monuments et itinéraires recommandés.",
    category: "Mobile",
    tech: ["Flutter", "Dart", "Google Maps API"],
    link: "",
    accent: "from-blue-400/25 via-cyan-400/12 to-transparent",
    image: "/public/projects/rabatsaleguide.png",
    github: "https://github.com/hbhabiba121-hash/Rabat-Sale-Guide-App",
    demo: "",
  },
  
 {
    title: "Codex of Chemistry",
    description:
      "Jeu éducatif développé avec Godot permettant d’apprendre la chimie à travers des expériences interactives et des défis scientifiques.",
    category: "Jeux",
    tech: ["Godot", "GDScript", "Game Design"],
    link: "",
    accent: "from-yellow-400/25 via-orange-400/12 to-transparent",
    image: "/projects/codexchemistry.png",
    github: "https://gitlab.com/AyaJamil05/mygame",
    demo: "",
  },
  {
    title: "AI Nexus",
    description:
      "Plateforme d’exploration d’outils d’intelligence artificielle permettant de découvrir, comparer et tester les meilleures solutions IA.",
    category: "Web",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    link: "",
    accent: "from-purple-400/25 via-indigo-400/12 to-transparent",
    image: "/projects/ainexus.png",
    github: "https://github.com/hbhabiba121-hash/AiNexus",
    demo: "",
  },

  {
    title: "RabatBites",
    description:
      "Application mobile Flutter pour découvrir des restaurants à Rabat et commander des plats facilement.",
    category: "Mobile",
    tech: ["Flutter", "Dart", "Material UI"],
    link: "https://github.com/hbhabiba121-hash/RabatBites",
    accent: "from-red-400/25 via-orange-400/12 to-transparent",
    image: "/projects/rabatbites.png",
    github: "https://github.com/hbhabiba121-hash/RabatBites",
    demo: "",
  },
 
];
export const experiences: ExperienceItem[] = [
  {
    company: "4D Business Consulting",
    role: "Stage PFA",
    location: "Rabat",
    period: "Avril 2025 — Juin 2025",
    highlights: [
      "Contribution au développement de modules du système hospitalier iClinika.",
      "Participation active aux réunions d'équipe et au suivi des tâches.",
      "Collaboration sur des interfaces et traitements métiers à impact réel.",
    ],
    tech: ["HTML5", "CSS3", "PHP", "Bootstrap", "MySQL"],
  },
  {
    company: "Devox Sarl AU",
    role: "Stage d'initiation",
    location: "Témara",
    period: "Juillet 2024 — Août 2024",
    highlights: [
      "Développement d'une application web e-commerce orientée expérience utilisateur.",
      "Implémentation de la gestion produits, du panier et du paiement Stripe.",
      "Renforcement des compétences full-stack en environnement professionnel.",
    ],
    tech: ["HTML5", "CSS3", "PHP", "JavaScript", "MySQL"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor en Technologie – Ingénierie des Applications Web et Mobile",
    period: "2025 — 2026",
    school: "École Supérieure de Technologie de Salé",
    city: "Salé",
    detail: "Approfondissement du développement web, mobile et des architectures modernes.",
  },
  {
    degree: "DUT en Génie Informatique",
    period: "2023 — 2025",
    school: "École Supérieure de Technologie de Salé",
    city: "Salé",
    detail: "Base solide en algorithmique, génie logiciel, bases de données et conception.",
  },
  {
    degree: "Baccalauréat en Sciences Physiques-Chimies",
    period: "2021 — 2022",
    school: "Lycée Abidar Alghifari",
    city: "Rabat",
    detail: "Formation scientifique ayant renforcé la rigueur analytique et la curiosité technique.",
  },
];

export const languageLevels: LanguageLevel[] = [
  { label: "Français", level: "Professionnel", value: 95 },
  { label: "Arabe", level: "Natif", value: 100 },
  { label: "Anglais", level: "Professionnel", value: 85 },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/hbhabiba121-hash", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/habiba-el-mahfoudi/", icon: FiLinkedin },
];

export const heroStats = [
  { value: "5+", label: "Projets clés" },
  { value: "2", label: "Expériences pro" },
  { value: "3", label: "Langues maîtrisées" },
];


export const projectCategories = ["Tous", "Web", "Mobile", "Jeux"] as const;

export const FiCodeIcon = FiCode;