
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation`;
const BOOKING_URL = "/book-appointment";

const ONLINE_URL =
  "https://www.lybrate.com/faridabad/doctor/dr-rakesh-sarwal-preventive-medicine-specialist";

export const metadata: Metadata = {
  title: "Physician Consultation in Faridabad | Sutra Health",
  description:
    "Prepare for a physician consultation in Faridabad. Learn what to bring, what the visit covers and how to explore appointment options at Sutra Health.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Physician Consultation in Faridabad | Sutra Health",
    description:
      "Discuss a health concern, review available medical information and understand possible next steps with a physician.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const consultationSteps = [
  {
    number: "01",
    title: "Start with your concern",
    description:
      "Explain what has changed, when it began and how it is affecting you.",
  },
  {
    number: "02",
    title: "Review your medical background",
    description:
      "Discuss relevant diagnoses, previous treatment, medicines and supplements.",
  },
  {
    number: "03",
    title: "Look at available reports",
    description:
      "Review existing findings and consider whether further evaluation is needed.",
  },
  {
    number: "04",
    title: "Understand the way forward",
    description:
      "Discuss appropriate care, possible referrals or follow-up based on the assessment.",
  },
];

const preparation = [
  "Recent test reports, if available",
  "Current prescriptions or a list of medicines and supplements",
  "Relevant discharge summaries or previous medical notes",
  "Two or three questions you want to discuss",
];

const faqs = [
  {
    question: "Do I need to complete tests before visiting?",
    answer:
      "Not unless a clinician has already advised them. Bring reports you have, but do not delay necessary care because a report is unavailable.",
  },
  {
    question: "Can I discuss more than one health concern?",
    answer:
      "You can mention your concerns and identify which needs attention first. The time available and clinical priorities will guide how they are addressed.",
  },
  {
    question: "Will the physician discuss nutrition or daily habits?",
    answer:
      "Where relevant, the discussion may include food, physical activity, sleep or other lifestyle factors alongside medical care.",
  },
  {
    question: "How can I check online appointment availability?",
    answer:
      "Use the linked external physician profile to check current appointment availability, consultation mode and booking terms.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Physician Consultation | Sutra Health",
  url: PAGE_URL,
  description: String(metadata.description),
  isPartOf: {
    "@type": "WebSite",
    name: "Sutra Health",
    url: SITE_URL,
  },
  about: {
    "@type": "MedicalProcedure",
    name: "Physician consultation",
    procedureType: "https://schema.org/NoninvasiveProcedure",
  },
};

export default function PhysicianConsultationPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Hero */}
      <section
        aria-labelledby="consultation-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mobile.webp')" }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#10211E]/65"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/85">
            Physician consultation · Faridabad
          </p>

          <h1
            id="consultation-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-white"
          >
            Get clarity on a health concern.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Discuss your symptoms, medical history and available reports with
            a physician. Understand what may need attention and how to proceed.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href={BOOKING_URL}
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Request an appointment
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </Link>

            <a
              href={ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/60 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              View online appointment options
              <span className="ml-3" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* What happens */}
      <section aria-labelledby="visit-title" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              Your visit
            </p>

            <h2
              id="visit-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl"
            >
              What happens during a consultation?
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--sutra-muted)]">
              The discussion follows your concerns and relevant clinical
              information. The next step depends on the assessment rather than
              a fixed plan for every visitor.
            </p>
          </div>

          <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {consultationSteps.map((step) => (
              <article
                key={step.number}
                className="border-t border-[var(--sutra-border-strong)] py-6"
              >
                <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">
                  {step.number}
                </span>

                <h3 className="mt-2 font-serif text-2xl leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-lg leading-8 text-[var(--sutra-muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section
        aria-labelledby="prepare-title"
        className="bg-[var(--sutra-porcelain)]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              A little preparation
            </p>

            <h2
              id="prepare-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
            >
              Bring the information you already have.
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">
              These details can help make your medical history easier to
              discuss. Missing documents should not prevent you from seeking
              necessary care.
            </p>
          </div>

          <ul className="divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border)]">
            {preparation.map((item) => (
              <li
                key={item}
                className="flex gap-3 py-4 text-lg leading-8 text-[var(--sutra-muted)]"
              >
                <span
                  aria-hidden="true"
                  className="text-[var(--sutra-teal)]"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Physician details */}
      <section
        aria-labelledby="physician-title"
        className="bg-[var(--sutra-pale-sage)]"
      >
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              Physician
            </p>

            <h2
              id="physician-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
            >
              Dr. Rakesh Sarwal
            </h2>

            <p className="mt-2 text-lg text-[var(--sutra-muted)]">
              MBBS, MPH, DrPH
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[var(--sutra-muted)]">
              Dr. Rakesh Sarwal is listed for physician consultations at Life
              Quality in Faridabad.
            </p>

            <p className="mt-4 text-base leading-7 text-[var(--sutra-muted)]">
              The legacy page lists a suggested donation of ₹100 per
              consultation. Confirm the current amount and appointment
              arrangements before visiting.
            </p>

            <a
              href={ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center font-semibold text-[var(--sutra-teal)] underline underline-offset-4"
            >
              View physician profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* ABHA */}
      <section aria-labelledby="abha-title" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)]">
              Digital health identity
            </p>

            <h2
              id="abha-title"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
            >
              About ABHA
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--sutra-muted)]">
              An Ayushman Bharat Health Account provides a digital health
              identity that can support access to health records through
              participating digital health services.
            </p>
          </div>

          <a
            href="https://abha.abdm.gov.in/abha/v3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-teal)] px-6 font-semibold text-[var(--sutra-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)]"
          >
            Visit ABHA portal ↗
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="faq-title"
        className="bg-[var(--sutra-porcelain)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
          <h2
            id="faq-title"
            className="font-serif text-3xl leading-tight sm:text-4xl"
          >
            Before your appointment
          </h2>

          <div className="mt-6 max-w-4xl divide-y divide-[var(--sutra-border)] border-y border-[var(--sutra-border)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold leading-7 marker:content-none">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-[var(--sutra-teal)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-3 text-lg leading-8 text-[var(--sutra-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Arrange your consultation.
            </h2>

            <p className="mt-3 text-lg leading-8 text-white/90">
              Review the available appointment options before confirming.
            </p>
          </div>

          <Link
            href={BOOKING_URL}
            className="inline-flex min-h-12 w-full items-center justify-center bg-white px-6 font-semibold text-[var(--sutra-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            Request an appointment →
          </Link>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">
        This page provides general information and is not a diagnosis or
        emergency service. Treatment decisions require individual clinical
        assessment. Do not stop prescribed treatment without speaking with
        your treating clinician. For urgent symptoms, seek appropriate local
        medical care.
      </p>
    </main>
  );
}
