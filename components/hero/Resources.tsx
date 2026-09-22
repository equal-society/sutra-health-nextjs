import Link from "next/link";

const resources = [
  {
    type: "Health Articles",
    title: "Practical ideas for everyday health",
    description:
      "Straightforward articles written for people without a medical background — no jargon, just practical explanations.",
    href: "/resources/articles",
    label: "Read articles",
  },
  {
    type: "Research & Evidence",
    title: "The evidence behind our approach",
    description:
      "Explore research and publications that inform lifestyle-based and integrative approaches to health.",
    href: "/resources/research",
    label: "Explore research",
  },
  {
    type: "Health Guides",
    title: "Understand your health better",
    description:
      "Useful information to help you learn more about common health concerns and possible next steps.",
    href: "/resources",
    label: "Browse resources",
  },
];

export default function Resources() {
  return (
    <section
      id="health-resources"
      aria-labelledby="health-resources-heading"
      className="bg-[var(--sutra-porcelain)] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Health Resources
            </p>

            <h2
              id="health-resources-heading"
              className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-5xl lg:text-6xl"
            >
              Information you can use.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
            Not ready to book yet? Start here — clear health information,
            research and practical guidance to help you make an informed
            choice.
          </p>
        </div>

        <div className="mt-14 grid border-t border-[var(--sutra-border-strong)] sm:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-[var(--sutra-border-strong)]">
          {resources.map((resource, index) => (
            <article
              key={resource.type}
              className="group border-b border-[var(--sutra-border-strong)] py-8 first:pt-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:py-8 lg:first:pl-0 lg:last:pr-0"
            >
              <Link
                href={resource.href}
                className="block min-h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-inset"
              >
                <div className="flex items-start justify-between gap-6">
                  <span
                    aria-hidden="true"
                    className="font-serif text-4xl leading-none text-[var(--sutra-sage)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg text-[var(--sutra-teal)] transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                  {resource.type}
                </p>

                <h3 className="mt-4 max-w-sm font-serif text-2xl leading-tight tracking-[-0.01em] text-[var(--sutra-ink)] sm:text-3xl">
                  {resource.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--sutra-muted)] sm:text-base">
                  {resource.description}
                </p>

                <span className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--sutra-teal)]">
                  <span className="border-b border-[var(--sutra-teal)] pb-1">
                    {resource.label}
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-[var(--sutra-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[var(--sutra-muted)]">
            New articles and evidence are added as our knowledge base grows.
          </p>

          <Link
            href="/resources"
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 text-sm font-semibold text-[var(--sutra-teal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-4"
          >
            <span className="border-b border-[var(--sutra-teal)] pb-1">
              Explore all resources
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