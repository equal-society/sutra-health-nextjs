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

const yogaAreas = [
  "High blood pressure",
  "Metabolic health",
  "Arthritis & joint pain",
  "Migraine & headache",
  "Beginners",
];

const focusAreas = [
  {
    number: "01",
    title: "Your health condition",
    text: "The practice starts with what you are addressing. Different conditions can require different movements, intensity, pacing and precautions.",
  },
  {
    number: "02",
    title: "Your current ability",
    text: "You do not need to be flexible or experienced. Movements can be modified through gentler variations, reduced range of motion or appropriate support.",
  },
  {
    number: "03",
    title: "Movement & posture",
    text: "The selection of postures and movement is considered around your condition, capacity and the purpose of the practice.",
  },
  {
    number: "04",
    title: "Breathing & awareness",
    text: "Breathing and attention can form part of a therapeutic practice when appropriate to the person's needs and the intended outcome.",
  },
  {
    number: "05",
    title: "Safety & progression",
    text: "The practice should be appropriate to your health situation and adapted as your needs, ability and response change.",
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
    title: "Arthritis & Joint Pain",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    title: "Migraine & Headache",
    href: "/conditions/migraine-headache",
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
    title: "Breath & Mindfulness",
    href: "/what-we-do/breath-mindfulness",
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
        className={`text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] ${
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

export default function TherapeuticYogaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Therapeutic Yoga for Better Health | Sutra Health",
        description:
          "Condition-specific therapeutic yoga adapted around health needs, ability and relevant clinical evidence.",
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
          url: baseUrl,
        },
        dateModified: "2026-09-10",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
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
            name: "Therapeutic Yoga",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "DefinedTerm",
        name: "Therapeutic Yoga",
        description:
          "Yoga practice adapted around a person's health condition, needs and current ability, with the practice informed by relevant clinical evidence.",
        inDefinedTermSet: pageUrl,
      },
    ],
  };

  return (
    <main className="bg-[#F7F5EF] text-[#202522]">
      {/* =========================================================
          STRUCTURED DATA
      ========================================================= */}

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
            <div className="max-w-[900px]">
              <Label>Therapeutic Yoga</Label>

              <h1 className="mt-6 max-w-[900px] font-serif text-[46px] font-medium leading-[1.04] tracking-[-0.05em] text-[#202522] sm:text-[62px] lg:text-[78px]">
                Therapeutic Yoga for{" "}
                <em className="text-[#17413D]">Better Health.</em>
              </h1>

              <p className="mt-7 max-w-[700px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
                Condition-specific yoga practice adapted around your health,
                current ability and the evidence relevant to what you are
                addressing.
              </p>

              <div className="mt-9">
                <Link
                  href="/book-appointment"
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
                  src="/images/services/therapeutic-yoga.webp"
                  alt="Therapeutic yoga at Sutra Health"
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
                  Therapeutic yoga
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          OUR PERSPECTIVE
      ========================================================= */}

      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28 lg:py-36">
            <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
              <Label>Our perspective</Label>

              <div>
                <p className="max-w-[820px] font-serif text-[34px] font-medium leading-[1.15] tracking-[-0.04em] text-[#202522] sm:text-[46px] lg:text-[56px]">
                  Therapeutic yoga is not about fitting your body into a
                  standard practice. It is about finding a practice that fits
                  your health and ability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHERE IT MAY HELP
      ========================================================= */}

      <section className="bg-[#F7F5EF]">
        <Container>
          <div className="mx-auto max-w-[1180px] py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
              <div>
                <Label>Where it may help</Label>

                <h2 className="mt-6 max-w-[420px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                  Yoga can have a role across specific areas of health.
                </h2>
              </div>

              <div className="border-t border-[#202522]/10">
                {yogaAreas.map((area, index) => (
                  <Link
                    key={area}
                    href={
                      index === 0
                        ? "/conditions/high-blood-pressure"
                        : index === 1
                          ? "/conditions/metabolic-health"
                          : index === 2
                            ? "/conditions/arthritis-joint-pain"
                            : index === 3
                              ? "/conditions/migraine-headache"
                              : "/what-we-do/therapeutic-yoga"
                    }
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
                  </Link>
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
            <div className="max-w-[800px]">
              <Label light>What we look at</Label>

              <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                A therapeutic practice starts with understanding the person
                behind the condition.
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

                  <p className="max-w-[600px] text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
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

                <h2 className="mt-6 max-w-[430px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                  What research says, condition by condition.
                </h2>

                <p className="mt-6 max-w-[400px] text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
                  The strength of evidence varies by condition. We look at
                  therapeutic yoga in the context of the research available
                  rather than making one broad claim about yoga.
                </p>
              </div>

              <div className="border-t border-[#202522]/10">
                {[
                  {
                    number: "01",
                    title: "High Blood Pressure",
                    text: "The source material reports randomized-trial evidence that yoga added to standard care can reduce blood pressure, with effects varying by the practice and study.",
                    href: "/conditions/high-blood-pressure",
                  },
                  {
                    number: "02",
                    title: "Metabolic Health & Diabetes",
                    text: "The source material reports evidence from an India-wide trial of a yoga-based lifestyle protocol for reducing progression from prediabetes to diabetes.",
                    href: "/conditions/metabolic-health",
                  },
                  {
                    number: "03",
                    title: "Arthritis & Joint Pain",
                    text: "A randomized trial reported in the source material found yoga comparable with standard strengthening exercise for knee osteoarthritis pain, while evidence differs for rheumatoid arthritis.",
                    href: "/conditions/arthritis-joint-pain",
                  },
                  {
                    number: "04",
                    title: "Migraine & Headache",
                    text: "The source material describes a 160-patient New Delhi trial in which yoga added to medical therapy reduced migraine frequency and intensity.",
                    href: "/conditions/migraine-headache",
                  },
                ].map((item) => (
                  <article
                    key={item.number}
                    className="border-b border-[#202522]/10 py-8 sm:py-10"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-serif text-[25px] font-medium tracking-[-0.025em] text-[#202522] sm:text-[28px]">
                        {item.title}
                      </h3>

                      <span className="text-[10px] font-semibold tracking-[0.14em] text-[#65736D]">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 max-w-[700px] text-[15px] leading-7 text-[#4E5B56] sm:text-[16px] sm:leading-8">
                      {item.text}
                    </p>

                    <Link
                      href={item.href}
                      className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#17413D]"
                    >
                      Explore this health area
                      <Arrow />
                    </Link>
                  </article>
                ))}
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
            <div className="max-w-[820px]">
              <Label>How it fits</Label>

              <h2 className="mt-6 font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                Therapeutic yoga can be one part of a wider health plan.
              </h2>

              <p className="mt-6 max-w-[700px] text-[16px] leading-8 text-[#4E5B56] sm:text-[17px]">
                The Sutra Health Method describes how we work: understand,
                identify, personalise, practise, sustain and adapt. Therapeutic
                yoga can form part of that process when it is appropriate to
                your health needs.
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
              <div className="max-w-[720px]">
                <Label>Start with an assessment</Label>

                <h2 className="mt-6 font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[50px]">
                  Understand where your lifestyle stands today.
                </h2>

                <p className="mt-5 max-w-[650px] text-[16px] leading-7 text-[#4E5B56] sm:text-[17px] sm:leading-8">
                  Our 21-question lifestyle assessment helps you reflect on
                  everyday health patterns before deciding what support may be
                  useful. It is a starting point for understanding, not a
                  diagnosis or a substitute for clinical assessment.
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

                <h2 className="mt-6 max-w-[420px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                  Explore therapeutic yoga in context.
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

            <div className="mt-6">
              <h2 className="max-w-[760px] font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
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

                  <span className="mt-5 flex items-center justify-between gap-4 font-serif text-[22px] font-medium text-[#202522] sm:text-[24px]">
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

      <section aria-labelledby="faq-heading" className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-[720px]">
            <Label>Questions</Label>

            <h2
              id="faq-heading"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.04em] text-[#202522] sm:text-[48px]"
            >
              Common questions
            </h2>

            <p className="mt-5 max-w-[650px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8">
              Simple answers to help you understand therapeutic yoga at Sutra
              Health.
            </p>
          </div>

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

                <p className="max-w-[850px] pb-7 pr-8 text-[16px] leading-7 text-[#4E5B56] sm:text-[17px] sm:leading-8">
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

            <div className="mt-6 max-w-[780px]">
              <h2 className="font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[52px] lg:text-[62px]">
                Start with a conversation about your health.
              </h2>

              <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
                Understand what may be useful for you and where therapeutic
                yoga can fit into your wider health plan.
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

      {/* =========================================================
          DISCLAIMER
      ========================================================= */}

      <section className="bg-[#F7F5EF] pb-10">
        <Container>
          <p className="mx-auto max-w-[1180px] text-[10px] leading-5 text-[#65736D]">
            Therapeutic yoga is intended to complement appropriate medical care
            and does not replace diagnosis, prescribed medication or treatment
            from a qualified healthcare professional.
          </p>
        </Container>
      </section>
    </main>
  );
}