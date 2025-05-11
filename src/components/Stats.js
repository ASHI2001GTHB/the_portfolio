"use client"

import { useState, useEffect, useRef } from "react"
import "./Stats.css"

function Stats() {
  const [stats] = useState([
    { value: 2, label: "Years", color: "pink-stat", bgColor: "pink-bg" },
    { value: 15, label: "Awards & Certificates", color: "lavender-stat", bgColor: "lavender-bg" },
    { value: 5, label: "Projects", color: "blue-stat", bgColor: "blue-bg" },
  ])

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section className="stats section">
      <div className="container">
        <div ref={ref} className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-circle-container">
                <div className={`stat-circle-bg ${stat.bgColor}`}></div>
                <div className="stat-circle-inner"></div>
                <div className="stat-value-container">
                  <span
                    className={`stat-value ${stat.color} ${isVisible ? "visible" : ""}`}
                    style={{
                      transitionDelay: `${index * 0.2 + 0.5}s`,
                    }}
                  >
                    {stat.value}+
                  </span>
                </div>
              </div>
              <h3 className="stat-label">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
