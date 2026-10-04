
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RetreatHeroSlider from "@/components/retreat/RetreatHeroSlider";
import Container from "@/components/shared/Container";

const siteUrl = "https://lifequality.org.in";
const pageUrl = `${siteUrl}/retreat-programs`;

const bookingUrl =
  "https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india";

const whatsappUrl =
  "https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20wellness%20retreat%20in%20Faridabad.";

export const metadata: Metadata = {
  title: "Wellness Retreat Near Delhi | Sutra Health",
  description:
    "Explore a wellness retreat in Faridabad near Delhi, with guided yoga, meditation, nutrition guidance, physician consultation and traditional wellness experiences.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Wellness Retreat Near Delhi | Sutra Health",
    description:
      "Explore guided wellness practices, practical health conversations and a residential retreat experience in Faridabad, near Delhi.",
    url: pageUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const experiences = [
  {
    number: "01",
    category: "Medical wellness",
    title: "Physician consultation",
    description:
      "Discuss your health history, current concerns and daily routine with a physician. The conversation can help you explore practical, lifestyle-focused guidance relevant to your needs.",
    points: [
      "Discussion of health and lifestyle",
      "Guidance based on individual needs",
      "An opportunity to raise ongoing health concerns",
    ],
    image: "/images/retreat/doctor.webp",
    imageAlt: "Physician consultation at Sutra Health Retreat",
  },
  {
    number: "02",
    category: "Nutrition",
    title: "Dietary advice",
    description:
      "Explore food choices and everyday nutrition habits in the context of your preferences, health needs and routine. The focus is on practical ideas you can consider beyond your stay.",
    points: [
      "Discussion of food habits and preferences",
      "Practical meal-planning ideas",
      "Nutrition suggestions for everyday life",
    ],
    image: "/images/retreat/diet.webp",
    imageAlt: "Nutrition and healthy food at Sutra Health Retreat",
  },
  {
    number: "03",
    category: "Traditional wellness",
    title: "Shirodhara",
    description:
      "Shirodhara is a traditional Ayurvedic practice involving a gentle stream of warm oil over the forehead. It is offered as a traditional relaxation experience.",
    points: [
      "Traditional Ayurvedic practice",
      "A dedicated session in a quiet setting",
      "Discuss suitability before participation",
    ],
    image: "/images/retreat/Shirodhara.webp",
    imageAlt: "Shirodhara wellness practice at Sutra Health Retreat",
  },
  {
    number: "04",
    category: "Companionship",
    title: "My Buddy",
    description:
      "A companionship option for guests who value conversation, friendly check-ins and encouragement to participate in suitable activities during their stay.",
    points: [
      "Friendly conversation and check-ins",
      "Companionship during the retreat",
      "Walks or activity support, as available",
    ],
    image: "/images/retreat/my-buddy.webp",
    imageAlt: "Companionship experience at Sutra Health Retreat",
  },
  {
    number: "05",
    category: "Music and movement",
    title: "Singing, Kirtan and dance",
    description:
      "Shared music and movement create opportunities to participate, express yourself and spend time with others. Activities depend on the retreat schedule.",
    points: [
      "Communal singing and Kirtan",
      "Expressive movement",
      "Group sessions when arranged",
    ],
    image: "/images/retreat/dance.png",
    imageAlt: "Singing and Kirtan experience at Sutra Health Retreat",
  },
  {
    number: "06",
    category: "Mental wellbeing",
    title: "Meditation",
    description:
      "Guided meditation offers time to slow down, direct your attention and reflect. Ask the team which practices are available during your planned stay.",
    points: [
      "Guided meditation",
      "Mindfulness and awareness",
      "Time for quiet reflection",
    ],
    image: "/images/what-we-do/mind.png",
    imageAlt: "Meditation practice at Sutra Health Retreat",
  },
  {
    number: "07",
    category: "Breathwork",
    title: "Pranayama",
    description:
      "Explore guided breathing practices and breath awareness as part of a mindful routine. The practice should be appropriate to your individual needs and comfort.",
    points: [
      "Nadi Shodhana",
      "Bhramari",
      "Guided breath awareness",
    ],
    image: "/images/retreat/pranayama.png",
    imageAlt: "Pranayama breathing practice at Sutra Health Retreat",
  },
  {
    number: "08",
    category: "Yoga and movement",
    title: "Yoga asana practice",
    description:
      "Take part in guided yoga movement selected around your needs and comfort, where appropriate. Ask about the session format and available options before booking.",
    points: [
      "Guided asana practice",
      "Movement adapted where appropriate",
      "Rooftop practice when scheduled and suitable",
    ],
    image: "/images/retreat/yoga-asana.png",
    imageAlt: "Yoga asana practice at Sutra Health Retreat",
  },
];

const stayDetails = [
  { value: "3", label: "Bedrooms" },
  { value: "6", label: "Beds" },
  { value: "3", label: "Bathrooms" },
  { value: "6", label: "Guest capacity" },
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
      "A wellness retreat offers a stay away from usual routines, with opportunities to enquire about practices such as yoga, meditation, breathing exercises and nutrition guidance. Sutra Health Retreat is listed in Faridabad, Haryana, near Delhi.",
  },
  {
    question: "Which practices can I ask about?",
    answer:
      "Experiences listed include physician consultation, dietary advice, Shirodhara, My Buddy companionship, singing and Kirtan, meditation, Pranayama and yoga asana. Confirm which options are scheduled and suitable for your dates.",
  },
  {
    question: "Can I visit on my own?",
    answer:
      "You can ask the team about a solo stay. Confirm room arrangements, scheduled activities and any assistance you may need before booking.",
  },
  {
    question: "Where is the retreat located?",
    answer:
      "The retreat is listed in Sector 46, Faridabad, Haryana, near the Aravallis. Contact Sutra Health for exact directions and travel details.",
  },
  {
    question: "Does the retreat replace medical treatment?",
    answer:
      "No. The retreat is a wellness experience, not a substitute for medical diagnosis or necessary treatment. Continue care from your treating clinician and discuss relevant health concerns before participating in activities.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Wellness Retreat Near Delhi | Sutra Health",
      description:
        "Explore a wellness retreat in Faridabad with yoga, meditation, nutrition guidance, physician consultation and traditional wellness experiences.",
      isPartOf: {
        "@type": "WebSite",
        name: "Sutra Health",
        url: `${siteUrl}/`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Sutra Health",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retreats",
          item: pageUrl,
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

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--sutra-teal)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)]";

const eyebrow =
  "text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--sutra-muted)] sm:text-[12px]";

export default function RetreatProgramsPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="border-b border-[var(--sutra-border)]">
        <RetreatHeroSlider />

        <Container>
          <div className="grid gap-5 py-6 sm:grid-cols-2 sm:gap-8 sm:py-8 lg:grid-cols-3">
            {[
              [
                "A pause",
                "Make room for time away from familiar routines.",
              ],
              [
                "Guided experiences",
                "Explore suitable practices for movement, food, breath and reflection.",
              ],
              [
                "Faridabad, Haryana",
                "A residential wellness retreat near Delhi.",
              ],
            ].map(([label, copy]) => (
              <div
                key={label}
                className="border-l-2 border-[var(--sutra-sage)] pl-4"
              >
                <p className={eyebrow}>{label}</p>
                <p className="mt-1.5 text-sm leading-6 text-[var(--sutra-muted)]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="grid gap-6 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
            <div>
              <p className={eyebrow}>01 · The retreat</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl">
                A wellness retreat near Delhi, with space to step away.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-[17px]">
                Sutra Health Retreat is a wellness-focused stay in Faridabad,
                near Delhi. Guests can enquire about guided activities and
                practical health conversations during their visit.
              </p>

              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-[17px]">
                Listed experiences include yoga, Pranayama, meditation, dietary
                advice, physician consultation and Shirodhara. Ask the team
                which options are available and appropriate for your dates.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Retreat approach */}
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>02 · A different pace</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              A change of pace, shaped around your stay.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Pause",
                "Make time for rest and a quieter daily rhythm.",
              ],
              [
                "02",
                "Participate",
                "Ask about movement, breathing and meditation sessions available during your visit.",
              ],
              [
                "03",
                "Connect",
                "Spend time independently or enquire about group activities and companionship.",
              ],
              [
                "04",
                "Reflect",
                "Reflect on everyday routines you may choose to carry home.",
              ],
            ].map(([number, title, copy]) => (
              <article
                key={number}
                className="border-t border-[var(--sutra-border-strong)] pt-4"
              >
                <span className="text-xs font-semibold tracking-widest text-[var(--sutra-sage)]">
                  {number}
                </span>
                <h3 className="mt-3 font-serif text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--sutra-muted)]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Experiences */}
      <section className="bg-[var(--sutra-pale-sage)] py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>03 · Retreat experiences</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              Activities to ask about before your visit.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--sutra-muted)]">
              The retreat lists several guided and traditional experiences.
              Confirm availability, session timing and suitability with the
              team before booking.
            </p>
          </div>

          <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item) => (
              <article
                key={item.number}
                className="group flex h-full flex-col overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-white)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  />

                  <span className="absolute left-4 top-4 bg-[var(--sutra-porcelain)] px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-teal)]">
                    {item.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className={eyebrow}>{item.category}</p>

                  <h3 className="mt-2 font-serif text-[26px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--sutra-muted)]">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[var(--sutra-border)] pt-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-6 text-[var(--sutra-muted)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-px w-3 shrink-0 bg-[var(--sutra-sage)]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex w-fit pt-5 text-sm font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)] underline-offset-4"
                  >
                    Ask about this experience{" "}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Solo stay */}
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <p className={eyebrow}>04 · Planning your stay</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
                Planning to come on your own?
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-[17px]">
                You can enquire about staying on your own. Before booking, confirm
                room arrangements, which activities are scheduled and what
                assistance may be available during your visit.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonPrimary} mt-6`}
              >
                Ask about a solo stay{" "}
                <span aria-hidden="true">↗</span>
              </a>

              <p className="mt-4 text-sm leading-6 text-[var(--sutra-muted)]">
                Prefer to review the listed retreat package?{" "}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)] underline-offset-4"
                >
                  View booking details
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Accommodation */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)] py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
            <div>
              <p className={eyebrow}>05 · Accommodation</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
                Accommodation for your visit.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[var(--sutra-muted)]">
              The listed residence is in Sector 46, Faridabad, with three
              bedrooms. Confirm current guest capacity, room arrangements
              and inclusions with the team before booking.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 border-y border-[var(--sutra-border-strong)] sm:grid-cols-4">
            {stayDetails.map((item, index) => (
              <div
                key={item.label}
                className={`py-5 sm:py-6 ${
                  index > 0
                    ? "border-l border-[var(--sutra-border)] pl-4 sm:pl-6"
                    : ""
                }`}
              >
                <p className="font-serif text-3xl text-[var(--sutra-ink)]">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--sutra-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="text-sm leading-7 text-[var(--sutra-muted)]"
              >
                {amenity}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <p className={eyebrow}>06 · Location</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
                Faridabad, near Delhi.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-[17px]">
                The retreat is listed in Sector 46, Faridabad, Haryana, near the
                Aravallis. Ask the team for directions and whether outdoor
                activities are planned for your dates.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)] underline-offset-4"
              >
                Get location details →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)] py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className={eyebrow}>07 · Common questions</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
                Before you plan your visit.
              </h2>
            </div>

            <div className="divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 text-[19px] leading-snug text-[var(--sutra-teal)] marker:hidden sm:text-[23px] [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-2xl font-light text-[var(--sutra-sage)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-3 max-w-3xl pr-8 text-base leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
