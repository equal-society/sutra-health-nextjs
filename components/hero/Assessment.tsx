import Link from "next/link";

const trafficLightItems = [
  {
    label: "Green",
    title: "Optimal",
    description: "Areas that are going well.",
    dot: "bg-[#557A5B]",
  },
  {
    label: "Yellow",
    title: "Adjust",
    description: "Areas where adjustment may help.",
    dot: "bg-[#B39A54]",
  },
  {
    label: "Red",
    title: "Attention",
    description: "Areas that need attention.",
    dot: "bg-[#A85B55]",
  },
];

export default function Assessment() {
  return (
    <section
      id="assessment"
      aria-labelledby="assessment-heading"
      className="bg-[var(--sutra-porcelain)] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="max-w-[680px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              21-Point Health Assessment
            </p>

            <h2
              id="assessment-heading"
              className="mt-4 max-w-xl font-[var(--font-dm-serif)] text-4xl leading-[1.06] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-5xl lg:text-6xl"
            >
              Understand where your health needs attention.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
              The 21-Point Health Assessment helps you look at key areas of
              lifestyle and health behaviour. A simple Traffic Light System
              shows where things are going well and where changes may need
              attention.
            </p>

            <Link
              href="/assessment"
              className="group mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[var(--sutra-teal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-4"
            >
              <span className="border-b border-[var(--sutra-teal)] pb-1">
                Take the 21-Point Health Assessment
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <div
            className="border-y border-[var(--sutra-border-strong)]"
            aria-label="Traffic Light System for the health assessment"
          >
            <div className="grid sm:grid-cols-3">
              {trafficLightItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-5 py-6 sm:px-6 sm:py-8 lg:px-8 ${
                    index < trafficLightItems.length - 1
                      ? "border-b border-[var(--sutra-border)] sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4 sm:block">
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 block h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`}
                    />

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:mt-5">
                        {item.label}
                      </p>

                      <p className="mt-1.5 font-[var(--font-dm-serif)] text-2xl leading-tight text-[var(--sutra-ink)] sm:text-3xl">
                        {item.title}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[var(--sutra-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--sutra-border-strong)] px-5 py-4 sm:px-6 sm:py-5 lg:px-8">
              <p className="text-xs leading-5 text-[var(--sutra-muted)]">
                The assessment uses a Traffic Light System for Health
                Behaviour Change to help identify areas for attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
