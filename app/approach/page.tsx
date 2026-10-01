import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Explore the six-stage Sutra Health Method: understand, identify, personalise, practise, sustain and adapt.",
  alternates: {
    canonical: `${SITE_URL}/approach`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Approach | Sutra Health",
    description:
      "The six-stage Sutra Health Method explains how care priorities are explored, acted on, reviewed and adjusted.",
    url: `${SITE_URL}/approach`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "We listen to your main concern, relevant health history and what you hope to address. This establishes the starting point for the conversation.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "We consider which issues, barriers and priorities need attention first, distinguishing immediate questions from areas that can be explored over time.",
  },
  {
    number: "03",
    title: "Personalise",
    description:
      "The next steps are selected in light of the priorities identified, including what is appropriate, feasible and within the scope of the care being discussed.",
  },
  {
    number: "04",
    title: "Practise",
    description:
      "You begin with agreed actions. The emphasis is on knowing what to try, how to approach it and what to notice as you put it into practice.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "As actions become familiar, attention shifts to consistency, obstacles and the conditions that help a routine continue beyond the initial effort.",
  },
  {
    number: "06",
    title: "Adapt",
    description:
      "Review what has been useful, what has not been workable and whether priorities have changed. Adjust the next steps accordingly.",
  },
];

const principles = [
  {
    number: "01",
    title: "Integration",
    description:
      "Clinical decisions remain grounded in appropriate medical care. Lifestyle or complementary practices may be considered alongside it when suitable; they do not replace indicated treatment.",
  },
  {
    number: "02",
    title: "Motivation",
    description:
      "A person’s reasons for change, readiness and concerns are part of planning. The discussion should support informed participation rather than assume motivation is constant.",
  },
  {
    number: "03",
    title: "Personalisation",
    description:
      "The method is a guide for making decisions, not a fixed protocol. The sequence and pace can differ according to the person and the issue being addressed.",
  },
];

const practices = [
  ["01", "Clinical context", "Relevant symptoms, history, existing care and clinical considerations inform what can appropriately be explored."],
  ["02", "Priority setting", "The discussion identifies the issue to address first and separates immediate needs from longer-term goals."],
  ["03", "Action planning", "Agreed actions are made specific enough to try, observe and discuss at review."],
  ["04", "Review and adjustment", "Experience, progress and changing circumstances inform whether to continue, modify or reconsider the plan."],
];

const faqs = [
  {
    question: "What does the Sutra Health approach mean?",
    answer:
      "The Sutra Health Method is a six-stage way of organising the work: understand the situation, identify priorities, personalise next steps, practise them, support continuity and adapt after review. The stages guide the process; they are not a promise of a particular outcome.",
  },
  {
    question: "Is Sutra Health a replacement for medical treatment?",
    answer:
      "No. The method is not a substitute for diagnosis, prescribed treatment or medical follow-up. Do not stop or change treatment without discussing it with the treating clinician.",
  },
  {
    question: "Is the approach the same for everyone?",
    answer:
      "No. The six stages provide a shared structure, but the priorities, pace and actions depend on the situation. Some steps may need revisiting as new information becomes available.",
  },
  {
    question: "Can I start with one area of my lifestyle?",
    answer:
      "Yes. A consultation can help clarify the concern and decide what to address first. The 21-question lifestyle assessment is an optional reflection tool, not a diagnostic test.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Sutra Health",
  url: SITE_URL,
  founder: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export default function ApproachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              organizationSchema,
              {
                "@type": "WebPage",
                "@id": `${SITE_URL}/approach#webpage`,
                url: `${SITE_URL}/approach`,
                name: "Our Approach | Sutra Health",
                description: metadata.description,
                isPartOf: { "@id": `${SITE_URL}/#website` },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Our Approach",
                    item: `${SITE_URL}/approach`,
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
          }),
        }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">
        {/* HERO */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]" aria-labelledby="approach-title">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="max-w-5xl">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
                Our approach
              </p>

              <h1
                id="approach-title"
                className="mt-5 max-w-[1000px] font-serif text-[46px] font-medium leading-[0.98] tracking-[-0.04em] text-[#202522] sm:text-[58px] md:text-[66px] lg:text-[76px] xl:text-[82px]"
              >
                A six-stage method for{" "}
                <span className="text-[#17413D]">turning health priorities into action.</span>
              </h1>

              <p className="mt-7 max-w-[700px] font-sans text-[17px] leading-8 text-[#65736D] sm:text-[18px] sm:leading-9">
                The Sutra Health Method describes how a health conversation
                moves from understanding the situation to choosing priorities,
                putting agreed actions into practice and reviewing what should
                happen next.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                <Link
                  href="/book-appointment"
                  className="inline-flex min-h-12 items-center bg-[#17413D] px-7 font-sans text-[13px] font-semibold text-white transition-colors hover:bg-[#12332F]"
                >
                  Book a Consultation →
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex min-h-12 items-center border border-[#202522]/15 px-7 font-sans text-[13px] font-semibold text-[#202522] transition-colors hover:border-[#17413D] hover:text-[#17413D]"
                >
                  Take the 21-Point Assessment →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="method-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
                01 · The Sutra Health method
              </p>
              <h2
                id="method-heading"
                className="mt-5 max-w-[1050px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px]"
              >
                Six stages. A clear sequence for making and revisiting decisions.
              </h2>
            </div>

            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
                <p className="max-w-[520px] font-sans text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
                  The stages help organise the work without treating health
                  change as a straight line. Review may lead back to an earlier
                  question, a different priority or a revised action.
                </p>
              </div>

              <div className="lg:pl-12 xl:pl-16">
                {stages.map((stage) => (
                  <div
                    key={stage.number}
                    className="grid grid-cols-[38px_1fr] gap-4 border-b border-[#202522]/10 py-6 sm:grid-cols-[50px_1fr] sm:gap-5"
                  >
                    <span className="pt-1 font-sans text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                      {stage.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-[23px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[27px]">
                        {stage.title}
                      </h3>
                      <p className="mt-2 max-w-[680px] font-sans text-[13px] leading-6 text-[#65736D] sm:text-[14px] sm:leading-7">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]" aria-labelledby="principles-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="max-w-[900px]">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
                02 · Three principles
              </p>
              <h2
                id="principles-heading"
                className="mt-5 font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[44px] md:text-[50px] lg:text-[54px]"
              >
                Principles for applying the method responsibly.
              </h2>
            </div>

            <div className="mt-10 grid border-t border-[#202522]/10 md:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="border-b border-[#202522]/10 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:py-9"
                >
                  <span className="font-sans text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                    {principle.number}
                  </span>
                  <h3 className="mt-4 font-serif text-[25px] font-medium tracking-[-0.02em] sm:text-[28px]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 font-sans text-[14px] leading-7 text-[#65736D]">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRACTICES */}
        <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="practices-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
                  03 · Areas of practice
                </p>
                <h2
                  id="practices-heading"
                  className="mt-5 max-w-[620px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[44px] md:text-[50px]"
                >
                  The work the method helps organise.
                </h2>
                <p className="mt-5 max-w-[560px] font-sans text-[16px] leading-7 text-[#65736D]">
                  These are decision points within the process, rather than
                  another list of services. They help clarify what is considered
                  before and after an action is agreed.
                </p>
              </div>

              <div className="mt-9 grid sm:grid-cols-2 lg:mt-0">
                {practices.map(([number, title, description]) => (
                  <div
                    key={number}
                    className="border-b border-[#202522]/10 py-6 sm:px-6 sm:first:pl-0 sm:nth-[3]:pl-0"
                  >
                    <span className="font-sans text-[10px] font-semibold tracking-[0.15em] text-[#91A298]">
                      {number}
                    </span>
                    <h3 className="mt-3 font-serif text-[23px] font-medium tracking-[-0.02em] sm:text-[25px]">
                      {title}
                    </h3>
                    <p className="mt-2 font-sans text-[13px] leading-6 text-[#65736D] sm:text-[14px] sm:leading-7">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]" aria-labelledby="support-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#202522]/10 pb-8">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
                04 · Support at Sutra Health
              </p>
              <h2
                id="support-heading"
                className="mt-5 max-w-[950px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[44px] md:text-[50px] lg:text-[54px]"
              >
                Where the method may connect with care and practice.
              </h2>
            </div>

            <div className="mt-8 grid gap-x-10 md:grid-cols-2">
              {[
                ["Lifestyle Medicine", "/what-we-do/lifestyle"],
                ["Nutrition", "/what-we-do/nutrition"],
                ["Therapeutic Yoga", "/what-we-do/therapeutic-yoga"],
                ["Behaviour, Stress & Mind", "/what-we-do/behaviour-stress-mind"],
              ].map(([title, href], index) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-center justify-between border-b border-[#202522]/10 py-5"
                >
                  <span className="flex items-center gap-5">
                    <span className="font-sans text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[22px] font-medium tracking-[-0.02em] transition-colors group-hover:text-[#17413D] sm:text-[25px]">
                      {title}
                    </span>
                  </span>
                  <span className="text-[#17413D]" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
              05 · Common questions
            </p>
            <h2
              id="faq-heading"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[44px] md:text-[50px]"
            >
              Questions about the method.
            </h2>

            <div className="mt-8 border-t border-[#202522]/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#202522]/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[19px] font-medium text-[#202522] marker:hidden sm:text-[22px]">
                    {faq.question}
                    <span className="shrink-0 font-sans text-xl font-normal text-[#17413D] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-6 pr-10 font-sans text-[14px] leading-7 text-[#65736D] sm:text-[15px]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

       
      </main>
    </>
  );
}
