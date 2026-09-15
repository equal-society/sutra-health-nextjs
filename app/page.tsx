import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Credibility from "@/components/hero/Credibility";
import Problem from "@/components/hero/Problem";
import Programs from "@/components/hero/WhatWeDo";
import Approach from "@/components/hero/HowItWorks";
import HeroFramework from "@/components/hero/Assessment";
import Conditions from "@/components/hero/Conditions";
import Experts from "@/components/hero/Experts";
import WhySutra from "@/components/hero/WhySutra";
import Testimonials from "@/components/hero/Testimonials";
import Resources from "@/components/hero/Resources";
import FAQ from "@/components/shared/FAQ";
import BookingCTA from "@/components/hero/BookingCTA";

const siteUrl = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Sutra Health | Understand the Whole Picture of Your Health",

  description:
    "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sutra Health | Understand the Whole Picture of Your Health",

    description:
      "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",

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

    title: "Sutra Health | Understand the Whole Picture of Your Health",

    description:
      "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",

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
      "It can be one part of your overall care, alongside your doctor - not a replacement for it. Any medication changes should always go through your physician.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. We work with people across India, not just Faridabad. Online consultations are available for lifestyle medicine, nutrition counselling, and yoga therapy. In-person sessions are also available in Faridabad.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Depends on you and your consistency - some people feel different within weeks, some things take longer. We won't promise a timeline nobody can guarantee.",
  },
  {
    question: "Is this right for everyone?",
    answer:
      "If you're managing a serious medical condition or on medication, talk to your doctor before starting. This is built to complement medical care, not replace it.",
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
    },

    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: "Sutra Health | Understand the Whole Picture of Your Health",
      url: siteUrl,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${siteUrl}/#breadcrumb`,
      },
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

    {
      "@type": "FAQPage",
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
      name: "The Sutra Health Method",
      description:
        "The six-stage process Sutra Health uses to build a personalised, sustainable health plan.",
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
        {/* 1. Introduction */}
        <Hero />

        {/* 2. Trust */}
        <Credibility />

        {/* 3. Problem / why this matters */}
        <Problem />

        {/* 4. Services */}
        <Programs />

        {/* 5. Process */}
        <Approach />

        {/* 6. Assessment / personalised framework */}
        <HeroFramework />

        {/* 7. Conditions */}
        <Conditions />

        {/* 8. Experts */}
        <Experts />

        {/* 9. Differentiation */}
        <WhySutra />

        {/* 10. Social proof */}
        <Testimonials />

        {/* 11. Health education */}
        <Resources />

        {/* 12. Common questions */}
        <FAQ />

        {/* 13. Final conversion */}
        <BookingCTA />
      </main>
    </>
  );
}