import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

const siteUrl = "https://lifequality.org.in";

const brandByline =
  "Medical guidance and practical lifestyle support for everyday health.";

export const metadata: Metadata = {
  title: "Sutra Health | Medical and Lifestyle Care",
  description:
    "Explore medical consultation, nutrition counselling, Therapeutic Yoga and lifestyle support at Sutra Health.",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sutra Health | Medical and Lifestyle Care",
    description: brandByline,
    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/images/hero-desktop.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutra Health | Medical and Lifestyle Care",
    description: brandByline,
    images: [`${siteUrl}/images/hero-desktop.webp`],
  },
};

const services = [
  { label: "Physician Consultation", href: "/services/physician-consultation" },
  { label: "Lifestyle Medicine", href: "/services/lifestyle"},
  { label: "Nutrition Counselling", href: "/services/nutrition"},
  { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga"},
  { label: "Stress and Behaviour Support", href: "/services/behaviour-stress-mind"},
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-[12px] ${light ? "text-white/75" : "text-[#65736D]"}`}>
      {children}
    </p>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-10 items-center gap-2 text-[15px] font-semibold text-[#17413D] underline decoration-[#17413D]/35 underline-offset-4 transition-colors hover:decoration-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function Hero() {
  return (
     <section
      aria-labelledby="home-title"
      className="relative isolate overflow-hidden bg-[var(--color-text-primary)]"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
         
  <div className="absolute inset-0 bg-[#101C19]/45" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/20" />
</div>

      <Container>
        <div className="relative z-10 flex min-h-[580px] flex-col justify-center py-16 sm:min-h-[640px] lg:min-h-[700px]">
          <div className="max-w-[780px]">
            <Eyebrow light>
            Sutra Health</Eyebrow>

            <h1 id="home-title" className="mt-5 max-w-[760px] font-serif text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[62px] lg:text-[76px]">
              Your lifestyle shapes your health, longevity and happiness.
            </h1>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-white/85 sm:text-[18px] sm:leading-8">
              Your health is influenced by everyday habits such as food, physical
              activity, sleep and stress. We help you understand these factors and
              make practical lifestyle changes alongside appropriate medical care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/assessment" className="inline-flex min-h-[52px] items-center justify-center bg-white px-7 text-center text-base font-semibold text-[#17413D] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Assist with Your Lifestyle Score
                <ArrowUpRight size={17} className="ml-2" />
              </Link>

              <Link href="/approach" className="inline-flex min-h-[52px] items-center justify-center border border-white/75 px-7 text-center text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Explore Our Approach
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </div>


          </div>
        </div>
      </Container>
    </section>
  );
}

function EverydayHealth() {
  const services = [
    {
      title: "Lifestyle Medicine",
      href: "/services/lifestyle",
    },
    {
      title: "Physician Consultation",
      href: "/services/physician-consultation",
    },
    {
      title: "Therapeutic Yoga",
      href: "/services/therapeutic-yoga",
    },
    {
      title: "Nutrition Counselling",
      href: "/services/nutrition",
    },
    {
      title: "Behaviour & Stress Management",
      href: "/services/behaviour-stress-mind",
    },
  ];

  return (
    <section aria-labelledby="everyday-title" className="bg-white">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Lifestyle &amp; Health</Eyebrow>

          <h2
            id="everyday-title"
            className="mt-3 max-w-[850px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[56px]"
          >
            Medical care and lifestyle support, working together.
          </h2>

          <p className="mt-5 max-w-[720px] text-base leading-8 text-[#65736D] sm:text-[18px]">
            We combine medical guidance, nutrition counselling,
            Therapeutic Yoga and practical lifestyle changes
            to support your health and wellbeing.
          </p>

          <div className="mt-9 grid gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title}>
                <TextLink href={service.href}>
                  {service.title}
                </TextLink>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ConditionsPreview() {
  const conditions = getAllConditions();

  return (
    <section aria-labelledby="conditions-title" className="bg-[#F7F5EF]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Health concerns</Eyebrow>

          <h2 id="conditions-title" className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]">
            Explore the health concerns we support.
          </h2>

          {/* <p className="mt-4 max-w-[650px] text-base leading-7 text-[#65736D] sm:text-[17px]">
            Read about common health concerns and the medical and lifestyle
            approaches that may form part of care. Each topic includes
            information to help you discuss your options with a clinician.
          </p> */}

          <div className="mt-7 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group flex min-h-[54px] items-center justify-between gap-3 border-b border-[#202522]/15 py-3 text-[16px] font-medium text-[#202522] transition-colors hover:text-[#17413D] sm:text-[17px]"
              >
                <span>{condition.title}</span>
                <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <TextLink href="/conditions">Explore All Health Concerns</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}


function AppointmentCTA() {
  return (
    <section aria-labelledby="appointment-title" className="bg-[#17413D]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[720px]">
            <Eyebrow light>Start a conversation</Eyebrow>
            <h2 id="appointment-title" className="mt-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[54px]">
              Let&rsquo;s talk about your next step.
            </h2>
            <p className="mt-5 max-w-[600px] text-base leading-7 text-white/85 sm:text-[18px]">
              Tell us what support you are looking for. Our team can explain
              the available consultation options and how to begin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="inline-flex min-h-[52px] items-center justify-center bg-white px-7 text-base font-semibold text-[#17413D] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Book a Consultation
                <ArrowUpRight size={17} className="ml-2" />
              </Link>
              <a href="tel:+919013103676" className="inline-flex min-h-[52px] items-center justify-center border border-white/60 px-7 text-base font-medium text-white transition-colors hover:bg-white/10">
                Call +91 90131 03676
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PatientStories() {
  return (
    <section
      id="patient-stories"
      aria-labelledby="patient-stories-title"
      className="bg-[#FAF8F2]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            {/* Section introduction */}
            <div>
              <Eyebrow>Patient experiences</Eyebrow>

              <h2
                id="patient-stories-title"
                className="mt-3 max-w-[520px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]"
              >
                Every journey has a story.
              </h2>

              <p className="mt-4 max-w-[420px] text-base leading-7 text-[#65736D]">
                Personal experiences from people who have been part of
                the Sutra Health community.
              </p>

              <div className="mt-6">
                <TextLink href="/patient-stories">
                  Explore Patient Stories
                </TextLink>
              </div>
            </div>

            {/* Featured testimonial */}
            <article className="relative border border-[#202522]/10 bg-white p-7 sm:p-10 lg:p-12">
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none text-[#A7B8AE]"
              >
                “
              </span>

              <blockquote className="mt-3 max-w-[620px] font-serif text-xl leading-relaxed tracking-[-0.015em] text-[#202522] sm:text-[26px] sm:leading-[1.55]">
                Very good service at Sutra Health, full care given to
                patients — bahut accha laga. Thank you Sutra Health!
              </blockquote>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#202522]/10 pt-5">
                <div>
                  <p className="text-sm font-semibold text-[#202522]">
                    Sumit Kashyap
                  </p>
                  <p className="mt-1 text-xs text-[#65736D]">
                    Patient experience
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-sm tracking-[0.2em] text-[#A7B8AE]"
                >
                  01 / 08
                </span>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HomeFAQs() {
  return (
    <section
      aria-labelledby="home-faq-title"
      className="bg-[#FAF8F2]"
    >
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="mb-9 flex items-center justify-between">
              <Eyebrow>Common questions</Eyebrow>
            
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              {/* Introduction */}
              <div>
                <h2
                  id="home-faq-title"
                  className="max-w-[480px] font-serif text-[36px] leading-[1.1] tracking-[-0.035em] text-[#202522] sm:text-[48px] lg:text-[54px]"
                >
                  Good questions deserve clear answers.
                </h2>

                <p className="mt-4 max-w-[420px] text-sm leading-7 text-[#65736D] sm:text-base">
                  A little more clarity about our care, consultations
                  and approach to wellbeing.
                </p>
              </div>

              {/* Featured question */}
              <article className="border border-[#202522]/10 bg-white p-6 sm:p-9 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65736D]">
                    Lifestyle medicine
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex size-8 items-center justify-center rounded-full bg-[#FAF8F2] text-[#17413D]"
                  >
                     +
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl leading-snug text-[#202522] sm:text-[32px]">
                  What is lifestyle medicine?
                </h3>

                <p className="mt-4 max-w-[580px] text-sm leading-7 text-[#65736D] sm:text-base">
                  Lifestyle medicine uses evidence-informed changes
                  in food, physical activity, sleep and stress
                  management alongside appropriate medical care.
                </p>
              </article>
            </div>

            {/* All FAQs link */}
            <div className="mt-8 flex justify-end border-t border-[#202522]/15 pt-5">
              <TextLink href="/faqs">
                Explore All Frequently Asked Questions
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sutra Health",
      url: siteUrl,
      slogan: brandByline,
      founder: { "@type": "Person", name: "Dr. Rakesh Sarwal", honorificSuffix: "MBBS, MPH, DrPH", url: "https://academic.lifequality.org.in/" },
      address: { "@type": "PostalAddress", streetAddress: "House No. 229, Roof-Top, Sector 46", addressLocality: "Faridabad", addressRegion: "Haryana", postalCode: "121010", addressCountry: "IN" },
      telephone: "+91-9013103676",
      areaServed: [{ "@type": "City", name: "Faridabad" }, { "@type": "AdministrativeArea", name: "Delhi NCR" }, { "@type": "Country", name: "India" }],
      sameAs: [
        "https://academic.lifequality.org.in/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC12975079/",
        "https://www.instagram.com/sutrahealth/",
        "https://www.facebook.com/people/Sutrahealth-Equal/",
        "https://www.youtube.com/@sutra-health",
        "https://www.linkedin.com/in/equal-society-ngo",
      ],
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Sutra Health", url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-IN" },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: "Sutra Health | Medical and Lifestyle Care",
      url: siteUrl,
      description: "Medical consultation, nutrition counselling, Therapeutic Yoga and lifestyle support.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
      inLanguage: "en-IN",
    },
    { "@type": "BreadcrumbList", "@id": `${siteUrl}/#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }] },
    ...services.map((service) => ({
      "@type": "Service",
      "@id": `${siteUrl}${service.href}#service`,
      name: service.label,
      url: `${siteUrl}${service.href}`,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="sutraHomeEditorial">
        <Hero />
        <EverydayHealth />
        <ConditionsPreview />
        <PatientStories />
        <HomeFAQs />
        <AppointmentCTA />
      </main>
    </>
  );
}
