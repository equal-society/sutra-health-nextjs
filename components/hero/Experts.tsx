import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Experts() {
  return (
    <section
      id="clinical-team"
      aria-labelledby="clinical-team-heading"
      className="bg-[var(--sutra-porcelain)]"
    >
      <Container>
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="relative">
            <div className="relative aspect-[4/4.7] w-full max-w-[520px] overflow-hidden">
              <Image
                src="/images/doctors.png"
                alt="Dr. Rakesh Sarwal, public health physician and Therapeutic Yoga Consultant"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="max-w-[650px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Meet the Clinical Team
            </p>

            <h2
              id="clinical-team-heading"
              className="mt-5 max-w-xl font-[var(--font-dm-serif)] text-4xl leading-[1.05] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-5xl lg:text-6xl"
            >
              Clinical guidance grounded in public health.
            </h2>

            <div className="mt-7">
              <p className="text-base font-semibold leading-7 text-[var(--sutra-teal)] sm:text-lg">
                Dr. Rakesh Sarwal, MBBS, MPH, DrPH
              </p>
              <p className="mt-1 text-sm text-[var(--sutra-muted)] sm:text-base">
                Therapeutic Yoga Consultant
              </p>
            </div>

            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
              <p>
                Dr. Rakesh Sarwal is a public health physician and Therapeutic
                Yoga Consultant whose work focuses on prevention and
                evidence-informed lifestyle change alongside appropriate
                medical care.
              </p>

              <p>
                Sutra Health brings these perspectives together to help people
                make practical changes that can fit into everyday life.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/doctors"
                className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[var(--sutra-teal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-4"
              >
                <span className="border-b border-[var(--sutra-teal)] pb-1">
                  Meet our clinical team
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[var(--sutra-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-4"
              >
                <span className="border-b border-[var(--sutra-muted)] pb-1">
                  Academic profile
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </div>

            <p className="mt-7 max-w-xl border-t border-[var(--sutra-border)] pt-5 text-xs leading-5 text-[var(--sutra-muted)]">
              Lifestyle and therapeutic approaches complement appropriate
              medical care.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
