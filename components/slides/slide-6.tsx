"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"

export default function Slide6() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col p-12"
      style={{
        backgroundImage: "linear-gradient(to bottom right, rgba(216, 0, 90, 0.05), rgba(30, 41, 59, 0.1))",
        backgroundSize: "cover",
      }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-8 border-b pb-2 border-slate-200"      >
        Specific Insights from Case Studies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
            <CheckCircle2 className="h-6 w-6 mr-2" />
            Success Factors
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Top management support</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Clear strategic objectives</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Business Process Re-engineering</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Proper training programs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Effective project management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Minimizing customization</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
            <XCircle className="h-6 w-6 mr-2" />
            Failure Factors
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Lack of user involvement</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Inadequate change management</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Poor vendor selection</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Insufficient training</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Unrealistic expectations</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Poor data quality</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8"
      >
        <p className="text-1xl font-bold text-white mb-8 border-b pb-2 border-slate-200">
          <span className="font-semibold">Context matters:</span> Studies highlight the importance of context,
          suggesting different industries and countries may emphasize different CSFs.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-auto pt-6 border-t border-slate-200"
      >
    
      </motion.div>
    </motion.div>
  )
}
