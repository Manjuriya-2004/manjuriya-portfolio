
"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  GraduationCap,
  MapPin,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Star,
  Zap,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Building scalable backend applications and business logic.",
    skills: ["Python", "Django", "Flask"],
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "group-hover:border-cyan-300/60",
    glow: "bg-cyan-400/20",
  },
  {
    icon: Layers3,
    title: "Frontend Development",
    description: "Creating modern, responsive and interactive interfaces.",
    skills: ["React JS", "Next.js"],
    color: "text-violet-300",
    bg: "bg-violet-400/10",
    border: "group-hover:border-violet-300/60",
    glow: "bg-violet-400/20",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description: "Designing structured and efficient database systems.",
    skills: ["MySQL", "PostgreSQL"],
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-300/60",
    glow: "bg-emerald-400/20",
  },
  {
    icon: ShieldCheck,
    title: "API Development",
    description: "Developing secure APIs and authentication workflows.",
    skills: ["REST API", "JWT"],
    color: "text-orange-300",
    bg: "bg-orange-400/10",
    border: "group-hover:border-orange-300/60",
    glow: "bg-orange-400/20",
  },
];

const technologies = [
  "Python",
  "Django",
  "Flask",
  "React JS",
  "Next.js",
  "JavaScript",
  "REST APIs",
  "JWT",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
];

const particles = [
  { top: "12%", left: "8%" },
  { top: "28%", left: "92%" },
  { top: "68%", left: "5%" },
  { top: "84%", left: "88%" },
  { top: "45%", left: "48%" },
  { top: "18%", left: "65%" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

function GlassCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
      }}
      className={`group relative isolate overflow-hidden
      rounded-2xl border border-white/10
      bg-white/[0.035] backdrop-blur-2xl
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_12px_35px_rgba(0,0,0,0.15)]
      hover:bg-white/[0.065]
      hover:shadow-[0_0_18px_rgba(34,211,238,0.12),0_18px_40px_rgba(0,0,0,0.2)]
      transition-all duration-300 ${className}`}
    >
      {/* Hover glow */}
      <div
        className="absolute -top-20 -right-16
        w-44 h-44 rounded-full bg-cyan-400/10
        blur-[75px] opacity-0 group-hover:opacity-100
        transition-opacity duration-500 pointer-events-none"
      />

      {/* Corner sparkle */}
      <motion.div
        className="absolute top-4 right-4 z-20
        text-cyan-300 pointer-events-none"
        initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
        whileHover={{ opacity: 1, scale: 1, rotate: 45 }}
      >
        <Sparkles size={17} />
      </motion.div>

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-[15%] h-[2px]
        rounded-full pointer-events-none z-20
        bg-gradient-to-r from-transparent
        via-cyan-300 to-blue-500
        shadow-[0_0_10px_#22d3ee,0_0_18px_#3b82f6]"
        initial={{ width: "0%", opacity: 0 }}
        whileHover={{ width: "70%", opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative px-5 md:px-12 py-20 md:py-24 overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.23, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-0
          w-80 h-80 rounded-full
          bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0
          w-96 h-96 rounded-full
          bg-violet-500/20 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2
          w-72 h-72 rounded-full
          bg-blue-500/[0.06] blur-[110px]"
        />

        {/* TWINKLING PARTICLES */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-300"
            style={{
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.6, 1.4, 0.6],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 3,
              delay: index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star size={index % 2 === 0 ? 11 : 8} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-cyan-400" />

            <p className="text-cyan-300 tracking-[4px] text-xs font-semibold">
              01 / ABOUT ME
            </p>

            <motion.span
              animate={{
                rotate: [0, 180, 360],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-violet-300" />
            </motion.span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Person Behind
            <span
              className="block text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
            >
              The Code.
            </span>
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl text-sm md:text-base leading-7">
            A little introduction to my passion, technical interests
            and approach to building meaningful digital experiences.
          </p>
        </motion.div>

        {/* INTRODUCTION CARDS */}
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5">

          {/* ABOUT MYSELF */}
          <GlassCard className="p-6 md:p-7 border-cyan-300/20">

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-cyan-400/10
              border border-cyan-300/20">
                <UserRound size={21} className="text-cyan-300" />
              </div>

              <span className="text-xs tracking-[3px] text-cyan-200">
                WHO AM I?
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-300 to-blue-400">
                Manjuriya Karthik.
              </span>
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-7 mt-4">
              I'm a Python Full-Stack Developer passionate about
              transforming ideas into functional and engaging
              web applications.
            </p>

            <p className="text-slate-400 text-sm leading-7 mt-3">
              I enjoy working across frontend and backend
              technologies, solving development challenges
              and building applications that deliver real value.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-6">

              <div className="flex items-center gap-2 rounded-full
              px-3 py-2 bg-cyan-400/10 border border-cyan-300/20">
                <MapPin size={14} className="text-cyan-300" />
                <span className="text-xs text-slate-200">
                  Krishnagiri, India
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full
              px-3 py-2 bg-emerald-400/10 border border-emerald-300/20">
                <span className="w-2 h-2 rounded-full
                bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-200">
                  Open to Opportunities
                </span>
              </div>

            </div>
          </GlassCard>

          {/* DEVELOPER IDENTITY */}
          <GlassCard className="p-6 md:p-7 border-violet-300/20">

            <div className="flex items-center justify-between">
              <motion.div
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={22} className="text-violet-300" />
              </motion.div>

              <span className="text-[10px] tracking-widest text-slate-500">
                DEVELOPER IDENTITY
              </span>
            </div>

            <div className="mt-7">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(99,102,241,0.15)",
                    "0 0 35px rgba(99,102,241,0.4)",
                    "0 0 15px rgba(99,102,241,0.15)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-14 h-14 rounded-xl
                bg-gradient-to-br from-cyan-300
                via-blue-500 to-violet-600
                flex items-center justify-center"
              >
                <Terminal size={28} className="text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mt-5">
                Full-Stack Developer
              </h3>

              <p className="text-slate-400 text-xs md:text-sm mt-2 leading-6">
                From backend architecture to modern user interfaces,
                building complete digital solutions.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-[10px] text-slate-500 tracking-widest mb-3">
                MY DEVELOPMENT MINDSET
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Build", color: "text-cyan-200 bg-cyan-400/10 border-cyan-300/20" },
                  { name: "Solve", color: "text-violet-200 bg-violet-400/10 border-violet-300/20" },
                  { name: "Improve", color: "text-emerald-200 bg-emerald-400/10 border-emerald-300/20" },
                  { name: "Innovate", color: "text-orange-200 bg-orange-400/10 border-orange-300/20" },
                ].map((item, index) => (
                  <motion.span
                    key={item.name}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                    }}
                    className={`text-[11px] px-3 py-1.5 rounded-lg border ${item.color}`}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* EXPERTISE */}
        <div className="mt-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7"
          >
            <p className="text-cyan-300 text-xs tracking-[4px]">
              WHAT I DO
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-3">
              My Areas of{" "}
              <span className="text-cyan-300">Focus.</span>
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <GlassCard
                  key={item.title}
                  delay={index * 0.12}
                  className={`p-5 ${item.border}`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.35, 1],
                      opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.4,
                      repeat: Infinity,
                    }}
                    className={`absolute -top-10 -right-10
                    w-28 h-28 ${item.glow}
                    blur-3xl rounded-full pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-xl
                    ${item.bg} border border-white/10
                    flex items-center justify-center`}>
                      <Icon size={21} className={item.color} />
                    </div>

                    <h4 className="font-bold text-sm md:text-base mt-5">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-400
                    leading-6 mt-2 min-h-[48px]">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-[10px] px-2 py-1
                          rounded-md ${item.bg} ${item.color}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* TECHNOLOGY TOOLKIT */}
        <GlassCard className="mt-12 p-5 md:p-6 border-cyan-200/15">

          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-cyan-300 text-[10px] tracking-[3px]">
                MY TECH STACK
              </p>

              <h3 className="text-xl font-bold mt-2">
                Technologies I Work With
              </h3>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Zap size={25} className="text-cyan-300" />
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`rounded-lg px-3 py-2 text-xs
                border transition-colors duration-300
                ${
                  index % 4 === 0
                    ? "text-cyan-200 bg-cyan-400/10 border-cyan-300/20"
                    : index % 4 === 1
                    ? "text-violet-200 bg-violet-400/10 border-violet-300/20"
                    : index % 4 === 2
                    ? "text-emerald-200 bg-emerald-400/10 border-emerald-300/20"
                    : "text-sky-200 bg-blue-400/10 border-blue-300/20"
                }`}
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </GlassCard>

        {/* EDUCATION */}
        <GlassCard className="mt-4 p-5 border-violet-300/15">

          <div className="flex flex-wrap items-center gap-4">
            <div className="w-11 h-11 rounded-xl
            bg-violet-400/10 flex items-center justify-center">
              <GraduationCap size={23} className="text-violet-300" />
            </div>

            <div className="flex-1 min-w-[160px]">
              <p className="text-[10px] text-violet-300 tracking-widest">
                EDUCATION
              </p>

              <h4 className="text-base font-bold mt-1">
                B.Sc Computer Science
              </h4>

              <p className="text-xs text-slate-400 mt-1">
                Bharathidasan University
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2
              text-xs font-semibold text-cyan-300
              hover:text-white transition-colors"
            >
              Let's Connect
              <ArrowUpRight size={16} />
            </a>
          </div>
        </GlassCard>

      </div>
    </section>
  );
}
