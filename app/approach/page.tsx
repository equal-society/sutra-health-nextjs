import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Our Approach | Sutra Health",
  description:
    "Learn how Sutra Health helps you set health priorities, take practical steps and review your care plan.",
  alternates: { canonical: `${SITE_URL}/approach` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Our Approach | Sutra Health",
    description:
      "A practical, patient-centred approach to setting priorities and planning next steps.",
    url: `${SITE_URL}/approach`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const stages = [
  ["01", "Understand", "We listen to your concerns, health history and what you want help with."],
  ["02", "Set priorities", "Together, we decide what needs attention first and what can wait."],
  ["03", "Make a plan", "We discuss practical next steps that suit your needs and circumstances."],
  ["04", "Put it into practice", "You try the agreed steps and notice what feels manageable and useful."],
  ["05", "Review", "We discuss your experience, questions and any barriers you have faced."],
  ["06", "Adjust", "The next steps can change as your needs, progress or circumstances change."],
] as const;

const faqs = [
  {
    question: "What happens during the first consultation?",
    answer:
      "You can discuss your main concern, relevant health history and what you hope to address. Together, you can identify a practical starting point. No particular outcome is guaranteed.",
  },
  {
    question: "Should I continue my current treatment?",
    answer:
      "Yes. Continue prescribed treatment and medical follow-up. Do not change medication or treatment without discussing it with your treating clinician.",
  },
  {
    question: "Is the plan the same for every person?",
    answer:
      "No. Recommendations depend on your concerns, goals, existing care and circumstances. You can discuss changes as your needs evolve.",
  },
  {
    question: "Is the 21-point assessment a medical diagnosis?",
    answer:
      "No. It is an optional lifestyle reflection tool. It does not diagnose a condition or replace an assessment by a qualified clinician.",
  },
];

const organizationSchema = {
  "@type": ["Organization", "MedicalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Sutra Health",
  url: SITE_URL,
  founder: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
};

export default function ApproachPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/approach#webpage`,
        url: `${SITE_URL}/approach`,
        name: "Our Approach | Sutra Health",
        description: metadata.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Our Approach", item: `${SITE_URL}/approach` },
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
            style={{ backgroundImage: "url('/images/approach.jpg')" }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/60" />
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
                Understand your health. Find a practical way forward.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                We begin with what matters to you, identify what needs attention and agree on realistic next steps alongside appropriate medical care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white"
                >
                  Book a Consultation <span className="ml-3" aria-hidden="true">→</span>
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
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#65736D]">The Sutra Health Method</p>
              <h2 id="method-title" className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                Six steps, shaped around your needs.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#65736D] sm:text-lg">
                The process is a guide, not a rigid sequence. A review may lead us to revisit a concern or change the plan.
              </p>
            </div>

            <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
              {stages.map(([number, title, description]) => (
                <article key={number} className="border-t border-[#202522]/15 py-6 sm:py-7">
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#82958A]">{number}</span>
                  <h3 className="mt-3 font-serif text-2xl leading-tight sm:text-[27px]">{title}</h3>
                  <p className="mt-3 max-w-md text-base leading-7 text-[#65736D]">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-[#202522]/10 pt-5">
              <p className="max-w-3xl text-base leading-7 text-[#65736D]">
                Explore health concerns and the care services available at Sutra Health.
              </p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#47645B]">Care that works alongside medicine</p>
            <div>
              <h2 id="care-title" className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                Your medical care remains central.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#53665E] sm:text-lg sm:leading-8">
                Lifestyle changes and therapeutic practices may complement appropriate medical care. Keep following your clinician’s advice and prescribed treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Readable FAQs */}
        <section aria-labelledby="approach-faq-title" className="bg-[#F7F5EF]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#65736D]">Common questions</p>
            <h2 id="approach-faq-title" className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
              What to know before you begin.
            </h2>

            <div className="mt-9 border-t border-[#202522]/15">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group border-b border-[#202522]/15" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17413D] sm:py-7">
                    <span className="max-w-3xl font-serif text-xl font-medium leading-snug text-[#202522] sm:text-[25px] lg:text-[27px]">
                      {faq.question}
                    </span>
                    <span aria-hidden="true" className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#202522]/15 text-xl font-normal text-[#17413D] transition-transform group-open:rotate-45">+</span>
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

        {/* One closing action */}
        <section className="bg-[#17413D] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/65">Start with a conversation</p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                Let’s discuss what matters to your health.
              </h2>
            </div>
            <Link
              href="/book-appointment"
              className="inline-flex min-h-12 w-fit shrink-0 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white"
            >
              Book a Consultation <span className="ml-3" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
