import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

export default function AssessmentSection() {
  return (
    <section
      id="assessment"
      aria-labelledby="assessment-heading"
      className="bg-[var(--sutra-porcelain)]"
    >
      <Container>
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-32">
          {/* Content */}
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                21-Question Lifestyle Assessment
              </p>
            </div>

            <h2
              id="assessment-heading"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[58px]"
            >
              How healthy is your current lifestyle?
            </h2>

            <p className="mt-6 max-w-[540px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">
              Answer 21 simple questions about your everyday health habits and
              see where you may want to focus your attention.
            </p>

            <div className="mt-8">
              <Link
                href="/assessment"
                className="group inline-flex min-h-12 w-full items-center justify-center bg-[var(--sutra-teal)] px-6 py-3.5 font-sans text-[13px] font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-sage)] focus-visible:ring-offset-2 sm:w-fit sm:px-7 sm:text-[14px]"
              >
                Take the 21-Question Assessment

                <ArrowUpRight
                  size={16}
                  className="ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <p className="mt-4 max-w-[500px] font-sans text-[11px] leading-5 text-[var(--sutra-muted)]">
              The Traffic Light result is a starting point for reflection, not
              a medical diagnosis.
            </p>
          </div>

          {/* Existing Traffic Light visual */}
          <div className="relative">
            <div className="overflow-hidden border border-[var(--sutra-border)] bg-white">
              <div className="relative aspect-[1.4/1]">
                <Image
                  src="/images/traffic-light-system.webp"
                  alt="Sutra Health 21-point Traffic Light System for lifestyle assessment"
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}