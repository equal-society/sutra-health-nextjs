import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

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
    images: ["https://lifequality.org.in/images/services/nutrition-counselling.webp"],
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
    sameAs: [
      "https://academic.lifequality.org.in/",
    ],
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

export default function NutritionPage() {
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
                  Nutrition Counselling
                </p>

                <h1 className="mt-4 max-w-[700px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[64px]">
                  Nutrition Counselling for Better Health
                </h1>

                <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                  Nutrition counselling helps turn evidence-informed dietary
                  guidance into practical changes that fit your health needs,
                  preferences and everyday routine.
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
                    src="/images/services/nutrition-counselling.webp"
                    alt="Nutrition counselling at Sutra Health"
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
                Nutrition counselling in brief
              </p>

              <h2 className="mt-3 max-w-[720px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Better nutrition is about the pattern, not a perfect plate.
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#687A73] sm:text-[16px]">
                Nutrition counselling is an evidence-informed process of
                understanding how you currently eat, identifying what may
                support your health goals, and making practical changes you can
                maintain. At Sutra Health, dietary guidance is considered
                alongside your wider health needs rather than as an isolated
                food plan.
              </p>

              <ul className="mt-7 grid gap-3 text-[14px] leading-7 text-[#687A73] sm:grid-cols-2">
                <li className="border-l-2 border-[#65966F] pl-4">
                  Understand your current eating pattern
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Identify realistic areas for change
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Connect nutrition with your health needs
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Build habits you can sustain
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
                  Nutrition support for real health needs.
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {[
                  ["Everyday health", "For people who want to improve eating habits, food choices and consistency."],
                  ["Weight management", "For people looking for practical nutrition changes that can support sustainable weight management."],
                  ["Metabolic health", "For people working on blood sugar, metabolic risk factors and related lifestyle changes."],
                  ["Blood pressure", "For people who may benefit from dietary patterns and sodium reduction as part of blood pressure care."],
                  ["Digestive health", "For people who want to understand how eating patterns and routines may relate to digestive symptoms and wellbeing."],
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

      {/* EVIDENCE */}
      <section className="bg-[#173F35] text-[#FAF8F1]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[850px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9BBDA1]">
                What the evidence shows
              </p>

              <h2 className="mt-3 max-w-[760px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] sm:text-[44px]">
                Dietary patterns have been studied in clinical research.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-white/70 sm:text-[15px] sm:leading-8">
                <p>
                  <strong className="text-white">DASH.</strong> The National
                  Heart, Lung, and Blood Institute reports that the DASH eating
                  plan lowers blood pressure, and that combining DASH with
                  reduced sodium can have a greater blood-pressure effect than
                  either approach alone.
                </p>

                <p>
                  <strong className="text-white">DASH4D.</strong> In a 2025
                  randomized clinical trial involving adults with type 2
                  diabetes, a DASH-style diet combined with sodium reduction
                  lowered systolic blood pressure by 4.6 mm Hg compared with
                  the higher-sodium comparison diet.
                </p>

                <p>
                  <strong className="text-white">Mediterranean-style eating.</strong>{" "}
                  The revised PREDIMED analysis published in the New England
                  Journal of Medicine reported lower rates of major
                  cardiovascular events among participants assigned to
                  Mediterranean diets supplemented with extra-virgin olive oil
                  or nuts compared with the control diet.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[12px]">
                <a
                  href="https://www.nhlbi.nih.gov/health/dash/health-benefits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8D0BC] underline underline-offset-4 hover:text-white"
                >
                  NHLBI — DASH evidence
                </a>
                <a
                  href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2835080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8D0BC] underline underline-offset-4 hover:text-white"
                >
                  JAMA Internal Medicine — DASH4D
                </a>
                <a
                  href="https://www.nejm.org/doi/full/10.1056/NEJMoa1800389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8D0BC] underline underline-offset-4 hover:text-white"
                >
                  NEJM — PREDIMED
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
                  Pattern first,{" "}
                  <span className="italic text-[#65966F]">
                    specifics second.
                  </span>
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {focusAreas.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-3 py-7 sm:grid-cols-[72px_220px_1fr] sm:items-center sm:py-8"
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

      {/* SUTRA METHOD */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[760px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                How it fits
              </p>
              <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Nutrition is one part of a wider health plan.
              </h2>
              <p className="mt-6 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                At Sutra Health, nutrition counselling sits within the Sutra
                Health Method. We first understand your situation, identify
                relevant factors, personalise the plan, and then work toward
                changes that can be practised, sustained and adapted.
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
                  Your health is more than what is on your plate.
                </h2>
              </div>

              <div className="border-y border-[#173F35]/10 py-7 sm:py-8">
                <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                  The 21-question lifestyle assessment can help you reflect on
                  the everyday factors that may be relevant to your health.
                  Nutrition is considered alongside other parts of your
                  lifestyle rather than in isolation.
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
              See how nutrition connects with specific health concerns.
            </h2>

            <div className="mt-8 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {[
                ["/conditions/high-blood-pressure", "High Blood Pressure", "Dietary patterns and sodium are important parts of lifestyle support for blood pressure."],
                ["/conditions/metabolic-health", "Metabolic Health", "Nutrition is considered alongside activity, sleep, weight and other lifestyle factors."],
                ["/conditions/weight-management", "Weight Management", "Sustainable eating patterns can be part of a broader approach to healthy weight management."],
                ["/conditions/digestive-gut-health", "Digestive & Gut Health", "Food choices and eating routines may be considered alongside symptoms and wider health context."],
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
                ["/what-we-do/lifestyle", "Lifestyle Medicine", "Understand the everyday behaviours and circumstances that may influence health."],
                ["/what-we-do/therapeutic-yoga", "Therapeutic Yoga", "Adapted movement and yoga practices considered around your needs and capacity."],
                ["/what-we-do/breath-mindfulness", "Breath & Mindfulness", "Practical breathing and mindfulness practices that may support awareness and stress management."],
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
              Build an eating pattern that works for your health and your life.
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[14px] leading-7 text-white/65">
              Start with a conversation about your health, current routine and
              what you would like to change.
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
