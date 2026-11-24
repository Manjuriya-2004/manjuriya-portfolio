
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers3,
  ArrowUpRight,
  Sparkles,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const floatingCards = [
  {
    icon: Code2,
    title: "Backend Engineering",
    subtitle: "Python · Django · Flask",
    className: "top-8 -left-8",
    delay: 0.3,
  },
  {
    icon: Database,
    title: "Database Management",
    subtitle: "MySQL · PostgreSQL",
    className: "top-48 -right-8",
    delay: 0.5,
  },
  {
    icon: Layers3,
    title: "Frontend Development",
    subtitle: "React · Next.js",
    className: "bottom-2 -left-2",
    delay: 0.7,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center
      px-6 md:px-12 pt-32 pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] bg-sky-500/10
          rounded-full blur-[130px] top-10 right-0"
        />

        <div
          className="absolute w-[400px] h-[400px] bg-blue-600/10
          rounded-full blur-[130px] bottom-0 left-0"
        />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,211,252,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.5) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto w-full
        grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Availability Badge */}
          <div
            className="inline-flex items-center gap-2 glass
            rounded-full px-4 py-2 mb-8"
          >
            <span
              className="w-2 h-2 rounded-full bg-sky-400
              animate-pulse"
            />
            <span className="text-sky-200 text-sm">
              Open to New Opportunities
            </span>
          </div>

          <p className="text-slate-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1
            className="text-5xl md:text-7xl font-bold
            leading-tight tracking-tight"
          >
            Manjuriya
            
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-200 mt-7 font-semibold">
            Python Full-Stack Developer
          </h2>

          <p className="text-sky-300 text-sm font-medium mt-3">
            Building Digital Experiences. Engineering Solutions.
          </p>

          <p className="text-slate-400 leading-8 mt-5 max-w-xl">
            Passionate about designing and developing scalable web
            applications and efficient backend solutions. I work
            across the full development lifecycle, transforming
            ideas into responsive, user-focused digital products
            using Python, Django, React and Next.js.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-sky-400
              text-slate-950 font-bold px-7 py-4 rounded-xl
              hover:bg-sky-300
              hover:shadow-[0_0_35px_rgba(56,189,248,.35)]
              hover:-translate-y-1 transition-all duration-300"
            >
              View My Projects
              <ArrowUpRight size={19} />
            </a>

            <a
              href="#contact"
              className="glass px-7 py-4 rounded-xl
              text-sky-100 hover:border-sky-300
              hover:-translate-y-1 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-10">
            <a
              href="https://github.com/Manjuriya-2004"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-sky-300
              hover:scale-110 transition-all"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/manjuriya-karthik"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-sky-300
              hover:scale-110 transition-all"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE VISUAL */}
        <div
  className="relative h-[420px] md:h-[520px] flex
  items-center justify-center mt-10 lg:mt-0"
>
          {/* Profile Glow */}
          <div
            className="absolute w-[340px] h-[400px]
            rounded-full bg-sky-500/20 blur-[100px]"
          />

          {/* Main Profile Card */}
          <motion.div
            className="relative w-[250px] h-[320px]
sm:w-[280px] sm:h-[350px]
md:w-[310px] md:h-[390px]
rounded-[35px] p-3 glass
border border-sky-300/30
shadow-[0_0_60px_rgba(56,189,248,0.15)]"
          >
            <div
              className="relative w-full h-full overflow-hidden
              rounded-[27px] border border-white/10"
            >
              <Image
  src="/images/profile.jpg"
  alt="Manjuriya Karthik - Python Full-Stack Developer"
  fill
  priority
  sizes="310px"
  className="object-cover object-center"
/>

              {/* Image Overlay */}
              <div
                className="absolute inset-0
                bg-gradient-to-t from-[#06152e] via-transparent
                to-transparent opacity-80"
              />

              {/* Profile Details */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 rounded-full
                    bg-emerald-400 animate-pulse"
                  />
                  <span className="text-xs text-sky-100">
                    Available for Opportunities
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Manjuriya Karthik
                </h3>

                <p className="text-sky-200 text-sm mt-1">
                  Python Full-Stack Developer
                </p>
              </div>
            </div>

            <Sparkles
              className="absolute -top-4 -right-4
              text-sky-300"
              size={28}
            />
          </motion.div>

          {/* Floating Technology Cards */}
          {floatingCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -9, 0],
                }}
                transition={{
                  delay: card.delay,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className={`absolute ${card.className}
                glass rounded-2xl p-4 z-10
                border border-sky-200/20`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-sky-400/15 p-3 rounded-xl">
                    <Icon className="text-sky-300" size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {card.title}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
