import { motion } from "framer-motion";
import { SectionReveal } from "../ui";
import { experiences } from "../../data";
import { FiMapPin, FiCalendar } from "react-icons/fi";

export function ExperienceSection() {
  return (
    <SectionReveal id="experience" className="container-shell py-24">

      {/* Header */}
      <div className="mb-20 text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
          Expérience
        </p>

        <h2 className="section-title mt-4">
          Parcours professionnel
        </h2>

        <p className="section-copy mt-4">
          Une progression construite autour du développement web moderne et de la création d'expériences numériques.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Center trunk */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent" />

        <div className="space-y-24">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-[1fr_auto_1fr] items-center group relative"
              >

                {/* LEFT SIDE */}
                <div className="flex justify-end pr-10 relative">
                  {isLeft && (
                    <div className="group relative text-right cursor-pointer">
                      {/* Branch line */}
                      <div className="absolute right-[-2rem] top-1/2 h-px w-8 -translate-y-1/2 bg-emerald-400/40 group-hover:w-20 transition-all duration-300" />

                      {/* Company name */}
                      <h3 className="text-white font-semibold">{item.role}</h3>
                      <p className="text-emerald-300 text-sm mt-1">{item.company}</p>

                      {/* Hover card */}
                      <div className="
                        absolute right-full mr-6 top-1/2
                        -translate-y-1/2
                        w-96
                        min-h-[8rem]
                        opacity-0
                        scale-95
                        group-hover:opacity-100
                        group-hover:scale-100
                        pointer-events-none
                        transition-all duration-300
                      ">
                        <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-lg p-6 shadow-xl flex flex-col justify-between">
                          <div>
                            <h4 className="text-white font-semibold">{item.role} - {item.company}</h4>
                            <div className="flex gap-4 text-xs text-white/40 mt-2">
                              <span className="flex items-center gap-1"><FiMapPin size={12}/> {item.location}</span>
                              <span className="flex items-center gap-1"><FiCalendar size={12}/> {item.period}</span>
                            </div>
                          </div>

                          <ul className="mt-4 space-y-1 text-sm text-white/65">
                            {item.highlights.map((h) => (
                              <li key={h}>• {h}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CENTER NODE */}
                <div className="flex justify-center">
                  <div className="
                    h-4 w-4 rounded-full
                    bg-emerald-400
                    shadow-[0_0_14px_rgba(52,211,153,0.9)]
                    group-hover:scale-110
                    transition
                    cursor-pointer
                  " />
                </div>

                {/* RIGHT SIDE */}
                <div className="flex justify-start pl-10 relative">
                  {!isLeft && (
                    <div className="group relative cursor-pointer">
                      {/* Branch line */}
                      <div className="absolute left-[-2rem] top-1/2 h-px w-8 -translate-y-1/2 bg-emerald-400/40 group-hover:w-20 transition-all duration-300" />

                      {/* Company name */}
                      <h3 className="text-white font-semibold">{item.role}</h3>
                      <p className="text-emerald-300 text-sm mt-1">{item.company}</p>

                      {/* Hover card */}
                      <div className="
                        absolute left-full ml-6 top-1/2
                        -translate-y-1/2
                        w-96
                        min-h-[8rem]
                        opacity-0
                        scale-95
                        group-hover:opacity-100
                        group-hover:scale-100
                        pointer-events-none
                        transition-all duration-300
                      ">
                        <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-lg p-6 shadow-xl flex flex-col justify-between">
                          <div>
                            <h4 className="text-white font-semibold">{item.role} - {item.company}</h4>
                            <div className="flex gap-4 text-xs text-white/40 mt-2">
                              <span className="flex items-center gap-1"><FiMapPin size={12}/> {item.location}</span>
                              <span className="flex items-center gap-1"><FiCalendar size={12}/> {item.period}</span>
                            </div>
                          </div>

                          <ul className="mt-4 space-y-1 text-sm text-white/65">
                            {item.highlights.map((h) => (
                              <li key={h}>• {h}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionReveal>
  );
}