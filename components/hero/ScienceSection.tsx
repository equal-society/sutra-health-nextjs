import Link from "next/link";
import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";



export default function ScienceSection() {
  return (
    <section
      aria-labelledby="science-heading"
      className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]"
    >
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          {/* Heading */}
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                The Science
              </p>
            </div>

            <h2
              id="science-heading"
              className="mt-5 max-w-[1000px] font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[64px]"
            >
              Why does Lifestyle Medicine work?
            </h2>

            <p className="mt-7 max-w-[900px] font-sans text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
              Lifestyle Medicine uses evidence-informed practices across areas such
              as nutrition, physical activity, restorative sleep and stress care.
              These are considered with a person’s medical history and treatment
              needs—not as a substitute for necessary medical care.
            </p>
          </div>

          {/* Links */}
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
            <Link
              href="/resources/research"
              className="group inline-flex items-center font-sans text-[14px] font-semibold text-[var(--sutra-ink)] underline decoration-[var(--sutra-sage)] underline-offset-4 transition-opacity hover:opacity-70"
            >
              Explore research & evidence
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/approach"
              className="group inline-flex items-center font-sans text-[14px] font-semibold text-[var(--sutra-ink)] underline decoration-[var(--sutra-sage)] underline-offset-4 transition-opacity hover:opacity-70"
            >
              How Sutra Health approaches care
              <ArrowUpRight
                size={16}
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
