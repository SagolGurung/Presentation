"use client";

import { motion } from "framer-motion";
import { Target, Search, BookOpen } from "lucide-react";

const Halo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="halo font-semibold text-white">{children}</span>
);

export default function Slide3() {
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
        Research Objective &amp; Methodology
      </motion.h2>

      {/* ── Two cards ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white text-lg md:text-xl leading-relaxed">
        {/* Objective card */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="rounded-xl bg-white/5 backdrop-blur-md p-7 shadow-md ring-1 ring-white/10"
        >
          <div className="flex items-center mb-5">
            <Target className="h-9 w-9 text-white drop-shadow-gold mr-4" />
            <h3 className="text-2xl font-semibold">Research Objective</h3>
          </div>

          <p>
            <Halo>Identify practical Critical Success Factors (CSFs)</Halo> by
            analysing case studies of ERP implementations.
          </p>
          <p className="mt-4 text-white/80">
            Provide insights that help practitioners plan or execute their own
            ERP roll‑outs.
          </p>
        </motion.div>

        {/* Methodology card */}
        <motion.div
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="rounded-xl bg-white/5 backdrop-blur-md p-7 shadow-md ring-1 ring-white/10"
        >
          <div className="flex items-center mb-5">
            <Search className="h-9 w-9 text-white drop-shadow-gold mr-4" />
            <h3 className="text-2xl font-semibold">Research Methodology</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="flex items-center font-medium text-white">
                <BookOpen className="h-6 w-6 mr-3 drop-shadow-gold" />
                Literature Review
              </h4>
              <p className="text-white/80 ml-9 mt-1">
                Systematic screening of ERP‑focused articles from leading MIS
                journals.
              </p>
            </div>

            <div>
              <h4 className="flex items-center font-medium text-white">
                <BookOpen className="h-6 w-6 mr-3 drop-shadow-gold" />
                Analysis&nbsp;&amp;&nbsp;Synthesis
              </h4>
              <p className="text-white/80 ml-9 mt-1">
                Interpretive Qualitative Approach (IQA) to examine organisational,
                human and strategic dimensions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Closing note ───────────────────── */}
      <motion.div
        className="mt-auto pt-8 border-t border-[rgba(255,255,255,0.15)]"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <p className="italic text-white/70 text-lg md:text-xl text-balance">
          Grounding the study in real‑world projects ensures the findings are
          directly actionable.
        </p>
      </motion.div>
    </motion.div>
  );
}
