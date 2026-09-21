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
      className="bg-[var(--sutra-teal)] py-20 text-[var(--sutra-white)] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
            How Sutra Works
          </p>

          <h2
            id="how-it-works-heading"
            className="max-w-2xl font-[var(--font-dm-serif)] text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
          >
            A practical approach to making health changes.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            We help you understand where you are, decide what matters most,
            and work through changes that can fit into everyday life.
          </p>
        </div>

        {/* Process */}
        <ol className="mt-16 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="group bg-[var(--sutra-teal)] p-7 transition-colors duration-300 hover:bg-[var(--sutra-teal-hover)] sm:p-8 lg:min-h-[330px] lg:p-9"
            >
              <div className="flex h-full flex-col">
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--sutra-sage)]">
                  {step.number}
                </span>

                <div className="mt-auto">
                  <div
                    aria-hidden="true"
                    className="mb-7 h-px w-10 bg-white/30 transition-all duration-300 group-hover:w-16"
                  />

                  <h3 className="font-[var(--font-dm-serif)] text-3xl leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <Link
            href="/approach"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--sutra-teal)]"
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
