import Link from "next/link";
import Container from "@/components/shared/Container";

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the whole picture — your health, everyday life, priorities and goals.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Recognise the patterns and areas that may be useful to work on.",
  },
  {
    number: "03",
    title: "Personalise",
    description:
      "Build a practical plan around the individual rather than a generic routine.",
  },
  {
    number: "04",
    title: "Practise",
    description:
      "Turn understanding into manageable actions that can be practised in everyday life.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "Build habits that are realistic enough to continue rather than relying on short-term routines.",
  },
  {
    number: "06",
    title: "Adapt",
    description:
      "Review what is working, learn from experience and adjust the plan as circumstances change.",
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="relative overflow-hidden bg-[#EEF2EC] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="relative">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#82978C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5E7168] sm:text-[11px]">
                  How it works
                </p>
              </div>

              <h2
                id="how-it-works-title"
                className="mt-5 max-w-[590px] font-serif text-[42px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[52px] lg:text-[62px]"
              >
                A better way to
                <br />
                <span className="italic font-normal text-[#17413D]">
                  move forward.
                </span>
              </h2>
            </div>

            <div className="max-w-[640px] lg:pb-1">
              <p className="text-[14px] leading-7 text-[#4F5F58] sm:text-[15px] sm:leading-8">
                The Sutra Health Method describes how we work: understand,
                identify, personalise, practise, sustain and adapt.
              </p>

              <p className="mt-4 max-w-[590px] text-[12px] leading-6 text-[#6C7D75] sm:text-[13px] sm:leading-7">
                It connects different practices into one coordinated approach,
                while allowing your plan to change as your needs and
                circumstances change.
              </p>
            </div>
          </div>

          {/* Desktop process */}
          <div className="mt-14 hidden sm:block lg:mt-20">
            <div className="relative">
              {/* Connecting line */}
              <div
                aria-hidden="true"
                className="absolute left-[8%] right-[8%] top-[31px] h-px bg-[#17413D]/15"
              />

              <div className="relative grid grid-cols-3 lg:grid-cols-6">
                {stages.map((stage) => (
                  <article
                    key={stage.number}
                    className="group relative px-4 lg:px-5"
                  >
                    {/* Number marker */}
                    <div className="relative z-10 flex h-[63px] items-center">
                      <span className="flex h-[63px] w-[63px] items-center justify-center rounded-full border border-[#17413D]/15 bg-[#EEF2EC] font-serif text-[18px] text-[#17413D] transition-all duration-300 group-hover:border-[#17413D]/35 group-hover:bg-[#F7F5EF] group-hover:shadow-[0_8px_24px_rgba(23,65,61,0.08)]">
                        {stage.number}
                      </span>
                    </div>

                    <div className="mt-8 border-t border-[#17413D]/10 pt-5">
                      <h3 className="font-serif text-[27px] leading-none tracking-[-0.025em] text-[#17413D] lg:text-[30px]">
                        {stage.title}
                      </h3>

                      <p className="mt-4 max-w-[185px] text-[12px] leading-6 text-[#687971] lg:text-[13px] lg:leading-7">
                        {stage.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile process */}
          <div className="mt-10 sm:hidden">
            <div
              className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="The six stages of the Sutra Health Method"
            >
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="flex min-h-[315px] w-[84vw] max-w-[330px] shrink-0 snap-start flex-col rounded-[22px] border border-[#17413D]/10 bg-[#F7F5EF] p-6 shadow-[0_10px_35px_rgba(23,65,61,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#17413D]/15 font-serif text-[16px] text-[#17413D]">
                      {stage.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-[#AAB9B1]"
                    />
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-serif text-[32px] leading-none tracking-[-0.03em] text-[#17413D]">
                      {stage.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-6 text-[#687971]">
                      {stage.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-1 flex items-center justify-between px-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#809087]">
                Swipe through the method
              </p>
              <span aria-hidden="true" className="text-[16px] text-[#17413D]">
                →
              </span>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-12 border-t border-[#17413D]/12 pt-7 sm:mt-16 sm:pt-8 lg:mt-20">
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
              <p className="max-w-[720px] font-serif text-[22px] leading-[1.2] tracking-[-0.02em] text-[#17413D] sm:text-[26px]">
                Not a rigid programme. A process that evolves with you.
              </p>

              <Link
                href="/approach"
                className="group inline-flex items-center gap-3 text-[12px] font-semibold text-[#17413D] sm:text-[13px]"
              >
                Explore the Sutra Health Method
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
