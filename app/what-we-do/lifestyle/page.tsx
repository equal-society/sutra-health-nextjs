import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const baseUrl = "https://lifequality.org.in";
const pageUrl = `${baseUrl}/what-we-do/lifestyle`;

const faqItems = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine is healthcare built around everyday factors such as food, movement, sleep and stress. At Sutra Health, it is used alongside appropriate medical care, not instead of it.",
  },
  {
    question:
      "Can yoga therapy be part of managing something like diabetes or blood pressure?",
    answer:
      "Yoga therapy can be one supportive part of an overall care plan alongside appropriate medical care. Medication changes should always be discussed with the treating physician.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Sutra Health offers online consultations across India for lifestyle medicine, nutrition counselling and yoga therapy. In-person sessions are also available in Gurugram.",
  },
  {
    question: "How long before I see results?",
    answer:
      "The timeline depends on the person, the goal and consistency with the plan. Sutra Health does not promise a fixed timeline because health changes differ from person to person.",
  },
  {
    question: "Is this right for everyone?",
    answer:
      "Sutra Health is designed to complement appropriate medical care. People managing serious conditions or taking medication should discuss new lifestyle or movement practices with their doctor.",
  },
];

const focusAreas = [
  {
    title: "Nutrition",
    description:
      "Understand everyday food patterns and identify practical changes that fit your health needs, preferences and routine.",
  },
  {
    title: "Movement",
    description:
      "Find realistic ways to stay active and build movement into daily life according to your ability and circumstances.",
  },
  {
    title: "Sleep & recovery",
    description:
      "Look at sleep patterns, rest and recovery as part of the wider picture of health and everyday functioning.",
  },
  {
    title: "Stress",
    description:
      "Consider how stress, workload, routines and emotional demands may affect health behaviours and recovery.",
  },
  {
    title: "Habits & behaviour",
    description:
      "Turn health goals into small, repeatable actions that are realistic enough to continue over time.",
  },
  {
    title: "Daily environment",
    description:
      "Recognise how home, work, schedules and surroundings can make healthier choices easier or harder to sustain.",
  },
];

const relevantAreas = [
  {
    title: "Weight Management",
    description:
      "Support for understanding everyday factors that may influence weight and building sustainable health habits.",
    href: "/conditions/weight-management",
  },
  {
    title: "Metabolic Health",
    description:
      "Lifestyle-focused support that considers nutrition, movement, sleep, stress and other modifiable factors.",
    href: "/conditions/metabolic-health",
  },
  {
    title: "High Blood Pressure",
    description:
      "Explore how everyday lifestyle factors can form part of a broader plan for cardiovascular health.",
    href: "/conditions/high-blood-pressure",
  },
  {
    title: "Digestive & Gut Health",
    description:
      "Consider food patterns, routines, stress and other everyday factors alongside appropriate medical care.",
    href: "/conditions/digestive-gut-health",
  },
];

const otherPractices = [
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Practical food guidance shaped around your health needs, preferences and everyday routine.",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Adapted movement, breathing and relaxation practices considered around your needs and health goals.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Breath & Mindfulness",
    description:
      "Simple practices that support breathing awareness, attention and useful ways of working with everyday stress.",
    href: "/what-we-do/breath-mindfulness",
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
        "Explore lifestyle medicine at Sutra Health, with practical support around nutrition, movement, sleep, stress, habits and sustainable everyday health changes.",
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
        "Doctor-led lifestyle medicine supporting practical changes in nutrition, movement, sleep, stress and everyday habits alongside appropriate medical care.",
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
      mainEntity: faqItems.map((faq) => ({
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
    "Doctor-led lifestyle medicine supporting practical changes in nutrition, movement, sleep, stress and everyday habits alongside medical care.",
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
      "Doctor-led lifestyle medicine supporting practical changes in nutrition, movement, sleep, stress and everyday habits alongside medical care.",
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
      "Doctor-led lifestyle medicine supporting practical changes in everyday health.",
    images: [`${baseUrl}/images/services/lifestyle-medicine.webp`],
  },
};

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
        <section className="border-b border-[#202522]/10">
          <Container>
            <div className="grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
              <div className="max-w-[700px]">
                <Link
                  href="/what-we-do"
                  className="text-[11px] font-medium text-[#65736D] transition-colors hover:text-[#17413D]"
                >
                  ← What we do
                </Link>

                <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                  Lifestyle Medicine
                </p>

                <h1 className="mt-5 max-w-[680px] font-serif text-[48px] font-medium leading-[0.96] tracking-[-0.05em] text-[#202522] sm:text-[62px] lg:text-[76px]">
                  Lifestyle medicine
                  <br />
                  for{" "}
                  <span className="italic font-normal text-[#17413D]">
                    lasting health.
                  </span>
                </h1>

                <p className="mt-7 max-w-[610px] text-[16px] leading-8 text-[#4E5B56] sm:text-[18px] sm:leading-9">
                  Lifestyle medicine looks at the everyday factors that
                  influence health — including food, movement, sleep, stress
                  and habits — and helps turn health goals into practical
                  changes that can fit real life.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65736D]">
                  <span>Doctor-led</span>
                  <span>Evidence-informed</span>
                  <span>Personalised</span>
                </div>

                <Link
                  href="/book-appointment"
                  className="mt-9 inline-flex items-center gap-3 border border-[#17413D] bg-[#17413D] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#202522]"
                >
                  Book a consultation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E7EDE8]">
                  <Image
                    src="/images/services/lifestyle-medicine.webp"
                    alt="Lifestyle medicine at Sutra Health"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-5 left-5 bg-[#F7F5EF] px-5 py-4 sm:left-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65736D]">
                    A whole-person approach
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            DIRECT ANSWER
        ===================================================== */}
        <section className="border-b border-[#202522]/10 bg-[#E7EDE8]">
          <Container>
            <div className="grid gap-8 py-12 sm:py-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:py-16">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                  In simple terms
                </p>

                <h2 className="mt-4 max-w-[360px] font-serif text-[34px] font-medium leading-[1.02] tracking-[-0.04em] text-[#17413D] sm:text-[42px]">
                  What is lifestyle medicine?
                </h2>
              </div>

              <div className="max-w-[760px]">
                <p className="text-[17px] leading-8 text-[#4E5B56] sm:text-[19px] sm:leading-9">
                  Lifestyle medicine is an evidence-informed approach to
                  healthcare that uses practical lifestyle changes as part of
                  preventing and managing health conditions.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
                  At Sutra Health, this means understanding your health and
                  everyday life before deciding what changes may be useful.
                  Lifestyle support is provided alongside appropriate medical
                  care, not as a replacement for it.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            WHAT WE LOOK AT
        ===================================================== */}
        <section id="focus-areas" className="border-b border-[#202522]/10">
          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                    What we consider
                  </p>

                  <h2 className="mt-4 max-w-[430px] font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[50px]">
                    Health is connected.
                  </h2>

                  <p className="mt-5 max-w-[400px] text-[14px] leading-7 text-[#65736D]">
                    These areas influence each other. The focus depends on your
                    health concerns, goals and circumstances.
                  </p>
                </div>

                <div className="border-t border-[#202522]/10">
                  {focusAreas.map((area, index) => (
                    <div
                      key={area.title}
                      className="grid gap-3 border-b border-[#202522]/10 py-6 sm:grid-cols-[55px_1fr] sm:gap-6"
                    >
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-serif text-[23px] leading-tight tracking-[-0.025em] text-[#17413D]">
                          {area.title}
                        </h3>

                        <p className="mt-2 max-w-[650px] text-[14px] leading-7 text-[#65736D] sm:text-[15px]">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            HOW WE WORK
        ===================================================== */}
        <section className="bg-[#17413D] text-[#F7F5EF]">
          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#91A298]">
                    The Sutra approach
                  </p>

                  <h2 className="mt-4 max-w-[440px] font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[50px]">
                    We start with understanding.
                  </h2>

                  <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-[#C8D3CD]">
                    The aim is not to give everyone the same lifestyle plan.
                    We first understand what matters to you, then decide what
                    is practical to work on.
                  </p>
                </div>

                <div className="border-t border-[#F7F5EF]/15">
                  {[
                    ["01", "Understand", "Your health, concerns and everyday reality."],
                    ["02", "Identify", "The patterns that may be influencing your health."],
                    ["03", "Personalise", "Changes that make sense for your situation."],
                    ["04", "Practise", "Actions that can work in everyday life."],
                    ["05", "Sustain", "Review, adapt and continue what is useful."],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="grid gap-3 border-b border-[#F7F5EF]/15 py-5 sm:grid-cols-[55px_150px_1fr] sm:items-start sm:gap-6"
                    >
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {number}
                      </span>

                      <h3 className="font-serif text-[23px] leading-tight text-[#F7F5EF]">
                        {title}
                      </h3>

                      <p className="text-[14px] leading-7 text-[#C8D3CD]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            WHERE IT MAY HELP
        ===================================================== */}
        <section
          id="relevant-areas"
          className="border-b border-[#202522]/10 bg-white"
        >
          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                    Where it may be relevant
                  </p>

                  <h2 className="mt-4 max-w-[430px] font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[50px]">
                    Support can be part of a wider health plan.
                  </h2>

                  <p className="mt-5 max-w-[400px] text-[14px] leading-7 text-[#65736D]">
                    Lifestyle factors may be relevant across many health
                    concerns. Explore these areas for more specific
                    information.
                  </p>
                </div>

                <div className="border-t border-[#202522]/10">
                  {relevantAreas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="group flex items-start justify-between gap-8 border-b border-[#202522]/10 py-6"
                    >
                      <div>
                        <h3 className="font-serif text-[23px] leading-tight tracking-[-0.025em] text-[#17413D]">
                          {area.title}
                        </h3>

                        <p className="mt-2 max-w-[620px] text-[14px] leading-7 text-[#65736D]">
                          {area.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-[#91A298] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/conditions"
                className="mt-7 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-[#17413D] transition-colors hover:text-[#65736D]"
              >
                Explore all health conditions →
              </Link>
            </div>
          </Container>
        </section>

        {/* =====================================================
            ASSESSMENT
        ===================================================== */}
        <section
          id="assessment"
          className="border-b border-[#202522]/10 bg-[#F7F5EF]"
        >
          <Container>
            <div className="grid gap-8 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                  Start with understanding
                </p>

                <h2 className="mt-4 max-w-[460px] font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[50px]">
                  Not sure where to start?
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="text-[16px] leading-8 text-[#4E5B56] sm:text-[18px] sm:leading-9">
                  Sutra Health's 21-question lifestyle assessment can help you
                  reflect on everyday health patterns before deciding what kind
                  of support may be useful.
                </p>

                <p className="mt-4 text-[13px] leading-6 text-[#65736D]">
                  It is a starting point for understanding, not a diagnosis.
                </p>

                <Link
                  href="/score"
                  className="mt-7 inline-flex items-center gap-2 border-b border-[#17413D]/30 pb-1 text-[12px] font-semibold uppercase tracking-[0.13em] text-[#17413D] transition-colors hover:border-[#17413D] hover:text-[#65736D]"
                >
                  Take the 21-question assessment
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            OTHER PRACTICES
        =====================================================
        */}
        <section
          id="other-practices"
          className="border-b border-[#202522]/10 bg-white"
        >
          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                    What we do
                  </p>

                  <h2 className="mt-4 max-w-[420px] font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[50px]">
                    Lifestyle medicine is one part of Sutra Health.
                  </h2>
                </div>

                <div className="border-t border-[#202522]/10">
                  {otherPractices.map((practice) => (
                    <Link
                      key={practice.href}
                      href={practice.href}
                      className="group grid gap-4 border-b border-[#202522]/10 py-6 sm:grid-cols-[55px_1fr_auto] sm:items-center"
                    >
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {practice.number}
                      </span>

                      <div>
                        <h3 className="font-serif text-[23px] leading-tight text-[#17413D]">
                          {practice.title}
                        </h3>

                        <p className="mt-2 max-w-[620px] text-[14px] leading-7 text-[#65736D]">
                          {practice.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-[#91A298] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/what-we-do"
                className="mt-7 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-[#17413D] transition-colors hover:text-[#65736D]"
              >
                View all services →
              </Link>
            </div>
          </Container>
        </section>

        {/* =====================================================
            FAQ
        =====================================================
        */}
        <section id="faq" className="bg-[#F7F5EF]">
          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D]">
                    Frequently asked questions
                  </p>

                  <h2 className="mt-4 max-w-[430px] font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[50px]">
                    Lifestyle medicine,
                    <br />
                    made clear.
                  </h2>
                </div>

                <div className="border-t border-[#202522]/10">
                  {faqItems.map((faq, index) => (
                    <details
                      key={faq.question}
                      className="group border-b border-[#202522]/10"
                    >
                      <summary className="flex cursor-pointer list-none items-center gap-5 py-6 [&::-webkit-details-marker]:hidden">
                        <span className="w-6 shrink-0 text-[9px] tracking-[0.14em] text-[#91A298]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="flex-1 font-serif text-[21px] leading-[1.2] tracking-[-0.02em] text-[#17413D] sm:text-[23px]">
                          {faq.question}
                        </span>

                        <span
                          aria-hidden="true"
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#202522]/10 text-[17px] font-normal text-[#65736D] transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>

                      <div className="pb-6 pl-11 pr-4">
                        <p className="max-w-[700px] text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
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
        =====================================================
        */}
        <section className="bg-[#17413D]">
          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#91A298]">
                    Take the next step
                  </p>

                  <h2 className="mt-4 max-w-[760px] font-serif text-[40px] font-medium leading-[0.98] tracking-[-0.045em] text-[#F7F5EF] sm:text-[56px]">
                    Start with understanding your health.
                  </h2>

                  <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-[#C8D3CD] sm:text-[16px] sm:leading-8">
                    Book a consultation to discuss your health concerns, goals
                    and the kind of support that may be appropriate for you.
                  </p>
                </div>

                <Link
                  href="/book-appointment"
                  className="inline-flex w-fit items-center gap-3 border border-[#F7F5EF]/30 bg-[#F7F5EF] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#17413D] transition-colors hover:bg-white"
                >
                  Book a consultation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            BACK TO HUB
        =====================================================
        */}
        <section className="bg-[#F7F5EF]">
          <Container>
            <div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#65736D]">
                Sutra Health / Lifestyle Medicine
              </p>

              <Link
                href="/what-we-do"
                className="text-[11px] font-semibold text-[#17413D] transition-colors hover:text-[#65736D]"
              >
                Back to What We Do →
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}