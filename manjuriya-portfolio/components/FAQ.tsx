
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sparkles,
  HelpCircle,
  Code2,
  BriefcaseBusiness,
  Rocket,
  ChevronDown,
  MessageCircle,
  Zap,
  Lightbulb,
} from "lucide-react";

const faqGroups = [
  {
    category: "Development",
    icon: Code2,
    color: "text-cyan-300",
    gradient: "from-cyan-400 to-blue-500",
    border: "border-cyan-400/30",
    questions: [
      {
        question: "What technologies do you work with?",
        answer:
          "I work with Python, Django, Django REST Framework, React.js, Next.js, JavaScript, Tailwind CSS, MySQL, PostgreSQL, and other modern web development technologies.",
      },
      {
        question: "Do you develop full-stack applications?",
        answer:
          "Yes! I work on both frontend and backend development, including responsive user interfaces, server-side logic, REST APIs, database integration, and authentication.",
      },
      {
        question: "Can you build custom web applications?",
        answer:
          "Absolutely. I can develop customized web applications based on project requirements, business workflows, user needs, and technical specifications.",
      },
    ],
  },
  {
    category: "Projects & Services",
    icon: BriefcaseBusiness,
    color: "text-violet-300",
    gradient: "from-violet-400 to-purple-500",
    border: "border-violet-400/30",
    questions: [
      {
        question: "What kind of projects can you develop?",
        answer:
          "I can work on business websites, admin dashboards, learning management systems, e-commerce applications, REST API solutions, and custom full-stack applications.",
      },
      {
        question: "Can you integrate frontend with backend APIs?",
        answer:
          "Yes. I can connect frontend applications with backend REST APIs, handle data communication, implement authentication flows, and manage application state.",
      },
      {
        question: "Do you work on existing projects?",
        answer:
          "Yes. I can understand existing codebases, identify issues, add requested features, integrate APIs, and improve functionality while preserving existing project structure.",
      },
    ],
  },
  {
    category: "Collaboration",
    icon: Rocket,
    color: "text-emerald-300",
    gradient: "from-emerald-400 to-teal-500",
    border: "border-emerald-400/30",
    questions: [
      {
        question: "Are you open to new opportunities?",
        answer:
          "I'm interested in exploring opportunities where I can contribute my development skills, collaborate with talented teams, and continue growing professionally.",
      },
      {
        question: "Are you available for freelance projects?",
        answer:
          "I'm open to discussing suitable freelance projects and collaborations. You can share your requirements through the contact section.",
      },
      {
        question: "How can I discuss a project with you?",
        answer:
          "Simply visit the Contact section and send your project details, requirements, or questions. We can discuss the scope and possible approach.",
      },
    ],
  },
];

const particles = [
  "left-[8%] top-[12%]",
  "right-[12%] top-[20%]",
  "left-[15%] top-[52%]",
  "right-[8%] top-[65%]",
  "left-[10%] bottom-[12%]",
  "right-[18%] bottom-[10%]",
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Development");
  const [activeQuestion, setActiveQuestion] = useState<string | null>("0-0");

  const selectedGroup = faqGroups.find(
    (group) => group.category === activeCategory
  );

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#050817] px-5 py-24 sm:px-8 md:px-12 md:py-32 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[130px]" />

      {/* Sparkles */}
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
            delay: index * 0.4,
          }}
        >
          <Sparkles size={index % 2 === 0 ? 17 : 11} />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-400/[0.08] px-6 py-2.5 shadow-[0_0_30px_rgba(168,85,247,0.10)] backdrop-blur-xl">
            <HelpCircle size={16} className="text-purple-300" />
            <span className="text-sm font-medium tracking-wide text-purple-200">
              Frequently Asked Questions
            </span>
            <Sparkles size={14} className="text-cyan-300" />
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Got Questions?
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              I've Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Everything you might want to know about my skills, development
            process, services, and collaboration opportunities.
          </p>
        </motion.div>

        {/* FAQ main glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-gradient-to-br from-white/[0.075] via-white/[0.035] to-white/[0.015] p-5 shadow-[0_25px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 md:p-10"
        >
          {/* Panel ambient glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

          <div className="relative">
            {/* Category heading */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Explore Questions
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Choose a category to find answers
                </p>
              </div>
            </div>

            {/* Category tabs */}
            <div className="mb-9 flex flex-wrap gap-3">
              {faqGroups.map((group) => {
                const Icon = group.icon;
                const isActive = activeCategory === group.category;

                return (
                  <motion.button
                    key={group.category}
                    type="button"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      setActiveCategory(group.category);
                      setActiveQuestion(null);
                    }}
                    className={`relative flex items-center gap-2 overflow-hidden rounded-xl border px-4 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                      isActive
                        ? `bg-gradient-to-r ${group.gradient} border-white/20 text-white shadow-lg`
                        : "border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    {group.category}
                    {isActive && (
                      <Sparkles size={13} className="ml-1 text-white/80" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Questions */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {selectedGroup?.questions.map((item, index) => {
                    const id = `${faqGroups.findIndex(
                      (group) => group.category === activeCategory
                    )}-${index}`;

                    const isOpen = activeQuestion === id;

                    return (
                      <motion.div
                        key={id}
                        layout
                        className={`group relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                          isOpen
                            ? `${selectedGroup.border} bg-white/[0.075] shadow-[0_10px_40px_rgba(0,0,0,0.2)]`
                            : "border-white/[0.08] bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]"
                        }`}
                      >
                        {/* Active glow */}
                        {isOpen && (
                          <motion.div
                            layoutId="faqGlow"
                            className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-purple-400/10 blur-[65px]"
                          />
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            setActiveQuestion(isOpen ? null : id)
                          }
                          aria-expanded={isOpen}
                          className="relative flex w-full items-center gap-4 p-5 text-left sm:p-6"
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold transition-all duration-300 ${
                              isOpen
                                ? `border-white/20 bg-gradient-to-br ${selectedGroup.gradient} text-white`
                                : "border-white/10 bg-white/[0.05] text-slate-400"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <span
                            className={`flex-1 text-sm font-semibold leading-6 transition-colors sm:text-base ${
                              isOpen ? "text-white" : "text-slate-300"
                            }`}
                          >
                            {item.question}
                          </span>

                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                              isOpen
                                ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-300"
                                : "border-white/10 bg-white/[0.04] text-slate-400"
                            }`}
                          >
                            <ChevronDown size={18} />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.35,
                                ease: "easeInOut",
                              }}
                              className="relative overflow-hidden"
                            >
                              <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:mx-6" />

                              <div className="flex gap-3 px-5 pb-6 pt-5 sm:px-6">
                                <Sparkles
                                  size={17}
                                  className="mt-1 shrink-0 text-cyan-300"
                                />
                                <p className="text-sm leading-7 text-slate-400">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/[0.08] via-blue-500/[0.08] to-purple-500/[0.09] p-7 text-center shadow-[0_15px_60px_rgba(59,130,246,0.08)] backdrop-blur-2xl sm:p-9"
        >
          <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-purple-500/10 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <Lightbulb size={23} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Have something else in mind? I'd be happy to hear from you.
              Let's connect and explore new possibilities.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.08] px-6 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/[0.15] hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
            >
              Let's Talk
              <Zap
                size={16}
                className="transition-transform group-hover:scale-125"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
