import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

export default function Conditions() {
  const conditions = getAllConditions();

  return (
    <section
      id="conditions"
      aria-labelledby="conditions-title"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          {/* Section Intro */}
          <div className="max-w-[1000px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Health Conditions
              </p>
            </div>

            <h2
              id="conditions-title"
              className="mt-4 max-w-[850px] font-serif text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[42px] lg:text-[54px]"
            >
              Care that considers your whole health.
            </h2>

            <p className="mt-4 max-w-[750px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px]">
              Explore the health conditions we support through personalised,
              evidence-informed care.
            </p>
          </div>

          {/* Compact Condition Links */}
          <div className="mt-8 grid border-t border-[var(--sutra-border)] sm:grid-cols-4 sm:gap-x-1">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group flex items-center gap-4 border-b border-[var(--sutra-border)] py-4 transition-colors hover:text-[var(--sutra-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)]"
              >
                <span className="font-sans text-[15px] font-medium text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[16px]">
                  {condition.title}
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-teal)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>

          {/* All Conditions */}
          <div className="mt-5">
            <Link
              href="/conditions"
              className="group inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-[var(--sutra-teal)] hover:text-[var(--sutra-teal-hover)]"
            >
              View all conditions
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

