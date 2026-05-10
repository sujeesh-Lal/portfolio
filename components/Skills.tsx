"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  "Backend & Cloud": "☁️",
  "Testing & QA": "🧪",
  "AI & Tooling": "🤖",
};

const categoryColors: Record<string, string> = {
  Frontend: "from-cyan-500 to-blue-600",
  "Backend & Cloud": "from-indigo-500 to-violet-600",
  "Testing & QA": "from-emerald-500 to-teal-600",
  "AI & Tooling": "from-amber-500 to-orange-600",
};

const barColors: Record<string, string> = {
  Frontend: "bg-gradient-to-r from-cyan-500 to-blue-500",
  "Backend & Cloud": "bg-gradient-to-r from-indigo-500 to-violet-500",
  "Testing & QA": "bg-gradient-to-r from-emerald-500 to-teal-500",
  "AI & Tooling": "bg-gradient-to-r from-amber-500 to-orange-500",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="section-padding relative"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #0d1117 0%, #0a0d14 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            02. Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="card-glass p-6 hover:border-gray-700/80 transition-colors"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[category]} flex items-center justify-center text-lg shadow-lg`}
                >
                  {categoryIcons[category]}
                </div>
                <h3 className="text-white font-semibold text-lg">{category}</h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {items.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${barColors[category]}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.15 + skillIdx * 0.07 + 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm font-mono">
            Always learning •{" "}
            <span className="text-cyan-500">AI-assisted development</span> advocate •
            Open to new tech
          </p>
        </motion.div>
      </div>
    </section>
  );
}
