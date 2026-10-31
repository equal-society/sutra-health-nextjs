import type { Metadata } from "next";
import Link from "next/link";
import RetreatHeroSlider from "@/components/retreat/RetreatHeroSlider";
import Container from "@/components/shared/Container";

const siteUrl = "https://lifequality.org.in";
const pageUrl = `${siteUrl}/retreat-programs`;

const bookingUrl =
  "https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india";

const whatsappUrl =
  "https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20wellness%20retreat%20in%20Delhi NCR, India.";

export const metadata: Metadata = {
  title: {
    absolute: "Wellness Retreat Near Delhi | Sutra Health",
  },

  description:
    "Wellness retreat in Delhi NCR, India near Delhi with guided Yoga, meditation, nutrition guidance and traditional wellness experiences.",

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Wellness Retreat Near Delhi | Sutra Health",
    description:
      "Wellness retreat in Delhi NCR, India near Delhi with guided Yoga, meditation, nutrition guidance and traditional wellness experiences.",
    url: pageUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/retreat/yoga.webp`,
        width: 1500,
        height: 1000,
        alt: "Yoga at the Sutra Health wellness retreat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wellness Retreat Near Delhi | Sutra Health",
    description:
      "Wellness retreat in Delhi NCR, India near Delhi with guided Yoga, meditation, nutrition guidance and traditional wellness experiences.",
    images: [`${siteUrl}/images/retreat/yoga.webp`],
  },
};

const services = [
  ["Physician Consultation", "/services/physician-consultation"],
  ["Nutrition Counselling", "/services/nutrition"],
  ["Shirodhara", "/services/shirodhara"],
  ["My Buddy", "/services/my-buddy"],
  ["Meditation", "/services/therapeutic-yoga/meditation"],
  ["Pranayama", "/services/therapeutic-yoga/pranayama"],
  [
    "Yoga Asana Protocol",
    "/services/therapeutic-yoga/yoga-asana-protocol",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Wellness Retreat Near Delhi | Sutra Health",

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
  ],
};

const eyebrow =
  "text-xs font-medium uppercase tracking-[0.14em] text-[var(--sutra-muted)] sm:text-[12px]";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]";

const textButton =
  "inline-flex min-h-12 items-center px-4 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:opacity-80";

export default function RetreatProgramsPage() {
  return (
    <main className="overflow-hidden text-[var(--sutra-ink)]">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="border-b border-[var(--sutra-border)]">
        <RetreatHeroSlider />

        <Container>
          <div className="grid gap-5 py-6 sm:grid-cols-3 sm:py-8">
            {[
              "Wellness stay near Delhi",
              "Guided Yoga, breath & reflection",
              "Delhi NCR, India, Haryana",
            ].map((item) => (
              <p
                key={item}
                className="border-l-2 border-[var(--sutra-sage)] pl-4 text-sm text-[var(--sutra-muted)]"
              >
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* THE RETREAT */}
      <section className="bg-[var(--sutra-pale-sage)] py-12 sm:py-16">
        <Container>
          <p className={eyebrow}>The retreat</p>

          <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
            A different pace for your wellbeing.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">
            Stay in Delhi NCR, India and explore guided wellness practices, practical
            health conversations and time away from your usual routine.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButton}
            >
              Ask a Question ↗
            </a>

            
          </div>
        </Container>
      </section>

      {/* SERVICES & EXPERIENCES */}
      <section className="py-12 sm:py-16">
        <Container>
          <p className={eyebrow}>Services & experiences</p>

          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Explore the retreat experience.
          </h2>

          <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {services.map(([title, href]) => (
              <Link
                key={href}
                href={href}
                className="border-t border-[var(--sutra-border-strong)] py-4 text-base font-semibold text-[var(--sutra-teal)] transition-colors hover:opacity-80"
              >
                {title} →
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* STAY */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)] py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className={eyebrow}>Stay</p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Simple residential accommodation.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--sutra-muted)]">
                Sector 46, Delhi NCR, India · near the Aravallis
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 border-t border-[var(--sutra-border-strong)] pt-5 sm:border-t-0 sm:pt-0">
              {[
                "3 Bedrooms",
                "6 Beds",
                "3 Bathrooms",
                "6 Guests",
              ].map((item) => (
                <p
                  key={item}
                  className="text-sm text-[var(--sutra-muted)]"
                >
                  {item}
                </p>
              ))}

              <p className="col-span-2 text-sm text-[var(--sutra-muted)]">
                Rooftop terrace · Wi-Fi · Parking · Full kitchen
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* BEFORE BOOKING */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 sm:items-end">
            <div>
              <p className={eyebrow}>Before booking</p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Check availability and suitability for your dates.
              </h2>
            </div>

            <p className="text-sm leading-7 text-[var(--sutra-muted)]">
              The retreat is a wellness experience and does not replace
              medical diagnosis or treatment. Ask the team about scheduled
              activities and any health concerns before participating.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className={textButton}>
              Contact Sutra Health →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}