"use client";

import { motion } from "framer-motion";
import { Award, Code2, Trophy, Users, Star, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface Achievement {
  title: string;
  metric: string;
  subtext: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: "LeetCode Solver",
    metric: "100+ Solved",
    subtext: "Data Structures & Algorithms",
    description: "Successfully solved over 100 coding challenges on LeetCode covering stacks, trees, dynamic programming, and binary search.",
    icon: <Code2 className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "CodeChef Competitor",
    metric: "1 Star coder",
    subtext: "Competitive Programming",
    description: "Participated in monthly coding contests, practicing high-speed algorithmic thinking, complexity optimization, and debugging.",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Smart Interviews",
    metric: "Top 300",
    subtext: "Ranked among participants",
    description: "Ranked in the top tier of competitive coding sprints during the comprehensive Smart Interviews academy training.",
    icon: <Trophy className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Collaborative Sprints",
    metric: "Hackathons",
    subtext: "Rapid Prototype Builder",
    description: "Collaborated in multi-disciplinary developer groups to brainstorm, design, and prototype AI tools in 36-hour sprint contests.",
    icon: <Users className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Scholastic Community",
    metric: "Academic Member",
    subtext: "Tech Community Contributor",
    description: "Engaged in scholastic research circles, presenting technical papers and conducting workshops on machine learning foundations.",
    icon: <Award className="w-6 h-6 text-purple-400" />,
  },
];

export default function Achievements() {
  const triggerConfetti = () => {
    // Custom blue and purple palette confetti
    const end = Date.now() + 0.8 * 1000;
    const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

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
      {/* Decorative Blob */}
      <div className="absolute bottom-[10%] left-[10%] w-[25vw] h-[25vw] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

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
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Algorithmic milestones and community engagements. Click the celebration trigger below to celebrate these accomplishments!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-600 border border-indigo-600/30 text-xs font-mono transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Trigger Celebration</span>
          </motion.button>
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
              onClick={triggerConfetti}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between cursor-pointer select-none group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2.5 rounded-xl bg-slate-900/5 border border-slate-900/5 group-hover:bg-indigo-600/10 group-hover:border-indigo-600/20 transition-all duration-300">
                    {ach.icon}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-indigo-400 transition-colors uppercase tracking-wider">
                    {ach.subtext}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl font-extrabold text-white text-gradient-primary">
                    {ach.metric}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 tracking-wide">
                    {ach.title}
                  </h4>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed pt-2">
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
