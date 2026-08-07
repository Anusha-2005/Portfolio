"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skillsLearned: string[];
}

const experiences: TimelineItem[] = [
  {
    role: "AI & Machine Learning Intern",
    company: "Google (Virtual Internship)",
    duration: "June 2025 - August 2025",
    description: [
      "Gained hands-on experience with production-level machine learning models, neural network layers, and hyperparameter optimization strategies.",
      "Developed regression and classification models using TensorFlow and PyTorch, analyzing performance using AUC-ROC, F1-Score, and confusion matrices.",
      "Engineered automated data preprocessing pipelines, handling outlier detection, multi-modal feature scaling, and categorical encoding.",
      "Learned best practices for scalable model deployments, distributed training methodologies, and data governance standards.",
    ],
    skillsLearned: ["TensorFlow", "PyTorch", "Model Evaluation", "Feature Engineering", "Neural Networks"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[#f8fafc]">
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
            My Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Professional <span className="text-gradient-primary">Experience</span>
          </motion.h3>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 border-l border-slate-200 space-y-12 py-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative text-left"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] top-1.5 p-1.5 rounded-full bg-indigo-600 border border-white shadow-md">
                <Briefcase className="w-4.5 h-4.5 text-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl glass-card relative">
                {/* Header info */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">
                      {exp.role}
                    </h4>
                    <span className="text-indigo-600 font-mono text-sm">
                      {exp.company}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/5 text-gray-500 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2.5 items-start text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  {exp.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
