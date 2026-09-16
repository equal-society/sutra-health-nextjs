
import Link from "next/link";
import Container from "@/components/shared/Container";

const principles = [
  {
    number: "01",
    title: "Doctor-led",
    text: "Healthcare remains central to the way we work.",
  },
  {
    number: "02",
    title: "Evidence-informed",
    text: "Recommendations are grounded in health knowledge and practical lifestyle approaches.",
  },
  {
    number: "03",
    title: "Whole-person",
    text: "We look beyond a single symptom to understand the patterns that shape everyday health.",
  },
  {
    number: "04",
    title: "Practical",
    text: "The focus is on manageable changes that can fit into real life.",
  },
];

export default function WhySutra() {
  return (
    <section
      aria-labelledby="why-sutra-title"
      className="bg-[#E7EDE8] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Why Sutra
              </p>
            </div>

            <h2
              id="why-sutra-title"
              className="mt-5 max-w-[620px] font-serif text-[42px] font-medium leading-[1.02] tracking-[-0.045em] text-[#202522] sm:text-[52px] lg:text-[62px]"
            >
              A different way to care for{" "}
              <span className="font-normal italic text-[#17413D]">
                your health.
              </span>
            </h2>
          </div>

          <p className="max-w-[650px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8 lg:pb-1">
            We look beyond a single symptom to understand the habits, patterns
            and circumstances that shape your health, and focus on changes
            that can work in real life.
          </p>
        </div>

        {/* Desktop principles */}
        <div className="mt-14 hidden border-t border-[#202522]/12 sm:block lg:mt-20">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="grid gap-5 border-b border-[#202522]/12 py-7 sm:grid-cols-[70px_220px_1fr] sm:items-center sm:gap-8 lg:grid-cols-[90px_270px_1fr] lg:gap-10 lg:py-8"
            >
              <span className="font-serif text-[18px] text-[#91A298]">
                {principle.number}
              </span>

              <h3 className="font-serif text-[27px] leading-tight tracking-[-0.025em] text-[#17413D] sm:text-[29px] lg:text-[32px]">
                {principle.title}
              </h3>

              <p className="max-w-[650px] text-[16px] leading-7 text-[#65736D] sm:text-[17px] sm:leading-8">
                {principle.text}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile one-by-one swipe */}
        <div className="mt-10 sm:hidden">
          <div
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Why Sutra principles"
          >
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="flex min-h-[330px] w-[86vw] max-w-[360px] shrink-0 snap-center flex-col border border-[#202522]/12 bg-[#F7F5EF] px-6 py-6"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[18px] text-[#91A298]">
                    {principle.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-[#91A298]"
                  />
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="max-w-[300px] font-serif text-[36px] leading-[1.02] tracking-[-0.035em] text-[#17413D]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 max-w-[300px] text-[16px] leading-7 text-[#65736D]">
                    {principle.text}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#91A298]">
                    Why Sutra
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17413D]/15 text-[16px] text-[#17413D]"
                  >
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile pagination */}
          <div className="mt-5 flex items-center justify-between px-1">
            <div
              className="flex items-center gap-1.5"
              aria-hidden="true"
            >
              {principles.map((principle, index) => (
                <span
                  key={principle.number}
                  className={`h-1.5 rounded-full ${
                    index === 0
                      ? "w-6 bg-[#17413D]"
                      : "w-1.5 bg-[#91A298]/60"
                  }`}
                />
              ))}
            </div>

            <span
              aria-hidden="true"
              className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#65736D]"
            >
              Swipe
            </span>
          </div>
        </div>

        {/* Approach link */}
        <div className="mt-9 flex justify-start sm:mt-10 sm:justify-end">
          <Link
            href="/approach"
            className="group inline-flex items-center gap-3 border-b border-[#17413D]/25 pb-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#17413D] transition-colors duration-300 hover:border-[#17413D] sm:text-[13px]"
          >
            See our approach
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

