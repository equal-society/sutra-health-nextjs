
import Link from "next/link";
import Container from "@/components/shared/Container";

const areas = [
  "Sleep",
  "Digestion",
  "Movement",
  "Nutrition",
  "Mental wellbeing",
];

export default function Assessment() {
  return (
    <section
      aria-labelledby="assessment-title"
      className="bg-[#F7F5EF] py-20 text-[#202522] sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          {/* Introduction */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                A simple place to start
              </p>
            </div>

            <h2
              id="assessment-title"
              className="mt-6 max-w-[620px] font-serif text-[42px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]"
            >
              Understand your everyday{" "}
              <span className="font-normal italic text-[#17413D]">
                health habits.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-[16px] leading-7 text-[#65736D] sm:text-[18px] sm:leading-8">
              Answer 21 simple questions about areas such as sleep, digestion,
              movement, nutrition and mental wellbeing. Your responses can
              help you notice where things are going well and where you may
              want to focus.
            </p>

            <div className="mt-8">
              <Link
                href="/assessment"
                className="group inline-flex min-h-[50px] items-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#12332F] sm:text-[13px]"
              >
                Take the Assessment

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Assessment areas */}
          <div>
            <div className="border-t border-[#202522]/10">
              {areas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center justify-between border-b border-[#202522]/10 py-5 sm:py-6"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-serif text-[16px] text-[#91A298]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[16px] text-[#202522] sm:text-[18px]">
                      {area}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#17413D]/15 text-[15px] text-[#17413D]"
                  >
                    +
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[500px] text-[12px] leading-6 text-[#65736D] sm:text-[13px]">
              A reflection tool to help you think about your health habits.
              It is not a medical diagnosis.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}