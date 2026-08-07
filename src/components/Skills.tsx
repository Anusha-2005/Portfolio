"use client";

import { motion } from "framer-motion";
import { Terminal, Globe, BrainCircuit, Database } from "lucide-react";

interface Skill {
  name: string;
  level: string; // e.g. "Advanced", "Intermediate"
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    title: "Web Technologies & Frameworks",
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    skills: [
      { name: "Next.js", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: "Machine Learning", level: "Advanced" },
      { name: "Scikit-learn", level: "Advanced" },
    ],
  },
  {
    title: "Databases & Dev Tools",
    icon: <Database className="w-5 h-5 text-teal-400" />,
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "MySQL", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative bg-[#f8fafc]">
      {/* Decorative Blob */}
      <div className="absolute top-[30%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

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
            My Toolbox
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Skills and <span className="text-gradient-primary">Technologies</span>
          </motion.h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A comprehensive list of core languages, artificial intelligence libraries, full-stack frameworks, and databases that I leverage to build modern solutions.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 rounded-2xl glass-card flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-black/5">
                <div className="p-2 rounded-lg bg-slate-900/5 border border-slate-900/5">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-slate-900 text-base tracking-wide">
                  {category.title}
                </h4>
              </div>

              {/* Skills Items */}
              <div className="space-y-4 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group flex flex-col space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill progress bar styling */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: skill.level === "Advanced" ? "90%" : "70%",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1 + sIdx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
