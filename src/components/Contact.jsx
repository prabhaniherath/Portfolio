
function Contact() {
  return (
    <section
      className="bg-[var(--bg)] py-[110px]"
      id="contact"
    >
      <div className="mx-auto w-[90%] max-w-[1180px]">

        {/* Contact Wrapper */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Contact Text */}
          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary-light)]">
              GET IN TOUCH
            </p>

            <h2 className="mb-[25px] font-['Space_Grotesk'] text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
              Let's build something
              <span className="block text-[var(--primary)]">
                amazing together.
              </span>
            </h2>

            <p className="text-[var(--text-light)]">
              I am open to software engineering opportunities,
              internships, collaborations and exciting projects.
              Feel free to reach out.
            </p>

          </div>

          {/* Contact Cards */}
          <div className="flex flex-col gap-3">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prabhanimadhubhashini@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[18px] rounded-[10px] border border-[var(--border)] bg-[var(--card)] px-5 py-[18px] transition duration-300 hover:translate-x-[5px] hover:border-[rgba(124,92,255,0.5)]"
            >
              <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-[rgba(124,92,255,0.1)] font-bold text-[var(--primary-light)]">
                ✉
              </div>

              <div className="min-w-0">
                <small className="mb-0.5 block text-[0.7rem] text-[var(--text-light)]">
                  Email
                </small>

                <strong className="block break-all text-[0.85rem] text-[var(--text)]">
                  prabhanimadhubhashini@gmail.com
                </strong>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prabhani-herath-a80989372"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[18px] rounded-[10px] border border-[var(--border)] bg-[var(--card)] px-5 py-[18px] transition duration-300 hover:translate-x-[5px] hover:border-[rgba(124,92,255,0.5)]"
            >
              <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-[rgba(124,92,255,0.1)] font-bold text-[var(--primary-light)]">
                in
              </div>

              <div>
                <small className="mb-0.5 block text-[0.7rem] text-[var(--text-light)]">
                  LinkedIn
                </small>

                <strong className="block text-[0.85rem] text-[var(--text)]">
                  Prabhani Herath
                </strong>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/prabhaniherath"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[18px] rounded-[10px] border border-[var(--border)] bg-[var(--card)] px-5 py-[18px] transition duration-300 hover:translate-x-[5px] hover:border-[rgba(124,92,255,0.5)]"
            >
              <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-[rgba(124,92,255,0.1)] font-bold text-[var(--primary-light)]">
                ⌘
              </div>

              <div>
                <small className="mb-0.5 block text-[0.7rem] text-[var(--text-light)]">
                  GitHub
                </small>

                <strong className="block text-[0.85rem] text-[var(--text)]">
                  GitHub Profile
                </strong>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-[18px] rounded-[10px] border border-[var(--border)] bg-[var(--card)] px-5 py-[18px] transition duration-300 hover:translate-x-[5px] hover:border-[rgba(124,92,255,0.5)]">
              <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-[rgba(124,92,255,0.1)] font-bold text-[var(--primary-light)]">
                ☎
              </div>

              <div>
                <small className="mb-0.5 block text-[0.7rem] text-[var(--text-light)]">
                  Phone
                </small>

                <strong className="block text-[0.85rem] text-[var(--text)]">
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