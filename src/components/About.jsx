function About() {
  return (
    <section className="section about" id="about">

      <div className="container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>
            Turning ideas into
            <span> digital solutions.</span>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am a Software Engineering graduate with a Bachelor
              of Science (Hons) in Software Engineering, awarded with
              Second Class Honours (Upper Division).
            </p>

            <p>
              I have a strong foundation in software development,
              web technologies, database management and machine
              learning. I enjoy transforming ideas into practical
              software solutions through development and research.
            </p>

            <p>
              I am continuously learning new technologies and looking
              for opportunities where I can contribute my technical
              knowledge, problem-solving skills and creativity.
            </p>

          </div>

          <div className="about-cards">

            <div className="info-card">
              <div className="info-icon">🎓</div>
              <h3>Education</h3>
              <p>BSc (Hons) Software Engineering</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💻</div>
              <h3>Development</h3>
              <p>Web & Software Development</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🤖</div>
              <h3>Machine Learning</h3>
              <p>AI & Data-driven Solutions</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🔬</div>
              <h3>Research</h3>
              <p>Ethical AI & Healthcare</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;