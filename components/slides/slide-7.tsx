"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Slide7() {
  const stages = [
    { name: "Initiation", description: "Project planning and team formation" },
    { name: "Adoption", description: "System selection and initial setup" },
    { name: "Adaptation", description: "Configuration and customization" },
    { name: "Acceptance", description: "Testing and user training" },
    { name: "Routinization", description: "Go-live and stabilization" },
    { name: "Infusion", description: "Continuous improvement and optimization" },
  ]

  const alternativeStages = [
    { name: "Planning", description: "Setting objectives and scope" },
    { name: "Acquisition", description: "Vendor selection and contracting" },
    { name: "Implementation", description: "System configuration and deployment" },
    { name: "Usage & Percolation", description: "Adoption and knowledge transfer" },
    { name: "Extension", description: "Enhancement and integration" },
  ]

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
        className="text-3xl font-bold text-white mb-8 border-b pb-2 border-slate-200"      >
        Stages of ERP Implementation
      </motion.h2>

      <div className="grid grid-cols-1 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3   className="text-1xl font-bold text-white mb-8 border-b pb-2 border-slate-200">General Implementation Stages</h3>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[2.25rem] w-0.5 bg-blue-200"></div>
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-500 z-10 flex-shrink-0">
                    <span className="font-bold text-blue-700">{index + 1}</span>
                  </div>
                  <div className="ml-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex-1">
                    <h4 className="font-semibold text-slate-800">{stage.name}</h4>
                    <p className="text-slate-600 text-sm">{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 border-b pb-2 border-slate-200">Alternative Framework</h3>
          <div className="flex flex-wrap justify-between">
            {alternativeStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="w-full sm:w-[48%] md:w-[19%] bg-white p-3 rounded-lg shadow-sm border border-slate-200 mb-3"
              >
                <h4 className="font-semibold text-slate-800 text-sm">{stage.name}</h4>
                <p className="text-slate-600 text-xs mt-1">{stage.description}</p>
                {index < alternativeStages.length - 1 && (
                  <div className="hidden md:flex justify-end mt-2">
                    <ArrowRight className="h-4 w-4 text-blue-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="mt-6 flex justify-center"
      >
        <img
          src="/placeholder.svg?height=150&width=400&text=ERP+Implementation+Lifecycle"
          alt="ERP Implementation Lifecycle"
          className="rounded-lg shadow-md"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-auto pt-6 border-t border-slate-200"
      >
        <p className="text-slate-500 italic">
          Each stage has distinct critical success factors that need to be addressed
        </p>
      </motion.div>
    </motion.div>
  )
}
