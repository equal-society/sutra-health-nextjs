import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "My Buddy | Peer Support for Positive Living | Sutra Health",
  description:
    "My Buddy is a peer-support initiative by EQUAL Society connecting people with caring companions for encouragement, healthy routines and emotional wellbeing.",
  alternates: {
    canonical: "https://lifequality.org.in/volunteer/my-buddy",
  },
  openGraph: {
    title: "My Buddy | Peer Support for Positive Living | Sutra Health",
    description:
      "A peer-support initiative connecting people with caring companions for encouragement, healthy routines and emotional wellbeing.",
    url: "https://lifequality.org.in/volunteer/my-buddy",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const volunteerForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtgQtU1eIuwNpmgpOVOrIi_fZzHv5rOxiJe-sH_SG3NUTRiQ/viewform";

const programmeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://lifequality.org.in/volunteer/my-buddy#webpage",
  name: "My Buddy",
  description:
    "A peer-support initiative connecting people with caring companions for encouragement, healthy routines and emotional wellbeing.",
  url: "https://lifequality.org.in/volunteer/my-buddy",
  isPartOf: {
    "@id": "https://lifequality.org.in/#website",
  },
  about: {
    "@type": "Thing",
    name: "Peer support and community wellbeing",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": "https://lifequality.org.in/#organization",
  name: "Sutra Health",
  legalName: "Effort For Quality of Life (EQUAL) Society",
  url: "https://lifequality.org.in/",
  sameAs: [
    "https://www.instagram.com/sutrahealth/",
    "https://www.youtube.com/@sutra-health",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lifequality.org.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Community & Volunteer",
      item: "https://lifequality.org.in/volunteer",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "My Buddy",
      item: "https://lifequality.org.in/volunteer/my-buddy",
    },
  ],
};

const lessons = [
  {
    number: "01",
    title: "Acceptance",
    description:
      "Accept the things that cannot be changed and focus attention on positive growth and emotional wellbeing.",
  },
  {
    number: "02",
    title: "Take responsibility",
    description:
      "Focus on what you can influence, create a supportive environment, and take responsibility for your choices and actions.",
  },
  {
    number: "03",
    title: "Organised surroundings",
    description:
      "Keeping your environment clean and organised may support mental clarity and a sense of emotional balance.",
  },
  {
    number: "04",
    title: "Hydration",
    description:
      "Staying adequately hydrated supports normal physical and cognitive function.",
  },
  {
    number: "05",
    title: "Self-care",
    description:
      "Some people use gentle oil massage as part of a relaxing self-care routine.",
  },
  {
    number: "06",
    title: "Energy & awareness",
    description:
      "Breathing and body-awareness practices may support relaxation and a sense of calm.",
  },
];

export default function MyBuddyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            programmeSchema,
            breadcrumbSchema,
          ]),
        }}
      />

      <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
        {/* HERO */}
        <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="py-8 sm:py-10">
              <nav
                aria-label="Breadcrumb"
                className="text-[13px] text-[var(--sutra-muted)]"
              >
                <Link href="/" className="hover:text-[var(--sutra-teal)]">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href="/volunteer"
                  className="hover:text-[var(--sutra-teal)]"
                >
                  Community &amp; Volunteer
                </Link>
                <span className="mx-2">/</span>
                <span className="text-[var(--sutra-ink)]">My Buddy</span>
              </nav>
            </div>

            <div className="grid gap-12 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pb-24 lg:pt-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Community initiative
                </p>

                <h1 className="mt-5 max-w-[850px] font-serif text-[50px] font-medium leading-[0.96] tracking-[-0.045em] text-[var(--sutra-ink)] sm:text-[68px] lg:text-[82px]">
                  My Buddy
                  <br />
                  <span className="text-[var(--sutra-teal)]">
                    positive living, together.
                  </span>
                </h1>

                <p className="mt-7 max-w-[690px] text-[17px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
                  A peer-support initiative connecting people with caring
                  companions who can offer encouragement around healthy daily
                  habits, positive outlooks and emotional wellbeing.
                </p>

                <p className="mt-4 max-w-[650px] text-[13px] leading-6 text-[var(--sutra-muted)]">
                  My Buddy is a peer-support initiative and is not a substitute
                  for professional medical or mental-health care.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={volunteerForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
                  >
                    Become a Buddy
                    <span aria-hidden="true">↗</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-[var(--sutra-border-strong)] px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-pale-sage)]"
                  >
                    Seeking a Buddy
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="flex items-end">
                <div className="w-full border-t border-[var(--sutra-border-strong)] pt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                    Peer support
                  </p>
                  <p className="mt-4 max-w-[430px] font-serif text-[30px] font-medium leading-[1.12] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[38px]">
                    Kindness, listening and healthy habits can create space for
                    encouragement and connection.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ABOUT */}
        <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-white)]">
          <Container>
            <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  About My Buddy
                </p>
                <h2 className="mt-4 max-w-[520px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[52px]">
                  Build emotional wellbeing together.
                </h2>
              </div>

              <div className="max-w-[720px] space-y-5 text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                <p>
                  My Buddy is a wellness initiative designed to help people
                  connect with positive companions who encourage healthy living,
                  emotional balance and supportive communication.
                </p>
                <p>
                  Through kindness, listening and healthy habits, buddies can
                  help create an environment of encouragement, positivity and
                  self-growth.
                </p>
                <p>
                  A positive attitude, healthy routine and supportive
                  environment may support emotional wellbeing and contribute to
                  a healthier quality of life.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* TWO PATHS */}
        <section className="bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="py-16 sm:py-20 lg:py-24">
              <div className="max-w-[720px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Join the initiative
                </p>
                <h2 className="mt-4 font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[52px]">
                  Two ways to take part.
                </h2>
              </div>

              <div className="mt-12 grid gap-0 border-y border-[var(--sutra-border-strong)] lg:grid-cols-2 lg:divide-x lg:divide-[var(--sutra-border-strong)]">
                <div className="py-9 lg:pr-12 lg:py-12">
                  <p className="text-[11px] font-semibold tracking-[0.15em] text-[var(--sutra-sage)]">
                    01
                  </p>
                  <h3 className="mt-4 font-serif text-[32px] font-medium tracking-[-0.025em]">
                    Become a Buddy
                  </h3>
                  <p className="mt-4 max-w-[520px] text-[15px] leading-8 text-[var(--sutra-muted)]">
                    Support others as they work towards positive habits,
                    confidence and healthier routines by being a caring and
                    supportive companion.
                  </p>
                  <a
                    href={volunteerForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-5 py-3 text-[13px] font-semibold text-white hover:bg-[var(--sutra-teal-hover)]"
                  >
                    Register ↗
                  </a>
                </div>

                <div className="border-t border-[var(--sutra-border-strong)] py-9 lg:border-t-0 lg:pl-12 lg:py-12">
                  <p className="text-[11px] font-semibold tracking-[0.15em] text-[var(--sutra-sage)]">
                    02
                  </p>
                  <h3 className="mt-4 font-serif text-[32px] font-medium tracking-[-0.025em]">
                    Looking for a Buddy
                  </h3>
                  <p className="mt-4 max-w-[520px] text-[15px] leading-8 text-[var(--sutra-muted)]">
                    Connect with someone who can offer encouragement as you
                    work towards healthy living, emotional wellbeing and a
                    positive mindset.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex border border-[var(--sutra-border-strong)] px-5 py-3 text-[13px] font-semibold text-[var(--sutra-teal)] hover:bg-[var(--sutra-pale-sage)]"
                  >
                    Contact Sutra Health →
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* EVERYDAY WELLBEING */}
        <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
          <Container>
            <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Mental wellness
                </p>
                <h2 className="mt-4 max-w-[560px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[50px]">
                  Everyday ideas for emotional wellbeing.
                </h2>
              </div>

              <div className="divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.number}
                    className="grid gap-3 py-6 sm:grid-cols-[48px_0.8fr_1.2fr] sm:gap-6"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[var(--sutra-sage)]">
                      {lesson.number}
                    </span>
                    <h3 className="font-serif text-[23px] font-medium leading-tight tracking-[-0.02em]">
                      {lesson.title}
                    </h3>
                    <p className="text-[14px] leading-7 text-[var(--sutra-muted)]">
                      {lesson.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* BOUNDARY */}
        <section className="bg-[var(--sutra-teal)] text-white">
          <Container>
            <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20 lg:py-24">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
                Important to know
              </p>
              <div>
                <h2 className="max-w-[760px] font-serif text-[38px] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[50px]">
                  Peer support can complement connection and encouragement,
                  but it does not replace professional care.
                </h2>
                <p className="mt-6 max-w-[700px] text-[15px] leading-8 text-white/70">
                  My Buddy is a peer-support initiative. If you need
                  professional medical or mental-health care, seek support from
                  an appropriately qualified professional.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-[var(--sutra-white)]">
          <Container>
            <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Take the first step
                </p>
                <h2 className="mt-4 max-w-[760px] font-serif text-[42px] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[56px]">
                  Be part of My Buddy.
                </h2>
                <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                  Whether you want to support someone or are looking for
                  encouragement yourself, start with a conversation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={volunteerForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-6 py-3.5 text-[13px] font-semibold text-white hover:bg-[var(--sutra-teal-hover)]"
                >
                  Become a Buddy ↗
                </a>
                <Link
                  href="/contact"
                  className="border border-[var(--sutra-border-strong)] px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] hover:bg-[var(--sutra-pale-sage)]"
                >
                  Contact Sutra Health →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* DISCLAIMER */}
        <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
          <Container>
            <p className="py-7 text-[11px] leading-5 text-[var(--sutra-muted)]">
              My Buddy is a peer-support and wellbeing initiative. It is not a
              substitute for professional medical or mental-health care.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
}
