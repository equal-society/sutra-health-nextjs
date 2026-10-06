import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Health Guides | Practical Everyday Wellbeing",
  description:
    "Browse practical Sutra Health guides about mindset, sunlight, nature walks, movement and everyday wellbeing.",
  alternates: { canonical: `${SITE_URL}/resources/health-guides` },
  openGraph: {
    title: "Health Guides",
    description:
      "Practical health and wellbeing guides for everyday routines.",
    url: `${SITE_URL}/resources/health-guides`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health health guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Guides | Sutra Health",
    description: "Practical health and wellbeing guides for everyday routines.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};


const healthGuides = [
  {
    category: "Mind & Wellbeing",
    type: "Health Guide",
    title: "Positive Thinking: A More Constructive Mindset",
    description:
      "A practical guide to noticing thought patterns, making space for difficult emotions and choosing constructive responses in everyday life.",
    href: "/resources/health-guides/positive-thinking",
  },
  {
    category: "Sunlight & Wellbeing",
    type: "Health Guide",
    title: "Benefits of Soft Sun Rays",
    description:
      "Explore soft morning sunlight, sensible outdoor habits and general wellbeing without presenting sunlight as a treatment.",
    href: "/resources/health-guides/soft-sun-rays",
  },
  {
    category: "Movement & Nature",
    type: "Health Guide",
    title: "Nature Walks & Indoor Plants",
    description:
      "An educational guide to walking in natural settings, building a manageable walking habit and caring for familiar indoor plants.",
    href: "/resources/health-guides/nature-walks",
  },
];

export default function HealthGuidesPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden border-b border-[var(--sutra-border)] bg-[var(--sutra-ink)]">

        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/nature.webp')",
          }}
        />

        {/* Sutra overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[var(--sutra-ink)]/65"
        />

        {/* Readability gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--sutra-ink)]/90 via-[var(--sutra-ink)]/65 to-[var(--sutra-ink)]/25"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--sutra-ink)]/75 via-transparent to-[var(--sutra-ink)]/15"
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

         

          <div className="  items-center gap-12 py-16 sm:py-20 lg:gap-20 lg:py-24">

            <div className="max-w-[900px]">

              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="h-px w-10 bg-[var(--sutra-sage)]"
                  aria-hidden="true"
                />

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)] sm:text-[11px]">
                  Sutra Health · Health Guides
                </p>
              </div>

              {/* Heading */}
              <h1 className="font-[var(--font-serif)] text-[48px] leading-[0.96] tracking-[-0.045em] text-[var(--sutra-white)] sm:text-[64px] lg:text-[78px] xl:text-[84px]">
                Practical Health Guides
              </h1>

              {/* Intro */}
              <p className="mt-7 max-w-[700px] text-[16px] leading-7 text-[var(--sutra-white)]/85 sm:text-[18px] sm:leading-8">
                Explore practical health guides on mindset, morning sunlight,
                nature and everyday wellbeing. Choose the guide closest to
                what you want to understand.
              </p>

              {/* Guide count */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--sutra-white)]/65 sm:text-[11px]">
                <span>{healthGuides.length} health guides</span>

                <span
                  className="text-[var(--sutra-sage)]"
                  aria-hidden="true"
                >
                  •
                </span>

                <span>Everyday health &amp; wellbeing</span>
              </div>

            </div>

         

          </div>
        </div>
      </section>


    


      {/* =====================================================
          GUIDE COLLECTION
      ===================================================== */}
      <section className="border-b border-[var(--sutra-border)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-22">

            {/* Section heading */}
            <div className="flex flex-col gap-5 border-b border-[var(--sutra-border)] pb-7 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)] sm:text-[11px]">
                  Current collection
                </p>

                <h2 className="mt-3 font-[var(--font-serif)] text-[34px] leading-tight tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[44px]">
                  Explore the health guides.
                </h2>
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--sutra-muted)]">
                {healthGuides.length} guides
              </p>

            </div>


            {/* Guide list */}
            <div className="divide-y divide-[var(--sutra-border)]">

              {healthGuides.map((guide, index) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group block py-8 sm:py-10"
                >
                  <div className="grid gap-6 lg:grid-cols-[55px_0.85fr_1.15fr_44px] lg:items-center lg:gap-10">

                    {/* Number */}
                    <span className="font-[var(--font-serif)] text-[18px] text-[var(--sutra-sage)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    {/* Title */}
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--sutra-sage)]">
                          {guide.category}
                        </span>

                        <span
                          aria-hidden="true"
                          className="text-[var(--sutra-border-strong)]"
                        >
                          /
                        </span>

                        <span className="text-[10px] text-[var(--sutra-muted)]">
                          {guide.type}
                        </span>
                      </div>

                      <h3 className="mt-2 font-[var(--font-serif)] text-[24px] leading-tight tracking-[-0.025em] text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[28px]">
                        {guide.title}
                      </h3>
                    </div>


                    {/* Description */}
                    <p className="max-w-[560px] text-[13px] leading-6 text-[var(--sutra-muted)] sm:text-[14px] sm:leading-7">
                      {guide.description}
                    </p>


                    {/* Arrow */}
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--sutra-border-strong)] text-[var(--sutra-teal)] transition-all group-hover:translate-x-1 group-hover:border-[var(--sutra-teal)]"
                    >
                      <ArrowRight size={15} strokeWidth={1.6} />
                    </span>

                  </div>
                </Link>
              ))}

            </div>
          </div>
        </Container>
      </section>


     


      {/* =====================================================
          WHERE TO GO NEXT
      ===================================================== */}
      <section>
        <Container>
          <div className="py-14 sm:py-18 lg:py-22">

            <div className="max-w-[680px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)] sm:text-[11px]">
                Where to go next
              </p>

              <h2 className="mt-3 font-[var(--font-serif)] text-[34px] leading-tight tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[44px]">
                Use a guide as a starting point.
              </h2>

              <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                If you need more than general information, use the main Sutra
                Health pathways to explore clinical expertise, available
                services or an individual consultation.
              </p>
            </div>


            <div className="mt-10 divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border)]">

              {/* Doctors */}
              <Link
                href="/doctors"
                className="group flex items-center justify-between gap-6 py-6 sm:py-7"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
                    Medical expertise
                  </p>

                  <h3 className="mt-1 font-[var(--font-serif)] text-[22px] tracking-[-0.02em] text-[var(--sutra-ink)]">
                    Meet the Sutra Health doctors
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[var(--sutra-muted)]">
                    Explore the practitioners represented by Sutra Health and
                    their professional backgrounds.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-sage)] transition-transform group-hover:translate-x-1"
                />
              </Link>


              {/* Services */}
              <Link
                href="/services"
                className="group flex items-center justify-between gap-6 py-6 sm:py-7"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
                    Services
                  </p>

                  <h3 className="mt-1 font-[var(--font-serif)] text-[22px] tracking-[-0.02em] text-[var(--sutra-ink)]">
                    Explore health services
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[var(--sutra-muted)]">
                    Compare the available forms of support and decide where
                    your health question fits best.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-sage)] transition-transform group-hover:translate-x-1"
                />
              </Link>


              {/* Appointment */}
              <Link
                href="/book-appointment"
                className="group flex items-center justify-between gap-6 py-6 sm:py-7"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
                    Next step
                  </p>

                  <h3 className="mt-1 font-[var(--font-serif)] text-[22px] tracking-[-0.02em] text-[var(--sutra-ink)]">
                    Book a consultation
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[var(--sutra-muted)]">
                    Move from general information to a consultation when you
                    need an individual discussion.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-sage)] transition-transform group-hover:translate-x-1"
                />
              </Link>


              {/* Retreats */}
              <Link
                href="/retreat-programs"
                className="group flex items-center justify-between gap-6 py-6 sm:py-7"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
                    Retreat
                  </p>

                  <h3 className="mt-1 font-[var(--font-serif)] text-[22px] tracking-[-0.02em] text-[var(--sutra-ink)]">
                    Explore retreat programmes
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[var(--sutra-muted)]">
                    See the retreat experience, practical arrangements and
                    activities described for the programme.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-sage)] transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}