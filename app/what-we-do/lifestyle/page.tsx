import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

const baseUrl = "https://lifequality.org.in";
const pageUrl = `${baseUrl}/what-we-do/lifestyle`;

export const metadata: Metadata = {
  title: "Lifestyle Medicine for Better Health | Sutra Health",
  description:
    "Lifestyle medicine at Sutra Health combines evidence-informed support around nutrition, movement, sleep, stress, habits and everyday environment to help build sustainable health changes.",
  keywords: [
    "lifestyle medicine",
    "lifestyle medicine India",
    "lifestyle medicine Delhi NCR",
    "lifestyle healthcare",
    "lifestyle medicine for chronic conditions",
    "healthy lifestyle support",
    "preventive health",
    "evidence-informed lifestyle medicine",
    "Sutra Health",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Lifestyle Medicine for Better Health | Sutra Health",
    description:
      "Practical lifestyle medicine focused on nutrition, movement, sleep, stress, habits and sustainable everyday health changes.",
    url: pageUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${baseUrl}/images/services/lifestyle-medicine.webp`,
        alt: "Lifestyle medicine at Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifestyle Medicine for Better Health | Sutra Health",
    description:
      "Practical lifestyle medicine focused on everyday habits and sustainable health changes.",
    images: [`${baseUrl}/images/services/lifestyle-medicine.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const focusAreas = [
  {
    number: "01",
    title: "Nutrition",
    description:
      "Understanding everyday food patterns and identifying practical nutrition changes that fit health needs, preferences and routine.",
  },
  {
    number: "02",
    title: "Movement",
    description:
      "Finding realistic ways to stay active and build movement into daily life according to individual ability and circumstances.",
  },
  {
    number: "03",
    title: "Sleep & recovery",
    description:
      "Looking at sleep patterns, rest and recovery as part of the wider picture of health and everyday functioning.",
  },
  {
    number: "04",
    title: "Stress & emotional wellbeing",
    description:
      "Considering how stress, workload, routines and emotional demands may influence health behaviours and recovery.",
  },
  {
    number: "05",
    title: "Habits & behaviour",
    description:
      "Turning health goals into small, repeatable actions that are realistic enough to continue beyond a short-term programme.",
  },
  {
    number: "06",
    title: "Daily environment",
    description:
      "Recognising how home, work, schedules and surroundings can make healthier choices easier or harder to sustain.",
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
    number: "01",
    title: "Nutrition Counselling",
    description:
      "Practical food guidance shaped around your health needs, preferences and everyday routine.",
    href: "/what-we-do/nutrition",
  },
  {
    number: "02",
    title: "Therapeutic Yoga",
    description:
      "Adapted movement, breathing and relaxation practices considered around your needs and health goals.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "03",
    title: "Breath & Mindfulness",
    description:
      "Simple practices that support breathing awareness, attention and useful ways of working with everyday stress.",
    href: "/what-we-do/breath-mindfulness",
  },
];

const faqs = [
  {
    question: "How does lifestyle medicine support health?",
    answer:
      "Lifestyle medicine is an evidence-informed approach that uses healthy lifestyle behaviours as part of prevention and management of health conditions. It may consider nutrition, physical activity, sleep, stress management and other everyday factors alongside appropriate medical care.",
  },
  {
    question: "What does lifestyle medicine include?",
    answer:
      "Lifestyle medicine can include support around nutrition, movement, sleep and recovery, stress management, healthy habits and the environment in which those habits take place. The priorities depend on the person's health concerns, goals and circumstances.",
  },
  {
    question: "Is lifestyle medicine the same for everyone?",
    answer:
      "No. Sutra Health does not use one lifestyle plan for everyone. The focus is on understanding the person's health, routines, priorities and practical circumstances before identifying changes that may be useful and sustainable.",
  },
  {
    question: "Can lifestyle medicine replace medicines or medical treatment?",
    answer:
      "No. Lifestyle medicine is intended to complement appropriate healthcare. It should not be used as a substitute for diagnosis, prescribed medication, emergency care or treatment from a qualified healthcare professional.",
  },
  {
    question: "How does lifestyle medicine fit with Sutra Health's other practices?",
    answer:
      "Lifestyle medicine is one of Sutra Health's core practices. Depending on the person's needs, it may be complemented by nutrition counselling, therapeutic yoga, or breath and mindfulness practices within a coordinated plan.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Lifestyle Medicine | Sutra Health",
  description:
    "Explore lifestyle medicine at Sutra Health, with practical support around nutrition, movement, sleep, stress, habits and everyday health.",
  url: pageUrl,
  inLanguage: "en-IN",
  about: {
    "@type": "MedicalTherapy",
    name: "Lifestyle Medicine",
  },
  author: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  reviewedBy: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  publisher: {
    "@type": "Organization",
    name: "Sutra Health",
    url: baseUrl,
    sameAs: ["https://academic.lifequality.org.in/"],
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Sutra Health",
    url: baseUrl,
  },
  subjectOf: [
    {
      "@type": "WebPage",
      name: "Lifestyle Medicine",
      url: "https://islm.org.in/WhatisLifestyleMedicine/",
    },
    {
      "@type": "ScholarlyArticle",
      name: "A traffic light approach to lifestyle change: Health building guideline for NCD outpatients in India",
      url: "https://academic.lifequality.org.in/publication/2026-a-traffic-light-approach-to-lifestyle-change-health-building",
      datePublished: "2026",
    },
  ],
  dateModified: "2026-09-10",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
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

export default function LifestyleMedicinePage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-10 sm:py-14 lg:py-16">
            <Link
              href="/what-we-do"
              className="inline-flex text-[12px] font-medium text-[#65966F] transition-colors hover:text-[#173F35]"
            >
              ← What We Do
            </Link>

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                  Lifestyle Medicine
                </p>

                <h1 className="mt-4 max-w-[700px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[64px]">
                  Lifestyle Medicine for Better Health
                </h1>

                <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                  Lifestyle medicine is an evidence-informed approach that
                  considers everyday behaviours, routines and circumstances as
                  part of a wider plan for health. At Sutra Health, the focus is
                  on practical changes that can fit real life.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
                  >
                    Book a Consultation
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-[#E9EFE7]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/services/lifestyle-medicine.webp"
                    alt="Lifestyle medicine at Sutra Health"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DIRECT ANSWER */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[820px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Lifestyle medicine in brief
              </p>

              <h2 className="mt-3 max-w-[720px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Health change starts with understanding everyday life.
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#687A73] sm:text-[16px]">
                Lifestyle medicine uses evidence-informed lifestyle changes as
                part of prevention and management of health conditions. It can
                include nutrition, physical activity, sleep, stress management,
                habits and the surrounding environment. At Sutra Health, these
                areas are considered alongside appropriate medical care.
              </p>

              <ul className="mt-7 grid gap-3 text-[14px] leading-7 text-[#687A73] sm:grid-cols-2">
                <li className="border-l-2 border-[#65966F] pl-4">
                  Understand everyday health patterns
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Identify realistic areas for change
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Personalise changes around real circumstances
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Build habits that can be sustained
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-medium text-[#173F35]">
                <a
                  href="https://islm.org.in/WhatisLifestyleMedicine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#65966F]/50 underline-offset-4 hover:text-[#65966F]"
                >
                  Indian Society of Lifestyle Medicine →
                </a>
                <a
                  href="https://academic.lifequality.org.in/publication/2026-a-traffic-light-approach-to-lifestyle-change-health-building"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#65966F]/50 underline-offset-4 hover:text-[#65966F]"
                >
                  Sutra Health research →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT IS FOR */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Who it is for
                </p>
                <h2 className="mt-3 max-w-[430px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                  Practical support for people ready to work on everyday health.
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {[
                  ["Healthier routines", "For people who want to understand and improve everyday habits around food, movement, sleep and stress."],
                  ["Weight management", "For people looking for sustainable lifestyle changes rather than short-term restrictive approaches."],
                  ["Metabolic health", "For people working on lifestyle factors that may be relevant to blood sugar and metabolic health."],
                  ["Blood pressure", "For people who want lifestyle support as part of a broader approach to cardiovascular health."],
                  ["Long-term health", "For people who want practical changes that can be practised, sustained and adapted over time."],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:items-center sm:py-7"
                  >
                    <h3 className="font-serif text-[21px] tracking-[-0.02em] text-[#173F35]">
                      {title}
                    </h3>
                    <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* EVIDENCE / ORIGINAL SUTRA SIGNAL */}
      <section className="bg-[#173F35] text-[#FAF8F1]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[850px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9BBDA1]">
                Evidence & Sutra Health
              </p>

              <h2 className="mt-3 max-w-[760px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] sm:text-[44px]">
                Lifestyle change is practical, structured and evidence-informed.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-white/70 sm:text-[15px] sm:leading-8">
                <p>
                  Lifestyle medicine considers behaviours and circumstances
                  that influence health rather than treating a single habit in
                  isolation. Nutrition, movement, sleep, stress and other
                  lifestyle factors can interact with one another.
                </p>

                <p>
                  Sutra Health also connects this work with its{" "}
                  <strong className="text-white">
                    21-question lifestyle assessment
                  </strong>{" "}
                  and a structured six-step method: Understand, Identify,
                  Personalise, Practise, Sustain and Adapt.
                </p>

                <p>
                  Sutra Health's academic work includes a 2026 publication on a
                  traffic-light approach to lifestyle change for NCD outpatients
                  in India. This provides a first-party research connection for
                  the approach while keeping individual care decisions with
                  qualified healthcare professionals.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[12px]">
                <a
                  href="https://islm.org.in/WhatisLifestyleMedicine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8D0BC] underline underline-offset-4 hover:text-white"
                >
                  ISLM — Lifestyle Medicine
                </a>
                <a
                  href="https://academic.lifequality.org.in/publication/2026-a-traffic-light-approach-to-lifestyle-change-health-building"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8D0BC] underline underline-offset-4 hover:text-white"
                >
                  Sutra Health — 2026 research
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE LOOK AT */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  What we look at
                </p>
                <h2 className="mt-3 max-w-[420px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                  The patterns behind everyday health.
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {focusAreas.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-3 py-6 sm:grid-cols-[72px_220px_1fr] sm:items-center sm:py-7"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-[#65966F]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[21px] tracking-[-0.02em] text-[#173F35]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT FITS */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[760px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                How it fits
              </p>
              <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Lifestyle medicine is the practice. The method connects the work.
              </h2>
              <p className="mt-6 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The Sutra Health Method describes how we work: understand,
                identify, personalise, practise, sustain and adapt. Lifestyle
                medicine is considered as part of that wider process.
              </p>
            </div>

            <div className="mt-9 grid gap-0 border-y border-[#173F35]/10 sm:grid-cols-3 lg:grid-cols-6">
              {["Understand", "Identify", "Personalise", "Practise", "Sustain", "Adapt"].map(
                (step, index) => (
                  <div
                    key={step}
                    className="border-b border-[#173F35]/10 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0 lg:py-6"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-[#65966F]">
                      0{index + 1}
                    </span>
                    <p className="mt-2 font-serif text-[20px] text-[#173F35]">
                      {step}
                    </p>
                  </div>
                ),
              )}
            </div>

            <div className="mt-7">
              <Link
                href="/approach"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] underline decoration-[#65966F]/50 underline-offset-4"
              >
                Explore the Sutra Health Method →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ASSESSMENT */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Start with understanding
                </p>
                <h2 className="mt-3 max-w-[430px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                  A structured starting point for your health.
                </h2>
              </div>

              <div className="border-y border-[#173F35]/10 py-7 sm:py-8">
                <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                  The 21-question lifestyle assessment helps you reflect on
                  everyday health patterns before deciding what support may be
                  useful. It is a starting point for understanding, not a
                  diagnosis.
                </p>

                <Link
                  href="/score"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white hover:bg-[#12352D]"
                >
                  Take the Assessment
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
              Explore by health area
            </p>
            <h2 className="mt-3 max-w-[620px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
              See where lifestyle medicine may be relevant.
            </h2>

            <div className="mt-8 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {relevantAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="grid gap-2 py-6 transition-colors hover:bg-white/50 sm:grid-cols-[280px_1fr_auto] sm:items-center sm:gap-6 sm:py-7"
                >
                  <h3 className="font-serif text-[21px] text-[#173F35]">
                    {area.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    {area.description}
                  </p>
                  <span className="text-[13px] font-semibold text-[#173F35]">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/conditions"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] hover:text-[#65966F]"
            >
              Explore all health conditions →
            </Link>
          </div>
        </Container>
      </section>

      {/* OTHER PRACTICES */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
              What We Do
            </p>
            <h2 className="mt-3 max-w-[650px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
              Other practices that may form part of your plan.
            </h2>

            <div className="mt-8 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {otherPractices.map((practice) => (
                <Link
                  key={practice.href}
                  href={practice.href}
                  className="grid gap-2 py-6 sm:grid-cols-[72px_280px_1fr_auto] sm:items-center sm:gap-5 sm:py-7"
                >
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[#65966F]">
                    {practice.number}
                  </span>
                  <h3 className="font-serif text-[21px] text-[#173F35]">
                    {practice.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    {practice.description}
                  </p>
                  <span className="text-[13px] font-semibold text-[#173F35]">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/what-we-do"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] hover:text-[#65966F]"
            >
              View all What We Do services →
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F1]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[820px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Frequently asked questions
              </p>
              <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Questions about lifestyle medicine?
              </h2>

              <div className="mt-7 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {faqs.map((faq, index) => (
                  <details key={faq.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="w-7 shrink-0 text-[10px] font-semibold tracking-[0.12em] text-[#A2ADA7]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[15px] font-medium leading-6 text-[#173F35] sm:text-[16px]">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#173F35]/10 text-[#65966F] transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-6 pl-11 pr-8">
                      <p className="max-w-3xl text-[15px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
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

      {/* FINAL CTA */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="mx-auto max-w-[760px] py-14 text-center sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9BBDA1]">
              Take the next step
            </p>
            <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[44px]">
              Build healthier routines that can fit real life.
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[14px] leading-7 text-white/65">
              Start with a conversation about your health, current routines
              and what you would like to change.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore What We Do
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
