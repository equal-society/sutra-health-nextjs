import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import YouTubeFacade from "@/components/shared/YouTubeFacade";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "About Sutra Health | Our Story and EQUAL Society",
  description:
    "Learn about Sutra Health, its connection with EQUAL Society, the organisation’s health and community roots, and the people behind its work.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "About Sutra Health | Lifestyle & Integrative Healthcare",
    description:
      "Learn about Sutra Health, its connection with EQUAL Society and the organisation behind its work.",
    url: `${SITE_URL}/about`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/images/about-us.webp`,
        width: 1200,
        height: 960,
        alt: "Sutra Health — lifestyle and integrative healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sutra Health | Lifestyle & Integrative Healthcare",
    description:
      "Explore the story and organisational roots behind Sutra Health.",
    images: [`${SITE_URL}/images/about-us.webp`],
  },
};

const foundation = [
  {
    number: "01",
    title: "Health advancement",
    description:
      "Promoting preventive, promotive, curative and rehabilitative approaches to health.",
  },
  {
    number: "02",
    title: "Family welfare",
    description:
      "Supporting family health, maternal and child health and community awareness.",
  },
  {
    number: "03",
    title: "Quality of life",
    description:
      "Working toward healthier living, education, nutrition and better opportunities for communities.",
  },
  {
    number: "04",
    title: "Human values",
    description:
      "Promoting dignity, equality, awareness and humanitarian service.",
  },
];

const faqs = [
  {
    question: "What is EQUAL Society?",
    answer:
      "EQUAL (Effort For Quality of Life) Society is described in the current site materials as a Faridabad-based not-for-profit organisation working across health, family welfare, education and quality of life. Its legal and registration details should be confirmed against official records.",
  },
  {
    question: "How is Sutra Health connected with EQUAL Society?",
    answer:
      "Sutra Health is connected with EQUAL Society and its wider focus on health, wellbeing and quality of life. The precise operating and legal relationship should be described consistently across the organisation’s public information.",
  },
  {
    question: "Who is associated with Sutra Health’s clinical leadership?",
    answer:
      "The current site identifies Dr. Rakesh Sarwal (MBBS, MPH, DrPH), a public health physician and Therapeutic Yoga Consultant. Visit the Doctors page for his fuller profile and linked academic information.",
  },
  {
    question: "Are lifestyle and yoga-based practices a replacement for medical treatment?",
    answer:
      "No. Lifestyle and yoga-based practices should complement appropriate medical care, not replace it. Continue care with your treating clinician and discuss complementary practices with them.",
  },
];

const VIDEO_ID = "izgvAGiWhA0";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Sutra Health",
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Sutra Health",
  description:
    "The story, people and principles behind Sutra Health and its roots in EQUAL Society.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: { "@id": `${SITE_URL}/about#breadcrumb` },
  inLanguage: "en-IN",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Sutra Health",
  alternateName: "Life Quality",
  url: `${SITE_URL}/`,
  description:
    "Sutra Health is connected with EQUAL (Effort For Quality of Life) Society and its stated work across health, education, family welfare and quality of life.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Integrative Lifestyle Medicine",
    "Yoga Therapy",
    "Pranayama",
    "Nutrition Counselling",
    "Health and Wellness Education",
  ],
  sameAs: [
    "https://academic.lifequality.org.in/",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC12975079/",
    "https://zenodo.org/records/15814357",
    "https://www.preprints.org/manuscript/202603.0183/",
    "https://www.instagram.com/sutrahealth/",
    "https://www.youtube.com/@sutra-health",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/about#breadcrumb`,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Sutra Health",
      item: `${SITE_URL}/about`,
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

export default function AboutPage() {
  return (
    <main className="bg-[#F7F5EF] text-[#202522]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
<section className="relative isolate min-h-[560px] overflow-hidden bg-[#202522] sm:min-h-[620px] lg:min-h-[680px]">
  {/* Background Image */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/nature.jpg')",
    }}
  />

  {/* Dark Gradient Overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-gradient-to-r from-[#172B29]/90 via-[#172B29]/70 to-[#172B29]/25"
  />

  {/* Bottom Overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#172B29]/35 to-transparent"
  />

  <Container>
    <div className="flex min-h-[560px] items-center py-20 sm:min-h-[620px] sm:py-24 lg:min-h-[680px] lg:py-28">
      <div className="max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D5C9AE] sm:text-xs">
          About Sutra Health
        </p>

        <h1
          className="
            mt-6
            max-w-[900px]
            font-serif
            text-[44px]
            font-medium
            leading-[1.02]
            tracking-[-0.04em]
            text-white
            sm:text-[58px]
            md:text-[68px]
            lg:text-[78px]
            xl:text-[84px]
          "
        >
          A story shaped by
          <br />
          <span className="text-[#D5C9AE]">
            community and quality of life.
          </span>
        </h1>

        <p
          className="
            mt-7
            max-w-[680px]
            text-[16px]
            leading-8
            text-white/85
            sm:mt-8
            sm:text-[18px]
            sm:leading-9
          "
        >
          Sutra Health is connected with EQUAL (Effort For Quality of Life)
          Society, a Faridabad-based organisation whose work is described
          in the supplied site materials as beginning in 1997. This page
          introduces the organisation behind Sutra Health, its roots and
          the people associated with its health work.
        </p>

        <div className="mt-8 flex items-start gap-4">
          <span
            aria-hidden="true"
            className="mt-2 h-10 w-px shrink-0 bg-[#D5C9AE]"
          />

          <p className="max-w-[560px] text-[14px] leading-7 text-white/75 sm:text-[15px]">
            Explore the organisation’s background and the people connected
            with its health work.
          </p>
        </div>
      </div>
    </div>
  </Container>
</section>

      {/* STORY */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="relative overflow-hidden rounded-[28px] border border-[#202522]/10 bg-[#E7EDE8]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/about-us.webp"
                  alt="Yoga and lifestyle medicine practice at Sutra Health"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
                Our story
              </p>

              <h2 className="mt-4 font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[50px]">
                A community-rooted foundation.
              </h2>

              <div className="mt-7 space-y-5 text-[16px] leading-[1.78] text-[#65736D] sm:text-[17px]">
                <p>
                  Sutra Health is connected with Effort For Quality of Life
                  (EQUAL) Society. The organisation’s existing public materials
                  record its registration in Haryana in 1997. The registration
                  details should be checked against the official record before
                  this page is published.
                </p>

                <p>
                  Its stated areas of work include health advancement, family welfare, education, empowerment, sustainable living and quality of life. Sutra Health is one expression of that wider commitment.
                </p>

                <p>
                  The current site also refers to EQUAL Society’s association with the Traditional Complementary Integrative Healthcare (TCIH) Declaration. Retain this statement only with a verified authoritative reference and approval.
                </p>
              </div>

              <Link
                href="/doctors"
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#17413D] underline decoration-[#91A298] underline-offset-4"
              >
                Meet our clinical team
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FOUNDATION */}
      <section className="border-y border-[#202522]/10 bg-[#E7EDE8] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
              Our foundation
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[50px]">
              Health, family and quality of life.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
              The organisation’s stated themes span health advancement, family welfare, education and community-focused work.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {foundation.map((item) => (
              <article
                key={item.number}
                className="rounded-[22px] border border-[#202522]/10 bg-white/75 p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-serif text-[28px] leading-none text-[#91A298]">
                  {item.number}
                </p>
                <h3 className="mt-7 font-serif text-[23px] leading-tight text-[#17413D]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#65736D]">
                  {item.description}
                </p>
                <div className="mt-6 h-px w-8 bg-[#91A298]" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* APPROACH */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
              Our approach
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[50px]">
              A connected view of health.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
              The organisation’s background informs Sutra Health’s work. The care philosophy and its stages are explained separately on the Approach page.
            </p>
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#17413D] underline decoration-[#91A298] underline-offset-4"
            >
              Read about our care approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* CLINICAL LEADERSHIP */}
      <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-[28px] border border-[#202522]/10 bg-white">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/doctor.webp"
                  alt="Dr. Rakesh Sarwal"
                  fill
                  sizes="390px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
                Clinical leadership
              </p>

              <h2 className="mt-4 font-serif text-[40px] leading-[1.06] tracking-[-0.035em] sm:text-[52px]">
                Dr. Rakesh Sarwal
              </h2>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#65736D] sm:text-[12px]">
                MBBS, MPH, DrPH · Therapeutic Yoga Consultant
              </p>

              <div className="mt-7 space-y-5 text-[16px] leading-[1.78] text-[#65736D] sm:text-[17px]">
                <p>
                  The current site identifies Dr. Rakesh Sarwal as a public health physician and Therapeutic Yoga Consultant.
                </p>

                <p>
                  His professional background and academic work are available through his profile and publications.
                </p>
              </div>

              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#17413D] underline decoration-[#91A298] underline-offset-4"
              >
                View academic profile and publications
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* JOURNEY */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
                Our journey
              </p>

              <h2 className="mt-4 font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[50px]">
                From organisational roots to Sutra Health.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <article className="rounded-[22px] border border-[#202522]/10 bg-[#F7F5EF] p-7 sm:p-8">
                <p className="font-serif text-[42px] leading-none text-[#91A298]">
                  1997
                </p>
                <h3 className="mt-5 font-serif text-[24px] leading-tight text-[#17413D]">
                  EQUAL Society established
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#65736D]">
                  Registered under the Societies Registration Act, 1860, in
                  Haryana (registration no. 363), with a focus on improving
                  quality of life.
                </p>
              </article>

              <article className="rounded-[22px] border border-[#202522]/10 bg-[#E7EDE8] p-7 sm:p-8">
                <p className="font-serif text-[42px] leading-none text-[#91A298]">
                  Today
                </p>
                <h3 className="mt-5 font-serif text-[24px] leading-tight text-[#17413D]">
                  Sutra Health today
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#65736D]">
                  Sutra Health is connected with this organisational background. See Our Approach for how care is structured and What We Do for current service information.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* VIDEO */}
      <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
              EQUAL Society
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[50px]">
              A closer look at EQUAL Society
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
              This video provides further context about the organisation. Keep the embed only while it remains current, accessible and approved for public use.
            </p>
          </div>

          <div className="mx-auto mt-11 max-w-5xl overflow-hidden rounded-[28px] border border-[#202522]/10 bg-white shadow-[0_18px_45px_rgba(32,37,34,0.06)]">
            <div className="relative aspect-video w-full">
              <YouTubeFacade videoId={VIDEO_ID} title="EQUAL Society — health, wellness and community work" />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
                Common questions
              </p>

              <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[48px]">
                About the organisation.
              </h2>

              <p className="mt-6 max-w-sm text-[16px] leading-[1.75] text-[#65736D]">
                A few focused answers about the organisation and its relationship with Sutra Health.
              </p>
            </div>

            <div className="border-t border-[#202522]/10">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-[#202522]/10"
                >
                  <summary className="flex min-h-20 cursor-pointer list-none items-center gap-5 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="flex-1 text-[16px] font-semibold leading-7 text-[#202522] sm:text-[17px]">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#202522]/15 text-[20px] text-[#17413D] transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="pb-7 pr-12">
                    <p className="max-w-2xl text-[16px] leading-[1.75] text-[#65736D]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* COMMUNITY */}
      <section className="bg-[#E7EDE8] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17413D]">
                Community
              </p>

              <h2 className="mt-4 font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[50px]">
                Community work remains part of the wider story.
              </h2>

              <p className="mt-6 text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
                EQUAL Society’s stated wider work includes health awareness, education and community initiatives. Visit the community page for current participation information.
              </p>
            </div>

            <Link
              href="/community"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#17413D] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#12332F]"
            >
              Explore community work
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

    
    </main>
  );
}
