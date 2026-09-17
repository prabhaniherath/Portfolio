
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
    <section
      className="py-[110px] bg-[var(--bg)]"
      id="education"
    >
      {/* Same Container as Hero and About */}
      <div className="w-[min(90%,1180px)] mx-auto">

        {/* Section Heading */}
        <div className="max-w-[750px] mx-auto mb-[60px] text-center">

          <p className="text-[var(--primary-light)] text-[0.8rem] font-bold tracking-[3px] mb-[15px]">
            MY JOURNEY
          </p>

          <h2 className="font-['Space_Grotesk'] text-[clamp(2.3rem,5vw,3.5rem)] leading-[1.1] mb-[20px]">
            Education &{" "}
            <span className="text-[var(--primary)]">
              Qualifications
            </span>
          </h2>

        </div>


        {/* Timeline */}
        <div className="relative max-w-[900px] mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-[130px] top-0 bottom-0 w-[2px] bg-[var(--border)]"></div>


          {/* Education Items */}
          {education.map((item, index) => (
            <div
              className="relative grid grid-cols-[30px_1fr] md:grid-cols-[110px_30px_1fr] gap-[15px] md:gap-[20px] mb-[45px] last:mb-0"
              key={index}
            >

              {/* Year */}
              <div className="hidden md:block text-right text-[var(--primary-light)] text-[0.85rem] font-semibold pt-[3px]">
                {item.year}
              </div>


              {/* Timeline Dot */}
              <div className="relative flex justify-center">
                <div className="w-[16px] h-[16px] rounded-full bg-[var(--primary)] border-[4px] border-[var(--bg)] z-10 mt-[3px]"></div>
              </div>


              {/* Content */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-[12px] p-[25px] transition-all duration-300 hover:bg-[var(--card-hover)] hover:-translate-y-[5px]">

                {/* Mobile Year */}
                <p className="md:hidden text-[var(--primary-light)] text-[0.8rem] font-semibold mb-[8px]">
                  {item.year}
                </p>

                <h3 className="text-[1.1rem] font-semibold mb-[10px]">
                  {item.title}
                </h3>

                <p className="text-[var(--primary-light)] text-[0.9rem] mb-[8px]">
                  {item.institution}
                </p>

                <p className="text-[var(--text-light)] text-[0.85rem] mb-[15px]">
                  {item.awarded}
                </p>

                <span className="inline-block px-[12px] py-[5px] rounded-[6px] bg-[var(--bg-light)] text-[var(--primary-light)] text-[0.75rem] font-semibold">
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