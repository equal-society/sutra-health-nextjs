import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  FlaskConical,
  Library,
} from "lucide-react";

import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Health Resources | Articles, Research & Guidance | Sutra Health",
  description:
    "Explore Sutra Health resources including health articles, research and publications, practical lifestyle guidance, and the 21-question lifestyle assessment.",
  keywords: [
    "Sutra Health resources",
    "health articles",
    "lifestyle medicine resources",
    "integrative health resources",
    "nutrition health guidance",
    "therapeutic yoga resources",
    "health research publications",
    "21 question lifestyle assessment",
  ],
  alternates: {
    canonical: "https://lifequality.org.in/resources",
  },
  openGraph: {
    title: "Health Resources | Articles, Research & Guidance | Sutra Health",
    description:
      "Health education, research, practical guidance and the 21-question lifestyle assessment from Sutra Health.",
    url: "https://lifequality.org.in/resources",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Resources | Sutra Health",
    description:
      "Explore health articles, research, practical guidance and the 21-question lifestyle assessment.",
  },
};

const resources = [
  {
    number: "01",
    icon: BookOpen,
    title: "Health Articles",
    description:
      "Clear, evidence-informed articles answering practical questions about lifestyle, nutrition, movement, sleep, stress and everyday health.",
    href: "/resources/articles",
    action: "Explore health articles",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Research & Publications",
    description:
      "Research and publications connected with lifestyle medicine, health behaviour, therapeutic yoga and the work behind Sutra Health.",
    href: "/resources/research",
    action: "Explore research",
  },
  {
    number: "03",
    icon: Library,
    title: "Practice Knowledge",
    description:
      "Practical knowledge that translates health concepts into understandable ideas, habits and practices for everyday life.",
    href: "/resources/knowledge-system",
    action: "Explore practice knowledge",
  },
];

const practices = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description: "Everyday patterns and sustainable health change.",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description: "Practical food guidance around your health and routine.",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description: "Adapted movement and yoga for individual needs.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Breath & Mindfulness",
    description: "Breathing, awareness and everyday stress support.",
    href: "/what-we-do/breath-mindfulness",
  },
];

const conditions = [
  { label: "Weight Management", href: "/conditions/weight-management" },
  { label: "Metabolic Health", href: "/conditions/metabolic-health" },
  {
    label: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
  },
  {
    label: "Arthritis & Joint Pain",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    label: "Migraine & Headache",
    href: "/conditions/migraine-headache",
  },
  {
    label: "Digestive & Gut Health",
    href: "/conditions/digestive-gut-health",
  },
];

const faqs = [
  {
    question: "What can I find in Sutra Health Resources?",
    answer:
      "The Resources section brings together health articles, research and publications, practical practice knowledge, and the 21-question lifestyle assessment. Older material is preserved separately in the Sutra Health Archive.",
  },
  {
    question: "Are Sutra Health resources medical advice?",
    answer:
      "Sutra Health resources are intended for health education and practical information. They do not replace an individual medical assessment, diagnosis or treatment plan from an appropriate healthcare professional.",
  },
  {
    question: "Where should I start if I have a health concern?",
    answer:
      "If you want to understand a specific concern, start with the relevant Conditions page. If you want to understand the practices Sutra Health offers, explore What We Do. The 21-question lifestyle assessment can also help you reflect on everyday health patterns.",
  },
  {
    question: "Where can I find older Sutra Health material?",
    answer:
      "Older wellness, lifestyle, clinic, yoga, food and publication material is preserved in the Sutra Health Archive.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Sutra Health Resources",
      description:
        "Health articles, research and publications, practical practice knowledge, and the 21-question lifestyle assessment.",
      url: "https://lifequality.org.in/resources",
      isPartOf: {
        "@type": "WebSite",
        name: "Sutra Health",
        url: "https://lifequality.org.in/",
      },
      publisher: {
        "@type": "Organization",
        name: "Sutra Health",
        url: "https://lifequality.org.in/",
      },
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
          name: "Resources",
          item: "https://lifequality.org.in/resources",
        },
      ],
    },

    {
      "@type": "ItemList",
      name: "Sutra Health Resources",
      itemListElement: [
        ...resources.map((resource, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: resource.title,
          url: `https://lifequality.org.in${resource.href}`,
        })),
        {
          "@type": "ListItem",
          position: 4,
          name: "21-Question Lifestyle Assessment",
          url: "https://lifequality.org.in/score",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Sutra Health Archive",
          url: "https://lifequality.org.in/archive",
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

export default function ResourcesPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
<section className="relative isolate overflow-hidden border-b border-[#173F35]/10">
  {/* Background */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#FAF8F1_0%,#F4F2E8_42%,#E7EFE7_100%)]"
  />

  {/* Organic gradient shapes */}
  <div
    aria-hidden="true"
    className="absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#A9C5AC]/35 blur-3xl sm:h-[520px] sm:w-[520px]"
  />

  <div
    aria-hidden="true"
    className="absolute -bottom-48 left-[38%] -z-10 h-[420px] w-[420px] rounded-full bg-[#D8C9A9]/25 blur-3xl"
  />

  <div
    aria-hidden="true"
    className="absolute -left-32 top-[28%] -z-10 h-[260px] w-[260px] rounded-full bg-[#C6D9CA]/25 blur-3xl"
  />

  {/* Fine editorial grid */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(#173F35 1px, transparent 1px), linear-gradient(90deg, #173F35 1px, transparent 1px)",
      backgroundSize: "56px 56px",
    }}
  />

  {/* Decorative rings */}
  <div
    aria-hidden="true"
    className="absolute right-[7%] top-[16%] -z-10 hidden h-44 w-44 rounded-full border border-[#173F35]/10 lg:block"
  />

  <div
    aria-hidden="true"
    className="absolute right-[10%] top-[21%] -z-10 hidden h-28 w-28 rounded-full border border-[#65966F]/15 lg:block"
  />

  <div
    aria-hidden="true"
    className="absolute bottom-[13%] left-[8%] -z-10 hidden h-20 w-20 rounded-full border border-[#173F35]/10 lg:block"
  />

  <Container>
    <div className="relative min-h-[570px] py-16 sm:min-h-[610px] sm:py-20 lg:min-h-[650px] lg:py-24">
      <div className="grid items-center gap-12  lg:gap-16">

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/10 bg-white/45 px-3 py-1.5 backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#65966F]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52745E] sm:text-[11px]">
              Sutra Health → Resources
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl font-serif text-[43px] leading-[1.02] tracking-[-0.04em] text-[#173F35] sm:text-[57px] lg:text-[70px]">
            Understand your health.
            <br />
            <span className="text-[#52745E]">
              Explore what supports it.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-7 text-[#526A62] sm:text-[18px] sm:leading-8">
            Explore health education, research and practical guidance from
            Sutra Health — designed to help you understand lifestyle,
            nutrition, movement, stress and everyday health more clearly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/resources/articles"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#173F35] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(23,63,53,0.14)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(23,63,53,0.18)]"
            >
              Explore health articles
              <ArrowRight
                className="ml-2 h-4 w-4"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/score"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#173F35]/15 bg-white/55 px-6 text-sm font-semibold text-[#173F35] backdrop-blur-sm transition duration-300 hover:bg-white"
            >
              Take the 21-question assessment
            </Link>
          </div>
        </div>

        
      </div>

     
    </div>
  </Container>
</section>

      {/* DIRECT ANSWER */}
      <section className="border-b border-[#173F35]/10 bg-white/50">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                In brief
              </p>

              <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                What are Sutra Health Resources?
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-[17px] leading-8 text-[#36554C]">
                Sutra Health Resources is a knowledge hub for evidence-informed
                health education. It brings together practical health articles,
                research and publications, practice knowledge and a simple
                21-question lifestyle assessment.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#687A73]">
                The purpose is not to replace a consultation. It is to help
                you understand a health question, explore relevant approaches
                and decide what your next step may be.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* RESOURCE TYPES */}
      <section aria-labelledby="resource-types">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col gap-3 border-b border-[#173F35]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Explore
                </p>

                <h2
                  id="resource-types"
                  className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl"
                >
                  Knowledge for different questions.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#687A73]">
                Start with the format that matches what you are trying to
                understand.
              </p>
            </div>

            <div>
              {resources.map((resource) => {
                const Icon = resource.icon;

                return (
                  <article
                    key={resource.number}
                    className="group border-b border-[#173F35]/10 py-8 sm:py-10"
                  >
                    <div className="grid gap-5 sm:grid-cols-[64px_52px_minmax(0,1fr)_auto] sm:items-center sm:gap-7">
                      <span className="text-xs font-semibold tracking-[0.12em] text-[#65966F]">
                        {resource.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#173F35]/15">
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl tracking-[-0.02em] sm:text-3xl">
                          {resource.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#687A73] sm:text-[15px]">
                          {resource.description}
                        </p>
                      </div>

                      <Link
                        href={resource.href}
                        className="inline-flex items-center text-sm font-semibold text-[#173F35] transition group-hover:translate-x-1"
                      >
                        {resource.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ASSESSMENT */}
      <section className="bg-[#173F35] text-white">
        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20 lg:py-20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                <ClipboardCheck className="h-5 w-5" />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A8C7AE]">
                A useful starting point
              </p>

              <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                Review your everyday health patterns.
              </h2>
            </div>

            <div>
              <p className="text-[16px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
                The 21-question lifestyle assessment helps you reflect on
                areas such as food, movement, sleep and other everyday
                lifestyle patterns.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/60">
                It is a starting point for reflection, not a diagnosis or a
                substitute for medical care.
              </p>

              <Link
                href="/score"
                className="mt-7 inline-flex min-h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#173F35] transition hover:-translate-y-0.5"
              >
                Take the assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Continue exploring
              </p>

              <h2 className="mt-3 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                Explore the practices behind the work.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#687A73] sm:text-[15px]">
                Move from learning about health to understanding the practices
                Sutra Health brings together.
              </p>
            </div>

            <div className="mt-8">
              {practices.map((practice) => (
                <Link
                  key={practice.href}
                  href={practice.href}
                  className="group block border-b border-[#173F35]/10 py-6"
                >
                  <div className="grid gap-2 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:items-center sm:gap-6">
                    <span className="text-xs font-semibold tracking-[0.12em] text-[#65966F]">
                      {practice.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl">
                        {practice.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#687A73]">
                        {practice.description}
                      </p>
                    </div>

                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CONDITIONS */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Health concerns
                </p>

                <h2 className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                  Looking for something specific?
                </h2>
              </div>

              <Link
                href="/conditions"
                className="inline-flex items-center text-sm font-semibold"
              >
                View all conditions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {conditions.map((condition) => (
                <Link
                  key={condition.href}
                  href={condition.href}
                  className="shrink-0 rounded-full border border-[#173F35]/15 bg-white/60 px-4 py-2.5 text-sm text-[#36554C] transition hover:bg-white"
                >
                  {condition.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* APPROACH */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                How it connects
              </p>

              <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                Information is useful when it leads somewhere.
              </h2>
            </div>

            <div>
              <p className="text-[16px] leading-7 text-[#36554C] sm:text-[17px] sm:leading-8">
                Resources help you understand the questions. The Sutra Health
                Method explains how those insights can become part of a
                practical, personalised health journey.
              </p>

              <Link
                href="/approach"
                className="mt-6 inline-flex items-center text-sm font-semibold"
              >
                Explore the Sutra Health Method
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ARCHIVE */}
      <section>
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Preserved material
              </p>

              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                Sutra Health Archive
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#687A73] sm:text-[15px]">
                Explore older wellness, lifestyle, clinic, yoga, food and
                publication material preserved in the Sutra Health Archive.
              </p>
            </div>

            <Link
              href="/archive"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#173F35]/20 px-6 text-sm font-semibold transition hover:bg-white"
            >
              Explore the archive
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#173F35]/10 bg-white/50">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Questions
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                About Sutra Health Resources
              </h2>
            </div>

            <div className="mt-8 max-w-4xl">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-[#173F35]/10 py-5"
                >
                  <summary className="cursor-pointer list-none pr-8 text-[15px]">
                    <span className="relative block">
                      {faq.question}

                      <span className="absolute right-0 top-0 text-xl font-normal text-[#65966F] transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="max-w-3xl pt-3 text-sm leading-6 text-[#687A73]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
      

      {/* FINAL CTA */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="flex flex-col gap-7 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Your next step
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Need help deciding where to start?
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#687A73] sm:text-[15px]">
                Explore the approach, review your lifestyle patterns, or book a
                consultation for personalised guidance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/approach"
                className="inline-flex min-h-11 items-center rounded-full border border-[#173F35]/20 px-6 text-sm font-semibold transition hover:bg-white"
              >
                Our Approach
              </Link>

              <Link
                href="/book-appointment"
                className="inline-flex min-h-11 items-center rounded-full bg-[#173F35] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}