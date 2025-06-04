"use client"

import { useState, useEffect } from "react"
import "./Skills.css"

function Skills() {
  const [skills] = useState([
    { name: "HTML", percentage: 95, icon: "images/html.png?height=50&width=50" },
    { name: "CSS", percentage: 90, icon: "images/css.png?height=50&width=50" },
    { name: "JavaScript", percentage: 85, icon: "images/javascript.png?height=50&width=50" },
    { name: "React", percentage: 80, icon: "images/react.png?height=50&width=50" },
    { name: "MongoDB", percentage: 50, icon: "images/mongodb.png?height=50&width=50" },
    { name: "Flutter", percentage: 75, icon: "images/flutter.png?height=50&width=50" },
    { name: "Firebase", percentage: 70, icon: "images/fb.png?height=50&width=50" },
    { name: "Figma", percentage: 80, icon: "images/figma.png?height=50&width=50" },
  ])

  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimated(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-container">
                  <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="skill-icon" />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>

              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{
                    width: animated ? `${skill.percentage}%` : "0%",
                    transition: `width 2s ease-out ${index * 0.1}s`,
                  }}
                ></div>
              </div>

              <div className="skill-percentage">{skill.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
