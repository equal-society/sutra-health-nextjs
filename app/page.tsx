import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Conditions from "@/components/hero/Conditions";
import HealthBridge from "@/components/hero/HealthBridge";
import WhatWeDo from "@/components/hero/WhatWeDo";
import Experts from "@/components/hero/Experts";
import Assessment from "@/components/hero/Assessment";
import HowItWorks from "@/components/hero/HowItWorks";
import Testimonials from "@/components/hero/Testimonials";
import Resources from "@/components/hero/Resources";
import FAQ from "@/components/shared/FAQ";
import BookingCTA from "@/components/hero/BookingCTA";

const siteUrl = "https://lifequality.org.in";

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
      "Can yoga therapy be part of managing conditions such as diabetes or high blood pressure?",
    answer:
      "It can be one part of your overall care alongside your doctor, but it is not a replacement for medical treatment. Medication changes should always be discussed with your physician.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Sutra Health works with people across India. Online consultations are available for lifestyle medicine, nutrition counselling and yoga therapy. In-person sessions are also available in Faridabad.",
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
    /*
      ADDED: this FAQ directly addresses the pricing-transparency gap
      flagged in the audit. Replace the placeholder answer with real
      figures before publishing — do not ship with the bracketed text.
    */
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
            "Map what's actually happening — symptoms, daily routine, and any patterns a doctor should know about.",
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
  REORDERED from the original.

  Old order: Hero → HealthBridge → Conditions → WhatWeDo → Assessment →
  HowItWorks → Experts → Testimonials → Resources → FAQ → BookingCTA

  New order and why:
  1. Hero          — state the problem + model, one primary CTA
  2. Conditions    — let the visitor self-identify their problem immediately
  3. HealthBridge  — explain the model now that they've matched their problem
  4. WhatWeDo      — specific services, what's included
  5. Experts       — build doctor credibility BEFORE asking for contact info
  6. Assessment    — the lead-capture ask, now backed by trust
  7. HowItWorks    — process reassurance right after the ask
  8. Testimonials  — social proof reinforcing the decision
  9. Resources     — soft option for people not ready to book or assess
  10. FAQ          — objection handling right before the final CTA
  11. BookingCTA   — strongest, most direct ask, last
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
        <Conditions />
        <HealthBridge />
        <WhatWeDo />
        <Experts />
        <Assessment />
        <HowItWorks />
        <Testimonials />
        <Resources />
        {/*
          FIXED: previously rendered as <FAQ /> with no prop, which meant
          it fell back to FAQ.tsx's own hardcoded defaultFaqs — a
          different, partly contradictory list from homepageFaqs above
          (which is what actually generates the FAQPage schema). Passing
          homepageFaqs here means the visible FAQ and the schema Google
          reads are now guaranteed to match.
        */}
        <FAQ faqs={homepageFaqs} />
        <BookingCTA />
      </main>
    </>
  );
}