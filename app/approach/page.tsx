import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Discover Sutra Health's whole-person approach to healthcare, bringing medical care, lifestyle, nutrition, movement and behaviour into one connected view.",
  alternates: {
    canonical: `${SITE_URL}/approach`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Approach | Sutra Health",
    description:
      "A whole-person approach to healthcare that connects medical care with lifestyle, nutrition, movement and behaviour.",
    url: `${SITE_URL}/approach`,
    siteName: "Sutra Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | Sutra Health",
    description:
      "A whole-person approach to healthcare that connects medical care with lifestyle, nutrition, movement and behaviour.",
  },
};

const principles = [
  {
    number: "01",
    title: "Medical care",
    description:
      "Start with an understanding of your health concerns, medical history and the care that may be appropriate for you.",
  },
  {
    number: "02",
    title: "Lifestyle",
    description:
      "Look at the everyday patterns that can influence health, including sleep, activity, routines and habits.",
  },
  {
    number: "03",
    title: "Nutrition",
    description:
      "Understand food and eating patterns in the context of your health, preferences and everyday life.",
  },
  {
    number: "04",
    title: "Movement",
    description:
      "Consider appropriate movement and practices that can support physical wellbeing and regular activity.",
  },
  {
    number: "05",
    title: "Behaviour & stress",
    description:
      "Recognise the role of stress, behaviour, emotions and daily circumstances in the way we experience health.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Begin with your health concerns, history, routines, priorities and the factors that matter to you.",
  },
  {
    number: "02",
    title: "Personalise",
    description:
      "Bring the relevant pieces together and identify an approach that fits your individual circumstances.",
  },
  {
    number: "03",
    title: "Practise",
    description:
      "Turn recommendations into practical steps that can be understood and incorporated into everyday life.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Look at what is working, what needs adjustment and what support may be useful as your needs change.",
  },
];

const faqs = [
  {
    question: "What does whole-person healthcare mean?",
    answer:
      "Whole-person healthcare considers a person's medical needs alongside relevant lifestyle, nutrition, movement, behaviour and everyday factors rather than looking at one issue in isolation.",
  },
  {
    question: "Does Sutra Health replace conventional medical care?",
    answer:
      "No. Sutra Health's approach can include appropriate medical care alongside lifestyle and other supportive practices. Individual care depends on the person's health needs.",
  },
  {
    question: "Is the approach the same for everyone?",
    answer:
      "No. The approach is intended to be personalised. Different people may need different combinations of medical, lifestyle, nutrition, movement or behavioural support.",
  },
  {
    question: "Can I start with a physician consultation?",
    answer:
      "Yes. A physician consultation can provide an opportunity to discuss your health concerns, medical history and possible next steps.",
  },
  {
    question: "Where is Sutra Health based?",
    answer:
      "Sutra Health is based in Faridabad and also provides selected services through online consultations.",
  },
];

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Our Approach",
  url: `${SITE_URL}/approach`,
  description:
    "Sutra Health's whole-person approach to healthcare, connecting medical care with lifestyle, nutrition, movement and behaviour.",
  isPartOf: {
    "@type": "WebSite",
    name: "Sutra Health",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Our Approach",
      item: `${SITE_URL}/approach`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Sutra Health",
  url: SITE_URL,
  areaServed: {
    "@type": "City",
    name: "Faridabad",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    medicalWebPageSchema,
    breadcrumbSchema,
    faqSchema,
    organizationSchema,
  ],
};

export default function ApproachPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      {/* HERO */}
      <section className="border-b border-[var(--sutra-border)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Our Approach
            </p>

            <h1 className="mt-5 max-w-4xl font-[var(--font-serif)] text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Healthcare that looks at the whole picture.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">
              Sutra Health brings medical understanding together with the
              everyday factors that shape health — including lifestyle,
              nutrition, movement and behaviour.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-none bg-[var(--sutra-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
              >
                Book a Consultation
              </Link>

              <Link
                href="/what-we-do"
                className="inline-flex items-center justify-center rounded-none border border-[var(--sutra-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-teal)] hover:text-[var(--sutra-teal)]"
              >
                See What We Do
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--sutra-muted)]">
              <span>Doctor-led</span>
              <span>Evidence-informed</span>
              <span>Whole-person care</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS APPROACH */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Why This Approach
              </p>

              <h2 className="mt-4 max-w-md font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                Health rarely comes down to one factor.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-[var(--sutra-muted)]">
                A health concern may have a medical dimension, but the way it
                affects everyday life can also be connected to food, movement,
                sleep, stress, behaviour and other circumstances.
              </p>

              <p className="mt-6 text-lg leading-8 text-[var(--sutra-muted)]">
                Looking at these factors does not mean replacing medical care.
                It means considering the wider context when those factors are
                relevant to the person.
              </p>

              <p className="mt-6 text-lg leading-8 text-[var(--sutra-muted)]">
                This is the thinking behind Sutra Health: understand the
                individual first, then connect the parts of care that are
                relevant to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE DIMENSIONS */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              A Connected View
            </p>

            <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              The parts of care can inform one another.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
              Not every person needs every form of support. The relevant areas
              depend on the individual's health, circumstances and priorities.
            </p>
          </div>

          <div className="mt-10 border-t border-[var(--sutra-border-strong)]">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid gap-5 border-b border-[var(--sutra-border-strong)] py-7 sm:grid-cols-[80px_0.8fr_1.2fr] sm:gap-8 sm:py-8"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-sage)]">
                  {principle.number}
                </span>

                <h3 className="font-[var(--font-serif)] text-2xl leading-tight tracking-[-0.02em]">
                  {principle.title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CARE COMES TOGETHER */}
      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              How Sutra Works
            </p>

            <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              Understand. Personalise. Practise. Review.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              The approach is designed to move from understanding your current
              situation towards practical steps that can be reviewed over time.
            </p>
          </div>

          <div className="mt-10 border-t border-white/20">
            {process.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 border-b border-white/20 py-7 sm:grid-cols-[80px_0.8fr_1.2fr] sm:gap-8 sm:py-8"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-white/50">
                  {step.number}
                </span>

                <h3 className="font-[var(--font-serif)] text-2xl leading-tight">
                  {step.title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-none bg-white px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-porcelain)]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* PRACTICAL CARE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Practical, Not Prescriptive
              </p>

              <h2 className="mt-4 max-w-3xl font-[var(--font-serif)] text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                Recommendations have to make sense in real life.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-[var(--sutra-muted)]">
                Health advice is easier to use when it fits the person's
                circumstances. Work, family responsibilities, preferences,
                routines and resources can all influence what is realistic.
              </p>

              <p className="mt-6 text-lg leading-8 text-[var(--sutra-muted)]">
                The goal is therefore not to create a perfect routine. It is
                to identify practical steps that can be understood, practised
                and adjusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL PERSPECTIVE */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Clinical Perspective
              </p>

              <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                Grounded in medicine, informed by public health.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="font-[var(--font-serif)] text-2xl leading-tight">
                Dr. Rakesh Sarwal
              </p>

              <p className="mt-2 text-sm font-medium text-[var(--sutra-muted)]">
                MBBS, MPH, DrPH
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--sutra-muted)]">
                Sutra Health's approach is rooted in the idea that good
                healthcare should understand both the clinical picture and the
                circumstances in which people live.
              </p>

              <Link
                href="/doctors"
                className="mt-7 inline-flex items-center justify-center rounded-none border border-[var(--sutra-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-teal)] hover:text-[var(--sutra-teal)]"
              >
                Meet the Clinical Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL ACCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Access
              </p>

              <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                Whole-person healthcare in Faridabad and online.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--sutra-muted)]">
                Sutra Health is based in Faridabad and offers selected services
                through online consultations. The appropriate format depends
                on the service and your individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              About our approach
            </h2>
          </div>

          <div className="mt-10 border-t border-[var(--sutra-border-strong)]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[var(--sutra-border-strong)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-[var(--font-serif)] text-xl leading-tight marker:hidden">
                  <span>{faq.question}</span>

                  <span
                    className="relative flex h-5 w-5 shrink-0 items-center justify-center text-[var(--sutra-teal)]"
                    aria-hidden="true"
                  >
                    <span className="absolute h-px w-4 bg-current" />
                    <span className="absolute h-4 w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                  </span>
                </summary>

                <div className="max-w-3xl pb-6 pr-8 text-base leading-7 text-[var(--sutra-muted)]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Your Next Step
              </p>

              <h2 className="mt-4 max-w-3xl font-[var(--font-serif)] text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                Start with a conversation about your health.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Begin with what matters to you and explore the care and
                support that may be relevant to your needs.
              </p>
            </div>

            <div>
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-none bg-white px-7 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-porcelain)]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL DISCLAIMER */}
      <section className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-12">
          <p className="max-w-5xl text-xs leading-6 text-[var(--sutra-muted)]">
            Medical information on this page is provided for general
            information and does not replace individual medical advice,
            diagnosis or treatment. Please consult an appropriately qualified
            healthcare professional for advice about your individual health
            needs.
          </p>
        </div>
      </section>
    </main>
  );
}