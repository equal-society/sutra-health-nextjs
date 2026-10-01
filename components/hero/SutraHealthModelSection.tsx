import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

const principles = [
  {
    number: "01",
    title: "Integration",
    text: "Relevant clinical, lifestyle, nutrition, Yoga and behaviour support can be brought together around the person's needs.",
  },
  {
    number: "02",
    title: "Motivation",
    text: "Understanding why a change matters can make it easier to turn information into action.",
  },
  {
    number: "03",
    title: "Personalisation",
    text: "Support is shaped around health, circumstances, preferences and goals rather than a fixed formula.",
  },
];

export default function SutraHealthModelSection() {
  return (
    <section
      aria-labelledby="model-heading"
      className="bg-[var(--sutra-porcelain)]"
    >
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">

          {/* Intro */}
          <div className="grid gap-8 border-b border-[var(--sutra-border)] pb-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20 lg:pb-12">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[var(--sutra-sage)]"
                />

                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                  The Sutra Health model
                </p>
              </div>

              <h2
                id="model-heading"
                className="mt-5 max-w-[760px] font-serif text-[40px] font-medium leading-[1.03] tracking-[-0.04em] text-[var(--sutra-ink)] sm:text-[52px] lg:text-[64px]"
              >
                A personalised approach to better health.
              </h2>
            </div>

            <p className="max-w-[500px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">
              Sutra Health brings relevant support together, helps people find
              motivation for change and adapts the work to the person rather
              than relying on a one-size-fits-all plan.
            </p>
          </div>

          {/* Principles */}
          <div className="border-b border-[var(--sutra-border)]">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-5 border-t border-[var(--sutra-border)] py-8 sm:grid-cols-[60px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-10"
              >
                <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[var(--sutra-sage)]">
                  {principle.number}
                </span>

                <h3 className="font-serif text-[28px] leading-none tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[34px]">
                  {principle.title}
                </h3>

                <p className="max-w-[560px] font-sans text-[14px] leading-7 text-[var(--sutra-muted)] sm:text-[15px] sm:leading-7">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>

          {/* Approach link */}
          <div className="mt-8">
            <Link
              href="/approach"
              className="group inline-flex items-center font-sans text-[13px] font-semibold text-[var(--sutra-ink)] underline decoration-[var(--sutra-sage)] underline-offset-4 transition-opacity hover:opacity-65 sm:text-[14px]"
            >
              Explore the full approach

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}