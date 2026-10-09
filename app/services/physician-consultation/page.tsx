import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/physician-consultation`;
const BOOKING_URL = "/book-appointment";

const ONLINE_URL =
  "https://www.lybrate.com/faridabad/doctor/dr-rakesh-sarwal-preventive-medicine-specialist";

export const metadata: Metadata = {
  title: "Physician Consultation in Faridabad | Sutra Health",
  description:
    "Book a physician consultation at Sutra Health in Faridabad. Discuss your symptoms, medical history and lifestyle, and agree on sensible next steps.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Physician Consultation in Faridabad | Sutra Health",
    description: "Discuss your health concerns, history and next steps with a physician.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physician Consultation in Faridabad | Sutra Health",
    description: "Discuss your health concerns, history and next steps with a physician.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

const covers = [
  { title: "Your concerns", text: "Current symptoms, questions about a condition or treatment, or uncertainty about where to start." },
  { title: "Your history", text: "Past illnesses, test results, medicines and relevant family history." },
  { title: "Your daily life", text: "Where relevant: food, activity, sleep and stress alongside medical care." },
];

const steps = [
  { title: "Discuss", text: "You explain your concerns, history and goals." },
  { title: "Assess", text: "The physician decides whether an examination or tests are needed." },
  { title: "Plan", text: "You agree on next steps. This may include a referral or follow-up." },
];

const faqs = [
  {
    question: "What should I bring?",
    answer:
      "Bring relevant reports, a list of your current medicines and a few notes on your main concerns and questions.",
  },
  {
    question: "Can I discuss an existing health condition?",
    answer:
      "Yes. You can explain your condition and history. The physician will decide what can be assessed in the appointment and whether further tests or a referral are needed.",
  },
  {
    question: "Will I get a diagnosis at every appointment?",
    answer:
      "Not necessarily. It depends on your concern and what the assessment finds. You may need tests, an examination or a referral first.",
  },
  {
    question: "Can lifestyle changes replace my medicine?",
    answer:
      "No. Lifestyle changes work alongside prescribed treatment. Speak to your treating clinician before stopping or changing any medicine.",
  },
  {
    question: "Is online consultation available?",
    answer:
      "Online appointment options are listed on a Lybrate profile. Check the profile for current availability and terms.",
  },
];

const readingLinks = [
  {
    number: "01",
    title: "What to expect",
    description: "How to prepare, what the consultation covers and what may happen afterwards.",
    href: "/services/physician-consultation/what-to-expect",
    linkLabel: "Read what to expect",
  },
  {
    number: "02",
    title: "Booking and online options",
    description: "Where to book, and how to check online appointment availability.",
    href: "/services/physician-consultation/appointment-options",
    linkLabel: "View booking options",
  },
  {
    number: "03",
    title: "Health-awareness tools",
    description: "Pulse, heart-rate variability and brain-health tools, and why they do not replace an assessment.",
    href: "/services/physician-consultation/health-awareness-tools",
    linkLabel: "Explore the tools",
  },
  {
    number: "04",
    title: "ABHA and digital health records",
    description: "What an Ayushman Bharat Health Account is and where to create one.",
    href: "/services/physician-consultation/abha",
    linkLabel: "Learn about ABHA",
  },
  {
    number: "05",
    title: "Meet the physician",
    description: "Read about the physician you will consult.",
    href: "/doctors",
    linkLabel: "View physician profile",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Physician Consultation in Faridabad | Sutra Health",
      description: String(metadata.description),
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "Service",
      name: "Physician Consultation",
      serviceType: "Physician consultation",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Faridabad" },
      provider: { "@type": "Organization", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Physician Consultation", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function PhysicianConsultationPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Hero: approved copy and layout unchanged. Only the arrow emoji was replaced with the plain arrow used elsewhere. */}
      <section
        aria-labelledby="consultation-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/physician-consulation.jpg')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10211E]/70" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/85">Physician consultation · Faridabad</p>

          <h1
            id="consultation-title"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-white"
          >
            Not sure what is affecting your health or where to begin?
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            A physician consultation gives you space to discuss your concerns, history and next steps.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href={BOOKING_URL}
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Book a consultation
              <span className="ml-3" aria-hidden="true">→</span>
            </Link>

            <a
              href={ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center border border-white/60 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              View online appointment options
              <span className="ml-3" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="explore-consultation" aria-labelledby="overview-title" className="bg-white">
        <Container>
          <div className="grid gap-6 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">The service</p>
              <h2 id="overview-title" className="mt-4 max-w-lg font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                A conversation about your health, led by a physician.
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                A physician consultation is a chance to talk through a health concern, your history and your questions with a doctor. It is a good first step if you have symptoms, take regular medicines, or are unsure which service you need.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                What happens next depends on your situation and the physician's judgement. The consultation does not promise a diagnosis or a particular treatment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="covers-title" className="bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">What you can discuss</p>
              <h2 id="covers-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">Bring what is on your mind.</h2>
            </div>
            <div className="mt-8 grid gap-x-10 sm:grid-cols-3">
              {covers.map((item) => (
                <article key={item.title} className="border-t border-[var(--sutra-border-strong)] py-5">
                  <h3 className="font-serif text-xl sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{item.text}</p>
                </article>
              ))}
            </div>
            <ol className="mt-10 grid gap-x-10 sm:grid-cols-3">
              {steps.map((step, i) => (
                <li key={step.title} className="border-t border-[var(--sutra-border-strong)] py-5">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">Step {i + 1}</span>
                  <h3 className="mt-2 font-serif text-xl sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section aria-labelledby="reading-title" className="bg-white">
        <Container>
          <div className="max-w-3xl pb-8 pt-14 sm:pt-18 lg:pt-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Read more</p>
            <h2 id="reading-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">More about consultations</h2>
          </div>
          <div className="border-t border-[var(--sutra-border-strong)] pb-14 sm:pb-18 lg:pb-24">
            {readingLinks.map((item) => (
              <article key={item.number} className="grid gap-4 border-b border-[var(--sutra-border-strong)] py-6 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-7">
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--sutra-border-strong)] font-serif text-lg text-[var(--sutra-teal)]">{item.number}</span>
                <div>
                  <h3 className="font-serif text-xl leading-snug sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)] sm:text-base sm:leading-8">{item.description}</p>
                </div>
                <Link href={item.href} className="inline-flex min-h-11 items-center gap-2 justify-self-start text-sm font-bold text-[var(--sutra-teal)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)] sm:justify-self-end">
                  {item.linkLabel} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-title" className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Common questions</p>
              <h2 id="faq-title" className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Before you book</h2>
            </div>
            <div className="mt-7 max-w-4xl divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-7 marker:content-none sm:text-lg">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="text-xl text-[var(--sutra-teal)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-3 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="booking-title" className="bg-[var(--sutra-teal)] text-white">
        <Container>
          <div className="flex flex-col gap-6 py-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">Take the next step</p>
              <h2 id="booking-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">Have questions about your health?</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">Book an appointment and bring your questions. You can confirm fees and booking details when you book.</p>
            </div>
            <Link href={BOOKING_URL} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-white px-6 py-3 text-sm font-bold text-[var(--sutra-teal)] transition-colors hover:bg-[#F1F3EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Book an appointment <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Container>
      </section>

      <Container>
        <p className="py-5 text-xs leading-6 text-[var(--sutra-muted)] sm:text-sm">
          This page is general information. It is not a diagnosis or an emergency service. Do not stop prescribed treatment without speaking to your treating clinician. For urgent symptoms, seek medical care near you straight away.
        </p>
      </Container>
    </main>
  );
}
