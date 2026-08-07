"use client";

import { motion } from "framer-motion";
import { Brain, Database, Code, Server } from "lucide-react";

interface BioCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const bioCards: BioCard[] = [
  {
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    title: "Machine Learning & AI",
    description: "Developing intelligent predictive models, fine-tuning neural architectures, and deploying models using frameworks like Scikit-learn, PyTorch, and TensorFlow.",
  },
  {
    icon: <Database className="w-6 h-6 text-purple-400" />,
    title: "Data Engineering for AI",
    description: "Building robust, scalable pipelines to ingest, clean, and process multi-modal datasets for training and real-time model inference.",
  },
  {
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    title: "Full-Stack AI Apps",
    description: "Creating highly responsive user interfaces and robust APIs to expose AI functionalities using Next.js, Node.js, and React.",
  },
  {
    icon: <Server className="w-6 h-6 text-teal-400" />,
    title: "CI/CD & MLOps",
    description: "Automating testing, containerizing services via Docker, and orchestrating deployment pipelines to ensure high model uptime and reliability.",
  },
];

const stats = [
  { value: "100+", label: "LeetCode Solved" },
  { value: "4+", label: "Key Projects" },
  { value: "4+", label: "Certifications" },
  { value: "1", label: "Virtual Internship" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="py-20 relative bg-[#f8fafc]">
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
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Pioneering the intersection of <span className="text-gradient-primary">Data and Intelligence</span>
          </motion.h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-left"
            >
              <p>
                Hello! I am Anusha Palaparthi, an AI Engineer dedicated to creating systems that merge analytical computational models with robust data flows. My passion lies in engineering end-to-end pipelines that feed predictive models, ensuring that data ingestion, extraction, and transformations operate seamlessly.
              </p>
              <p>
                Whether it is building custom machine learning systems, deploying microservices with Docker, or constructing rich front-ends using modern frameworks, I strive to write optimized, elegant code that translates raw algorithms into high-impact user experiences.
              </p>
              <p>
                I thrive in settings that challenge me to solve algorithmic problems, collaborate on development pipelines, and learn modern technologies.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 pt-6 text-left"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/5 border border-slate-900/5 shadow-sm flex flex-col justify-center"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Core Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          >
            {bioCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-slate-900/5 border border-slate-900/5">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 tracking-wide">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
