export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-softpink-600 mb-6 relative">
              About Me
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-softpink-400 to-lavender-400"></span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Hello! I'm <span className="font-semibold text-softpink-600">Ashini Manawasinghe</span>, a passionate{" "}
                <span className="font-semibold text-softpink-600">Software Engineering Undergraduate</span>
                specializing in <span className="font-semibold text-softpink-600">Front-End Development</span>.
              </p>
              <p>
                I love crafting beautiful and responsive user interfaces using
                <span className="font-semibold text-softpink-600"> HTML, CSS, JavaScript, React, and Flutter</span>. I
                also have experience in{" "}
                <span className="font-semibold text-softpink-600">UI/UX design, Firebase integration, and Git</span>.
              </p>
              <p>
                Currently, I'm focused on building creative and functional web and mobile apps, and I enjoy learning new
                technologies that push the boundaries of design and interactivity ✨
              </p>
              <p>
                When I'm not coding, you can find me exploring K-pop aesthetics, sketching UI ideas, or sipping on iced
                coffee ☕
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-softpink-200 to-lavender-200 rounded-2xl rotate-3"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-mint-200 to-skyblue-200 rounded-2xl -rotate-3"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ashini Manawasinghe"
                  className="rounded-xl w-full h-auto"
                />
              </div>
              {/* Add decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-peach-300 opacity-70"></div>
              <div className="absolute -top-6 -left-6 w-8 h-8 rounded-full bg-softpink-300 opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
