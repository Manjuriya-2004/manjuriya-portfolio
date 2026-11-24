
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Globe,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const contactItems = [
  {
    icon: Mail,
    title: "Email Address",
    value: "Add your email",
    detail: "Let's discuss your ideas",
    color: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/20",
    border: "group-hover:border-cyan-400/40",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "Add your phone number",
    detail: "Available for conversations",
    color: "from-violet-400 to-purple-500",
    glow: "group-hover:shadow-purple-500/20",
    border: "group-hover:border-purple-400/40",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tamil Nadu, India",
    detail: "Open to opportunities",
    color: "from-emerald-400 to-teal-500",
    glow: "group-hover:shadow-emerald-500/20",
    border: "group-hover:border-emerald-400/40",
  },
];

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    color: "hover:text-white hover:border-white/40",
    glow: "hover:shadow-white/10",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "hover:text-blue-300 hover:border-blue-400/50",
    glow: "hover:shadow-blue-500/20",
  },
];

const inputStyle =
  "w-full rounded-2xl border border-white/[0.10] bg-[#071426]/60 px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-400/60 focus:bg-cyan-400/[0.04] focus:ring-4 focus:ring-cyan-400/[0.07]";

export default function Contact() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Contact form submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/contact/submit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.detail ||
          data.name?.[0] ||
          data.email?.[0] ||
          data.subject?.[0] ||
          data.message?.[0] ||
          "Unable to send your message. Please try again.";

        throw new Error(errorMessage);
      }

      setFormStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      form.reset();
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 md:px-12 md:py-32 lg:px-20"
    >
      {/* Ambient background lights */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[120px]" />

      {/* Floating sparkle particles */}
      {[
        "left-[9%] top-[13%]",
        "left-[28%] top-[36%]",
        "right-[12%] top-[17%]",
        "right-[30%] top-[55%]",
        "left-[15%] bottom-[15%]",
        "right-[8%] bottom-[12%]",
      ].map((position, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute ${position} text-cyan-300/70`}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.6, 1.4, 0.6],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 2.5 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.5,
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group relative mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-6 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-violet-400/10 opacity-0 transition group-hover:opacity-100" />
            <MessageCircle size={16} className="relative text-cyan-300" />
            <span className="relative text-sm font-medium tracking-wide text-cyan-200">
              Let's Connect
            </span>
            <Sparkles size={14} className="relative text-violet-300" />
          </motion.div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Let's Build Something
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Amazing Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project in mind, an opportunity, or just want to say hello?
            Let's turn your ideas into something extraordinary.
          </p>
        </motion.div>

        <div className="grid items-start gap-7 lg:grid-cols-5">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Contact information glass card */}
            <div className="group/panel relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-gradient-to-br from-white/[0.09] via-white/[0.035] to-white/[0.015] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-300/20 sm:p-7">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/[0.10] blur-[80px] transition duration-700 group-hover/panel:bg-cyan-400/[0.16]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-[70px]" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                    <Globe size={21} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Contact Information
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Let's start a conversation
                    </p>
                  </div>
                </div>

                <p className="mb-7 text-sm leading-7 text-slate-400">
                  Feel free to reach out. I'd love to hear about your projects,
                  ideas, and exciting opportunities.
                </p>

                <div className="space-y-4">
                  {contactItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                        whileHover={{ x: 5, scale: 1.015 }}
                        className={`group/item relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 shadow-lg backdrop-blur-xl transition-all duration-300 ${item.border} ${item.glow}`}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.04] to-transparent opacity-0 transition duration-300 group-hover/item:opacity-100" />

                        <div className={`relative shrink-0 rounded-xl bg-gradient-to-br ${item.color} p-3 text-white shadow-lg`}>
                          <Icon size={20} />
                        </div>

                        <div className="relative min-w-0 flex-1">
                          <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                            {item.title}
                          </p>
                          <p className="mt-1 break-words text-sm font-semibold text-slate-100">
                            {item.value}
                          </p>
                          <p className="mt-1 text-[11px] text-slate-500">
                            {item.detail}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="relative shrink-0 text-slate-600 transition duration-300 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:text-cyan-300"
                        />

                        <motion.span
                          className="pointer-events-none absolute right-3 top-3 text-cyan-200"
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: index * 0.6,
                          }}
                        >
                          <Sparkles size={12} />
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="group/social relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-xl backdrop-blur-2xl transition duration-500 hover:border-violet-300/25">
              <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-[70px]" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      Connect With Me
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Find me on social platforms
                    </p>
                  </div>
                  <Sparkles size={19} className="text-violet-300" />
                </div>

                <div className="flex gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        whileHover={{ y: -5, scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-300 shadow-lg transition-all duration-300 ${social.color} ${social.glow}`}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.07] to-violet-400/[0.07] opacity-0 transition group-hover:opacity-100" />
                        <Icon size={21} className="relative" />
                        <span className="relative text-sm font-medium">
                          {social.label}
                        </span>
                        {index === 0 && (
                          <Sparkles
                            size={11}
                            className="absolute right-2 top-2 text-cyan-300 opacity-0 transition group-hover:opacity-100"
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="group/form relative rounded-[2rem] p-[1px]">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/40 via-violet-500/20 to-blue-400/40 opacity-70 blur-[1px] transition duration-500 group-hover/form:opacity-100" />

              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#081426]/85 p-6 shadow-[0_25px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 md:p-10"
              >
                {/* Form ambient glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/[0.10] blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-violet-500/[0.10] blur-[90px]" />

                {/* Top decorative line */}
                <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

                <div className="relative">
                  <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-cyan-300">
                        <Zap size={17} />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                          Get In Touch
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        Send Me a Message
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Have something in mind? Let's talk.
                      </p>
                    </div>

                    <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.10)] sm:flex">
                      <Send size={23} />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-slate-300">
                        Your Name
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className="mb-2.5 block text-sm font-medium text-slate-300">
                        Your Email
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-2.5 block text-sm font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      className={inputStyle}
                    />
                  </div>

                  <div className="mt-5">
                    <label className="mb-2.5 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      className={`${inputStyle} min-h-[145px] resize-none`}
                    />
                  </div>

                  {/* Success / Error Message */}
                  {formStatus && (
                    <div
                      role="status"
                      className={`mt-5 rounded-xl border p-4 text-sm ${
                        formStatus.type === "success"
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                          : "border-red-400/30 bg-red-400/10 text-red-300"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={
                      isSubmitting ? undefined : { scale: 1.015 }
                    }
                    whileTap={
                      isSubmitting ? undefined : { scale: 0.98 }
                    }
                    className="group/button relative mt-7 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-4 font-semibold text-white shadow-[0_10px_35px_rgba(6,182,212,0.20)] transition-all duration-500 hover:shadow-[0_10px_45px_rgba(59,130,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                    <span className="relative">
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </span>

                    <Send
                      size={18}
                      className="relative transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                    />

                    <Sparkles
                      size={14}
                      className="absolute right-5 top-3 text-white/70 opacity-0 transition group-hover/button:opacity-100"
                    />
                  </motion.button>

                  <p className="mt-4 text-center text-xs text-slate-500">
                    Your ideas deserve a great conversation.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-center md:flex-row md:text-left"
        >
          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear ?? ""} Manjuriya. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
            Designed with
            <motion.span
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="text-lg text-cyan-300"
            >
              ✦
            </motion.span>
            and creativity
            <ArrowUpRight size={15} className="text-cyan-300" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
