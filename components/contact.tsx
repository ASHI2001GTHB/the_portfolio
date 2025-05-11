"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-softpink-600 mb-12 relative inline-block mx-auto">
          Let's Talk
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-softpink-400 to-lavender-400"></span>
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3 bg-gradient-to-br from-lavender-50 to-skyblue-50 p-8 rounded-3xl shadow-md border-2 border-lavender-100">
            <p className="text-gray-700 mb-6">To request a quote or chat, just fill out the form below 💬</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-lavender-200 focus:border-softpink-500 focus:ring-softpink-500 rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-lavender-200 focus:border-softpink-500 focus:ring-softpink-500 rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-lavender-200 focus:border-softpink-500 focus:ring-softpink-500 rounded-xl"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-softpink-400 to-lavender-400 hover:from-softpink-500 hover:to-lavender-500 text-white py-3 rounded-xl transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <div className="bg-gradient-to-br from-mint-50 to-skyblue-50 p-8 rounded-3xl shadow-md border-2 border-lavender-100">
              <h3 className="text-xl font-semibold text-softpink-600 mb-6">Join me here</h3>

              <div className="space-y-6">
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-4 text-gray-700 hover:text-softpink-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-softpink-600" />
                  </div>
                  <span>your-email@example.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-softpink-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-softpink-600" />
                  </div>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-softpink-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-softpink-600" />
                  </div>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
