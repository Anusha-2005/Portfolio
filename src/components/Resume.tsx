"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Resume() {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "K L University",
      duration: "2023 – Present",
      grade: "CGPA: 9.43 / 10",
      details: "Focusing on Software & Application Engineering, Data Structures & Algorithms, Object-Oriented Programming, REST APIs, DBMS, and Machine Learning.",
    },
    {
      degree: "Senior Secondary (Class XII CBSE)",
      institution: "Central Board of Secondary Education",
      duration: "Completed 2023",
      grade: "Percentage: 80.3%",
      details: "Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
    },
  ];

  return (
    <section id="resume" className="py-20 relative bg-[#f8fafc]">
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
            Academic Record
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Education & <span className="text-gradient-primary">Qualifications</span>
          </motion.h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Education cards */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 tracking-wide">
                Education
              </h4>
            </div>

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-900/10 space-y-3 hover:border-indigo-600/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h5 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {edu.degree}
                    </h5>
                    <span className="text-sm font-semibold text-indigo-600 font-mono">
                      {edu.institution}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/5 text-slate-600 text-xs font-mono font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono font-bold">
                  {edu.grade}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Quick Links & Summary Card */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-between items-center text-center border border-slate-900/10 shadow-lg space-y-6">
                <div className="p-4 rounded-full bg-indigo-600/10 border border-indigo-600/20">
                  <Award className="w-10 h-10 text-indigo-600" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900 tracking-wide">
                    PALAPARTHI ANUSHA
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    Software & Application Engineering Intern Candidate
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Proven academic track record with 9.43 CGPA, virtual internship credentials, and hands-on projects built with Python, C++, React, Flask, and Docker.
                </p>

                {/* Actions */}
                <div className="w-full space-y-3 pt-2">
                  <a
                    href="https://github.com/Anusha-2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Explore GitHub Repositories</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
