"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, experience, certifications } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0}
        className="mb-16"
      >
        <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
          01. About
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Who I Am</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Bio + stats */}
        <div>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
            className="text-gray-400 text-lg leading-relaxed mb-8"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            {[
              { value: "17+", label: "Years Experience" },
              { value: "3", label: "Major Employers" },
              { value: "3", label: "Certifications" },
            ].map(({ value, label }) => (
              <div key={label} className="card-glass p-4 text-center">
                <p className="text-3xl font-bold text-gradient mb-1">{value}</p>
                <p className="text-gray-500 text-xs font-medium">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={3}
          >
            <h3 className="text-white font-semibold mb-4">Certifications</h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className={`card-glass border ${cert.color} px-4 py-3 flex items-center gap-4`}
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{cert.name}</p>
                    <p className="text-gray-500 text-xs">{cert.full}</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-600 font-mono">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div>
          <motion.h3
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
            className="text-white font-semibold mb-8"
          >
            Career Timeline
          </motion.h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-gray-700 to-transparent" />

            <div className="flex flex-col gap-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUp}
                  custom={i + 2}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-[9px] top-1.5 w-[14px] h-[14px] rounded-full border-2 ${
                      i === 0
                        ? "border-cyan-400 bg-cyan-400/20"
                        : "border-gray-600 bg-gray-800"
                    }`}
                  />

                  <div className="card-glass p-5 hover:border-gray-700 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="text-white font-semibold">{exp.role}</p>
                        <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-gray-500 font-mono whitespace-nowrap shrink-0 mt-1">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs font-mono rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
