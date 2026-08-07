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
    role: "ServiceNow University Virtual Intern",
    company: "ServiceNow University",
    duration: "Apr 2026",
    description: [
      "Gained hands-on experience with ServiceNow workflows, Agentic AI, reporting, and system administration.",
      "Worked with the Automated Test Framework and explored enterprise platform administration concepts.",
    ],
    skillsLearned: ["ServiceNow", "Agentic AI", "Automated Testing", "System Administration"],
  },
  {
    role: "Google AI Virtual Intern",
    company: "Google AI (EduSkills)",
    duration: "Apr 2025 - Jun 2025",
    description: [
      "Developed and evaluated machine learning models using Python and Scikit-learn on real-world datasets.",
      "Applied data preprocessing, feature engineering, and model evaluation using supervised learning techniques.",
    ],
    skillsLearned: ["Python", "Scikit-Learn", "Machine Learning", "Feature Engineering"],
    certificateLink: "https://drive.google.com/file/d/1ZT2xn4WU3Z3V1DzxsJTebD44ejzpOgeo/view?usp=sharing",
  },
  {
    role: "Cisco AICTE Virtual Intern",
    company: "Cisco (AICTE)",
    duration: "May 2024 - Jul 2024",
    description: [
      "Completed comprehensive training in networking fundamentals, cybersecurity architectures, and key protocols.",
      "Designed and simulated network topologies, subnets, and custom security rules using Cisco Packet Tracer.",
    ],
    skillsLearned: ["Networking", "Cybersecurity", "Cisco Packet Tracer"],
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

                {/* Key Skills Tags & Certificate */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5">
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-xs font-mono"
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
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3 h-3" />
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
