
function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex w-[90%] max-w-[1180px] flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

        {/* Footer Logo and Description */}
        <div>
          <a
            href="#home"
            className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--text)] transition hover:text-[var(--primary-light)]"
          >
            PH
          </a>

          <p className="text-xs text-[var(--text-light)]">
            Software Engineering Graduate
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="#about"
            className="text-xs text-[var(--text-light)] transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-xs text-[var(--text-light)] transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-xs text-[var(--text-light)] transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-xs text-[var(--text-light)] transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[var(--text-light)]">
          © {new Date().getFullYear()} Prabhani Herath
        </div>

      </div>
    </footer>
  );
}

export default Footer;