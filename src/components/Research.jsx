
function Research() {
  return (
    <section
      className="bg-[var(--bg)] py-[110px]"
      id="research"
    >
      <div className="mx-auto w-[90%] max-w-[1180px]">

        {/* Research Box */}
        <div className="grid grid-cols-1 gap-8 rounded-[18px] border border-[var(--border)] bg-gradient-to-br from-[#11131a] to-[#171321] p-6 md:grid-cols-[100px_1fr] md:gap-10 md:p-[50px]">

          {/* Research Icon */}
          <div className="grid h-20 w-20 place-items-center rounded-[15px] border border-[rgba(124,92,255,0.2)] bg-[rgba(124,92,255,0.12)] text-3xl">
            🔬
          </div>

          {/* Research Content */}
          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[var(--primary-light)]">
              RESEARCH & PUBLICATION
            </p>

            <h2 className="mb-[10px] font-['Space_Grotesk'] text-3xl font-bold leading-tight text-[var(--text)] md:text-5xl">
              Ethical AI Deployment in
              <span className="block text-[var(--primary)]">
                Sustainable Healthcare Facilities
              </span>
            </h2>

            <p className="mb-5 text-lg text-[#d4d5dc]">
              Lessons from Diabetes Prediction
            </p>

            <p className="mb-[30px] max-w-[800px] text-[var(--text-light)]">
              Research exploring ethical considerations surrounding
              the deployment of AI systems in sustainable healthcare
              environments, with lessons derived from diabetes
              prediction.
            </p>

            {/* Research Details */}
            <div className="mb-[25px] flex flex-wrap gap-7 md:gap-[35px]">

              <div className="flex flex-col">
                <strong className="mb-1 text-xs text-[var(--text-light)]">
                  Author
                </strong>
                <span className="font-semibold text-[var(--text)]">
                  Herath, H.M.P.M.
                </span>
              </div>

              <div className="flex flex-col">
                <strong className="mb-1 text-xs text-[var(--text-light)]">
                  Conference
                </strong>
                <span className="font-semibold text-[var(--text)]">
                  ICSBE 2025
                </span>
              </div>

              <div className="flex flex-col">
                <strong className="mb-1 text-xs text-[var(--text-light)]">
                  Paper ID
                </strong>
                <span className="font-semibold text-[var(--text)]">
                  ICSBE25_155
                </span>
              </div>

            </div>

            {/* Publication */}
            <p className="text-sm text-[#a8acb8]">
              Published in the 16th International Conference on
              Sustainable Built Environment (ICSBE 2025) and
              Next-Generation Innovation & Advancement DIAMOND 75
              (The Kandy Conference).
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Research;