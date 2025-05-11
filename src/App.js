import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Stats from "./components/Stats"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
