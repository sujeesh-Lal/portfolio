"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const floatingOrbs = [
  { cx: "10%", cy: "20%", r: 300, color: "#06b6d4", delay: 0 },
  { cx: "85%", cy: "60%", r: 250, color: "#6366f1", delay: 2 },
  { cx: "50%", cy: "80%", r: 200, color: "#0891b2", delay: 4 },
];

const techStack = ["React", "Next.js", "Angular", "TypeScript", "Azure", "Node.js"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-[100px] opacity-[0.15]"
            style={{
              left: orb.cx,
              top: orb.cy,
              width: orb.r * 2,
              height: orb.r * 2,
              background: orb.color,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(to right, #06b6d4 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-white mb-2">{personalInfo.name}</span>
          <span className="block text-gradient text-4xl md:text-5xl lg:text-6xl font-semibold">
            {personalInfo.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.07 }}
              className="px-3 py-1 bg-gray-800/80 border border-gray-700/60 text-gray-400 text-xs font-mono rounded-md hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View Projects
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-700 hover:border-cyan-500/60 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href="/Sujeesh-Lal-Resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-700 hover:border-cyan-500/60 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
          >
            <svg
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
