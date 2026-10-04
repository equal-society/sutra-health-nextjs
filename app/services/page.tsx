import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Physician Consultation",
    description:
      "Discuss your symptoms, health history and current treatment with a physician. Leave with clearer next steps for your care.",
    image: "/images/mobile.webp",
    href: "/services/physician-consultation",
  },
  {
    number: "02",
    title: "Lifestyle Medicine",
    description:
      "Build practical habits around food, movement, sleep and stress, considered alongside appropriate medical care.",
    image: "/images/lifestyle-home.webp",
    href: "/services/lifestyle",
  },
  {
    number: "03",
    title: "Nutrition",
    description:
      "Explore food and meal guidance shaped around your health needs, preferences and everyday routine.",
    image: "/images/what-we-do/diet.webp",
    href: "/services/nutrition",
  },
  {
    number: "04",
    title: "Therapeutic Yoga",
    description:
      "Explore yoga practices adapted to your comfort, mobility and health needs, where appropriate.",
    image: "/images/what-we-do/yoga.jpg",
    href: "/services/therapeutic-yoga",
  },
  {
    number: "05",
    title: "Behaviour & Stress Support",
    description:
      "Work through everyday barriers and explore practical ways to support healthier routines and wellbeing.",
    image: "/images/what-we-do/mind.png",
    href: "/services/behaviour-stress-mind",
  },
  {
    number: "06",
    title: "Traditional Therapies",
    description:
      "Ask whether practices such as Shirodhara or Abhyanga are appropriate for you.",
    image: "/images/what-we-do/Shirodhara.webp",
    href: "/services/traditional-therapies",
  },
];

const healthAreas = [
  ["Diabetes & Blood Sugar", "/conditions/diabetes-blood-sugar"],
  ["High Blood Pressure", "/conditions/high-blood-pressure"],
  ["Weight Management", "/conditions/weight-management"],
  ["Digestive & Gut Health", "/conditions/digestive-gut-health"],
  ["Arthritis & Joint Pain", "/conditions/arthritis-joint-pain"],
  ["Migraine & Headache", "/conditions/migraine-headache"],
  ["Women's Health", "/conditions/womens-health"],
];

const faqs = [
  {
    question: "How do I know which service to choose?",
    answer:
      "You can start with a physician consultation. Share your main concern and health history, and the team can discuss which services may be relevant.",
  },
  {
    question: "Can lifestyle support replace my medicines?",
    answer:
      "No. Do not stop or change prescribed medicines without speaking with your treating clinician. Lifestyle support is considered alongside appropriate medical care.",
  },
  {
    question: "Can I book an online consultation?",
    answer:
      "Online consultations are listed as an option. Use the booking page to ask about availability and the best format for your appointment.",
  },
  {
    question: "Are traditional therapies suitable for everyone?",
    answer:
      "Not always. Suitability depends on your health, symptoms and current treatment. Discuss this with the team before starting a therapy.",
  },
];

const siteUrl = "https://lifequality.org.in";

export const metadata = {
  title: "Health Services | Sutra Health",
  description:
    "Explore physician consultation, lifestyle medicine, nutrition, therapeutic yoga, stress support and traditional therapies at Sutra Health.",
  alternates: { canonical: `${siteUrl}/services` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Health Services | Sutra Health",
    description:
      "Explore the health services available at Sutra Health.",
    url: `${siteUrl}/services`,
    siteName: "Sutra Health",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Services | Sutra Health",
    description: "Explore the health services available at Sutra Health.",
    images: [`${siteUrl}/images/hero-desktop.webp`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteUrl}/services`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Sutra Health Services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${siteUrl}${service.href}`,
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Full-view image hero with readable text overlay */}
      <section
        aria-labelledby="services-hero-title"
        className="relative isolate flex min-h-[min(780px,calc(100svh-72px))] items-end overflow-hidden bg-[#18332F] sm:min-h-[min(820px,calc(100svh-80px))]"
      >
        <Image
          src="/images/yoga.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#101C19]/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/15"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101C19]/55 via-transparent to-[#101C19]/10"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              Sutra Health services
            </p>
            <h1
              id="services-hero-title"
              className="mt-4 max-w-3xl font-[var(--font-serif)] text-[2.65rem] font-medium leading-[1.04] tracking-[-0.035em] text-white sm:mt-5 sm:text-6xl lg:text-7xl"
            >
              Care that starts with listening.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
              Tell us what is concerning you and what support you are looking
              for. Explore medical consultation and practical support for
              lifestyle, nutrition, movement and wellbeing.
            </p>
            <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book a consultation
                <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
              </Link>
              <span className="text-sm leading-6 text-white/80">
                Faridabad · Delhi NCR · Ask about online availability
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-title" className="bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
              Services
            </p>
            <h2
              id="services-title"
              className="mt-3 font-[var(--font-serif)] text-4xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-5xl"
            >
              What would you like help with?
            </h2>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
            Explore the services below to understand the kind of support each one offers. If you are unsure where to begin, a physician consultation is a reasonable starting point for discussing your health concerns and next steps.
          </p>

          <div className="mt-9 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group border border-[var(--sutra-border-strong)] bg-[var(--sutra-porcelain)] transition-colors hover:border-[var(--sutra-sage)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-sage)]"
              >
                <div className="flex min-w-0 items-start gap-4 p-4 sm:items-center sm:gap-6 sm:p-6">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 639px) 96px, (max-width: 1023px) 112px, 128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-xs font-medium tracking-[0.1em] text-[var(--sutra-muted)]">
                      {service.number}
                    </span>
                    <h3 className="mt-2 font-[var(--font-serif)] text-xl font-medium leading-tight sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--sutra-muted)] sm:mt-3 sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sutra-sage)] sm:mt-4">
                      Explore service
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="health-areas-title"
        className="bg-[var(--sutra-porcelain)]"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                Support for different health concerns
              </p>
              <h2
                id="health-areas-title"
                className="mt-3 max-w-2xl font-[var(--font-serif)] text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-5xl"
              >
                Find information about your health concern.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
                Health needs can involve more than one aspect of daily life. Explore our condition pages for information about specific concerns and the support that may be relevant.
              </p>
            </div>
            <Link
              href="/conditions"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--sutra-sage)]"
            >
              All health areas
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid border-t border-[var(--sutra-border)] sm:mt-10 sm:grid-cols-2">
            {healthAreas.map(([title, href], index) => (
              <Link
                key={title}
                href={href}
                className={`group flex items-center justify-between gap-5 border-b border-[var(--sutra-border)] py-5 sm:py-6 ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-8 lg:pr-12"
                    : "sm:pl-8 lg:pl-12"
                }`}
              >
                <span className="font-[var(--font-serif)] text-xl font-medium leading-snug transition-colors group-hover:text-[var(--sutra-sage)] sm:text-2xl">
                  {title}
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-faq-title" className="bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
              FAQs
            </p>
            <h2
              id="services-faq-title"
              className="mt-3 font-[var(--font-serif)] text-4xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-5xl"
            >
              Questions about our services
            </h2>
          </div>

          <div className="mt-8 border-t border-[var(--sutra-border-strong)] sm:mt-10">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-[var(--sutra-border-strong)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 marker:content-none sm:py-7 [&::-webkit-details-marker]:hidden">
                  <span className="pr-2 font-[var(--font-serif)] text-xl font-medium leading-snug sm:text-2xl lg:text-[1.7rem]">
                    {faq.question}
                  </span>
                  <Plus
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-[var(--sutra-sage)] transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-3xl pb-7 pr-8 text-base leading-7 text-[var(--sutra-muted)] sm:pb-8 sm:text-lg sm:leading-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">
          <p className="text-sm leading-6 text-[var(--sutra-muted)]">
            Information on this website is for general education and does not
            replace professional medical advice, diagnosis or treatment. Do not
            stop or change prescribed treatment without consulting your
            healthcare professional.
          </p>
        </div>
      </div>
    </main>
  );
}
