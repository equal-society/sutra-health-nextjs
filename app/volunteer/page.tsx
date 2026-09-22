import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Volunteer With Sutra Health | Community Health & Yoga",
  description:
    "Join Sutra Health's volunteer community in Faridabad and support yoga, wellness and community health activities.",
  alternates: {
    canonical: "https://lifequality.org.in/volunteer",
  },
  openGraph: {
    title: "Volunteer With Sutra Health | Community Health & Yoga",
    description:
      "Join the Sutra Health volunteer community and support yoga, wellness and community health activities.",
    url: "https://lifequality.org.in/volunteer",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const volunteerForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtgQtU1eIuwNpmgpOVOrIi_fZzHv5rOxiJe-sH_SG3NUTRiQ/viewform";

const awarenessCalendar = [
  ["4 Feb", "World Cancer Day"],
  ["24 Mar", "World TB Day"],
  ["7 Apr", "World Health Day"],
  ["5 May", "World Asthma Day"],
  ["17 May", "World Hypertension Day"],
  ["31 May", "World No Tobacco Day"],
  ["21 Jun", "International Yoga Day"],
  ["28 Jul", "World Hepatitis Day"],
  ["29 Sep", "World Heart Day"],
  ["10 Oct", "World Mental Health Day"],
  ["14 Nov", "World Diabetes Day"],
  ["1 Dec", "World AIDS Day"],
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": "https://lifequality.org.in/#organization",
  name: "Life Quality",
  alternateName: ["Sutra Health", "EQUAL Society - Effort For Quality of Life"],
  legalName: "Effort For Quality of Life (EQUAL) Society",
  url: "https://lifequality.org.in/",
  description:
    "Life Quality (Sutra Health) is a Faridabad-based not-for-profit society promoting health awareness, wellness, education, family welfare and quality of life through an integrative and community-focused approach.",
  slogan: "Promoting Healthier Living and Quality of Life",
  foundingDate: "1997-05-28",
  email: "info@lifequality.org.in",
  telephone: "+91-9013103676",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 229, Roof-Top, Sector 46",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    postalCode: "121010",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Health Awareness",
    "Yoga",
    "Pranayama",
    "Wellness Education",
    "Nutrition Education",
    "Community Health",
    "Healthy Living",
  ],
  medicalSpecialty: ["Lifestyle Medicine", "Integrative Medicine"],
  sameAs: [
    "https://www.linkedin.com/in/equal-society-ngo",
    "https://wa.me/919013103676",
    "https://in.pinterest.com/equal_society/",
    "https://www.instagram.com/sutrahealth/",
    "https://www.facebook.com/people/Sutrahealth-Equal/",
    "https://www.youtube.com/@sutra-health",
  ],
};

export default function VolunteerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-22 xl:py-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-xs">
                  Join our movement
                </p>

                <h1
                  className="
                    mt-5
                    max-w-[820px]
                    font-serif
                    text-[48px]
                    font-medium
                    leading-[0.96]
                    tracking-[-0.045em]
                    text-[var(--sutra-ink)]
                    sm:text-[62px]
                    lg:text-[78px]
                    xl:text-[84px]
                  "
                >
                  Heal
                  <span className="text-[var(--sutra-teal)]"> together.</span>
                  <br />
                  Grow together.
                </h1>

                <p className="mt-7 max-w-[650px] text-[17px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
                  Sutra Health is more than a clinic — it is a living movement.
                  Join our Faridabad-based volunteer community supporting yoga,
                  wellness and community health activities.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={volunteerForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
                  >
                    Volunteer with us
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://wa.me/919013103676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-[var(--sutra-border-strong)] px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-pale-sage)]"
                  >
                    Ask on WhatsApp
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="flex items-end">
                <div className="w-full border-t border-[var(--sutra-border-strong)] pt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                    Community work
                  </p>

                  <p className="mt-4 max-w-[430px] font-serif text-[30px] font-medium leading-[1.12] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[38px]">
                    Small contributions can help make healthier living more
                    accessible.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            IMPACT
        ===================================================== */}
        <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-white)]">
          <Container>
            <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-[var(--sutra-border-strong)]">
              {[
                ["12+", "Volunteers"],
                ["3", "Cities reached"],
                ["Weekly", "Free rooftop yoga — Sundays"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="border-b border-[var(--sutra-border)] py-8 last:border-0 sm:border-b-0 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0"
                >
                  <p className="font-serif text-[32px] font-medium tracking-[-0.03em] text-[var(--sutra-ink)] sm:text-[38px]">
                    {number}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* =====================================================
            WAYS TO CONTRIBUTE
        ===================================================== */}
        <section className="bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-22">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Ways to contribute
                </p>

                <h2 className="mt-4 max-w-[560px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[52px]">
                  Bring your time, skills or energy.
                </h2>
              </div>

              <div className="divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border-strong)]">
                {[
                  [
                    "01",
                    "Community health activities",
                    "Support awareness-led activities and help create welcoming spaces for healthier living.",
                  ],
                  [
                    "02",
                    "Yoga & wellbeing",
                    "Help with community yoga and wellbeing activities when opportunities are available.",
                  ],
                  [
                    "03",
                    "Health awareness",
                    "Help share useful health-awareness messages and support community participation.",
                  ],
                  [
                    "04",
                    "Behind the scenes",
                    "Contribute practical skills, coordination and other useful support that helps activities run smoothly.",
                  ],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="grid gap-4 py-7 sm:grid-cols-[56px_0.8fr_1.2fr] sm:items-start sm:gap-6"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[var(--sutra-sage)]">
                      {number}
                    </span>

                    <h3 className="font-serif text-[24px] font-medium leading-tight tracking-[-0.02em] text-[var(--sutra-ink)]">
                      {title}
                    </h3>

                    <p className="text-[14px] leading-7 text-[var(--sutra-muted)]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            AWARENESS CALENDAR
        ===================================================== */}
        <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
          <Container>
            <div className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-22">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Health awareness calendar
                </p>

                <h2 className="mt-4 max-w-[600px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[50px]">
                  Health conversations, throughout the year.
                </h2>

                <p className="mt-5 max-w-[470px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                  The previous Sutra Health site highlighted these annual health
                  awareness days as opportunities for community education and
                  participation.
                </p>
              </div>

              <div className="grid grid-cols-2 border-l border-t border-[var(--sutra-border-strong)] sm:grid-cols-3">
                {awarenessCalendar.map(([date, title]) => (
                  <div
                    key={title}
                    className="border-b border-r border-[var(--sutra-border-strong)] bg-[var(--sutra-porcelain)] p-5 sm:p-6"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">
                      {date}
                    </p>

                    <p className="mt-3 font-serif text-[17px] leading-tight tracking-[-0.01em] text-[var(--sutra-ink)]">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            JOIN
        ===================================================== */}
        <section className="bg-[var(--sutra-white)]">
          <Container>
            <div className="grid gap-8 py-14 sm:py-18 lg:grid-cols-[1fr_auto] lg:items-end lg:py-22">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Take the first step
                </p>

                <h2 className="mt-4 max-w-[720px] font-serif text-[42px] font-medium leading-[1.02] tracking-[-0.04em] text-[var(--sutra-ink)] sm:text-[56px]">
                  If you want to contribute, start with a conversation.
                </h2>

                <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                  Complete the volunteer form to share your interest, or contact
                  the team directly on WhatsApp.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={volunteerForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
                >
                  Open volunteer form ↗
                </a>

                <Link
                  href="/contact"
                  className="border border-[var(--sutra-border-strong)] px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-pale-sage)]"
                >
                  Contact Sutra Health →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
