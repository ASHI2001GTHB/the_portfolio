"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  video: string
  github: string
  demo: string
  technologies: string[]
}

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "College Alert App",
      description:
        "A Flutter app for student event alerts with real-time notifications and sorting. This application helps students stay updated with college events, deadlines, and important announcements.",
      image: "/placeholder.svg?height=300&width=500",
      video: "/placeholder.svg?height=400&width=700",
      github: "https://github.com/your-username/project-1",
      demo: "https://demo-link.com/project-1",
      technologies: ["Flutter", "Firebase", "Dart"],
    },
    {
      id: 2,
      title: "EV Charging System",
      description:
        "A web-based solution for rapid battery swapping and efficient EV charging. This system optimizes the charging process and helps users locate the nearest charging stations.",
      image: "/placeholder.svg?height=300&width=500",
      video: "/placeholder.svg?height=400&width=700",
      github: "https://github.com/your-username/project-2",
      demo: "https://demo-link.com/project-2",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Student Management System",
      description:
        "Automated web system to manage student records and attendance. This comprehensive system helps educational institutions streamline their administrative processes.",
      image: "/placeholder.svg?height=300&width=500",
      video: "/placeholder.svg?height=400&width=700",
      github: "https://github.com/your-username/project-3",
      demo: "https://demo-link.com/project-3",
      technologies: ["PHP", "MySQL", "JavaScript"],
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and secure payment processing. This platform provides a seamless shopping experience for users.",
      image: "/placeholder.svg?height=300&width=500",
      video: "/placeholder.svg?height=400&width=700",
      github: "https://github.com/your-username/project-4",
      demo: "https://demo-link.com/project-4",
      technologies: ["React", "Express", "MongoDB"],
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description:
        "A responsive weather application that provides real-time weather updates and forecasts for any location. This app uses modern APIs to deliver accurate weather information.",
      image: "/placeholder.svg?height=300&width=500",
      video: "/placeholder.svg?height=400&width=700",
      github: "https://github.com/your-username/project-5",
      demo: "https://demo-link.com/project-5",
      technologies: ["JavaScript", "Weather API", "CSS"],
    },
    {
      id: 6,
      title: "Task Management Tool",
      description:
        "A collaborative task management tool that helps teams organize and track their projects efficiently. This tool includes features like task assignment, progress tracking, and deadline notifications.",
      image: "/placeholder.svg?height=300&width=500",
      video: "/placeholder.svg?height=400&width=700",
      github: "https://github.com/your-username/project-6",
      demo: "https://demo-link.com/project-6",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
  ])

  const [open, setOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)

  const openProject = (project: Project) => {
    setCurrentProject(project)
    setOpen(true)
  }

  const navigateProject = (direction: "next" | "prev") => {
    if (!currentProject) return

    const currentIndex = projects.findIndex((p) => p.id === currentProject.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % projects.length
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length
    }

    setCurrentProject(projects[newIndex])
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-peach-100 to-mint-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-softpink-600 mb-12 relative inline-block mx-auto">
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-softpink-400 to-lavender-400"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group border-2 border-mint-100"
              onClick={() => openProject(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-softpink-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-lavender-100 text-lavender-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl bg-white rounded-3xl border-4 border-lavender-200">
            {currentProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-softpink-600">{currentProject.title}</DialogTitle>
                  <DialogDescription className="text-gray-600 mt-2">{currentProject.description}</DialogDescription>
                </DialogHeader>

                <div className="mt-4 bg-gray-100 rounded-2xl overflow-hidden border-2 border-lavender-100">
                  <video src={currentProject.video} controls poster={currentProject.image} className="w-full h-auto">
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-4">
                    <Button variant="outline" asChild className="border-lavender-200 hover:bg-lavender-50">
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2 text-lavender-600" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-softpink-400 to-lavender-400 hover:from-softpink-500 hover:to-lavender-500"
                    >
                      <a
                        href={currentProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateProject("prev")
                      }}
                      className="rounded-full border-lavender-200 hover:bg-lavender-50"
                    >
                      <ChevronLeft className="w-5 h-5 text-lavender-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateProject("next")
                      }}
                      className="rounded-full border-lavender-200 hover:bg-lavender-50"
                    >
                      <ChevronRight className="w-5 h-5 text-lavender-600" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
