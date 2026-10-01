import Container from "@/components/shared/Container";

const lifestyleFactors = [
  "Diet & Nutrition",
  "Movement & Exercise",
  "Sleep & Recovery",
  "Stress & Emotional Wellbeing",
  "Social Connection",
  "Addiction-Free Living",
];

export default function LifestyleHealthSection() {
  return (
    <section
      aria-labelledby="lifestyle-health-title"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-24 lg:py-32">

          {/* Intro */}
          <div className="lg:sticky lg:top-24">
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
              className="mt-5 max-w-[620px] font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[46px] lg:text-[56px]"
            >
              Your everyday life is part of your health.
            </h2>

          </div>

          {/* Lifestyle factors */}
          <div className="border-t border-[var(--sutra-border)]">
            {lifestyleFactors.map((factor, index) => (
              <div
                key={factor}
                className="group flex items-center justify-between border-b border-[var(--sutra-border)] py-6 sm:py-7"
              >
                <div className="flex items-center gap-5">
                  <span className="font-sans text-[10px] font-medium tracking-[0.12em] text-[var(--sutra-sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-serif text-[23px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] sm:text-[28px]">
                    {factor}
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="ml-6 shrink-0 text-[20px] text-[var(--sutra-sage)] transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}