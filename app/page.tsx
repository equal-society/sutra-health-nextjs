import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import HeroVideo from "@/components/shared/HeroVideo";
import { getAllConditions } from "@/data/conditions";
import { organizationSchema } from "@/lib/schema";

const siteUrl = "https://lifequality.org.in";

const brandByline =
  "Medical guidance and practical lifestyle support, grounded in evidence and everyday care.";

export const metadata: Metadata = {
  title: {
    absolute: "Lifestyle Medicine Doctor in Delhi NCR, India | Sutra Health",
  },

  description:
    "Struggling with diabetes, BP or stress? Get a doctor-led plan built on nutrition, therapeutic yoga and daily habits in Delhi NCR, India. Book a consultation.",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Lifestyle Medicine Doctor in Delhi NCR, India | Sutra Health",

    description:
      "Struggling with diabetes, BP or stress? Get a doctor-led plan built on nutrition, therapeutic yoga and daily habits in Delhi NCR, India. Book a consultation.",

    url: siteUrl,

    siteName: "Sutra Health",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: `${siteUrl}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Lifestyle Medicine Doctor in Delhi NCR, India | Sutra Health",

    description:
      "Struggling with diabetes, BP or stress? Get a doctor-led plan built on nutrition, therapeutic yoga and daily habits in Delhi NCR, India. Book a consultation.",

    images: [`${siteUrl}/images/og-image.webp`],
  },
};

const services = [
  {
    label: "Physician Consultation",
    href: "/services/physician-consultation",
  },
  {
    label: "Lifestyle Medicine",
    href: "/services/lifestyle",
  },
  {
    label: "Nutrition Counselling",
    href: "/services/nutrition",
  },
  {
    label: "Therapeutic Yoga",
    href: "/services/therapeutic-yoga",
  },
  {
    label: "Stress and Behaviour Support",
    href: "/services/behaviour-stress-mind",
  },
  {
    label: "Shirodhara",
    href: "/services/shirodhara",
  },
  {
    label: "My Buddy",
    href: "/services/my-buddy",
  },
];

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.16em] sm:text-[12px] ${
        light ? "text-white/75" : "text-[#65736D]"
      }`}
    >
      {children}
    </p>
  );
}

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-10 items-center gap-2 text-[15px] font-semibold text-[#17413D] underline decoration-[#17413D]/35 underline-offset-4 transition-colors hover:decoration-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {children}

      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}


/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section
      aria-labelledby="home-title"
      className="
        relative isolate
        min-h-[580px]
        overflow-hidden
        bg-[#101C19]
        sm:min-h-[640px]
        lg:min-h-[min(760px,calc(100svh-80px))]
      "
    >
      {/* Background Video */}
      <div aria-hidden="true" className="absolute inset-0">
        <HeroVideo
          src="/videos/hero-video.mp4"
          poster="/images/hero-poster.webp"
        />

 
{/* Very light overall overlay */}
<div className="absolute inset-0 bg-[#101C19]/10" />

{/* Subtle left-to-right gradient for text readability */}
<div
  className="
    absolute inset-0
    bg-gradient-to-r
    from-[#101C19]/35
    via-[#101C19]/15
    to-transparent
  "
/>

{/* Minimal bottom contrast */}
<div
  className="
    absolute inset-0
    bg-gradient-to-t
    from-[#101C19]/15
    via-transparent
    to-transparent
  "
/>

      </div>

      {/* Hero Content */}
      <div
        className="
          relative z-10
          mx-auto flex
          min-h-[580px]
          w-full max-w-7xl
          items-center
          px-5 py-16
          sm:min-h-[640px]
          sm:px-8 sm:py-20
          lg:min-h-[min(760px,calc(100svh-80px))]
          lg:px-12 lg:py-24
        "
      >
        <div className="max-w-4xl">

          {/* Heading */}
          <h1
            id="home-title"
            className="
              max-w-[900px]
              font-serif font-medium
              text-[42px]
              leading-[1.06]
              tracking-[-0.04em]
              text-white
              [text-shadow:0_2px_18px_rgba(0,0,0,0.18)]
              sm:text-6xl
              lg:text-[76px]
              lg:leading-[1.02]
            "
          >
            Your health can move in a better direction.
          </h1>

          {/* Introduction */}
          <p
            className="
              mt-6
              max-w-[620px]
              text-[15px]
              font-medium
              leading-7
              text-white
              [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]
              sm:text-lg
              sm:leading-8
              lg:mt-7
            "
          >
            Food, movement, sleep and stress all influence your wellbeing.
            Explore doctor-led guidance and practical lifestyle support
            to take informed steps towards better health.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex flex-col gap-3
              sm:flex-row sm:flex-wrap sm:items-center
              lg:mt-9
            "
          >
            <Link
              href="/assessment"
              className="
                inline-flex min-h-12
                w-full sm:w-auto
                items-center justify-center
                border border-white/80
                bg-[#101C19]/15
                px-6 py-3
                text-sm font-semibold text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:border-white
                hover:bg-white/15
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              Take the Lifestyle Assessment
            </Link>

            <Link
              href="/book-appointment"
              className="
                inline-flex min-h-12
                w-full sm:w-auto
                items-center justify-center
                bg-[#F7F5EF]
                px-6 py-3
                text-sm font-semibold text-[#17413D]
                shadow-lg shadow-black/10
                transition-all duration-300
                hover:bg-white
                hover:-translate-y-0.5
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              Book a Consultation
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* Doctor Credential */}
          <p className="mt-7 text-sm font-medium leading-6 text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
            Led by{" "}
            <Link
              href="/doctors"
              className="
                font-semibold text-white
                underline decoration-white/60
                underline-offset-4
                transition-colors
                hover:decoration-white
              "
            >
              Dr. Rakesh Sarwal
            </Link>{" "}
            · MBBS, MPH, DrPH (Johns Hopkins)
          </p>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EVERYDAY HEALTH
========================================================= */

function EverydayHealth() {
  const services = [
    { title: "Lifestyle Medicine", href: "/services/lifestyle" },
    { title: "Physician Consultation", href: "/services/physician-consultation" },
    { title: "Therapeutic Yoga", href: "/services/therapeutic-yoga" },
    { title: "Nutrition Counselling", href: "/services/nutrition" },
    { title: "Behaviour & Stress Management", href: "/services/behaviour-stress-mind" },
    { title: "Shirodhara", href: "/services/shirodhara" },
    { title: "My Buddy", href: "/services/my-buddy" },
  ];

  return (
    <section aria-labelledby="everyday-title" className="bg-white">
      <Container>
        <div className="py-12 sm:py-14 lg:py-16">

          {/* Full-width heading */}
          <div className="max-w-5xl">
            <Eyebrow>Lifestyle and health</Eyebrow>

            <h2
              id="everyday-title"
              className="
                mt-3
                max-w-5xl
                font-serif
                text-[38px]
                leading-[1.08]
                tracking-[-0.035em]
                text-[#202522]
                sm:text-[52px]
                lg:text-[60px]
              "
            >
              Your partner in recovery and wellness through science-based traditional wisdom
            </h2>

            {/* Description below heading */}
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#65736D] sm:text-lg sm:leading-8">
              Explore doctor-led consultations and practical wellness approaches that
              bring together medical guidance, nutrition, movement and everyday habits
              to support your health.
            </p>
          </div>

          {/* Existing services */}
          <div className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:gap-x-16">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="
                  group flex min-h-[82px] items-center justify-between gap-5
                  border-b border-[#DDE4DE] py-5
                  transition-colors duration-300 hover:text-[#17413D]
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-4 focus-visible:outline-[#17413D]
                "
              >
                <span className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#8A9890]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-serif text-xl leading-snug text-[#202522] transition-colors group-hover:text-[#17413D] sm:text-2xl">
                    {service.title}
                  </span>
                </span>

                <ArrowUpRight
                  size={19}
                  aria-hidden="true"
                  className="shrink-0 text-[#17413D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CONDITIONS
========================================================= */

function ConditionsPreview() {
  const conditions = getAllConditions();

  return (
    <section
      aria-labelledby="conditions-title"
      className="border-y border-[#E5E1D7] bg-[#F1EEE5]"
    >
      <Container>
        <div className="py-12 sm:py-14 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Health concerns</Eyebrow>
              <h2
                id="conditions-title"
                className="mt-3 max-w-[600px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]"
              >
                Explore the health concerns we support.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#65736D] sm:text-lg sm:leading-8">
                Learn about common health concerns and explore how evidence-informed
                lifestyle support and medical guidance can help you take informed
                steps towards better health.
              </p>
              <div className="mt-7">
                <TextLink href="/conditions">Explore All Health Concerns</TextLink>
              </div>
            </div>

            <div className="border-t border-[#202522]/20">
              {conditions.map((condition, index) => (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="group flex min-h-[68px] items-center justify-between gap-4 border-b border-[#202522]/15 py-4 transition-colors duration-300 hover:pl-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17413D]"
                >
                  <span className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs font-semibold tracking-wider text-[#89928A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium text-[#202522] transition-colors group-hover:text-[#17413D] sm:text-lg">
                      {condition.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-[#17413D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   LATEST PUBLICATION
========================================================= */


function LatestPublication() {
  return (
    <section
      aria-labelledby="latest-publication-title"
      className="relative isolate overflow-hidden border-y border-[#DDE4DE] bg-[#FAFBF8] py-5 mt-15"
      style={{
        backgroundImage: `
          url('/images/life.webp')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="py-9 sm:py-11 lg:py-12">
          <div className="relative max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Latest publication</Eyebrow>

              <span className="h-px w-8 bg-[#17413D]/40" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-teal)]">
                Academic publication · 2026
              </p>
            </div>

            <h2
              id="latest-publication-title"
              className="mt-4 max-w-4xl font-serif text-[34px] leading-[1.08] tracking-[-0.04em] text-[#202522] sm:text-5xl lg:text-[56px]"
            >
              Dosha &amp; Panchmahabhutas
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--sutra-muted)] sm:text-base sm:leading-7">
              Read the latest academic publication exploring the relationship
              between Dosha and the Panchmahabhutas.
            </p>

            <div className="mt-5">
              <a
                href="https://academic.lifequality.org.in/Dosha-Panchmahabhutas/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-10 items-center gap-6 border-b border-[var(--sutra-teal)] pb-2 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:text-[#202522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)]"
              >
                Read the publication
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


/* =========================================================
   APPOINTMENT CTA
========================================================= */

function AppointmentCTA() {
  return (
    <section aria-labelledby="appointment-title" className="bg-[#17413D]">
      <Container>
        <div className="py-12 sm:py-14 lg:py-16">
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div className="max-w-[720px]">
              <Eyebrow light>Start a conversation</Eyebrow>
              <h2
                id="appointment-title"
                className="mt-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[54px]"
              >
                Let’s discuss a suitable next step.
              </h2>
              <p className="mt-5 max-w-[600px] text-base leading-7 text-white/85 sm:text-[18px]">
                Tell us what support you are looking for. Our team can explain the
                available consultation options and how to begin.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-[230px]">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-[52px] items-center justify-center bg-white px-7 text-base font-semibold text-[#17413D] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book a Consultation
                <ArrowUpRight size={17} className="ml-2" aria-hidden="true" />
              </Link>

              <a
                href="tel:+919013103676"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/60 px-7 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Call +91 90131 03676
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


function PatientStoriesAndFAQs() {
  return (
    <section
      aria-label="Patient experiences and frequently asked questions"
      className="bg-white"
    >
      <Container>
        <div className="py-10 sm:py-12 lg:py-14">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">

            {/* Patient Stories */}
            <div
              id="patient-stories"
              className="flex min-h-[280px] flex-col justify-between bg-[#FAF8F2] p-6 sm:p-8 lg:p-9"
            >
              <div>
                <Eyebrow>Patient experiences</Eyebrow>

                <h2
                  id="patient-stories-title"
                  className="mt-4 max-w-[520px] font-serif text-[36px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[44px] lg:text-[48px]"
                >
                  Every journey has a story.
                </h2>

                <p className="mt-4 max-w-md text-base leading-7 text-[#65736D]">
                  Personal experiences from people who have been part of
                  the Sutra Health community.
                </p>
              </div>

              <div className="mt-8 border-t border-[#202522]/15 pt-5">
                <TextLink href="/patient-stories">
                  Read Patient Stories
                </TextLink>
              </div>
            </div>

            {/* FAQs */}
            <div
              className="flex min-h-[280px] flex-col justify-between border border-[#E5E1D7] bg-[#F1EEE5] p-6 sm:p-8 lg:p-9"
            >
              <div>
                <Eyebrow>Need a little clarity?</Eyebrow>

                <h2
                  id="home-faq-title"
                  className="mt-4 max-w-[520px] font-serif text-[36px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[44px] lg:text-[48px]"
                >
                  Have questions before getting started?
                </h2>
              </div>

              <div className="mt-8 border-t border-[#202522]/15 pt-5">
                <TextLink href="/faqs">
                  Explore All FAQs
                </TextLink>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}


/* =========================================================
   STRUCTURED DATA
========================================================= */

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    // Shared organisation: the clinic, website and pages below all point to it
    organizationSchema,

    {
      "@type": "MedicalClinic",

      "@id": `${siteUrl}/#clinic`,

      name: "Sutra Health",

      url: siteUrl,

      image: `${siteUrl}/images/og-image.webp`,

      telephone: "+919013103676",

      medicalSpecialty: ["PublicHealth", "Lifestyle medicine"],

      address: {
        "@type": "PostalAddress",
        streetAddress: "House No. 229, Roof-Top, Sector 46",
        addressLocality: "Delhi NCR, India",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },

      parentOrganization: {
        "@id": `${siteUrl}/#organization`,
      },

      sameAs: [
        "https://www.instagram.com/sutrahealth/",
        "https://www.facebook.com/people/Sutrahealth-Equal/",
        "https://www.youtube.com/@sutra-health",
        "https://www.linkedin.com/in/equal-society-ngo",
      ],
    },

    {
      "@type": "WebSite",

      "@id": `${siteUrl}/#website`,

      name: "Sutra Health",

      url: siteUrl,

      publisher: {
        "@id": `${siteUrl}/#organization`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",

      "@id": `${siteUrl}/#webpage`,

      name: "Lifestyle Medicine Doctor in Delhi NCR, India | Sutra Health",

      url: siteUrl,

      description:
        "Medical consultation, nutrition counselling, Therapeutic Yoga and lifestyle support.",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#organization`,
      },

      breadcrumb: {
        "@id": `${siteUrl}/#breadcrumb`,
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${siteUrl}/#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
      ],
    },

    ...services.map((service) => ({
      "@type": "Service",

      "@id": `${siteUrl}${service.href}#service`,

      name: service.label,

      url: `${siteUrl}${service.href}`,

      provider: {
        "@id": `${siteUrl}/#organization`,
      },

      areaServed: {
        "@type": "Country",
        name: "India",
      },
    })),
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="sutraHomeEditorial">
        <Hero />

        <EverydayHealth />

        <ConditionsPreview />

        <LatestPublication />

        <PatientStoriesAndFAQs />


        <AppointmentCTA />
      </main>
    </>
  );
}
