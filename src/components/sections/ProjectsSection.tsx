import { useEffect, useMemo, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { cn } from "../../utils/cn";
import { SectionReveal } from "../ui";
import { projects, projectCategories } from "../../data";
import type { Project, ProjectCategory } from "../../types";
import ProjectCarousel from "./ProjectCarousel";
import AnimatedLine from "../ui/AnimatedLine"

// ─── ProjectCard ─────────────────────────────────────────────

export function ProjectCard({
  project,
  onProjectSelect,
}: {
  project: Project;
  onProjectSelect: (project: Project) => void;
}) {
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(52,211,153,0.18), transparent 32%)`;

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    spotlightX.set(((event.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <article
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/4 shadow-[0_25px_90px_-45px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
    >
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br blur-3xl opacity-60",
          project.accent
        )}
      />

      <div className="relative z-10 space-y-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="pill border-emerald-400/20 text-emerald-300">
            {project.category}
          </span>

          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-emerald-400/30 hover:text-emerald-300"
            >
              <FiGithub size={14} />
            </a>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-emerald-400/30 hover:text-emerald-300"
            >
              <FiExternalLink size={14} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

          <p className="text-sm text-white/65 leading-7">
            {project.description}
          </p>
        </div>

        <div className="relative h-44 rounded-2xl overflow-hidden border border-white/8 bg-black/30">
          <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
/>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-emerald-500/15 bg-emerald-400/8 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ x: 2 }}
            onClick={() => onProjectSelect(project)}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/80 hover:text-emerald-300"
          >
            Détails →
          </motion.button>
        </div>
      </div>
    </article>
  );
}

// ─── Modal ─────────────────────────────────────────────

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onClose]);

  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-md"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-[#0a0a0e] text-white shadow-2xl"
      >
        <div className="p-8 space-y-5">
          <div className="flex justify-between items-start">
            <h3 className="text-3xl font-semibold">{project.title}</h3>

            <button onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>

          <p className="text-white/70 leading-8">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>("Tous");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return projects;

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <>
      <SectionReveal
        id="projects"
        className="container-shell py-20 sm:py-24"
      >
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
  <div>
    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
      Mes projets récents
    </p>

    <h2 className="section-title">
      Des produits pensés pour l'usage et l'impact
    </h2>
  </div>
</div>

          <div className="flex gap-2 flex-wrap">
            {projectCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  activeFilter === filter
                    ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                    : "border-white/10 text-white/60 hover:text-white"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 && (
          <ProjectCarousel
            projects={filteredProjects}
            onProjectSelect={(p: Project) => setSelectedProject(p)}
          />
        )}
      </SectionReveal>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}