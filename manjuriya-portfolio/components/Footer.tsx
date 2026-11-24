
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Sparkles,
  Heart,
  Code2,
  Mail,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Services", "#services"],
  ["Workflow", "#workflow"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  // Avoid new Date() during render to prevent Next.js prerender errors.
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#050817] px-5 pb-5 pt-12 sm:px-8 sm:pt-14">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[110px]" />

      {/* Sparkle animation */}
      {[
        "left-[10%] top-10",
        "right-[15%] top-16",
        "left-[55%] bottom-12",
        "right-[8%] bottom-10",
      ].map((position, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute ${position} text-cyan-300/70`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.3, 0.7],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 2.5 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.4,
          }}
        >
          <Sparkles size={index % 2 === 0 ? 17 : 12} />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl">

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-9 flex flex-col items-center justify-between gap-4 rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-cyan-500/[0.09] via-blue-500/[0.07] to-violet-500/[0.09] p-5 text-center shadow-[0_10px_40px_rgba(34,211,238,0.05)] backdrop-blur-2xl sm:flex-row sm:p-6 sm:text-left"
        >
          <div>
            <div className="mb-2 flex items-center justify-center gap-2 text-cyan-300 sm:justify-start">
              <Sparkles size={15} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Let's Connect
              </span>
            </div>

            <h3 className="text-lg font-bold text-white sm:text-xl">
              Have an idea? Let's build it together.
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Let's turn your vision into something extraordinary.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-900/30 transition hover:shadow-cyan-500/30"
          >
            Contact Me
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

        {/* Footer content */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-white/[0.08] pb-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-cyan-300 drop-shadow-[0_0_13px_rgba(34,211,238,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_22px_rgba(34,211,238,0.8)]">
                MANJURIYA
              </span>
              <Sparkles size={15} className="text-violet-300" />
            </a>

            <p className="mt-3 max-w-xs text-xs leading-6 text-slate-400">
              Building modern digital experiences with creativity,
              technology, and clean code.
            </p>

            <div className="mt-4 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold text-white">
              <Code2 size={15} className="text-cyan-300" />
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-x-3 gap-y-3">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-[11px] text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold text-white">
              <Sparkles size={15} className="text-violet-300" />
              Expertise
            </h4>

            <ul className="space-y-3 text-[11px] text-slate-400">
              {[
                "Frontend Development",
                "Backend Development",
                "Full Stack Applications",
                "REST API Development",
                "Database Integration",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 transition hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold text-white">
              <Mail size={15} className="text-emerald-300" />
              Get In Touch
            </h4>

            <p className="text-xs leading-6 text-slate-400">
              Interested in a project or collaboration? Let's connect.
            </p>

            <a
              href="#contact"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Let's Talk
              <ArrowUpRight size={14} />
            </a>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] p-3 text-[11px] text-slate-500 backdrop-blur-xl">
              <MapPin size={14} className="shrink-0 text-violet-300" />
              Tamil Nadu, India
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] text-slate-500 sm:text-xs">
            © {year ?? ""}{" "}
            <span className="font-semibold text-cyan-300">
              Manjuriya
            </span>
            . All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-[10px] text-slate-500 sm:text-xs">
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-pink-400"
            >
              <Heart size={12} fill="currentColor" />
            </motion.span>
            and
            <span className="font-semibold text-cyan-300">
              Creativity
            </span>
            <Sparkles size={12} className="text-violet-300" />
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/15 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            <ArrowUp size={17} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
