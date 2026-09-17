function About() {
  return (
    <section
      className="py-[110px] bg-[var(--bg-light)]"
      id="about"
    >
      {/* SAME CONTAINER AS HERO */}
     <div className="w-[min(90%,1180px)] mx-auto">

        {/* Section Heading */}
        <div className="max-w-[750px] mb-[60px]">

          <p className="text-[var(--primary-light)] text-[0.8rem] font-bold tracking-[3px] mb-[15px]">
            ABOUT ME
          </p>

          <h2 className="font-['Space_Grotesk'] text-[clamp(2.3rem,5vw,3.5rem)] leading-[1.1] mb-[20px]">
            Turning ideas into
            <span className="text-[var(--primary)]">
              {" "}digital solutions.
            </span>
          </h2>

        </div>


        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* Text */}
          <div>

            <p className="text-[var(--text-light)] mb-[20px]">
              I am a Software Engineering graduate with a Bachelor
              of Science (Hons) in Software Engineering, awarded with
              Second Class Honours (Upper Division).
            </p>

            <p className="text-[var(--text-light)] mb-[20px]">
              I have a strong foundation in software development,
              web technologies, database management and machine
              learning. I enjoy transforming ideas into practical
              software solutions through development and research.
            </p>

            <p className="text-[var(--text-light)] mb-[20px]">
              I am continuously learning new technologies and looking
              for opportunities where I can contribute my technical
              knowledge, problem-solving skills and creativity.
            </p>

          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">

            <div className="p-[25px] bg-[var(--card)] rounded-[12px] transition-all duration-300 hover:bg-[var(--card-hover)] hover:-translate-y-[5px]">
              <div className="text-[1.8rem] mb-[15px]">🎓</div>

              <h3 className="mb-[7px] font-semibold">
                Education
              </h3>

              <p className="text-[var(--text-light)] text-[0.85rem]">
                BSc (Hons) Software Engineering
              </p>
            </div>


            <div className="p-[25px] bg-[var(--card)] rounded-[12px] transition-all duration-300 hover:bg-[var(--card-hover)] hover:-translate-y-[5px]">
              <div className="text-[1.8rem] mb-[15px]">💻</div>

              <h3 className="mb-[7px] font-semibold">
                Development
              </h3>

              <p className="text-[var(--text-light)] text-[0.85rem]">
                Web & Software Development
              </p>
            </div>


            <div className="p-[25px] bg-[var(--card)] rounded-[12px] transition-all duration-300 hover:bg-[var(--card-hover)] hover:-translate-y-[5px]">
              <div className="text-[1.8rem] mb-[15px]">🤖</div>

              <h3 className="mb-[7px] font-semibold">
                Machine Learning
              </h3>

              <p className="text-[var(--text-light)] text-[0.85rem]">
                AI & Data-driven Solutions
              </p>
            </div>


            <div className="p-[25px] bg-[var(--card)] rounded-[12px] transition-all duration-300 hover:bg-[var(--card-hover)] hover:-translate-y-[5px]">
              <div className="text-[1.8rem] mb-[15px]">🔬</div>

              <h3 className="mb-[7px] font-semibold">
                Research
              </h3>

              <p className="text-[var(--text-light)] text-[0.85rem]">
                Ethical AI & Healthcare
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;