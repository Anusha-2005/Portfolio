"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {

  const codeLines = [
    "import torch",
    "import pandas as pd",
    "from sklearn import datasets",
    "",
    "# Load and prepare dataset",
    "data = pd.read_csv('user_interactions.csv')",
    "features = prep_pipeline(data)",
    "",
    "# Initializing model...",
    "model = TransformerStack(depth=12, heads=8)",
    "optimizer = AdamW(model.parameters(), lr=1e-4)",
    "",
    "# Training initiated:",
    "Epoch 1/5 | Loss: 0.892 | Val Acc: 91.2%",
    "Epoch 2/5 | Loss: 0.431 | Val Acc: 94.8%",
    "Epoch 3/5 | Loss: 0.185 | Val Acc: 97.4%",
    "Epoch 4/5 | Loss: 0.089 | Val Acc: 98.9%",
    "Epoch 5/5 | Loss: 0.042 | Val Acc: 99.2%",
    "Training complete. Exporting weights to production.",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, codeLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, codeLines]);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#f8fafc]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-purple-600/10 blur-[130px] animate-blob [animation-delay:3s] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side Info */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 font-mono"
            >
              Hi there, I am
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              Anusha <span className="text-gradient-primary">Palaparthi</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-medium text-slate-800 font-sans"
            >
              AI Engineer <span className="text-indigo-600">|</span> Data Engineering for AI <span className="text-indigo-600">|</span> Machine Learning Enthusiast
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-xl text-base md:text-lg leading-relaxed"
          >
            I build intelligent systems, optimize data pipelines for machine learning models, and design interactive user interfaces. Passionate about solving complex problems at the intersection of AI, engineering, and data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={(e) => handleScrollTo(e, "projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 font-medium border border-slate-900/10 hover:border-slate-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Get in Touch</span>
            </button>
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
            <div className="px-4 py-3 bg-[#0d0d1b]/80 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/40" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <span className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <TerminalIcon className="w-3 h-3" />
                <span>anusha-palaparthi -- model-train</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Terminal Content */}
            <div className="p-5 font-mono text-xs text-gray-300 min-h-[300px] max-h-[300px] overflow-y-auto space-y-2 select-none text-left bg-black/60">
              {terminalLines.map((line, idx) => {
                if (line.startsWith("#")) {
                  return (
                    <div key={idx} className="text-gray-500 italic">
                      {line}
                    </div>
                  );
                }
                if (line.includes("Epoch")) {
                  return (
                    <div key={idx} className="text-indigo-400">
                      {line}
                    </div>
                  );
                }
                if (line.includes("Training complete")) {
                  return (
                    <div key={idx} className="text-emerald-400 font-bold">
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
