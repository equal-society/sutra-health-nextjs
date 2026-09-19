import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import FAQ from "@/components/shared/FAQ";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Lifestyle Medicine | Sutra Health",
  description:
    "Learn how Lifestyle Medicine can support healthier habits through nutrition, physical activity, sleep, stress management and personalised guidance.",
  alternates: {
    canonical: "https://lifequality.org.in/what-we-do/lifestyle",
  },
  openGraph: {
    title: "Lifestyle Medicine | Sutra Health",
    description:
      "Practical, evidence-informed support for healthier habits through nutrition, physical activity, sleep, stress management and personalised care.",
    url: "https://lifequality.org.in/what-we-do/lifestyle",
    siteName: "Sutra Health",
    type: "website",
    images: [
      {
        url: "https://lifequality.org.in/images/what-we-do/lifestyle-medicine.webp",
        width: 1600,
        height: 900,
        alt: "Lifestyle Medicine at Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifestyle Medicine | Sutra Health",
    description:
      "Practical, evidence-informed support for healthier habits through lifestyle-focused care.",
    images: [
      "https://lifequality.org.in/images/what-we-do/lifestyle-medicine.webp",
    ],
  },
};

const focusAreas = [
  {
    number: "01",
    title: "Nutrition",
    text: "Looking at everyday food choices, eating patterns and practical changes that fit your needs.",
  },
  {
    number: "02",
    title: "Physical activity",
    text: "Finding realistic ways to become more active while considering your health, ability and daily routine.",
  },
  {
    number: "03",
    title: "Sleep",
    text: "Understanding your sleep routine and identifying habits that may support better rest.",
  },
  {
    number: "04",
    title: "Stress",
    text: "Exploring practical ways to manage stress and build healthier responses to everyday demands.",
  },
  {
    number: "05",
    title: "Daily habits",
    text: "Looking at the routines, behaviours and circumstances that can make healthy changes easier to sustain.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We begin with your health concerns, goals, routine and everyday circumstances.",
  },
  {
    number: "02",
    title: "Identify",
    text: "We look at lifestyle factors that may be relevant to your health and wellbeing.",
  },
  {
    number: "03",
    title: "Personalise",
    text: "Recommendations are shaped around your needs, preferences and ability.",
  },
  {
    number: "04",
    title: "Practise",
    text: "You work on practical changes through nutrition, yoga and lifestyle practices.",
  },
  {
    number: "05",
    title: "Sustain",
    text: "The focus is on habits that can work within your everyday life.",
  },
  {
    number: "06",
    title: "Adapt",
    text: "Your approach can change as your health, routine and circumstances change.",
  },
];

const healthAreas = [
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
  {
    title: "Arthritis & Joint Pain",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    title: "Migraine & Headache",
    href: "/conditions/migraine-headache",
  },
];

const faqs = [
  {
    question: "What is Lifestyle Medicine?",
    answer:
      "Lifestyle Medicine is a health-focused approach that uses evidence-informed changes in everyday habits to help prevent or manage chronic health conditions. It can include nutrition, physical activity, sleep, stress management and other behaviours that influence health.",
  },
  {
    question: "What does Lifestyle Medicine focus on?",
    answer:
      "It looks at everyday factors such as food and eating patterns, physical activity, sleep, stress and other habits. The focus is on practical changes that are appropriate for the individual.",
  },
  {
    question: "Who can benefit from lifestyle-focused support?",
    answer:
      "People may seek lifestyle-focused support when they want to improve everyday health habits or when lifestyle factors are relevant to an existing health concern. The appropriate approach depends on the person's health, needs and circumstances.",
  },
  {
    question: "Is Lifestyle Medicine the same as a diet plan?",
    answer:
      "No. Nutrition can be one part of the approach, but lifestyle-focused care considers several areas of everyday life rather than focusing only on food.",
  },
  {
    question: "Do I need to change everything at once?",
    answer:
      "No. Sustainable changes are usually easier to build when they fit your circumstances. At Sutra Health, recommendations are personalised around your needs and daily routine.",
  },
  {
    question: "Can Lifestyle Medicine replace medical treatment?",
    answer:
      "Lifestyle-focused care should not be considered a replacement for medical diagnosis or treatment. If you have a medical condition, your healthcare professional can help determine how lifestyle changes fit alongside your overall care.",
  },
  {
    question: "How do I start with Sutra Health?",
    answer:
      "You can begin by booking a consultation. We start by understanding your health concerns, goals and everyday routine before discussing practical next steps.",
  },
];

const sources = [
  {
    organisation: "Centers for Disease Control and Prevention",
    title: "Preventing Chronic Diseases: What You Can Do Now",
    href: "https://www.cdc.gov/chronic-disease/prevention/index.html",
    description:
      "Information on nutrition, physical activity and other modifiable risk factors related to chronic disease.",
  },
  {
    organisation: "World Health Organization",
    title: "Healthy Diet",
    href: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    description:
      "Guidance on healthy dietary patterns and their role in protecting against noncommunicable diseases.",
  },
  {
    organisation: "World Health Organization",
    title: "Physical Activity",
    href: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
    description:
      "Evidence and recommendations on physical activity and its relationship with health and chronic disease.",
  },
  {
    organisation:
      "National Institute of Diabetes and Digestive and Kidney Diseases",
    title: "Healthy Eating & Physical Activity for Life",
    href: "https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life",
    description:
      "Practical guidance covering healthy eating, physical activity, sleep and stress management.",
  },
];

export default function LifestyleMedicinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lifequality.org.in/#organization",
        name: "Sutra Health",
        url: "https://lifequality.org.in/",
      },
      {
        "@type": "WebSite",
        "@id": "https://lifequality.org.in/#website",
        name: "Sutra Health",
        url: "https://lifequality.org.in/",
        publisher: {
          "@id": "https://lifequality.org.in/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://lifequality.org.in/what-we-do/lifestyle#webpage",
        url: "https://lifequality.org.in/what-we-do/lifestyle",
        name: "Lifestyle Medicine | Sutra Health",
        description:
          "Learn how Lifestyle Medicine can support healthier habits through nutrition, physical activity, sleep, stress management and personalised guidance.",
        isPartOf: {
          "@id": "https://lifequality.org.in/#website",
        },
        about: {
          "@type": "Thing",
          name: "Lifestyle Medicine",
        },
      },
      {
        "@type": "Service",
        name: "Lifestyle Medicine",
        serviceType: "Lifestyle-focused healthcare",
        provider: {
          "@id": "https://lifequality.org.in/#organization",
        },
        url: "https://lifequality.org.in/what-we-do/lifestyle",
        description:
          "Evidence-informed, personalised support around nutrition, physical activity, sleep, stress and everyday habits.",
      },
      {
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
            name: "Lifestyle Medicine",
            item: "https://lifequality.org.in/what-we-do/lifestyle",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          aria-labelledby="lifestyle-title"
          className="border-b border-[#202522]/10"
        >
          <Container>
            <div className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">

              <div className="max-w-[650px]">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-px w-8 bg-[#C8BDA7]"
                  />

                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                    Lifestyle Medicine
                  </p>
                </div>

                <h1
                  id="lifestyle-title"
                  className="mt-6 max-w-[620px] font-serif text-[44px] font-medium leading-[1.06] tracking-[-0.03em] text-[#202522] sm:text-[54px] lg:text-[62px]"
                >
                  What is Lifestyle Medicine?
                </h1>

                <p className="mt-6 max-w-[600px] font-sans text-[17px] leading-[1.75] text-[#4F5A54] sm:text-[18px]">
                  Lifestyle Medicine uses evidence-informed changes in
                  everyday habits to support health and help prevent or
                  manage chronic health conditions. It considers factors
                  such as nutrition, physical activity, sleep, stress and
                  other behaviours in the context of everyday life.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/book-appointment"
                    scroll
                    className="group inline-flex h-[52px] items-center justify-between bg-[#17413D] px-5 font-sans text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#12332F] sm:min-w-[210px]"
                  >
                    <span>Book a Consultation</span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <a
                    href="#how-it-works"
                    className="inline-flex h-[52px] items-center gap-2 border border-[#202522]/15 px-5 font-sans text-[14px] font-medium text-[#202522] transition-colors hover:border-[#17413D] hover:text-[#17413D]"
                  >
                    How it works
                    <ChevronRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E7EDE8]">
                  <Image
                    src="/images/what-we-do/lifestyle-medicine.webp"
                    alt="Lifestyle-focused healthcare consultation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-3 flex items-start justify-between gap-6">
                  <p className="max-w-[440px] font-sans text-[12px] leading-[1.6] text-[#65736D]">
                    Understanding the everyday factors that can influence
                    health is part of building practical, sustainable change.
                  </p>

                  <span className="hidden font-sans text-[11px] uppercase tracking-[0.12em] text-[#65736D] sm:block">
                    Sutra Health
                  </span>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            DIRECT ANSWER
        ====================================================== */}
        <section
          aria-labelledby="lifestyle-definition"
          className="border-b border-[#202522]/10 bg-white"
        >
          <Container>
            <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:py-24">

              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                  A simple explanation
                </p>
              </div>

              <div className="max-w-[760px]">
                <h2
                  id="lifestyle-definition"
                  className="font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[40px]"
                >
                  How does Lifestyle Medicine work?
                </h2>

                <p className="mt-6 font-sans text-[16px] leading-[1.8] text-[#4F5A54] sm:text-[18px]">
                  It looks beyond a single symptom or habit and considers
                  several parts of everyday life that can influence health.
                  The aim is to identify practical changes that are
                  appropriate for the individual and can be maintained over
                  time.
                </p>

                <p className="mt-5 font-sans text-[16px] leading-[1.8] text-[#4F5A54] sm:text-[18px]">
                  Public-health guidance from the CDC, WHO and NIH highlights
                  the importance of healthy eating, regular physical activity
                  and other everyday behaviours in preventing and managing
                  chronic health problems.
                </p>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            FOCUS AREAS
        ====================================================== */}
        <section
          aria-labelledby="lifestyle-factors"
          className="bg-[#F7F5EF]"
        >
          <Container>
            <div className="py-14 sm:py-20 lg:py-24">

              <div className="max-w-[720px]">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                  Everyday factors
                </p>

                <h2
                  id="lifestyle-factors"
                  className="mt-5 font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.025em] text-[#202522] sm:text-[42px]"
                >
                  Which parts of daily life can affect health?
                </h2>

                <p className="mt-5 max-w-[650px] font-sans text-[16px] leading-[1.75] text-[#4F5A54] sm:text-[17px]">
                  Different factors can matter differently for each person.
                  Lifestyle-focused care looks at the areas that are most
                  relevant to your health and circumstances.
                </p>
              </div>

              <div className="mt-10 border-t border-[#202522]/10">
                {focusAreas.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-4 border-b border-[#202522]/10 py-6 sm:grid-cols-[70px_220px_1fr] sm:items-start sm:gap-8 sm:py-7"
                  >
                    <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#65736D]">
                      {item.number}
                    </span>

                    <h3 className="font-serif text-[22px] font-medium text-[#202522] sm:text-[24px]">
                      {item.title}
                    </h3>

                    <p className="max-w-[600px] font-sans text-[16px] leading-[1.7] text-[#4F5A54]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            EVIDENCE
        ====================================================== */}
        <section
          aria-labelledby="evidence-title"
          className="bg-[#17413D] text-white"
        >
          <Container>
            <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20 lg:py-24">

              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
                  What the evidence tells us
                </p>

                <h2
                  id="evidence-title"
                  className="mt-5 max-w-[520px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.025em] sm:text-[44px]"
                >
                  Everyday habits can play an important role in health.
                </h2>
              </div>

              <div className="max-w-[700px]">
                <p className="font-sans text-[16px] leading-[1.8] text-white/75 sm:text-[17px]">
                  The CDC identifies poor nutrition and physical inactivity
                  among important risk factors for chronic disease. Its
                  prevention guidance also highlights healthy eating and
                  regular physical activity as practical ways to help prevent,
                  delay or manage chronic conditions.
                </p>

                <p className="mt-5 font-sans text-[16px] leading-[1.8] text-white/75 sm:text-[17px]">
                  WHO guidance similarly recognises healthy diets and regular
                  physical activity as important for preventing and managing
                  a range of noncommunicable diseases. NIH guidance also notes
                  the relevance of healthy eating, physical activity, adequate
                  sleep and stress management.
                </p>

                <div className="mt-8 border-t border-white/15 pt-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.13em] text-white/50">
                    Sources
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://www.cdc.gov/chronic-disease/prevention/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-sans text-[14px] text-white/80 transition-colors hover:text-white"
                    >
                      CDC — Preventing Chronic Diseases
                      <ExternalLink
                        size={14}
                        strokeWidth={1.5}
                        className="opacity-60 transition-transform group-hover:translate-x-0.5"
                      />
                    </a>

                    <a
                      href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-sans text-[14px] text-white/80 transition-colors hover:text-white"
                    >
                      WHO — Healthy Diet
                      <ExternalLink
                        size={14}
                        strokeWidth={1.5}
                        className="opacity-60 transition-transform group-hover:translate-x-0.5"
                      />
                    </a>

                    <a
                      href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-sans text-[14px] text-white/80 transition-colors hover:text-white"
                    >
                      WHO — Physical Activity
                      <ExternalLink
                        size={14}
                        strokeWidth={1.5}
                        className="opacity-60 transition-transform group-hover:translate-x-0.5"
                      />
                    </a>

                    <a
                      href="https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-sans text-[14px] text-white/80 transition-colors hover:text-white"
                    >
                      NIH/NIDDK — Healthy Eating & Physical Activity
                      <ExternalLink
                        size={14}
                        strokeWidth={1.5}
                        className="opacity-60 transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            WHEN USEFUL
        ====================================================== */}
        <section
          aria-labelledby="when-useful"
          className="bg-white"
        >
          <Container>
            <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20 lg:py-24">

              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                  Who is it for?
                </p>

                <h2
                  id="when-useful"
                  className="mt-5 max-w-[500px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.025em] text-[#202522] sm:text-[44px]"
                >
                  When can lifestyle-focused support be useful?
                </h2>
              </div>

              <div className="max-w-[700px]">
                <p className="font-sans text-[16px] leading-[1.8] text-[#4F5A54] sm:text-[17px]">
                  Lifestyle factors can be relevant to many health concerns.
                  At Sutra Health, we focus on practical support where
                  nutrition, activity, sleep, stress or everyday habits may be
                  part of the wider picture.
                </p>

                <div className="mt-8 grid border-t border-[#202522]/10 sm:grid-cols-2">
                  {healthAreas.map((area) => (
                    <Link
                      key={area.title}
                      href={area.href}
                      scroll
                      className="group flex items-center justify-between border-b border-[#202522]/10 py-5 pr-3"
                    >
                      <span className="font-sans text-[15px] font-medium text-[#202522] sm:text-[16px]">
                        {area.title}
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#65736D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  ))}
                </div>

                <Link
                  href="/conditions"
                  scroll
                  className="group mt-7 inline-flex items-center gap-2 font-sans text-[14px] font-medium text-[#17413D]"
                >
                  Explore all health areas

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}
        <section
          id="how-it-works"
          aria-labelledby="how-it-works-title"
          className="bg-[#E7EDE8]"
        >
          <Container>
            <div className="py-14 sm:py-20 lg:py-24">

              <div className="max-w-[720px]">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                  Your care journey
                </p>

                <h2
                  id="how-it-works-title"
                  className="mt-5 font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.025em] text-[#202522] sm:text-[44px]"
                >
                  What happens during the process?
                </h2>

                <p className="mt-5 max-w-[650px] font-sans text-[16px] leading-[1.75] text-[#4F5A54] sm:text-[17px]">
                  The process starts with understanding your situation and
                  moves towards practical changes that can fit into your
                  everyday life.
                </p>
              </div>

              <div className="mt-10 grid border-t border-[#202522]/10 sm:grid-cols-2 lg:grid-cols-3">
                {process.map((step) => (
                  <div
                    key={step.number}
                    className="border-b border-[#202522]/10 py-7 sm:px-6 sm:py-8 lg:px-7"
                  >
                    <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#65736D]">
                      {step.number}
                    </span>

                    <h3 className="mt-4 font-serif text-[22px] font-medium text-[#202522]">
                      {step.title}
                    </h3>

                    <p className="mt-3 font-sans text-[15px] leading-[1.7] text-[#4F5A54] sm:text-[16px]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            OTHER SERVICES
        ====================================================== */}
        <section
          aria-labelledby="other-services"
          className="bg-[#F7F5EF]"
        >
          <Container>
            <div className="grid gap-8 py-14 sm:py-20 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:py-24">

              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                  Part of a wider approach
                </p>

                <h2
                  id="other-services"
                  className="mt-5 font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[40px]"
                >
                  Lifestyle support can work alongside other practices.
                </h2>
              </div>

              <div className="grid gap-0 border-t border-[#202522]/10">
                <Link
                  href="/what-we-do/nutrition"
                  scroll
                  className="group flex items-center justify-between border-b border-[#202522]/10 py-5"
                >
                  <div>
                    <h3 className="font-serif text-[21px] font-medium text-[#202522]">
                      Nutrition Counselling
                    </h3>

                    <p className="mt-1 font-sans text-[15px] leading-[1.6] text-[#4F5A54]">
                      Personalised guidance around food and eating habits.
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#65736D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/what-we-do/therapeutic-yoga"
                  scroll
                  className="group flex items-center justify-between border-b border-[#202522]/10 py-5"
                >
                  <div>
                    <h3 className="font-serif text-[21px] font-medium text-[#202522]">
                      Therapeutic Yoga
                    </h3>

                    <p className="mt-1 font-sans text-[15px] leading-[1.6] text-[#4F5A54]">
                      Adapted yoga practices shaped around your health and
                      ability.
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#65736D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/what-we-do/breath-mindfulness"
                  scroll
                  className="group flex items-center justify-between border-b border-[#202522]/10 py-5"
                >
                  <div>
                    <h3 className="font-serif text-[21px] font-medium text-[#202522]">
                      Breath & Mindfulness
                    </h3>

                    <p className="mt-1 font-sans text-[15px] leading-[1.6] text-[#4F5A54]">
                      Practical practices for awareness, stress and wellbeing.
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#65736D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}
        <FAQ faqs={faqs} />

        {/* =====================================================
            SOURCES
        ====================================================== */}
        <section
          aria-labelledby="sources-title"
          className="border-t border-[#202522]/10 bg-white"
        >
          <Container>
            <div className="py-12 sm:py-16 lg:py-20">

              <div className="max-w-[700px]">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                  Evidence & further reading
                </p>

                <h2
                  id="sources-title"
                  className="mt-4 font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[38px]"
                >
                  Trusted sources behind this page.
                </h2>

                <p className="mt-4 font-sans text-[15px] leading-[1.7] text-[#4F5A54] sm:text-[16px]">
                  The following public-health and government sources were used
                  to inform the general health information on this page.
                </p>
              </div>

              <div className="mt-8 grid border-t border-[#202522]/10 lg:grid-cols-2">
                {sources.map((source, index) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "group border-b border-[#202522]/10 p-5 transition-colors hover:bg-[#F7F5EF] sm:p-6",
                      index % 2 === 0
                        ? "lg:border-r lg:border-[#202522]/10"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.13em] text-[#65736D]">
                          {source.organisation}
                        </p>

                        <h3 className="mt-3 font-serif text-[20px] font-medium leading-[1.3] text-[#202522]">
                          {source.title}
                        </h3>

                        <p className="mt-2 max-w-[520px] font-sans text-[14px] leading-[1.65] text-[#4F5A54]">
                          {source.description}
                        </p>
                      </div>

                      <ExternalLink
                        size={16}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-[#65736D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section
          aria-labelledby="lifestyle-cta-title"
          className="bg-[#F7F5EF]"
        >
          <Container>
            <div className="py-10 sm:py-14 lg:py-20">

              <div className="grid overflow-hidden lg:grid-cols-[1.3fr_0.7fr]">

                <div className="bg-[#17413D] px-6 py-11 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
                    Start with Sutra Health
                  </p>

                  <h2
                    id="lifestyle-cta-title"
                    className="mt-6 max-w-[680px] font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.03em] text-white sm:text-[50px] lg:text-[56px]"
                  >
                    Build healthier habits around your life.
                  </h2>
                </div>

                <div className="flex flex-col justify-between bg-[#E7EDE8] px-6 py-9 sm:px-10 sm:py-11 lg:px-10 lg:py-12">

                  <p className="max-w-[400px] font-sans text-[16px] leading-[1.75] text-[#4F5A54]">
                    Begin with a consultation to understand your health,
                    goals and practical next steps.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/book-appointment"
                      scroll
                      className="group inline-flex h-[52px] w-full items-center justify-between bg-[#17413D] px-5 font-sans text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#12332F] sm:w-auto sm:min-w-[220px]"
                    >
                      <span>Book a Consultation</span>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>

                    <p className="mt-5 border-t border-[#202522]/10 pt-4 font-sans text-[11px] leading-[1.6] text-[#65736D]">
                      Sutra Health&apos;s lifestyle and wellness practices are
                      complementary and are not a substitute for emergency
                      care, medical diagnosis or treatment. Individual
                      results may vary.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </Container>
        </section>

      </main>
    </>
  );
}