"use client";

import { motion } from "framer-motion";
import { Code2, Server, GraduationCap, Award } from "lucide-react";

interface QuickStat {
  value: string;
  label: string;
}

const stats: QuickStat[] = [
  { value: "9.43", label: "CGPA (K L University)" },
  { value: "100+", label: "LeetCode Solved" },
  { value: "80.3%", label: "Class XII CBSE" },
  { value: "2023–Present", label: "B.Tech CSE" },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-wider text-indigo-600 uppercase font-mono"
          >
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Software & <span className="text-gradient-primary">Application Engineering</span>
          </motion.h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Side: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-2xl glass-card flex flex-col justify-between text-left space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-600/10 border border-indigo-600/20 text-indigo-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Background & Philosophy</h4>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                I&apos;m a Computer Science undergraduate at K L University with a 9.43 CGPA. My interests span software engineering, backend development, APIs, cloud technologies, and machine learning. I enjoy turning ideas into functional applications and continuously improving my problem-solving and engineering skills.
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 flex flex-wrap gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/5">
                <Server className="w-4 h-4 text-indigo-600" />
                Backend & REST APIs
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                K L University (2023 - Present)
              </span>
            </div>
          </motion.div>

          {/* Right Side: Quick Education & Academic Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 text-left"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-indigo-600/30 transition-all duration-300"
              >
                <div className="p-2 w-fit rounded-lg bg-indigo-600/10 text-indigo-600 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
