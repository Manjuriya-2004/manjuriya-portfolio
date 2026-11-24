
"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Sparkles,
  Code2,
  Rocket,
  Layers3,
  GitBranch,
  Database,
  Award,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Add Company Name",
    duration: "Add Duration",
    location: "Add Location",
    type: "Professional Experience",
    description:
      "Building modern, scalable, and user-focused web applications by combining creative frontend experiences with reliable backend architecture.",
    responsibilities: [
      "Develop responsive and interactive user interfaces using React.js and Next.js.",
      "Build backend applications and REST APIs using Python and Django.",
      "Integrate frontend applications with backend services and databases.",
      "Optimize application performance, usability, and maintainability.",
      "Collaborate with teams to deliver reliable software solutions.",
    ],
    technologies: [
      "Python",
      "Django",
      "React.js",
      "Next.js",
      "REST API",
      "MySQL",
      "Git",
    ],
    icon: Code2,
    gradient: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.16)",
    accent: "text-cyan-300",
    border: "hover:border-cyan-400/40",
    number: "01",
  },
  {
    role: "Python Full Stack Developer",
    company: "Add Previous Company",
    duration: "Add Duration",
    location: "Add Location",
    type: "Professional Experience",
    description:
      "Focused on developing end-to-end web solutions, implementing backend logic, designing database structures, and creating seamless user experiences.",
    responsibilities: [
      "Develop dynamic web applications using Python and Django.",
      "Create and integrate RESTful APIs with frontend applications.",
      "Work with relational databases and efficient data management.",
      "Implement authentication, validation, and application logic.",
      "Debug issues and improve overall application reliability.",
    ],
    technologies: [
      "Python",
      "Django",
      "DRF",
      "JavaScript",
      "HTML5",
      "CSS3",
      "PostgreSQL",
    ],
    icon: Layers3,
    gradient: "from-violet-400 to-purple-500",
    glow: "rgba(167,139,250,0.16)",
    accent: "text-violet-300",
    border: "hover:border-violet-400/40",
    number: "02",
  },
];

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Frontend to backend application development",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Structured data and database integration",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: GitBranch,
    title: "API Integration",
    description: "Connecting applications with reliable APIs",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Learning, improving, and building better solutions",
    color: "from-orange-400 to-pink-500",
  },
];

const sparklePositions = [
  "left-[8%] top-[12%]",
  "right-[12%] top-[22%]",
  "left-[18%] top-[48%]",
  "right-[8%] top-[60%]",
  "left-[10%] bottom-[12%]",
  "right-[20%] bottom-[8%]",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 md:px-12 md:py-32 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[120px]" />

      {/* Sparkle particles */}
      {sparklePositions.map((position, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute ${position} text-cyan-200/70`}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.6, 1.3, 0.6],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 2.5 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.4,
          }}
        >
          <Sparkles size={index % 2 === 0 ? 16 : 11} />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-6 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            <BriefcaseBusiness size={16} className="text-cyan-300" />
            <span className="text-sm font-medium tracking-wide text-cyan-200">
              My Career Journey
            </span>
            <Sparkles size={14} className="text-violet-300" />
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Professional
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Every experience is a new opportunity to learn, innovate, and
            create something meaningful. Here's a look at my professional
            journey and the skills I've developed along the way.
          </p>
        </motion.div>

        {/* Career journey label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
            <Terminal size={21} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Career Timeline
            </h3>
            <p className="text-xs text-slate-500">
              Growth through experience and innovation
            </p>
          </div>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-10 left-[19px] top-8 hidden w-px bg-gradient-to-b from-cyan-400/80 via-violet-400/60 to-transparent sm:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-8 z-10 hidden sm:flex">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0b1729] shadow-[0_0_25px_${experience.glow}]`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full bg-gradient-to-r ${experience.gradient}`}
                      />
                    </div>
                  </div>

                  {/* Experience card */}
                  <div
                    className={`group/card relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-white/[0.015] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 ${experience.border} hover:-translate-y-1 hover:shadow-2xl sm:p-8`}
                  >
                    {/* Card glow */}
                    <div
                      className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px] transition duration-700 group-hover/card:scale-125"
                      style={{ backgroundColor: experience.glow }}
                    />

                    <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-violet-500/[0.05] blur-[80px]" />

                    {/* Top sparkle */}
                    <motion.div
                      className="absolute right-7 top-7 text-cyan-200"
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        rotate: [0, 45, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        delay: index * 0.7,
                      }}
                    >
                      <Sparkles size={19} />
                    </motion.div>

                    <div className="relative">
                      {/* Role header */}
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div
                            className={`shrink-0 rounded-2xl bg-gradient-to-br ${experience.gradient} p-3.5 text-white shadow-lg`}
                          >
                            <Icon size={25} />
                          </div>

                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                              Experience {experience.number}
                            </span>
                            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                              {experience.role}
                            </h3>
                            <p className={`mt-1 text-sm font-semibold ${experience.accent}`}>
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        <span className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-medium text-slate-300 backdrop-blur-xl">
                          {experience.type}
                        </span>
                      </div>

                      {/* Meta information */}
                      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-b border-white/[0.08] pb-5 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <CalendarDays size={15} className={experience.accent} />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={15} className={experience.accent} />
                          {experience.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-6 text-sm leading-7 text-slate-400">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mt-7">
                        <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                          <Zap size={16} className={experience.accent} />
                          Key Responsibilities
                        </h4>

                        <div className="space-y-3">
                          {experience.responsibilities.map(
                            (responsibility, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: itemIndex * 0.07 }}
                                className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                              >
                                <CheckCircle2
                                  size={16}
                                  className={`mt-1 shrink-0 ${experience.accent}`}
                                />
                                <span>{responsibility}</span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8">
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Technologies & Tools
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              whileHover={{ y: -3, scale: 1.04 }}
                              className="rounded-full border border-white/[0.10] bg-white/[0.045] px-3.5 py-2 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.08] hover:text-cyan-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expertise highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="mb-9 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              What I Bring
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Beyond the Job Title
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              A combination of technical knowledge, problem-solving, and
              continuous learning that drives every project forward.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  className="group/highlight relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.045] p-5 shadow-lg backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/[0.07] blur-[55px] transition group-hover/highlight:bg-violet-400/[0.12]" />

                  <div
                    className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon size={22} />
                  </div>

                  <h4 className="relative text-sm font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="relative mt-2 text-xs leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <Sparkles
                    size={13}
                    className="absolute right-4 top-4 text-cyan-300/60 transition group-hover/highlight:scale-125 group-hover/highlight:text-cyan-200"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/[0.09] via-blue-500/[0.07] to-violet-500/[0.09] p-7 text-center shadow-[0_15px_60px_rgba(34,211,238,0.07)] backdrop-blur-2xl sm:p-10"
        >
          <div className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-violet-500/10 blur-[80px]" />

          <div className="relative">
            <Award size={32} className="mx-auto text-cyan-300" />

            <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Always Learning. Always Building.
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Every challenge is a chance to grow. I'm excited to explore new
              technologies, solve meaningful problems, and build impactful
              digital experiences.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-5 py-2.5 text-sm font-medium text-cyan-200">
              <Rocket size={16} />
              The Journey Continues
              <ArrowUpRight size={15} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
