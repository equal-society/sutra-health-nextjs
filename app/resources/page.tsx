import Link from "next/link";
import Container from "@/components/shared/Container";

const resourceLinks = [
  {
    number: "01",
    label: "Health Articles",
    eyebrow: "Health knowledge",
    description:
      "Evidence-informed articles covering everyday health questions, conditions, nutrition, movement, stress, sleep and wellbeing.",
    href: "/resources/articles",
  },
  {
    number: "02",
    label: "Research & Evidence",
    eyebrow: "Evidence",
    description:
      "Explore research and evidence that inform Sutra Health's whole-person approach to health and lifestyle.",
    href: "/resources/research",
  },
  {
    number: "03",
    label: "21-Point Health Assessment",
    eyebrow: "Self-assessment",
    description:
      "Review everyday food, movement, sleep and lifestyle habits through Sutra Health's 21-point questionnaire.",
    href: "/assessment",
  },
  {
    number: "04",
    label: "Practice Knowledge System",
    eyebrow: "Our framework",
    description:
      "Learn more about the knowledge and principles that shape how Sutra Health approaches care.",
    href: "/resources/knowledge-system",
  },
];

const exploreLinks = [
  {
    label: "Health Conditions",
    description: "Understand common health concerns and explore practical support.",
    href: "/conditions",
  },
  {
    label: "What We Do",
    description: "Explore consultation, lifestyle medicine, nutrition, yoga and mind-body support.",
    href: "/what-we-do",
  },
  {
    label: "Doctors & Experts",
    description: "Meet the clinical team behind Sutra Health.",
    href: "/doctors",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      {/* HERO */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="max-w-[920px] py-14 sm:py-18 lg:py-24 xl:py-28">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[var(--sutra-sand)]"
                />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-muted)] sm:text-[11px]">
                  Sutra Health · Resources
                </p>
              </div>

              <h1 className="mt-6 max-w-[900px] font-[var(--font-serif)] text-[50px] font-medium leading-[0.95] tracking-[-0.05em] text-[var(--sutra-ink)] sm:text-[62px] md:text-[70px] lg:text-[78px] xl:text-[88px]">
                Knowledge to help you
                <br />
                <span className="text-[var(--sutra-teal)]">understand your health.</span>
              </h1>

              <div className="mt-8 flex max-w-[720px] items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2 h-12 w-px shrink-0 bg-[var(--sutra-sand)]"
                />
                <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
                  Explore practical health information, research, self-assessment
                  and the ideas that shape Sutra Health's approach to care.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRIMARY RESOURCES */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-white)]">
        <Container>
          <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-22">
            <div className="max-w-[700px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                Explore the collection
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[38px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[48px] lg:text-[54px]">
                Start with what you need.
              </h2>
            </div>

            <div className="mt-10 border-y border-[var(--sutra-border)]">
              {resourceLinks.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group grid gap-5 border-b border-[var(--sutra-border)] py-7 last:border-b-0 sm:grid-cols-[56px_minmax(220px,0.8fr)_1.4fr_auto] sm:items-center sm:gap-8 lg:py-8"
                >
                  <span className="font-[var(--font-serif)] text-[15px] text-[var(--sutra-sand)]">
                    {resource.number}
                  </span>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                      {resource.eyebrow}
                    </p>
                    <h3 className="mt-2 font-[var(--font-serif)] text-[23px] font-medium leading-[1.1] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[26px]">
                      {resource.label}
                    </h3>
                  </div>

                  <p className="max-w-[560px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                    {resource.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-[var(--sutra-teal)] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HEALTH ARTICLES FEATURE */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-22">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20">
              <div className="max-w-[760px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                  Health Articles
                </p>
                <h2 className="mt-4 font-[var(--font-serif)] text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[var(--sutra-teal)] sm:text-[52px] lg:text-[60px]">
                  Practical answers for everyday health questions.
                </h2>
                <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px] sm:leading-8">
                  Read clear, accessible articles about stress, nutrition,
                  movement, sleep, gut health and other areas of everyday wellbeing.
                </p>
              </div>

              <Link
                href="/resources/articles"
                className="group inline-flex h-[52px] w-fit items-center gap-3 bg-[var(--sutra-teal)] px-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
              >
                Explore Health Articles
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* EXPLORE SUTRA */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-white)]">
        <Container>
          <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-22">
            <div className="max-w-[700px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                Explore Sutra Health
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[38px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[48px]">
                Go beyond the resources.
              </h2>
            </div>

            <div className="mt-9 border-y border-[var(--sutra-border)]">
              {exploreLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group grid gap-4 border-b border-[var(--sutra-border)] py-6 last:border-b-0 sm:grid-cols-[48px_0.8fr_1.2fr_auto] sm:items-center sm:gap-8"
                >
                  <span className="font-[var(--font-serif)] text-[14px] text-[var(--sutra-sand)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-[var(--font-serif)] text-[22px] font-medium tracking-[-0.02em] text-[var(--sutra-ink)]">
                    {item.label}
                  </h3>

                  <p className="text-[13px] leading-6 text-[var(--sutra-muted)]">
                    {item.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-[var(--sutra-teal)] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--sutra-teal)]">
        <Container>
          <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-22">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
              <div className="max-w-[720px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sand)] sm:text-[11px]">
                  Need personalised support?
                </p>
                <h2 className="mt-4 font-[var(--font-serif)] text-[40px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-porcelain)] sm:text-[50px] lg:text-[58px]">
                  Information is a starting point.
                </h2>
                <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-[var(--sutra-pale-sage)]">
                  If you would like to discuss your health, you can explore
                  consultation with the Sutra Health team.
                </p>
              </div>

              <Link
                href="/book-appointment"
                className="inline-flex h-[52px] w-fit items-center gap-3 bg-[var(--sutra-porcelain)] px-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)] transition-colors hover:bg-white"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
