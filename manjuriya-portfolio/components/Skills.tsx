
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Server,
  Monitor,
  Database,
  Wrench,
  Layers3,
  Terminal,
  Workflow,
  GitBranch,
  Sparkles,
  ShieldCheck,
  Braces,
  Globe,
  Palette,
  Wind,
  Atom,
  Triangle,
  FileCode2,
  Leaf,
  Send,
  Cloud,
  Calculator,
  Settings,
  Rocket,
  Table2,
  Link,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = "backend" | "frontend" | "database" | "tools";

type Technology = {
  name: string;
  category: Category;
  detail: string;
  icon: LucideIcon;
  color: string;
  glow: string;
};

const categories = [
  { id: "all", label: "All Skills", icon: Layers3 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "frontend", label: "Frontend", icon: Monitor },
  { id: "database", label: "Database", icon: Database },
  { id: "tools", label: "Tools & Cloud", icon: Wrench },
];

const technologies: Technology[] = [
  {
    name: "Python",
    category: "backend",
    detail: "Programming Language",
    icon: Code2,
    color: "from-yellow-400 to-blue-500",
    glow: "rgba(250,204,21,0.2)",
  },
  {
    name: "Django",
    category: "backend",
    detail: "Backend Framework",
    icon: ShieldCheck,
    color: "from-emerald-400 to-green-600",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    name: "Flask",
    category: "backend",
    detail: "Python Framework",
    icon: Terminal,
    color: "from-slate-300 to-slate-500",
    glow: "rgba(203,213,225,0.2)",
  },
  {
    name: "REST API",
    category: "backend",
    detail: "API Development",
    icon: Link,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.2)",
  },
  {
    name: "JWT",
    category: "backend",
    detail: "Authentication",
    icon: ShieldCheck,
    color: "from-orange-400 to-red-500",
    glow: "rgba(249,115,22,0.2)",
  },
  {
    name: "JavaScript",
    category: "frontend",
    detail: "Programming Language",
    icon: Braces,
    color: "from-yellow-300 to-amber-500",
    glow: "rgba(250,204,21,0.2)",
  },
  {
    name: "React JS",
    category: "frontend",
    detail: "Frontend Library",
    icon: Atom,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.2)",
  },
  {
    name: "Next JS",
    category: "frontend",
    detail: "React Framework",
    icon: Triangle,
    color: "from-slate-300 to-slate-500",
    glow: "rgba(203,213,225,0.2)",
  },
  {
    name: "HTML5",
    category: "frontend",
    detail: "Markup Language",
    icon: Globe,
    color: "from-orange-400 to-red-500",
    glow: "rgba(249,115,22,0.2)",
  },
  {
    name: "CSS3",
    category: "frontend",
    detail: "Styling",
    icon: Palette,
    color: "from-blue-400 to-indigo-500",
    glow: "rgba(99,102,241,0.2)",
  },
  {
    name: "jQuery",
    category: "frontend",
    detail: "JavaScript Library",
    icon: FileCode2,
    color: "from-sky-400 to-blue-600",
    glow: "rgba(14,165,233,0.2)",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    detail: "CSS Framework",
    icon: Layers3,
    color: "from-violet-400 to-purple-600",
    glow: "rgba(168,85,247,0.2)",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    detail: "CSS Framework",
    icon: Wind,
    color: "from-teal-300 to-cyan-500",
    glow: "rgba(45,212,191,0.2)",
  },
  {
    name: "MySQL",
    category: "database",
    detail: "Relational Database",
    icon: Database,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.2)",
  },
  {
    name: "PostgreSQL",
    category: "database",
    detail: "Relational Database",
    icon: Table2,
    color: "from-indigo-400 to-blue-600",
    glow: "rgba(99,102,241,0.2)",
  },
  {
    name: "MongoDB",
    category: "database",
    detail: "NoSQL Database",
    icon: Leaf,
    color: "from-green-400 to-emerald-600",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    name: "SQL",
    category: "database",
    detail: "Database Query Language",
    icon: Database,
    color: "from-fuchsia-400 to-purple-600",
    glow: "rgba(217,70,239,0.2)",
  },
  {
    name: "Git",
    category: "tools",
    detail: "Version Control",
    icon: GitBranch,
    color: "from-orange-400 to-red-500",
    glow: "rgba(249,115,22,0.2)",
  },
  {
    name: "GitHub",
    category: "tools",
    detail: "Code Hosting",
    icon: Code2,
    color: "from-slate-300 to-slate-500",
    glow: "rgba(203,213,225,0.2)",
  },
  {
    name: "Postman",
    category: "tools",
    detail: "API Testing",
    icon: Send,
    color: "from-orange-400 to-amber-500",
    glow: "rgba(251,146,60,0.2)",
  },
  {
    name: "AWS",
    category: "tools",
    detail: "Cloud Fundamentals",
    icon: Cloud,
    color: "from-amber-300 to-orange-500",
    glow: "rgba(251,191,36,0.2)",
  },
  {
    name: "NumPy",
    category: "tools",
    detail: "Python Library",
    icon: Calculator,
    color: "from-blue-400 to-indigo-500",
    glow: "rgba(96,165,250,0.2)",
  },
  {
    name: "Pandas",
    category: "tools",
    detail: "Data Analysis Library",
    icon: Table2,
    color: "from-violet-400 to-purple-600",
    glow: "rgba(168,85,247,0.2)",
  },
  {
    name: "DevOps",
    category: "tools",
    detail: "Fundamentals",
    icon: Settings,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.2)",
  },
  {
    name: "Deployment",
    category: "tools",
    detail: "Deployment Basics",
    icon: Rocket,
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16,185,129,0.2)",
  },
];

const overview = [
  {
    icon: Code2,
    label: "Programming",
    value: "Python & JavaScript",
    color: "text-yellow-300",
  },
  {
    icon: Server,
    label: "Backend",
    value: "Django & Flask",
    color: "text-emerald-300",
  },
  {
    icon: Monitor,
    label: "Frontend",
    value: "React & Next.js",
    color: "text-cyan-300",
  },
  {
    icon: Database,
    label: "Databases",
    value: "SQL & NoSQL",
    color: "text-violet-300",
  },
];

export default function Skills() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === active);

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden px-5 py-24 md:px-10"
    >
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-bold tracking-[3px] text-cyan-300">
            <Sparkles size={14} />
            02 / TECHNICAL EXPERTISE
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            My Tech{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Universe.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            A collection of technologies and tools I use to create modern,
            scalable and user-friendly applications.
          </p>
        </motion.div>

        {/* Overview cards */}
        <div className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {overview.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/60 px-3 py-3 backdrop-blur-xl transition-colors hover:border-cyan-300/30 md:px-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                  <Icon size={17} className={item.color} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] text-slate-400">{item.label}</p>
                  <h3 className="truncate text-xs font-semibold text-white md:text-sm">
                    {item.value}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Arsenal heading */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400/15 to-blue-500/10 px-5 py-3 shadow-[0_0_25px_rgba(34,211,238,0.08)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                <Layers3 size={18} />
              </span>
              <h3 className="text-base font-bold text-white md:text-lg">
                Technical Arsenal
              </h3>
              <Sparkles size={16} className="text-cyan-300" />
            </div>
            <p className="ml-3 mt-3 text-xs text-slate-400">
              Tools behind my development journey.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-[11px] text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            My Technology Stack
          </div>
        </div>

        {/* Main panel */}
        <div className="rounded-3xl border border-cyan-200/15 bg-slate-950/55 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-2xl md:p-6">

          {/* Category filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const selected = active === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActive(category.id)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                    selected
                      ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.12)]"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-300/30 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Compact technology cards */}
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    layout
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.015,
                    }}
                    whileHover={{ y: -5, scale: 1.025 }}
                    className="group relative min-h-[116px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-950/90 p-3.5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40"
                    style={{
                      boxShadow: `0 0 0 rgba(0,0,0,0)`,
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.boxShadow = `0 8px 28px ${tech.glow}`;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${tech.color} opacity-[0.07] blur-2xl transition-opacity group-hover:opacity-25`}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${tech.color} shadow-lg`}
                      >
                        <Icon size={18} className="text-white" />
                      </div>

                      <span className="text-[8px] font-bold uppercase tracking-[1px] text-slate-500">
                        {tech.category}
                      </span>
                    </div>

                    <h4 className="relative z-10 mt-3 text-sm font-bold text-white transition-colors group-hover:text-cyan-200">
                      {tech.name}
                    </h4>

                    <p className="relative z-10 mt-1 text-[10px] text-slate-400">
                      {tech.detail}
                    </p>

                    <div
                      className={`mt-3 h-[2px] w-7 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-300 group-hover:w-full`}
                    />

                    <Sparkles
                      size={13}
                      className="absolute bottom-3 right-3 text-cyan-300 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
            <span className="text-[11px] text-slate-500">
              Showing {filtered.length} technologies
            </span>
            <span className="text-[10px] font-bold tracking-[2px] text-cyan-300">
              MANJURIYA / TECH STACK
            </span>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <motion.div
            whileHover={{ y: -4 }}
            className="flex items-start gap-3 rounded-2xl border border-cyan-300/15 bg-slate-900/60 p-4 backdrop-blur-xl"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <Workflow size={19} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Development Workflow
              </h3>
              <p className="mt-1 text-xs leading-6 text-slate-400">
                From backend logic and API development to frontend integration
                and database management.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="flex items-start gap-3 rounded-2xl border border-violet-300/15 bg-slate-900/60 p-4 backdrop-blur-xl"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
              <GitBranch size={19} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Tools & Collaboration
              </h3>
              <p className="mt-1 text-xs leading-6 text-slate-400">
                Git, GitHub, Postman, deployment and cloud fundamentals support
                my development workflow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
