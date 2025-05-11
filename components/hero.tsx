"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-lavender-300 via-skyblue-200 to-mint-200">
      <div className="absolute top-0 left-0 w-full p-4 z-10">
        <nav className="container mx-auto flex justify-end">
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            <li>
              <Link href="#" className="text-lavender-800 hover:text-softpink-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-lavender-800 hover:text-softpink-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-lavender-800 hover:text-softpink-600 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-lavender-800 hover:text-softpink-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-lavender-800 hover:text-softpink-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Add decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-peach-300 opacity-40 animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-mint-300 opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-40 right-40 w-12 h-12 rounded-full bg-skyblue-300 opacity-40 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
          <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
            <h2 className="text-2xl font-medium text-softpink-600 mb-2">Hi, I am</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-lavender-800 mb-4">Ashini Manawasinghe</h1>
            <h3 className="text-xl md:text-2xl text-mint-700 mb-8">Front-end designer from Sri Lanka</h3>
            <Button
              className="bg-gradient-to-r from-softpink-400 to-lavender-400 hover:from-softpink-500 hover:to-lavender-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" /> Download CV
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-softpink-400 to-lavender-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute inset-4 bg-white rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Ashini Manawasinghe"
                className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-lavender-700 hover:text-softpink-600">
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
            className="w-8 h-8"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </header>
  )
}
