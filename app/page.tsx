import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";
import { getAllConditions } from "@/data/conditions";

const siteUrl = "https://lifequality.org.in";
const BYLINE = "Your partner in recovery and wellness through science-based traditional wisdom";


export const metadata: Metadata = {
  title: "Doctor-Led Integrative Healthcare | Sutra Health",
  
  description:
    "Sutra Health provides doctor-led integrative healthcare through medical care, lifestyle medicine, nutrition, therapeutic Yoga and behaviour support.",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Doctor-Led Integrative Healthcare | Sutra Health",
    description:
      "Doctor-led integrative healthcare through medical care, lifestyle medicine, nutrition, therapeutic Yoga and behaviour support.",
    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health doctor-led integrative healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led Integrative Healthcare | Sutra Health",
    description:
      "Doctor-led integrative healthcare through medical care, lifestyle medicine, nutrition, therapeutic Yoga and behaviour support.",
    images: [`${siteUrl}/images/hero-desktop.webp`],
  },
};

const homepageFaqs = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine uses evidence-informed changes in areas such as food, physical activity, sleep and stress management alongside appropriate medical care.",
  },
  {
    question:
      "Can yoga therapy be part of managing a health condition?",
    answer:
      "Therapeutic yoga can be part of a broader care plan for some people. Practices are adapted to individual health, ability and goals and should not replace appropriate medical treatment.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Sutra Health works with people across India. Online consultations are available for relevant services, subject to the current consultation format and availability.",
  },
  {
    question: "How long before I see results?",
    answer:
      "There is no single timeline. Progress depends on the individual, health concern, starting point and changes that can be maintained over time.",
  },
  {
    question: "How do I get started with Sutra Health?",
    answer:
      "You can begin by booking a consultation or taking the 21-Question Lifestyle Assessment as a starting point for reflecting on everyday health habits.",
  },
];

const structuredServices = [
  {
    name: "Physician Consultation",
    description:
      "Doctor-led consultation to understand your health and discuss appropriate next steps.",
    url: `${siteUrl}/services/physician-consultation`,
  },
  {
    name: "Lifestyle Medicine",
    description:
      "Practical support around nutrition, movement, sleep, stress and everyday habits alongside appropriate medical care.",
    url: `${siteUrl}/services/lifestyle`,
  },
  {
    name: "Nutrition",
    description:
      "Personalised guidance around food and healthier eating habits shaped around individual health needs and daily life.",
    url: `${siteUrl}/services/nutrition`,
  },
  {
    name: "Therapeutic Yoga",
    description:
      "Adapted yoga practices shaped around your health, needs and ability.",
    url: `${siteUrl}/services/therapeutic-yoga`,
  },
  {
    name: "Behaviour, Stress & Mind",
    description:
      "Practical support for habits, stress and sustainable behaviour change.",
    url: `${siteUrl}/services/behaviour-stress-mind`,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sutra Health",
      url: siteUrl,
   
      slogan: BYLINE,
      founder: {
        "@type": "Person",
        name: "Dr. Rakesh Sarwal",
        honorificSuffix: "MBBS, MPH, DrPH",
        url: "https://academic.lifequality.org.in/",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "House No. 229, Roof-Top, Sector 46",
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        postalCode: "121010",
        addressCountry: "IN",
      },
      telephone: "+91-9013103676",
      areaServed: [
        { "@type": "City", name: "Faridabad" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
        { "@type": "Country", name: "India" },
      ],
      sameAs: [
        "https://academic.lifequality.org.in/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC12975079/",
        "https://zenodo.org/records/15814357",
        "https://www.preprints.org/manuscript/202603.0183/",
        "https://www.instagram.com/sutrahealth/",
        "https://www.facebook.com/people/Sutrahealth-Equal/",
        "https://www.youtube.com/@sutra-health",
        "https://www.linkedin.com/in/equal-society-ngo",
        "https://sutra-health.medium.com/",
        "https://in.pinterest.com/equal_society/",
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
      name: "Sutra Health | Doctor-Led Integrative Healthcare",
      url: siteUrl,
      description:
        "Sutra Health provides doctor-led integrative healthcare through medical care, lifestyle medicine, nutrition, therapeutic Yoga and behaviour support.",
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
    ...structuredServices.map((service) => ({
      "@type": "Service",
      "@id": `${service.url}#service`,
      name: service.name,
      description: service.description,
      url: service.url,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: homepageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${siteUrl}/#sutra-method`,
      name: "How Sutra Health Works",
      description:
        "The four-stage process used by Sutra Health to help people understand their health, personalise a plan, practise changes and review progress.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Understand",
          text:
            "Look at your health, concerns, goals and everyday routine.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Personalise",
          text:
            "Build a practical plan around your health needs, priorities and real life.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Practise",
          text:
            "Turn the plan into manageable changes around food, physical activity, sleep, stress and daily habits.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Review",
          text:
            "Look at what is changing, what is working and what needs adaptation.",
        },
      ],
    },
  ],
};






function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="min-h-[620px] overflow-hidden bg-[var(--sutra-porcelain)] lg:h-[calc(100svh-75px)] lg:min-h-[620px]"
    >
      <Container className="h-full">
        <div className="grid min-h-full items-center gap-5 py-8 sm:gap-7 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8 lg:py-8 xl:gap-14 xl:px-10">

          {/* Content */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[var(--sutra-sage)] sm:w-9"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Doctor-led integrative healthcare
              </p>
            </div>

            <h1
              id="hero-title"
              className="mt-4 max-w-[700px] font-serif text-[39px] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--sutra-ink)] sm:mt-5 sm:text-[48px] md:text-[56px] lg:mt-6 lg:text-[62px] xl:text-[68px]"
            >
              Integrative healthcare,
              <br />
              built around{" "}
              <span className="text-[var(--sutra-teal)]">your life.</span>
            </h1>

            <p className="mt-5 max-w-[590px] font-sans text-[14px] leading-[1.55] text-[var(--sutra-muted)] sm:mt-6 sm:text-[16px] lg:text-[17px] lg:leading-[1.6]">
             Doctor-led care bringing medical care, lifestyle medicine,
              nutrition, therapeutic Yoga and behaviour support together
              around your health and everyday life.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/book-appointment"
                className="group inline-flex h-11 items-center justify-center bg-[var(--sutra-teal)] px-5 font-sans text-[13px] font-medium text-[var(--sutra-white)] transition-colors duration-300 hover:bg-[var(--sutra-teal-hover)] sm:h-12 sm:px-6 sm:text-[14px]"
              >
                Book a Consultation

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/assessment"
                className="group inline-flex h-11 items-center justify-center border border-[var(--sutra-border-strong)] px-5 font-sans text-[13px] font-medium text-[var(--sutra-ink)] transition-colors duration-300 hover:border-[var(--sutra-sage)] hover:text-[var(--sutra-teal)] sm:h-12 sm:px-5 sm:text-[14px]"
              >
                Take the 21-Question Assessment

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Hero Video */}
        <div className="relative min-w-0 lg:h-full lg:flex lg:items-center">
          <div className="relative mx-auto h-[220px] w-full max-w-[680px] overflow-hidden sm:h-[280px] md:h-[330px] lg:h-[min(68vh,650px)] lg:w-full lg:max-w-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              poster="/images/hero-desktop.webp"
              className="absolute inset-0 h-full w-full object-cover object-center"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        </div>
      </Container>
    </section>
  );
}




function LifestyleHealthSection() {
  return (
    <section
      aria-labelledby="lifestyle-health-title"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          {/* Intro */}
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Lifestyle & Health
              </p>
            </div>

            <h2
              id="lifestyle-health-title"
              className="mt-5 max-w-[1000px] font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[64px]"
            >
              Your everyday life is part of your health.
            </h2>

            <div className="mt-7 max-w-[950px] space-y-5 font-sans text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
              <p>
                Daily patterns can affect energy, wellbeing and the way some long-term
                health concerns are managed. They are worth discussing as part of a
                broader view of your health.
              </p>

              <p>
                The aim is not to change everything at once. Small, realistic steps
                can help you build a routine you can maintain, with clinical guidance
                where it is needed.
              </p>

              <p>
                We consider these everyday factors alongside appropriate medical care,
                then help you identify practical changes that can fit your routine.
              </p>
            </div>

            <Link
              href="/services/lifestyle"
              className="group mt-7 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:text-[var(--sutra-teal-hover)]"
            >
              Explore Lifestyle Medicine
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}





function AssessmentSection() {
  return (
    <section
      id="assessment"
      aria-labelledby="assessment-heading"
      className="bg-[var(--sutra-porcelain)]"
    >
      <Container>
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-32">
          {/* Content */}
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                21-Question Lifestyle Assessment
              </p>
            </div>

            <h2
              id="assessment-heading"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[58px]"
            >
              How healthy is your current lifestyle?
            </h2>

            <p className="mt-6 max-w-[540px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">
              Answer 21 questions about everyday health habits and receive a simple
              starting point for deciding what you may want to work on next.
            </p>

            <div className="mt-8">
              <Link
                href="/assessment"
                className="group inline-flex min-h-12 w-full items-center justify-center bg-[var(--sutra-teal)] px-6 py-3.5 font-sans text-[13px] font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-sage)] focus-visible:ring-offset-2 sm:w-fit sm:px-7 sm:text-[14px]"
              >
                Take the 21-Question Assessment

                <ArrowUpRight
                  size={16}
                  className="ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <p className="mt-4 max-w-[500px] font-sans text-[11px] leading-5 text-[var(--sutra-muted)]">
              The Traffic Light result is a starting point for reflection, not
              a medical diagnosis.
            </p>
          </div>

          {/* Existing Traffic Light visual */}
          <div className="relative">
            <div className="overflow-hidden border border-[var(--sutra-border)] bg-white">
              <div className="relative aspect-[1.4/1]">
                <Image
                  src="/images/traffic-light-system.webp"
                  alt="Sutra Health 21-point Traffic Light System for lifestyle assessment"
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}




const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Guidance to connect everyday health habits with your clinical care.",
    href: "/services/lifestyle",
    image: "/images/program-lifestyle.webp",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Food choices and meal routines discussed around your needs and preferences.",
    href: "/services/nutrition",
    image: "/images/retreat/diet.webp",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Guided practices adapted to your mobility, comfort and health context.",
    href: "/services/therapeutic-yoga",
    image: "/images/what-we-do/yoga.png",
  },
  {
    number: "04",
    title: "Behaviour, Stress & Mind",
    description:
      "Tools to work through barriers, stress and routines that are hard to sustain.",
    href: "/services/behaviour-stress-mind",
    image: "/images/what-we-do/mind.png",
  },
];

function HowWeHelpSection() {
  return (
    <section
      aria-labelledby="help-heading"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          {/* Introduction */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                Our Services
              </p>
            </div>

            <h2
              id="help-heading"
              className="mt-5 max-w-[600px] font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[58px]"
            >
              Care shaped around what you need.
            </h2>

            <p className="mt-5 max-w-[500px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px] sm:leading-8">
              Choose from consultations and focused support in nutrition, Yoga
              and behaviour change. Each service has its own role in your care plan.
            </p>

            <Link
              href="/services"
              className="group mt-6 inline-flex items-center border-b border-[var(--sutra-ink)] pb-2 font-sans text-[13px] font-medium text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-sage)] hover:text-[var(--sutra-sage)] sm:text-[14px]"
            >
              View all services
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Services */}
          <div className="border-t border-[var(--sutra-border)]">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group grid grid-cols-[76px_1fr_auto] items-center gap-4 border-b border-[var(--sutra-border)] py-4 sm:grid-cols-[90px_1fr_auto] sm:gap-5 sm:py-5"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-[76px] overflow-hidden bg-[var(--sutra-soft-beige)] sm:w-[90px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 76px, 90px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-serif text-[19px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[24px]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 max-w-[480px] font-sans text-[12px] leading-5 text-[var(--sutra-muted)] sm:text-[14px] sm:leading-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-teal)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}





const principles = [
  {
    number: "01",
    title: "Integrated Care",
    text: "Your clinician can coordinate relevant inputs instead of treating each concern in isolation.",
  },
  {
    number: "02",
    title: "Sustainable Change",
    text: "Set manageable priorities, practise them over time and adjust when life changes.",
  },
  {
    number: "03",
    title: "Personalised Support",
    text: "Your health history, preferences, capacity and goals help shape the plan.",
  },
];

function SutraHealthModelSection() {
  return (
    <section
      className="bg-[#F7F5EF]"
      aria-labelledby="model-heading"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Heading */}
          <div className="flex flex-col gap-5 border-b border-[#202522]/10 pb-7 sm:pb-9 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[850px]">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
                  Our Approach
                </p>

                <span
                  className="h-px w-9 bg-[#C8BDA7]"
                  aria-hidden="true"
                />
              </div>

              <h2
                id="model-heading"
                className="mt-4 font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#202522] sm:text-[48px] lg:text-[60px]"
              >
                A more connected approach to your health.
              </h2>
            </div>

            <Link
              href="/approach"
              className="group inline-flex min-h-10 w-fit items-center gap-2 text-[13px] font-semibold text-[#17413D] transition-colors hover:text-[#12332F]"
            >
              Explore our approach
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
            The Sutra model connects assessment, clinical guidance and follow-up.
            It helps make the next step clearer—and gives you a way to review progress.
          </p>

          {/* Principles */}
          <div className="mt-8 grid gap-4 sm:mt-9 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.number}
                className="group border border-[#202522]/10 bg-white p-5 transition-colors duration-300 hover:border-[#17413D]/25 sm:p-6 lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#91A298]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#17413D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 font-serif text-[25px] leading-tight tracking-[-0.025em] text-[#202522] sm:text-[28px]">
                  {item.title}
                </h3>

                <span
                  className="mt-4 block h-px w-9 bg-[#C8BDA7]"
                  aria-hidden="true"
                />

                <p className="mt-4 max-w-[320px] text-[14px] leading-6 text-[#65736D] sm:text-[15px]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}





function Conditions() {
  const conditions = getAllConditions();

  return (
    <section
      id="conditions"
      aria-labelledby="conditions-title"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          {/* Section Intro */}
          <div className="max-w-[1000px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Health Conditions
              </p>
            </div>

            <h2
              id="conditions-title"
              className="mt-4 max-w-[850px] font-serif text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[42px] lg:text-[54px]"
            >
              Explore the health concerns we support.
            </h2>

            <p className="mt-4 max-w-[750px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px]">
              Find condition-specific information and learn how care may be tailored
              to your circumstances. Treatment decisions remain individual.
            </p>
          </div>

          {/* Compact Condition Links */}
          <div className="mt-8 grid border-t border-[var(--sutra-border)] sm:grid-cols-4 sm:gap-x-1">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group flex items-center gap-4 border-b border-[var(--sutra-border)] py-4 transition-colors hover:text-[var(--sutra-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)]"
              >
                <span className="font-sans text-[15px] font-medium text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[16px]">
                  {condition.title}
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-teal)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>

          {/* All Conditions */}
          <div className="mt-5">
            <Link
              href="/conditions"
              className="group inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-[var(--sutra-teal)] hover:text-[var(--sutra-teal-hover)]"
            >
              View all conditions
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}



const testimonials = [
  {
    quote: "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.",
    name: "Rahul Sharma",
  },
  {
    quote: "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.",
    name: "Priya Verma",
  },
  {
    quote: "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.",
    name: "Ankit Mehta",
  },
  {
    quote: "Meditation sessions transformed my daily routine. Stress levels are much lower now.",
    name: "Neha Kapoor",
  },
  {
    quote: "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.",
    name: "Puneet Kulshrestha",
  },
  {
    quote: "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises.",
    name: "Adheer Dixit",
  },
  {
    quote: "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!",
    name: "Sumit Kashyap",
  },
  {
    quote: "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.",
    name: "Flor Riboldi",
  },
];

function Testimonials() {
  return (
    <section id="patient-stories" aria-labelledby="patient-stories-heading" className="overflow-hidden bg-[var(--sutra-white)]">
      <Container>
        <div className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-[760px] border-b border-[var(--sutra-border)] pb-10">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-[var(--sutra-sage)]" />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">Patient experiences</p>
            </div>
            <h2 id="patient-stories-heading" className="mt-5 max-w-[700px] font-serif text-[40px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[52px] lg:text-[62px]">What people have shared.</h2>
            <p className="mt-5 max-w-[650px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">Experiences shared by people who have interacted with Sutra Health and its practitioners.</p>
          </div>
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-14" style={{ overscrollBehaviorX: "contain" }}>
            {testimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className="flex min-w-[88%] snap-start flex-col border border-[var(--sutra-border)] bg-[var(--sutra-porcelain)] p-6 sm:min-w-[calc((100%-20px)/2)] sm:p-8 lg:min-w-[calc((100%-40px)/3)]">
                <span className="font-sans text-[10px] font-medium tracking-[0.14em] text-[var(--sutra-sage)]">{String(index + 1).padStart(2, "0")}</span>
                <blockquote className="mt-8 flex flex-1 flex-col">
                  <p className="font-serif text-[20px] leading-[1.4] tracking-[-0.015em] text-[var(--sutra-ink)] sm:text-[22px]">“{testimonial.quote}”</p>
                  <footer className="mt-8 border-t border-[var(--sutra-border)] pt-5">
                    <cite className="font-sans text-[13px] font-semibold not-italic text-[var(--sutra-ink)] sm:text-[14px]">{testimonial.name}</cite>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-[var(--sutra-muted)]">Individual experience</p>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
          <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.1em] text-[var(--sutra-muted)] sm:hidden">Swipe to explore</p>
          <div className="mt-8 border-t border-[var(--sutra-border)] pt-5 sm:mt-10">
            <p className="max-w-[760px] font-sans text-[11px] leading-5 text-[var(--sutra-muted)] sm:text-[12px]">These are individual accounts, not typical or guaranteed results. Testimonials should not replace advice from a qualified healthcare professional.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}



export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="sutraHomeEditorial">
        <Hero />
        <LifestyleHealthSection />
        <AssessmentSection />
        <HowWeHelpSection />
        <SutraHealthModelSection />
        <Conditions />
        <Testimonials />
        <FAQ faqs={homepageFaqs} />
      </main>
    </>
  );
}
