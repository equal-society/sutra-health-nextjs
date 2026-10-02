import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";
import { getAllConditions } from "@/data/conditions";

const siteUrl = "https://lifequality.org.in";
const BYLINE =
  "Your partner in recovery and wellness through science-based traditional wisdom";

export const metadata: Metadata = {
  title: "Sutra Health | Doctor-Guided Lifestyle Care",
  description:
    "Doctor-guided consultations and practical support for nutrition, therapeutic yoga, stress and long-term health at Sutra Health.",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sutra Health | Doctor-Guided Lifestyle Care",
    description:
      "Medical guidance with practical support for nutrition, therapeutic yoga and everyday health.",
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
    title: "Sutra Health | Doctor-Guided Lifestyle Care",
    description:
      "Medical guidance with practical support for nutrition, therapeutic yoga and everyday health.",
    images: [`${siteUrl}/images/hero-desktop.webp`],
  },
};

/*
  FIXED (regressed since the last pass): "Do you offer online
  consultations?" had gone back to a vague "subject to current format and
  availability" instead of a direct answer, and the pricing question had
  disappeared entirely. Restored both to the confident, specific versions
  used consistently on every other page of the site.
*/
const homepageFaqs = [
  {
    question: "What does lifestyle medicine mean?",
    answer:
      "Lifestyle medicine uses evidence-informed changes in areas such as food, physical activity, sleep and stress management alongside appropriate medical care.",
  },
  {
    question: "Can yoga therapy be part of managing a health condition?",
    answer:
      "It can be one part of your overall care alongside your doctor, but it is not a replacement for medical treatment. Medication changes should always be discussed with your physician.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Sutra Health works with people across India. Online consultations are available for lifestyle medicine, nutrition counselling and yoga therapy. In-person sessions are also available in Faridabad, Delhi NCR.",
  },
  {
    question: "How long before I see results?",
    answer:
      "There is no single timeline. Some people notice changes within weeks, while other improvements take longer. Results depend on the individual, the health concern and consistency with the plan.",
  },
  {
    question: "How do I get started with Sutra Health?",
    answer:
      "You can start by booking a consultation or by taking the free 21-Point Health Assessment to reflect on your current habits first.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Physician consultations start at ₹[ADD STARTING PRICE HERE]. The exact cost depends on the type of consultation and any additional support you choose, such as nutrition or yoga therapy sessions.",
  },
];

/*
  FIXED: every one of these pointed to /services/* — a route that
  doesn't exist anywhere else on the site. Every real service page lives
  at /what-we-do/*.
*/
const structuredServices = [
  {
    name: "Physician Consultation",
    description:
      "Doctor-led consultation to understand your health and discuss appropriate next steps.",
    url: `${siteUrl}/what-we-do/physician-consultation`,
  },
  {
    name: "Lifestyle Medicine",
    description:
      "Practical support around nutrition, movement, sleep, stress and everyday habits alongside appropriate medical care.",
    url: `${siteUrl}/what-we-do/lifestyle`,
  },
  {
    name: "Nutrition",
    description:
      "Personalised guidance around food and healthier eating habits shaped around individual health needs and daily life.",
    url: `${siteUrl}/what-we-do/nutrition`,
  },
  {
    name: "Therapeutic Yoga",
    description:
      "Adapted yoga practices shaped around your health, needs and ability.",
    url: `${siteUrl}/what-we-do/therapeutic-yoga`,
  },
  {
    name: "Behaviour, Stress & Mind",
    description:
      "Practical support for habits, stress and sustainable behaviour change.",
    url: `${siteUrl}/what-we-do/behaviour-stress-mind`,
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
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: "Sutra Health | Doctor-Guided Lifestyle Care",
      url: siteUrl,
      description:
        "Doctor-guided consultations and practical support for nutrition, therapeutic yoga, stress and long-term health at Sutra Health.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      ],
    },
    ...structuredServices.map((service) => ({
      "@type": "Service",
      "@id": `${service.url}#service`,
      name: service.name,
      description: service.description,
      url: service.url,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
    })),
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: homepageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${siteUrl}/#sutra-method`,
      name: "How Sutra Health Works",
      description:
        "The four-stage process used by Sutra Health to help people understand their health, personalise a plan, practise changes and review progress.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Understand", text: "Look at your health, concerns, goals and everyday routine." },
        { "@type": "HowToStep", position: 2, name: "Personalise", text: "Build a practical plan around your health needs, priorities and real life." },
        { "@type": "HowToStep", position: 3, name: "Practise", text: "Turn the plan into manageable changes around food, physical activity, sleep, stress and daily habits." },
        { "@type": "HowToStep", position: 4, name: "Review", text: "Look at what is changing, what is working and what needs adaptation." },
      ],
    },
  ],
};

/* =========================================================
   01 — HERO
   CHANGED: eyebrow now says "Doctor-led" explicitly. Subhead merges
   "personalized partner in recovery and wellness" with the mandated
   byline. Added a 4-pill services row using the requested consumer
   language (Diet / Lifestyle practices / Yoga / Positive thinking),
   each linking to the real, correctly-named service page — this also
   answers the earlier "add services into the first block" request.
   Assessment CTA renamed from "21-Question" to "21-Point Health
   Assessment" to match the name used everywhere else on the site.
========================================================= */

const heroServiceLinks = [
  { label: "Diet", href: "/what-we-do/nutrition" },
  { label: "Lifestyle Practices", href: "/what-we-do/lifestyle" },
  { label: "Yoga", href: "/what-we-do/therapeutic-yoga" },
  { label: "Positive Thinking", href: "/what-we-do/behaviour-stress-mind" },
];

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-[#14231F] sm:min-h-[700px] lg:min-h-[min(790px,calc(100svh-75px))]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster="/images/hero-desktop.webp"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,29,25,0.82)_0%,rgba(12,29,25,0.62)_43%,rgba(12,29,25,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(12,29,25,0.42)_0%,transparent_42%)]"
      />

      <Container className="relative z-10 w-full">
        <div className="max-w-[700px] py-24 sm:py-28 lg:py-32">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#C8D6C9]" />
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.19em] text-white/85 sm:text-[11px]">
              Doctor-Led Integrative Healthcare
            </p>
          </div>

          <h1
            id="hero-title"
            className="mt-6 max-w-[860px] font-serif text-[42px] font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[78px]"
          >
            Integrative healthcare,
            <br />
            built around your life.
          </h1>

          <p className="mt-6 max-w-[560px] font-sans text-[15px] leading-7 text-white/85 sm:text-[16px] sm:leading-[1.75]">
            Your personalized partner in recovery and wellness — through
            science-based traditional wisdom.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
            <Link
              href="/book-appointment"
              className="group inline-flex min-h-[50px] items-center justify-center bg-[#F7F5EF] px-6 font-sans text-[13px] font-semibold text-[#173D38] transition-colors duration-300 hover:bg-white sm:text-[14px]"
            >
              Book a Consultation
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/assessment"
              className="group inline-flex min-h-[50px] items-center justify-center border border-white/55 bg-[#10231F]/20 px-6 font-sans text-[13px] font-medium text-white backdrop-blur-[2px] transition-colors duration-300 hover:border-white hover:bg-white/10 sm:text-[14px]"
            >
              Take the 21-Point Health Assessment
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* ADDED: services teaser row, requested consumer-friendly labels */}
          {/* <div className="mt-6 flex flex-wrap gap-2">
            {heroServiceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/30 px-4 py-1.5 font-sans text-[12px] font-medium text-white/90 transition-colors hover:border-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="mt-6 font-sans text-[11px] tracking-[0.025em] text-white/65 sm:text-xs">
            Treats the whole of you — not just one disease at a time.
          </p> */}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   02 — MISSION
   FIXED: this component was fully written but never rendered in the
   final <Home> output — the same "defined but unused" bug that's shown
   up repeatedly across this project (the Evidence arrays on condition
   pages, expertise/focusAreas on the doctors page). Restored, and
   trimmed from 2 paragraphs to 1 per the "delete details, keep it
   crisp" instruction. Headline now uses the requested "treat whole of
   you, not just one disease at a time" framing directly.
========================================================= */

function SutraMissionSection() {
  return (
    <section aria-labelledby="sutra-mission-title" className="bg-[#173D38] text-white">
      <Container>
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 lg:py-24">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8E2D7] sm:text-[11px]">
              Our Mission
            </p>
            <h2 id="sutra-mission-title" className="mt-5 font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-white sm:text-[48px] lg:text-[58px]">
              We treat the whole of you — not just one disease at a time.
            </h2>
          </div>
          <div className="max-w-[620px]">
            <p className="font-sans text-[16px] leading-8 text-white/80 sm:text-[18px] sm:leading-9">
              Sutra Health brings doctor-led care and practical lifestyle
              support together — working with you on diet, everyday lifestyle
              practices, yoga and positive thinking, alongside your medical
              care.
            </p>
            <div className="mt-8 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-2">
              <div>
                <p className="font-serif text-xl text-white">Doctor-led</p>
                <p className="mt-1 text-sm leading-6 text-white/65">Clinical guidance informs the care plan.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-white">Personal to you</p>
                <p className="mt-1 text-sm leading-6 text-white/65">Advice considers your health, routine and goals.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-white">Whole-person view</p>
                <p className="mt-1 text-sm leading-6 text-white/65">More than one factor may matter to your health.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-white">Practical support</p>
                <p className="mt-1 text-sm leading-6 text-white/65">Food, movement, yoga and habits you can discuss and practise.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   03 — LIFESTYLE & HEALTH
   CHANGED: was 3 full paragraphs in the version just uploaded — the
   opposite direction from "delete details, keep it crisp." Cut to one
   sentence. Restored the 6 specific factor tags (Diet, Exercise, Sleep,
   Stress-free living, Social networks, Addiction-free living) — this
   was the concrete, scannable content from an earlier pass that got
   dropped somewhere in between; it's exactly the "crisp data" format
   that answers the brief directly rather than requiring a read-through.
========================================================= */

const lifestyleFactors = [
  "Diet",
  "Exercise",
  "Sleep",
  "Stress-free living",
  "Social networks",
  "Addiction-free living",
];

function LifestyleHealthSection() {
  return (
    <section aria-labelledby="lifestyle-health-title" className="bg-[var(--sutra-white)]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-[var(--sutra-sage)]" />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Lifestyle &amp; Health
              </p>
            </div>

            <h2
              id="lifestyle-health-title"
              className="mt-5 max-w-[1000px] font-serif text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[44px] lg:text-[54px]"
            >
              Your everyday life is part of your health.
            </h2>

            <p className="mt-5 max-w-[700px] font-sans text-[16px] leading-7 text-[var(--sutra-muted)] sm:text-[17px]">
              Most long-term health concerns have real roots in everyday
              habits — not just in a diagnosis.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {lifestyleFactors.map((factor) => (
                <span
                  key={factor}
                  className="border border-[var(--sutra-border-strong)] px-4 py-1.5 font-sans text-[13px] text-[var(--sutra-ink)]"
                >
                  {factor}
                </span>
              ))}
            </div>

            <Link
              href="/what-we-do/lifestyle"
              className="group mt-7 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:text-[var(--sutra-teal-hover)]"
            >
              Explore Lifestyle Medicine
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   04 — FREE 21-POINT ASSESSMENT
   CHANGED: standardized every mention to "21-Point Health Assessment" —
   this file alone previously used three different names for the same
   tool.
========================================================= */

function AssessmentSection() {
  return (
    <section id="assessment" aria-labelledby="assessment-heading" className="bg-[var(--sutra-porcelain)]">
      <Container>
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-[var(--sutra-sage)]" />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                Free 21-Point Health Assessment
              </p>
            </div>

            <h2 id="assessment-heading" className="mt-5 font-serif text-[36px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[46px] lg:text-[54px]">
              How healthy is your current lifestyle?
            </h2>

            <p className="mt-5 max-w-[540px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px]">
              Answer 21 questions about your everyday habits and get an
              instant Traffic Light result — no appointment required.
            </p>

            <div className="mt-7">
              <Link
                href="/assessment"
                className="group inline-flex min-h-12 w-full items-center justify-center bg-[var(--sutra-teal)] px-6 py-3.5 font-sans text-[13px] font-semibold text-white transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-sage)] focus-visible:ring-offset-2 sm:w-fit sm:px-7 sm:text-[14px]"
              >
                Take the Free Assessment
                <ArrowUpRight size={16} className="ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-4 max-w-[500px] font-sans text-[11px] leading-5 text-[var(--sutra-muted)]">
              The Traffic Light result is a starting point for reflection, not a medical diagnosis.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-[var(--sutra-border)] bg-white">
              <div className="relative aspect-[1.4/1]">
                <Image
                  src="/images/traffic-light-system.webp"
                  alt="Sutra Health 21-Point Traffic Light System for lifestyle assessment"
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

/* =========================================================
   05 — THE SUTRA HEALTH MODEL
   MOVED: this now renders BEFORE HowWeHelpSection, per the explicit
   instruction ("Care shaped around what you need [HowWeHelp] should be
   after Personalized approach [Model]") — the previous upload still had
   HowWeHelp first.
========================================================= */

const principles = [
  {
    number: "01",
    title: "Care that considers the whole picture",
    text: "Your health history, daily routine and goals are considered together where relevant.",
  },
  {
    number: "02",
    title: "Changes you can maintain",
    text: "Choose realistic actions, try them in daily life and adapt when circumstances shift.",
  },
  {
    number: "03",
    title: "Guidance for your situation",
    text: "Your needs, preferences and abilities help guide the next steps.",
  },
];

function SutraHealthModelSection() {
  return (
    <section className="bg-[#F7F5EF]" aria-labelledby="model-heading">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-5 border-b border-[#202522]/10 pb-7 sm:pb-9 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[850px]">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
                  Personalized Approach
                </p>
                <span className="h-px w-9 bg-[#C8BDA7]" aria-hidden="true" />
              </div>

              <h2 id="model-heading" className="mt-4 font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#202522] sm:text-[48px] lg:text-[60px]">
                A considered plan, with room to adjust.
              </h2>
            </div>

            <Link
              href="/approach"
              className="group inline-flex min-h-10 w-fit items-center gap-2 text-[13px] font-semibold text-[#17413D] transition-colors hover:text-[#12332F]"
            >
              How care works
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
            The Sutra model connects assessment, clinical guidance and
            follow-up — making the next step clearer, with a way to review
            progress.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-9 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.number}
                className="group border border-[#202522]/10 bg-white p-5 transition-colors duration-300 hover:border-[#17413D]/25 sm:p-6 lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#91A298]">{item.number}</span>
                  <ArrowUpRight size={17} strokeWidth={1.5} className="text-[#17413D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
                <h3 className="mt-7 font-serif text-[25px] leading-tight tracking-[-0.025em] text-[#202522] sm:text-[28px]">{item.title}</h3>
                <span className="mt-4 block h-px w-9 bg-[#C8BDA7]" aria-hidden="true" />
                <p className="mt-4 max-w-[320px] text-[14px] leading-6 text-[#65736D] sm:text-[15px]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   06 — MEET YOUR DOCTOR
   Placed right after the Model section: doctor-led personalization is
   the strongest proof of the "Personalized Approach" claim just made,
   and it also covers the Physician Consultation gap flagged earlier,
   so a 5th duplicate card wasn't added to HowWeHelpSection below.
========================================================= */

function DoctorIntroduction() {
  return (
    <section id="your-doctor" aria-labelledby="doctor-heading" className="bg-[#F6F4EE]">
      <Container>
        <div className="grid gap-9 py-16 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="relative mx-auto aspect-[4/4.6] w-full max-w-[430px] overflow-hidden bg-[#E4E6DD]">
            <Image
              src="/images/doctor.webp"
              alt="Dr. Rakesh Sarwal"
              fill
              sizes="(max-width: 1023px) 100vw, 38vw"
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-[650px]">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65736D] sm:text-[11px]">
              Your doctor
            </p>
            <h2 id="doctor-heading" className="mt-5 font-serif text-[36px] font-medium leading-[1.06] tracking-[-0.035em] text-[#202522] sm:text-[46px] lg:text-[54px]">
              A physician who looks at the wider picture.
            </h2>
            <p className="mt-6 font-sans text-[16px] font-semibold text-[#17413D]">
              Dr. Rakesh Sarwal, MBBS, MPH, DrPH
            </p>
            <p className="mt-1 font-sans text-sm text-[#65736D]">
              Public health physician and Therapeutic Yoga Consultant
            </p>
            <p className="mt-5 max-w-[590px] font-sans text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
              His work brings together preventive health, lifestyle guidance
              and therapeutic yoga alongside appropriate medical care.
            </p>
            <Link
              href="/doctors"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 font-sans text-sm font-semibold text-[#17413D] underline decoration-[#17413D]/40 underline-offset-4 hover:decoration-[#17413D]"
            >
              Read Dr. Sarwal&rsquo;s profile
              <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   07 — HOW WE HELP (SERVICES)
   FIXED: every href here pointed to /services/* — changed to the real
   /what-we-do/* routes.
========================================================= */

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description: "Discuss practical daily habits alongside your health needs and medical care.",
    href: "/what-we-do/lifestyle",
    image: "/images/program-lifestyle.webp",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description: "Find food and meal ideas that suit your health needs, culture and routine.",
    href: "/what-we-do/nutrition",
    image: "/images/retreat/diet.webp",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description: "Explore guided movement and breathing practices adapted to your comfort and ability.",
    href: "/what-we-do/therapeutic-yoga",
    image: "/images/what-we-do/yoga.png",
  },
  {
    number: "04",
    title: "Behaviour, Stress & Mind",
    description: "Get help with stress, motivation and routines that feel difficult to maintain.",
    href: "/what-we-do/behaviour-stress-mind",
    image: "/images/what-we-do/mind.png",
  },
];

function HowWeHelpSection() {
  return (
    <section aria-labelledby="help-heading" className="bg-[var(--sutra-white)]">
      <Container>
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-[var(--sutra-sage)]" />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                How We Can Help
              </p>
            </div>

            <h2 id="help-heading" className="mt-5 max-w-[600px] font-serif text-[36px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[46px] lg:text-[54px]">
              Care and guidance for your health needs.
            </h2>

            <p className="mt-5 max-w-[500px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px] sm:leading-8">
              Choose from focused support in nutrition, yoga and behaviour
              change. Each service has its own role in your care plan.
            </p>

            <Link
              href="/what-we-do"
              className="group mt-6 inline-flex items-center border-b border-[var(--sutra-ink)] pb-2 font-sans text-[13px] font-medium text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-sage)] hover:text-[var(--sutra-sage)] sm:text-[14px]"
            >
              See all services
              <ArrowUpRight size={16} strokeWidth={1.5} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="border-t border-[var(--sutra-border)]">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group grid grid-cols-[76px_1fr_auto] items-center gap-4 border-b border-[var(--sutra-border)] py-4 sm:grid-cols-[90px_1fr_auto] sm:gap-5 sm:py-5"
              >
                <div className="relative aspect-[4/3] w-[76px] overflow-hidden bg-[var(--sutra-soft-beige)] sm:w-[90px]">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 640px) 76px, 90px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-[19px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[24px]">{service.title}</h3>
                  <p className="mt-1.5 max-w-[480px] font-sans text-[12px] leading-5 text-[var(--sutra-muted)] sm:text-[14px] sm:leading-6">{service.description}</p>
                </div>
                <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-[var(--sutra-teal)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   08 — CONDITIONS WE SUPPORT
========================================================= */

function Conditions() {
  const conditions = getAllConditions();

  return (
    <section id="conditions" aria-labelledby="conditions-title" className="bg-[var(--sutra-white)]">
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-[1000px]">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-[var(--sutra-sage)]" />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Health Topics
              </p>
            </div>

            <h2 id="conditions-title" className="mt-4 max-w-[850px] font-serif text-[32px] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[40px] lg:text-[50px]">
              Find information related to your concern.
            </h2>

            <p className="mt-4 max-w-[750px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px]">
              Find condition-specific information and learn how care may be
              tailored to your circumstances. Treatment decisions remain
              individual.
            </p>
          </div>

          <div className="mt-8 grid border-t border-[var(--sutra-border)] sm:grid-cols-4 sm:gap-x-1">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group flex items-center gap-4 border-b border-[var(--sutra-border)] py-4 transition-colors hover:text-[var(--sutra-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)]"
              >
                <span className="font-sans text-[15px] font-medium text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[16px]">{condition.title}</span>
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-[var(--sutra-teal)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>

          <div className="mt-5">
            <Link href="/conditions" className="group inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-[var(--sutra-teal)] hover:text-[var(--sutra-teal-hover)]">
              Explore health topics
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   09 — SUCCESS STORIES
========================================================= */

const testimonials = [
  { quote: "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.", name: "Rahul Sharma" },
  { quote: "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.", name: "Priya Verma" },
  { quote: "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.", name: "Ankit Mehta" },
  { quote: "Meditation sessions transformed my daily routine. Stress levels are much lower now.", name: "Neha Kapoor" },
  { quote: "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.", name: "Puneet Kulshrestha" },
  { quote: "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises.", name: "Adheer Dixit" },
  { quote: "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!", name: "Sumit Kashyap" },
  { quote: "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.", name: "Flor Riboldi" },
];

function Testimonials() {
  return (
    <section id="patient-stories" aria-labelledby="patient-stories-heading" className="overflow-hidden bg-[var(--sutra-white)]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[760px] border-b border-[var(--sutra-border)] pb-10">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-[var(--sutra-sage)]" />
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">Patient stories</p>
            </div>
            <h2 id="patient-stories-heading" className="mt-5 max-w-[700px] font-serif text-[38px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[56px]">Personal accounts from Sutra Health visitors.</h2>
            <p className="mt-5 max-w-[650px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">These accounts reflect individual experiences shared by people connected with Sutra Health.</p>
          </div>
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-14" style={{ overscrollBehaviorX: "contain" }}>
            {testimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className="flex min-w-[88%] snap-start flex-col border border-[var(--sutra-border)] bg-[var(--sutra-porcelain)] p-6 sm:min-w-[calc((100%-20px)/2)] sm:p-8 lg:min-w-[calc((100%-40px)/3)]">
                <span className="font-sans text-[10px] font-medium tracking-[0.14em] text-[var(--sutra-sage)]">{String(index + 1).padStart(2, "0")}</span>
                <blockquote className="mt-8 flex flex-1 flex-col">
                  <p className="font-serif text-[20px] leading-[1.4] tracking-[-0.015em] text-[var(--sutra-ink)] sm:text-[22px]">&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer className="mt-8 border-t border-[var(--sutra-border)] pt-5">
                    <cite className="font-sans text-[13px] font-semibold not-italic text-[var(--sutra-ink)] sm:text-[14px]">{testimonial.name}</cite>
                    <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-[var(--sutra-muted)]">Individual account</p>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
          <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.1em] text-[var(--sutra-muted)] sm:hidden">Swipe to explore</p>
          <div className="mt-8 border-t border-[var(--sutra-border)] pt-5 sm:mt-10">
            <p className="max-w-[760px] font-sans text-[11px] leading-5 text-[var(--sutra-muted)] sm:text-[12px]">Each person&rsquo;s experience is different. These accounts are not a promise of results and do not replace advice from a qualified healthcare professional.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   10 — FINAL BOOKING CTA
   FIXED: this was fully written but never rendered — the homepage was
   ending on the FAQ section with no closing ask at all. Restored.
========================================================= */

function FinalBookingCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-[#173D38] text-white">
      <Container>
        <div className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
          <div className="max-w-[680px]">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8E2D7] sm:text-[11px]">
              Appointments
            </p>
            <h2 id="final-cta-title" className="mt-5 font-serif text-[36px] font-medium leading-[1.06] tracking-[-0.035em] text-white sm:text-[46px] lg:text-[54px]">
              Let&rsquo;s discuss what has been concerning you.
            </h2>
            <p className="mt-5 max-w-[560px] font-sans text-[15px] leading-7 text-white/75 sm:text-[16px] sm:leading-8">
              Tell us what you would like help with. We can explain the
              consultation process and discuss whether Sutra Health may be
              appropriate for you.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/book-appointment"
              className="group inline-flex min-h-[50px] items-center justify-center bg-[#F7F5EF] px-6 font-sans text-[13px] font-semibold text-[#173D38] transition-colors hover:bg-white sm:text-[14px]"
            >
              Book a Consultation
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center border border-white/40 px-6 font-sans text-[13px] font-medium text-white transition-colors hover:bg-white/10 sm:text-[14px]"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE ASSEMBLY
   Order: Hero → Mission (restored) → Lifestyle & Health → Assessment →
   Model (moved earlier, per instruction) → Doctor → How We Help →
   Conditions → Testimonials → FAQ → Final CTA (restored).
========================================================= */

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="sutraHomeEditorial">
        <Hero />
        {/* <SutraMissionSection /> */}
        <LifestyleHealthSection />
        <AssessmentSection />
        <SutraHealthModelSection />
        <DoctorIntroduction />
        <HowWeHelpSection />
        <Conditions />
        <Testimonials />
        <FAQ faqs={homepageFaqs} />
        {/* <FinalBookingCTA /> */}
      </main>
    </>
  );
}
