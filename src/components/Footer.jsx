function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>
          <a href="#home" className="footer-logo">
            PH
          </a>

          <p>
            Software Engineering Graduate
          </p>
        </div>

        <div className="footer-links">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Prabhani Herath
        </div>

      </div>

    </footer>
  );
}

export default Footer;