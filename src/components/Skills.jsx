
const skillGroups = [
  {
    title: "Programming",
    skills: ["C++", "PHP", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Microsoft SQL Server"],
  },
  {
    title: "Testing",
    skills: ["Selenium"],
  },
  {
    title: "Development",
    skills: ["SDLC", "Software Development"],
  },
  {
    title: "Tools & Design",
    skills: ["Figma", "Jupyter Notebook"],
  },
];

function Skills() {
  return (
    <section
      className="bg-[var(--bg-light)] py-[110px]"
      id="skills"
    >
      <div className="mx-auto w-[90%] max-w-[1180px]">

        {/* Section Heading */}
        <div className="mx-auto mb-[50px] max-w-[700px] text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary-light)]">
            MY EXPERTISE
          </p>

          <h2 className="mb-5 text-3xl font-bold text-[var(--text)] md:text-4xl">
            Skills &{" "}
            <span className="text-[var(--primary-light)]">
              Technologies
            </span>
          </h2>

          <p className="text-[var(--text-light)]">
            Technologies and tools I have worked with throughout
            my academic projects and software development journey.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-[30px] transition duration-300 hover:-translate-y-[5px] hover:border-[rgba(124,92,255,0.4)]"
              key={group.title}
            >

              {/* Skill Group Title */}
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {group.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    className="rounded-md border border-[rgba(124,92,255,0.2)] bg-[rgba(124,92,255,0.1)] px-[11px] py-[7px] text-xs text-[#c4b5fd]"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;