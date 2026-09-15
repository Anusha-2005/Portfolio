"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#f8fafc]">
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
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Let&apos;s <span className="text-gradient-primary">Connect</span>
          </motion.h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h4 className="text-xl font-bold text-slate-900 tracking-wide">
              Contact Information
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              I am open to Google Application Engineering internship opportunities, software engineering inquiries, and technical discussions.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:2300032684cseh1@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/5 border border-slate-900/10 hover:border-indigo-600/30 hover:bg-indigo-50/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">EMAIL</div>
                  <div className="text-sm font-semibold text-slate-900 break-all">
                    2300032684cseh1@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/anusha-palaparthi-5517a034b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/5 border border-slate-900/10 hover:border-indigo-600/30 hover:bg-indigo-50/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">LINKEDIN</div>
                  <div className="text-sm font-semibold text-slate-900 break-all">
                    linkedin.com/in/anusha-palaparthi-5517a034b
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Anusha-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/5 border border-slate-900/10 hover:border-indigo-600/30 hover:bg-indigo-50/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">GITHUB</div>
                  <div className="text-sm font-semibold text-slate-900">
                    github.com/Anusha-2005
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/5 border border-slate-900/10">
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">LOCATION</div>
                  <div className="text-sm font-semibold text-slate-900">
                    Vijayawada, Andhra Pradesh, India
                  </div>
                </div>
              </div>

              <a
                href="tel:+919727599438"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/5 border border-slate-900/10 hover:border-indigo-600/30 hover:bg-indigo-50/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">PHONE</div>
                  <div className="text-sm font-semibold text-slate-900">
                    +91 97275 99438
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-card relative h-full border border-slate-900/10 shadow-lg">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[340px] space-y-4"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                    <h5 className="text-2xl font-bold text-slate-900">Message Sent!</h5>
                    <p className="text-sm text-slate-600 max-w-sm">
                      Thank you for reaching out. Your message has been sent. I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-indigo-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-600 font-mono uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/5 border border-slate-900/10 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-600 font-mono uppercase">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/5 border border-slate-900/10 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-600 font-mono uppercase">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Application Engineering Inquiry / Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/5 border border-slate-900/10 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-600 font-mono uppercase">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/5 border border-slate-900/10 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all duration-200 resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-600 text-xs font-mono">
                        <AlertCircle className="w-4.5 h-4.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold shadow-md transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
