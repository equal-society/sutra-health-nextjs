import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RetreatHeroSlider from "@/components/retreat/RetreatHeroSlider";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Wellness Retreat Near Delhi | Sutra Health",
  description:
    "Experience a restorative wellness retreat near Delhi with yoga, meditation, nutrition guidance, physician consultation and traditional wellness practices at Sutra Health Retreat in Faridabad.",
  alternates: {
    canonical: "https://lifequality.org.in/retreat-programs",
  },
  openGraph: {
    title: "Wellness Retreat Near Delhi | Sutra Health",
    description:
      "A restorative wellness retreat near Delhi combining yoga, meditation, nutrition guidance and personalised health support.",
    url: "https://lifequality.org.in/retreat-programs",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
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
  {
    value: "3",
    label: "Bedrooms",
  },
  {
    value: "6",
    label: "Beds",
  },
  {
    value: "3",
    label: "Bathrooms",
  },
  {
    value: "6",
    label: "Guests",
  },
];

const amenities = [
  "Rooftop terrace",
  "Free Wi-Fi",
  "Free parking",
  "Full kitchen",
];

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

const retreatJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lifequality.org.in/retreat-programs#webpage",
      url: "https://lifequality.org.in/retreat-programs",
      name: "Wellness Retreat Near Delhi | Sutra Health",
      description:
        "A restorative wellness retreat near Delhi combining yoga, meditation, nutrition guidance and personalised health support.",
      isPartOf: {
        "@type": "WebSite",
        name: "Sutra Health",
        url: "https://lifequality.org.in/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Sutra Health",
          item: "https://lifequality.org.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retreats",
          item: "https://lifequality.org.in/retreat-programs",
        },
      ],
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
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(retreatJsonLd),
        }}
      />

     {/* =========================================================
    HERO
========================================================= */}

  <section className="relative isolate overflow-hidden border-b border-[#173F35]/10">
  {/* Background */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#FAF8F1_0%,#F4F2E8_42%,#E7EFE7_100%)]"
  />

  {/* Organic gradient shapes */}
  <div
    aria-hidden="true"
    className="absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#A9C5AC]/35 blur-3xl sm:h-[520px] sm:w-[520px]"
  />

  <div
    aria-hidden="true"
    className="absolute -bottom-48 left-[38%] -z-10 h-[420px] w-[420px] rounded-full bg-[#D8C9A9]/25 blur-3xl"
  />

  <div
    aria-hidden="true"
    className="absolute -left-32 top-[28%] -z-10 h-[260px] w-[260px] rounded-full bg-[#C6D9CA]/25 blur-3xl"
  />

  {/* Fine editorial grid */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(#173F35 1px, transparent 1px), linear-gradient(90deg, #173F35 1px, transparent 1px)",
      backgroundSize: "56px 56px",
    }}
  />

  {/* Decorative rings */}
  <div
    aria-hidden="true"
    className="absolute right-[7%] top-[16%] -z-10 hidden h-44 w-44 rounded-full border border-[#173F35]/10 lg:block"
  />

  <div
    aria-hidden="true"
    className="absolute right-[10%] top-[21%] -z-10 hidden h-28 w-28 rounded-full border border-[#65966F]/15 lg:block"
  />

  <div
    aria-hidden="true"
    className="absolute bottom-[13%] left-[8%] -z-10 hidden h-20 w-20 rounded-full border border-[#173F35]/10 lg:block"
  />

  <Container>
    <div className="relative py-10 sm:py-14 lg:py-20">

      {/* Top navigation */}
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-medium text-[#65966F] transition-colors hover:text-[#173F35]"
        >
          <span aria-hidden="true">←</span>
          Sutra Health
        </a>

        <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#71817A] sm:block">
          Faridabad · Haryana
        </span>
      </div>

      {/* Hero */}
      <div className="mt-9 grid items-center gap-10 lg:mt-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">

        {/* =====================================================
            LEFT — CONTENT
        ===================================================== */}
        <div className="relative z-10">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#65966F]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Sutra Health Retreat
            </p>
          </div>

          <h1 className="mt-5 max-w-[650px] font-serif text-[48px] leading-[0.96] tracking-[-0.05em] text-[#123F35] sm:text-[62px] lg:text-[76px]">
            Wellness retreat
            <br />
            <span className="italic text-[#65966F]">
              near Delhi.
            </span>
          </h1>

          <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-[#687A73] sm:text-[17px] sm:leading-8">
            Step away from your usual routine and make space for rest,
            movement, nourishment and mindful living. Experience yoga,
            breathing, meditation and practical lifestyle guidance in a
            peaceful retreat setting in Faridabad.
          </p>

          {/* Emotional positioning */}
          <div className="mt-7 flex max-w-[540px] items-start gap-4">
            <div className="mt-2 h-8 w-px shrink-0 bg-[#65966F]/50" />

            <p className="font-serif text-[20px] leading-7 tracking-[-0.015em] text-[#173F35] sm:text-[22px]">
              Come for a pause.
              <br />
              <span className="italic">
                Leave with a clearer way forward.
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(23,63,53,0.12)] transition-all hover:-translate-y-0.5 hover:bg-[#12352D]"
            >
              Explore Retreat & Book
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#173F35]/15 bg-white/70 px-6 py-3.5 text-[13px] font-semibold text-[#173F35] backdrop-blur-sm transition-all hover:bg-white"
            >
              Ask About Your Stay
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile location */}
          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-[#71817A] sm:hidden">
            Faridabad · Haryana
          </p>
        </div>

        {/* =====================================================
            RIGHT — IMAGE
        ===================================================== */}
        <div className="relative">

          {/* Offset decorative frame */}
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-full w-full rounded-[30px] border border-[#65966F]/15 sm:-right-5 sm:-top-5"
          />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#E7EDE5] shadow-[0_25px_70px_rgba(23,63,53,0.10)]">
            <div className="aspect-[4/3] sm:aspect-[5/4]">
              <RetreatHeroSlider />
            </div>
          </div>

          
        </div>
      </div>

      {/* =====================================================
          BOTTOM STRIP
      ===================================================== */}
      <div className="mt-16 border-t border-[#173F35]/10 pt-6 sm:mt-20">
        <div className="grid gap-5 sm:grid-cols-3 sm:gap-8">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
              Slow down
            </p>

            <p className="mt-1.5 text-[12px] leading-5 text-[#687A73]">
              Create space away from everyday routines.
            </p>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
              Practice wellbeing
            </p>

            <p className="mt-1.5 text-[12px] leading-5 text-[#687A73]">
              Explore movement, food, breath and mindful living.
            </p>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
              Near Delhi
            </p>

            <p className="mt-1.5 text-[12px] leading-5 text-[#687A73]">
              A peaceful retreat setting in Faridabad, Haryana.
            </p>
          </div>

        </div>
      </div>

    </div>
  </Container>
</section>

      {/* =========================================================
          DIRECT ANSWER / SUMMARY
      ========================================================= */}

      <section className="border-b border-[#173F35]/10 bg-[#F0F4ED]">
        <Container>
          <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                In brief
              </p>

              <h2 className="mt-3 max-w-[430px] font-serif text-[35px] leading-[1.04] tracking-[-0.035em] sm:text-[46px]">
                What is the retreat experience?
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p className="text-[15px] leading-8 text-[#50645C] sm:text-[16px]">
                Sutra Health Retreat is a wellness-focused stay in Faridabad,
                near Delhi, where you can step away from everyday routines and
                spend time with practices that support healthier living.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#50645C] sm:text-[16px]">
                The retreat brings together yoga, Pranayama, meditation,
                nutrition guidance, physician consultation and traditional
                wellness practices. The experience can be approached according
                to your circumstances, interests and goals.
              </p>

              <div className="mt-7 border-t border-[#173F35]/10 pt-6">
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
                      className="flex items-start gap-3 text-[13px] leading-6 text-[#50645C]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                      />
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

      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-5 border-b border-[#173F35]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Why a retreat
                </p>

                <h2 className="mt-3 max-w-[650px] font-serif text-[38px] leading-[1.04] tracking-[-0.035em] sm:text-[50px]">
                  A little distance from routine can create space for attention.
                </h2>
              </div>

              <Link
                href="/approach"
                className="shrink-0 text-[13px] font-semibold text-[#173F35] underline decoration-[#65966F]/50 underline-offset-4 transition-colors hover:text-[#65966F]"
              >
                Explore the Sutra Health Method →
              </Link>
            </div>

            <div className="mt-8 divide-y divide-[#173F35]/10">
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
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#65966F]">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-[27px] leading-tight tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="max-w-[620px] text-[14px] leading-7 text-[#687A73]">
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

      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
              What you can experience
            </p>

            <h2 className="mt-3 max-w-[760px] font-serif text-[38px] leading-[1.04] tracking-[-0.035em] sm:text-[52px]">
              Wellness practices that work together as a retreat experience.
            </h2>

            <p className="mt-5 max-w-[700px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
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
          <div className="divide-y divide-[#173F35]/10">
            {retreatPractices.map((practice) => (
              <article
                key={practice.number}
                className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[90px_0.9fr_1.1fr] lg:gap-10 lg:py-18"
              >
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#65966F]">
                    {practice.number}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    {practice.category}
                  </p>

                  <h2 className="mt-3 font-serif text-[34px] leading-[1.02] tracking-[-0.035em] sm:text-[42px]">
                    {practice.title}
                  </h2>

                  <div className="mt-6 overflow-hidden rounded-[18px] bg-[#E9EFE7] lg:max-w-[430px]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={practice.image}
                        alt={practice.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-w-[620px] lg:pt-7">
                  <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                    {practice.description}
                  </p>

                  <div className="mt-6 border-t border-[#173F35]/10 pt-5">
                    <ul className="space-y-3">
                      {practice.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-[13px] leading-6 text-[#50645C]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/book-appointment"
                    className="mt-6 inline-flex text-[13px] font-semibold text-[#173F35] underline decoration-[#65966F]/50 underline-offset-4 transition-colors hover:text-[#65966F]"
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

      <section className="border-t border-[#173F35]/10 bg-[#F0F4ED]">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Coming alone?
              </p>

              <h2 className="mt-3 max-w-[500px] font-serif text-[38px] leading-[1.04] tracking-[-0.035em] sm:text-[50px]">
                You don't have to bring someone with you.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-[15px] leading-8 text-[#50645C]">
                A retreat can be a personal experience. If you are considering
                coming on your own, you can speak with the Sutra Health team
                before booking to understand the stay, accommodation,
                activities and support available.
              </p>

              <div className="mt-7 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
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
                    className="grid gap-2 py-5 sm:grid-cols-[190px_1fr] sm:gap-8"
                  >
                    <h3 className="text-[13px] font-semibold text-[#173F35]">
                      {item.title}
                    </h3>

                    <p className="text-[13px] leading-6 text-[#687A73]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
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

      <section className="border-t border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-5 border-b border-[#173F35]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Your stay
                </p>

                <h2 className="mt-3 max-w-[650px] font-serif text-[38px] leading-[1.04] tracking-[-0.035em] sm:text-[50px]">
                  A simple space to stay, rest and recharge.
                </h2>
              </div>

              <p className="max-w-[330px] text-[12px] leading-6 text-[#71817A]">
                The retreat offers a three-bedroom rooftop stay in Sector 46,
                Faridabad.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 border-y border-[#173F35]/10 sm:grid-cols-4">
              {stayDetails.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-7 ${
                    index > 0
                      ? "border-l border-[#173F35]/10 pl-5 sm:pl-7"
                      : ""
                  }`}
                >
                  <p className="font-serif text-[34px] tracking-[-0.03em] text-[#173F35]">
                    {item.value}
                  </p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#71817A]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">
                  Stay features
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="text-[13px] text-[#50645C]"
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

      <section className="border-t border-[#173F35]/10 bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  The setting
                </p>

                <h2 className="mt-3 max-w-[500px] font-serif text-[38px] leading-[1.04] tracking-[-0.035em] sm:text-[50px]">
                  Near Delhi, with space to slow down.
                </h2>
              </div>

              <div className="max-w-[700px]">
                <p className="text-[15px] leading-8 text-[#50645C]">
                  Sutra Health Retreat is located in Sector 46, Faridabad,
                  Haryana, near the Aravallis. The retreat setting includes a
                  rooftop space for selected activities and opportunities to
                  spend time outdoors.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-[#50645C]">
                  The surrounding area also offers opportunities for walks,
                  cycling, temples and parks, giving you options beyond the
                  retreat itself.
                </p>

                <div className="mt-7 border-t border-[#173F35]/10 pt-6">
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <p className="font-serif text-[24px]">Faridabad</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                        Haryana
                      </p>
                    </div>

                    <div>
                      <p className="font-serif text-[24px]">Sector 46</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                        Retreat location
                      </p>
                    </div>

                    <div>
                      <p className="font-serif text-[24px]">Aravallis</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                        Nearby
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex text-[13px] font-semibold text-[#173F35] underline decoration-[#65966F]/50 underline-offset-4 hover:text-[#65966F]"
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

      <section className="border-t border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Retreat FAQ
                </p>

                <h2 className="mt-3 font-serif text-[38px] leading-[1.04] tracking-[-0.035em] sm:text-[48px]">
                  Questions before you come.
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group py-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[14px] text-[#173F35]">
                      <span>{faq.question}</span>

                      <span
                        aria-hidden="true"
                        className="text-[20px] font-normal text-[#65966F] transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-[700px] pr-8 text-[13px] leading-7 text-[#687A73]">
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
      ========================================================= */}

      <section className="bg-[#173F35]">
        <Container>
          <div className="py-16 text-center sm:py-20 lg:py-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8]">
              Sutra Health Retreat
            </p>

            <h2 className="mx-auto mt-4 max-w-[780px] font-serif text-[40px] leading-[1.02] tracking-[-0.035em] text-[#FAF8F1] sm:text-[54px] lg:text-[62px]">
              Take a little time away from the usual.
            </h2>

            <p className="mx-auto mt-5 max-w-[600px] text-[14px] leading-7 text-[#C5D2CC] sm:text-[15px] sm:leading-8">
              Explore the retreat, understand what is included and speak with
              the Sutra Health team before planning your stay.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
              >
                Explore & Book Retreat
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Enquire on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>

              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}