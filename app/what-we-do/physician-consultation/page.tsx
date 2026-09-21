import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const points = [
  "Understand your current health concerns",
  "Review your medical and lifestyle history",
  "Identify factors that may be affecting your health",
  "Create a practical, personalised care plan",
];

export const metadata = {
  title: "Physician Consultation | Sutra Health",
  description:
    "Doctor-led physician consultation focused on understanding your health, medical history, lifestyle and individual needs.",
  alternates: {
    canonical:
      "https://lifequality.org.in/what-we-do/physician-consultation",
  },
};

export default function PhysicianConsultationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--sutra-porcelain)] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              What We Do
            </p>

            <h1 className="mt-5 font-[var(--font-serif)] text-4xl leading-[1.05] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-5xl lg:text-7xl">
              Physician Consultation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
              Start with a conversation about your health. Our physician-led
              consultation looks beyond individual symptoms to understand your
              medical history, lifestyle and everyday factors that may affect
              your wellbeing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  bg-[var(--sutra-teal)]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[var(--sutra-teal-hover)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--sutra-teal)]
                  focus-visible:ring-offset-4
                "
              >
                Book a consultation
                <ArrowRight size={17} strokeWidth={1.5} />
              </Link>

              <Link
                href="/assessment"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  border
                  border-[var(--sutra-border-strong)]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-[var(--sutra-teal)]
                  transition-colors
                  hover:border-[var(--sutra-teal)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--sutra-teal)]
                  focus-visible:ring-offset-4
                "
              >
                Take the health assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-[var(--sutra-white)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                The consultation
              </p>

              <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] sm:text-4xl">
                A clearer picture of your health.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
                A consultation is an opportunity to understand what is
                happening, discuss your concerns and determine appropriate
                next steps. Your medical history, symptoms, habits, nutrition,
                movement, sleep and other relevant factors can all form part of
                the conversation.
              </p>

              <div className="mt-8 border-t border-[var(--sutra-border)]">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-4 border-b border-[var(--sutra-border)] py-5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--sutra-pale-sage)] text-[var(--sutra-teal)]">
                      <Check size={12} strokeWidth={2} />
                    </span>

                    <p className="text-sm leading-6 text-[var(--sutra-ink)] sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[var(--sutra-pale-sage)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
            Doctor-led care
          </p>

          <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] sm:text-4xl lg:text-5xl">
            Understand first. Then decide what comes next.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
            The aim is not simply to address a single symptom. It is to build
            a clearer understanding of your health and identify practical next
            steps that fit your circumstances.
          </p>

          <Link
            href="/approach"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[var(--sutra-teal)]
            "
          >
            Explore our approach
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--sutra-teal)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-10">
          <h2 className="font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
            Ready to start the conversation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Book a consultation and take the first step towards understanding
            your health more clearly.
          </p>

          <Link
            href="/book-appointment"
            className="
              mt-8
              inline-flex
              min-h-12
              items-center
              gap-3
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-[var(--sutra-teal)]
              transition-colors
              hover:bg-[var(--sutra-porcelain)]
            "
          >
            Book a consultation
            <ArrowRight size={17} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}