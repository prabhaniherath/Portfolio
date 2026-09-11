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
    <section className="section projects-section" id="projects">

      <div className="container">

        <div className="section-heading">

          <p className="section-label">
            MY WORK
          </p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of academic and development projects that
            demonstrate my technical and problem-solving abilities.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-features">

                {project.features.map((feature) => (
                  <span key={feature}>
                    ✓ {feature}
                  </span>
                ))}

              </div>

              <div className="project-tech">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              {project.link && (
                        <a
                       href={project.link}
                               target="_blank"
                           rel="noopener noreferrer"
                          className="project-link"
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