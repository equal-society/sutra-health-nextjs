
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/lifestyle`;

export const metadata: Metadata = {
  title: "Lifestyle Medicine in Faridabad | Sutra Health",
  description:
    "Explore lifestyle medicine in Faridabad, including six health pillars, lifestyle coaching, Yoga, Pranayam, Meditation and practical health habits.",
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
      "Learn how food, movement, sleep, social connection and stress management fit into lifestyle medicine.",
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
      "Consider food variety, meal patterns and dietary choices in the context of your health and circumstances.",
  },
  {
    number: "02",
    title: "Physical activity",
    description:
      "Explore suitable movement, walking or guided activity according to your abilities and needs.",
  },
  {
    number: "03",
    title: "Restorative sleep",
    description:
      "Look at sleep duration, regularity and routines that may affect the quality of your rest.",
  },
  {
    number: "04",
    title: "Positive social connections",
    description:
      "Recognise the place of supportive relationships and meaningful connection in daily life.",
  },
  {
    number: "05",
    title: "Minimising risky substances",
    description:
      "Address tobacco, harmful alcohol use and other substance-related concerns where relevant.",
  },
  {
    number: "06",
    title: "Stress management",
    description:
      "Explore suitable approaches such as breathing practices, meditation or relaxation.",
  },
];

const faqs = [
  {
    question: "Do I have to change all six areas at once?",
    answer:
      "No. Priorities can be selected gradually according to your health needs, preferences and daily circumstances.",
  },
  {
    question: "Does lifestyle medicine replace medication?",
    answer:
      "No. Lifestyle support complements appropriate medical care. Do not stop or change prescribed treatment without discussing it with your treating clinician.",
  },
  {
    question: "What is included in the Healthy Lifestyle Coaching Program?",
    answer:
      "The legacy programme describes personalised food guidance, Yoga, Pranayam, Meditation, habit-tracking tools and health consultations. Confirm current programme availability and details with Life Quality.",
  },
  {
    question: "Can lifestyle guidance be relevant if I already have a medical condition?",
    answer:
      "Lifestyle factors may be discussed alongside your existing care. Recommendations depend on your clinical circumstances and should be coordinated with your treating healthcare professional.",
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
            backgroundImage: "url('/images/lifestyle-home.webp')",
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
            Your daily habits are part of your health.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Explore how food, movement, sleep, relationships and stress
            management can be considered as part of your healthcare.
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
                Six areas that shape everyday health.
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--sutra-muted)]">
                Lifestyle medicine considers these connected areas rather than
                treating daily habits as isolated tasks.
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
              The legacy programme brings together food guidance, Yoga,
              Pranayam, Meditation, habit-tracking tools and health
              consultations.
            </p>

            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">
              Participants can begin with realistic goals and review selected
              habits over time. The current programme format and availability
              should be confirmed with Life Quality.
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
              Identify the areas you want to discuss.
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">
              The 21-Point Assessment can help you organise questions about
              your health and lifestyle priorities before a consultation.
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
              Questions about lifestyle medicine
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
