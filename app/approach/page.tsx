
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Explore the decision-making framework behind Sutra Health: how context is considered, priorities are selected and care decisions may be reviewed.",
  alternates: { canonical: `${SITE_URL}/approach` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Our Approach | Sutra Health",
    description:
      "An overview of the principles and six-stage framework that guide how Sutra Health considers and revisits care decisions.",
    url: `${SITE_URL}/approach`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://lifequality.org.in/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },
};

const stages = [
  [
    "01",
    "Establish the context",
    "Review relevant health information, existing records and the person’s circumstances. Consider whether anything important is missing before deciding what needs attention.",
  ],
  [
    "02",
    "Choose the question to address first",
    "Identify what is most important to address now, while keeping longer-term health aims in view. Urgency and clinical context help determine the order.",
  ],
  [
    "03",
    "Select a considered direction",
    "Consider suitable options in light of the available information, preferences and practical constraints. Agree on a direction for discussion rather than applying a standard package.",
  ],
  [
    "04",
    "Translate decisions into action",
    "Make the agreed next step clear: what to begin, what support is involved and what still needs clarification. Actions depend on the confirmed care plan.",
  ],
  [
    "05",
    "Examine what the experience shows",
    "At an agreed review, look at what has changed, what has been manageable and what barriers arose. The review schedule follows the care arrangement.",
  ],
  [
    "06",
    "Reconsider the next decision",
    "Use the review and any new information to decide whether to continue, modify the plan or seek further clinical discussion. A change is considered when the situation warrants it.",
  ],
] as const;

const faqs = [
  {
    question: "Are the six stages a fixed treatment programme?",
    answer:
      "No. The stages are a guide to decision-making, not a fixed programme. The steps and timing depend on the person’s needs and the agreed care arrangement.",
  },
  {
    question: "Does every concern need to be addressed at once?",
    answer:
      "No. The order can reflect urgency and what is practical to address first. Urgent or worsening symptoms should be assessed through appropriate medical services.",
  },
  {
    question: "Does this framework guarantee a health outcome?",
    answer:
      "No. It helps organise discussion and decisions but cannot promise improvement, prevention or a particular result.",
  },
];

export default function ApproachPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/approach#webpage`,
        url: `${SITE_URL}/approach`,
        name: "Our Approach | Sutra Health",
        description: metadata.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Approach",
            item: `${SITE_URL}/approach`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">
        {/* Full-view photographic hero */}
        <section
          aria-labelledby="approach-title"
          className="relative flex min-h-[calc(100svh-80px)] items-end overflow-hidden bg-[#172D29]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/approach.webp')" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#101C19]/60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/15"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <div className="max-w-4xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                Our approach
              </p>

              <h1
                id="approach-title"
                className="mt-5 max-w-4xl font-serif text-[44px] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[76px]"
              >
                How Sutra Health Approaches Care
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Our approach explains how a health concern can be understood, prioritised and reviewed over time. It is a decision framework, not a fixed treatment protocol or a promise of a particular result.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white"
                >
                  Book a consultation
                  <span className="ml-3" aria-hidden="true">
                    →
                  </span>
                </Link>

                <Link
                  href="/assessment"
                  className="inline-flex min-h-12 items-center border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Take the 21-Point Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Six-stage process */}
        <section aria-labelledby="method-title" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#65736D]">
                The Sutra Health Method
              </p>

              <h2
                id="method-title"
                className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl"
              >
                Six stages for making care decisions
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#65736D] sm:text-lg">
                These stages describe how conversations and decisions can be structured. They are not necessarily separate appointments or a mandatory sequence; the appropriate process depends on the individual situation.
              </p>
            </div>

            <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
              {stages.map(([number, title, description]) => (
                <article
                  key={number}
                  className="border-t border-[#202522]/15 py-6 sm:py-7"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#82958A]">
                    {number}
                  </span>

                  <h3 className="mt-3 font-serif text-2xl leading-tight sm:text-[27px]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-md text-base leading-7 text-[#65736D]">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-[#202522]/10 pt-5">
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  href="/conditions"
                  className="text-sm font-medium text-[#17413D] underline underline-offset-4 hover:text-[#47645B]"
                >
                  Explore health conditions →
                </Link>

                <Link
                  href="/services"
                  className="text-sm font-medium text-[#17413D] underline underline-offset-4 hover:text-[#47645B]"
                >
                  Explore our care services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Clear care boundary */}
        <section aria-labelledby="care-title" className="bg-[#E9EEE9]">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16 lg:px-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#47645B]">
              Clinical judgement comes first
            </p>

            <div>
              <h2
                id="care-title"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                This approach does not replace clinical assessment
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[#53665E] sm:text-lg sm:leading-8">
                This page explains a general approach, not an individual diagnosis or treatment recommendation. Decisions about investigations, medication and medical treatment belong with appropriately qualified clinicians. Do not stop or alter prescribed care on the basis of website information.
              </p>
            </div>
          </div>
        </section>

        {/* Readable FAQs */}
        <section
          aria-labelledby="approach-faq-title"
          className="bg-[#F7F5EF]"
        >
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#65736D]">
              Common questions
            </p>

            <h2
              id="approach-faq-title"
              className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl"
            >
              Questions about our approach
            </h2>

            <div className="mt-9 border-t border-[#202522]/15">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-[#202522]/15"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17413D] sm:py-7">
                    <span className="max-w-3xl font-serif text-xl font-medium leading-snug text-[#202522] sm:text-[25px] lg:text-[27px]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#202522]/15 text-xl font-normal text-[#17413D] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="max-w-3xl pb-7 pr-10 text-base leading-7 text-[#5F7069] sm:text-lg sm:leading-8">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-[#65736D]">
              <Link
                href="/faqs"
                className="font-medium text-[#17413D] underline underline-offset-4 hover:text-[#47645B]"
              >
                Read all frequently asked questions →
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
