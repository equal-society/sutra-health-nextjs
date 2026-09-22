import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

export const metadata: Metadata = {
  title: "Health Conditions We Support | Lifestyle & Integrative Health",
  description:
    "Explore lifestyle-focused support for weight management, metabolic health, high blood pressure, joint pain, migraine, digestive health and women's health.",
  alternates: {
    canonical: "https://lifequality.org.in/conditions",
  },
  openGraph: {
    title: "Health Conditions We Support | Lifestyle & Integrative Health",
    description:
      "Explore lifestyle-focused support for weight management, metabolic health, blood pressure, joint health, migraine, digestive health and women's health.",
    url: "https://lifequality.org.in/conditions",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Conditions We Support | Lifestyle & Integrative Health",
    description:
      "Explore lifestyle-focused support for common health concerns through lifestyle, nutrition, movement, breath and mind practices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "What health conditions does Sutra Health support?",
    answer:
      "Sutra Health provides lifestyle-focused support across areas including weight management, metabolic health, high blood pressure, arthritis and joint pain, migraine and headache, digestive and gut health, and women's health.",
  },
  {
    question: "How does Sutra Health approach health conditions?",
    answer:
      "The approach looks beyond a single symptom and considers lifestyle, nutrition, movement, breath and mind practices alongside individual health needs and goals.",
  },
  {
    question: "Can lifestyle changes help with health conditions?",
    answer:
      "Lifestyle factors can play an important role in overall health and wellbeing. Lifestyle-focused changes may complement appropriate medical care but should not replace diagnosis, medication or treatment prescribed by a qualified healthcare professional.",
  },
  {
    question: "Will my care plan be personalized?",
    answer:
      "Guidance is shaped around health concerns, goals, lifestyle, nutrition, daily routine and individual circumstances rather than following a one-size-fits-all approach.",
  },
  {
    question: "Do I need a diagnosis before booking a consultation?",
    answer:
      "You can book a consultation to discuss your health concerns and goals. The consultation provides an opportunity to understand your situation and determine an appropriate approach.",
  },
  {
    question: "Can Sutra Health replace my existing medical treatment?",
    answer:
      "Lifestyle-focused care should not be considered a replacement for necessary medical diagnosis or treatment. If you have an existing medical condition or treatment plan, discuss lifestyle changes with your qualified healthcare professional.",
  },
];

export default function ConditionsPage() {
  const conditions = getAllConditions();

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lifequality.org.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Health Conditions",
        item: "https://lifequality.org.in/conditions",
      },
    ],
  };

  const collectionSchema = {
    "@type": "CollectionPage",
    name: "Health Conditions We Support",
    description: metadata.description,
    url: "https://lifequality.org.in/conditions",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: conditions.length,
      itemListElement: conditions.map((condition, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: condition.title,
        url: `https://lifequality.org.in/conditions/${condition.slug}`,
      })),
    },
  };

  const faqSchema = {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, collectionSchema, faqSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">
       {/* =========================================================
    HERO
========================================================= */}
<section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
    <div className="max-w-5xl py-14 sm:py-18 lg:py-22 xl:py-24">
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-xs">
        Health Conditions
      </p>

      {/* Heading */}
      <h1
        className="
          mt-5
          max-w-[900px]
          font-[var(--font-serif)]
          text-[46px]
          font-medium
          leading-[0.98]
          tracking-[-0.04em]
          text-[var(--sutra-ink)]
          sm:text-[58px]
          md:text-[64px]
          lg:text-[76px]
          xl:text-[82px]
        "
      >
        Understand your health.
        <br />
        <span className="text-[var(--sutra-teal)]">
          Find practical support.
        </span>
      </h1>

      {/* Primary introduction */}
      <p
        className="
          mt-7
          max-w-[680px]
          text-[17px]
          leading-8
          text-[var(--sutra-muted)]
          sm:mt-8
          sm:text-[18px]
          sm:leading-9
        "
      >
        Explore common health concerns through a whole-person,
        lifestyle-focused approach that considers nutrition, movement,
        breath, mind and everyday habits alongside your individual needs.
      </p>

      {/* Supporting direction */}
      <div className="mt-7 flex items-start gap-4">
        <span
          aria-hidden="true"
          className="mt-2 h-10 w-px shrink-0 bg-[var(--sutra-sand)]"
        />

        <p className="max-w-[560px] text-[14px] leading-7 text-[var(--sutra-muted)] sm:text-[15px]">
          Select a condition to explore relevant health information,
          lifestyle considerations and practical support.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* =========================================================
            CONDITION HUBS
        ========================================================= */}
        <section className="bg-[#FFFFFF] py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="mb-9 max-w-[720px] sm:mb-10">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-[#65736D]">
                Areas of Care
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-[34px]
                  font-medium
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-[#202522]
                  sm:text-[40px]
                  lg:text-[44px]
                "
              >
                Health conditions we commonly support
              </h2>

              <p className="mt-4 max-w-[650px] font-sans text-[15px] leading-7 text-[#65736D] sm:text-[16px]">
                Each condition page provides focused health information,
                lifestyle considerations and links to relevant approaches and
                programs.
              </p>
            </div>

            <div className="grid gap-px border border-[#202522]/10 bg-[#202522]/10 md:grid-cols-2 lg:grid-cols-3">
              {conditions.map((condition) => (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="
                    group
                    bg-[#FFFFFF]
                    p-0
                    transition-colors
                    duration-300
                    hover:bg-[#E7EDE8]
                    focus-visible:z-10
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-[-2px]
                    focus-visible:outline-[#17413D]
                  "
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-[#202522]/10 bg-[#E7EDE8]">
                    <Image
                      src={`/images/conditions/${condition.slug}.webp`}
                      alt={`${condition.title} - health information`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>

                  <div className="relative min-h-[190px] p-6 sm:p-7">
                    <h3
                      className="
                        max-w-[90%]
                        font-serif
                        text-[23px]
                        font-medium
                        leading-[1.15]
                        tracking-[-0.02em]
                        text-[#202522]
                        transition-colors
                        duration-300
                        group-hover:text-[#17413D]
                      "
                    >
                      {condition.title}
                    </h3>

                    <p className="mt-3 max-w-[92%] font-sans text-[13px] leading-6 text-[#65736D]">
                      {condition.shortDescription}
                    </p>

                    <span
                      className="
                        absolute
                        bottom-6
                        right-6
                        font-sans
                        text-[12px]
                        font-medium
                        text-[#17413D]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        sm:bottom-7
                        sm:right-7
                      "
                    >
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            HOW TO USE THESE PAGES
        ========================================================= */}
        <section className="border-t border-[#202522]/10 bg-[#E7EDE8] py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.17em] text-[#65736D]">
                  Explore by concern
                </p>

                <h2
                  className="
                    mt-3
                    max-w-[480px]
                    font-serif
                    text-[36px]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.03em]
                    text-[#202522]
                    sm:text-[44px]
                  "
                >
                  Start with the health question that matters to you.
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="font-sans text-[16px] leading-8 text-[#65736D] sm:text-[17px]">
                  Condition pages are designed to help you understand a health
                  concern before exploring an approach or program. Where
                  specific questions have been researched and developed, they
                  are linked from the relevant condition hub.
                </p>

                <p className="mt-5 font-sans text-[15px] leading-7 text-[#65736D] sm:text-[16px]">
                  The information is intended to support health education and
                  informed conversations with healthcare professionals. It is
                  not a substitute for medical diagnosis, treatment or
                  emergency care.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section className="border-t border-[#202522]/10 bg-[#F7F5EF] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.17em] text-[#65736D]">
                  Common questions
                </p>

                <h2
                  className="
                    mt-3
                    max-w-[440px]
                    font-serif
                    text-[36px]
                    font-medium
                    leading-[1.08]
                    tracking-[-0.03em]
                    text-[#202522]
                    sm:text-[44px]
                  "
                >
                  Understanding your care.
                </h2>

                <p className="mt-5 max-w-[400px] font-sans text-[14px] leading-7 text-[#65736D]">
                  Learn more about the conditions we support and how a
                  lifestyle-focused approach fits into overall care.
                </p>
              </div>

              <div className="border-t border-[#202522]/15">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border-b border-[#202522]/15"
                  >
                    <summary
                      className="
                        flex
                        cursor-pointer
                        list-none
                        items-center
                        gap-4
                        py-5
                        sm:py-6
                        [&::-webkit-details-marker]:hidden
                      "
                    >
                      <span className="flex-1 font-sans text-[15px] font-medium leading-6 tracking-[-0.01em] text-[#202522] sm:text-[16px]">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          border
                          border-[#202522]/15
                          font-sans
                          text-[18px]
                          font-light
                          leading-none
                          text-[#17413D]
                          transition-transform
                          duration-300
                          group-open:rotate-45
                        "
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-6 pr-10 sm:pb-7">
                      <p className="max-w-[700px] font-sans text-[13px] leading-7 text-[#65736D] sm:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="bg-[#17413D] py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.17em] text-[#C8BDA7]">
                Take the next step
              </p>

              <h2
                className="
                  mt-4
                  font-serif
                  text-[36px]
                  font-medium
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-[#FFFFFF]
                  sm:text-[44px]
                  lg:text-[48px]
                "
              >
                Explore an approach that fits your health goals.
              </h2>

              <p className="mx-auto mt-5 max-w-[600px] font-sans text-[15px] leading-7 text-[#E7EDE8] sm:text-[16px]">
                Book a consultation to discuss your health concerns and
                explore an approach that fits your needs and everyday life.
              </p>

              <Link
                href="/book-appointment"
                className="
                  mt-8
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-2
                  bg-[#F7F5EF]
                  px-7
                  font-sans
                  text-[14px]
                  font-medium
                  text-[#17413D]
                  transition-colors
                  duration-300
                  hover:bg-[#FFFFFF]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#F7F5EF]
                "
              >
                Book an Appointment
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}