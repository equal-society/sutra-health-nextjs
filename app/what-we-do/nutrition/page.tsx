import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata = {
  title: "Nutrition Counselling for Better Health | Sutra Health",
  description:
    "Nutrition counselling at Sutra Health uses evidence-informed dietary patterns and practical guidance to support healthier eating, sustainable habits and better health.",
  keywords: [
    "nutrition counselling",
    "nutrition counselling India",
    "nutrition counselling Faridabad",
    "healthy diet counselling",
    "DASH diet",
    "Mediterranean diet",
    "nutrition for blood pressure",
    "nutrition for metabolic health",
  ],
  alternates: {
    canonical: "https://lifequality.org.in/what-we-do/nutrition",
  },
  openGraph: {
    title: "Nutrition Counselling for Better Health | Sutra Health",
    description:
      "Evidence-informed nutrition counselling focused on practical eating habits and sustainable changes.",
    url: "https://lifequality.org.in/what-we-do/nutrition",
    type: "website",
    images: [
      {
        url: "/images/services/nutrition-counselling.webp",
        width: 1200,
        height: 800,
        alt: "Nutrition counselling at Sutra Health",
      },
    ],
  },
};

const nutritionAreas = [
  "Everyday healthy eating",
  "Weight management",
  "Metabolic health",
  "Blood pressure",
  "Digestive health",
];

const focusAreas = [
  {
    number: "01",
    title: "Dietary pattern",
    text: "We look at the overall pattern of eating rather than focusing on individual foods. This can include vegetables, fruits, whole grains, protein and healthy fats.",
  },
  {
    number: "02",
    title: "Sodium & processed food",
    text: "Reducing sodium and highly processed foods can be part of a broader nutrition plan, particularly when blood pressure is a concern.",
  },
  {
    number: "03",
    title: "Your real routine",
    text: "Food choices need to work within your preferences, schedule, culture, budget, cooking habits and the foods available to you.",
  },
  {
    number: "04",
    title: "Health needs",
    text: "Nutrition guidance considers your health goals and individual needs rather than following a one-size-fits-all diet.",
  },
  {
    number: "05",
    title: "Habits that last",
    text: "The focus is on practical changes that can become part of everyday life rather than short-term restrictive diets.",
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
    title: "Digestive Health",
    href: "/conditions/digestive-health",
  },
];

const otherPractices = [
  {
    title: "Lifestyle Medicine",
    href: "/what-we-do/lifestyle-medicine",
  },
  {
    title: "Therapeutic Yoga",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    title: "Breath & Mindfulness",
    href: "/what-we-do/breath-mindfulness",
  },
];

const faqs = [
  {
    question: "What does nutrition counselling involve?",
    answer:
      "Nutrition counselling looks at your eating pattern, health needs, preferences and everyday routine. The aim is to identify practical changes that can support healthier eating and sustainable habits.",
  },
  {
    question: "Does nutrition counselling mean following a strict diet?",
    answer:
      "Not necessarily. The focus is on practical eating habits that fit your routine, preferences and health needs rather than a short-term restrictive diet.",
  },
  {
    question: "What is the DASH diet?",
    answer:
      "DASH stands for Dietary Approaches to Stop Hypertension. It is an evidence-informed eating pattern that emphasises foods such as vegetables, fruits, whole grains and other nutrient-rich foods while paying attention to sodium intake.",
  },
  {
    question: "Can nutrition counselling help with high blood pressure?",
    answer:
      "Nutrition can be one part of a broader plan for managing blood pressure. Eating patterns such as DASH have been studied in relation to blood pressure and cardiovascular health.",
  },
  {
    question: "Can nutrition counselling replace medication?",
    answer:
      "Nutrition counselling is not a substitute for prescribed medication. Any changes to medication should be discussed with your treating clinician.",
  },
];

function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${
          light ? "bg-[#91A298]" : "bg-[#91A298]"
        }`}
      />
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

export default function NutritionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://lifequality.org.in/what-we-do/nutrition#webpage",
        url: "https://lifequality.org.in/what-we-do/nutrition",
        name: "Nutrition Counselling for Better Health | Sutra Health",
        description:
          "Nutrition counselling at Sutra Health uses evidence-informed dietary patterns and practical guidance to support healthier eating, sustainable habits and better health.",
        author: {
          "@type": "Person",
          name: "Dr. Rakesh Sarwal",
        },
        reviewer: {
          "@type": "Person",
          name: "Dr. Rakesh Sarwal",
          honorificSuffix: "MBBS MPH DrPH",
        },
        publisher: {
          "@type": "Organization",
          name: "Sutra Health",
          url: "https://lifequality.org.in",
        },
        dateModified: "2026-09-10",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lifequality.org.in/what-we-do/nutrition#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://lifequality.org.in",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://lifequality.org.in/what-we-do/nutrition#faq",
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
    <main className="bg-[#F7F5EF] text-[#202522]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#F7F5EF]">
        <Container>
          <div className="mx-auto max-w-[1180px] pt-16 sm:pt-20 lg:pt-24">
            <div className="max-w-[850px]">
              <Label>Nutrition Counselling</Label>

              <h1 className="mt-6 max-w-[850px] font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.05em] text-[#202522] sm:text-[62px] lg:text-[78px]">
                Better nutrition starts with{" "}
                <em className="text-[#17413D]">everyday choices.</em>
              </h1>

              <p className="mt-7 max-w-[650px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
                Evidence-informed nutrition counselling focused on practical
                eating habits that support your health and fit your everyday
                life.
              </p>

              <div className="mt-9">
                <Link
                  href="/book"
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#12332F] sm:w-auto sm:text-[13px]"
                >
                  Book a consultation
                  <Arrow />
                </Link>
              </div>
            </div>

            {/* Large editorial image */}
            <div className="relative mt-14 sm:mt-18 lg:mt-20">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/services/nutrition-counselling.webp"
                  alt="Nutrition counselling at Sutra Health"
                  fill
                  priority
                  sizes="(max-width: 1180px) 100vw, 1180px"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 hidden bg-[#F7F5EF] px-7 py-5 lg:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65736D]">
                  Sutra Health
                </p>
                <p className="mt-1 text-[13px] text-[#202522]">
                  Nutrition counselling
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          SIGNATURE STATEMENT
      ========================================================= */}
      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-36">
            <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
              <Label>Our perspective</Label>

              <div>
                <p className="max-w-[820px] font-serif text-[34px] font-medium leading-[1.15] tracking-[-0.04em] text-[#202522] sm:text-[46px] lg:text-[56px]">
                  Nutrition is not about finding the perfect diet. It is about
                  finding an approach that can become part of your life.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHAT IT CAN HELP WITH
      ========================================================= */}
      <section className="bg-[#F7F5EF]">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
              <div>
                <Label>What it can help with</Label>

                <h2 className="mt-6 max-w-[380px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                  Nutrition has a role across many areas of health.
                </h2>
              </div>

              <div className="border-t border-[#202522]/10">
                {nutritionAreas.map((area, index) => (
                  <div
                    key={area}
                    className="group flex items-center justify-between border-b border-[#202522]/10 py-6 sm:py-7"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-serif text-[22px] font-medium tracking-[-0.02em] text-[#202522] sm:text-[26px]">
                        {area}
                      </span>
                    </div>

                    <span className="text-[#17413D] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
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
      <section className="bg-[#17413D] text-white">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">
            <div className="max-w-[760px]">
              <Label light>What we look at</Label>

              <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                Your food choices make more sense when we understand the
                context around them.
              </h2>
            </div>

            <div className="mt-16 border-t border-white/15">
              {focusAreas.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 border-b border-white/15 py-8 sm:py-10 lg:grid-cols-[90px_280px_1fr] lg:gap-8"
                >
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[#91A298]">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-[25px] font-medium tracking-[-0.025em] text-white sm:text-[29px]">
                    {item.title}
                  </h3>

                  <p className="max-w-[570px] text-[14px] leading-7 text-white/70 sm:text-[15px]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          EVIDENCE
      ========================================================= */}
      <section className="bg-[#E7EDE8]">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
              <div>
                <Label>Evidence</Label>

                <h2 className="mt-6 max-w-[400px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                  Eating patterns that have been studied.
                </h2>
              </div>

              <div className="border-t border-[#202522]/10">
                <article className="border-b border-[#202522]/10 py-8 sm:py-10">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-serif text-[27px] font-medium text-[#202522]">
                      DASH
                    </h3>

                    <span className="text-[10px] font-semibold tracking-[0.14em] text-[#65736D]">
                      01
                    </span>
                  </div>

                  <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#4E5B56]">
                    The Dietary Approaches to Stop Hypertension eating pattern
                    has been studied in relation to blood pressure and
                    cardiovascular health.
                  </p>

                  <a
                    href="https://www.nhlbi.nih.gov/health/dash/health-benefits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-[12px] font-semibold text-[#17413D] hover:text-[#12332F]"
                  >
                    NHLBI evidence →
                  </a>
                </article>

                <article className="border-b border-[#202522]/10 py-8 sm:py-10">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-serif text-[27px] font-medium text-[#202522]">
                      DASH4D
                    </h3>

                    <span className="text-[10px] font-semibold tracking-[0.14em] text-[#65736D]">
                      02
                    </span>
                  </div>

                  <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#4E5B56]">
                    Research has also examined the DASH dietary pattern in the
                    context of diabetes and blood pressure.
                  </p>

                  <a
                    href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2835080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-[12px] font-semibold text-[#17413D] hover:text-[#12332F]"
                  >
                    JAMA study →
                  </a>
                </article>

                <article className="py-8 sm:py-10">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-serif text-[27px] font-medium text-[#202522]">
                      Mediterranean-style eating
                    </h3>

                    <span className="text-[10px] font-semibold tracking-[0.14em] text-[#65736D]">
                      03
                    </span>
                  </div>

                  <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#4E5B56]">
                    Mediterranean-style dietary patterns have also been studied
                    for their relationship with cardiovascular health.
                  </p>

                  <a
                    href="https://www.nejm.org/doi/full/10.1056/NEJMoa1800389"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-[12px] font-semibold text-[#17413D] hover:text-[#12332F]"
                  >
                    PREDIMED study →
                  </a>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          HOW IT FITS
      ========================================================= */}
      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-32">
            <div className="max-w-[800px]">
              <Label>How it fits</Label>

              <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                Nutrition can be one part of a wider health plan.
              </h2>

              <p className="mt-6 max-w-[680px] text-[15px] leading-8 text-[#4E5B56] sm:text-[17px]">
                At Sutra Health, nutrition can sit alongside other lifestyle
                practices depending on your needs.
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
                  className="border-b border-[#202522]/10 px-1 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="block text-[10px] font-semibold tracking-[0.14em] text-[#91A298]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mt-3 block font-serif text-[18px] font-medium text-[#202522]">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/approach"
              className="group mt-8 inline-flex items-center gap-3 text-[13px] font-semibold text-[#17413D] transition-colors hover:text-[#12332F]"
            >
              Explore our approach
              <Arrow />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================
          ASSESSMENT
      ========================================================= */}
      <section className="bg-[#F7F5EF]">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28">
            <div className="relative overflow-hidden bg-[#E7EDE8] px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <div className="max-w-[700px]">
                <Label>Start with an assessment</Label>

                <h2 className="mt-6 font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[50px]">
                  Understand where your lifestyle stands today.
                </h2>

                <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#4E5B56] sm:text-[16px]">
                  Our 21-question lifestyle assessment helps you reflect on
                  the areas of daily life that may influence your overall
                  health.
                </p>

                <Link
                  href="/score"
                  className="group mt-8 inline-flex min-h-[50px] items-center justify-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#12332F] sm:text-[13px]"
                >
                  Take the assessment
                  <Arrow />
                </Link>
              </div>

              <span className="absolute -bottom-8 right-8 hidden font-serif text-[180px] leading-none text-[#17413D]/[0.06] lg:block">
                21
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          RELATED CONDITIONS
      ========================================================= */}
      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
              <div>
                <Label>Related conditions</Label>

                <h2 className="mt-6 max-w-[390px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                  Explore nutrition in context.
                </h2>
              </div>

              <div className="border-t border-[#202522]/10">
                {relatedConditions.map((condition, index) => (
                  <Link
                    key={condition.title}
                    href={condition.href}
                    className="group flex items-center justify-between border-b border-[#202522]/10 py-6 sm:py-7"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-serif text-[22px] font-medium text-[#202522] sm:text-[26px]">
                        {condition.title}
                      </span>
                    </div>

                    <Arrow />
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
      <section className="bg-[#F7F5EF]">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28">
            <Label>Other practices</Label>

            <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-[700px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                Other ways Sutra Health can support your health.
              </h2>
            </div>

            <div className="mt-12 grid border-t border-[#202522]/10 sm:grid-cols-3">
              {otherPractices.map((practice, index) => (
                <Link
                  key={practice.title}
                  href={practice.href}
                  className="group border-b border-[#202522]/10 py-7 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mt-5 flex items-center justify-between gap-4 font-serif text-[22px] font-medium text-[#202522]">
                    {practice.title}
                    <Arrow />
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
      <section
        aria-labelledby="faq-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="max-w-[720px]">

            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Questions
              </p>
            </div>

            <h2
              id="faq-heading"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.04em] text-[#202522] sm:text-[48px]"
            >
              Common questions
            </h2>

            <p className="mt-5 max-w-[650px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
              A few simple answers to help you understand how Sutra Health
              works.
            </p>
          </div>

          {/* FAQ list */}
          <div className="mt-12 max-w-[1000px] border-y border-[#202522]/10">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[#202522]/10 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-[16px] font-medium leading-7 text-[#202522] marker:hidden sm:py-7 sm:text-[19px]">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7EDE8] text-[21px] font-light leading-none text-[#17413D] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-[850px] pb-7 pr-8 text-[15px] leading-7 text-[#4E5B56] sm:text-[17px] sm:leading-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#F7F5EF] px-4 py-6 sm:px-6 sm:py-10">
        <Container>
          <div className="mx-auto max-w-[1180px] rounded-[22px] bg-[#17413D] px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <Label light>Take the next step</Label>

            <div className="mt-6 max-w-[760px]">
              <h2 className="font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                Start with a conversation about your health.
              </h2>

              <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
                Understand what may be useful for you and where nutrition can
                fit into your wider health plan.
              </p>

              <Link
                href="/book"
                className="group mt-8 inline-flex min-h-[50px] items-center justify-center gap-4 rounded-full bg-[#F7F5EF] px-7 py-3 text-[12px] font-semibold text-[#17413D] transition-all duration-300 hover:bg-[#E7EDE8] sm:text-[13px]"
              >
                Book a consultation
                <Arrow />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================= */}
      <section className="bg-[#F7F5EF] pb-10">
        <Container>
          <p className="mx-auto max-w-[1180px] text-[10px] leading-5 text-[#65736D]">
            Nutrition counselling is intended to support health and wellbeing
            and does not replace medical diagnosis or treatment. Medication
            changes should always be discussed with your treating clinician.
          </p>
        </Container>
      </section>
    </main>
  );
}