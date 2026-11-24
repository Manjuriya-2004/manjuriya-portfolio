
"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  Code2,
  ShoppingCart,
  Workflow,
  ArrowUpRight,
  Sparkles,
  Monitor,
  ShieldCheck,
  Layers3,
  Zap,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Website Development",
    subtitle: "MODERN DIGITAL EXPERIENCES",
    description:
      "Responsive, visually engaging websites engineered for performance, accessibility and a strong digital presence.",
    icon: Globe,
    tags: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    accent: "#67e8f9",
    glow: "rgba(34,211,238,0.2)",
    gradient: "from-cyan-400/15 via-blue-500/10 to-transparent",
    border: "hover:border-cyan-300/50",
  },
  {
    id: "02",
    title: "Backend Development",
    subtitle: "POWERFUL APPLICATION LOGIC",
    description:
      "Robust backend architectures with business logic, secure authentication and scalable application functionality.",
    icon: Server,
    tags: ["Python", "Django", "Flask", "DRF", "JWT"],
    accent: "#93c5fd",
    glow: "rgba(59,130,246,0.22)",
    gradient: "from-blue-400/15 via-indigo-500/10 to-transparent",
    border: "hover:border-blue-300/50",
  },
  {
    id: "03",
    title: "API Development",
    subtitle: "SEAMLESS SYSTEM INTEGRATION",
    description:
      "Well-structured REST APIs that connect frontend interfaces, backend services and external applications.",
    icon: Workflow,
    tags: ["REST API", "JSON", "JWT", "API Integration"],
    accent: "#c4b5fd",
    glow: "rgba(167,139,250,0.22)",
    gradient: "from-violet-400/15 via-purple-500/10 to-transparent",
    border: "hover:border-violet-300/50",
  },
  {
    id: "04",
    title: "Database Solutions",
    subtitle: "INTELLIGENT DATA MANAGEMENT",
    description:
      "Structured database design, optimized queries and reliable data management for application performance.",
    icon: Database,
    tags: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
    accent: "#5eead4",
    glow: "rgba(45,212,191,0.2)",
    gradient: "from-teal-400/15 via-emerald-500/10 to-transparent",
    border: "hover:border-teal-300/50",
  },
  {
    id: "05",
    title: "E-Commerce Solutions",
    subtitle: "DIGITAL BUSINESS PLATFORMS",
    description:
      "Custom commerce applications with product catalogues, customer workflows, inventory and billing functionality.",
    icon: ShoppingCart,
    tags: ["Next.js", "React", "Django", "Inventory"],
    accent: "#f9a8d4",
    glow: "rgba(244,114,182,0.2)",
    gradient: "from-pink-400/15 via-rose-500/10 to-transparent",
    border: "hover:border-pink-300/50",
  },
  {
    id: "06",
    title: "Custom Software",
    subtitle: "BUILT AROUND YOUR BUSINESS",
    description:
      "Purpose-built software and management systems designed to streamline business processes and solve real-world challenges.",
    icon: Code2,
    tags: ["Python", "Full Stack", "Automation", "SQL"],
    accent: "#fcd34d",
    glow: "rgba(251,191,36,0.2)",
    gradient: "from-amber-400/15 via-orange-500/10 to-transparent",
    border: "hover:border-amber-300/50",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your requirements, audience and business goals.",
    icon: Sparkles,
    color: "text-cyan-300",
    glow: "rgba(34,211,238,0.2)",
  },
  {
    number: "02",
    title: "Design",
    description: "Plan the interface, architecture and user experience.",
    icon: Monitor,
    color: "text-violet-300",
    glow: "rgba(167,139,250,0.2)",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build, integrate and refine the required functionality.",
    icon: Code2,
    color: "text-emerald-300",
    glow: "rgba(52,211,153,0.2)",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Test, optimize and prepare the solution for delivery.",
    icon: ShieldCheck,
    color: "text-amber-300",
    glow: "rgba(251,191,36,0.2)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden px-5 py-24 md:px-12 lg:px-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[130px]" />

      {/* Floating sparkles */}
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3], rotate: [0, 25, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute left-[10%] top-36 text-cyan-300"
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="pointer-events-none absolute right-[12%] top-80 text-violet-300"
      >
        <Sparkles size={17} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-5 py-2 text-xs font-semibold tracking-[3px] text-cyan-300 backdrop-blur-xl">
            <Sparkles size={14} />
            04 / WHAT I CAN DO
          </div>

          <div className="mt-7 grid items-end gap-6 lg:grid-cols-2">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Turning Ideas
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Into Reality.
              </span>
            </h2>

            <p className="max-w-lg text-sm leading-8 text-slate-400 md:text-base">
              Transforming business challenges into meaningful digital
              experiences through modern web technologies, scalable
              application architecture and innovative development.
            </p>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.09 }}
                whileHover={{ y: -7, scale: 1.015 }}
                className={`group relative isolate overflow-hidden rounded-[23px] border border-white/10 bg-[#09182b]/45 shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-2xl transition-all duration-500 ${service.border}`}
              >
                {/* Individual card gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${service.gradient} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: service.glow }}
                />

                {/* Top sparkle */}
                <motion.div
                  animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.1, 0.8] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="pointer-events-none absolute right-5 top-5"
                  style={{ color: service.accent }}
                >
                  <Sparkles size={15} />
                </motion.div>

                <div className="relative z-10 p-5 sm:p-6">

                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[3px] text-slate-500">
                      SERVICE / {service.id}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      style={{ color: service.accent }}
                    />
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6 mt-7 h-14 w-14">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: service.glow }}
                    />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.055] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:scale-110">
                      <Icon
                        size={27}
                        strokeWidth={1.5}
                        style={{
                          color: service.accent,
                          filter: `drop-shadow(0 0 7px ${service.accent})`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <p
                    className="text-[9px] font-semibold tracking-[2px]"
                    style={{ color: service.accent }}
                  >
                    {service.subtitle}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-100">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[78px] text-xs leading-6 text-slate-400 sm:text-[13px]">
                    {service.description}
                  </p>

                  {/* Technology tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[9px] font-medium text-slate-300 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.07]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Neon underline */}
                  <div className="relative mt-6 h-px overflow-hidden bg-white/10">
                    <motion.div
                      className="absolute inset-y-0 left-0 w-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${service.accent}, white, transparent)`,
                        boxShadow: `0 0 10px ${service.accent}`,
                      }}
                      whileHover={{ width: "100%" }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${service.accent}, white, transparent)`,
                        boxShadow: `0 0 10px ${service.accent}`,
                      }}
                    />
                  </div>

                  {/* Contact link */}
                  <a
                    href="#contact"
                    className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-300 transition-colors duration-300 group-hover:text-cyan-200"
                  >
                    Discuss a project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Bottom corner glow */}
                <div
                  className="pointer-events-none absolute -bottom-12 -left-12 h-28 w-28 rounded-full opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: service.glow }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Development process */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-[4px] text-cyan-300">
              MY WORKFLOW
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              From Concept
              <span className="text-cyan-300"> To Creation.</span>
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              A structured development approach focused on quality,
              collaboration and delivering practical results.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <span className="absolute right-4 top-2 text-5xl font-bold text-white/[0.035]">
                    {step.number}
                  </span>

                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]"
                    style={{ boxShadow: `0 0 22px ${step.glow}` }}
                  >
                    <Icon size={22} className={step.color} />
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    {step.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[2px] text-slate-600">
                      PROCESS STEP
                    </span>
                    <CheckCircle2 size={15} className={step.color} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative mt-20 overflow-hidden rounded-[26px] border border-cyan-300/20 bg-[#09182b]/50 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.15)] backdrop-blur-2xl md:p-11"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-violet-400/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[3px] text-cyan-300">
                <Rocket size={15} />
                HAVE A PROJECT IN MIND?
              </div>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                Let's Build Something
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Extraordinary.
                </span>
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                Have an idea or a business challenge? Let's collaborate
                and turn it into a powerful digital solution.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              Start a Project
              <ArrowUpRight size={19} />
            </a>
          </div>

          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], rotate: [0, 45, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="pointer-events-none absolute right-8 top-8 text-cyan-300"
          >
            <Sparkles size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
