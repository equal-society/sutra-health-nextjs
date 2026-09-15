import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/shared/FAQ";
import Container from "@/components/shared/Container";

const siteUrl = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "What We Do | Integrative Health Services",
  description:
    "Explore Sutra Health's four core services: lifestyle medicine, nutrition counselling, therapeutic yoga, and behaviour and mind practices.",

  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: `${siteUrl}/what-we-do`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "What We Do | Integrative Health Services",
    description:
      "Explore Sutra Health's four core services: lifestyle medicine, nutrition counselling, therapeutic yoga, and behaviour and mind practices.",
    url: `${siteUrl}/what-we-do`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health integrative healthcare",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "What We Do | Integrative Health Services",
    description:
      "Explore Sutra Health's four core services: lifestyle medicine, nutrition counselling, therapeutic yoga, and behaviour and mind practices.",
    images: [`${siteUrl}/images/hero-desktop.webp`],
  },
};

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Doctor-led care that looks at everyday factors such as food, movement, sleep, stress and other habits alongside appropriate medical care.",
    bestFor:
      "People looking to understand lifestyle factors that may be affecting their health or long-term condition management.",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Practical, personalised nutrition guidance designed around your health needs, preferences, routines and real-life circumstances.",
    bestFor:
      "People who want clearer, sustainable nutrition habits rather than restrictive or one-size-fits-all advice.",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Structured yoga-based practices used as part of a broader health plan, with attention to movement, breathing, relaxation and individual needs.",
    bestFor:
      "People who may benefit from a structured movement and mind-body practice alongside their existing healthcare.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Behaviour & Mind Practices",
    description:
      "Practical support for understanding habits, stress, routines and behaviour patterns that can influence whether health changes become sustainable.",
    bestFor:
      "People who understand what they should do but find it difficult to turn good intentions into consistent habits.",
    href: "/what-we-do/behaviour-mind",
  },
];

const faqs = [
  {
    question: "What services does Sutra Health provide?",
    answer:
      "Sutra Health provides four core services: lifestyle medicine, nutrition counselling, therapeutic yoga, and behaviour and mind practices. They can be used individually or combined into a personalised health plan.",
  },
  {
    question: "Who are Sutra Health services for?",
    answer:
      "They are designed for people who want structured, personalised support with lifestyle-related health concerns, nutrition, movement, stress, habits and long-term behaviour change, while continuing appropriate medical care.",
  },
  {
    question: "How do I know which Sutra Health service is right for me?",
    answer:
      "The right starting point depends on your goals and health needs. If you want a broader medical and lifestyle assessment, lifestyle medicine is often the starting point. Nutrition, therapeutic yoga or behaviour and mind practices can then be used where appropriate.",
  },
  {
    question: "Can different Sutra Health services be combined?",
    answer:
      "Yes. The services are designed to work together when appropriate. Your plan may combine medical and lifestyle guidance with nutrition, therapeutic yoga and behaviour-focused practices rather than treating each area in isolation.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sutra Health",
      url: siteUrl,
      founder: {
        "@type": "Person",
        name: "Dr. Rakesh Sarwal",
        honorificSuffix: "MBBS, MPH, DrPH",
        url: "https://academic.lifequality.org.in/",
      },
      sameAs: [
        "https://academic.lifequality.org.in/",
        "https://www.instagram.com/sutrahealth/",
        "https://www.facebook.com/people/Sutrahealth-Equal/",
        "https://www.youtube.com/@sutra-health",
        "https://www.linkedin.com/in/equal-society-ngo",
        "https://sutra-health.medium.com/",
        "https://in.pinterest.com/equal_society/",
      ],
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Sutra Health",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },

    {
      "@type": "WebPage",
      "@id": `${siteUrl}/what-we-do#webpage`,
      name: "What We Do | Integrative Health Services | Sutra Health",
      url: `${siteUrl}/what-we-do`,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${siteUrl}/what-we-do#breadcrumb`,
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/what-we-do#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "What We Do",
          item: `${siteUrl}/what-we-do`,
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": `${siteUrl}/what-we-do#services`,
      name: "Sutra Health Services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@id": `${siteUrl}/#organization`,
          },
          url: `${siteUrl}${service.href}`,
        },
      })),
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

export default function WhatWeDoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">

        {/* HERO */}
        <section className="border-b border-[#202522]/10">
          <Container>
            <div className="max-w-[900px] py-20 sm:py-24 lg:py-28">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#91A298]"
                />

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                  What We Do
                </p>
              </div>

              <h1 className="mt-6 max-w-[850px] font-serif text-[46px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[60px] lg:text-[72px]">
                Integrative health services for lasting health.
              </h1>

              <p className="mt-7 max-w-[720px] text-[17px] leading-8 text-[#4E5B56] sm:text-[19px] sm:leading-9">
                Sutra Health provides doctor-led integrative healthcare through lifestyle
                medicine, nutrition counselling, therapeutic yoga, and behaviour and mind
                practices. These services are for people looking for personalised support
                with lifestyle-related health concerns, long-term condition management,
                nutrition, movement, stress, or sustainable behaviour change.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65736D]">
                <span>Doctor-led</span>
                <span>Evidence-informed</span>
                <span>Personalised</span>
                <span>Whole-person</span>
              </div>
            </div>
          </Container>
        </section>

        {/* FOUR SERVICES */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                  Four areas of care
                </p>

                <h2 className="mt-4 max-w-[360px] font-serif text-[38px] leading-[1.02] tracking-[-0.04em] sm:text-[46px]">
                  One health picture, connected support.
                </h2>
              </div>

              <div className="divide-y divide-[#202522]/10 border-y border-[#202522]/10">
                {services.map((service) => (
                  <article
                    key={service.number}
                    className="py-8 sm:py-9"
                  >
                    <div className="grid gap-5 sm:grid-cols-[55px_1fr_auto] sm:gap-7">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {service.number}
                      </span>

                      <div>
                        <h3 className="font-serif text-[28px] leading-none tracking-[-0.03em] text-[#17413D] sm:text-[32px]">
                          {service.title}
                        </h3>

                        <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#4E5B56]">
                          {service.description}
                        </p>

                        <p className="mt-4 max-w-[620px] text-[13px] leading-6 text-[#65736D]">
                          <span className="font-semibold text-[#202522]">
                            Best suited for:
                          </span>{" "}
                          {service.bestFor}
                        </p>
                      </div>

                      <Link
                        href={service.href}
                        className="group inline-flex h-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#17413D]"
                      >
                        Explore
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* DECISION SUPPORT */}
        <section className="border-y border-[#202522]/10 bg-[#E7EDE8] py-20 sm:py-24">
          <Container>
            <div className="max-w-[760px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                Choosing where to begin
              </p>

              <h2 className="mt-4 font-serif text-[38px] leading-[1.02] tracking-[-0.04em] sm:text-[48px]">
                Which service may be right for you?
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-[#4E5B56]">
                There is no single starting point for everyone. Your health
                concern, goals, current care and daily circumstances can help
                determine what makes sense first.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[16px] border border-[#202522]/10 bg-[#202522]/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Need a broader health picture?", "Start with Lifestyle Medicine."],
                ["Need practical food guidance?", "Explore Nutrition Counselling."],
                ["Want structured mind-body practice?", "Explore Therapeutic Yoga."],
                ["Struggling with consistency?", "Explore Behaviour & Mind Practices."],
              ].map(([question, answer]) => (
                <div
                  key={question}
                  className="bg-[#F7F5EF] p-6 sm:p-7"
                >
                  <p className="font-serif text-[20px] leading-[1.1] text-[#17413D]">
                    {question}
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-[#65736D]">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* HOW THEY CONNECT */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                  Connected care
                </p>

                <h2 className="mt-4 max-w-[500px] font-serif text-[38px] leading-[1.02] tracking-[-0.04em] sm:text-[48px]">
                  The services are designed to work together.
                </h2>
              </div>

              <div>
                <p className="text-[16px] leading-8 text-[#4E5B56]">
                  Health rarely fits into one category. A personalised plan
                  may combine different Sutra Health services according to
                  your needs rather than asking you to choose just one.
                </p>

                <div className="mt-7 space-y-3 text-[13px] text-[#4E5B56]">
                  <p>→ Lifestyle assessment can identify important patterns.</p>
                  <p>→ Nutrition can translate findings into practical food habits.</p>
                  <p>→ Therapeutic yoga can support movement and mind-body practice.</p>
                  <p>→ Behaviour work can help make changes more sustainable.</p>
                </div>

                <Link
                  href="/approach"
                  className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#17413D]"
                >
                  See the Sutra Health approach
                  <span>→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* RELATED */}
        <section className="border-t border-[#202522]/10 bg-[#F7F5EF] py-16 sm:py-20">
          <Container>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/conditions"
                className="group rounded-[14px] border border-[#202522]/10 bg-[#E7EDE8] p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65736D]">
                  Explore
                </p>

                <h2 className="mt-3 font-serif text-[28px] text-[#17413D]">
                  Health conditions
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-[#65736D]">
                  Understand the health concerns and conditions we discuss
                  through a whole-person lens.
                </p>

                <span className="mt-5 inline-flex text-[10px] font-semibold text-[#17413D]">
                  View conditions →
                </span>
              </Link>

              <Link
                href="/resources/articles"
                className="group rounded-[14px] border border-[#202522]/10 bg-[#E7EDE8] p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65736D]">
                  Learn
                </p>

                <h2 className="mt-3 font-serif text-[28px] text-[#17413D]">
                  Health Journal
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-[#65736D]">
                  Read practical health education on lifestyle, nutrition,
                  movement, habits and related topics.
                </p>

                <span className="mt-5 inline-flex text-[10px] font-semibold text-[#17413D]">
                  Read articles →
                </span>
              </Link>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
                  <Container>
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                          Common questions
                        </p>
        
                        <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                          Before you begin.
                        </h2>
        
                      
                      </div>
        
                      <div className="border-t border-[#173F35]/15">
                        {faqs.map((faq) => (
                          <details
                            key={faq.question}
                            className="group border-b border-[#173F35]/15"
                          >
                            <summary className="flex cursor-pointer list-none items-center gap-4 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                              <span className="flex-1 text-[15px] font-medium leading-6 tracking-[-0.01em] text-[#173F35] sm:text-[16px]">
                                {faq.question}
                              </span>
        
                              <span
                                aria-hidden="true"
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#173F35]/10 text-[#65966F] transition-transform duration-300 group-open:rotate-45"
                              >
                                +
                              </span>
                            </summary>
        
                            <div className="pb-6 pr-10 sm:pb-7">
                              <p className="max-w-2xl text-[13px] leading-7 text-[#687A73] sm:text-[14px]">
                                {faq.answer}
                              </p>
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  </Container>
        </section>

        {/* CTA */}
        <section className="bg-[#17413D] py-16 sm:py-20">
          <Container>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-[650px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#91A298]">
                  Ready to begin?
                </p>

                <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#F7F5EF] sm:text-[42px]">
                  Start with a conversation about your health.
                </h2>
              </div>

              <Link
                href="/book-appointment"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#F7F5EF] px-7 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#17413D]"
              >
                Book a consultation →
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}