"use client";

import { motion } from "framer-motion";
import { Award, Code2, Trophy, Users, Star, GraduationCap } from "lucide-react";

interface Achievement {
  title: string;
  metric: string;
  subtext: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: "Academic Excellence",
    metric: "9.43 / 10 CGPA",
    subtext: "K L University",
    description: "Maintained a consistently outstanding academic record across computer science and engineering coursework.",
    icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "LeetCode Problem Solver",
    metric: "100+ Solved",
    subtext: "Data Structures & Algorithms",
    description: "Solved 100+ algorithmic problems covering arrays, trees, dynamic programming, stacks, and binary search.",
    icon: <Code2 className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Smart Interviews Program",
    metric: "Selected",
    subtext: "Rigorous Training",
    description: "Selected for the Smart Interviews program focusing on advanced algorithms, data structures, and problem-solving.",
    icon: <Trophy className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "CodeChef Competitor",
    metric: "1-Star Rating",
    subtext: "Competitive Programming",
    description: "Participated in monthly coding contests, building algorithmic agility and optimization skills under timed constraints.",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Hackathon Participant",
    metric: "Collaborator",
    subtext: "Team Sprints",
    description: "Participated in university hackathons, collaborating in fast-paced software development sprints to create functional apps.",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Aparmaya Club Leadership",
    metric: "Core Member",
    subtext: "K L University",
    description: "Organized technical events, club activities, and peer student engagement initiatives across campus.",
    icon: <Award className="w-6 h-6 text-purple-500" />,
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 85, damping: 14 },
    },
  };

  return (
    <section id="achievements" className="py-20 relative bg-[#f8fafc]">
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
            Milestones
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Key <span className="text-gradient-primary">Achievements</span>
          </motion.h3>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Academic distinction, competitive programming accomplishments, and technical leadership milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-between border border-slate-900/10 hover:border-indigo-600/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-3 rounded-xl bg-slate-900/5 border border-slate-900/5 group-hover:bg-indigo-600/10 group-hover:border-indigo-600/20 transition-all duration-300">
                    {ach.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                    {ach.subtext}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl font-extrabold text-slate-900 text-gradient-primary">
                    {ach.metric}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 tracking-wide">
                    {ach.title}
                  </h4>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
