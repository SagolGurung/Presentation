"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Slide10() {
  return (
    <motion.div className="w-full h-full flex flex-col p-12 genshin-content">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-genshin text-genshin-gold mb-8 border-b pb-2 border-genshin-gold/30 flex items-center"
      >
        <motion.span
          animate={{
            textShadow: ["0 0 5px rgba(255,215,0,0.3)", "0 0 15px rgba(255,215,0,0.7)", "0 0 5px rgba(255,215,0,0.3)"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Conclusion
        </motion.span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-genshin-card/80 backdrop-blur-sm p-6 rounded-lg border border-genshin-gold/30 shadow-glow"
        >
          <h3 className="text-xl font-genshin text-genshin-gold mb-4">Key Takeaways</h3>

          <div className="space-y-4">
            {[
              "<span class='font-semibold'>Successful ERP implementation</span> critically depends on well-defined and managed CSFs",
              "<span class='font-semibold'>Top management support</span> emerges consistently as the most influential factor across diverse contexts",
              "<span class='font-semibold'>Context matters</span> - CSFs vary by industry, geography, and organizational culture",
              "<span class='font-semibold'>Understanding and application</span> of these practical CSFs significantly enhance the likelihood of successful ERP implementation",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-6 w-6 text-genshin-accent flex-shrink-0 mt-0.5" />
                <p className="text-genshin-text" dangerouslySetInnerHTML={{ __html: text }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-genshin-dark/90 backdrop-blur-sm p-6 rounded-lg border border-genshin-gold/30 shadow-glow"
        >
          <h3 className="text-xl font-genshin text-genshin-gold mb-4">Final Thoughts</h3>

          <p className="mb-4 text-genshin-text">
            ERP implementation is a complex, multi-faceted process that requires careful planning, execution, and
            monitoring. By focusing on the critical success factors identified in this research, organizations can
            significantly improve their chances of successful implementation.
          </p>

          <div className="mt-6">
            <h4 className="font-genshin text-genshin-gold mb-2">Next Steps for Organizations</h4>
            <ul className="space-y-2">
              {[
                "Conduct organizational readiness assessment",
                "Develop CSF-focused implementation strategy",
                "Secure and maintain top management commitment",
                "Establish comprehensive change management program",
              ].map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                  className="flex items-start"
                >
                  <ArrowRight className="h-5 w-5 text-genshin-accent flex-shrink-0 mt-0.5 mr-2" />
                  <p className="text-genshin-text text-sm">{step}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-auto pt-6 border-t border-genshin-gold/30 text-center"
      >
        <p className="text-genshin-gold font-genshin">Thank you for your attention!</p>
        <p className="text-genshin-text/80 text-sm mt-1 mb-4 font-genshin">Questions & Discussion</p>

        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.dispatchEvent(new CustomEvent("goToSlide", { detail: 1 }))}
          className="px-6 py-2 bg-genshin-gold/20 text-genshin-gold rounded-md border border-genshin-gold/50 hover:bg-genshin-gold/30 transition-all flex items-center mx-auto font-genshin"
        >
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          Back to Home
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <Image
          src="/placeholder.svg?height=80&width=80&text=Vision"
          alt="Vision"
          width={80}
          height={80}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  )
}
