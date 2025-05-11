"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  percentage: number
  icon: string
}

export default function Skills() {
  const [skills] = useState<Skill[]>([
    { name: "HTML", percentage: 95, icon: "/placeholder.svg?height=50&width=50" },
    { name: "CSS", percentage: 90, icon: "/placeholder.svg?height=50&width=50" },
    { name: "JavaScript", percentage: 85, icon: "/placeholder.svg?height=50&width=50" },
    { name: "React", percentage: 80, icon: "/placeholder.svg?height=50&width=50" },
    { name: "Flutter", percentage: 75, icon: "/placeholder.svg?height=50&width=50" },
    { name: "Firebase", percentage: 70, icon: "/placeholder.svg?height=50&width=50" },
    { name: "Git", percentage: 85, icon: "/placeholder.svg?height=50&width=50" },
    { name: "Figma", percentage: 80, icon: "/placeholder.svg?height=50&width=50" },
  ])

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-skyblue-100 to-lavender-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-softpink-600 mb-12 relative inline-block mx-auto">
          My Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-softpink-400 to-lavender-400"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-lavender-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender-100 to-softpink-100 rounded-full flex items-center justify-center mr-4">
                  <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-softpink-600">{skill.name}</h3>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-5 mb-2 p-1">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-lavender-400 via-softpink-400 to-skyblue-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>

              <div className="text-right text-sm font-medium text-softpink-600">{skill.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
