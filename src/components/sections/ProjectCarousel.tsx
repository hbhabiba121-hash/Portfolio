import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import type { Project } from "../../types"

interface Props {
  projects: Project[]
  onProjectSelect: (project: Project) => void
}

export default function ProjectCarousel({ projects, onProjectSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let frame: number

    const autoScroll = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.7

        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0
        }
      }

      frame = requestAnimationFrame(autoScroll)
    }

    frame = requestAnimationFrame(autoScroll)

    return () => cancelAnimationFrame(frame)
  }, [])

  const handleMouseEnter = () => {
    pausedRef.current = true
  }

  const handleMouseLeave = () => {
    pausedRef.current = false
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-auto pb-6 scrollbar-hide"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-8 w-max px-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="w-[420px] shrink-0 rounded-2xl border border-white/10 bg-[#0f1115] overflow-hidden shadow-xl hover:border-emerald-400/30 transition"
          >
            <div className="relative h-[220px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {project.demo && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Live
                </div>
              )}
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}

                {project.tech.length > 3 && (
                  <span className="px-3 py-1 text-xs rounded-md bg-white/5 text-white/50">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <button
                  onClick={() => onProjectSelect(project)}
                  className="text-emerald-400 text-sm font-medium hover:underline"
                >
                  View Details →
                </button>

                <div className="flex gap-4 text-white/60 text-lg">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition"
                    >
                      <FiGithub />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}