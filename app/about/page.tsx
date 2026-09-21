import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import YouTubeFacade from "@/components/shared/YouTubeFacade";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "About Sutra Health | Lifestyle & Integrative Healthcare",
  description:
    "Learn about Sutra Health, its roots in EQUAL Society since 1997, clinical leadership and approach to lifestyle medicine, nutrition, yoga therapy and whole-person wellbeing.",
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
      "Discover the story, clinical leadership and whole-person approach behind Sutra Health and its roots in EQUAL Society.",
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
      "Discover the story, clinical leadership and whole-person approach behind Sutra Health.",
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

const pillars = [
  ["01", "Lifestyle", "Healthy everyday habits that support long-term wellbeing."],
  ["02", "Nutrition", "Practical nutrition and dietary guidance."],
  ["03", "Yogasana", "Yoga-based practices for movement and wellbeing."],
  ["04", "Breath", "Breathing practices supporting calm and awareness."],
  ["05", "Mind", "Mindfulness and positive mental wellbeing."],
];

const faqs = [
  {
    question: "What is EQUAL Society?",
    answer:
      "EQUAL (Effort For Quality of Life) Society is a Faridabad-based not-for-profit organization, registered under the Societies Registration Act, 1860, in Haryana (registration no. 363, dated 28 May 1997). Sutra Health is rooted in this organization's work in health, wellbeing, education and community.",
  },
  {
    question: "How is Sutra Health connected with EQUAL Society?",
    answer:
      "Sutra Health grows from the work and values of EQUAL Society. The broader organization has worked across health advancement, family welfare, education, empowerment, sustainable living and quality of life since 1997.",
  },
  {
    question: "Where is EQUAL Society located?",
    answer:
      "EQUAL Society is based in Sector 46, Faridabad, Haryana. Sutra Health also offers online consultations for people across India.",
  },
  {
    question: "Who founded EQUAL Society?",
    answer:
      "EQUAL Society was founded in 1997 by Dr. Rakesh Sarwal (MBBS, MPH, DrPH), a public health physician and Therapeutic Yoga Consultant.",
  },
  {
    question: "What does integrative healthcare mean at Sutra Health?",
    answer:
      "The approach brings together lifestyle, nutrition, yoga, breath and mind practices with appropriate medical care, rather than treating these as competing systems.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Lifestyle medicine and yoga therapy consultations are available online for people across India, alongside in-person consultations in Faridabad.",
  },
  {
    question: "Is the lifestyle and yoga approach a substitute for medical treatment?",
    answer:
      "No. These approaches are intended to complement appropriate medical care, not replace it. People with existing health conditions should continue working with their treating physician.",
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
  "@type": ["NGO", "MedicalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Sutra Health",
  alternateName: "Life Quality",
  legalName: "Effort For Quality of Life (EQUAL) Society",
  url: `${SITE_URL}/`,
  description:
    "Sutra Health is rooted in EQUAL Society, a Faridabad-based not-for-profit registered in 1997, working in health, wellbeing, education, lifestyle medicine, yoga therapy, nutrition and community wellbeing.",
  foundingDate: "1997-05-28",
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
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Integrative Lifestyle Medicine",
    "Yoga Therapy",
    "Pranayama",
    "Nutrition Counselling",
    "Health and Wellness Education",
  ],
  medicalSpecialty: ["Lifestyle Medicine", "Integrative Medicine"],
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

      {/* HERO
          Deliberately image-free: the page keeps the original editorial
          feeling through typography, a quiet gradient and organic shapes. */}
      <section className="relative isolate overflow-hidden border-b border-[#202522]/10 bg-[#F7F5EF]">
        <div
          aria-hidden="true"
          className="absolute -right-[18%] -top-[18%] -z-10 h-[620px] w-[620px] rounded-[48%_52%_58%_42%/42%_46%_54%_58%] bg-[#E7EDE8] sm:h-[760px] sm:w-[760px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-[10%] -z-10 h-[260px] w-[260px] rounded-full bg-[#C8BDA7]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[18%] top-[38%] -z-10 h-[170px] w-[170px] rounded-full bg-[#91A298]/10 blur-3xl"
        />

        <Container>
          <div className="flex min-h-[650px] items-center justify-center py-24 sm:min-h-[700px] sm:py-28 lg:min-h-[720px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#17413D]">
                About Sutra Health
              </p>

              <h1 className="mx-auto mt-6 max-w-4xl font-serif text-[46px] leading-[1.02] tracking-[-0.045em] text-[#202522] sm:text-[60px] lg:text-[78px]">
                A commitment to
                <br />
                <span className="text-[#17413D]">better quality of life.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.75] text-[#65736D] sm:text-[18px]">
                Sutra Health is rooted in EQUAL Society, registered in 1997 —
                nearly three decades working in health, wellbeing, education
                and community.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/book-appointment"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#17413D] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#12332F]"
                >
                  Book a Consultation
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/doctors"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#202522]/15 bg-white/70 px-7 text-[14px] font-semibold text-[#17413D] transition-colors hover:bg-white"
                >
                  Meet our team
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-5">
                <span className="h-px w-14 bg-[#91A298]/60" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65736D]">
                  Since 1997
                </span>
                <span className="h-px w-14 bg-[#91A298]/60" />
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
                Rooted in a commitment to quality of life.
              </h2>

              <div className="mt-7 space-y-5 text-[16px] leading-[1.78] text-[#65736D] sm:text-[17px]">
                <p>
                  Sutra Health is connected with Effort For Quality of Life
                  (EQUAL) Society, a not-for-profit organization registered
                  under the Societies Registration Act, 1860, in Haryana
                  (registration no. 363, dated 28 May 1997).
                </p>

                <p>
                  EQUAL Society&apos;s work spans health advancement, family
                  welfare, quality of life, education, empowerment and
                  sustainable living — bringing together yoga therapy,
                  nutrition and modern medicine as complementary parts of one
                  approach.
                </p>

                <p>
                  EQUAL Society is also a signatory to the Traditional
                  Complementary Integrative Healthcare (TCIH) Declaration,
                  affirming a commitment to inclusive, evidence-based health
                  practices.
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
              Health, family, community and dignity.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
              EQUAL Society&apos;s work spans the continuum from prevention to
              rehabilitation, and from individual wellbeing to community
              health.
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
              Whole-person care.
              <br />
              Connected thinking.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
              Integrative medicine brings together different systems and
              approaches to care for the complete person rather than looking
              at health in isolation.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl border-y border-[#202522]/10">
            {pillars.map(([number, title, description]) => (
              <div
                key={number}
                className="grid gap-3 border-b border-[#202522]/10 py-6 last:border-b-0 sm:grid-cols-[72px_0.7fr_1.3fr] sm:items-center sm:gap-8"
              >
                <p className="font-serif text-[23px] text-[#91A298]">
                  {number}
                </p>
                <h3 className="font-serif text-[26px] leading-tight text-[#17413D]">
                  {title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#65736D] sm:text-[16px]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#17413D] underline decoration-[#91A298] underline-offset-4"
            >
              Explore our approach
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
                  Dr. Rakesh Sarwal is a public health physician and
                  Therapeutic Yoga Consultant with published research on
                  lifestyle-based approaches to health.
                </p>

                <p>
                  His work emphasizes prevention and helping people take an
                  active role in their health through evidence-informed
                  lifestyle change, alongside appropriate medical care.
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
                A long-term commitment to health.
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
                  Integrative health
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#65736D]">
                  Sutra Health continues this philosophy through lifestyle
                  medicine, yoga therapy, nutrition and integrative
                  healthcare.
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
              Watch
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.07] tracking-[-0.035em] sm:text-[50px]">
              EQUAL Society — Video
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
              Learn more about EQUAL Society and its work in health, wellness
              and community service.
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
                Understanding Sutra Health.
              </h2>

              <p className="mt-6 max-w-sm text-[16px] leading-[1.75] text-[#65736D]">
                Practical answers about EQUAL Society, our approach and how
                care works.
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
                The work extends beyond the consultation room.
              </h2>

              <p className="mt-6 text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
                EQUAL Society&apos;s broader work includes health awareness,
                wellness, education, community empowerment and quality of life.
                Explore the community and volunteer work to learn how to get
                involved.
              </p>
            </div>

            <Link
              href="/volunteer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#17413D] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#12332F]"
            >
              Community &amp; Volunteer
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#17413D] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#91A298]">
              Start your journey
            </p>

            <h2 className="mt-4 font-serif text-[40px] leading-[1.06] tracking-[-0.035em] text-white sm:text-[54px]">
              Better health starts
              <br className="hidden sm:block" />
              with understanding.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/75 sm:text-[17px]">
              Explore our approach or start a conversation about your health
              goals.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[14px] font-semibold text-[#17413D] transition-colors hover:bg-[#F7F5EF]"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/approach"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore our approach
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
