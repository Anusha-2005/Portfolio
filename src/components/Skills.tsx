"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Globe,
  Boxes,
  Database,
  Terminal,
  Brain,
  Cloud,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5 text-blue-600" />,
    skills: ["Python", "C++", "C", "SQL"],
  },
  {
    title: "Software Development",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "REST APIs",
      "Backend Development",
      "Full-Stack Development",
    ],
  },
  {
    title: "Web",
    icon: <Globe className="w-5 h-5 text-teal-600" />,
    skills: ["React", "Node.js", "HTML"],
  },
  {
    title: "Frameworks / Libraries",
    icon: <Boxes className="w-5 h-5 text-purple-600" />,
    skills: ["Flask", "Scikit-learn"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-emerald-600" />,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "DevOps / Tools",
    icon: <Terminal className="w-5 h-5 text-amber-600" />,
    skills: ["Git", "GitHub Actions", "Docker", "VS Code"],
  },
  {
    title: "AI / ML",
    icon: <Brain className="w-5 h-5 text-pink-600" />,
    skills: ["Machine Learning", "Data Preprocessing", "Model Evaluation"],
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-5 h-5 text-sky-600" />,
    skills: ["AWS", "Microsoft Azure"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
            Technical Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Skills & <span className="text-gradient-primary">Technologies</span>
          </motion.h3>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Core languages, engineering concepts, frameworks, databases, and DevOps tools leveraged in building reliable software applications.
          </p>
        </div>

        {/* Skill Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-indigo-600/30 transition-all duration-300 h-full"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-black/5">
                  <div className="p-2 rounded-xl bg-slate-900/5 border border-slate-900/5">
                    {category.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base tracking-wide">
                    {category.title}
                  </h4>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/5 border border-slate-900/5 text-xs font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 hover:border-indigo-200/50 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
