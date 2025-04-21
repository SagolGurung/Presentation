"use client"

import { motion } from "framer-motion"
import { Lightbulb, AlertTriangle, ArrowRight } from "lucide-react"

export default function Slide9() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col p-12"
      style={{
        backgroundImage: "linear-gradient(to bottom right, rgba(30, 41, 59, 0.05), rgba(30, 41, 59, 0.1))",
        backgroundSize: "cover",
      }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white text-slate-800 mb-8 border-b pb-2 border-slate-200"
      >
        Practical Implications & Future Research
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
            <h3 className="text-xl font-semibold text-slate-800">Practical Implications</h3>
          </div>

          <ul className="space-y-4">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 mr-2" />
              <p className="text-slate-700">
                <span className="font-semibold">Align ERP strategies</span> to clearly defined CSFs specific to context,
                industry, and culture
              </p>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 mr-2" />
              <p className="text-slate-700">
                <span className="font-semibold">Adequate preparation</span> before implementation significantly impacts
                success
              </p>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 mr-2" />
              <p className="text-slate-700">
                <span className="font-semibold">Stakeholder alignment</span> across all organizational levels is
                essential
              </p>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 mr-2" />
              <p className="text-slate-700">
                <span className="font-semibold">Continuous monitoring</span> and adjustment throughout the
                implementation lifecycle
              </p>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 mr-2" />
              <p className="text-slate-700">
                <span className="font-semibold">Prioritize top management support</span> as it consistently emerges as
                the most influential factor
              </p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 text-orange-500 mr-3" />
            <h3 className="text-xl font-semibold text-slate-800">Limitations & Future Research</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-slate-800 mb-2">Limitations</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 mr-2"></div>
                  <p className="text-slate-700 text-sm">Limited case studies from emerging markets</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 mr-2"></div>
                  <p className="text-slate-700 text-sm">Variability in research methodologies across studies</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-slate-800 mb-2">Future Research Directions</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                  <p className="text-slate-700 text-sm">More exploration required in emerging markets</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                  <p className="text-slate-700 text-sm">Industry-specific CSF frameworks needed</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                  <p className="text-slate-700 text-sm">Empirical research to quantify impact of individual CSFs</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                  <p className="text-slate-700 text-sm">
                    Longitudinal studies tracking CSF importance across implementation stages
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-auto pt-6 border-t border-slate-200"
      >
        <p className="text-slate-500 italic">
          The research provides valuable insights while acknowledging the need for continued exploration in this field
        </p>
      </motion.div>
    </motion.div>
  )
}
