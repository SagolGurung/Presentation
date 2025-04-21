"use client";

import { useMemo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Globe, Building2 } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
ChartJS.defaults.font.family = "inherit";
ChartJS.defaults.color = "#fff";

/* ─────────────────────────────────────────── */

// simple mapping of every factor to one of three pillars
const factorCategories: Record<string, "People" | "Process" | "Technology"> = {
  // Country factors
  "Cultural adaptation": "People",
  "Vendor support": "Process",
  "Training": "People",
  "Government regulations": "Process",
  "Business process alignment": "Process",
  "Knowledge transfer": "People",
  "Organizational readiness": "People",
  "User involvement": "People",
  "Technical infrastructure": "Technology",
  "Top management support": "People",
  "Change management": "Process",
  "Cultural considerations": "People",
  "Resource availability": "Process",
  "Vendor relationship": "Process",
  "Technical expertise": "Technology",

  // Industry factors
  "Process standardization": "Process",
  "Supply chain integration": "Process",
  "Customer data management": "Technology",
  "Service delivery": "Process",
  "Cost management": "Process",
  "Simplified implementation": "Process",
  "Partner integration": "Process",
  "Real‑time data sharing": "Technology",
  "Regulatory compliance": "Process",
  "Safety protocols": "Process",
  "Patient data security": "Technology",
};

const categories = ["People", "Process", "Technology"] as const;
const categoryColors: Record<typeof categories[number], string> = {
  People: "rgba(248,191,60,0.8)",
  Process: "rgba(59,130,246,0.8)",
  Technology: "rgba(16,185,129,0.8)",
};

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
      animate={{
        onUpdate: (latest) => motionVal.set(latest),
      }}
      transition={{ delay, duration: 1.4, ease: "easeOut" }}
      /* @ts-ignore */
      animateValue={to}
    >
      {display}
    </motion.span>
  );
}

export default function Slide8() {
  const countryChart = useMemo(() => {
    const labels = countries.map((c) => c.name);

    // for each category, get an array of counts per country
    const datasets = categories.map((cat) => ({
      label: cat,
      data: countries.map((c) =>
        c.factors.reduce((sum, f) => sum + (factorCategories[f] === cat ? 1 : 0), 0)
      ),
      backgroundColor: categoryColors[cat],
      borderRadius: 4,
    }));

    return { labels, datasets };
  }, []);

  const industryChart = useMemo(() => {
    const labels = industries.map((i) => i.name);

    const datasets = categories.map((cat) => ({
      label: cat,
      data: industries.map((i) =>
        i.factors.reduce((sum, f) => sum + (factorCategories[f] === cat ? 1 : 0), 0)
      ),
      backgroundColor: categoryColors[cat],
      borderRadius: 4,
    }));

    return { labels, datasets };
  }, []);

  const commonOptions = {
    responsive: true,
    animation: { duration: 1400, easing: "easeInOutQuart" },
    scales: {
      x: { stacked: true },
      y: { stacked: true, ticks: { stepSize: 1, precision: 0 } },
    },
    plugins: { legend: { display: true, position: "top" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col genshin-content p-8 md:p-12"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-genshin font-semibold text-white drop-shadow-gold mb-10 pb-3 border-b border-[rgba(255,255,255,0.15)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Geographical &amp; Industry Variances
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <Globe className="h-7 w-7 text-white drop-shadow-gold" />
            <h3 className="text-2xl font-semibold text-white">
              Country‑specific factors &nbsp;
              <span className="text-white/70 text-lg font-normal">
                <Counter to={countries.length} /> countries
              </span>
            </h3>
          </div>

          <Bar data={countryChart} options={commonOptions} />

          <p className="text-white/70 italic">
            Local culture, regulations and infrastructure shift the emphasis on particular CSFs.
          </p>
        </motion.div>

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

          <Bar data={industryChart} options={commonOptions} />

          <p className="text-white/70 italic">
            The dominant processes of each sector determine which CSFs matter most.
          </p>
        </motion.div>
      </div>

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
