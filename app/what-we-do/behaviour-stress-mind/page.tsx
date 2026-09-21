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
  {
    number: "01",
    title: "Everyday stress",
    description:
      "Practical skills for awareness, breathing and managing everyday stress.",
  },
  {
    number: "02",
    title: "Sleep & recovery",
    description:
      "Relaxation and awareness practices as part of a wider approach to rest and recovery.",
  },
  {
    number: "03",
    title: "Breathing awareness",
    description:
      "Structured practice to develop greater awareness and control of breathing.",
  },
  {
    number: "04",
    title: "Cardiovascular health",
    description:
      "Breathing and mindfulness considered alongside appropriate medical and lifestyle care.",
  },
  {
    number: "05",
    title: "Mind-body wellbeing",
    description:
      "Practices that connect attention, breathing and everyday wellbeing.",
  },
];

const relatedAreas = [
  {
    title: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
  },
  {
    title: "Migraine & Headache",
    href: "/conditions/migraine-headache",
  },
  {
    title: "Metabolic Health",
    href: "/conditions/metabolic-health",
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
  },
  {
    title: "Nutrition Counselling",
    href: "/what-we-do/nutrition",
  },
  {
    title: "Therapeutic Yoga",
    href: "/what-we-do/therapeutic-yoga",
  },
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
    question:
      "How long does it take to benefit from mindfulness or breathing practice?",
    answer:
      "Research on structured programmes commonly involves regular practice over several weeks. The time and degree of benefit vary between people and depend on the practice, consistency and outcome being considered.",
  },
  {
    question:
      "Can breath and mindfulness practices replace medical treatment?",
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

export default function BreathMindfulnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermSchema),
        }}
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

      <main className="bg-[#F7F5EF] text-[#202522]">

        {/* =====================================================
            HERO
        ===================================================== */}
       <section className="bg-[#F7F5EF]">
               <Container>
                 <div className="mx-auto max-w-[1180px] pt-16 sm:pt-20 lg:pt-24">
                   <div className="max-w-[850px]">
                  <Label>Breath & Mindfulness</Label>

                  <h1 className="mt-6 max-w-[900px] font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.05em] sm:text-[62px] lg:text-[78px]">
                    Breathe with more awareness.{" "}
                    <em className="font-normal text-[#17413D]">
                      Live with more presence.
                    </em>
                  </h1>

                  <p className="mt-7 max-w-[700px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
                    Breathing and mindfulness practices can build awareness,
                    attention and practical skills for working with everyday
                    stress. At Sutra Health, they are considered within your
                    wider health needs rather than as a one-size-fits-all
                    remedy.
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
                  src="/images/services/meditation-stress-support.webp"
                  alt="Breath and mindfulness practice at Sutra Health"
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
                    Breath & Mindfulness
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            DIRECT ANSWER
        ===================================================== */}
        <section className="bg-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-36">

              <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
                <Label>In simple terms</Label>

                <div>
                  <h2 className="max-w-[820px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[60px]">
                    Practical skills for breathing, awareness and stress.
                  </h2>

                  <p className="mt-7 max-w-[760px] text-[17px] leading-8 text-[#4E5B56] sm:text-[19px] sm:leading-9">
                    Breath and mindfulness practices include controlled
                    breathing, attention and awareness exercises that can be
                    practised regularly.
                  </p>

                  <div className="mt-8 grid gap-0 border-y border-[#202522]/10 sm:grid-cols-2">
                    <div className="border-b border-[#202522]/10 py-6 sm:border-r sm:pr-8">
                      <p className="font-serif text-[24px] text-[#17413D]">
                        Pranayama
                      </p>
                      <p className="mt-2 text-[14px] leading-7 text-[#65736D]">
                        Focuses on controlled breathing techniques.
                      </p>
                    </div>

                    <div className="py-6 sm:pl-8">
                      <p className="font-serif text-[24px] text-[#17413D]">
                        Mindfulness
                      </p>
                      <p className="mt-2 text-[14px] leading-7 text-[#65736D]">
                        Develops sustained attention and awareness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            FOCUS AREAS
        ===================================================== */}
        <section className="bg-[#17413D] text-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="max-w-[800px]">
                <Label light>What we focus on</Label>

                <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                  A practice built around the person, not a fixed routine.
                </h2>

                <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
                  The appropriate practice depends on your health needs,
                  experience and circumstances.
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
                      {area.description}
                    </p>
                  </article>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            WHO IT CAN BE USEFUL FOR
        ===================================================== */}
        <section className="bg-[#F7F5EF]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28">

              <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">

                <div>
                  <Label>Where it may help</Label>

                  <h2 className="mt-6 max-w-[420px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    Practices for different everyday needs.
                  </h2>
                </div>

                <div className="border-t border-[#202522]/10">
                  {useCases.map((item) => (
                    <article
                      key={item.number}
                      className="grid gap-4 border-b border-[#202522]/10 py-7 sm:grid-cols-[70px_220px_1fr] sm:items-center sm:gap-6"
                    >
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {item.number}
                      </span>

                      <h3 className="font-serif text-[22px] font-medium text-[#17413D] sm:text-[25px]">
                        {item.title}
                      </h3>

                      <p className="text-[14px] leading-7 text-[#4E5B56] sm:text-[15px]">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            EVIDENCE
        ===================================================== */}
        <section className="bg-[#E7EDE8]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">

                <div>
                  <Label>Evidence</Label>

                  <h2 className="mt-6 max-w-[420px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    What the research shows.
                  </h2>
                </div>

                <div>
                  <div className="border-t border-[#202522]/10">

                    <article className="border-b border-[#202522]/10 py-8 sm:py-10">
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="font-serif text-[27px] font-medium text-[#202522]">
                          Mindfulness
                        </h3>

                        <span className="text-[10px] font-semibold tracking-[0.14em] text-[#65736D]">
                          01
                        </span>
                      </div>

                      <p className="mt-4 max-w-[650px] text-[15px] leading-8 text-[#4E5B56]">
                        Structured mindfulness programmes have been studied for
                        stress-related outcomes, including physiological
                        measures. The strength of evidence depends on the
                        programme, population and outcome being measured.
                      </p>
                    </article>

                    <article className="border-b border-[#202522]/10 py-8 sm:py-10">
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="font-serif text-[27px] font-medium text-[#202522]">
                          Structured practice
                        </h3>

                        <span className="text-[10px] font-semibold tracking-[0.14em] text-[#65736D]">
                          02
                        </span>
                      </div>

                      <p className="mt-4 max-w-[650px] text-[15px] leading-8 text-[#4E5B56]">
                        Research commonly examines regular practice over time
                        rather than a single relaxation session. Results can
                        vary according to the practice, population and outcome
                        being studied.
                      </p>
                    </article>

                    <article className="py-8 sm:py-10">
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="font-serif text-[27px] font-medium text-[#202522]">
                          Pranayama
                        </h3>

                        <span className="text-[10px] font-semibold tracking-[0.14em] text-[#65736D]">
                          03
                        </span>
                      </div>

                      <p className="mt-4 max-w-[650px] text-[15px] leading-8 text-[#4E5B56]">
                        Pranayama is a distinct but related practice. Controlled
                        breathing is used in the clinical protocols discussed
                        on our condition-specific pages.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                        <Link
                          href="/conditions/high-blood-pressure"
                          className="text-[12px] font-semibold text-[#17413D] underline underline-offset-4"
                        >
                          High Blood Pressure →
                        </Link>

                        <Link
                          href="/conditions/migraine-headache"
                          className="text-[12px] font-semibold text-[#17413D] underline underline-offset-4"
                        >
                          Migraine & Headache →
                        </Link>
                      </div>
                    </article>

                  </div>

                  <a
                    href="https://academic.lifequality.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex text-[12px] font-semibold text-[#17413D] underline underline-offset-4"
                  >
                    Sutra Health academic research →
                  </a>
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            HOW IT FITS
        ===================================================== */}
        <section className="bg-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="max-w-[800px]">
                <Label>How it fits</Label>

                <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                  Breath and mindfulness are part of a wider approach to health.
                </h2>

                <p className="mt-6 max-w-[680px] text-[15px] leading-8 text-[#4E5B56] sm:text-[17px]">
                  The Sutra Health Method describes how we work: understand,
                  identify, personalise, practise, sustain and adapt. Breath
                  and mindfulness practices can support that process when
                  appropriate to the person's needs.
                </p>
              </div>

              <div className="mt-14 grid border-y border-[#202522]/10 sm:grid-cols-6">
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
                    className="border-b border-[#202522]/10 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 font-serif text-[18px] font-medium text-[#202522]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/approach"
                className="group mt-8 inline-flex items-center gap-3 text-[13px] font-semibold text-[#17413D]"
              >
                Explore our approach
                <Arrow />
              </Link>

            </div>
          </Container>
        </section>

        {/* =====================================================
            ASSESSMENT
        ===================================================== */}
        <section className="bg-[#F7F5EF]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28">

              <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">

                <div>
                  <Label>Start with understanding</Label>

                  <h2 className="mt-6 max-w-[420px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    Start with context, not a generic technique.
                  </h2>
                </div>

                <div className="border-y border-[#202522]/10 py-8 sm:py-10">
                  <p className="max-w-[650px] text-[15px] leading-8 text-[#4E5B56] sm:text-[16px]">
                    The 21-question lifestyle assessment helps you reflect on
                    everyday health patterns before deciding what support may
                    be useful. It can provide context for the wider plan, but
                    it is not a diagnosis.
                  </p>

                  <Link
                    href="/score"
                    className="group mt-7 inline-flex min-h-[50px] items-center justify-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#12332F] sm:text-[13px]"
                  >
                    Take the assessment
                    <Arrow />
                  </Link>
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            RELATED CONDITIONS
        ===================================================== */}
        <section className="bg-[#E7EDE8]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28">

              <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">

                <div>
                  <Label>Explore health areas</Label>

                  <h2 className="mt-6 max-w-[420px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    See where these practices may be relevant.
                  </h2>
                </div>

                <div className="border-t border-[#202522]/10">
                  {relatedAreas.map((area, index) => (
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
            OTHER PRACTICES
        ===================================================== */}
        <section className="bg-white">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28">

              <Label>What we do</Label>

              <h2 className="mt-6 max-w-[720px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                Other practices that may form part of your plan.
              </h2>

              <div className="mt-12 grid border-y border-[#202522]/10 sm:grid-cols-3">
                {otherPractices.map((practice, index) => (
                  <Link
                    key={practice.href}
                    href={practice.href}
                    className="group border-b border-[#202522]/10 py-8 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="font-serif text-[22px] font-medium text-[#202522] sm:text-[25px]">
                        {practice.title}
                      </span>

                      <Arrow />
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}
        <section className="bg-[#F7F5EF]">
          <Container>
            <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">

              <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">

                <div>
                  <Label>Common questions</Label>

                  <h2 className="mt-6 max-w-[400px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                    Breath & mindfulness, made clear.
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
                        <p className="max-w-[650px] text-[15px] leading-8 text-[#4E5B56] sm:text-[16px]">
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
            FINAL CTA
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
                  Start with a conversation about your health, current routine
                  and what you would like support with.
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
                Breath and mindfulness practices are intended to complement
                appropriate healthcare. They should not replace prescribed
                medication, diagnosis, emergency care or treatment from a
                qualified healthcare professional.
              </p>
            </div>
          </Container>
        </section>

      </main>
    </>
  );
}