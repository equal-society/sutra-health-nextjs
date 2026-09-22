import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with your health, your concerns and the everyday factors that may be affecting how you feel.",
  },
  {
    number: "02",
    title: "Personalise",
    description:
      "Build a practical plan around your health needs, priorities and real life.",
  },
  {
    number: "03",
    title: "Practise",
    description:
      "Turn the plan into manageable changes around food, movement, sleep, stress and other daily habits.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Look at what is changing, what is working and what needs to be adapted as you move forward.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-[var(--sutra-teal)] py-16 text-[var(--sutra-white)] sm:py-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Introduction */}
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
            How Sutra Works
          </p>

          <h2
            id="how-it-works-heading"
            className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
          >
            A practical approach to making health changes.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            We help you understand where you are, decide what matters most,
            and work through changes that can fit into everyday life.
          </p>
        </div>

        {/* Mobile: one step per swipe */}
        <div
          className="
            mt-10
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-3
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            md:hidden
          "
          aria-label="How Sutra Works steps"
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="
                w-[calc(100%-24px)]
                min-w-[calc(100%-24px)]
                shrink-0
                snap-center
                border
                border-white/15
                p-7
              "
            >
              <div className="flex min-h-[270px] flex-col">
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--sutra-sage)]">
                  {step.number}
                </span>

                <div className="mt-auto">
                  <div
                    aria-hidden="true"
                    className="mb-6 h-px w-10 bg-white/30"
                  />

                  <h3 className="font-serif text-3xl leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile swipe indicator */}
        <div className="mt-3 flex items-center justify-between md:hidden">
          <p className="text-[11px] text-white/50">
            Swipe to explore
          </p>

          <span
            aria-hidden="true"
            className="text-sm text-white/50"
          >
            →
          </span>
        </div>

        {/* Desktop: four steps */}
        <ol className="mt-12 hidden overflow-hidden border border-white/15 md:grid md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`
                p-7
                lg:p-8
                ${index < 3 ? "lg:border-r lg:border-white/15" : ""}
                ${index < 2 ? "md:border-b md:border-white/15 lg:border-b-0" : ""}
                ${index % 2 === 0 ? "md:border-r md:border-white/15 lg:border-r" : ""}
              `}
            >
              <div className="flex min-h-[245px] flex-col">
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--sutra-sage)]">
                  {step.number}
                </span>

                <div className="mt-auto">
                  <div
                    aria-hidden="true"
                    className="mb-6 h-px w-10 bg-white/30"
                  />

                  <h3 className="font-serif text-3xl leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-7">
          <Link
            href="/approach"
            className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--sutra-teal)]"
          >
            <span className="border-b border-white pb-1">
              Explore our approach
            </span>

            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}