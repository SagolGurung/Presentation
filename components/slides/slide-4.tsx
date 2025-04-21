"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const csfs = [
  "Top Management Commitment and Support",
  "Clear Goals and Objectives",
  "Effective Project Management",
  "Change Management",
  "Business Process Re-engineering (BPR)",
  "Proper ERP Package Selection",
  "Adequate Training and Education",
  "Communication",
];

/* halo wrapper */
const Halo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="halo font-semibold text-white">{children}</span>
);

export default function Slide4() {
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
        Key Findings: Critical Success Factors (Part 1)
      </motion.h2>

      {/* ── Factor list ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-lg md:text-xl leading-relaxed text-white">
        {csfs.map((factor, index) => (
          <motion.div
            key={factor}
            initial={{ x: index % 2 === 0 ? -25 : 25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 * (index + 1), duration: 0.5 }}
            className="flex items-start gap-4"
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
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="italic text-white/70 text-lg md:text-xl text-balance">
          These factors appeared consistently across multiple ERP case studies.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* helper to return a short description per factor */
function getDescription(factor: string): string {
  const descriptions: Record<string, string> = {
    "Top Management Commitment and Support":
      "Crucial for resource provision and conflict resolution, especially early on.",
    "Clear Goals and Objectives":
      "Keep the ERP project focused and aligned with strategy.",
    "Effective Project Management":
      "Coordinates activities, timelines and deliverables efficiently.",
    "Change Management":
      "Guides staff through organisational and process transitions.",
    "Business Process Re-engineering (BPR)":
      "Aligns existing workflows with ERP best practices.",
    "Proper ERP Package Selection":
      "Matches organisational needs and local context.",
    "Adequate Training and Education":
      "Enables users to leverage ERP capabilities fully.",
    Communication:
      "Transparent, frequent updates minimise uncertainty and resistance.",
  };
  return descriptions[factor] ?? "";
}
