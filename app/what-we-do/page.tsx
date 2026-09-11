import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const baseUrl = "https://lifequality.org.in";
const pageUrl = `${baseUrl}/what-we-do`;

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "A practical medical approach that looks at nutrition, movement, sleep, stress and everyday habits as part of your health.",
    image: "/images/services/lifestyle-medicine.webp",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Personalised food and nutrition guidance shaped around your health needs, preferences and everyday routine.",
    image: "/images/services/nutrition-counselling.webp",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga and movement practices designed around your needs, ability and health goals.",
    image: "/images/services/therapeutic-yoga.webp",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Breath & Mindfulness",
    description:
      "Simple practices that support breathing awareness, attention and working with everyday stress.",
    image: "/images/services/meditation-stress-support.webp",
    href: "/what-we-do/breath-mindfulness",
  },
];

const faqs = [
  {
    question: "What does Sutra Health do?",
    answer:
      "Sutra Health provides integrative lifestyle healthcare through lifestyle medicine, nutrition counselling, therapeutic yoga, and breath and mindfulness practices. These approaches can be combined according to your health needs, goals and everyday life, alongside appropriate medical care.",
  },
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine is an evidence-informed medical approach that uses healthy lifestyle behaviours such as nutritious eating, physical activity, restorative sleep and stress management to help prevent and manage chronic health problems.",
  },
  {
    question: "Do I need to choose a service before booking?",
    answer:
      "No. You do not need to decide which practice is right before your consultation. We can first understand your health concerns and then discuss which combination may be appropriate.",
  },
  {
    question: "How is therapeutic yoga different from a regular yoga class?",
    answer:
      "Therapeutic yoga is adapted to the individual rather than following one general sequence for everyone. Practices may include modified yoga postures, breathing, relaxation and mindfulness where appropriate.",
  },
  {
    question: "Can these practices replace medical treatment?",
    answer:
      "No. Sutra Health's lifestyle and yoga practices are intended to complement appropriate medical care, not replace diagnosis, prescribed medication, emergency care or other treatment from a qualified healthcare professional.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "What We Do | Sutra Health",
  description:
    "Sutra Health offers lifestyle medicine, nutrition counselling, therapeutic yoga, and breath and mindfulness as part of an integrative lifestyle healthcare approach.",
  url: pageUrl,
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "Sutra Health",
    url: baseUrl,
  },
  about: {
    "@type": "MedicalSpecialty",
    name: "Integrative Medicine",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Sutra Health services",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${baseUrl}${service.href}`,
    })),
  },
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

export const metadata: Metadata = {
  title: "What We Do | Lifestyle Medicine, Nutrition & Yoga | Sutra Health",
  description:
    "Explore Sutra Health's integrative healthcare services: lifestyle medicine, nutrition counselling, therapeutic yoga, and breath & mindfulness.",
  keywords: [
    "lifestyle medicine India",
    "lifestyle medicine",
    "integrative healthcare India",
    "integrative medicine",
    "nutrition counselling",
    "nutrition counselling India",
    "therapeutic yoga",
    "therapeutic yoga India",
    "yoga therapy",
    "breath and mindfulness",
    "preventive health",
    "Sutra Health",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "What We Do | Sutra Health",
    description:
      "Lifestyle medicine, nutrition counselling, therapeutic yoga, and breath & mindfulness brought together around your health.",
    url: pageUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

export default function WhatWeDoPage() {
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
  />        <Container>
          <div className="max-w-[920px] py-16 sm:py-20 lg:py-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
              What We Do · Integrative Lifestyle Healthcare
            </p>

            <h1 className="mt-4 max-w-[850px] font-serif text-[44px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[60px] lg:text-[72px]">
              Healthcare that fits{" "}
              <span className="italic text-[#65966F]">real life.</span>
            </h1>

            <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#687A73] sm:text-[17px] sm:leading-8">
              Sutra Health brings together{" "}
              <strong className="font-semibold text-[#365B50]">
                lifestyle medicine, nutrition counselling, therapeutic yoga,
                and breath & mindfulness
              </strong>{" "}
              in one integrative approach to health.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#173F35] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#12352D]"
              >
                Book a Consultation <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/approach"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[13px] font-semibold text-[#173F35] transition hover:bg-[#F0F4ED]"
              >
                Our Approach <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="services-title">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-[720px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
                Our core practices
              </p>

              <h2
                id="services-title"
                className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[50px]"
              >
                Different practices. One coordinated plan.
              </h2>

              <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                We bring together the practices that make sense for your health,
                rather than asking you to fit into a fixed programme.
              </p>
            </div>

            <div className="mt-10 border-t border-[#173F35]/10">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group grid gap-5 border-b border-[#173F35]/10 py-6 sm:grid-cols-[72px_150px_1fr_auto] sm:items-center sm:gap-7 sm:py-7 lg:grid-cols-[82px_190px_1fr_auto] lg:gap-9 lg:py-8"
                >
                  <span className="font-serif text-[22px] text-[#9AAF9F]">
                    {service.number}
                  </span>

                  <div className="relative aspect-[1.45] w-full overflow-hidden rounded-[10px] bg-[#EAF0E7] sm:aspect-square">
                    <Image
                      src={service.image}
                      alt={`${service.title} at Sutra Health`}
                      fill
                      sizes="(max-width: 640px) 100vw, 190px"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="max-w-[650px]">
                    <h3 className="font-serif text-[27px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[30px] lg:text-[34px]">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                      {service.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#4F8060] sm:justify-self-end">
                    Explore
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DIRECT ANSWER */}
      <section className="border-y border-[#173F35]/10 bg-[#F0F4ED]">
        <Container>
          <div className="max-w-[850px] py-16 sm:py-20 lg:py-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
              In brief
            </p>

            <h2 className="mt-3 max-w-[700px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
              What services does Sutra Health offer?
            </h2>

            <p className="mt-5 max-w-[760px] text-[14px] leading-7 text-[#536A62] sm:text-[15px] sm:leading-8">
              Sutra Health offers four core practices:{" "}
              <strong className="font-semibold text-[#365B50]">
                lifestyle medicine, nutrition counselling, therapeutic yoga,
                and breath & mindfulness
              </strong>
              . They can be used individually or combined according to your
              health needs and goals, alongside appropriate medical care.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Lifestyle medicine",
                "Nutrition counselling",
                "Therapeutic yoga",
                "Breath & mindfulness",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[12px] bg-white px-4 py-3.5 text-[13px] font-medium text-[#365B50]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#65966F]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* APPROACH */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
                How we work
              </p>
              <h2 className="mt-3 max-w-[500px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                The services are the tools. The method connects them.
              </h2>
            </div>

            <div className="max-w-[680px]">
              <p className="text-[14px] leading-7 text-[#536A62] sm:text-[15px] sm:leading-8">
                We move from understanding your health and everyday context to
                identifying relevant patterns, personalising practical changes,
                practising them, sustaining progress and adapting over time.
              </p>

              <Link
                href="/approach"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#4F8060] transition hover:text-[#173F35]"
              >
                Explore the Sutra Health Method <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title">
        <Container>
          <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
                Frequently asked questions
              </p>
              <h2
                id="faq-title"
                className="mt-3 max-w-[430px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]"
              >
                A few simple answers.
              </h2>
            </div>

            <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none font-serif text-[18px] leading-6 text-[#173F35] sm:text-[20px]">
                    <span className="flex items-center justify-between gap-5">
                      {faq.question}
                      <span
                        aria-hidden="true"
                        className="shrink-0 font-sans text-[20px] text-[#65966F] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="mt-3 max-w-[680px] pr-8 text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="flex flex-col gap-7 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A9C4B1] sm:text-[11px]">
                Not sure where to start?
              </p>
              <h2 className="mt-3 max-w-[720px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[46px]">
                Start with a conversation about your health.
              </h2>
            </div>

            <Link
              href="/book-appointment"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-[13px] font-semibold text-[#173F35] transition hover:bg-white"
            >
              Book a Consultation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
