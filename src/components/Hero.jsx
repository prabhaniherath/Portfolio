
function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-0 pt-20"
      id="home"
    >

      {/* Background Circles */}
      <div className="pointer-events-none absolute -left-[150px] top-[10%] h-[350px] w-[350px] rounded-full bg-[var(--primary)] opacity-[0.15] blur-[100px]" />

      <div className="pointer-events-none absolute -right-[100px] bottom-[10%] h-[300px] w-[300px] rounded-full bg-[#4f46e5] opacity-[0.15] blur-[100px]" />

      {/* Hero Container */}
      <div className="mx-auto grid w-[90%] max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">

        {/* Hero Content */}
        <div>

          <p className="mb-[15px] text-xs font-bold tracking-[3px] text-[var(--primary-light)]">
            HELLO, I'M
          </p>

          <h1 className="mb-5 font-['Space_Grotesk'] text-[3.5rem] font-bold leading-none text-[var(--text)] md:text-7xl lg:text-8xl">
            Prabhani
            <span className="block text-[var(--primary)]">
              Herath
            </span>
          </h1>

          <h2 className="mb-5 text-xl text-[#d4d5dc] md:text-2xl">
            Software Engineering Graduate
          </h2>

          <p className="mb-[30px] max-w-[600px] text-base leading-relaxed text-[var(--text-light)] md:text-[1.05rem]">
            Software Engineering graduate passionate about building
            innovative software solutions, web applications and
            intelligent systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-[15px]">

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-lg bg-[var(--primary)] px-[22px] py-[13px] font-semibold text-white transition duration-300 hover:-translate-y-[3px]"
            >
              View My Work
              <span>→</span>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-[var(--border)] px-[22px] py-[13px] font-semibold text-white transition duration-300 hover:bg-[var(--card)]"
            >
              Download CV
              <span>↓</span>
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-[35px] flex gap-[25px]">

            <a
              href="https://github.com/prabhaniherath/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-sm text-[var(--text-light)] transition hover:text-[var(--primary-light)]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prabhani-herath-a80989372"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-sm text-[var(--text-light)] transition hover:text-[var(--primary-light)]"
            >
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prabhanimadhubhashini@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-sm text-[var(--text-light)] transition hover:text-[var(--primary-light)]"
            >
              Email
            </a>

          </div>

        </div>

        {/* Hero Visual */}
        <div className="flex justify-center max-lg:hidden">

          {/* Code Window */}
          <div className="w-full max-w-[520px] rotate-2 rounded-[15px] border border-[var(--border)] bg-[#0d0f15] shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition duration-500 hover:translate-y-[-8px] hover:rotate-0">

            {/* Window Header */}
            <div className="flex h-[45px] items-center gap-2 border-b border-[var(--border)] px-[18px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#343741]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#343741]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#343741]" />
            </div>

            {/* Code Content */}
            <div className="p-[30px] font-mono text-[0.95rem] text-[#d4d4d8]">

              <p className="mb-2">
                <span className="text-[#c084fc]">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="mb-2 pl-[25px]">
                name: <span className="text-[#86efac]">"Prabhani"</span>,
              </p>

              <p className="mb-2 pl-[25px]">
                role:{" "}
                <span className="text-[#86efac]">
                  "Software Engineer"
                </span>
                ,
              </p>

              <p className="mb-2 pl-[25px]">
                skills: [
              </p>

              <p className="mb-2 pl-[50px]">
                <span className="text-[#86efac]">"React"</span>,
              </p>

              <p className="mb-2 pl-[50px]">
                <span className="text-[#86efac]">"TypeScript"</span>,
              </p>

              <p className="mb-2 pl-[50px]">
                <span className="text-[#86efac]">"Python"</span>
              </p>

              <p className="mb-2 pl-[25px]">
                ]
              </p>

              <p className="mb-2">
                {"}"}
              </p>

              <p>
                <span className="text-[#c084fc]">return</span>{" "}
                developer;
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-[30px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[5px] text-xs text-[var(--text-light)] max-md:hidden">
        <span>Scroll to explore</span>
        <span>↓</span>
      </div>

    </section>
  );
}

export default Hero;