import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="hero">
      <div className="nav-container" id="navbar">
        <nav className="nav">
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Decorative Circles */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-subtitle">Hi, I am</h2>
            <h1 className="hero-title fade-in">Ashini Manawasinghe</h1>
            <h3 className="hero-description typing">Front-end designer from Sri Lanka</h3>
            <button
              className="btn btn-primary"
              onClick={() => window.open("/Resume.pdf", "_blank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="download-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </button>
          </div>

          <div className="hero-image-container">
            <div className="image-glow"></div>
            <div className="image-background"></div>
            <div className="image-wrapper">
              <img
                src="/images/ashini.png"
                alt="Ashini Manawasinghe"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#projects">
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
            className="scroll-arrow"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Hero;
