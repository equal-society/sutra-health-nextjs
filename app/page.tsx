import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import LifestyleHealthSection from "@/components/hero/LifestyleHealthSection";
import ScienceSection from "@/components/hero/ScienceSection";
import AssessmentSection from "@/components/hero/AssessmentSection";
import HowWeHelpSection from "@/components/hero/HowWeHelpSection";
import SutraHealthModelSection from "@/components/hero/SutraHealthModelSection";
import Testimonials from "@/components/hero/Testimonials";
import FAQ from "@/components/shared/FAQ";
import BookingCTA from "@/components/hero/BookingCTA";

const siteUrl = "https://lifequality.org.in";

const BYLINE =
  "Your partner in recovery and wellness through science-based traditional wisdom";

export const metadata: Metadata = {
  title: "Doctor-Led Integrative Healthcare | Sutra Health",
  /*
    NOTE on the byline instruction: the full byline is NOT appended here.
    A ~13-word tagline repeated in every page's <title> would make titles
    longer and less unique across the site — the opposite of what we've
    fixed everywhere else (Google typically shows ~60 characters, and
    unique, page-specific titles rank better than a repeated slogan).
    The byline is instead: (1) the sole Hero subheading, verbatim, and
    (2) the Organization schema's `slogan` field below, which is the
    correct semantic home for a site-wide tagline. Still needed: your
    Header/Navbar component, to place it visually next to the logo.
  */
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
      "Can yoga therapy be part of managing conditions such as diabetes or high blood pressure?",
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
      "You can start by booking a consultation. We will discuss your health concerns, goals and current situation and help identify the most appropriate next step.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Physician consultations start at ₹[ADD STARTING PRICE HERE]. The exact cost depends on the type of consultation and any additional support you choose, such as nutrition or yoga therapy sessions.",
  },
];

const services = [
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
      /*
        ADDED: the byline as the Organization's `slogan` — schema.org's
        correct, semantic field for a company tagline. This is the
        site-wide, machine-readable home for it, separate from (and in
        addition to) its visible placement in the Hero and, once the
        Header component is available, next to the logo.
      */
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
    ...services.map((service) => ({
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
            "Turn the plan into manageable changes around food, movement, sleep, stress and daily habits.",
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

/*
  REBUILT to the 6 requested heads (numbered 01–06 in each section's own
  eyebrow), plus FAQ and a final booking CTA to close:

  01. Hero + LifestyleHealthSection — lifestyle shapes health, longevity,
      happiness; names the specific factors (diet, exercise, sleep,
      stress, social connection, addiction-free living)
  02. ScienceSection — why lifestyle medicine works, now backed by
      concrete, sourced study citations rather than a second abstract
      philosophy grid (see the comment inside ScienceSection.tsx for why
      this changed)
  03. AssessmentSection — the free 21-point self-assessment
  04. HowWeHelpSection — how we help you develop healthier habits, shown
      through the actual services
  05. SutraHealthModelSection — what makes the model different
      (Integration / Motivation / Personalisation)
  06. Testimonials — success stories
  07. FAQ — objection handling right before the final CTA
  Final — BookingCTA, the strongest, most direct ask, last

  Removed from this page: HealthBridge, Conditions, WhatWeDo (the original
  grid version), Experts, Resources. None of the 6 requested heads call
  for a standalone conditions grid, services grid, or doctor-bio section —
  HowWeHelpSection now carries the services message on its own, and doctor
  credibility is referenced within SutraHealthModelSection with a link to
  /doctors. These files are not deleted, just no longer imported here, in
  case they're still wanted elsewhere.
*/
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
        <LifestyleHealthSection />
        <ScienceSection />
        <AssessmentSection />
        <HowWeHelpSection />
        <SutraHealthModelSection />
        <Testimonials />
        <FAQ faqs={homepageFaqs} />
        <BookingCTA />
      </main>
    </>
  );
}