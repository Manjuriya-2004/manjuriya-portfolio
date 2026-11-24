
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  Layers3,
  X,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  LayoutDashboard,
  Server,
  Sparkles,
  Code2,
  Zap,
  CheckCircle2,
  Building2,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Learning Management System",
    subtitle: "DIGITAL EDUCATION ECOSYSTEM",
    category: "Full Stack Application",
    description:
      "A comprehensive learning platform that simplifies educational management through intelligent workflows, role-based access and seamless learning experiences.",
    overview:
      "A full-stack educational platform built to connect administrators, teachers and students through a centralized application. It brings program management, batch operations, student records and learning activities together in one streamlined system.",
    features: [
      "Admin, Teacher and Student roles",
      "Program and batch management",
      "Student management",
      "Interactive dashboard",
      "JWT authentication",
      "REST API integration",
    ],
    technologies: ["Python", "Django", "React JS", "DRF", "MySQL", "JWT"],
    icon: GraduationCap,
    previewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
    previewAlt: "Digital dashboard and analytics interface",
    accent: "text-cyan-300",
    glow: "rgba(34,211,238,0.22)",
    gradient: "from-cyan-400/20 via-blue-500/10 to-transparent",
    border: "hover:border-cyan-300/50",
    numberColor: "text-cyan-300",
  },
  {
    id: "02",
    title: "Online Examination System",
    subtitle: "SMART ASSESSMENT EXPERIENCE",
    category: "Web Application",
    description:
      "A digital examination solution designed to simplify assessment workflows and create a structured, accessible and efficient online testing experience.",
    overview:
      "A web-based examination application focused on organizing digital assessments and examination activities. The solution uses backend services, database integration and API-driven functionality to support a smooth assessment workflow.",
    features: [
      "Online examination workflow",
      "Digital assessment management",
      "User-friendly interface",
      "Backend application development",
      "Database integration",
      "API-driven functionality",
    ],
    technologies: ["Python", "Django", "REST API", "SQL"],
    icon: BookOpen,
    previewImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop",
    previewAlt: "Student working on an examination paper",
    accent: "text-violet-300",
    glow: "rgba(167,139,250,0.22)",
    gradient: "from-violet-400/20 via-purple-500/10 to-transparent",
    border: "hover:border-violet-300/50",
    numberColor: "text-violet-300",
  },
  {
    id: "03",
    title: "Shivamagi Construction Website",
    subtitle: "CONSTRUCTION & BUSINESS WEBSITE",
    category: "Business Website",
    description:
      "A professional website created to present a construction business online, communicate its services and build a strong digital brand presence.",
    overview:
      "A business website project for Shivamagi Construction, designed to give the construction brand a professional online presence. The website can be explored through the live project link.",
    features: [
      "Professional business website",
      "Construction brand presentation",
      "Service-focused content layout",
      "Responsive website experience",
      "Visual business identity",
      "Online presence and accessibility",
    ],
    technologies: [
      "Business Website",
      "Responsive Design",
      "Web Development",
    ],
    icon: Building2,
    previewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop",
    previewAlt: "Modern residential construction architecture",
    liveUrl: "https://shivamagiconstruction.com/",
    accent: "text-amber-300",
    glow: "rgba(251,191,36,0.22)",
    gradient: "from-amber-400/20 via-orange-500/10 to-transparent",
    border: "hover:border-amber-300/50",
    numberColor: "text-amber-300",
  },
];

const architecture = [
  {
    icon: LayoutDashboard,
    label: "Application UI",
    detail: "Intuitive user experience",
    color: "text-cyan-300",
  },
  {
    icon: Server,
    label: "Backend Logic",
    detail: "Business logic and APIs",
    color: "text-emerald-300",
  },
  {
    icon: ShieldCheck,
    label: "Authentication",
    detail: "Secure access control",
    color: "text-violet-300",
  },
  {
    icon: Database,
    label: "Database Layer",
    detail: "Structured data management",
    color: "text-amber-300",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden px-5 py-24 md:px-10 lg:px-16"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[130px]" />

      {/* Decorative floating sparkles */}
      <motion.div
        animate={{ y: [0, -14, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute left-[12%] top-40 text-cyan-300"
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="pointer-events-none absolute right-[14%] top-72 text-violet-300"
      >
        <Sparkles size={17} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-5 py-2 text-xs font-semibold tracking-[3px] text-cyan-300 backdrop-blur-xl">
            <Sparkles size={14} />
            03 / SELECTED WORK
          </div>

          <div className="mt-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Ideas Into
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Digital Reality.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400 md:text-base">
              Turning concepts into functional applications through
              creative thinking, clean code and meaningful technology.
            </p>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#09182b]/75 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-500 ${project.border}`}
              >
                {/* Card gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Hover glow */}
                <motion.div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: project.glow }}
                />

                <div className="relative z-10 p-5 sm:p-7">
                  {/* Top information */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-xs font-bold tracking-[3px] ${project.numberColor}`}
                    >
                      PROJECT / {project.id}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-slate-300 backdrop-blur-xl">
                      {project.category}
                    </span>
                  </div>

                  {/* Project image preview */}
                  <div className="relative mt-6 h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#061326] sm:h-56">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.7 }}
                    >
                      <div
                        role="img"
                        aria-label={project.previewAlt}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url("${project.previewImage}")`,
                        }}
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/90 via-[#04101f]/15 to-[#04101f]/20" />

                    {/* Browser dots */}
                    <div className="absolute left-4 top-4 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>

                    {/* Floating icon */}
                    <motion.div
                      animate={{
                        y: [0, -7, 0],
                        rotate: [0, 3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-[#071426]/65 shadow-[0_0_30px_rgba(34,211,238,0.16)] backdrop-blur-xl"
                    >
                      <Icon size={29} className={project.accent} />
                    </motion.div>

                    <motion.div
                      animate={{
                        opacity: [0.45, 1, 0.45],
                        rotate: [0, 12, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute right-5 top-5 text-white"
                    >
                      <Sparkles size={20} />
                    </motion.div>

                    <div className="absolute bottom-6 right-5 max-w-[60%] text-right text-[9px] font-semibold tracking-[2px] text-white/80">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Project title and description */}
                  <div className="mt-7">
                    <p
                      className={`text-[10px] font-semibold tracking-[2px] ${project.accent}`}
                    >
                      {project.subtitle}
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[10px] font-medium text-slate-300 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project actions */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => setSelected(project)}
                      className="flex flex-1 items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.08] hover:text-cyan-200"
                    >
                      <span className="flex items-center gap-2">
                        Explore Project
                        <Sparkles size={14} className={project.accent} />
                      </span>

                      <ArrowUpRight
                        size={19}
                        className={`${project.accent} transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1`}
                      />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-300/[0.08] px-5 py-3.5 text-sm font-semibold text-amber-200 transition-all duration-300 hover:border-amber-300/60 hover:bg-amber-300/15 hover:shadow-[0_0_22px_rgba(251,191,36,0.12)]"
                      >
                        Live Website
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Development approach */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-[26px] border border-white/10 bg-[#09182b]/65 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-7"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-[90px]" />

          <div className="relative z-10 mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <Layers3 size={22} />
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[3px] text-cyan-300">
                DEVELOPMENT APPROACH
              </p>
              <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                From Concept to Creation
              </h3>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {architecture.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-center backdrop-blur-xl transition-colors hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <Icon
                    size={23}
                    className={`mx-auto ${item.color}`}
                  />

                  <h4 className="mt-3 text-xs font-semibold text-white">
                    {item.label}
                  </h4>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    {item.detail}
                  </p>

                  <span className="mt-3 block text-[9px] font-bold tracking-[2px] text-slate-600">
                    STEP 0{index + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/85 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-y-auto rounded-[26px] border border-cyan-200/20 bg-[#09182b]/95 p-6 shadow-[0_0_70px_rgba(34,211,238,0.10)] backdrop-blur-2xl sm:p-8"
              style={{ maxHeight: "85vh" }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-[80px]" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-[10px] font-bold tracking-[3px] ${selected.accent}`}
                  >
                    PROJECT DETAILS / {selected.id}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {selected.title}
                  </h3>

                  <p className="mt-2 text-xs tracking-wider text-slate-500">
                    {selected.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-slate-300 transition hover:border-rose-400/40 hover:text-rose-300"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="relative z-10 mt-7 overflow-hidden rounded-2xl border border-white/10">
                <div
                  role="img"
                  aria-label={selected.previewAlt}
                  className="h-44 bg-cover bg-center sm:h-56"
                  style={{
                    backgroundImage: `url("${selected.previewImage}")`,
                  }}
                />
              </div>

              <div className="relative z-10 mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-3 flex items-center gap-2 text-cyan-300">
                  <Zap size={17} />
                  <h4 className="text-sm font-semibold">
                    Project Overview
                  </h4>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  {selected.overview}
                </p>
              </div>

              <div className="relative z-10 mt-7">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 size={17} className="text-emerald-300" />
                  Key Features
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">
                  {selected.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3.5"
                    >
                      <Sparkles
                        size={14}
                        className="mt-1 shrink-0 text-cyan-300"
                      />

                      <span className="text-xs leading-6 text-slate-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-7">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
                  <Code2 size={17} className="text-violet-300" />
                  Technologies & Project Focus
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-xs font-medium text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 p-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(251,191,36,0.3)]"
                >
                  Visit Live Website
                  <ExternalLink size={17} />
                </a>
              )}

              <button
                onClick={() => setSelected(null)}
                className="relative z-10 mt-4 w-full rounded-xl border border-white/10 bg-white/[0.05] p-3.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10"
              >
                Close Project Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
