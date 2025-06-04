import "./About.css"

function About() {
  return (
    <section id="about" className="about section">
      
      <div className="container-about">
      <h2 className="section-title-about">About Me</h2>
        <div className="about-content">
          <div className="about-text">           
            <div className="about-description">
              <p>
                Hello! I'm <span className="highlight">Ashini Manawasinghe</span>, a passionate{" "}
                <span className="highlight">Software Engineering Undergraduate</span>
                specializing in <span className="highlight">Front-End Development</span>.
              </p>
              <p>
                I love crafting beautiful and responsive user interfaces using
                <span className="highlight"> HTML, CSS, JavaScript, React</span>. I also have experience in{" "}
                <span className="highlight">UI/UX design, Flutter,Firebase and MERN</span>.
              </p>
              <p>
                Currently, I'm focused on building creative and functional web projects, and I enjoy learning new
                technologies that push the boundaries of design and interactivity ✨
              </p>
              <p>
                When I'm not coding, you can find me creating K-pop videos, sketching UI ideas, or sipping on iced
                coffee ☕
              </p>
            </div>
          </div>
          <div className="about-image-container">
            <div className="image-gradient-1"></div>
            <div className="image-gradient-2"></div>
            <div className="image-frame">
              <img src="images/aboutme.png?height=400&width=400" alt="Ashini Manawasinghe" className="about-image" />
            </div>
            {/* Decorative elements */}
            <div className="decorative-circle about-circle-1"></div>
            <div className="decorative-circle about-circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
