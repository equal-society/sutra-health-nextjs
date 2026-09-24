import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RetreatHeroSlider from "@/components/retreat/RetreatHeroSlider";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Wellness Retreat Near Delhi | Sutra Health",
  description:
    "Experience a restorative wellness retreat near Delhi with yoga, meditation, nutrition guidance, physician consultation and traditional wellness practices at Sutra Health Retreat in Faridabad.",
  alternates: {
    canonical: `${SITE_URL}/retreat-programs`,
  },
  /*
    ADDED: robots, Twitter card, and an OG image — all present on every
    other page on the site, all missing here specifically.
  */
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Wellness Retreat Near Delhi | Sutra Health",
    description:
      "A restorative wellness retreat near Delhi combining yoga, meditation, nutrition guidance and personalised health support.",
    url: `${SITE_URL}/retreat-programs`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/images/retreat/doctor.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health Retreat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Retreat Near Delhi | Sutra Health",
    description:
      "A restorative wellness retreat near Delhi combining yoga, meditation, nutrition guidance and personalised health support.",
    images: [`${SITE_URL}/images/retreat/doctor.webp`],
  },
};

const bookingUrl =
  "https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india";

const whatsappUrl =
  "https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20wellness%20retreat%20in%20Faridabad.";

const retreatPractices = [
  {
    number: "01",
    category: "Medical Wellness",
    title: "Physician Consultation",
    description:
      "A personal health session to discuss your health concerns, lifestyle, daily routine and goals, helping shape practical guidance for your stay.",
    points: [
      "Health history and lifestyle discussion",
      "Individualised health guidance",
      "Lifestyle-focused recommendations",
      "Opportunity to discuss ongoing health concerns",
    ],
    image: "/images/retreat/doctor.webp",
    imageAlt: "Physician consultation at Sutra Health Retreat",
  },
  {
    number: "02",
    category: "Nutrition",
    title: "Dietary Advice",
    description:
      "Practical nutrition guidance shaped around your health needs, food habits, preferences and everyday routine.",
    points: [
      "Personalised nutrition guidance",
      "Food and lifestyle discussion",
      "Practical meal planning",
      "Suggestions designed for everyday life",
    ],
    image: "/images/retreat/diet.webp",
    imageAlt: "Nutrition and healthy food at Sutra Health Retreat",
  },
  {
    number: "03",
    category: "Traditional Wellness",
    title: "Shirodhara",
    description:
      "A traditional Ayurvedic wellness practice involving the gentle flow of warm oil over the forehead, offered as part of the retreat experience.",
    points: [
      "Warm oil therapy",
      "Traditional Ayurvedic practice",
      "Quiet wellness setting",
      "Dedicated relaxation session",
    ],
    image: "/images/retreat/Shirodhara.webp",
    imageAlt: "Shirodhara wellness practice at Sutra Health Retreat",
  },
  {
    number: "04",
    category: "Support & Companionship",
    title: "My Buddy",
    description:
      "A supportive companionship option built around conversation, check-ins, gentle motivation and participation in retreat activities.",
    points: [
      "Regular check-ins",
      "Support and encouragement",
      "Conversation and companionship",
      "Support for walks and activities",
    ],
    image: "/images/retreat/my-buddy.webp",
    imageAlt: "Companionship experience at Sutra Health Retreat",
  },
  {
    number: "05",
    category: "Music & Movement",
    title: "Singing, Kirtan & Dance",
    description:
      "Shared music and movement experiences that create opportunities for connection, expression and participation during your stay.",
    points: [
      "Kirtan and communal singing",
      "Expressive movement",
      "Music and creative participation",
      "Rooftop sessions",
    ],
    image: "/images/retreat/Kirtan.webp",
    imageAlt: "Singing and Kirtan experience at Sutra Health Retreat",
  },
  {
    number: "06",
    category: "Mental Wellbeing",
    title: "Meditation",
    description:
      "Guided meditation practices that create space for stillness, awareness and reflection during your retreat.",
    points: [
      "Guided meditation",
      "Breath-based awareness",
      "Mindfulness practices",
      "Quiet retreat environment",
    ],
    image: "/images/retreat/meditation.webp",
    imageAlt: "Meditation practice at Sutra Health Retreat",
  },
  {
    number: "07",
    category: "Breathwork",
    title: "Pranayama",
    description:
      "Guided breathing practices that can become part of a mindful daily routine, with practices adapted to the individual where appropriate.",
    points: [
      "Nadi Shodhana",
      "Bhramari",
      "Guided breathing practice",
      "Breath awareness",
    ],
    image: "/images/retreat/pranayama.webp",
    imageAlt: "Pranayama breathing practice at Sutra Health Retreat",
  },
  {
    number: "08",
    category: "Movement & Yoga",
    title: "Yoga Asana Protocol",
    description:
      "A structured yoga practice shaped around individual needs and goals, combining appropriate asana practice with mindful movement.",
    points: [
      "Individualised yoga practice",
      "Movement suited to your needs",
      "Guided asana practice",
      "Rooftop practice when appropriate",
    ],
    image: "/images/retreat/yoga-asana.webp",
    imageAlt: "Yoga Asana practice at Sutra Health Retreat",
  },
];

const stayDetails = [
  { value: "3", label: "Bedrooms" },
  { value: "6", label: "Beds" },
  { value: "3", label: "Bathrooms" },
  { value: "6", label: "Guests" },
];

const amenities = ["Rooftop terrace", "Free Wi-Fi", "Free parking", "Full kitchen"];

const faqs = [
  {
    question: "What is a wellness retreat near Delhi?",
    answer:
      "A wellness retreat near Delhi gives you time away from your usual routine while bringing together practices such as yoga, meditation, nutrition guidance, breathing practices and other wellbeing experiences. Sutra Health Retreat is located in Faridabad, Haryana.",
  },
  {
    question: "What wellness practices are available at Sutra Health Retreat?",
    answer:
      "The retreat includes physician consultation, dietary advice, Shirodhara, My Buddy companionship, singing and Kirtan, meditation, Pranayama and Yoga Asana practice.",
  },
  {
    question: "Can I come to the retreat alone?",
    answer:
      "Yes. You do not need to bring a companion to enquire about or plan a retreat stay. If you are travelling alone, contact the Sutra Health team before booking so you can understand the accommodation, stay arrangements and available support.",
  },
  {
    question: "Where is Sutra Health Retreat located?",
    answer:
      "Sutra Health Retreat is located in Sector 46, Faridabad, Haryana, near the Aravallis. The setting provides access to rooftop space and opportunities for outdoor activities.",
  },
  {
    question: "Is the retreat a replacement for medical care?",
    answer:
      "No. The retreat is a wellness experience and can include physician guidance where appropriate. Lifestyle and wellness practices should complement appropriate medical care rather than replace necessary diagnosis or treatment.",
  },
];

/*
  CHANGED throughout this schema block:
  - WebPage's isPartOf now references the homepage's WebSite node by @id
    instead of re-declaring a separate inline WebSite object, matching the
    pattern used on every other page.
  - Breadcrumb's first item was named "Sutra Health" — every other page on
    the site uses "Home" for this crumb. Fixed for consistency.
  - ADDED an Accommodation node using the stay details (3 bedrooms, 6 beds,
    3 bathrooms, 6 guests) and amenities already rendered on the page but
    never fed into structured data — this is real content Google can use
    for enhanced results on "retreat near Delhi" style searches, and it
    was sitting unused.
*/
const retreatJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/retreat-programs#webpage`,
      url: `${SITE_URL}/retreat-programs`,
      name: "Wellness Retreat Near Delhi | Sutra Health",
      description:
        "A restorative wellness retreat near Delhi combining yoga, meditation, nutrition guidance and personalised health support.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retreats",
          item: `${SITE_URL}/retreat-programs`,
        },
      ],
    },
    {
      "@type": "Accommodation",
      name: "Sutra Health Retreat",
      description:
        "A three-bedroom rooftop retreat stay in Sector 46, Faridabad, near the Aravallis, offered alongside physician consultation, yoga, meditation and nutrition guidance.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sector 46",
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      numberOfRooms: 3,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 3,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 6,
      },
      amenityFeature: amenities.map((amenity) => ({
        "@type": "LocationFeatureSpecification",
        name: amenity,
        value: true,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RetreatProgramsPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-teal)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(retreatJsonLd),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="py-12 sm:py-16 lg:py-22 xl:py-24">
            <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Sutra Health Retreat
                </p>

                <h1 className="mt-5 max-w-[650px] font-serif text-[46px] font-medium leading-[0.98] tracking-[-0.04em] text-[var(--sutra-ink)] sm:text-[58px] md:text-[68px] lg:text-[74px] xl:text-[80px]">
                  Wellness retreat
                  <br />
                  <span className="text-[var(--sutra-teal)]">near Delhi.</span>
                </h1>

                <p className="mt-8 max-w-[600px] text-[17px] leading-8 text-[var(--sutra-muted)] sm:text-[19px] sm:leading-9">
                  Step away from your usual routine and make space for rest,
                  movement, nourishment and mindful living. Experience yoga,
                  breathing, meditation and practical lifestyle guidance in a
                  peaceful retreat setting in Faridabad.
                </p>

                {/* REMOVED: dead commented-out tagline block that was never
                    rendered ("Come for a pause. Leave with a clearer way
                    forward.") — cleaned up rather than left as inert code. */}

                <div className="mt-9 flex flex-wrap gap-3.5">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-none bg-[var(--sutra-teal)] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
                  >
                    Explore Retreat & Book
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-none border border-[var(--sutra-border-strong)] bg-[var(--sutra-white)] px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-pale-sage)]"
                  >
                    Ask About Your Stay
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:hidden">
                  Faridabad · Haryana
                </p>
              </div>

              <div className="min-w-0">
                <div className="overflow-hidden ">
                  <div className="relative aspect-[4/3] min-h-[300px] sm:aspect-[5/4] sm:min-h-0">
                    <RetreatHeroSlider />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-[var(--sutra-border)] pt-6 sm:mt-16">
              <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">Slow down</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-[var(--sutra-muted)]">Create space away from everyday routines.</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">Practice wellbeing</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-[var(--sutra-muted)]">Explore movement, food, breath and mindful living.</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">Near Delhi</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-[var(--sutra-muted)]">A peaceful retreat setting in Faridabad, Haryana.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          DIRECT ANSWER / SUMMARY
      ========================================================= */}

      <section className="border-b border-[var(--sutra-teal)]/10 bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                In brief
              </p>

              <h2 className="mt-3 max-w-[430px] font-serif text-[38px] leading-[1.06] tracking-[-0.035em] sm:text-[46px]">
                What is the retreat experience?
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px]">
                Sutra Health Retreat is a wellness-focused stay in Faridabad,
                near Delhi, where you can step away from everyday routines and
                spend time with practices that support healthier living.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px]">
                The retreat brings together yoga, Pranayama, meditation,
                nutrition guidance, physician consultation and traditional
                wellness practices. The experience can be approached according
                to your circumstances, interests and goals.
              </p>

              <div className="mt-7 border-t border-[var(--sutra-teal)]/10 pt-6">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Time away from everyday routines",
                    "Yoga and mindful movement",
                    "Meditation and breathing practices",
                    "Nutrition and lifestyle guidance",
                    "Traditional wellness experiences",
                    "Physician guidance where appropriate",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] leading-7 text-[var(--sutra-muted)]"
                    >
                      <span aria-hidden="true" className="mt-[10px] h-px w-5 shrink-0 bg-[var(--sutra-sage)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          WHY RETREAT
      ========================================================= */}

      <section className="border-b border-[var(--sutra-teal)]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-5 border-b border-[var(--sutra-teal)]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                  Why a retreat
                </p>

                <h2 className="mt-3 max-w-[650px] font-serif text-[42px] leading-[1.06] tracking-[-0.035em] sm:text-[50px]">
                  A little distance from routine can create space for attention.
                </h2>
              </div>

              <Link
                href="/approach"
                className="shrink-0 text-[12px] font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)]/50 underline-offset-4 transition-colors hover:text-[var(--sutra-sage)]"
              >
                Explore the Sutra Health Method →
              </Link>
            </div>

            <div className="mt-8 divide-y divide-[var(--sutra-teal)]/10">
              {[
                {
                  number: "01",
                  title: "Slow down",
                  text: "Step away from familiar schedules and create time for rest, reflection and intentional routines.",
                },
                {
                  number: "02",
                  title: "Practise",
                  text: "Experience movement, yoga, breathing, meditation, nutrition and other wellness practices in one setting.",
                },
                {
                  number: "03",
                  title: "Reconnect",
                  text: "Spend time with yourself and, where you choose, with other people through shared activities and companionship.",
                },
                {
                  number: "04",
                  title: "Take something home",
                  text: "Use the retreat as an opportunity to notice which practical habits and practices may fit your everyday life.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 py-7 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-start sm:gap-8"
                >
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[var(--sutra-sage)]">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-[27px] leading-tight tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="max-w-[620px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          PROGRAMS INTRO
      ========================================================= */}

      <section className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
              What you can experience
            </p>

            <h2 className="mt-3 max-w-[760px] font-serif text-[42px] leading-[1.06] tracking-[-0.035em] sm:text-[52px]">
              Wellness practices that work together as a retreat experience.
            </h2>

            <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px] sm:leading-8">
              The retreat includes a range of practices and experiences.
              Explore each one below and contact the team if you would like to
              understand what may be appropriate for your stay.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================
          PRACTICES — EDITORIAL ROWS
      ========================================================= */}

      <section>
        <Container>
          <div className="divide-y divide-[var(--sutra-teal)]/10">
            {retreatPractices.map((practice) => (
              <article
                key={practice.number}
                className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[64px_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:py-20"
              >
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[var(--sutra-sage)]">
                    {practice.number}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
                    {practice.category}
                  </p>

                  <h2 className="mt-3 font-serif text-[34px] leading-[1.02] tracking-[-0.035em] sm:text-[42px]">
                    {practice.title}
                  </h2>

                  <div className="group mt-6 overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)] lg:max-w-[430px]">
                    <div className="relative aspect-[16/9] min-w-0 overflow-hidden">
                      <Image
                        src={practice.image}
                        alt={practice.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-w-[620px] lg:pt-7">
                  <p className="text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px] sm:leading-8">
                    {practice.description}
                  </p>

                  <div className="mt-6 border-t border-[var(--sutra-teal)]/10 pt-5">
                    <ul className="space-y-3">
                      {practice.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-[14px] leading-7 text-[var(--sutra-muted)]"
                        >
                          <span aria-hidden="true" className="mt-[10px] h-px w-5 shrink-0 bg-[var(--sutra-sage)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/book-appointment"
                    className="mt-6 inline-flex text-[12px] font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)]/50 underline-offset-4 transition-colors hover:text-[var(--sutra-sage)]"
                  >
                    Ask about this experience →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          COMING ALONE
      ========================================================= */}

      <section className="border-t border-[var(--sutra-teal)]/10 bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                Coming alone?
              </p>

              <h2 className="mt-3 max-w-[500px] font-serif text-[42px] leading-[1.06] tracking-[-0.035em] sm:text-[50px]">
                You don&apos;t have to bring someone with you.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-[16px] leading-8 text-[var(--sutra-muted)]">
                A retreat can be a personal experience. If you are considering
                coming on your own, you can speak with the Sutra Health team
                before booking to understand the stay, accommodation,
                activities and support available.
              </p>

              <div className="mt-7 divide-y divide-[var(--sutra-teal)]/10 border-y border-[var(--sutra-teal)]/10">
                {[
                  {
                    title: "Before you arrive",
                    text: "Ask about the stay, available practices and anything you need to know before planning your visit.",
                  },
                  {
                    title: "During your stay",
                    text: "Participate at your own pace. Some experiences are shared, while others allow time for quiet and reflection.",
                  },
                  {
                    title: "If you have health concerns",
                    text: "Discuss relevant health information with the team so that appropriate guidance can be considered alongside necessary medical care.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-10"
                  >
                    <h3 className="text-[13px] font-semibold text-[var(--sutra-teal)]">
                      {item.title}
                    </h3>

                    <p className="text-[14px] leading-7 text-[var(--sutra-muted)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-none bg-[var(--sutra-teal)] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
              >
                Talk to Sutra Health
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          STAY
      ========================================================= */}

      <section className="border-t border-[var(--sutra-teal)]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-5 border-b border-[var(--sutra-teal)]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                  Your stay
                </p>

                <h2 className="mt-3 max-w-[650px] font-serif text-[42px] leading-[1.06] tracking-[-0.035em] sm:text-[50px]">
                  A simple space to stay, rest and recharge.
                </h2>
              </div>

              <p className="max-w-[330px] text-[13px] leading-7 text-[var(--sutra-muted)]">
                The retreat offers a three-bedroom rooftop stay in Sector 46,
                Faridabad.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 border-y border-[var(--sutra-teal)]/10 sm:grid-cols-4">
              {stayDetails.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-7 ${
                    index > 0
                      ? "border-l border-[var(--sutra-teal)]/10 pl-5 sm:pl-7"
                      : ""
                  }`}
                >
                  <p className="font-serif text-[34px] tracking-[-0.03em] text-[var(--sutra-teal)]">
                    {item.value}
                  </p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--sutra-muted)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-sage)]">
                  Stay features
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="text-[13px] text-[var(--sutra-muted)]"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}

      <section className="border-t border-[var(--sutra-teal)]/10 bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                  The setting
                </p>

                <h2 className="mt-3 max-w-[500px] font-serif text-[42px] leading-[1.06] tracking-[-0.035em] sm:text-[50px]">
                  Near Delhi, with space to slow down.
                </h2>
              </div>

              <div className="max-w-[700px]">
                <p className="text-[16px] leading-8 text-[var(--sutra-muted)]">
                  Sutra Health Retreat is located in Sector 46, Faridabad,
                  Haryana, near the Aravallis. The retreat setting includes a
                  rooftop space for selected activities and opportunities to
                  spend time outdoors.
                </p>

                <p className="mt-5 text-[16px] leading-8 text-[var(--sutra-muted)]">
                  The surrounding area also offers opportunities for walks,
                  cycling, temples and parks, giving you options beyond the
                  retreat itself.
                </p>

                <div className="mt-7 border-t border-[var(--sutra-teal)]/10 pt-6">
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <p className="font-serif text-[24px]">Faridabad</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[var(--sutra-muted)]">
                        Haryana
                      </p>
                    </div>

                    <div>
                      <p className="font-serif text-[24px]">Sector 46</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[var(--sutra-muted)]">
                        Retreat location
                      </p>
                    </div>

                    <div>
                      <p className="font-serif text-[24px]">Aravallis</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[var(--sutra-muted)]">
                        Nearby
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex text-[12px] font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)]/50 underline-offset-4 hover:text-[var(--sutra-sage)]"
                >
                  Contact Sutra Health for location details →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="border-t border-[var(--sutra-teal)]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                  Retreat FAQ
                </p>

                <h2 className="mt-3 font-serif text-[42px] leading-[1.06] tracking-[-0.035em] sm:text-[48px]">
                  Questions before you come.
                </h2>
              </div>

              <div className="divide-y divide-[var(--sutra-teal)]/10 border-y border-[var(--sutra-teal)]/10">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group py-5"
                  >
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-medium text-[var(--sutra-teal)]">
                      <span>{faq.question}</span>

                      <span
                        aria-hidden="true"
                        className="text-[20px] font-normal text-[var(--sutra-sage)] transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-[700px] pr-8 text-[13px] leading-7 text-[var(--sutra-muted)]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          FINAL CTA

          CHANGED: previously showed three equal-weight buttons —
          "Explore & Book Retreat", "Enquire on WhatsApp", and "Book a
          Consultation" — the last one routing to the physician
          consultation flow, not the retreat. That competed with the
          retreat booking action right at the page's strongest CTA.
          Demoted it to a small secondary text link below the two real
          retreat actions.
      ========================================================= */}

      <section className="bg-[var(--sutra-teal)]">
        <Container>
          <div className="py-16 text-center sm:py-20 lg:py-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-pale-sage)]">
              Sutra Health Retreat
            </p>

            <h2 className="mx-auto mt-4 max-w-[780px] font-serif text-[40px] leading-[1.02] tracking-[-0.04em] text-[var(--sutra-porcelain)] sm:text-[52px] lg:text-[60px]">
              Take a little time away from the usual.
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[var(--sutra-pale-sage)] sm:text-[15px] sm:leading-8">
              Explore the retreat, understand what is included and speak with
              the Sutra Health team before planning your stay.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none bg-[var(--sutra-porcelain)] px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-white"
              >
                Explore & Book Retreat
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Enquire on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <Link
              href="/book-appointment"
              className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Not ready for a retreat? Book a physician consultation instead
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}