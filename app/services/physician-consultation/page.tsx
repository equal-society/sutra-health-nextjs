import type { Metadata } from "next";
import Image from "next/image";
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
    "Learn about physician consultation at Sutra Health in Faridabad. Discuss your health concerns, medical history and relevant lifestyle factors with a physician.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Physician Consultation in Faridabad | Sutra Health",
    description:
      "A physician-led, whole-person approach to understanding your health concerns and discussing appropriate next steps.",
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physician Consultation in Faridabad | Sutra Health",
    description:
      "Learn about physician consultation at Sutra Health and explore appointment information.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Physician Consultation in Faridabad | Sutra Health",
  description: String(metadata.description),
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Sutra Health",
    url: `${SITE_URL}/`,
  },
  about: {
    "@type": "Service",
    name: "Physician Consultation",
    serviceType: "Physician consultation",
    areaServed: { "@type": "City", name: "Faridabad" },
    provider: {
      "@type": "Organization",
      name: "Sutra Health",
      url: `${SITE_URL}/`,
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Physician Consultation", item: PAGE_URL },
    ],
  },
};

const faqs = [
  { question: "What should I bring to my consultation?", answer: "Bring relevant medical reports, a list of your current medicines and notes about your main concerns or questions. Check whether the appointment provider has any additional preparation instructions." },
  { question: "Can I discuss an existing health condition?", answer: "You can explain your concerns and medical history. The clinician will determine what can be assessed during the appointment and whether additional evaluation or referral is appropriate." },
  { question: "Is online consultation available?", answer: "The previous website linked to a Lybrate profile for Dr. Rakesh Sarwal. Check the profile for current availability and appointment terms.", link: { label: "View Dr. Rakesh Sarwal’s profile", href: "https://www.lybrate.com/faridabad/doctor/dr-rakesh-sarwal-preventive-medicine-specialist" } },
  { question: "What is the consultation donation?", answer: "The legacy page listed a suggested donation of ₹100 per consultation. Confirm the current amount and arrangement directly with the provider before booking." },
  { question: "Can lifestyle approaches replace prescribed medicine?", answer: "No. Lifestyle practices may complement appropriate care, but they should not replace prescribed treatment. Speak with your treating clinician before stopping or changing any medicine." },
  { question: "Will I receive a diagnosis at every appointment?", answer: "Not necessarily. The next steps depend on your concern, the available information and the clinical assessment. Further tests, examination or referral may be needed." },
  { question: "Are the health awareness tools diagnostic?", answer: "No. Tools referenced by the previous website are intended for awareness or measurement exploration. They do not replace a clinical assessment or provide a medical diagnosis." },
  { question: "Can I use ABHA instead of booking a consultation?", answer: "No. ABHA is a digital health identity used by participating digital health services. It is not a physician appointment and does not provide a diagnosis.", link: { label: "Visit the official ABHA portal", href: "https://abha.abdm.gov.in/abha/v3" } },
];

const readingLinks = [
  {
    number: "01",
    title: "What to Expect During a Consultation",
    description: "How to prepare, what information may be useful and how the consultation conversation may unfold.",
    href: "/services/physician-consultation/what-to-expect",
    linkLabel: "Read what to expect",
  },
  {
    number: "02",
    title: "What the Consultation Covers",
    description: "A closer look at medical history, current concerns and relevant lifestyle topics that may be discussed.",
    href: "/services/physician-consultation/consultation-scope",
    linkLabel: "Explore the scope",
  },
  {
    number: "03",
    title: "Appointment Options and Donation",
    description: "Review the appointment links and the donation information stated on the previous consultation page.",
    href: "/services/physician-consultation/appointment-options",
    linkLabel: "View appointment options",
  },
  {
    number: "04",
    title: "ABHA and Digital Health Records",
    description: "Learn what an Ayushman Bharat Health Account is and visit the official ABHA portal.",
    href: "/services/physician-consultation/abha",
    linkLabel: "Learn about ABHA",
  },
  {
    number: "05",
    title: "Health-Awareness Tools",
    description: "Explore the pulse, heart-rate variability and brain-health tools referenced in the previous page.",
    href: "/services/physician-consultation/health-awareness-tools",
    linkLabel: "Explore the tools",
  },
  {
    number: "06",
    title: "Meet Your Physician",
    description: "Review the available professional information and background of Dr. Rakesh Sarwal.",
    href: "/doctors",
    linkLabel: "View physician profile",
  },
  {
    number: "07",
    title: "Consultation FAQs",
    description: "Find practical answers about preparation, online appointments, donation information and medical care.",
    href: "/services/physician-consultation/faqs",
    linkLabel: "Read all FAQs",
  },
];

export default function PhysicianConsultationPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section
        aria-labelledby="consultation-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services/physician-consulation.jpg')" }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#10211E]/70"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/85">
            Physician consultation · Faridabad
          </p>

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
              Book a Consultation
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
                ↗️
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Short service overview: keep the parent page concise; details live on child pages. */}
      <section id="explore-consultation" aria-labelledby="overview-title" className="bg-white">
        <Container>
          <div className="grid gap-6 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">The service</p>
              <h2 id="overview-title" className="mt-4 max-w-lg font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Physician consultation centred on your concerns.
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                A physician consultation is an opportunity to discuss your health concerns, relevant medical history and questions with a medical professional.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                Depending on your circumstances, the conversation may also consider nutrition, physical activity, sleep, stress and other relevant lifestyle factors alongside appropriate medical care.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
                The assessment and next steps depend on individual needs and clinical judgement. Explore the dedicated pages below for more detail.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="reading-title" className="bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="max-w-3xl pb-8 pt-14 sm:pt-18 lg:pt-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs">Read more</p>
            <h2 id="reading-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">Explore physician consultation</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9">
              Choose a topic to find more detailed information. Each page covers a specific question so this overview can stay focused.
            </p>
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

      

      

      {/* Closing CTA retained as page content below the unchanged hero. */}
      <section aria-labelledby="booking-title" className="bg-[var(--sutra-teal)] text-white">
        <Container>
          <div className="flex flex-col gap-6 py-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8C99F] sm:text-xs">Take the next step</p>
              <h2 id="booking-title" className="mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">Have questions about your health?</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">Check the available appointment options and confirm the consultation details before booking.</p>
            </div>
            <Link href="/book-appointment" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-white px-6 py-3 text-sm font-bold text-[var(--sutra-teal)] transition-colors hover:bg-[#F1F3EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Book a Consultation <span aria-hidden="true">↗</span></Link>
          </div>
        </Container>
      </section>
      <Container>
        <p className="py-5 text-xs leading-6 text-[var(--sutra-muted)] sm:text-sm">This page provides general information and is not a diagnosis or emergency service. Treatment decisions require individual clinical assessment. Do not stop prescribed treatment without speaking with your treating clinician. For urgent symptoms, seek appropriate local medical care.</p>
      </Container>

      
      
    </main>

    
  );
}
