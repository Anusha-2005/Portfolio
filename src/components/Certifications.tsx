"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Globe, Award, ShieldCheck, Cpu, Code } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  id: string;
  icon: React.ReactNode;
  colorClass: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    id: "AWS Verified",
    icon: <Cpu className="w-6 h-6 text-amber-500" />,
    colorClass: "from-amber-500/5 to-orange-500/5 border-amber-500/20 hover:border-amber-500/40",
    link: "https://www.credly.com/badges/a2ba79dc-02a3-49a1-9749-15809ff56cf1/public_url",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    id: "AZ-900 Verified",
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    colorClass: "from-blue-500/5 to-indigo-500/5 border-blue-500/20 hover:border-blue-500/40",
    link: "https://www.credly.com/badges/70da4aef-8db5-4312-8aef-31efcca8322b/public_url",
  },
  {
    title: "Aviatrix Certified Engineer",
    issuer: "Aviatrix",
    id: "Multicloud Network Associate",
    icon: <Cloud className="w-6 h-6 text-sky-500" />,
    colorClass: "from-sky-500/5 to-blue-500/5 border-sky-500/20 hover:border-sky-500/40",
    link: "https://drive.google.com/file/d/1cO2WD3IdArRTxaRUiNnFbtd2S8QyLm0Y/view?usp=sharing",
  },
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    id: "M001/M220 Verified",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    colorClass: "from-emerald-500/5 to-teal-500/5 border-emerald-500/20 hover:border-emerald-500/40",
    link: "https://www.credly.com/badges/1886d0a0-4a6e-439f-987d-fae3bc512b10/public_url",
  },
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    id: "HackerRank Verified",
    icon: <Code className="w-6 h-6 text-emerald-500" />,
    colorClass: "from-emerald-500/5 to-teal-500/5 border-emerald-500/20 hover:border-emerald-500/40",
    link: "https://drive.google.com/file/d/1SunVGNxuw6fPKvtKg3YAvwa5G4OSpQkq/view?usp=sharing",
  },
  {
    title: "Cambridge English Proficiency",
    issuer: "Cambridge Assessment English",
    id: "CEFR Level B2",
    icon: <Globe className="w-6 h-6 text-indigo-500" />,
    colorClass: "from-indigo-500/5 to-purple-500/5 border-indigo-500/20 hover:border-indigo-500/40",
    link: "https://drive.google.com/file/d/1plRs0R4BJoyk6o6b5M_OKHHaSIelKorp/view?usp=sharing",
  },
];

export default function Certifications() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="certifications" className="py-20 relative bg-[#f8fafc]">
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
            Credentials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Certifications & <span className="text-gradient-primary">Licenses</span>
          </motion.h3>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {certificates.map((cert, idx) => (
            <motion.a
              key={idx}
              variants={cardVariants}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl glass-card flex flex-col justify-between bg-gradient-to-br border transition-all duration-300 group cursor-pointer ${cert.colorClass}`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2.5 rounded-xl bg-slate-900/5 border border-slate-900/5">
                    {cert.icon}
                  </div>
                  <Award className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider text-slate-500 font-mono uppercase">
                    {cert.issuer}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-mono mt-6 pt-3 border-t border-black/5 font-medium">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>{cert.id}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
