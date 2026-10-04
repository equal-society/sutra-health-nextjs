import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Physician Consultation | Sutra Health",
  description:
    "Meet with a physician to discuss a health concern, review relevant medical information and understand appropriate clinical next steps.",
  alternates: { canonical: `${SITE_URL}/services/physician-consultation` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Physician Consultation | Sutra Health",
    description:
      "A focused medical consultation for discussing health concerns and appropriate clinical next steps.",
    url: `${SITE_URL}/services/physician-consultation`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const discussionTopics = [
  "A current symptom, diagnosis or health concern",
  "Relevant medical history and current medicines",
  "Previous test reports or investigations",
  "Whether further investigations or referral may be appropriate",
  "Questions about existing treatment or medical advice",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Physician Consultation",
  url: `${SITE_URL}/services/physician-consultation`,
  description: metadata.description,
  isPartOf: { "@type": "WebSite", name: "Sutra Health", url: SITE_URL },
};

export default function PhysicianConsultationPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section
        aria-labelledby="consultation-title"
        className="relative isolate flex items-end overflow-hidden bg-[#173B36]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/mobile.webp')",
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10211E]/65" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/75">
            Physician consultation
          </p>
          <h1
            id="consultation-title"
            className="mt-4 max-w-3xl font-serif text-[42px] leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl"
          >
            Discuss your health concerns with a physician.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            A focused appointment to review relevant medical information and
            discuss suitable clinical next steps.
          </p>
          <div className="mt-7">
            <Link
              href="/book-appointment"
              className="inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white"
            >
              Book a consultation <span className="ml-3" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              The appointment
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-5xl">
              Time to focus on the medical question you have.
            </h2>
          </div>
          <div className="max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
            <p>
              Use the consultation to raise a health concern, clarify information
              about a condition or discuss your current care. The physician will
              consider the details you share and advise whether tests, treatment
              changes, referral or follow-up should be considered.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
              You may discuss
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Bring the questions that matter to you.
            </h2>
          </div>
          <ul className="max-w-3xl divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
            {discussionTopics.map((topic) => (
              <li key={topic} className="py-3.5 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Helpful to have with you
          </h2>
          <p className="max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
            If available, keep your recent reports, medicine list and relevant
            prescriptions ready. You do not need to arrange new tests before
            the appointment unless a clinician has advised you to do so.
          </p>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Book a physician consultation.
            </h2>
            <p className="mt-2 text-base leading-7 text-white/80">
              Discuss your concern and get guidance on clinically appropriate next steps.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex min-h-12 items-center self-start bg-white px-6 text-sm font-semibold text-[var(--sutra-teal)] lg:self-auto"
          >
            Book a consultation <span className="ml-3" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-5 py-4 text-xs leading-5 text-[var(--sutra-muted)] sm:px-8 lg:px-12">
        General information only. Investigations and treatment decisions depend
        on individual clinical assessment. Do not stop or change prescribed
        treatment without consulting your treating clinician.
      </p>
    </main>
  );
}
