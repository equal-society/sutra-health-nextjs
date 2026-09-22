import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Doctors & Experts | Sutra Health",
  description:
    "Meet the doctors and wellness experts at Sutra Health, with expertise across preventive healthcare, lifestyle medicine, nutrition, yoga and whole-person wellbeing.",
  alternates: {
    canonical: "https://lifequality.org.in/doctors",
  },
  openGraph: {
    title: "Doctors & Experts | Sutra Health",
    description:
      "Meet the doctors and wellness experts supporting a personalized, whole-person approach to health.",
    url: "https://lifequality.org.in/doctors",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const experts = [
  {
    name: "Dr. Rakesh Sarwal",
    role: "MBBS, MPH, DrPH (Johns Hopkins), Therapeutic Yoga Consultant",
    description:
      "Public Health physician, Professor of Community Medicine and Head of the Integrated Health Clinic at ESIC Medical College & Hospital, Faridabad. His academic work spans lifestyle medicine, nutrition, yoga, health systems for universal health coverage and public health policy.",
    image: "/images/doctor.webp",
    profileUrl: "https://academic.lifequality.org.in/",
    featured: true,
  },
  {
    name: "Mrs. Bimla Sarwal",
    role: "Wellness Practitioner",
    description:
      "30+ years experience in wellness, healthy diet, yoga and natural living — inspiring communities toward sustainable health.",
    image: "/images/doctor-icon.webp",
    featured: false,
  },
  {
    name: "Dr. Yamini",
    role: "MBBS, MD",
    description:
      "Experienced healthcare professional with a focus on maternal and family healthcare delivery.",
    image: "/images/doctor-icon.webp",
    featured: false,
  },
];

const expertise = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Academic and clinical interests in lifestyle therapies and practical approaches to supporting healthier living and prevention.",
  },
  {
    number: "02",
    title: "Nutrition",
    description:
      "Research and academic work covering nutrition indicators, dietary diversity and nutrition-related public health.",
  },
  {
    number: "03",
    title: "Yoga",
    description:
      "Therapeutic Yoga is part of Dr. Sarwal's professional expertise and his broader lifestyle-health work.",
  },
  {
    number: "04",
    title: "Health Systems & Public Health Policy",
    description:
      "Work spanning health systems for universal health coverage and public health policy alongside clinical and academic interests.",
  },
];

const focusAreas = [
  "Lifestyle Medicine",
  "Preventive Healthcare",
  "Yoga Therapy",
  "Pranayama",
  "Nutrition Counselling",
  "Lifestyle Modification",
];

export default function DoctorsPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="max-w-5xl py-14 sm:py-18 lg:py-22 xl:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-xs">
              Doctors & experts
            </p>

            <h1
              className="
                mt-5
                max-w-[920px]
                font-serif
                text-[46px]
                font-medium
                leading-[0.98]
                tracking-[-0.04em]
                text-[var(--sutra-ink)]
                sm:text-[58px]
                md:text-[64px]
                lg:text-[76px]
                xl:text-[82px]
              "
            >
              Care guided by
              <br />
              <span className="text-[var(--sutra-teal)]">
                experience, evidence and understanding.
              </span>
            </h1>

            <p className="mt-7 max-w-[680px] text-[17px] leading-8 text-[var(--sutra-muted)] sm:mt-8 sm:text-[18px] sm:leading-9">
              Our team brings together medical knowledge, lifestyle medicine
              and wellness-focused expertise to support a more connected
              approach to health.
            </p>

            <div className="mt-7 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-10 w-px shrink-0 bg-[var(--sutra-sand)]"
              />
              <p className="max-w-[560px] text-[14px] leading-7 text-[var(--sutra-muted)] sm:text-[15px]">
                Our work brings together different areas of expertise around
                practical, whole-person support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FEATURED DOCTOR
      ===================================================== */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[360px_1fr] lg:gap-20 lg:py-22">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--sutra-border-strong)] bg-[var(--sutra-white)]">
              <Image
                src={experts[0].image}
                alt={experts[0].name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover object-center"
              />
            </div>

            <div className="max-w-[720px] self-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Medical & research leadership
              </p>

              <h2 className="mt-4 font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[52px]">
                Dr. Rakesh Sarwal
              </h2>

              <p className="mt-3 max-w-[700px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-teal)]">
                MBBS, MPH, DrPH (Johns Hopkins), Therapeutic Yoga Consultant
              </p>

              <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px]">
                Public Health physician, Professor of Community Medicine and
                Head of the Integrated Health Clinic at ESIC Medical College &
                Hospital, Faridabad, India.
              </p>

              <p className="mt-4 max-w-[650px] text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px]">
                His academic expertise includes Lifestyle Medicine, Nutrition,
                Yoga, Health Systems for Universal Health Coverage and Public
                Health Policy. His research interests explore the effectiveness
                of lifestyle therapies across chronic conditions.
              </p>

              <div className="mt-8 border-t border-[var(--sutra-border-strong)] pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                  Areas of expertise
                </p>

                <div className="mt-5 grid border-t border-[var(--sutra-border)] sm:grid-cols-2 sm:border-t-0">
                  {[
                    "Lifestyle Medicine",
                    "Nutrition",
                    "Yoga",
                    "Health Systems for UHC",
                    "Public Health Policy",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`border-b border-[var(--sutra-border)] py-3 text-[14px] text-[var(--sutra-ink)] ${
                        index % 2 === 0 ? "sm:mr-6" : ""
                      }`}
                    >
                      <span className="mr-3 text-[10px] font-semibold tracking-[0.14em] text-[var(--sutra-sage)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={experts[0].profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 border border-[var(--sutra-teal)] px-5 py-3 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-teal)] hover:text-white"
              >
                View academic profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}
      <section className="bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="max-w-[720px] py-14 sm:py-18 lg:py-22">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Our team
            </p>

            <h2 className="mt-4 font-serif text-[38px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[50px]">
              Different expertise.
              <br />
              <span className="text-[var(--sutra-teal)]">
                One connected approach.
              </span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-[var(--sutra-muted)]">
              Medical and wellness perspectives can work together to help
              people understand their health and build practical habits for
              everyday life.
            </p>
          </div>

          <div className="border-t border-[var(--sutra-border-strong)]">
            {experts.slice(1).map((expert, index) => (
              <article
                key={`${expert.name}-${expert.role}`}
                className="grid gap-6 border-b border-[var(--sutra-border-strong)] py-8 sm:grid-cols-[190px_1fr] sm:gap-10 sm:py-10 lg:grid-cols-[220px_1fr]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)] sm:aspect-[4/3]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="max-w-[680px] self-center">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--sutra-sage)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 font-serif text-[28px] font-medium leading-tight tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[34px]">
                    {expert.name}
                  </h3>

                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-teal)]">
                    {expert.role}
                  </p>

                  <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-[var(--sutra-muted)] sm:text-[15px] sm:leading-8">
                    {expert.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          RESEARCH & EXPERTISE
      ===================================================== */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-22">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Research & academic work
                </p>

                <h2 className="mt-4 font-serif text-[38px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[50px]">
                  Research across
                  <br />
                  <span className="text-[var(--sutra-teal)]">
                    lifestyle, nutrition and public health.
                  </span>
                </h2>
              </div>

              <div className="max-w-[720px]">
                <p className="text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px]">
                  Dr. Rakesh Sarwal&apos;s academic profile identifies Lifestyle
                  Medicine, Nutrition and Yoga as areas of expertise, alongside
                  Health Systems for Universal Health Coverage and Public Health
                  Policy.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px]">
                  His stated research interests include exploring the
                  effectiveness of lifestyle therapies across a spectrum of
                  chronic conditions. The selected work below provides a direct
                  route to the underlying academic publications.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--sutra-border-strong)]">
              {[
                {
                  number: "01",
                  title:
                    "A traffic light approach to lifestyle change",
                  description:
                    "Health building guideline for NCD outpatients in India · Journal of Family Medicine and Primary Care · 2026",
                  href: "https://academic.lifequality.org.in/publication/2026-a-traffic-light-approach-to-lifestyle-change-health-building",
                  label: "Read publication",
                },
                {
                  number: "02",
                  title:
                    "Remission of Irritable Bowel Syndrome through diet, lifestyle modification and yoga",
                  description:
                    "Case report exploring a combined lifestyle approach to IBS · 2026",
                  href: "https://www.preprints.org/manuscript/202603.0183",
                  label: "Read case report",
                },
                {
                  number: "03",
                  title:
                    "Dietary diversity and micronutrient deficiencies in India",
                  description:
                    "Academic work examining dietary diversity as a sustainable public-health approach · 2022",
                  href: "https://academic.lifequality.org.in/",
                  label: "Explore research",
                },
                {
                  number: "04",
                  title:
                    "Key nutrition indicators from NFHS-4 and NFHS-5",
                  description:
                    "Analysis of national and State/UT nutrition indicators and trends · 2022",
                  href: "https://academic.lifequality.org.in/publication/2022-analysis-of-key-nutrition-indicators-based-on-national-famil",
                  label: "Read publication",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="grid gap-4 border-b border-[var(--sutra-border-strong)] py-7 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-8 sm:py-8"
                >
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[var(--sutra-sage)]">
                    {item.number}
                  </span>

                  <div className="max-w-[760px]">
                    <h3 className="font-serif text-[25px] font-medium leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] sm:text-[29px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[var(--sutra-muted)] sm:text-[14px] sm:leading-7">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start text-[12px] font-semibold text-[var(--sutra-teal)] transition-colors hover:text-[var(--sutra-ink)] sm:mt-1"
                  >
                    {item.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[var(--sutra-teal)] px-5 py-3 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-teal)] hover:text-white"
              >
                View academic profile & publications
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          DOCTOR'S MESSAGE
      ===================================================== */}
      <section className="bg-[var(--sutra-teal)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-22">
            <div className="mx-auto max-w-[850px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-pale-sage)]">
                Doctor&apos;s perspective
              </p>

              <p className="mt-6 font-serif text-[30px] font-medium leading-[1.2] tracking-[-0.025em] text-[var(--sutra-porcelain)] sm:text-[38px] lg:text-[46px]">
                Dr. Sarwal&apos;s work is centred on prevention, healthy
                lifestyles and helping people take greater responsibility for
                their health.
              </p>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-pale-sage)]">
                Based on his academic profile
              </p>

              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-[var(--sutra-teal)]"
              >
                Read academic profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONNECTED APPROACH
      ===================================================== */}
      <section className="bg-[var(--sutra-white)]">
        <Container>
          <div className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-22">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                A connected team
              </p>

              <h2 className="mt-4 font-serif text-[38px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[50px]">
                Different expertise.
                <br />
                <span className="text-[var(--sutra-teal)]">
                  One whole-person approach.
                </span>
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px]">
                Health is influenced by many parts of everyday life. Our
                approach brings together lifestyle, nutrition, movement,
                breath and mind to create practical support around individual
                needs.
              </p>

              <div className="mt-7 border-t border-[var(--sutra-border-strong)]">
                {["Lifestyle", "Nutrition", "Yogasana", "Breath", "Mind"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-5 border-b border-[var(--sutra-border)] py-4"
                    >
                      <span className="w-8 text-[10px] font-semibold tracking-[0.14em] text-[var(--sutra-sage)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium text-[var(--sutra-ink)]">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[var(--sutra-teal)]">
        <Container>
          <div className="mx-auto max-w-[760px] py-14 text-center sm:py-18 lg:py-22">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-pale-sage)]">
              Start a conversation
            </p>

            <h2 className="mt-4 font-serif text-[40px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-porcelain)] sm:text-[52px]">
              Understand your health
              <br className="hidden sm:block" />
              with the right guidance.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-[var(--sutra-pale-sage)] sm:text-[15px] sm:leading-8">
              Start with a conversation about your health, lifestyle and goals
              and explore the next step that may be appropriate for you.
            </p>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex items-center gap-3 border border-[var(--sutra-porcelain)] bg-[var(--sutra-porcelain)] px-7 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-white"
            >
              Book an Appointment
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
