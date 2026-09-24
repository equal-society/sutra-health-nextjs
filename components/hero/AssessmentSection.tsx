import Link from "next/link";

const results = [
  ["Green", "Continue", "Habits that are already serving you well.", "#6FA77B"],
  ["Yellow", "Review", "Areas where a small change may be worthwhile.", "#C8B36A"],
  ["Red", "Focus", "Areas where a more meaningful change may be useful.", "#C47770"],
] as const;

export default function AssessmentSection() {
  return (
    <section className="border-b border-[#202522]/10 bg-[#F7F5EF]" aria-labelledby="assessment-heading">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
            03 · Free self-assessment
          </p>
          <h2
            id="assessment-heading"
            className="mt-5 max-w-[1050px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px]"
          >
            Where could you start?
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
          <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
            <p className="max-w-[650px] font-sans text-[16px] leading-[1.7] text-[#202522]/80 sm:text-[17px]">
              Answer 21 simple questions about everyday health habits. Your
              Traffic Light result highlights areas that are going well and
              areas where you may want to pay more attention.
            </p>

            <p className="mt-5 max-w-[620px] font-sans text-[12px] leading-6 text-[#202522]/60 sm:text-[13px]">
              This is a self-assessment for reflection and discussion, not a
              medical diagnosis or clinical risk score.
            </p>

            <Link
              href="/assessment"
              className="mt-7 inline-flex min-h-12 items-center bg-[#17413D] px-7 font-sans text-[12px] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#12332F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#17413D]"
            >
              Start the free assessment →
            </Link>
          </div>

          <div className="py-9 lg:py-12 lg:pl-12 xl:pl-16">
            <div className="border border-[#202522]/10 bg-white p-6 sm:p-8">
              <div className="border-b border-[#202522]/10 pb-6">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65736D]">
                  Traffic Light System
                </p>

                <div className="mt-6 flex items-center justify-center gap-4">
                  {results.map(([label, , , dot]) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="h-9 w-9 rounded-full border-4 border-white shadow-[0_0_0_1px_rgba(32,37,34,0.14)] sm:h-11 sm:w-11"
                        style={{ backgroundColor: dot }}
                      />
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#65736D]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2">
                {results.map(([label, title, description]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[72px_1fr] gap-4 border-b border-[#202522]/10 py-5 last:border-b-0 sm:grid-cols-[86px_1fr]"
                  >
                    <span className="pt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#202522]/55">
                      {label}
                    </span>
                    <div>
                      <p className="font-serif text-[22px] font-medium leading-[1.08] text-[#202522] sm:text-[24px]">
                        {title}
                      </p>
                      <p className="mt-1 font-sans text-[13px] leading-6 text-[#202522]/60 sm:text-[14px]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
