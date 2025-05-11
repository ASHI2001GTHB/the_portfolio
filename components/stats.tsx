"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  value: number
  label: string
  color: string
  bgColor: string
}

export default function Stats() {
  const [stats] = useState<Stat[]>([
    { value: 2, label: "Years", color: "from-softpink-400 to-softpink-300", bgColor: "bg-softpink-100" },
    {
      value: 15,
      label: "Awards & Certificates",
      color: "from-lavender-400 to-lavender-300",
      bgColor: "bg-lavender-100",
    },
    { value: 5, label: "Projects", color: "from-skyblue-400 to-skyblue-300", bgColor: "bg-skyblue-100" },
  ])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className={`absolute inset-0 rounded-full ${stat.bgColor} opacity-70`}></div>
                <div className="absolute inset-2 bg-white rounded-full shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}+
                    </motion.span>
                  </motion.div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-700">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
