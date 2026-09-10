import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

const baseUrl = "https://lifequality.org.in";
const pageUrl = `${baseUrl}/what-we-do/therapeutic-yoga`;

export const metadata: Metadata = {
  title: "Therapeutic Yoga for Better Health | Sutra Health",
  description:
    "Therapeutic yoga at Sutra Health is adapted around your health needs and supported by condition-specific clinical evidence, alongside appropriate medical care.",
  keywords: [
    "therapeutic yoga",
    "therapeutic yoga India",
    "therapeutic yoga Faridabad",
    "therapeutic yoga Delhi NCR",
    "yoga therapy",
    "therapeutic yoga for high blood pressure",
    "therapeutic yoga for diabetes",
    "therapeutic yoga for arthritis",
    "therapeutic yoga for migraine",
    "evidence-based yoga therapy",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Therapeutic Yoga for Better Health | Sutra Health",
    description:
      "Condition-specific therapeutic yoga adapted around your health needs, ability and the evidence relevant to your condition.",
    url: pageUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${baseUrl}/images/services/therapeutic-yoga.webp`,
        alt: "Therapeutic yoga at Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapeutic Yoga for Better Health | Sutra Health",
    description:
      "Condition-specific therapeutic yoga adapted around your health needs, ability and relevant clinical evidence.",
    images: [`${baseUrl}/images/services/therapeutic-yoga.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const evidenceSummary = [
  {
    number: "01",
    title: "High Blood Pressure",
    finding:
      "The source material reports randomized-trial evidence that yoga added to standard care can reduce blood pressure, with effects varying by the practice and study.",
    href: "/conditions/high-blood-pressure",
  },
  {
    number: "02",
    title: "Metabolic Health & Diabetes",
    finding:
      "The source material reports evidence from an India-wide trial of a yoga-based lifestyle protocol for reducing progression from prediabetes to diabetes.",
    href: "/conditions/metabolic-health",
  },
  {
    number: "03",
    title: "Arthritis & Joint Pain",
    finding:
      "A randomized trial reported in the source material found yoga comparable with standard strengthening exercise for knee osteoarthritis pain, while evidence differs for rheumatoid arthritis.",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    number: "04",
    title: "Migraine & Headache",
    finding:
      "The source material describes a 160-patient New Delhi trial in which yoga added to medical therapy reduced migraine frequency and intensity.",
    href: "/conditions/migraine-headache",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Your health condition",
    description:
      "The practice starts with what you are addressing. Different conditions can require different movements, intensity, pacing and precautions.",
  },
  {
    number: "02",
    title: "Your current ability",
    description:
      "You do not need to be flexible or experienced. Movements can be modified through gentler variations, reduced range of motion or appropriate support.",
  },
  {
    number: "03",
    title: "Movement & posture",
    description:
      "The selection of postures and movement is considered around your condition, capacity and the purpose of the practice.",
  },
  {
    number: "04",
    title: "Breathing & awareness",
    description:
      "Breathing and attention can form part of a therapeutic practice when appropriate to the person's needs and the intended outcome.",
  },
  {
    number: "05",
    title: "Safety & progression",
    description:
      "The practice should be appropriate to your health situation and adapted as your needs, ability and response change.",
  },
];

const faqs = [
  {
    question: "What is therapeutic yoga?",
    answer:
      "Therapeutic yoga is yoga practice adapted around a person's health condition, needs and current ability. It differs from a general fitness or flexibility class because the movements, pace and practice are selected with the condition and relevant evidence in mind.",
  },
  {
    question: "How is therapeutic yoga different from a regular yoga class?",
    answer:
      "A regular yoga class may follow a general sequence for a group. Therapeutic yoga is more condition-specific and considers what movements, intensity and modifications are appropriate for the person and the health issue being addressed.",
  },
  {
    question: "Is therapeutic yoga supported by clinical research?",
    answer:
      "There is clinical research for some specific conditions, including blood pressure, prediabetes prevention, knee osteoarthritis and migraine. The strength and quality of evidence varies by condition, so Sutra Health does not treat every yoga claim as equally established.",
  },
  {
    question: "Do I need to be flexible or experienced to start?",
    answer:
      "No. Therapeutic yoga is adapted around your current ability rather than requiring a particular fitness or flexibility level. Movements can be modified when needed.",
  },
  {
    question: "Can therapeutic yoga replace medication or medical treatment?",
    answer:
      "No. Therapeutic yoga is intended to complement appropriate medical care, not replace prescribed medication, diagnosis or treatment from a qualified healthcare professional.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Therapeutic Yoga | Sutra Health",
  description:
    "Condition-specific therapeutic yoga adapted around health needs, ability and relevant clinical evidence.",
  url: pageUrl,
  inLanguage: "en-IN",
  about: {
    "@type": "MedicalTherapy",
    name: "Therapeutic Yoga",
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
      "@type": "ScholarlyArticle",
      name: "A traffic light approach to lifestyle change: Health building guideline for NCD outpatients in India",
      url: "https://academic.lifequality.org.in/publication/2026-a-traffic-light-approach-to-lifestyle-change-health-building",
      datePublished: "2026",
    },
  ],
  dateModified: "2026-09-10",
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Therapeutic Yoga",
  description:
    "Yoga practice adapted around a person's health condition, needs and current ability, with the practice informed by relevant clinical evidence.",
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
      name: "Therapeutic Yoga",
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

export default function TherapeuticYogaPage() {
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
                  Therapeutic Yoga
                </p>

                <h1 className="mt-4 max-w-[700px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[64px]">
                  Therapeutic Yoga for Better Health
                </h1>

                <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                  Therapeutic yoga adapts yoga practice around your health
                  condition, current ability and the evidence relevant to what
                  you are addressing. It is designed to complement appropriate
                  medical care, not replace it.
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
                    src="/images/services/therapeutic-yoga.webp"
                    alt="Therapeutic yoga at Sutra Health"
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
                Therapeutic yoga in brief
              </p>

              <h2 className="mt-3 max-w-[720px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                The practice should fit the person, not the other way around.
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#687A73] sm:text-[16px]">
                Therapeutic yoga is an adapted form of yoga used in relation to
                a person's health needs. The practice can involve movement,
                posture, breathing and awareness, with the choice and intensity
                shaped by the condition, current ability and relevant evidence.
                At Sutra Health, it is considered within a wider health plan.
              </p>

              <ul className="mt-7 grid gap-3 text-[14px] leading-7 text-[#687A73] sm:grid-cols-2">
                <li className="border-l-2 border-[#65966F] pl-4">
                  Start with the health condition and individual needs
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Adapt movement to current ability
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Use condition-specific evidence where available
                </li>
                <li className="border-l-2 border-[#65966F] pl-4">
                  Complement appropriate medical care
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
                  Therapeutic yoga for specific health needs.
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {[
                  ["Blood pressure", "For people exploring yoga as part of a wider lifestyle and medical plan for blood pressure."],
                  ["Metabolic health", "For people considering yoga alongside other lifestyle measures relevant to metabolic health."],
                  ["Arthritis & joint pain", "For people who need movement adapted around joint symptoms, capacity and the condition being addressed."],
                  ["Migraine & headache", "For people who may benefit from a gentler, condition-aware practice rather than a generic intensive class."],
                  ["Beginners", "For people who are new to yoga or do not consider themselves flexible or physically experienced."],
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
                The evidence, by condition
              </p>

              <h2 className="mt-3 max-w-[760px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] sm:text-[44px]">
                Different conditions,{" "}
                <span className="italic text-[#9BBDA1]">
                  different evidence.
                </span>
              </h2>

              <p className="mt-5 max-w-[760px] text-[14px] leading-7 text-white/70 sm:text-[15px] sm:leading-8">
                Research on therapeutic yoga is not equally strong for every
                condition. We summarise the evidence by health area and link to
                the relevant condition pages rather than making one broad claim
                about yoga.
              </p>

              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {evidenceSummary.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-3 py-6 sm:grid-cols-[60px_220px_1fr] sm:items-center sm:py-7"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-[#9BBDA1]">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-[21px] text-white">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-6 text-white/65 sm:text-[14px]">
                      {item.finding}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#FAF8F1] underline decoration-[#9BBDA1]/50 underline-offset-4"
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
                  Condition first,{" "}
                  <span className="italic text-[#65966F]">
                    practice second.
                  </span>
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
                Therapeutic yoga is one practice within the wider method.
              </h2>
              <p className="mt-6 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The Sutra Health Method describes how we work: understand,
                identify, personalise, practise, sustain and adapt. Therapeutic
                yoga can form part of that process when it is appropriate to
                the person's health needs.
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
                  The right practice starts with the right context.
                </h2>
              </div>

              <div className="border-y border-[#173F35]/10 py-7 sm:py-8">
                <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                  The 21-question lifestyle assessment helps you reflect on
                  everyday health patterns before deciding what support may be
                  useful. It is a starting point for understanding, not a
                  diagnosis or a substitute for clinical assessment.
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
              See where therapeutic yoga may be relevant.
            </h2>

            <div className="mt-8 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {evidenceSummary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="grid gap-2 py-6 transition-colors hover:bg-white/50 sm:grid-cols-[280px_1fr_auto] sm:items-center sm:gap-6 sm:py-7"
                >
                  <h3 className="font-serif text-[21px] text-[#173F35]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    Explore the condition-specific information and evidence.
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
                  "Practical food guidance shaped around your health needs, preferences and everyday routine.",
                ],
                [
                  "/what-we-do/breath-mindfulness",
                  "Breath & Mindfulness",
                  "Simple practices that support breathing awareness, attention and useful ways of working with everyday stress.",
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
              Find a therapeutic yoga practice that fits your health needs.
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[14px] leading-7 text-white/65">
              Start with a conversation about your health, current ability and
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
