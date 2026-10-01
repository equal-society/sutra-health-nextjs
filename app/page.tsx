import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import LifestyleHealthSection from "@/components/hero/LifestyleHealthSection";
import ScienceSection from "@/components/hero/ScienceSection";
import AssessmentSection from "@/components/hero/AssessmentSection";
import HowWeHelpSection from "@/components/hero/HowWeHelpSection";
import SutraHealthModelSection from "@/components/hero/SutraHealthModelSection";
import Testimonials from "@/components/hero/Testimonials";
import FAQ from "@/components/shared/FAQ";

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
      </main>
    </>
  );
}