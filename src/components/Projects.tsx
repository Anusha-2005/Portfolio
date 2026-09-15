"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  keyContributions: string[];
  githubLink: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "LearnPulse",
    subtitle: "AI-Powered Education Analytics Platform",
    description:
      "An AI-powered education analytics platform that predicts student performance from academic data and presents actionable insights through an interactive web dashboard.",
    image: "/learnpulse.png",
    techStack: ["Python", "Scikit-learn", "Flask", "React"],
    keyContributions: [
      "Developed a machine learning application using Python and Scikit-learn to predict student performance from academic data.",
      "Built a Flask REST API and integrated it with a React dashboard to deliver predictions, insights, and personalized recommendations.",
      "Implemented data preprocessing and model evaluation.",
    ],
    githubLink: "https://github.com/Anusha-2005/LearnPulse.git",
  },
  {
    title: "Employee Attrition & Workforce Analytics",
    subtitle: "Predictive Analytics & Power BI Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze employee attrition across departments, roles, age groups, and overtime. Created DAX measures and slicers for dynamic workforce analysis.",
    image: "/pipeline.png",
    techStack: ["Power BI", "DAX", "Python", "SQL", "Scikit-learn", "Data Analytics"],
    keyContributions: [
      "Built an interactive Power BI dashboard to analyze employee attrition across departments, roles, age groups, and overtime.",
      "Created DAX measures and slicers for dynamic workforce analysis.",
      "Analyzed workforce demographic and performance metrics to uncover primary employee attrition factors.",
    ],
    githubLink: "https://github.com/Anusha-2005/Employee-Attrition-Workforce-Analytics.git",
  },
  {
    title: "Arbeit",
    subtitle: "Task Manager & CI/CD Automation",
    description:
      "A task management application supported by an automated CI/CD workflow for consistent build, testing, and deployment.",
    image: "/arbeit.png",
    techStack: ["GitHub Actions", "Docker", "Git", "Task Management"],
    keyContributions: [
      "Developed a task management application.",
      "Designed an automated CI/CD workflow using GitHub Actions and Docker.",
      "Automated build, testing, and deployment processes.",
      "Used Git-based version control and containerization.",
    ],
    githubLink: "https://github.com/Anusha-2005/Arbeit-Task-Manager.git",
  },
  {
    title: "Contact Management System",
    subtitle: "C++ Application with Persistent Storage",
    description:
      "A C++-based contact management application supporting contact creation, editing, deletion, and search with persistent file-based storage.",
    image: "/taskmanager.png",
    techStack: ["C++", "File Handling", "Data Structures"],
    keyContributions: [
      "Add, edit, and delete contacts with field validation.",
      "Search contacts efficiently by name and phone record.",
      "Implemented persistent file-based storage for long-term data retention.",
    ],
    githubLink: "https://github.com/Anusha-2005",
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
            Featured Engineering
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Featured <span className="text-gradient-primary">Projects</span>
          </motion.h3>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Software, backend APIs, CI/CD automation pipelines, and core C++ applications engineered with robust performance standards.
          </p>
        </div>

        {/* Projects List Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 max-w-5xl mx-auto text-left"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group rounded-3xl glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-900/10 shadow-lg hover:border-indigo-600/30 transition-all duration-300"
            >
              {/* Project Image Column */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[250px] w-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-black/5 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={idx === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Card Body Details */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-wide mt-1 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2 pt-2">
                    <h5 className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
                      Key Highlights:
                    </h5>
                    <ul className="space-y-1.5">
                      {project.keyContributions.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-black/5">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 text-xs font-medium shadow-md transition-all duration-200"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
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
