"use client";

import { Mail, Terminal, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-12 border-t border-black/5 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-2 font-mono text-base font-bold text-gradient-primary tracking-wider"
          >
            <Terminal className="w-4.5 h-4.5 text-indigo-600" />
            <span>AP.dev</span>
          </a>
          <span className="text-xs text-gray-500 font-mono mt-1">
            Anusha Palaparthi Portfolio
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
          <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, "skills")} className="hover:text-slate-900 transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, "projects")} className="hover:text-slate-900 transition-colors">
            Projects
          </a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, "experience")} className="hover:text-slate-900 transition-colors">
            Experience
          </a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="https://github.com/Anusha-2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/5 border border-slate-900/5 text-gray-500 hover:text-slate-900 hover:bg-slate-900/10 hover:border-slate-900/10 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/anusha-palaparthi-5517a034b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/5 border border-slate-900/5 text-gray-500 hover:text-slate-900 hover:bg-slate-900/10 hover:border-slate-900/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:2300032684cseh1@gmail.com"
              className="p-2 rounded-lg bg-slate-900/5 border border-slate-900/5 text-gray-500 hover:text-slate-900 hover:bg-slate-900/10 hover:border-slate-900/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-gray-500 font-mono">
            <span>&copy; {currentYear} AP.dev. Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
