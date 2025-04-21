"use client";

import { useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Globe, Building2 } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
Chart as ChartJS,
 CategoryScale,
LinearScale,
BarElement,
Tooltip,
 } from "chart.js";

const chartDefaults = ChartJS.defaults;
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
chartDefaults.font.family = "inherit";          // use Tailwind font
chartDefaults.color = "#fff";                  // white tick labels

/* ─────────────────────────────────────────── */

const countries = [
  { name: "India", factors: ["Cultural adaptation", "Vendor support", "Training"] },
  { name: "China", factors: ["Government regulations", "Business process alignment", "Knowledge transfer"] },
  { name: "Iran", factors: ["Organizational readiness", "User involvement", "Technical infrastructure"] },
  { name: "Saudi Arabia", factors: ["Top management support", "Change management", "Cultural considerations"] },
  { name: "Pakistan", factors: ["Resource availability", "Vendor relationship", "Technical expertise"] },
];

const industries = [
  { name: "Manufacturing", factors: ["Process standardization", "Supply chain integration"] },
  { name: "Telecommunications", factors: ["Customer data management", "Service delivery"] },
  { name: "SMEs", factors: ["Cost management", "Simplified implementation"] },
  { name: "Supply Chain", factors: ["Partner integration", "Real‑time data sharing"] },
  { name: "Aviation", factors: ["Regulatory compliance", "Safety protocols"] },
  { name: "Healthcare", factors: ["Patient data security", "Regulatory compliance"] },
];

/* helper to make a counting number */
function Counter({ from = 0, to, delay = 0 }: { from?: number; to: number; delay?: number }) {
  const motionVal = useMotionValue(from);
  const display = useTransform(motionVal, (v) => Math.floor(v).toLocaleString());

  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial={{}}
      animate={{
        /* Framer will tween the motionValue directly */
        onUpdate: (latest) => motionVal.set(latest),
      }}
      transition={{ delay, duration: 1.4, ease: "easeOut" }}
      /* @ts-ignore – it's okay, value updated in onUpdate */
      animateValue={to}
    >
      {display}
    </motion.span>
  );
}

/* ─────────────────────────────────────────── */

export default function Slide8() {
  /* Chart‑ready datasets are memoised so they’re created once */
  const countryChart = useMemo(() => {
    const labels = countries.map((c) => c.name);
    const data = countries.map((c) => c.factors.length);
    return {
      labels,
      datasets: [
        {
          label: "No. of distinct CSFs",
          data,
          backgroundColor: "rgba(248, 191, 60, 0.8)", // genshin gold
          borderRadius: 4,
        },
      ],
    };
  }, []);

  const industryChart = useMemo(() => {
    const labels = industries.map((i) => i.name);
    const data = industries.map((i) => i.factors.length);
    return {
      labels,
      datasets: [
        {
          label: "No. of distinct CSFs",
          data,
          backgroundColor: "rgba(248, 191, 60, 0.8)",
          borderRadius: 4,
        },
      ],
    };
  }, []);

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
        Geographical &amp; Industry Variances
      </motion.h2>

      {/* ── Two relaxed columns ────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Countries */}
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="space-y-8"
        >
          {/* header + animated count */}
          <div className="flex items-center gap-3">
            <Globe className="h-7 w-7 text-white drop-shadow-gold" />
            <h3 className="text-2xl font-semibold text-white">
              Country‑specific factors &nbsp;
              <span className="text-white/70 text-lg font-normal">
                <Counter to={countries.length} /> countries
              </span>
            </h3>
          </div>

          <Bar
            data={countryChart}
            options={{
              responsive: true,
              animation: { duration: 1400, easing: "easeInOutQuart" },
              scales: { y: { ticks: { stepSize: 1, precision: 0 } } },
              plugins: { legend: { display: false } },
            }}
          />

          <p className="text-white/70 italic">
            Local culture, regulations and infrastructure shift the emphasis on particular CSFs.
          </p>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <Building2 className="h-7 w-7 text-white drop-shadow-gold" />
            <h3 className="text-2xl font-semibold text-white">
              Industry‑specific factors &nbsp;
              <span className="text-white/70 text-lg font-normal">
                <Counter to={industries.length} /> sectors
              </span>
            </h3>
          </div>

          <Bar
            data={industryChart}
            options={{
              responsive: true,
              animation: { duration: 1400, easing: "easeInOutQuart" },
              scales: { y: { ticks: { stepSize: 1, precision: 0 } } },
              plugins: { legend: { display: false } },
            }}
          />

          <p className="text-white/70 italic">
            The dominant processes of each sector determine which CSFs matter most.
          </p>
        </motion.div>
      </div>

      {/* ── Footer note ────────────────────── */}
      <motion.p
        className="mt-auto pt-8 border-t border-[rgba(255,255,255,0.15)] text-center text-white/80 text-lg md:text-xl"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        CSFs should always be tuned to the target country&nbsp;&amp;&nbsp;industry context.
      </motion.p>
    </motion.div>
  );
}
