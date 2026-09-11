import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Credibility from "@/components/hero/Credibility";
import Problem from "@/components/hero/Problem";
import Programs from "@/components/hero/Programs";
import Approach from "@/components/hero/Approach";
import HeroFramework from "@/components/hero/HeroFramework";
import Conditions from "@/components/hero/Conditions";
import Experts from "@/components/hero/Experts";
import Testimonials from "@/components/hero/Testimonials";
import FAQ from "@/components/shared/FAQ";
import BookingCTA from "@/components/hero/BookingCTA";

export const metadata: Metadata = {
  // Lightly adjusted for title/H1 alignment (report flagged: title said
  // "Integrative Lifestyle Healthcare", H1 said "understanding the whole
  // picture" - same underlying topic, but no shared language). Now bridges
  // both without being an exact duplicate of the H1.
  title: "Sutra Health | Understand Your Health, Build Lasting Habits",
  description:
    "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",
  alternates: { canonical: "https://lifequality.org.in/" },
  openGraph: {
    title: "Sutra Health | Understand Your Health, Build Lasting Habits",
    description:
      "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",
    url: "https://lifequality.org.in/",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    // TODO: replace with a purpose-built 1200x630 branded OG image once
    // designed. Using the real hero photo as a stand-in is better than no
    // image at all, but it wasn't cropped/composed for social previews.
    images: [
      {
        url: "https://lifequality.org.in/images/hero-desktop5.webp",
        width: 1200,
        height: 630,
        alt: "Doctor-led consultation at Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutra Health | Understand Your Health, Build Lasting Habits",
    description:
      "Doctor-led integrative lifestyle healthcare combining lifestyle medicine, nutrition counselling, therapeutic yoga, and practical behaviour change.",
    images: ["https://lifequality.org.in/images/hero-desktop5.webp"],
  },
  robots: { index: true, follow: true },
};

// Matches the FAQ component's actual default questions verbatim — schema
// must reflect what's really rendered on the page, not a separate list.
const homepageFaqs = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "It's healthcare built around your daily habits - food, movement, sleep, stress - rather than just prescriptions. It works alongside your existing medical care, not instead of it.",
  },
  {
    question: "Can yoga therapy be part of managing something like diabetes or blood pressure?",
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
      "@id": "https://lifequality.org.in/#organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
      // Entity disambiguation (GEO fix) — same verified details used on
      // the About page schema, kept consistent across the site rather
      // than each page declaring a different partial version.
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
      "@id": "https://lifequality.org.in/#website",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
      publisher: { "@id": "https://lifequality.org.in/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://lifequality.org.in/#webpage",
      name: "Sutra Health | Understand Your Health, Build Lasting Habits",
      url: "https://lifequality.org.in/",
      isPartOf: { "@id": "https://lifequality.org.in/#website" },
    },
    // Minimal breadcrumb for the homepage itself. Low individual value
    // (it's just "Home"), but cheap to add and closes the report's gap.
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lifequality.org.in/" },
      ],
    },
    // Matches the FAQ component's real rendered content.
    {
      "@type": "FAQPage",
      mainEntity: homepageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    // The six-stage Sutra Health Method genuinely is a step-by-step
    // process — HowTo is the correct schema type here, not a stretch.
    // Mirrors the same fix already applied to /approach/page.tsx.
    {
      "@type": "HowTo",
      name: "The Sutra Health Method",
      description:
        "The six-stage process Sutra Health uses to build a personalised, sustainable health plan.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Understand", text: "See the whole picture." },
        { "@type": "HowToStep", position: 2, name: "Identify", text: "Recognise the patterns." },
        { "@type": "HowToStep", position: 3, name: "Personalise", text: "Create a plan that fits real life." },
        { "@type": "HowToStep", position: 4, name: "Practise", text: "Turn understanding into action." },
        { "@type": "HowToStep", position: 5, name: "Sustain", text: "Build habits that can last." },
        { "@type": "HowToStep", position: 6, name: "Adapt", text: "Review and keep moving forward." },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <Programs />
        <Approach />
        <HeroFramework />
        <Conditions />
        <Experts />
        <Testimonials />
        <FAQ />
        <BookingCTA />
      </main>
    </>
  );
}