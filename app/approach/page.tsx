import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Understand how Sutra Health combines medical care, lifestyle medicine, nutrition, therapeutic yoga and behaviour support around the person.",
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
      "A practical, personalised approach that brings relevant health support together around the person.",
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
      "We start by understanding what is happening in your health, your current concerns, your routines and what you want to change.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Together, we identify the health and lifestyle factors that may be relevant and decide where attention may be most useful.",
  },
  {
    number: "03",
    title: "Personalise",
    description:
      "Your support is shaped around your health, circumstances, preferences and goals rather than a one-size-fits-all plan.",
  },
  {
    number: "04",
    title: "Practise",
    description:
      "We turn recommendations into practical steps that can fit into everyday life and be adjusted as you learn what works for you.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "The focus is on building habits and routines that can be maintained over time, rather than relying on short-term changes.",
  },
  {
    number: "06",
    title: "Adapt",
    description:
      "Health and circumstances change. Your approach can be reviewed and adapted as your needs, goals and experience change.",
  },
];

const principles = [
  {
    number: "01",
    title: "Integration",
    description:
      "Medical care and lifestyle support can work alongside one another when that is appropriate, helping us look at the wider picture of health.",
  },
  {
    number: "02",
    title: "Motivation",
    description:
      "Understanding why a change matters can make it easier to take practical steps and keep working towards them.",
  },
  {
    number: "03",
    title: "Personalisation",
    description:
      "There is no single routine that works for everyone. Support should reflect the person's health, circumstances and goals.",
  },
];

const practices = [
  ["01", "Nutrition", "Practical food and nutrition guidance shaped around health, preferences and everyday routines."],
  ["02", "Movement", "Support for appropriate physical activity, mobility and movement as part of healthier living."],
  ["03", "Sleep & stress", "Practical attention to sleep, stress and recovery as part of overall wellbeing."],
  ["04", "Behaviour & mind", "Support for behaviour change, motivation and mental wellbeing where relevant to care."],
];

const faqs = [
  {
    question: "What does the Sutra Health approach mean?",
    answer:
      "It means looking at health in context and bringing relevant forms of support together around the person. Depending on your needs, this may include medical care, lifestyle medicine, nutrition, therapeutic yoga and behaviour support.",
  },
  {
    question: "Is Sutra Health a replacement for medical treatment?",
    answer:
      "No. Lifestyle and complementary support should not automatically replace appropriate medical care. The right approach depends on the person's condition, circumstances and clinical needs.",
  },
  {
    question: "Is the approach the same for everyone?",
    answer:
      "No. Support is personalised around health, circumstances, preferences and goals. Recommendations and priorities can also change as your needs change.",
  },
  {
    question: "Can I start with one area of my lifestyle?",
    answer:
      "Yes. The most useful starting point depends on your situation. A consultation or assessment can help identify where it may be practical to begin.",
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
                Healthcare that looks at{" "}
                <span className="text-[#17413D]">the whole picture.</span>
              </h1>

              <p className="mt-7 max-w-[700px] font-sans text-[17px] leading-8 text-[#65736D] sm:text-[18px] sm:leading-9">
                Sutra Health brings relevant medical and lifestyle support
                together around the person. The aim is not to give everyone
                the same plan, but to understand what matters to you and build
                practical next steps.
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
                From understanding your health to adapting what you practise.
              </h2>
            </div>

            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
                <p className="max-w-[520px] font-sans text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
                  Change is rarely a single decision. Our method creates a
                  sequence that starts with understanding and continues through
                  practical action, review and adaptation.
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
                What guides the way we work.
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
                  Practical support for everyday health.
                </h2>
                <p className="mt-5 max-w-[560px] font-sans text-[16px] leading-7 text-[#65736D]">
                  The areas below may be part of your support depending on your
                  health, needs and goals.
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
                Different forms of support can work together.
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
              Understanding the approach.
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

        {/* CTA */}
        <section className="bg-[#17413D] text-white" aria-labelledby="approach-cta-heading">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#91A298]">
                  Start where you are
                </p>
                <h2
                  id="approach-cta-heading"
                  className="mt-5 font-serif text-[38px] leading-[1.04] tracking-[-0.025em] sm:text-[48px] lg:text-[58px]"
                >
                  Let&apos;s understand what your health needs next.
                </h2>
                <p className="mt-5 max-w-2xl font-sans text-[16px] leading-7 text-white/70 sm:text-[17px]">
                  Start with a consultation or explore the free 21-point
                  assessment to identify where you may want to focus.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/book-appointment"
                  className="inline-flex min-h-12 items-center justify-center bg-white px-7 font-sans text-[13px] font-semibold text-[#17413D] transition-colors hover:bg-[#E7EDE8]"
                >
                  Book a Consultation →
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex min-h-12 items-center justify-center border border-white/30 px-7 font-sans text-[13px] font-semibold text-white transition-colors hover:border-white"
                >
                  Take the Assessment →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
