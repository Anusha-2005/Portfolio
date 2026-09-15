"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skillsLearned: string[];
  certificateLink?: string;
}

const experiences: TimelineItem[] = [
  {
    role: "Machine Learning Intern",
    company: "Google AI Virtual Internship (via Eduskills)",
    duration: "Apr – Jun 2025",
    description: [
      "Developed machine learning models using Python and Scikit-learn for supervised learning tasks.",
      "Performed data preprocessing and model evaluation on practical datasets.",
    ],
    skillsLearned: ["Python", "Scikit-learn", "Machine Learning", "Data Preprocessing", "Model Evaluation"],
    certificateLink: "https://drive.google.com/file/d/1ZT2xn4WU3Z3V1DzxsJTebD44ejzpOgeo/view?usp=sharing",
  },
  {
    role: "Networking & Cybersecurity Intern",
    company: "Cisco AICTE Virtual Internship",
    duration: "May – Jul 2024",
    description: [
      "Completed hands-on training in networking fundamentals and cybersecurity using Cisco Packet Tracer and Cisco Networking Academy tools.",
    ],
    skillsLearned: ["Networking Fundamentals", "Cybersecurity", "Cisco Packet Tracer", "Network Security"],
  },
  {
    role: "ServiceNow Platform Intern",
    company: "ServiceNow University Virtual Internship",
    duration: "Apr 2026",
    description: [
      "Completed training in ServiceNow fundamentals, workflows, reporting, Agentic AI, and platform administration.",
      "Gained hands-on exposure to Automated Test Framework and workflow automation concepts.",
    ],
    skillsLearned: ["ServiceNow Platform", "Workflows", "Reporting", "Agentic AI", "Automated Test Framework"],
    certificateLink: "https://drive.google.com/file/d/1gXhkq2cneVs8YmVO4P_7dQt1D_mHdcwb/view?usp=sharing",
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
            Virtual Internships
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Practical <span className="text-gradient-primary">Experience</span>
          </motion.h3>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 border-l-2 border-indigo-200 space-y-12 py-4">
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
              <div className="absolute -left-[35px] top-1.5 p-1.5 rounded-full bg-indigo-600 ring-4 ring-white shadow-md">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card relative border border-slate-900/10 hover:border-indigo-600/30 transition-all duration-300">
                {/* Header info */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">
                      {exp.role}
                    </h4>
                    <span className="text-indigo-600 font-mono text-sm font-semibold">
                      {exp.company}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/5 text-slate-600 text-xs font-mono font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2.5 items-start text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Skills Tags & Certificate */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5">
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
