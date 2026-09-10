function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-bg-circle circle-one"></div>
      <div className="hero-bg-circle circle-two"></div>

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Prabhanii
            <span> Herath</span>
          </h1>

          <h2>
            Software Engineering Graduate
          </h2>

          <p className="hero-description">
            Software Engineering graduate passionate about building
            innovative software solutions, web applications and
            intelligent systems.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Work
              <span>→</span>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download CV
              <span>↓</span>
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prabhani-herath-a80989372"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="mailto:prabhanimadhubhashini@gmail.com"
              aria-label="Email"
            >
              Email
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="code-window">

            <div className="window-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="indent">
                name: <span className="code-green">"Prabhani"</span>,
              </p>

              <p className="indent">
                role: <span className="code-green">
                  "Software Engineer"
                </span>,
              </p>

              <p className="indent">
                skills: [
              </p>

              <p className="indent-two">
                <span className="code-green">"React"</span>,
              </p>

              <p className="indent-two">
                <span className="code-green">"TypeScript"</span>,
              </p>

              <p className="indent-two">
                <span className="code-green">"Python"</span>
              </p>

              <p className="indent">
                ]
              </p>

              <p>{"}"}</p>

              <p>
                <span className="code-purple">return</span>{" "}
                developer;
              </p>
            </div>

          </div>

        </div>

      </div>

      <div className="scroll-down">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>

    </section>
  );
}

export default Hero;