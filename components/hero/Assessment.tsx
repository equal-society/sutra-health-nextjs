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
      className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[26px] border border-[#17413D]/10 bg-[#E9EDE6] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#D4DFD5]/60 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[#82978C]"
                />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5E7168] sm:text-[11px]">
                  A simple place to start
                </p>
              </div>

              <h2
                id="assessment-title"
                className="mt-5 max-w-[650px] font-serif text-[42px] font-medium leading-[0.99] tracking-[-0.045em] text-[#202522] sm:text-[52px] lg:text-[61px]"
              >
                How are your everyday
                <br />
                health habits?
              </h2>

              <p className="mt-6 max-w-[600px] text-[14px] leading-7 text-[#53605B] sm:text-[15px] sm:leading-8">
                Answer 21 simple questions about everyday health habits and
                see where you may want to focus your attention.
              </p>

              <p className="mt-4 max-w-[570px] text-[12px] leading-6 text-[#71817B] sm:text-[13px] sm:leading-7">
                The assessment is a starting point for reflection — not a
                medical diagnosis or a replacement for professional care.
              </p>

              <Link
                href="/assessment"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(23,65,61,0.10)] transition-all duration-300 hover:bg-[#12332F] hover:shadow-[0_10px_28px_rgba(23,65,61,0.14)] sm:text-[13px]"
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

            <div className="lg:pl-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D]">
                It looks at areas including
              </p>

              <div className="mt-5 divide-y divide-[#17413D]/10 border-y border-[#17413D]/10">
                {areas.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="font-serif text-[20px] tracking-[-0.02em] text-[#17413D] sm:text-[22px]">
                      {area}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[10px] leading-5 text-[#71817B] sm:text-[11px] sm:leading-6">
                The assessment uses a simple traffic-light concept to help
                highlight habits to maintain and areas where mindful changes
                may be worth considering.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
