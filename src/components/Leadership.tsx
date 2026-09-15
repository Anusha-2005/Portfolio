"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Award } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative bg-[#f8fafc]">
      {/* Decorative Blur Blob */}
      <div className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

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
            Extracurriculars
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Leadership & <span className="text-gradient-primary">Community</span>
          </motion.h3>
        </div>

        {/* Leadership Cards Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl glass-card relative text-left border border-slate-900/10 shadow-lg"
          >
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-600/20 text-indigo-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-wide">
                    Core Member
                  </h4>
                  <span className="text-indigo-600 font-mono text-sm font-semibold">
                    Aparmaya Club, K L University
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/5 text-gray-500 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>Student Engagement & Tech Events</span>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed mb-6">
              Contributed to organizing technical events, club activities, and student engagement initiatives.
            </p>

            <div className="flex items-center gap-2 pt-4 border-t border-black/5 text-xs text-slate-500 font-mono">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Technical Event Organization • Team Leadership • Community Building</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
