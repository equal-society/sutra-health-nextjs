import Link from "next/link";
import Container from "@/components/shared/Container";

export default function LifestyleHealthSection() {
  return (
    <section
      aria-labelledby="lifestyle-health-title"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          {/* Intro */}
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Lifestyle & Health
              </p>
            </div>

            <h2
              id="lifestyle-health-title"
              className="mt-5 max-w-[1000px] font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[64px]"
            >
              Your everyday life is part of your health.
            </h2>

            <div className="mt-7 max-w-[950px] space-y-5 font-sans text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
              <p>
                Daily patterns can affect energy, wellbeing and the way some long-term
                health concerns are managed. They are worth discussing as part of a
                broader view of your health.
              </p>

              <p>
                The aim is not to change everything at once. Small, realistic steps
                can help you build a routine you can maintain, with clinical guidance
                where it is needed.
              </p>

              <p>
                We consider these everyday factors alongside appropriate medical care,
                then help you identify practical changes that can fit your routine.
              </p>
            </div>

            <Link
              href="/services/lifestyle"
              className="group mt-7 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:text-[var(--sutra-teal-hover)]"
            >
              Explore Lifestyle Medicine
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
