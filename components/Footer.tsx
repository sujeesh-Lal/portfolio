"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/60 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm font-mono">
          © {new Date().getFullYear()} Sujeesh Lal — Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-600 hover:text-cyan-400 transition-colors text-sm"
          >
            Email
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-400 transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
