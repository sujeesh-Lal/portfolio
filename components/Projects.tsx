"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          03. Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Work</h2>
        <p className="text-gray-500 mt-4 max-w-xl">
          Enterprise-scale projects delivered across insurance, fintech, and innovation sectors.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group card-glass overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
          >
            <div className={`h-1 w-full bg-gradient-to-r ${project.color.replace("/20", "")}`} />
            <div className="p-8">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                {/* Icon */}
                <div
                  className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 flex items-center justify-center text-3xl`}
                >
                  {project.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className={`mt-1 shrink-0 ${project.accentColor}`}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-gray-800/80 border border-gray-700/50 text-gray-400 text-xs font-mono rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-gray-600 text-sm font-mono mt-12"
      >
        * Enterprise projects under NDA — details shared on request
      </motion.p>
    </section>
  );
}
