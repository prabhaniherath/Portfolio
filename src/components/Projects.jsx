
const projects = [
  {
    number: "01",
    title: "e-Med Pharmacy Management System",
    category: "Web Development",
    description:
      "A web-based pharmacy management system designed to digitalize pharmacy operations and improve efficiency.",
    features: [
      "Browse medicines",
      "Prescription upload",
      "Online ordering",
      "Inventory management",
      "Prescription validation",
      "Sales monitoring",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/prabhaniherath/Pharmacy-Management-System-",
  },
  {
    number: "02",
    title: "Guardian AI",
    category: "Machine Learning",
    description:
      "A machine learning-based diabetes risk prediction system using clinical and lifestyle data.",
    features: [
      "Data preprocessing",
      "Feature selection",
      "Model training",
      "Model evaluation",
      "Diabetes risk prediction",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    link: "https://github.com/prabhaniherath/Guardian-AI-Diabetes-Prediction-System",
  },
  {
    number: "03",
    title: "Nilet",
    category: "UI/UX Design",
    description:
      "A Learning Management System prototype designed to provide user-friendly interfaces for online learning.",
    features: [
      "Course management",
      "Student enrollment",
      "Assessments",
      "Interactive prototypes",
      "Responsive UI/UX",
    ],
    technologies: ["Figma"],
  },
];

function Projects() {
  return (
    <section
      className="bg-[var(--bg-light)] py-[110px]"
      id="projects"
    >
      <div className="mx-auto w-[90%] max-w-[1180px]">

        {/* Section Heading */}
        <div className="mb-[50px] max-w-[700px]">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary-light)]">
            MY WORK
          </p>

          <h2 className="mb-5 text-3xl font-bold text-[var(--text)] md:text-4xl">
            Featured{" "}
            <span className="text-[var(--primary-light)]">
              Projects
            </span>
          </h2>

          <p className="text-[var(--text-light)]">
            A selection of academic and development projects that
            demonstrate my technical and problem-solving abilities.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              className="relative overflow-hidden rounded-[15px] border border-[var(--border)] bg-[var(--card)] p-8 transition duration-300 hover:-translate-y-2 hover:border-[rgba(124,92,255,0.5)]"
              key={project.number}
            >

              {/* Project Number */}
              <div className="pointer-events-none absolute right-[25px] top-5 font-['Space_Grotesk'] text-5xl font-bold text-[rgba(255,255,255,0.04)]">
                {project.number}
              </div>

              {/* Project Category */}
              <p className="relative z-10 mb-[15px] text-xs font-bold tracking-wider text-[var(--primary-light)]">
                {project.category}
              </p>

              {/* Project Title */}
              <h3 className="relative z-10 mb-[15px] font-['Space_Grotesk'] text-xl font-semibold text-[var(--text)]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-[22px] text-sm leading-relaxed text-[var(--text-light)]">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-[25px] flex flex-col gap-[7px]">

                {project.features.map((feature) => (
                  <span
                    className="text-[0.82rem] text-[#c5c7d0]"
                    key={feature}
                  >
                    ✓ {feature}
                  </span>
                ))}

              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-[7px] border-t border-[var(--border)] pt-5">

                {project.technologies.map((technology) => (
                  <span
                    className="text-[0.72rem] text-[var(--primary-light)]"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}

              </div>

              {/* View Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-[var(--primary-light)] transition hover:text-[var(--text)]"
                >
                  View Project →
                </a>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;