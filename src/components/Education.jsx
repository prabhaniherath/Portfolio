const education = [
  {
    year: "2024 – 2026",
    title: "Bachelor of Science (Hons) in Software Engineering",
    institution: "Asian Institute of Business and Science",
    awarded: "Awarded by Edge Hill University, United Kingdom",
    result: "Second Class Honours (Upper Division)",
  },

  {
    year: "Completed",
    title: "Higher National Diploma in Software Engineering",
    institution: "Asian Institute of Business and Science",
    awarded: "Awarded by Pearson, United Kingdom",
    result: "Merit",
  },

  {
    year: "2023",
    title: "G.C.E. Advanced Level Examination",
    institution: "Central College, Kuliyapitiya",
    awarded: "Mathematics Stream",
    result: "1 Credit (C), 2 Simple Passes (S)",
  },

  {
    year: "2018",
    title: "G.C.E. Ordinary Level Examination",
    institution: "Central College, Kuliyapitiya",
    awarded: "General Education",
    result: "7 Distinctions (A), 2 Very Good Passes (B)",
  },
];

function Education() {
  return (
    <section className="section education-section" id="education">

      <div className="container">

        <div className="section-heading center">

          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>
            Education & <span>Qualifications</span>
          </h2>

        </div>

        <div className="timeline">

          {education.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <p className="institution">
                  {item.institution}
                </p>

                <p>{item.awarded}</p>

                <span className="result">
                  {item.result}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;
