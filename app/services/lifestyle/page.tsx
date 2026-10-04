
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle`;

export const metadata: Metadata = {
  title: "Lifestyle Medicine in Faridabad | Sutra Health",
  description:
    "Learn about lifestyle medicine in Faridabad, the six areas it considers, and how practical health habits may be discussed alongside medical care.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lifestyle Medicine | Sutra Health",
    description:
      "Understand the six lifestyle medicine areas and the role of practical habit support alongside appropriate healthcare.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const pillars = [
  {
    number: "01",
    title: "Healthy eating",
    description:
      "Discuss food choices, meal patterns and variety in relation to your health needs, preferences and routine.",
  },
  {
    number: "02",
    title: "Physical activity",
    description:
      "Consider walking or other appropriate activity in light of your mobility, health and current abilities.",
  },
  {
    number: "03",
    title: "Restorative sleep",
    description:
      "Review sleep timing, consistency and everyday routines that may be affecting your rest.",
  },
  {
    number: "04",
    title: "Positive social connections",
    description:
      "Consider how supportive relationships and social connection fit into your wellbeing and daily circumstances.",
  },
  {
    number: "05",
    title: "Minimising risky substances",
    description:
      "Discuss tobacco, harmful alcohol use or other substance-related concerns when relevant to your health.",
  },
  {
    number: "06",
    title: "Stress management",
    description:
      "Consider appropriate ways to respond to stress, which may include breathing practices, meditation or relaxation.",
  },
];

const faqs = [
  {
    question: "Do I have to change all six areas at once?",
    answer:
      "No. You can identify one or two priorities to discuss first. Any changes should be realistic for your health, preferences and daily routine.",
  },
  {
    question: "Does lifestyle medicine replace medication?",
    answer:
      "No. Lifestyle support complements appropriate medical care. Do not stop or change prescribed treatment without discussing it with your treating clinician.",
  },
  {
    question: "What is included in the Healthy Lifestyle Coaching Program?",
    answer:
      "Earlier programme information describes food guidance, Yoga, Pranayam, Meditation, habit-tracking tools and health consultations. Please confirm which elements are currently offered and how the programme is organised with Life Quality.",
  },
  {
    question: "Can lifestyle guidance be relevant if I already have a medical condition?",
    answer:
      "Yes. Lifestyle questions can be discussed in the context of your condition and current treatment. Advice should reflect your circumstances and remain coordinated with your treating healthcare professional.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      name: "Lifestyle Medicine | Sutra Health",
      url: PAGE_URL,
      description: String(metadata.description),
      isPartOf: {
        "@type": "WebSite",
        name: "Sutra Health",
        url: SITE_URL,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function LifestyleMedicinePage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Hero */}
      <section
        aria-labelledby="lifestyle-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/nature.jpg')",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#101C19]/65"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#101C19]/80 via-[#101C19]/45 to-[#101C19]/10"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/85">
            Lifestyle Medicine
          </p>

          <h1
            id="lifestyle-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.03em] text-white"
          >
            Everyday habits can be part of your care conversation.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Learn how six areas of daily life may be considered alongside your health history, priorities and appropriate medical care.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/assessment"
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Explore the 21-Point Assessment →
            </Link>

            <a
              href="#six-pillars"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/70 px-6 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Explore the six pillars
            </a>
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section
        id="six-pillars"
        aria-labelledby="pillars-title"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.72fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
                The framework
              </p>

              <h2
                id="pillars-title"
                className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl"
              >
                A practical framework for discussing daily habits.
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--sutra-muted)]">
                These areas can influence one another. Their relevance and priority will differ from person to person.
              </p>
            </div>

            <figure className="mx-auto w-full max-w-[400px]">
              <Image
                src="/images/six-pillars.png"
                alt="Six lifestyle medicine pillars: healthy eating, physical activity, restorative sleep, social connection, minimising risky substances and stress management."
                width={474}
                height={355}
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="h-auto w-full"
              />
            </figure>
          </div>

          <div className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="border-t border-[var(--sutra-border-strong)] py-6"
              >
                <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">
                  {pillar.number}
                </span>

                <h3 className="mt-2 font-serif text-2xl leading-tight">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-lg leading-8 text-[var(--sutra-muted)]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section
        aria-labelledby="programme-title"
        className="bg-[var(--sutra-porcelain)]"
      >
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              Life Quality programme
            </p>

            <h2
              id="programme-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
            >
              Healthy Lifestyle Coaching Program
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl">
              Earlier programme information brings together food guidance, Yoga, Pranayam, Meditation, habit-tracking tools and health consultations.
            </p>

            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">
              A gradual approach may help people review selected habits over time. Confirm the programme’s current format and availability with Life Quality before making plans.
            </p>

            <nav
              aria-label="Related services"
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3"
            >
              <Link
                href="/services/nutrition"
                className="inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Nutrition support →
              </Link>

              <Link
                href="/services/therapeutic-yoga"
                className="inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Therapeutic Yoga →
              </Link>

              <Link
                href="/services/physician-consultation"
                className="inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Physician consultation →
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section
        aria-labelledby="assessment-title"
        className="bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              A place to begin
            </p>

            <h2
              id="assessment-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
            >
              Prepare the questions you want to raise.
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">
              The 21-Point Assessment is an option for organising health and lifestyle questions before a consultation. Review the assessment page for its scope and current process.
            </p>
          </div>

          <Link
            href="/assessment"
            className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-teal)] px-6 font-semibold text-[var(--sutra-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)]"
          >
            View the assessment →
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="lifestyle-faq-title"
        className="bg-[var(--sutra-pale-sage)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              Frequently asked questions
            </p>

            <h2
              id="lifestyle-faq-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
            >
              Lifestyle medicine: common questions
            </h2>
          </div>

          <div className="mt-7 max-w-4xl divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold leading-7 marker:content-none">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-[var(--sutra-teal)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-3 text-lg leading-8 text-[var(--sutra-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        Lifestyle medicine is complementary to appropriate medical care.
        Information on this page is educational and does not replace
        individual medical advice, diagnosis or treatment. Consult your
        treating healthcare professional before changing prescribed care.
      </p>
    </main>
  );
}
