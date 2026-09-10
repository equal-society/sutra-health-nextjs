import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Our Approach | The Sutra Health Method",
  description:
    "Learn how the Sutra Health Method brings lifestyle medicine, nutrition, therapeutic yoga, and breath & mindfulness together through a personalised, practical and sustainable six-stage approach.",
  alternates: {
    canonical: "https://lifequality.org.in/approach",
  },
  openGraph: {
    title: "Our Approach | The Sutra Health Method",
    description:
      "Understand the six-stage Sutra Health Method and how its core practices work together around your health, goals and everyday life.",
    url: "https://lifequality.org.in/approach",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | The Sutra Health Method",
    description:
      "A personalised, practical and sustainable six-stage approach to health at Sutra Health.",
  },
};

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "See the whole picture — your health concerns, everyday routines, habits, priorities and goals.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Recognise the patterns and practical areas that may be most useful to work on.",
  },
  {
    number: "03",
    title: "Personalise",
    description:
      "Create a plan around your needs, preferences, physical ability, responsibilities and real life.",
  },
  {
    number: "04",
    title: "Practise",
    description:
      "Turn understanding into manageable actions that can be practised in everyday life.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "Build habits that are realistic enough to continue rather than relying on short-term routines.",
  },
  {
    number: "06",
    title: "Adapt",
    description:
      "Review what is working, learn from experience and adjust the plan as circumstances change.",
  },
];

const practices = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Look at everyday patterns such as nutrition, movement, sleep, stress, habits and recovery.",
    href: "/what-we-do/lifestyle",
    linkLabel: "Explore Lifestyle Medicine",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Build practical food habits around individual needs, preferences, routines and health goals.",
    href: "/what-we-do/nutrition",
    linkLabel: "Explore Nutrition Counselling",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Use adapted yoga and movement practices as part of a broader, health-focused plan.",
    href: "/what-we-do/therapeutic-yoga",
    linkLabel: "Explore Therapeutic Yoga",
  },
  {
    number: "04",
    title: "Breath & Mindfulness",
    description:
      "Develop practical breathing, awareness and mindfulness practices that can support stress and wellbeing.",
    href: "/what-we-do/breath-mindfulness",
    linkLabel: "Explore Breath & Mindfulness",
  },
];

const principles = [
  {
    number: "01",
    title: "Whole person",
    text:
      "Health is considered in the context of the person, their everyday life and their goals.",
  },
  {
    number: "02",
    title: "Personalised",
    text:
      "There is no single routine or plan that fits everyone.",
  },
  {
    number: "03",
    title: "Practical",
    text:
      "The focus is on changes that can work within real routines and responsibilities.",
  },
  {
    number: "04",
    title: "Sustainable",
    text:
      "Progress is built through habits that can be practised and adapted over time.",
  },
];

const approachFAQs = [
  {
    question: "What is the Sutra Health Method?",
    answer:
      "The Sutra Health Method is a six-stage, whole-person pathway: Understand, Identify, Personalise, Practise, Sustain and Adapt. It brings Sutra Health's core practices together into one coordinated approach to sustainable health change.",
  },
  {
    question: "What are the six stages of the Sutra Health Method?",
    answer:
      "The six stages are Understand, Identify, Personalise, Practise, Sustain and Adapt. The process starts by understanding the whole picture, identifies useful areas to work on, creates a personalised plan, turns it into practice, builds sustainable habits and adapts the plan as circumstances change.",
  },
  {
    question: "Is the Sutra Health approach personalised?",
    answer:
      "Yes. The approach is designed around an individual's health concerns, goals, daily routine, physical ability, preferences and responsibilities rather than applying one generic routine to everyone.",
  },
  {
    question: "What practices are part of the Sutra Health approach?",
    answer:
      "The four core practices are lifestyle medicine, nutrition counselling, therapeutic yoga, and breath & mindfulness. They can be brought together according to the person's needs rather than treated as disconnected services.",
  },
  {
    question: "What is the 21-Point Lifestyle Assessment?",
    answer:
      "The 21-Point Lifestyle Assessment is a structured 21-question review across areas including sleep, food, movement, digestion and stress. It is intended as a lifestyle guidance tool and is not a clinical diagnostic test.",
  },
  {
    question: "Does the Sutra Health Method replace medical treatment?",
    answer:
      "No. The Sutra Health Method is designed to complement appropriate medical care, not replace it. People with existing health conditions should continue working with their treating physician, particularly regarding diagnosis and medication.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "The Sutra Health Method | Sutra Health",
  description:
    "Learn how the Sutra Health Method brings lifestyle medicine, nutrition, therapeutic yoga, breath and mindfulness together through a personalised, practical and sustainable pathway.",
  url: "https://lifequality.org.in/approach",
  isPartOf: {
    "@type": "WebSite",
    name: "Sutra Health",
    url: "https://lifequality.org.in/",
  },
  about: {
    "@type": "MedicalSpecialty",
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
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Sutra Health Method",
  description:
    "The six-stage process used by Sutra Health to support personalised and sustainable health change.",
  step: stages.map((stage) => ({
    "@type": "HowToStep",
    position: Number(stage.number),
    name: stage.title,
    text: stage.description,
  })),
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "21-Point Lifestyle Assessment",
  description:
    "A structured lifestyle-review tool used by Sutra Health to identify practical, individualised areas for health improvement. It is a lifestyle guidance tool, not a substitute for clinical diagnosis.",
  inDefinedTermSet: "https://lifequality.org.in/approach",
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
      name: "Our Approach",
      item: "https://lifequality.org.in/approach",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: approachFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ApproachPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
          <div className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Our Approach
              </p>

              <h1 className="mt-4 max-w-[780px] font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[60px] lg:text-[76px]">
                A different way
                <br />
                to approach{" "}
                <span className="italic text-[#65966F]">health.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                The Sutra Health Method brings together lifestyle medicine,
                nutrition counselling, therapeutic yoga, breath & mindfulness,
                behaviour change and health education through a practical,
                personalised and sustainable process.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#method"
                  className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
                >
                  Explore the Method
                  <span aria-hidden="true">↓</span>
                </a>

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-[#F0F4ED]"
                >
                  Book a Consultation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="border-l border-[#173F35]/10 pl-6 lg:mb-2 lg:pl-8">
              <p className="font-serif text-[30px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[36px]">
                Health changes when everyday life changes.
              </p>
              <p className="mt-5 text-[13px] leading-6 text-[#71817A] sm:text-[14px] sm:leading-7">
                The aim is not another short-term routine. It is to understand
                what matters, practise useful changes and keep adapting as life
                changes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* DIRECT ANSWER */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                In brief
              </p>
              <h2 className="mt-3 max-w-[430px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                What is the Sutra Health{" "}
                <span className="italic text-[#65966F]">Method?</span>
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p className="text-[15px] leading-8 text-[#687A73] sm:text-[17px]">
                The Sutra Health Method is a six-stage whole-person approach:
                <strong className="font-semibold text-[#173F35]">
                  {" "}
                  Understand, Identify, Personalise, Practise, Sustain and
                  Adapt.
                </strong>{" "}
                It connects the right practices around the person rather than
                treating lifestyle, nutrition, movement and wellbeing as
                separate pieces.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The process can be revisited as health goals, circumstances and
                priorities change. It is designed to complement appropriate
                medical care, not replace it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SIX STAGES */}
      <section id="method" className="scroll-mt-24 bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[700px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The six stages
              </p>
              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                From understanding to{" "}
                <span className="italic text-[#65966F]">
                  lasting practice.
                </span>
              </h2>
              <p className="mt-5 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The method gives health change a clear sequence without forcing
                every person into the same plan.
              </p>
            </div>

            <div className="mt-10 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="grid gap-3 py-7 sm:grid-cols-[90px_0.8fr_1.2fr] sm:items-center sm:py-8"
                >
                  <p className="font-serif text-[28px] tracking-[-0.025em] text-[#65966F]">
                    {stage.number}
                  </p>
                  <h3 className="font-serif text-[27px] tracking-[-0.025em] text-[#173F35] sm:text-[32px]">
                    {stage.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    {stage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HOW THE PRACTICES CONNECT */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  How the practices connect
                </p>
                <h2 className="mt-3 max-w-[440px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                  Different practices,{" "}
                  <span className="italic text-[#65966F]">
                    one coordinated plan.
                  </span>
                </h2>
                <p className="mt-5 max-w-[420px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                  The practices are the tools. The Sutra Health Method is the
                  process that helps decide how they fit together for the
                  individual.
                </p>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {practices.map((practice) => (
                  <article
                    key={practice.number}
                    className="grid gap-5 py-8 sm:grid-cols-[70px_1fr] sm:gap-7 sm:py-9"
                  >
                    <p className="font-serif text-[25px] text-[#65966F]">
                      {practice.number}
                    </p>

                    <div>
                      <h3 className="font-serif text-[29px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[34px]">
                        {practice.title}
                      </h3>
                      <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                        {practice.description}
                      </p>
                      <Link
                        href={practice.href}
                        className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#173F35] hover:text-[#65966F]"
                      >
                        {practice.linkLabel}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                How we work
              </p>
              <h2 className="mt-3 max-w-[430px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Personalised enough for real{" "}
                <span className="italic text-[#65966F]">life.</span>
              </h2>
            </div>

            <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-3 py-6 sm:grid-cols-[70px_1fr_1.5fr] sm:items-center sm:py-7"
                >
                  <p className="font-serif text-[23px] text-[#65966F]">
                    {principle.number}
                  </p>
                  <h3 className="font-serif text-[25px] tracking-[-0.02em] text-[#173F35]">
                    {principle.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#687A73]">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 21-POINT ASSESSMENT */}
      <section className="border-t border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Start with understanding
              </p>
              <h2 className="mt-3 max-w-[680px] font-serif text-[38px] leading-[1.03] tracking-[-0.035em] text-[#123F35] sm:text-[52px]">
                See where your everyday health patterns{" "}
                <span className="italic text-[#65966F]">stand today.</span>
              </h2>
              <p className="mt-5 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The 21-Point Lifestyle Assessment is a 21-question review
                across sleep, food, movement, digestion and stress. It is a
                starting point for identifying where to focus, not a clinical
                diagnosis.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <Link
                href="/score"
                className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-7 py-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
              >
                Explore the 21-Point Assessment
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ faqs={approachFAQs} />

      {/* FINAL CTA */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="mx-auto max-w-[760px] py-14 text-center sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8]">
              Explore Sutra Health
            </p>

            <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[50px]">
              Understand your health. Build the habits.{" "}
              <span className="italic text-[#B7CCB8]">
                Sustain the change.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#C5D2CC] sm:text-[15px] sm:leading-8">
              Explore the practices that may fit your needs, take the
              21-Point Lifestyle Assessment, or speak with Sutra Health about
              the right next step.
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
