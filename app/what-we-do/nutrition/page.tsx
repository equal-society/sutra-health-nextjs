import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DM_Serif_Display, Manrope } from "next/font/google";

import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Nutrition Counselling for Better Health | Sutra Health",
  description:
    "Nutrition counselling at Sutra Health uses evidence-informed dietary patterns and practical guidance to support healthier eating, sustainable habits and better health.",
  keywords: [
    "nutrition counselling",
    "nutrition counselling India",
    "nutritionist Faridabad",
    "healthy diet counselling",
    "DASH diet",
    "Mediterranean diet",
    "nutrition for high blood pressure",
    "nutrition for metabolic health",
    "healthy eating habits",
  ],
  alternates: {
    canonical: "https://lifequality.org.in/what-we-do/nutrition",
  },
  openGraph: {
    title: "Nutrition Counselling for Better Health | Sutra Health",
    description:
      "Evidence-informed nutrition counselling focused on practical dietary patterns, sustainable eating habits and your wider health needs.",
    url: "https://lifequality.org.in/what-we-do/nutrition",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://lifequality.org.in/images/services/nutrition-counselling.webp",
        alt: "Nutrition counselling at Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrition Counselling for Better Health | Sutra Health",
    description:
      "Evidence-informed nutrition counselling focused on practical dietary patterns and sustainable eating habits.",
    images: [
      "https://lifequality.org.in/images/services/nutrition-counselling.webp",
    ],
  },
};

const focusAreas = [
  {
    number: "01",
    title: "Dietary pattern",
    description:
      "We look beyond individual foods and consider the overall pattern of eating, including vegetables, fruits, whole grains, protein, healthy fats and the foods you regularly rely on.",
  },
  {
    number: "02",
    title: "Sodium & processed food",
    description:
      "For people who need it, reducing sodium and highly processed foods can be an important part of a broader nutrition plan, particularly when supporting blood pressure management.",
  },
  {
    number: "03",
    title: "Your real routine",
    description:
      "A nutrition plan needs to work with your preferences, schedule, culture, budget, cooking habits and the foods that are realistically available to you.",
  },
  {
    number: "04",
    title: "Health needs",
    description:
      "Nutrition is considered in the context of your health goals and relevant conditions rather than as a one-size-fits-all diet.",
  },
  {
    number: "05",
    title: "Habits that last",
    description:
      "The aim is not a short-term restrictive diet. We focus on practical changes that you can understand, practise and sustain over time.",
  },
];

const faqs = [
  {
    question: "What does nutrition counselling at Sutra Health involve?",
    answer:
      "Nutrition counselling focuses on your current eating pattern, health needs, preferences and everyday routine. The goal is to identify practical dietary changes that can support your health and be sustained in real life.",
  },
  {
    question: "Does nutrition counselling mean following a strict diet?",
    answer:
      "Not necessarily. Sutra Health focuses on sustainable dietary patterns and practical changes rather than prescribing a rigid diet for everyone. Your recommendations are shaped around your health needs, preferences and routine.",
  },
  {
    question: "What is the DASH diet?",
    answer:
      "DASH stands for Dietary Approaches to Stop Hypertension. It is a dietary pattern that emphasises foods such as vegetables, fruits, whole grains and other nutrient-rich foods while paying attention to sodium and overall dietary quality. Research supported by the NHLBI shows that DASH can help lower blood pressure.",
  },
  {
    question: "Can nutrition counselling help with high blood pressure?",
    answer:
      "Nutrition can be an important part of blood pressure management. Evidence supports heart-healthy dietary patterns such as DASH, together with appropriate sodium reduction and other lifestyle measures. Nutrition counselling should complement, not replace, medical care.",
  },
  {
    question: "Can nutrition counselling replace medication?",
    answer:
      "No. Nutrition counselling is intended to complement appropriate medical care. Do not stop, reduce or change prescribed medication without discussing it with your doctor.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Nutrition Counselling | Sutra Health",
  description:
    "Evidence-informed nutrition counselling focused on dietary patterns, practical eating habits and sustainable health change.",
  url: "https://lifequality.org.in/what-we-do/nutrition",
  about: {
    "@type": "MedicalTherapy",
    name: "Nutrition Counselling",
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
    url: "https://lifequality.org.in/",
    sameAs: ["https://academic.lifequality.org.in/"],
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Sutra Health",
    url: "https://lifequality.org.in/",
  },
  dateModified: "2026-09-10",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "What We Do",
      item: "https://lifequality.org.in/what-we-do",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Nutrition Counselling",
      item: "https://lifequality.org.in/what-we-do/nutrition",
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

const healthAreas = [
  {
    title: "Everyday healthy eating",
    text: "Practical support for improving everyday food choices and eating habits.",
  },
  {
    title: "Weight management",
    text: "Nutrition changes that can support sustainable weight management.",
  },
  {
    title: "Metabolic health",
    text: "Food and lifestyle considerations connected with metabolic health.",
  },
  {
    title: "Blood pressure",
    text: "Dietary patterns and sodium considerations that may support blood pressure care.",
  },
  {
    title: "Digestive health",
    text: "Nutrition and eating routines considered alongside digestive health needs.",
  },
];

const relatedConditions = [
  {
    title: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
  },
  {
    title: "Metabolic Health",
    href: "/conditions/metabolic-health",
  },
  {
    title: "Weight Management",
    href: "/conditions/weight-management",
  },
  {
    title: "Digestive & Gut Health",
    href: "/conditions/digestive-gut-health",
  },
];

const otherPractices = [
  {
    title: "Lifestyle Medicine",
    href: "/what-we-do/lifestyle",
    text: "Understand the everyday factors that may influence health.",
  },
  {
    title: "Therapeutic Yoga",
    href: "/what-we-do/therapeutic-yoga",
    text: "Adapted yoga practices considered around your needs and ability.",
  },
  {
    title: "Breath & Mindfulness",
    href: "/what-we-do/breath-mindfulness",
    text: "Practical breathing and mindfulness practices that may support awareness and stress management.",
  },
];

export default function NutritionPage() {
  return (
    <main
      className={`${dmSerif.variable} ${manrope.variable} bg-[#F7F2EB] text-[#202522]`}
    >
      {/* SEO SCHEMAS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="overflow-hidden bg-[#F7F2EB]">
        <Container>
          <div className="py-8 sm:py-12 lg:py-16">
            {/* Back link */}
            <Link
              href="/what-we-do"
              className={`${manrope.className} inline-flex items-center gap-2 text-[13px] font-semibold text-[#65736D] transition-colors hover:text-[#8B9A6E]`}
            >
              <span>←</span>
              What We Do
            </Link>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
              {/* Content */}
              <div className="max-w-[680px]">
                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#8B9A6E]" />

                  <p
                    className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#65736D] sm:text-[12px]`}
                  >
                    Nutrition Counselling
                  </p>
                </div>

                <h1
                  className={`${dmSerif.className} mt-7 text-[46px] font-normal leading-[1.02] tracking-[-0.025em] text-[#202522] sm:text-[58px] md:text-[64px] lg:text-[72px]`}
                >
                  Better nutrition
                  <br />
                  <span className="text-[#8B9A6E]">starts with context.</span>
                </h1>

                <p
                  className={`${manrope.className} mt-7 max-w-[610px] text-[17px] leading-[1.75] text-[#65736D] sm:text-[18px]`}
                >
                  Nutrition counselling helps turn evidence-informed dietary
                  guidance into practical changes that fit your health needs,
                  preferences and everyday routine.
                </p>

                <Link
                  href="/book-appointment"
                  className={`${manrope.className} group mt-9 inline-flex min-h-[52px] items-center gap-4 rounded-full bg-[#8B9A6E] px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#74845B]`}
                >
                  Book a Consultation

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#EAE2D6]">
                  <Image
                    src="/images/services/nutrition-counselling.webp"
                    alt="Nutrition counselling at Sutra Health"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-5 left-5 max-w-[270px] rounded-2xl bg-white p-5 shadow-[0_18px_45px_rgba(32,37,34,0.08)] sm:left-8 sm:p-6">
                  <p
                    className={`${manrope.className} text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8B9A6E]`}
                  >
                    The focus
                  </p>

                  <p
                    className={`${dmSerif.className} mt-2 text-[22px] leading-[1.15] text-[#202522]`}
                  >
                    Practical changes that can last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white">
        <Container>
          <div className="py-20 sm:py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-20">
              <div>
                <p
                  className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
                >
                  Nutrition counselling in brief
                </p>
              </div>

              <div className="max-w-[900px]">
                <h2
                  className={`${dmSerif.className} text-[36px] leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[46px] lg:text-[56px]`}
                >
                  Better nutrition is about the pattern, not a perfect plate.
                </h2>

                <p
                  className={`${manrope.className} mt-7 max-w-[760px] text-[17px] leading-[1.75] text-[#65736D] sm:text-[18px]`}
                >
                  Nutrition counselling is an evidence-informed process of
                  understanding how you currently eat, identifying what may
                  support your health goals, and making practical changes you
                  can maintain. At Sutra Health, dietary guidance is considered
                  alongside your wider health needs rather than as an isolated
                  food plan.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    "Understand your current eating pattern",
                    "Identify realistic areas for change",
                    "Connect nutrition with your health needs",
                    "Build habits you can sustain",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-l-2 border-[#8B9A6E] pl-5"
                    >
                      <p
                        className={`${manrope.className} text-[15px] leading-7 text-[#202522]`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHAT IT CAN HELP WITH
      ========================================================= */}
      <section className="bg-[#F7F2EB]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
              <div>
                <p
                  className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
                >
                  What it can help with
                </p>

                <h2
                  className={`${dmSerif.className} mt-4 max-w-[480px] text-[38px] leading-[1.07] tracking-[-0.025em] text-[#202522] sm:text-[50px]`}
                >
                  Nutrition support for real health needs.
                </h2>
              </div>

              <div className="border-y border-[#202522]/10">
                {healthAreas.map((area, index) => (
                  <div
                    key={area.title}
                    className="grid gap-4 border-b border-[#202522]/10 py-7 last:border-b-0 sm:grid-cols-[72px_240px_1fr] sm:items-center sm:py-8"
                  >
                    <span
                      className={`${manrope.className} text-[12px] font-semibold tracking-[0.12em] text-[#8B9A6E]`}
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className={`${dmSerif.className} text-[23px] tracking-[-0.02em] text-[#202522]`}
                    >
                      {area.title}
                    </h3>

                    <p
                      className={`${manrope.className} text-[15px] leading-7 text-[#65736D]`}
                    >
                      {area.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHAT WE LOOK AT
      ========================================================= */}
      <section className="bg-white">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
              <div>
                <p
                  className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
                >
                  What we look at
                </p>

                <h2
                  className={`${dmSerif.className} mt-4 max-w-[450px] text-[38px] leading-[1.07] tracking-[-0.025em] text-[#202522] sm:text-[50px]`}
                >
                  Pattern first,
                  <br />
                  <span className="italic text-[#8B9A6E]">
                    specifics second.
                  </span>
                </h2>
              </div>

              <div className="border-y border-[#202522]/10">
                {focusAreas.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-4 border-b border-[#202522]/10 py-8 last:border-b-0 sm:grid-cols-[80px_250px_1fr] sm:items-center lg:py-9"
                  >
                    <span
                      className={`${manrope.className} text-[12px] font-semibold tracking-[0.12em] text-[#8B9A6E]`}
                    >
                      {item.number}
                    </span>

                    <h3
                      className={`${dmSerif.className} text-[24px] tracking-[-0.02em] text-[#202522]`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`${manrope.className} text-[15px] leading-7 text-[#65736D]`}
                    >
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          EVIDENCE
      ========================================================= */}
      <section className="bg-[#EAE2D6]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
              <div>
                <p
                  className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
                >
                  Evidence
                </p>

                <h2
                  className={`${dmSerif.className} mt-4 max-w-[470px] text-[38px] leading-[1.07] tracking-[-0.025em] text-[#202522] sm:text-[50px]`}
                >
                  Dietary patterns have been studied in clinical research.
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3
                    className={`${dmSerif.className} text-[26px] text-[#202522]`}
                  >
                    DASH
                  </h3>

                  <p
                    className={`${manrope.className} mt-3 text-[16px] leading-8 text-[#65736D]`}
                  >
                    The National Heart, Lung, and Blood Institute reports that
                    the DASH eating plan lowers blood pressure, and that
                    combining DASH with reduced sodium can have a greater
                    blood-pressure effect than either approach alone.
                  </p>
                </div>

                <div className="border-t border-[#202522]/10 pt-8">
                  <h3
                    className={`${dmSerif.className} text-[26px] text-[#202522]`}
                  >
                    DASH4D
                  </h3>

                  <p
                    className={`${manrope.className} mt-3 text-[16px] leading-8 text-[#65736D]`}
                  >
                    In a 2025 randomized clinical trial involving adults with
                    type 2 diabetes, a DASH-style diet combined with sodium
                    reduction lowered systolic blood pressure compared with the
                    higher-sodium comparison diet.
                  </p>
                </div>

                <div className="border-t border-[#202522]/10 pt-8">
                  <h3
                    className={`${dmSerif.className} text-[26px] text-[#202522]`}
                  >
                    Mediterranean-style eating
                  </h3>

                  <p
                    className={`${manrope.className} mt-3 text-[16px] leading-8 text-[#65736D]`}
                  >
                    The revised PREDIMED analysis published in the New England
                    Journal of Medicine reported lower rates of major
                    cardiovascular events among participants assigned to
                    Mediterranean diets supplemented with extra-virgin olive
                    oil or nuts compared with the control diet.
                  </p>
                </div>

                <div
                  className={`${manrope.className} flex flex-wrap gap-x-6 gap-y-3 border-t border-[#202522]/10 pt-6 text-[13px]`}
                >
                  <a
                    href="https://www.nhlbi.nih.gov/health/dash/health-benefits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B9A6E] underline underline-offset-4"
                  >
                    NHLBI — DASH evidence
                  </a>

                  <a
                    href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2835080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B9A6E] underline underline-offset-4"
                  >
                    JAMA Internal Medicine — DASH4D
                  </a>

                  <a
                    href="https://www.nejm.org/doi/full/10.1056/NEJMoa1800389"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B9A6E] underline underline-offset-4"
                  >
                    NEJM — PREDIMED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          HOW IT FITS
      ========================================================= */}
      <section className="bg-[#F7F2EB]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <p
                className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
              >
                How it fits
              </p>

              <h2
                className={`${dmSerif.className} mt-4 text-[38px] leading-[1.07] tracking-[-0.025em] text-[#202522] sm:text-[50px]`}
              >
                Nutrition is one part of a wider health plan.
              </h2>

              <p
                className={`${manrope.className} mt-6 max-w-[700px] text-[17px] leading-[1.75] text-[#65736D]`}
              >
                At Sutra Health, nutrition counselling sits within the Sutra
                Health Method. We first understand your situation, identify
                relevant factors, personalise the plan, and then work toward
                changes that can be practised, sustained and adapted.
              </p>
            </div>

            <div className="mt-12 grid border-y border-[#202522]/10 sm:grid-cols-3 lg:grid-cols-6">
              {[
                "Understand",
                "Identify",
                "Personalise",
                "Practise",
                "Sustain",
                "Adapt",
              ].map((step, index) => (
                <div
                  key={step}
                  className="border-b border-[#202522]/10 px-4 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 lg:py-7 lg:last:border-r-0"
                >
                  <span
                    className={`${manrope.className} text-[11px] font-semibold tracking-[0.14em] text-[#8B9A6E]`}
                  >
                    0{index + 1}
                  </span>

                  <p
                    className={`${dmSerif.className} mt-3 text-[22px] text-[#202522]`}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/approach"
              className={`${manrope.className} group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#202522] transition-colors hover:text-[#8B9A6E]`}
            >
              Explore the Sutra Health Method
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================
          ASSESSMENT
      ========================================================= */}
      <section className="bg-white">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="overflow-hidden rounded-[28px] bg-[#EAE2D6]">
              <div className="grid items-center lg:grid-cols-[0.75fr_1.25fr]">
                <div className="p-8 sm:p-12 lg:p-16">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#8B9A6E] text-white">
                    <span
                      className={`${dmSerif.className} text-[34px] leading-none`}
                    >
                      21
                    </span>
                  </div>

                  <p
                    className={`${manrope.className} mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
                  >
                    Start with understanding
                  </p>

                  <h2
                    className={`${dmSerif.className} mt-4 text-[36px] leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[46px]`}
                  >
                    Your health is more than what is on your plate.
                  </h2>

                  <p
                    className={`${manrope.className} mt-6 text-[16px] leading-8 text-[#65736D]`}
                  >
                    The 21-question lifestyle assessment can help you reflect
                    on everyday factors that may be relevant to your health.
                    Nutrition is considered alongside other parts of your
                    lifestyle rather than in isolation.
                  </p>

                  <Link
                    href="/score"
                    className={`${manrope.className} group mt-7 inline-flex min-h-[50px] items-center gap-4 rounded-full bg-[#8B9A6E] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#74845B]`}
                  >
                    Take the Assessment
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                <div className="relative min-h-[360px] lg:min-h-[520px]">
                  <Image
                    src="/images/services/nutrition-counselling.webp"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          RELATED CONDITIONS
      ========================================================= */}
      <section className="bg-[#F7F2EB]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
              <div>
                <p
                  className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
                >
                  Explore by health area
                </p>

                <h2
                  className={`${dmSerif.className} mt-4 max-w-[480px] text-[38px] leading-[1.07] tracking-[-0.025em] text-[#202522] sm:text-[50px]`}
                >
                  Nutrition can connect with specific health concerns.
                </h2>
              </div>

              <div className="border-y border-[#202522]/10">
                {relatedConditions.map((condition, index) => (
                  <Link
                    key={condition.href}
                    href={condition.href}
                    className="group grid gap-4 border-b border-[#202522]/10 py-7 last:border-b-0 sm:grid-cols-[72px_260px_1fr] sm:items-center sm:py-8"
                  >
                    <span
                      className={`${manrope.className} text-[12px] font-semibold tracking-[0.12em] text-[#8B9A6E]`}
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className={`${dmSerif.className} text-[23px] tracking-[-0.02em] text-[#202522] transition-colors group-hover:text-[#8B9A6E]`}
                    >
                      {condition.title}
                    </h3>

                    <span
                      className={`${manrope.className} text-[14px] font-semibold text-[#65736D] transition-transform group-hover:translate-x-1`}
                    >
                      Explore →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          OTHER PRACTICES
      ========================================================= */}
      <section className="bg-white">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <p
              className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
            >
              What We Do
            </p>

            <h2
              className={`${dmSerif.className} mt-4 max-w-[650px] text-[38px] leading-[1.07] tracking-[-0.025em] text-[#202522] sm:text-[50px]`}
            >
              Other practices that may form part of your plan.
            </h2>

            <div className="mt-12 border-y border-[#202522]/10">
              {otherPractices.map((practice, index) => (
                <Link
                  key={practice.href}
                  href={practice.href}
                  className="group grid gap-4 border-b border-[#202522]/10 py-7 last:border-b-0 sm:grid-cols-[72px_280px_1fr_auto] sm:items-center sm:py-8"
                >
                  <span
                    className={`${manrope.className} text-[12px] font-semibold tracking-[0.12em] text-[#8B9A6E]`}
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className={`${dmSerif.className} text-[23px] text-[#202522] transition-colors group-hover:text-[#8B9A6E]`}
                  >
                    {practice.title}
                  </h3>

                  <p
                    className={`${manrope.className} text-[15px] leading-7 text-[#65736D]`}
                  >
                    {practice.text}
                  </p>

                  <span
                    className={`${manrope.className} text-[14px] font-semibold text-[#202522] transition-transform group-hover:translate-x-1`}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#F7F2EB]">
        <FAQ faqs={faqs} />
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#F7F2EB]">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="rounded-[28px] bg-[#EAE2D6] px-7 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20">
              <p
                className={`${manrope.className} text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B9A6E]`}
              >
                Take the next step
              </p>

              <h2
                className={`${dmSerif.className} mx-auto mt-4 max-w-[800px] text-[38px] leading-[1.07] tracking-[-0.025em] text-[#202522] sm:text-[50px] lg:text-[58px]`}
              >
                Build an eating pattern that works for your health and your
                life.
              </h2>

              <p
                className={`${manrope.className} mx-auto mt-6 max-w-[620px] text-[17px] leading-[1.75] text-[#65736D]`}
              >
                Start with a conversation about your health, current routine
                and what you would like to change.
              </p>

              <Link
                href="/book-appointment"
                className={`${manrope.className} group mt-8 inline-flex min-h-[52px] items-center gap-4 rounded-full bg-[#8B9A6E] px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#74845B]`}
              >
                Book a Consultation
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MEDICAL DISCLAIMER
      ========================================================= */}
      <div className="bg-[#F7F2EB] px-6 pb-8 text-center">
        <p
          className={`${manrope.className} mx-auto max-w-[900px] text-[11px] leading-5 text-[#65736D]`}
        >
          Nutrition counselling is complementary and does not replace medical
          diagnosis or treatment. Individual recommendations and outcomes may
          vary.
        </p>
      </div>
    </main>
  );
}