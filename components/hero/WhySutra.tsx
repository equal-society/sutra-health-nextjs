import Link from "next/link";
import Container from "@/components/shared/Container";

const principles = [
  {
    number: "01",
    title: "Doctor-led",
    text: "Healthcare remains central, with lifestyle practices coordinated alongside appropriate medical care.",
  },
  {
    number: "02",
    title: "Evidence-informed",
    text: "Recommendations are grounded in health knowledge and practical lifestyle approaches rather than quick fixes.",
  },
  {
    number: "03",
    title: "Whole-person",
    text: "We look beyond a single symptom to the patterns, habits and circumstances that shape everyday health.",
  },
  {
    number: "04",
    title: "Practical",
    text: "The focus is on manageable changes that can fit into real life, not an idealised routine.",
  },
  {
    number: "05",
    title: "Long-term",
    text: "The aim is to build understanding and habits that can be sustained and adapted over time.",
  },
];

export default function WhySutra() {
  return (
    <section
      aria-labelledby="why-sutra-title"
      className="relative overflow-hidden bg-[#173F35] py-20 text-[#F7F5EF] sm:py-24 lg:py-32"
    >
      <Container>
        <div className="relative">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#A9BDB1]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B8C8BF] sm:text-[11px]">
                  Why Sutra?
                </p>
              </div>

              <h2
                id="why-sutra-title"
                className="mt-5 max-w-[580px] font-serif text-[43px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[53px] lg:text-[63px]"
              >
                Care that sees
                <br />
                <span className="italic font-normal text-[#C7D5CC]">
                  the whole person.
                </span>
              </h2>
            </div>

            <p className="max-w-[680px] text-[15px] leading-8 text-[#D4DED8] sm:text-[16px] sm:leading-8.5">
              Sutra Health brings doctor-led medical care together with
              evidence-informed lifestyle practices, helping people understand
              the patterns that influence health and make changes that can last.
            </p>
          </div>

          {/* Principles */}
          <div className="mt-14 hidden border-y border-white/15 sm:block lg:mt-20">
            <div className="grid grid-cols-5">
              {principles.map((principle, index) => (
                <article
                  key={principle.number}
                  className={`group min-h-[285px] px-5 py-7 lg:px-6 lg:py-9 ${
                    index < principles.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[18px] text-[#A9BDB1]">
                      {principle.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-[#718E82] transition-all duration-300 group-hover:w-10 group-hover:bg-[#C7D5CC]"
                    />
                  </div>

                  <h3 className="mt-12 font-serif text-[25px] leading-none tracking-[-0.025em] text-[#F7F5EF] lg:text-[29px]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-[12px] leading-6 text-[#B8C8BF] lg:text-[13px] lg:leading-7">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile slider */}
          <div className="mt-10 sm:hidden">
            <div
              className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Why Sutra Health"
            >
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="flex min-h-[270px] w-[82vw] max-w-[310px] shrink-0 snap-start flex-col rounded-[20px] border border-white/12 bg-white/[0.06] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 font-serif text-[14px] text-[#C7D5CC]">
                      {principle.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-9 bg-[#718E82]"
                    />
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-serif text-[30px] leading-none tracking-[-0.03em]">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-5.5 text-[#C1D0C8]">
                      {principle.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex items-center justify-between px-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9FB4A9]">
                Swipe through the principles
              </p>
              <span aria-hidden="true" className="text-[16px] text-[#C7D5CC]">
                →
              </span>
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-12 border-t border-white/12 pt-7 sm:mt-16 sm:pt-8 lg:mt-20">
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
              <p className="max-w-[720px] font-serif text-[21px] leading-[1.25] tracking-[-0.02em] text-[#E1E8E3] sm:text-[25px]">
                Not a quick fix. A more thoughtful way to work on health.
              </p>

              <Link
                href="/approach"
                className="group inline-flex items-center gap-3 text-[12px] font-semibold text-[#F7F5EF] sm:text-[13px]"
              >
                See how our approach works
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
