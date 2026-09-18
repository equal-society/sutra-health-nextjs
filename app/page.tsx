import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Conditions from "@/components/hero/Conditions";
import Experts from "@/components/hero/Experts";
import WhySutra from "@/components/hero/WhySutra";
import Testimonials from "@/components/hero/Testimonials";
import Resources from "@/components/hero/Resources";
import HealthBridge from "@/components/hero/HealthBridge";
import FAQ from "@/components/shared/FAQ";
import BookingCTA from "@/components/hero/BookingCTA";
import HowItWorks from "@/components/hero/HowItWorks";
import Assessment from "@/components/hero/Assessment";
import WhatWeDo from "@/components/hero/WhatWeDo";

const siteUrl = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Sutra Health | Doctor-Led Integrative Healthcare",

  description:
    "Sutra Health provides doctor-led integrative healthcare through lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour support.",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sutra Health | Doctor-Led Integrative Healthcare",

    description:
      "Doctor-led integrative healthcare through lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour support.",

    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: `${siteUrl}/images/hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Doctor-led consultation at Sutra Health",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sutra Health | Doctor-Led Integrative Healthcare",

    description:
      "Doctor-led integrative healthcare through lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour support.",

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
      "Can yoga therapy be part of managing something like diabetes or blood pressure?",
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
    question: "Is Sutra Health right for everyone?",
    answer:
      "Sutra Health is designed to complement appropriate medical care. If you have a serious medical condition or take medication, discuss new lifestyle or movement practices with your doctor.",
  },
];

const services = [
  {
    name: "Lifestyle Medicine",
    description:
      "Practical support around nutrition, movement, sleep, stress and everyday habits alongside appropriate medical care.",
    url: `${siteUrl}/what-we-do/lifestyle`,
  },
  {
    name: "Nutrition Counselling",
    description:
      "Personalised guidance on food and eating habits shaped around individual health needs and daily life.",
    url: `${siteUrl}/what-we-do/nutrition`,
  },
  {
    name: "Therapeutic Yoga",
    description:
      "Adapted yoga, movement, breathing and relaxation practices designed around individual needs.",
    url: `${siteUrl}/what-we-do/therapeutic-yoga`,
  },
  {
    name: "Behaviour & Mind Practices",
    description:
      "Practical support for habits, stress, routines and making health changes more sustainable.",
    url: `${siteUrl}/what-we-do/behaviour-mind`,
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
        "https://wa.me/919013103676",
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
        "Sutra Health provides doctor-led integrative healthcare through lifestyle medicine, nutrition counselling, therapeutic yoga and practical behaviour support.",
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

    /*
     * Homepage service entities
     * Helps search engines and AI systems understand
     * exactly what Sutra Health offers.
     */
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
      name: "The Sutra Health Method",
      description:
        "The six-stage process Sutra Health uses to build a personalised and sustainable health plan.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Understand",
          text: "See the whole picture.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Identify",
          text: "Recognise the patterns.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Personalise",
          text: "Create a plan that fits real life.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Practise",
          text: "Turn understanding into action.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Sustain",
          text: "Build habits that can last.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Adapt",
          text: "Review and keep moving forward.",
        },
      ],
    },
  ],
};

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
        <HealthBridge />
        <WhatWeDo />
        <WhySutra />
        <Assessment />
        <HowItWorks />
        <Conditions />
        <Experts />
        <Testimonials />
        <FAQ />
        <Resources/>
        <BookingCTA />
      </main>
    </>
  );
}