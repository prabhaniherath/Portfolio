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
    <section className="section skills-section" id="skills">

      <div className="container">

        <div className="section-heading center">

          <p className="section-label">
            MY EXPERTISE
          </p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies and tools I have worked with throughout
            my academic projects and software development journey.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (            // skillGroups is the array containing all your skill group objects.
                                                  // .map() goes through each object one by one.
                                                 // "group" represents the current object.
                                                 // For example, first group = { title: "Programming", skills: [...] }
            <div className="skill-card" key={group.title}>

              <div className="skill-card-top">
                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">

                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
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
