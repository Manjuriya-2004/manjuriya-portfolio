
"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  {name: "Contact", href: "#contact"}
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50
      w-[94%] max-w-7xl rounded-2xl px-6 py-4
      bg-[#05080F]/95 backdrop-blur-2xl
      border border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <a
           href="#home"
  className="navbar-name text-2xl font-bold tracking-wider transition-all duration-300"
>
  Manjuriya<span className="navbar-sparkle">✦</span>
  <span className="text-cyan-300">.</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link group relative overflow-hidden
              px-4 py-3 rounded-xl text-sm font-semibold
              text-white/80 transition-all duration-300
              hover:text-cyan-300 hover:bg-cyan-400/[0.06]"
            >
              {link.name}

              {/* NEON UNDERLINE */}
              <span
                className="nav-underline absolute bottom-1 left-4 right-4
                h-[2px] origin-left scale-x-0
                rounded-full opacity-0
                bg-gradient-to-r from-transparent
                via-cyan-300 to-blue-500
                shadow-[0_0_8px_#22d3ee,0_0_18px_#3b82f6]
                transition-all duration-500 ease-out
                group-hover:scale-x-100
                group-hover:opacity-100"
              />

              {/* TWINKLING LIGHT */}
              <span
                className="nav-sparkle pointer-events-none
                absolute bottom-[3px] left-4
                h-[3px] w-5 rounded-full
                bg-white opacity-0 blur-[2px]"
              />
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2
          rounded-full px-6 py-3
          bg-gradient-to-r from-cyan-400 to-blue-500
          text-slate-950 font-bold
          hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
          hover:-translate-y-1 transition-all duration-300"
        >
          Let's Talk
          <ArrowUpRight size={18} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white
          hover:text-cyan-300 transition-colors"
          aria-label="Toggle navigation"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-5 pt-5 pb-3
          border-t border-white/10 flex flex-col gap-2"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3
              text-white/80 font-medium
              hover:text-cyan-300 hover:bg-cyan-400/10
              transition-all"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2
            rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500
            px-5 py-3 font-bold text-slate-950"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
