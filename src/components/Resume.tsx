"use client";

import { motion } from "framer-motion";
import { Download, FileSpreadsheet, Eye, GraduationCap, Calendar, Award } from "lucide-react";

export default function Resume() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "Technical University / College",
      duration: "2022 - 2026",
      details: "Specializing in Intelligent Systems, Advanced Databases, and Deep Learning. Maintained a top academic record and participated in college tech development circles.",
    },
  ];

  return (
    <section id="resume" className="py-20 relative bg-[#f8fafc]">
      {/* Decorative Blob */}
      <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

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
            Curriculum Vitae
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Education & <span className="text-gradient-primary">Resume</span>
          </motion.h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Education details */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900/5 border border-slate-900/5">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 tracking-wide">
                  Academic Background
                </h4>
              </div>

              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-2xl glass-card space-y-4"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 leading-snug">
                        {edu.degree}
                      </h5>
                      <span className="text-sm text-gray-500 font-mono">
                        {edu.institution}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/5 text-gray-500 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-500/10 space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm font-mono">
                <Award className="w-4 h-4" />
                <span>Honors & Focus Areas</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Coursework includes: Artificial Intelligence, Deep Learning Algorithms, SQL Databases, Data Structures & Algorithms, Dockerizing Apps, and software testing automation.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive 3D Resume Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-sm"
            >
              <motion.div
                whileHover={{ rotateY: 8, rotateX: 6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 rounded-3xl glass-card flex flex-col justify-between items-center text-center relative border border-slate-900/10 shadow-xl overflow-hidden group bg-gradient-to-b from-indigo-50/50 to-transparent"
              >
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="p-4 rounded-full bg-indigo-600/10 border border-indigo-600/20 mb-6">
                  <FileSpreadsheet className="w-12 h-12 text-indigo-600" />
                </div>

                <h4 className="text-xl font-bold text-slate-900 tracking-wide">
                  Anusha Palaparthi CV
                </h4>
                <p className="text-sm text-gray-600 mt-2 mb-8 leading-relaxed max-w-[240px] mx-auto">
                  Detailed resume showcasing technical competencies, research milestones, and project architecture layouts.
                </p>

                {/* Download Actions */}
                <div className="w-full space-y-3 relative z-10">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 text-sm font-semibold border border-slate-900/10 hover:border-slate-900/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Online</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
