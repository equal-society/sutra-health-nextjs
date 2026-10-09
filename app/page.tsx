import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

const siteUrl = "https://lifequality.org.in";

const brandByline =
  "Medical guidance and practical lifestyle support, grounded in evidence and everyday care.";

export const metadata: Metadata = {
  title: { absolute: "Sutra Health | Doctor-Led Integrative Lifestyle Healthcare" },

  description:
    "Doctor-led healthcare bringing medical guidance, nutrition, Therapeutic Yoga and everyday lifestyle support together in Faridabad.",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sutra Health | Doctor-Led Integrative Lifestyle Healthcare",

    description:
      "Doctor-led healthcare bringing medical guidance, nutrition, Therapeutic Yoga and everyday lifestyle support together in Faridabad.",

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

    title: "Sutra Health | Doctor-Led Integrative Lifestyle Healthcare",

    description:
      "Doctor-led healthcare bringing medical guidance, nutrition, Therapeutic Yoga and everyday lifestyle support together in Faridabad.",

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
      className={`text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-[12px] ${
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
        relative
        isolate
        min-h-[600px]
        overflow-hidden
        bg-[#101C19]
        sm:min-h-[660px]
        lg:min-h-[min(780px,calc(100svh-80px))]
      "
    >
      {/* Background Video */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Sutra Health lifestyle healthcare introduction"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Base Overlay */}
        <div className="absolute inset-0 bg-[#101C19]/40" />

        {/* Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101C19]/90 via-[#101C19]/65 to-[#101C19]/25" />

        {/* Bottom Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101C19]/55 via-transparent to-[#101C19]/10" />
      </div>

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[600px]
          w-full
          max-w-7xl
          items-center
          px-5
          py-14
          sm:min-h-[660px]
          sm:px-8
          sm:py-20
          lg:min-h-[min(780px,calc(100svh-80px))]
          lg:px-12
          lg:py-24
        "
      >
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-white/75
              sm:text-xs
            "
          >
            Doctor-led integrative lifestyle healthcare
          </p>

          {/* Heading */}
          <h1
            id="home-title"
            className="
              mt-5
              max-w-[900px]
              font-serif
              text-[42px]
              font-medium
              leading-[1.02]
              tracking-[-0.04em]
              text-white
              sm:text-6xl
              lg:text-[76px]
              lg:leading-[1.02]
            "
          >
            <span className="block">
              Your partner in recovery and wellness.
            </span>
          </h1>

          {/* Introduction */}
          <p
            className="
              mt-5
              max-w-[620px]
              text-[15px]
              leading-7
              text-white/85
              sm:text-lg
              sm:leading-8
              lg:mt-6
            "
          >
            We bring medical guidance, nutrition, everyday practices and Therapeutic Yoga into one conversation about your health.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              lg:mt-8
            "
          >
            <Link
              href="/assessment"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                bg-[#F7F5EF]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#17413D]
                transition-colors
                hover:bg-white
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                sm:w-auto
              "
            >
              Take Your Health Assessment

              <span
                className="ml-3"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              href="/services"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                border
                border-white/60
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-white/10
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                sm:w-auto
              "
            >
              Explore Our Services
            </Link>
          </div>

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
    <section
      aria-labelledby="everyday-title"
      className="bg-white"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>
            Lifestyle and health
          </Eyebrow>

          <h2
            id="everyday-title"
            className="
              mt-3
              max-w-[850px]
              font-serif
              text-[38px]
              leading-[1.08]
              tracking-[-0.035em]
              text-[#202522]
              sm:text-[56px]
            "
          >
            Your everyday life is part of your health.
          </h2>

          <p className="mt-5 max-w-[720px] text-base leading-8 text-[#65736D] sm:text-[18px]">
            Food, movement, sleep and stress all contribute to your health. We help you explore practical changes alongside appropriate medical care.
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

/* =========================================================
   CONDITIONS
========================================================= */

function ConditionsPreview() {
  const conditions = getAllConditions();

  return (
    <section
      aria-labelledby="conditions-title"
      className="bg-[#F7F5EF]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>
            Health concerns
          </Eyebrow>

          <h2
            id="conditions-title"
            className="
              mt-3
              max-w-[700px]
              font-serif
              text-[38px]
              leading-[1.08]
              tracking-[-0.035em]
              text-[#202522]
              sm:text-[52px]
            "
          >
            Explore the health concerns we support.
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="
                  group
                  flex
                  min-h-[54px]
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-[#202522]/15
                  py-3
                  text-[16px]
                  font-medium
                  text-[#202522]
                  transition-colors
                  hover:text-[#17413D]
                  sm:text-[17px]
                "
              >
                <span>
                  {condition.title}
                </span>

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="
                    shrink-0
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <TextLink href="/conditions">
              Explore All Health Concerns
            </TextLink>
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
    <section
      aria-labelledby="appointment-title"
      className="bg-[#17413D]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[720px]">
            <Eyebrow light>
              Start a conversation
            </Eyebrow>

            <h2
              id="appointment-title"
              className="
                mt-3
                font-serif
                text-[38px]
                leading-[1.08]
                tracking-[-0.035em]
                text-white
                sm:text-[54px]
              "
            >
              Let’s discuss a suitable next step.
            </h2>

            <p className="mt-5 max-w-[600px] text-base leading-7 text-white/85 sm:text-[18px]">
              Tell us what support you are looking for. Our team can explain
              the available consultation options and how to begin.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  bg-white
                  px-7
                  text-base
                  font-semibold
                  text-[#17413D]
                  transition-colors
                  hover:bg-white/90
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                Book a Consultation

                <ArrowUpRight
                  size={17}
                  className="ml-2"
                  aria-hidden="true"
                />
              </Link>

              <a
                href="tel:+919013103676"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  border
                  border-white/60
                  px-7
                  text-base
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-white/10
                "
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



/* =========================================================
   PATIENT STORIES
========================================================= */

function PatientStories() {
  return (
    <section
      id="patient-stories"
      aria-labelledby="patient-stories-title"
      className="bg-[#FAF8F2]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="gap-10 lg:items-center lg:gap-16">
            <div>
              <Eyebrow>
                Patient experiences
              </Eyebrow>

              <h2
                id="patient-stories-title"
                className="
                  mt-3
                  font-serif
                  text-[38px]
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-[#202522]
                  sm:text-[52px]
                "
              >
                What people have shared.
              </h2>

              <p className="mt-4 text-base leading-7 text-[#65736D]">
                Experiences shared by people who have interacted with Sutra Health and its practitioners.
              </p>

              <div className="mt-6">
                <TextLink href="/patient-stories">
                  Read Patient Stories
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
   FAQ
========================================================= */

function HomeFAQs() {
  return (
    <section
      aria-labelledby="home-faq-title"
      className="bg-[#FAF8F2]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="gap-10 lg:items-center lg:gap-16">
            <div>
              <Eyebrow>
                Frequently asked questions
              </Eyebrow>

              <h2
                id="home-faq-title"
                className="
                  mt-3
                  max-w-[750px]
                  font-serif
                  text-[36px]
                  leading-[1.1]
                  tracking-[-0.035em]
                  text-[#202522]
                  sm:text-[48px]
                  lg:text-[54px]
                "
              >
                Questions about your care.
              </h2>

              <div className="mt-7 border-t border-[#202522]/15 pt-5">
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

      name: "Sutra Health | Integrative Lifestyle Healthcare",

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




        <PatientStories />

        <HomeFAQs />

        <AppointmentCTA />
      </main>
    </>
  );
}