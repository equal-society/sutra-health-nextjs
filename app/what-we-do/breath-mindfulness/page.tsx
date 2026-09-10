import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

const baseUrl = "https://lifequality.org.in";
const pageUrl = `${baseUrl}/what-we-do/breath-mindfulness`;

export const metadata: Metadata = {
  title: "Breath & Mindfulness for Stress & Wellbeing | Sutra Health",
  description:
    "Breath and mindfulness practices at Sutra Health support stress management, breathing awareness and wellbeing through practical, evidence-informed techniques.",
  keywords: [
    "breath and mindfulness",
    "breathing exercises",
    "mindfulness",
    "mindfulness meditation",
    "pranayama",
    "stress management",
    "breathing exercises for stress",
    "mindfulness for stress",
    "pranayama for blood pressure",
    "breathwork India",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Breath & Mindfulness for Stress & Wellbeing | Sutra Health",
    description:
      "Practical breath and mindfulness practices for stress management, breathing awareness and wellbeing, considered within a wider health plan.",
    url: pageUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${baseUrl}/images/services/meditation-stress-support.webp`,
        alt: "Breath and mindfulness practice at Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breath & Mindfulness for Stress & Wellbeing | Sutra Health",
    description:
      "Practical breathing and mindfulness practices for stress management, awareness and wellbeing.",
    images: [`${baseUrl}/images/services/meditation-stress-support.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const focusAreas = [
  {
    number: "01",
    title: "Pranayama",
    description:
      "Controlled breathing practices can be used to develop breathing awareness and, where appropriate, form part of a wider health practice.",
  },
  {
    number: "02",
    title: "Mindfulness",
    description:
      "Mindfulness develops sustained attention and awareness of present-moment experience, including thoughts, sensations and breathing.",
  },
  {
    number: "03",
    title: "Stress management",
    description:
      "Breathing and mindfulness can provide practical skills for working with everyday stress and supporting calmer, more deliberate responses.",
  },
  {
    number: "04",
    title: "Consistent practice",
    description:
      "The research base for structured programmes generally involves regular practice over time rather than a single relaxation session.",
  },
  {
    number: "05",
    title: "Individual context",
    description:
      "The practice should be appropriate to your health needs, experience and circumstances rather than treated as one universal routine.",
  },
];

const useCases = [
  [
    "Everyday stress",
    "For people who want practical skills for awareness, breathing and managing everyday stress.",
  ],
  [
    "Sleep & recovery",
    "For people exploring relaxation and awareness practices as part of a wider approach to rest and recovery.",
  ],
  [
    "Breathing awareness",
    "For people who want to develop greater awareness and control of their breathing through structured practice.",
  ],
  [
    "Cardiovascular health",
    "For people considering breathing and mindfulness alongside appropriate medical and lifestyle care.",
  ],
  [
    "Mind-body wellbeing",
    "For people interested in practices that connect attention, breathing and everyday wellbeing.",
  ],
];

const faqs = [
  {
    question: "What are breath and mindfulness practices?",
    answer:
      "Breath and mindfulness practices include structured breathing techniques such as pranayama and awareness-based practices such as mindfulness meditation. They can be used to develop breathing awareness, attention and practical skills for working with stress.",
  },
  {
    question: "What is pranayama?",
    answer:
      "Pranayama refers to controlled breathing practices traditionally used in yoga. Different techniques vary in pace, pattern and purpose, so the appropriate practice depends on the person's needs and circumstances.",
  },
  {
    question: "Does mindfulness have measurable physical effects?",
    answer:
      "Research has investigated measurable effects of structured mindfulness programmes, including changes in stress-related outcomes. The strength of evidence varies by outcome and population, so mindfulness should not be presented as a treatment for every condition.",
  },
  {
    question: "How is breathwork different from mindfulness meditation?",
    answer:
      "Breathwork or pranayama focuses primarily on deliberately changing or observing breathing patterns. Mindfulness meditation is broader and focuses on sustained attention and awareness. They can be practised separately or together when appropriate.",
  },
  {
    question: "How long does it take to benefit from mindfulness or breathing practice?",
    answer:
      "Research on structured programmes commonly involves regular practice over several weeks. The time and degree of benefit vary between people and depend on the practice, consistency and outcome being considered.",
  },
  {
    question: "Can breath and mindfulness practices replace medical treatment?",
    answer:
      "No. These practices are intended to complement appropriate healthcare. They should not replace prescribed medication, diagnosis, emergency care or treatment from a qualified healthcare professional.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Breath & Mindfulness | Sutra Health",
  description:
    "Practical breath and mindfulness practices for stress management, breathing awareness and wellbeing.",
  url: pageUrl,
  inLanguage: "en-IN",
  about: {
    "@type": "MedicalTherapy",
    name: "Breath & Mindfulness",
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
  dateModified: "2026-09-10",
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Breath & Mindfulness",
  description:
    "Structured breathing and mindfulness practices used to develop breathing awareness, attention and practical skills for working with stress and wellbeing.",
  inDefinedTermSet: pageUrl,
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
      name: "Breath & Mindfulness",
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

export default function BreathMindfulnessPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
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
                  Breath & Mindfulness
                </p>

                <h1 className="mt-4 max-w-[700px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[64px]">
                  Breath & Mindfulness for Stress & Wellbeing
                </h1>

                <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                  Breathing and mindfulness practices can build awareness,
                  attention and practical skills for working with everyday
                  stress. At Sutra Health, they are considered within your
                  wider health needs rather than as a one-size-fits-all remedy.
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
                    src="/images/services/meditation-stress-support.webp"
                    alt="Breath and mindfulness practice at Sutra Health"
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
                Breath & mindfulness in brief
              </p>

              <h2 className="mt-3 max-w-[720px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Practical skills for breathing, awareness and stress.
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#687A73] sm:text-[16px]">
                Breath and mindfulness practices include controlled breathing,
                attention and awareness exercises that can be practised
                regularly. Pranayama focuses on breathing techniques, while
                mindfulness develops awareness of present-moment experience.
                Both can form part of a wider approach to health and wellbeing
                when appropriate.
              </p>

              <ul className="mt-7 grid gap-3 text-[14px] leading-7 text-[#687A73] sm:grid-cols-2">
                <li className="border-l-2 border-[#65966F] pl-4">
                  Develop breathing awareness
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Build attention and awareness
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Practise practical stress-management skills
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Build a consistent mind-body practice
                </li>
              </ul>
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
                  Breath and mindfulness for real-life needs.
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {useCases.map(([title, description]) => (
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

      {/* EVIDENCE */}
      <section className="bg-[#173F35] text-[#FAF8F1]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[850px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9BBDA1]">
                What the research shows
              </p>

              <h2 className="mt-3 max-w-[760px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] sm:text-[44px]">
                Mindfulness and breathing have been studied beyond subjective
                relaxation.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-white/70 sm:text-[15px] sm:leading-8">
                <p>
                  Structured mindfulness programmes have been studied for
                  stress-related outcomes, including physiological measures.
                  The strength of evidence depends on the programme, population
                  and outcome being measured.
                </p>

                <p>
                  The source research for this service page includes a
                  randomized controlled trial in health workers in which
                  Mindfulness-Based Stress Reduction (MBSR) was associated with
                  a reduction in the cortisol awakening response, a physiological
                  marker related to stress-hormone activity.
                </p>

                <p>
                  Pranayama is a distinct but related practice. Controlled
                  breathing is used in the clinical protocols discussed on our{" "}
                  <Link
                    href="/conditions/high-blood-pressure"
                    className="font-semibold underline decoration-[#B7CCB8] underline-offset-2 hover:text-white"
                  >
                    High Blood Pressure
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/conditions/migraine-headache"
                    className="font-semibold underline decoration-[#B7CCB8] underline-offset-2 hover:text-white"
                  >
                    Migraine & Headache
                  </Link>{" "}
                  pages.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[12px]">
                <a
                  href="https://academic.lifequality.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8D0BC] underline underline-offset-4 hover:text-white"
                >
                  Sutra Health academic research →
                </a>
                <Link
                  href="/conditions"
                  className="text-[#B8D0BC] underline underline-offset-4 hover:text-white"
                >
                  Explore condition-specific evidence →
                </Link>
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
                  The practice should fit the{" "}
                  <span className="italic text-[#65966F]">person and purpose.</span>
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {focusAreas.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-3 py-6 sm:grid-cols-[72px_240px_1fr] sm:items-center sm:py-7"
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
                Breath and mindfulness are practices within the wider method.
              </h2>
              <p className="mt-6 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The Sutra Health Method describes how we work: understand,
                identify, personalise, practise, sustain and adapt. Breath and
                mindfulness practices can support that process when appropriate
                to the person's needs.
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
                  Start with context, not a generic technique.
                </h2>
              </div>

              <div className="border-y border-[#173F35]/10 py-7 sm:py-8">
                <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                  The 21-question lifestyle assessment helps you reflect on
                  everyday health patterns before deciding what support may be
                  useful. It can provide context for the wider plan, but it is
                  not a diagnosis.
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
              See where breath and mindfulness may be relevant.
            </h2>

            <div className="mt-8 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {[
                [
                  "/conditions/high-blood-pressure",
                  "High Blood Pressure",
                  "Explore the wider lifestyle approach, including breathing and other relevant practices.",
                ],
                [
                  "/conditions/migraine-headache",
                  "Migraine & Headache",
                  "See how breathing and therapeutic practices are considered within condition-specific care.",
                ],
                [
                  "/conditions/metabolic-health",
                  "Metabolic Health",
                  "Explore how stress, routine, movement and other lifestyle factors can fit together.",
                ],
                [
                  "/conditions/digestive-gut-health",
                  "Digestive & Gut Health",
                  "Consider stress, routines and other everyday factors alongside appropriate healthcare.",
                ],
              ].map(([href, title, description]) => (
                <Link
                  key={href}
                  href={href}
                  className="grid gap-2 py-6 transition-colors hover:bg-white/50 sm:grid-cols-[280px_1fr_auto] sm:items-center sm:gap-6 sm:py-7"
                >
                  <h3 className="font-serif text-[21px] text-[#173F35]">
                    {title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    {description}
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
              {[
                [
                  "/what-we-do/lifestyle",
                  "Lifestyle Medicine",
                  "Understand the everyday behaviours and circumstances that may influence health.",
                ],
                [
                  "/what-we-do/nutrition",
                  "Nutrition Counselling",
                  "Practical food guidance shaped around your health needs, preferences and routine.",
                ],
                [
                  "/what-we-do/therapeutic-yoga",
                  "Therapeutic Yoga",
                  "Adapted movement and yoga practices considered around your needs and current ability.",
                ],
              ].map(([href, title, description], index) => (
                <Link
                  key={href}
                  href={href}
                  className="grid gap-2 py-6 sm:grid-cols-[72px_280px_1fr_auto] sm:items-center sm:gap-5 sm:py-7"
                >
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[#65966F]">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-[21px] text-[#173F35]">
                    {title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    {description}
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
      <FAQ faqs={faqs} />

      {/* FINAL CTA */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="mx-auto max-w-[760px] py-14 text-center sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9BBDA1]">
              Take the next step
            </p>
            <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[44px]">
              Build a calmer, more aware daily practice.
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[14px] leading-7 text-white/65">
              Start with a conversation about your health, current routine and
              what you would like support with.
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
