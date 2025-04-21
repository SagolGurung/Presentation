"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/* ── small helper so we can add a halo to words easily ───────── */
const Halo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="halo font-semibold text-white">{children}</span>
);

/* Data‑driven rows */
const rows = [
  {
    text: (
      <>
        <Halo>ERP systems</Halo> enhance organisational efficiency by providing
        real‑time data integration across departments:
        <ul className="list-disc list-inside ml-6 mt-3 space-y-1">
          <li>Finance</li>
          <li>Human Resources</li>
          <li>Logistics</li>
          <li>Sales & Marketing</li>
        </ul>
      </>
    ),
  },
  {
    text: (
      <>
        <Halo>Successful implementations</Halo> streamline processes, saving
        money&nbsp;and time.
      </>
    ),
  },
  {
    text: (
      <>
        <Halo>Yet many implementations fail</Halo> – around 90 % run late or
        over budget.
      </>
    ),
  },
  {
    text: (
      <>
        <Halo>Identifying Critical Success Factors (CSFs)</Halo> is the key to
        turning those numbers around.
      </>
    ),
  },
];

export default function Slide2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col genshin-content p-8 md:p-12"
    >
      {/* ── Heading ────────────────────────── */}
      <motion.h2
        className="text-4xl md:text-5xl font-genshin font-semibold text-white drop-shadow-gold mb-10 pb-3 border-b border-[rgba(255,255,255,0.15)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Introduction
      </motion.h2>

      {/* ── Bulleted rows ─────────────────── */}
      <div className="space-y-9 text-lg md:text-xl leading-relaxed text-white">
        {rows.map(({ text }, i) => (
          <motion.div
            key={i}
            className="flex gap-4 items-start"
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.18, duration: 0.5 }}
          >
            <CheckCircle2 className="h-7 w-7 text-white flex-shrink-0 mt-1 drop-shadow-gold" />
            <div>{text}</div>
          </motion.div>
        ))}
      </div>

      {/* ── Closing note ───────────────────── */}
      <motion.div
        className="mt-auto pt-8 border-t border-[rgba(255,255,255,0.15)]"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="italic text-white/70 text-lg md:text-xl text-balance">
          Understanding these factors is crucial for organisations planning an
          ERP roll‑out.
        </p>
      </motion.div>
    </motion.div>
  );
}
