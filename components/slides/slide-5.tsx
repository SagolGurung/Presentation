"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const factors = [
  "Competent Project Team",
  "Data Accuracy and Integrity",
  "User Involvement and Engagement",
  "Vendor Support",
  "Risk Management",
  "Performance Monitoring and Evaluation",
  "Organizational Culture and Readiness",
];

/* halo wrapper */
const Halo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="halo font-semibold text-white">{children}</span>
);

export default function Slide5() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col genshin-content p-8 md:p-12"
    >
      {/* ── Heading ─────────────────────────── */}
      <motion.h2
        className="text-4xl md:text-5xl font-genshin font-semibold text-white drop-shadow-gold mb-10 pb-3 border-b border-[rgba(255,255,255,0.15)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Key Findings: Critical Success Factors (Part 2)
      </motion.h2>

      {/* ── Factor grid ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-lg md:text-xl leading-relaxed text-white">
        {factors.map((factor, i) => (
          <motion.div
            key={factor}
            className="flex items-start gap-4"
            initial={{ x: i % 2 === 0 ? -25 : 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 * (i + 1), duration: 0.5 }}
          >
            <CheckCircle2 className="h-7 w-7 text-white drop-shadow-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">
                <Halo>{factor}</Halo>
              </h3>
              <p className="text-white/80 mt-1 text-base md:text-lg">
                {getDescription(factor)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Closing note ────────────────────── */}
      <motion.div
        className="mt-auto pt-8 border-t border-[rgba(255,255,255,0.15)]"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <p className="italic text-white/70 text-lg md:text-xl text-balance">
          Top‑management support emerged consistently as the most influential
          factor across diverse contexts.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* helper returns a description for each factor */
function getDescription(factor: string): string {
  const d: Record<string, string> = {
    "Competent Project Team":
      "Team competence—including consultants and internal members—strongly affects ERP outcomes.",
    "Data Accuracy and Integrity":
      "Reliable data entry and governance underpin every ERP process.",
    "User Involvement and Engagement":
      "Active user participation boosts acceptance and adoption.",
    "Vendor Support":
      "Responsive vendors accelerate issue resolution and upgrades.",
    "Risk Management":
      "Proactive identification and mitigation of implementation risks.",
    "Performance Monitoring and Evaluation":
      "Continuous reviews confirm ERP benefits and reveal gaps.",
    "Organizational Culture and Readiness":
      "A tech‑ready, adaptable culture smooths the transition.",
  };
  return d[factor] ?? "";
}
