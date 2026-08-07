"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    title: "LearnPulse",
    description: "An AI-powered adaptive learning platform designed to customize curriculum paths in real-time. Features interactive student dashboards, diagnostic skill graphs, and automated content recommendations tailored to learning speeds.",
    image: "/learnpulse.png",
    techStack: ["Next.js", "FastAPI", "Scikit-learn", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/anusha-palaparthi/learnpulse",
    demoLink: "https://learnpulse-demo.vercel.app",
  },
  {
    title: "Arbeit AI Job Portal",
    description: "A high-performance job board utilizing natural language processing pipelines to match job seekers' resumes with employment requirements. Reduces manual screening times by ranking applicants using semantic affinity scores.",
    image: "/arbeit.png",
    techStack: ["React", "Node.js", "Express", "MySQL", "Docker", "NLP"],
    githubLink: "https://github.com/anusha-palaparthi/arbeit-ai",
    demoLink: "https://arbeit-ai-demo.vercel.app",
  },
  {
    title: "CI/CD Automation Pipeline",
    description: "An enterprise-grade DevOps infrastructure for microservices. Automates linting, unit testing, Docker image building, and container deployments across environments, featuring self-healing status logs.",
    image: "/pipeline.png",
    techStack: ["Docker", "Git", "GitHub Actions", "Node.js", "Python", "Shell"],
    githubLink: "https://github.com/anusha-palaparthi/cicd-pipeline",
    demoLink: "https://pipeline-demo.vercel.app",
  },
  {
    title: "Task Management System",
    description: "A collaborative project planning application featuring real-time state synchronization, glassmorphic kanban boards, team velocity charts, and drag-and-drop task card controls.",
    image: "/taskmanager.png",
    techStack: ["Next.js", "React", "Node.js", "Socket.io", "MongoDB", "Framer Motion"],
    githubLink: "https://github.com/anusha-palaparthi/task-manager",
    demoLink: "https://task-manager-demo.vercel.app",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative bg-[#f8fafc]">
      {/* Decorative Blob */}
      <div className="absolute top-[20%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

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
            My Work
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Featured <span className="text-gradient-primary">Engineering Projects</span>
          </motion.h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A selection of projects that showcase my capability in building machine learning architectures, automated deployment setups, and responsive software solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group rounded-2xl glass-card overflow-hidden flex flex-col h-full"
            >
              {/* Project Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 border-b border-black/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 tracking-wide group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-slate-900/5 border border-slate-900/5 text-gray-600 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-6 border-t border-black/5 mt-6">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200 ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
