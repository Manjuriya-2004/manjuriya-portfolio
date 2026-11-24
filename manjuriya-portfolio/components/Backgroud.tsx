
"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 65 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: (i % 8) * 0.4,
  size: i % 5 === 0 ? 3 : 1.5,
}));

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden
    pointer-events-none bg-[#030B1B]">

      {/* Cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#102c50_0%,#07152d_48%,#020817_100%)]" />

      {/* Blue and purple light sources */}
      <div className="absolute w-[600px] h-[600px]
      rounded-full bg-cyan-400/10 blur-[160px]
      top-[-200px] left-[10%]" />

      <div className="absolute w-[500px] h-[500px]
      rounded-full bg-purple-500/10 blur-[150px]
      right-[-150px] top-[25%]" />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-cyan-100"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 9px #67e8f9",
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 3 + (star.id % 4),
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Network connections */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="networkGlow">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {[
          [100, 170, 300, 90],
          [300, 90, 420, 240],
          [420, 240, 600, 120],
          [600, 120, 760, 280],
          [760, 280, 1000, 100],
          [1000, 100, 1190, 240],
          [1190, 240, 1380, 100],
          [100, 170, 200, 400],
          [200, 400, 420, 240],
          [420, 240, 530, 520],
          [760, 280, 850, 520],
          [850, 520, 1100, 360],
          [1100, 360, 1190, 240],
          [200, 400, 380, 700],
          [380, 700, 650, 610],
          [650, 610, 850, 520],
          [850, 520, 1050, 750],
          [1050, 750, 1300, 570],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#networkGlow)"
            strokeWidth="1"
            animate={{ opacity: [0.15, 0.8, 0.15] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {[
          [100, 170], [300, 90], [420, 240],
          [600, 120], [760, 280], [1000, 100],
          [1190, 240], [200, 400], [530, 520],
          [850, 520], [1100, 360], [380, 700],
          [650, 610], [1050, 750], [1300, 570],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#67e8f9"
            style={{
              filter: "drop-shadow(0 0 7px #22d3ee)",
            }}
          />
        ))}
      </svg>

      {/* Moving light beam */}
      <motion.div
        className="absolute top-0 left-[-30%] w-[30%]
        h-full rotate-[20deg] bg-gradient-to-r
        from-transparent via-cyan-300/[0.04] to-transparent"
        animate={{ x: ["0vw", "160vw"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-[#020817]/20" />
    </div>
  );
}
