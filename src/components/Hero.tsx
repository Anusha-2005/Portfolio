"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon, FileText } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { GithubIcon } from "./Icons";

export default function Hero() {
  const codeLines = useMemo(() => [
    "// Application Engineering Pipeline",
    "// Tech Stack: Python, C++, React, Flask, Docker, GitHub Actions",
    "",
    "$ git clone https://github.com/Anusha-2005/LearnPulse.git",
    "Cloning into 'LearnPulse'...",
    "",
    "$ docker build -t learnpulse-api .",
    "[1/4] STEP 1: FROM python:3.11-slim",
    "[2/4] STEP 2: COPY requirements.txt . && pip install -r requirements.txt",
    "[3/4] STEP 3: COPY . /app",
    "[4/4] STEP 4: EXPOSE 5000",
    "Successfully built image: learnpulse-api:latest",
    "",
    "$ pytest test_api.py -v",
    "test_predict_performance PASSED [ 33% ]",
    "test_data_preprocessing PASSED [ 66% ]",
    "test_recommendations_endpoint PASSED [ 100% ]",
    "",
    "STATUS: REST API running on http://localhost:5000 (Flask)",
    "Ready for frontend integration.",
  ], []);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, codeLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, codeLines]);

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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#f8fafc]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side Info */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-xs font-semibold tracking-wider uppercase font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Seeking Application Engineering Opportunities
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              PALAPARTHI <span className="text-gradient-primary">ANUSHA</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 font-sans"
            >
              Computer Science Student <span className="text-indigo-600">|</span> Software & Application Engineering
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 max-w-xl text-base sm:text-lg leading-relaxed"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://github.com/Anusha-2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 font-medium border border-slate-900/10 hover:border-slate-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <GithubIcon className="w-4 h-4 text-slate-800" />
              <span>GitHub</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1yKFExq7ilw1f_eAqMIipAh30v6Du2Cfo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium border border-indigo-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Terminal Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-lg rounded-2xl glass-card overflow-hidden shadow-2xl relative">
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-[#0d0d1b]/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>anusha@dev: ~/workspace</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Terminal Content */}
            <div className="p-5 font-mono text-xs text-gray-300 min-h-[310px] max-h-[310px] overflow-y-auto space-y-1.5 select-none text-left bg-slate-950/90">
              {terminalLines.map((line, idx) => {
                if (line.startsWith("//")) {
                  return (
                    <div key={idx} className="text-gray-500 italic">
                      {line}
                    </div>
                  );
                }
                if (line.startsWith("$")) {
                  return (
                    <div key={idx} className="text-emerald-400 font-semibold">
                      {line}
                    </div>
                  );
                }
                if (line.includes("PASSED")) {
                  return (
                    <div key={idx} className="text-indigo-400">
                      {line}
                    </div>
                  );
                }
                if (line.includes("STATUS:")) {
                  return (
                    <div key={idx} className="text-amber-400 font-bold">
                      {line}
                    </div>
                  );
                }
                return <div key={idx}>{line}</div>;
              })}
              {currentLineIndex < codeLines.length && (
                <span className="inline-block w-1.5 h-4 bg-indigo-400 animate-pulse" />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
