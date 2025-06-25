"use client"

import { useState } from "react"
import "./Projects.css"

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "BookNest - Online Bookstore",
      image: "./images/Projects/BookNest.png?height=300&width=500",
      video: "./videos/BookNest.mp4?height=400&width=700",
      github: "https://github.com/ASHI2001GTHB/online-bookshop",
      demo: "https://demo-link.com/project-4",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      description:
        ["This is a full-stack web application for an Online Bookshop, built using the MERN stack which allows users to browse books, manage a shopping cart, proceed to checkout, and view their order history.",
        "🚀 Features",
        "🛒 Frontend (React)",
        "Book listing with responsive design",
        "Search and filter functionality",
        "Add/remove/update cart items",
        "Checkout flow with shipping info and payment method",
        "Order history and invoice generation",
        "⚙️ Backend (Node.js + Express)",
        "RESTful API for books, users, orders, and cart",
        "MongoDB integration with Mongoose",
        "JWT-based authentication",
        "CORS and secure request handling",
        "🏗️ Tech Stack",
        "Frontend: React.js, Axios, Plain CSS",
        "Backend: Node.js, Express.js",
        "Database: MongoDB (Mongoose ODM)",
        "Other Tools: Git, VS Code"],
      
    },
    {
      id: 2,
      title: "Smart Navigator",
      description:
        "A web application that helps users find the best routes for their journeys. It provides real-time traffic updates, route suggestions, and distance calculations to ensure a smooth travel experience.",
      image: "./images/Projects/smart-navigator.png?height=300&width=500",
      video: "./videos/Smart-navigator.mp4?autoplay = 1& height=400&width=700",
      github: "",
      demo: "",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "WanderLust",
      description:
        "A beautiful travel agency landing page using just HTML, CSS, and vanilla JavaScript. This will include smooth animations, scrolling effects, and a booking form",
      image: "./images/Projects/WanderLust.png?height=300&width=500",
      video: "./videos/Wanderlust.mp4?autoplay = 1& height=400&width=700",
      github: "https://github.com/ASHI2001GTHB/wanderlust-travel-web",
      demo: "https://wanderlust-travel-web.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Bubble Drop",
      description:
        "A Flutter app for student event alerts with real-time notifications and sorting. This application helps students stay updated with college events, deadlines, and important announcements.",
      image: "./images/Projects/Bubble_Drop.png?height=300&width=500",
      video: "./videos/Bubble_Drop.mp4?height=400&width=700",
      github: "https://github.com/ASHI2001GTHB/bubble-drop",
      demo: "https://bubble-drop.netlify.app/",
      technologies: ["HTML", "Tailwind CSS", "JS"],
    },
    {
      id: 5,
      title: "PixelPulse Digital Agency",
      description:
        "This is a modern and responsive digital agency website built with HTML, CSS, and JavaScript. It features a clean design, smooth animations, and a user-friendly interface.",
      image: "./images/Projects/PixelPulse.png?height=300&width=500",
      video: "./videos/PixelPulse.mp4?height=400&width=700",
      demo: "https://pixel-pulse-by-ashi.netlify.app/",
      technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      title: "Rock-Paper-Scissors Web-Game",
      description:
        "This is a classic Rock, Paper, Scissors game with animations, score tracking, and a match history feature, where you play against the computer. The first player to reach 5 points wins the game.",
      image: "./images/Projects/Rock-Paper-Scissor.png?height=300&width=500",
      video: "./videos/Rock Paper Scissors.mp4?height=400&width=700",
      demo: "https://rock-paper-scissors-web-game-ashi.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 7,
      title: "The Image Gallery",
      description:
        "This is a simple and modern web-site displaying a collection of images. It allows users to navigate through the gallery and view detailed information about each image.",
      image: "./images/Projects/image-gallery.png?height=300&width=500",
      video: "./videos/image-gallery.mp4?height=400&width=700",
      github: "https://github.com/ASHI2001GTHB/photo-gallery",
      demo: "https://photo-gallery-by-ashi.netlify.app/",
      technologies: ["jquery", "HTML", "CSS", "JavaScript"],
    },
    
    {
      id: 8,
      title: "Todo List Web App",
      description:
        "This is a simple and modern To-Do List web application allows users to:Add new tasks,Mark tasks as completed,Delete tasks from the list.The application features a clean user interface with a responsive card design and a gradient background. Tasks are dynamically added to the DOM and styled accordingly using JavaScript and CSS transitions. It’s a great beginner-friendly project to understand DOM manipulation and user interaction in web development.",
      image: "./images/Projects/todoweb.png?height=300&width=500",
      video: "./videos/To-Do List.mp4?height=400&width=700",
      github: "https://github.com/ASHI2001GTHB/to-do-list",
      demo: "https://todo-list-web-app-ashi.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 9,
      title: "Sellx - E-commerce Website UI",
      description:
        "This is a modern and responsive e-commerce website UI built with figma. It features a clean design, smooth animations, and a user-friendly interface.",
      image: "./images/Projects/sellx.png?height=300&width=500",
      video: "./videos/Sellx.mp4?height=400&width=700",
      demo: "https://www.figma.com/design/lcwpMcA7SnIybp8hucxCAN/SellX?node-id=11-9&t=AJwEtEmW6G7Gc5Ds-0",
      technologies: ["Figma"],
    },
    
    
  ])

  const [selectedProject, setSelectedProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openProject = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const navigateProject = (direction) => {
    if (!selectedProject) return

    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % projects.length
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length
    }

    setSelectedProject(projects[newIndex])
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openProject(project)}>
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <p className="project-overlay-text">Click to view details</p>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {modalOpen && selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 className="modal-title">{selectedProject.title}</h2>
              
              <div className="modal-video-container">
              <video
                src={selectedProject.video}
                autoPlay
                muted
                loop
                controls
                playsInline
                poster={selectedProject.image}
                className="modal-video"
              >
                Your browser does not support the video tag.
              </video>
              </div>
              <div className="modal-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="modal-tag">
                    {tech}
                  </span>
                ))}
              </div>              
              <div className="modal-actions">
                <div className="modal-links">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="btn-icon"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="btn-icon"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                  
                </div>

                <div className="modal-navigation">
                  <button onClick={() => navigateProject("prev")} className="nav-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button onClick={() => navigateProject("next")} className="nav-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="modal-description">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
