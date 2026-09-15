"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#f8fafc]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-xs font-semibold tracking-wider uppercase font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Seeking Application Engineering Opportunities
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            PALAPARTHI <span className="text-gradient-primary">ANUSHA</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 font-sans"
          >
            Computer Science Student <span className="text-indigo-600">|</span> Software & Application Engineering
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-600 max-w-3xl text-lg sm:text-xl leading-relaxed"
        >
          I build applications, APIs, and automation workflows using Python, C++, React, Flask, Docker, and GitHub Actions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <button
            onClick={(e) => handleScrollTo(e, "projects")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://github.com/Anusha-2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 font-medium border border-slate-900/10 hover:border-slate-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-slate-800" />
            <span>GitHub</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1yKFExq7ilw1f_eAqMIipAh30v6Du2Cfo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium border border-indigo-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
