
"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Search,
  PencilRuler,
  Code2,
  Send,
  Sparkles,
  CheckCircle2,
  Workflow,
  Lightbulb,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Project Kickoff",
    description:
      "We define the vision, goals, and project requirements to build a strong foundation for success.",
    icon: Rocket,
    color: "blue",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.35)",
    side: "left",
  },
  {
    number: "02",
    title: "Research & Planning",
    description:
      "I analyze requirements, explore possibilities, and plan every detail to create a clear development roadmap.",
    icon: Search,
    color: "cyan",
    gradient: "from-cyan-400 to-teal-400",
    glow: "rgba(34,211,238,0.35)",
    side: "right",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "I craft intuitive interfaces, modern layouts, and interactive prototypes to transform ideas into meaningful experiences.",
    icon: PencilRuler,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.4)",
    side: "left",
  },
  {
    number: "04",
    title: "Development",
    description:
      "I build robust, scalable, and responsive applications using modern frontend and backend technologies with clean code.",
    icon: Code2,
    color: "indigo",
    gradient: "from-indigo-400 to-blue-500",
    glow: "rgba(99,102,241,0.35)",
    side: "right",
  },
  {
    number: "05",
    title: "Launch & Beyond",
    description:
      "I test, optimize, and launch the final solution while focusing on performance, reliability, and continuous improvement.",
    icon: Send,
    color: "pink",
    gradient: "from-pink-500 to-violet-500",
    glow: "rgba(217,70,239,0.35)",
    side: "left",
  },
];

const particles = [
  "left-[8%] top-[12%]",
  "right-[10%] top-[18%]",
  "left-[16%] top-[42%]",
  "right-[14%] top-[55%]",
  "left-[9%] bottom-[12%]",
  "right-[8%] bottom-[10%]",
  "left-[48%] top-[8%]",
];

export default function MyWorkflow() {
  return (
    <section
      id="workflow"
      className="relative isolate overflow-hidden bg-[#050817] px-5 py-24 sm:px-8 md:px-12 md:py-32 lg:px-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-700/15 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-purple-700/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Tiny floating particles */}
      {particles.map((position, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute ${position} text-cyan-200/70`}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.6, 1.4, 0.6],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 2.5 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.35,
          }}
        >
          <Sparkles size={index % 2 === 0 ? 17 : 11} />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/[0.08] px-6 py-2.5 shadow-[0_0_30px_rgba(59,130,246,0.12)] backdrop-blur-xl">
            <Workflow size={16} className="text-cyan-300" />
            <span className="text-sm font-medium tracking-wide text-blue-200">
              How I Work
            </span>
            <Sparkles size={14} className="text-purple-300" />
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            My Creative
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Workflow.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Every great product starts with an idea. Here's how I transform
            concepts into powerful, user-friendly digital experiences through
            a structured and creative development process.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          {/* Central timeline - desktop */}
          <div className="absolute bottom-12 left-1/2 top-12 hidden w-px -translate-x-1/2 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 opacity-70 md:block" />

          {/* Timeline glow */}
          <div className="pointer-events-none absolute bottom-12 left-1/2 top-12 hidden w-4 -translate-x-1/2 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl md:block" />

          <div className="space-y-9 md:space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -45 : 45,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.08,
                  }}
                  className={`relative grid items-center gap-5 md:grid-cols-2 md:gap-16 ${
                    isLeft ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-7 z-20 hidden -translate-x-1/2 md:left-1/2 md:flex">
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 8px ${step.glow}`,
                          `0 0 28px ${step.glow}`,
                          `0 0 8px ${step.glow}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-[#090e21]`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-gradient-to-r ${step.gradient} shadow-[0_0_15px_${step.glow}]`}
                      />
                    </motion.div>
                  </div>

                  {/* Timeline card */}
                  <div
                    className={`group relative ${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    {/* Connector */}
                    <div
                      className={`absolute top-12 hidden h-px w-16 bg-gradient-to-r ${step.gradient} opacity-50 md:block ${
                        isLeft ? "-right-16" : "-left-16"
                      }`}
                    />

                    <motion.div
                      whileHover={{
                        y: -7,
                        scale: 1.015,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                      }}
                      className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.11] bg-gradient-to-br from-white/[0.09] via-white/[0.045] to-white/[0.015] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:border-white/25 sm:p-7"
                    >
                      {/* Card glow */}
                      <div
                        className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-20 blur-[85px] transition-all duration-700 group-hover:opacity-50"
                        style={{ backgroundColor: step.glow }}
                      />

                      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-500/[0.05] blur-[70px]" />

                      {/* Top sparkle */}
                      <motion.div
                        className="absolute right-5 top-5 text-white/70"
                        animate={{
                          opacity: [0.2, 1, 0.2],
                          rotate: [0, 45, 0],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: index * 0.4,
                        }}
                      >
                        <Sparkles size={17} />
                      </motion.div>

                      <div className="relative flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-[0_8px_30px_${step.glow}] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                        >
                          <Icon size={25} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                              Step {step.number}
                            </span>
                            <span
                              className={`h-px w-8 bg-gradient-to-r ${step.gradient}`}
                            />
                          </div>

                          <h3 className="text-lg font-bold text-white sm:text-xl">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          Project Journey
                        </span>

                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          >
                            <Sparkles size={13} className="text-cyan-300" />
                          </motion.div>
                          <span className="text-xs font-medium text-slate-400">
                            {step.number} / 05
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty opposite side */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 overflow-hidden rounded-[2rem] border border-purple-400/20 bg-gradient-to-r from-blue-500/[0.09] via-purple-500/[0.09] to-cyan-500/[0.09] p-8 text-center shadow-[0_15px_70px_rgba(124,58,237,0.08)] backdrop-blur-2xl sm:p-12"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/15 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-400/10 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <Lightbulb size={27} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
              From Vision to Reality.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              My goal is simple: turn complex ideas into elegant, efficient,
              and meaningful digital solutions through creativity and
              technology.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-5 py-2.5 text-sm font-medium text-cyan-200">
              <CheckCircle2 size={16} />
              A Process Built for Quality
              <Sparkles size={14} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
