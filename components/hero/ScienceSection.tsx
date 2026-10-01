import Link from "next/link";
import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import { title } from "process";

const sciencePoints = [
  {
    number: "01",
    title: "Everyday behaviours can influence health over time.",
  },
  {
    number: "02",
    title: "Lifestyle Medicine brings these factors into healthcare using evidence-informed guidance.",
  },
  {
    number: "03",
    title: "Care is shaped around the person, their health needs and their circumstances.",
  },
];

export default function ScienceSection() {
  return (
    <section
      aria-labelledby="science-heading"
      className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]"
    >
      <Container>
        <div className="py-20 sm:py-24 lg:py-28">

          {/* Heading */}
          <div >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                The science
              </p>
            </div>

            <h2
              id="science-heading"
              className="mt-5  font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[58px]"
            >
              Why does Lifestyle Medicine belong in healthcare?
            </h2>

       
          </div>

          {/* Science points */}
          <div className="mt-12 border-t border-[var(--sutra-border)] sm:mt-16">
            {sciencePoints.map((point) => (
              <div
                key={point.number}
                className="grid gap-4 border-b border-[var(--sutra-border)] py-7 sm:grid-cols-[70px_1.2fr] sm:items-start sm:gap-8 sm:py-8"
              >
                <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[var(--sutra-sage)]">
                  {point.number}
                </span>

                <h3 className="font-serif text-[24px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] sm:text-[24px]">
                  {point.title}
                </h3>

              
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <Link
              href="/resources/research"
              className="group inline-flex items-center font-sans text-[13px] font-semibold text-[var(--sutra-ink)] underline decoration-[var(--sutra-sage)] underline-offset-4 transition-opacity hover:opacity-70"
            >
              Explore research & evidence
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/approach"
              className="group inline-flex items-center font-sans text-[13px] font-semibold text-[var(--sutra-ink)] underline decoration-[var(--sutra-sage)] underline-offset-4 transition-opacity hover:opacity-70"
            >
              How Sutra Health approaches care
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