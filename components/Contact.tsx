"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            04. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Open to senior architecture roles, consulting engagements, and interesting collaboration. Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div className="card-glass p-6">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-cyan-500/10 border border-gray-700 group-hover:border-cyan-500/40 flex items-center justify-center transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">Email</p>
                    <p className="text-sm font-medium">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-cyan-500/10 border border-gray-700 group-hover:border-cyan-500/40 flex items-center justify-center transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-0.5">GitHub</p>
                    <p className="text-sm font-medium">sujeesh-Lal</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="card-glass p-6">
              <p className="text-gray-500 text-sm leading-relaxed">
                Based in <span className="text-white">India</span>. Open to remote roles globally and on-site opportunities in APAC & EMEA.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-glass p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  className="w-full bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-700 disabled:text-gray-500 text-[#0d1117] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                {status === "sending" && (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending…"}
                {status === "sent" && "✓ Message Sent!"}
                {status === "error" && "Error — Try Again"}
              </button>

              {status === "sent" && (
                <p className="text-center text-emerald-400 text-sm">
                  Thanks! I&apos;ll get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-400 text-sm">
                  Something went wrong. Email me directly at{" "}
                  <a href={`mailto:${personalInfo.email}`} className="underline">
                    {personalInfo.email}
                  </a>
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
