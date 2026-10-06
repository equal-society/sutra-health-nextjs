import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Doctors & Health Experts",
  description:
    "Meet the practitioners and professionals represented by Sutra Health, including their qualifications, roles and areas of work.",

  alternates: {
    canonical: "https://lifequality.org.in/doctors",
  },

  openGraph: {
    title: "Doctors & Health Experts | Sutra Health",
    description:
      "Explore practitioners represented by Sutra Health, including their professional backgrounds and areas of work.",
    url: "https://lifequality.org.in/doctors",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://lifequality.org.in/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sutra Health — Doctors & Health Experts",
      },
    ],
  },
};

const experts = [
  {
    name: "Dr. Rakesh Sarwal",
    role: "MBBS, MPH, DrPH (Johns Hopkins), Therapeutic Yoga Consultant",
    description:
      "Public Health physician and Professor of Community Medicine, with academic and clinical work connected to the Integrated Health Clinic at ESIC Medical College & Hospital, Faridabad. His listed areas of work include lifestyle medicine, nutrition, yoga, health systems and public health policy.",
    image: "/images/doctor.webp",
    profileUrl: "https://academic.lifequality.org.in/",
    featured: true,
  },
  {
    name: "Mrs. Bimla Sarwal",
    role: "Wellness Practitioner",
    description:
      "More than 30 years of experience in wellness, healthy diet, yoga and natural living.",
    image: "/images/doctor-icon.webp",
    featured: false,
  },
  {
    name: "Dr. Yamini",
    role: "MBBS, MD",
    description:
      "Healthcare professional with a focus on maternal and family healthcare delivery.",
    image: "/images/doctor-icon.webp",
    featured: false,
  },
];

const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://lifequality.org.in/doctors#dr-rakesh-sarwal",
  name: "Dr. Rakesh Sarwal",
  jobTitle: "Public Health Physician and Therapeutic Yoga Consultant",
  description:
    "Public health physician and Therapeutic Yoga Consultant represented by Sutra Health.",
  image: "https://lifequality.org.in/images/doctor.webp",
  worksFor: {
    "@id": "https://lifequality.org.in/#organization",
  },
  url: "https://lifequality.org.in/doctors",
  sameAs: ["https://academic.lifequality.org.in/"],
};

export default function DoctorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doctorSchema),
        }}
      />

      <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative isolate min-h-[520px] overflow-hidden border-b border-[var(--sutra-border)] bg-[var(--sutra-ink)] sm:min-h-[600px] lg:min-h-[660px]">
          {/* Background Image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/nature.webp')",
            }}
          />

          {/* Dark Gradient Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#172B29]/90 via-[#172B29]/70 to-[#172B29]/30"
          />

          {/* Bottom Gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#172B29]/35 to-transparent"
          />

          <Container>
            <div className="flex min-h-[520px] items-center py-20 sm:min-h-[600px] sm:py-24 lg:min-h-[660px] lg:py-28">
              <div className="max-w-5xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D5C9AE] sm:text-xs">
                  Doctors &amp; experts
                </p>

                <h1
                  className="
                    mt-6
                    max-w-[920px]
                    font-serif
                    text-[44px]
                    font-medium
                    leading-[1.02]
                    tracking-[-0.04em]
                    text-white
                    sm:text-[58px]
                    md:text-[68px]
                    lg:text-[76px]
                    xl:text-[82px]
                  "
                >
                  Doctors &amp; Health Experts
                  <br />
                  <span className="text-[#D5C9AE]">at Sutra Health</span>
                </h1>

                <p className="mt-7 max-w-[680px] text-[16px] leading-8 text-white/85 sm:mt-8 sm:text-[18px] sm:leading-9">
                  Meet the practitioners and professionals represented by Sutra
                  Health, with their roles and areas of work in one place.
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
                  Medical &amp; academic leadership
                </p>

                <h2 className="mt-4 font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[52px]">
                  Dr. Rakesh Sarwal
                </h2>

                <p className="mt-3 max-w-[700px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-teal)]">
                  MBBS, MPH, DrPH (Johns Hopkins), Therapeutic Yoga Consultant
                </p>

                <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px]">
                  Public Health physician, Professor of Community Medicine and
                  Head of the Integrated Health Clinic at ESIC Medical College
                  &amp; Hospital, Faridabad, India.
                </p>

                <p className="mt-4 max-w-[650px] text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px]">
                  His academic work covers lifestyle medicine, nutrition, yoga,
                  health systems for universal health coverage and public health
                  policy.
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
            OTHER TEAM MEMBERS
        ===================================================== */}

        <section className="bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="max-w-[720px] py-14 sm:py-18 lg:py-22">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Our team
              </p>

              <h2 className="mt-4 font-serif text-[38px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[50px]">
                Additional practitioners
                <br />
                <span className="text-[var(--sutra-teal)]">
                  represented here.
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-[var(--sutra-muted)]">
                Two additional profiles are included here alongside the featured
                academic and medical profile.
              </p>
            </div>

            <div className="border-t border-[var(--sutra-border-strong)]">
              {[
                {
                  name: "Mrs. Bimla Sarwal",
                  role: "Wellness Practitioner",
                  description:
                    "Brings more than 30 years of experience in wellness, healthy diet, yoga and natural living, with an emphasis on sustainable health practices.",
                  image: "/images/doctor-icon.webp",
                },
                {
                  name: "Dr. Yamini",
                  role: "MBBS, MD",
                  description:
                    "Healthcare professional with a focus on maternal and family healthcare delivery.",
                  image: "/images/doctor-icon.webp",
                },
              ].map((expert, index) => (
                <article
                  key={expert.name}
                  className="grid gap-6 border-b border-[var(--sutra-border-strong)] py-8 sm:grid-cols-[190px_1fr] sm:gap-10 sm:py-10 lg:grid-cols-[220px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
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
                      {String(index + 2).padStart(2, "0")}
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
            RELATED INFORMATION
        ===================================================== */}

        <section className="bg-[var(--sutra-white)]">
          <Container>
            <div className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-22">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  Further information
                </p>

                <h2 className="mt-4 font-serif text-[38px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[50px]">
                  Related health information
                </h2>
              </div>

              <div className="max-w-[700px] divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border-strong)]">
                <Link
                  href="/approach"
                  className="flex min-h-14 items-center justify-between gap-4 py-4 text-[15px] font-medium text-[var(--sutra-ink)] hover:text-[var(--sutra-teal)]"
                >
                  Our Approach
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/services/physician-consultation"
                  className="flex min-h-14 items-center justify-between gap-4 py-4 text-[15px] font-medium text-[var(--sutra-ink)] hover:text-[var(--sutra-teal)]"
                >
                  Physician Consultation
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/services"
                  className="flex min-h-14 items-center justify-between gap-4 py-4 text-[15px] font-medium text-[var(--sutra-ink)] hover:text-[var(--sutra-teal)]"
                >
                  Explore Services
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-[var(--sutra-teal)]">
          <Container>
            <div className="max-w-[760px] py-14 sm:py-18 lg:py-22">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-pale-sage)]">
                Start a conversation
              </p>

              <h2 className="mt-4 font-serif text-[40px] font-medium leading-[1.03] tracking-[-0.035em] text-[var(--sutra-porcelain)] sm:text-[52px]">
                If you want to discuss a health concern,
                <br className="hidden sm:block" />
                use the appointment pathway.
              </h2>

              <p className="mt-5 max-w-xl text-[14px] leading-7 text-[var(--sutra-pale-sage)] sm:text-[15px] sm:leading-8">
                Review the appointment process and available options before
                deciding on your next step.
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
    </>
  );
}