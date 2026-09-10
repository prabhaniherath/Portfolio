function Contact() {
  return (
    <section className="section contact-section" id="contact">

      <div className="container">

        <div className="contact-wrapper">

          <div className="contact-text">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's build something
              <span> amazing together.</span>
            </h2>

            <p>
              I am open to software engineering opportunities,
              internships, collaborations and exciting projects.
              Feel free to reach out.
            </p>

          </div>

          <div className="contact-cards">

            <a
              href="mailto:prabhanimadhubhashini@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">✉</div>

              <div>
                <small>Email</small>
                <strong>
                  prabhanimadhubhashini@gmail.com
                </strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/prabhani-herath-a80989372"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">in</div>

              <div>
                <small>LinkedIn</small>
                <strong>
                  Prabhani Herath
                </strong>
              </div>
            </a>

            <a
              href="https://github.com/prabhaniherath"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">⌘</div>

              <div>
                <small>GitHub</small>
                <strong>
                  GitHub Profile
                </strong>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-icon">☎</div>

              <div>
                <small>Phone</small>
                <strong>
                  +94 78 917 7390
                </strong>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
