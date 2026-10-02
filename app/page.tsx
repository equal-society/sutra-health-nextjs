
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

const siteUrl = "https://lifequality.org.in";

const brandByline =
  "Your partner in recovery and wellness through science-based traditional wisdom.";

export const metadata: Metadata = {
  title: "Sutra Health | Doctor-Led Integrative Healthcare",
  description:
    "Doctor-led integrative healthcare combining medical guidance, nutrition counselling, Therapeutic Yoga and practical lifestyle support.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sutra Health | Doctor-Led Integrative Healthcare",
    description: brandByline,
    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/desktop.webp`,
        width: 1086,
        height: 1448,
        alt: "Sutra Health",
      },
    ],
  },
};

const services = [
  {
    label: "Physician Consultation",
    description:
      "Discuss your health concerns and appropriate medical guidance.",
    href: "/services/physician-consultation",
  },
  {
    label: "Lifestyle Medicine",
    description:
      "Explore practical changes in nutrition, movement, sleep and daily habits.",
    href: "/services/lifestyle",
  },
  {
    label: "Nutrition Counselling",
    description:
      "Understand food choices suited to your individual needs.",
    href: "/services/nutrition",
  },
  {
    label: "Therapeutic Yoga",
    description:
      "Explore appropriate yoga practices with professional guidance.",
    href: "/services/therapeutic-yoga",
  },
  {
    label: "Behaviour, Stress & Mind Support",
    description:
      "Work towards manageable habits and everyday wellbeing.",
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
        light
          ? "text-white/75"
          : "text-[var(--color-text-secondary)]"
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
      className="group inline-flex min-h-10 items-center gap-2 text-[15px] font-semibold text-[var(--color-text-link)] underline decoration-[var(--color-text-link)]/35 underline-offset-4 transition-colors hover:decoration-[var(--color-text-link)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
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

/* HERO */

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
          poster="/images/desktop.webp"
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <Container>
        <div className="relative z-10 flex min-h-[580px] flex-col justify-center py-16 sm:min-h-[660px] lg:min-h-[720px]">
          <div className="max-w-[780px]">
            <Eyebrow light>
              Doctor-led integrative lifestyle healthcare
            </Eyebrow>

            <h1
              id="home-title"
              className="mt-5 max-w-[760px] font-serif text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[62px] lg:text-[76px]"
            >
              Your partner in recovery and wellness
            </h1>

            <p className="mt-4 max-w-[680px] font-serif text-[22px] leading-snug text-white sm:text-[28px]">
              {brandByline}
            </p>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-white/85 sm:text-[18px] sm:leading-8">
              Medical guidance, nutrition, Therapeutic Yoga and
              practical lifestyle support for your individual needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-[52px] items-center justify-center bg-white px-7 text-center text-base font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book a Consultation
                <ArrowUpRight size={17} className="ml-2" />
              </Link>

              <Link
                href="/approach"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/75 px-7 text-center text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
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

/* EVERYDAY HEALTH */

function EverydayHealth() {
  return (
    <section
      aria-labelledby="everyday-title"
      className="bg-white"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Everyday wellbeing</Eyebrow>

          <h2
            id="everyday-title"
            className="mt-3 max-w-[850px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[var(--color-text-primary)] sm:text-[56px]"
          >
            Your everyday life is part of your health.
          </h2>

          <p className="mt-5 max-w-[720px] text-base leading-8 text-[var(--color-text-secondary)] sm:text-[18px]">
            Food, movement, sleep, stress and daily routines
            influence your wellbeing. We help you explore
            practical changes alongside appropriate medical care.
          </p>

          <div className="mt-6">
            <TextLink href="/services/lifestyle">
              Explore Lifestyle Medicine
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* CONDITIONS */

function ConditionsPreview() {
  const conditions = getAllConditions();

  return (
    <section
      aria-labelledby="conditions-title"
      className="bg-[var(--color-surface-page)]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Health concerns</Eyebrow>

          <h2
            id="conditions-title"
            className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[var(--color-text-primary)] sm:text-[52px]"
          >
            Explore care for the whole picture.
          </h2>

          <p className="mt-4 max-w-[650px] text-base leading-7 text-[var(--color-text-secondary)] sm:text-[17px]">
            Understand your health concerns and explore
            appropriate medical and lifestyle support.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group flex min-h-[54px] items-center justify-between gap-3 border-b border-[var(--color-border-default)] py-3 text-[16px] font-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-text-link)] sm:text-[17px]"
              >
                <span>{condition.title}</span>

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <TextLink href="/conditions">
              Explore Health Concerns
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* SERVICES */

function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-title"
      className="bg-white"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Our services</Eyebrow>

          <h2
            id="services-title"
            className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[var(--color-text-primary)] sm:text-[52px]"
          >
            Support for your health and daily life.
          </h2>

          <p className="mt-4 max-w-[650px] text-base leading-7 text-[var(--color-text-secondary)]">
            Personalised guidance through medical consultation,
            nutrition, Therapeutic Yoga and lifestyle support.
          </p>

          <div className="mt-8 grid grid-cols-1 border-y border-[var(--color-border-default)] sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col justify-center gap-2 border-b border-[var(--color-border-default)] py-5 sm:pr-6"
              >
                <span className="flex items-center justify-between gap-3 text-[17px] font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-text-link)]">
                  {service.label}

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>

                <span className="max-w-[430px] text-sm leading-6 text-[var(--color-text-secondary)]">
                  {service.description}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <TextLink href="/services">
              See All Services
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* APPROACH */

function ApproachPreview() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      detail: "Your health, concerns and daily routine.",
    },
    {
      number: "02",
      title: "Personalise",
      detail: "Discuss steps suited to your individual needs.",
    },
    {
      number: "03",
      title: "Practise",
      detail: "Work on manageable everyday changes.",
    },
    {
      number: "04",
      title: "Review",
      detail: "Discuss progress and adapt when needed.",
    },
  ];

  return (
    <section
      aria-labelledby="approach-title"
      className="bg-[var(--color-surface-soft)]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Our approach</Eyebrow>

          <h2
            id="approach-title"
            className="mt-3 max-w-[760px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[var(--color-text-primary)] sm:text-[52px]"
          >
            Medical guidance, with room for real life.
          </h2>

          <p className="mt-4 max-w-[680px] text-base leading-8 text-[var(--color-text-secondary)] sm:text-[17px]">
            We consider your wider health and identify
            practical changes that can complement medical care.
          </p>

          <ol className="mt-9 grid grid-cols-1 border-t border-[var(--color-border-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="border-b border-[var(--color-border-strong)] py-5 pr-5"
              >
                <span className="text-xs tracking-[0.14em] text-[var(--color-text-secondary)]">
                  {step.number}
                </span>

                <h3 className="mt-2 font-serif text-[25px] text-[var(--color-text-primary)]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-7">
            <TextLink href="/approach">
              How Care Works
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* DOCTOR */

function PersonalisedCare() {
  return (
    <section
      aria-labelledby="personal-care-title"
      className="bg-white"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface-soft)]">
            <Image
              src="/images/doctor.webp"
              alt="Dr. Rakesh Sarwal, Sutra Health"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="max-w-[620px]">
            <Eyebrow>Doctor-led care</Eyebrow>

            <h2
              id="personal-care-title"
              className="mt-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[var(--color-text-primary)] sm:text-[50px]"
            >
              Care shaped around what you need.
            </h2>

            <p className="mt-5 text-lg font-semibold text-[var(--color-text-link)]">
              Dr. Rakesh Sarwal, MBBS, MPH, DrPH
            </p>

            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Public Health Physician and Therapeutic Yoga Consultant
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-[17px]">
              Medical guidance, nutrition and lifestyle support
              are considered in the context of your health
              history, goals and daily routine.
            </p>

            <div className="mt-6">
              <TextLink href="/doctors">
                Meet Dr. Sarwal
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* FINAL CTA */

function AppointmentCTA() {
  return (
    <section
      aria-labelledby="appointment-title"
      className="bg-[var(--sutra-teal)]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[720px]">
            <Eyebrow light>Start a conversation</Eyebrow>

            <h2
              id="appointment-title"
              className="mt-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[54px]"
            >
              Take the first step towards understanding your health.
            </h2>

            <p className="mt-5 max-w-[600px] text-base leading-7 text-white/85 sm:text-[18px]">
              Discuss your concerns and explore appropriate
              next steps with Sutra Health.
            </p>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center bg-white px-7 text-base font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Book a Consultation
              <ArrowUpRight size={17} className="ml-2" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* HOMEPAGE */

export default function Home() {
  return (
    <main className="sutraHomeEditorial">
      <Hero />
      <EverydayHealth />
      <ConditionsPreview />
      <ServicesPreview />
      <ApproachPreview />
      <PersonalisedCare />
      <AppointmentCTA />
    </main>
  );
}