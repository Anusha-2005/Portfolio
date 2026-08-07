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
    icon: <Terminal className="w-5 h-5 text-blue-500" />,
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
    ],
  },
  {
    title: "AI/ML & Databases",
    icon: <BrainCircuit className="w-5 h-5 text-purple-500" />,
    skills: [
      { name: "Scikit-learn", level: "Advanced" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
    ],
  },
  {
    title: "Core Concepts",
    icon: <Database className="w-5 h-5 text-teal-500" />,
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "DBMS", level: "Advanced" },
    ],
  },
  {
    title: "Web Technologies & Tools",
    icon: <Globe className="w-5 h-5 text-indigo-500" />,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "HTML & CSS", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
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
              <div className="flex flex-wrap gap-2.5 content-start flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/5 border border-slate-900/5 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 hover:border-indigo-200/50 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
