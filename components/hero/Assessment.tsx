import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
  "Nutrition",
  "Sleep",
  "Digestion",
  "Physical activity",
  "Mental wellbeing",
];

export default function Assessment() {
  return (
    <section
      id="assessment"
      aria-labelledby="assessment-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="overflow-hidden bg-[#E7EDE8]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* =================================================
                LEFT — MAIN MESSAGE
            ================================================== */}
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#91A298]"
                />

                <span className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                  A simple place to start
                </span>
              </div>

              {/* Heading */}
              <h2
                id="assessment-title"
                className="mt-5 max-w-[620px] font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-[#202522] sm:text-[44px] lg:text-[50px]"
              >
                Understand your health
                <br className="hidden sm:block" />
                before changing it.
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[560px] font-sans text-[16px] leading-[1.7] text-[#4F5A54] sm:text-[17px]">
                The Sutra 21-Point Health Assessment looks at key lifestyle
                factors that can influence your everyday health and wellbeing.
              </p>

              {/* CTA */}
              <Link
                href="/score"
                className="group mt-7 inline-flex h-[52px] items-center justify-center bg-[#17413D] px-6 font-sans text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#12332F]"
              >
                Take the 21-Point Assessment

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              {/* Small disclaimer */}
              <p className="mt-4 max-w-[500px] font-sans text-[12px] leading-[1.6] text-[#65736D]">
                A starting point for reflection, not a medical diagnosis or
                replacement for professional care.
              </p>
            </div>

            {/* =================================================
                RIGHT — 21 VISUAL
            ================================================== */}
            <div className="relative flex flex-col justify-between bg-[#F7F5EF] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              {/* Large number */}
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="font-serif text-[112px] font-medium leading-[0.78] tracking-[-0.07em] text-[#17413D] sm:text-[140px] lg:text-[156px]"
                >
                  21
                </span>

                <span className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#65736D]">
                  Point
                  <br />
                  assessment
                </span>
              </div>

              {/* Focus areas */}
              <div className="mt-10 lg:mt-16">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#65736D]">
                    What it looks at
                  </p>

                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-[#91A298]"
                  />
                </div>

                <ul>
                  {focusAreas.map((area, index) => (
                    <li
                      key={area}
                      className="flex items-center gap-4 border-t border-[#202522]/10 py-3.5"
                    >
                      <span className="font-sans text-[11px] font-medium text-[#91A298]">
                        0{index + 1}
                      </span>

                      <span className="font-sans text-[15px] font-medium text-[#202522] sm:text-[16px]">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}
          <div className="border-t border-[#202522]/10 px-6 py-5 sm:px-10 lg:px-14 xl:px-16">
            <p className="max-w-[760px] font-sans text-[14px] leading-[1.65] text-[#4F5A54] sm:text-[15px]">
              Use your responses to identify areas where small, practical
              changes may be worth exploring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}