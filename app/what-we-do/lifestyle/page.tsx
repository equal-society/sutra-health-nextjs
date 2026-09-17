import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const baseUrl = "https://lifequality.org.in";
const pageUrl = `${baseUrl}/what-we-do/lifestyle`;

const focusAreas = [
  {
    number: "01",
    title: "Nutrition",
    text: "Understand everyday food patterns and make practical changes that fit your health needs and routine.",
  },
  {
    number: "02",
    title: "Yoga & activity",
    text: "Find realistic ways to include yoga and suitable physical activity in your everyday life.",
  },
  {
    number: "03",
    title: "Sleep & recovery",
    text: "Look at sleep, rest and recovery as important parts of your everyday health.",
  },
  {
    number: "04",
    title: "Stress",
    text: "Understand how stress, workload and daily routines may affect your health and habits.",
  },
  {
    number: "05",
    title: "Habits",
    text: "Turn health goals into small, repeatable actions that are easier to maintain.",
  },
  {
    number: "06",
    title: "Daily routine",
    text: "Consider how your home, work and schedule can support or get in the way of healthy changes.",
  },
];

const relevantAreas = [
  {
    title: "Weight Management",
    href: "/conditions/weight-management",
  },
  {
    title: "Metabolic Health",
    href: "/conditions/metabolic-health",
  },
  {
    title: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
  },
  {
    title: "Digestive & Gut Health",
    href: "/conditions/digestive-gut-health",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We begin with your health concerns, goals and everyday life.",
  },
  {
    number: "02",
    title: "Identify",
    text: "We look at the habits and patterns that may be relevant to your goals.",
  },
  {
    number: "03",
    title: "Personalise",
    text: "Your plan is shaped around what is practical and meaningful for you.",
  },
  {
    number: "04",
    title: "Practise",
    text: "You focus on realistic changes that can become part of your routine.",
  },
  {
    number: "05",
    title: "Review",
    text: "Progress is reviewed and the plan can be adapted as your needs change.",
  },
];

const faqs = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine is an approach to healthcare that looks at everyday factors such as food, physical activity, sleep, stress and habits as part of improving and managing health.",
  },
  {
    question: "What happens during a lifestyle medicine consultation?",
    answer:
      "The consultation starts by understanding your health concerns, goals and daily routine. The discussion then focuses on practical changes that may be relevant to you.",
  },
  {
    question: "Is lifestyle medicine personalised?",
    answer:
      "Yes. The areas you work on depend on your health, goals, preferences and everyday circumstances. There is no single lifestyle plan for everyone.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on the person, the goal and consistency with the plan. Some changes may be noticed sooner, while others take longer.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Sutra Health",
      url: baseUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: "Sutra Health",
      url: baseUrl,
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    },
    {
      "@type": "MedicalWebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Lifestyle Medicine | Sutra Health",
      description:
        "Lifestyle medicine at Sutra Health supporting practical changes in nutrition, activity, sleep, stress and everyday habits.",
      url: pageUrl,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      about: {
        "@type": "MedicalTherapy",
        name: "Lifestyle Medicine",
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Lifestyle Medicine",
      description:
        "Lifestyle medicine supporting practical changes in nutrition, activity, sleep, stress and everyday habits.",
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      url: pageUrl,
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "What We Do",
          item: `${baseUrl}/what-we-do`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lifestyle Medicine",
          item: pageUrl,
        },
      ],
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

export const metadata: Metadata = {
  title: "Lifestyle Medicine | Sutra Health",
  description:
    "Lifestyle medicine at Sutra Health supporting practical changes in nutrition, activity, sleep, stress and everyday habits.",
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lifestyle Medicine | Sutra Health",
    description:
      "Lifestyle medicine at Sutra Health supporting practical changes in nutrition, activity, sleep, stress and everyday habits.",
    url: pageUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${baseUrl}/images/services/lifestyle-medicine.webp`,
        width: 1200,
        height: 630,
        alt: "Lifestyle medicine at Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifestyle Medicine | Sutra Health",
    description:
      "Lifestyle medicine at Sutra Health supporting practical changes in everyday health.",
    images: [`${baseUrl}/images/services/lifestyle-medicine.webp`],
  },
};

function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[#91A298]" />

      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
          light ? "text-[#91A298]" : "text-[#65736D]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export default function LifestyleMedicinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">

        {/* =====================================================
            HERO
        ===================================================== */}
          <section className="bg-[#F7F5EF]">
        <Container>
          <div className="mx-auto max-w-[1180px] pt-16 sm:pt-20 lg:pt-24">
            <div className="max-w-[850px]">
                  <Label>Lifestyle Medicine</Label>

                  <h1 className="mt-6 max-w-[850px] font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.05em] sm:text-[62px] lg:text-[78px]">
                    Health changes that fit{" "}
                    <em className="font-normal text-[#17413D]">
                      everyday life.
                    </em>
                  </h1>

                  <p className="mt-7 max-w-[680px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
                    Lifestyle medicine looks at the everyday factors that shape
                    health — including food, activity, sleep, stress and habits
                    — and helps turn health goals into practical changes you
                    can live with.
                  </p>

                  <Link
                    href="/book-appointment"
                    className="group mt-9 inline-flex min-h-[50px] w-full items-center justify-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#12332F] sm:w-auto sm:text-[13px]"
                  >
                    Book a consultation
                    <Arrow />
                  </Link>
                </div>

              <div className="relative mt-14 aspect-[16/9] overflow-hidden sm:mt-18 lg:mt-20">
                <Image
                  src="/images/services/lifestyle-medicine.webp"
                  alt="Lifestyle medicine at Sutra Health"
                  fill
                  priority
                  sizes="(max-width: 1180px) 100vw, 1180px"
                  className="object-cover"
                />

                <div className="absolute bottom-0 left-0 hidden bg-[#F7F5EF] px-7 py-5 lg:block">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65736D]">
                    Sutra Health
                  </p>

                  <p className="mt-1 text-[13px] text-[#202522]">
                    Lifestyle Medicine
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            WHAT IS LIFESTYLE MEDICINE
        ===================================================== */}
        <section className="bg-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-36">

              <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
                <Label>In simple terms</Label>

                <div>
                  <h2 className="max-w-[800px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[60px]">
                    What is lifestyle medicine?
                  </h2>

                  <p className="mt-7 max-w-[760px] text-[17px] leading-8 text-[#4E5B56] sm:text-[19px] sm:leading-9">
                    Lifestyle medicine is an approach to healthcare that looks
                    at everyday factors such as food, physical activity, sleep,
                    stress and habits as part of improving and managing health.
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            AREAS
        ===================================================== */}
        <section className="bg-[#17413D] text-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="max-w-[780px]">
                <Label light>Areas we look at</Label>

                <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                  Health is shaped by more than one part of daily life.
                </h2>

                <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
                  We focus on the areas that are relevant to your health,
                  goals and everyday circumstances.
                </p>
              </div>

              <div className="mt-16 border-t border-white/15">
                {focusAreas.map((area) => (
                  <article
                    key={area.number}
                    className="grid gap-5 border-b border-white/15 py-8 sm:py-10 lg:grid-cols-[90px_280px_1fr] lg:gap-8"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-[#91A298]">
                      {area.number}
                    </span>

                    <h3 className="font-serif text-[26px] font-medium tracking-[-0.025em] text-white sm:text-[30px]">
                      {area.title}
                    </h3>

                    <p className="max-w-[570px] text-[14px] leading-7 text-white/70 sm:text-[15px]">
                      {area.text}
                    </p>
                  </article>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            WHO IT IS FOR
        ===================================================== */}
        <section className="bg-[#F7F5EF]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28">

              <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">

                <div>
                  <Label>Is this for you?</Label>

                  <h2 className="mt-6 max-w-[420px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    Start with the changes that matter to you.
                  </h2>
                </div>

                <div className="border-t border-[#202522]/10">
                  {[
                    "You want to build healthier everyday routines.",
                    "You have a health goal but are unsure where to begin.",
                    "You have tried making changes before but struggled to maintain them.",
                    "You want structured support around food, sleep, activity, stress or habits.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-6 border-b border-[#202522]/10 py-7"
                    >
                      <span className="pt-1 text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="max-w-[600px] text-[16px] leading-7 text-[#4E5B56] sm:text-[17px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}
        <section className="bg-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="max-w-[780px]">
                <Label>What to expect</Label>

                <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                  A plan built around your life.
                </h2>

                <p className="mt-6 max-w-[650px] text-[15px] leading-8 text-[#4E5B56] sm:text-[17px]">
                  Your consultation is a conversation about your health and
                  what you want to work on.
                </p>
              </div>

              <div className="mt-14 border-y border-[#202522]/10">
                {steps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-5 border-b border-[#202522]/10 py-8 last:border-b-0 sm:py-10 lg:grid-cols-[90px_280px_1fr] lg:gap-8"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-[#91A298]">
                      {step.number}
                    </span>

                    <h3 className="font-serif text-[26px] font-medium text-[#17413D] sm:text-[30px]">
                      {step.title}
                    </h3>

                    <p className="max-w-[560px] text-[15px] leading-7 text-[#4E5B56]">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            CONDITIONS
        ===================================================== */}
        <section className="bg-[#E7EDE8]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28">

              <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">

                <div>
                  <Label>Explore health conditions</Label>

                  <h2 className="mt-6 max-w-[410px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    Where lifestyle factors may be relevant.
                  </h2>
                </div>

                <div className="border-t border-[#202522]/10">
                  {relevantAreas.map((area, index) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="group flex items-center justify-between gap-6 border-b border-[#202522]/10 py-7"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="font-serif text-[22px] font-medium text-[#17413D] sm:text-[27px]">
                          {area.title}
                        </span>
                      </div>

                      <Arrow />
                    </Link>
                  ))}
                </div>

              </div>

              <Link
                href="/conditions"
                className="group mt-9 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#17413D]"
              >
                Explore all health conditions
                <Arrow />
              </Link>

            </div>
          </Container>
        </section>

        {/* =====================================================
            APPROACH
        ===================================================== */}
        <section className="bg-[#F7F5EF]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="max-w-[800px]">
                <Label>Our approach</Label>

                <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                  Practical changes, reviewed over time.
                </h2>

                <p className="mt-6 max-w-[680px] text-[15px] leading-8 text-[#4E5B56] sm:text-[17px]">
                  The areas you work on depend on your health, goals,
                  preferences and everyday circumstances. There is no single
                  lifestyle plan for everyone.
                </p>
              </div>

              <div className="mt-14 grid border-y border-[#202522]/10 sm:grid-cols-5">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="border-b border-[#202522]/10 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                      {step.number}
                    </span>

                    <p className="mt-4 font-serif text-[20px] font-medium text-[#202522]">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}
        <section className="bg-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">

                <div>
                  <Label>Common questions</Label>

                  <h2 className="mt-6 max-w-[390px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    Lifestyle medicine, made clear.
                  </h2>
                </div>

                <div className="border-t border-[#202522]/10">
                  {faqs.map((faq, index) => (
                    <details
                      key={faq.question}
                      className="group border-b border-[#202522]/10"
                    >
                      <summary className="flex cursor-pointer list-none items-center gap-5 py-6 [&::-webkit-details-marker]:hidden sm:py-7">
                        <span className="text-[10px] font-semibold tracking-[0.14em] text-[#91A298]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="flex-1 font-serif text-[20px] leading-[1.25] text-[#17413D] sm:text-[23px]">
                          {faq.question}
                        </span>

                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#202522]/10 text-[#65736D] transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>

                      <div className="pb-7 pl-11">
                        <p className="text-[15px] leading-8 text-[#4E5B56] sm:text-[16px]">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#17413D]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-24 lg:py-28">

              <div className="max-w-[780px]">
                <Label light>Take the next step</Label>

                <h2 className="mt-6 font-serif text-[42px] font-medium leading-[1.06] tracking-[-0.04em] text-[#F7F5EF] sm:text-[56px] lg:text-[64px]">
                  Ready to start?
                </h2>

                <p className="mt-6 max-w-[650px] text-[15px] leading-8 text-white/70 sm:text-[17px]">
                  Book a consultation to discuss your health concerns, goals
                  and the kind of support that may be appropriate for you.
                </p>

                <Link
                  href="/book-appointment"
                  className="group mt-8 inline-flex min-h-[50px] items-center justify-center gap-4 rounded-full bg-[#F7F5EF] px-7 py-3 text-[12px] font-semibold text-[#17413D] transition-all duration-300 hover:bg-[#E7EDE8] sm:text-[13px]"
                >
                  Book a consultation
                  <Arrow />
                </Link>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}
        <section className="bg-[#F7F5EF]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-7">
              <p className="text-[10px] leading-5 text-[#65736D]">
                Lifestyle support is intended to form part of appropriate
                healthcare. Individual recommendations depend on your
                circumstances.
              </p>
            </div>
          </Container>
        </section>

      </main>
    </>
  );
}