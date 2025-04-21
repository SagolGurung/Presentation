"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, LineChart, PieChart } from "lucide-react";
import Image from "next/image";

export default function Slide1() {
  const icons = [Database, BarChart3, LineChart, PieChart];

  return (
    <motion.div
      initial={false}
      className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12 text-center genshin-content"
    >
      {/* ─── background image + gradient overlay ───────────────── */}
      <motion.div
        className="absolute inset-0 z-0 slide-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/businessMan.png"
          alt="Executive silhouette"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ─── four animated icons ──────────────────────────────── */}
      <div className="flex justify-center mb-10 gap-6 relative z-10">
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            className="genshin-icon-container"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3 + i * 0.15,
              duration: 0.8,
              type: "spring",
              stiffness: 120,
            }}
          >
            {/* colour swap → white */}
            <Icon className="h-10 w-10 md:h-12 md:w-12 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.45)]" />
          </motion.div>
        ))}
      </div>

      {/* ─── headline & sub‑headline ──────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-genshin font-semibold text-white drop-shadow-gold mb-4 leading-tight text-balance"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          Critical Success Factors in ERP Implementation
        </motion.h1>

        <motion.h2
          className="text-lg md:text-2xl text-white/90 font-genshin mb-8 text-balance"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
        >
          A Review of Case Studies
        </motion.h2>

        <motion.p
          className="text-white/70 italic font-genshin"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
        >
          Presented by: Sagol Gurung
        </motion.p>
      </motion.div>

      {/* ─── “next” hint ──────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 next-hint"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      ></motion.div>
    </motion.div>
  );
}
