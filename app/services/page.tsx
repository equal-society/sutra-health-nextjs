import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Physician Consultation",
    description:
      "Discuss your concerns, health history and current treatment with a physician, then agree on practical next steps.",
    image: "/images/mobile.webp",
    href: "/services/physician-consultation",
  },
  {
    number: "02",
    title: "Lifestyle Medicine",
    description:
      "Work on food, activity, sleep and stress habits alongside appropriate medical care.",
    image: "/images/lifestyle-home.webp",
    href: "/services/lifestyle",
  },
  {
    number: "03",
    title: "Nutrition",
    description:
      "Get food and meal guidance that considers your preferences, routine and health needs.",
    image: "/images/what-we-do/diet.webp",
    href: "/services/nutrition",
  },
  {
    number: "04",
    title: "Therapeutic Yoga",
    description:
      "Practise yoga with adjustments for your comfort, mobility and health needs.",
    image: "/images/what-we-do/yoga.jpg",
    href: "/services/therapeutic-yoga",
  },
  {
    number: "05",
    title: "Behaviour, Stress & Mind",
    description:
      "Explore ways to manage stress and make changes that are realistic for your day-to-day life.",
    image: "/images/what-we-do/mind.png",
    href: "/services/behaviour-stress-mind",
  },
  {
    number: "06",
    title: "Traditional Therapies",
    description:
      "Ask about traditional practices such as Shirodhara and Abhyanga and whether they are suitable for you.",
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

const siteUrl = "https://lifequality.org.in";

export const metadata = {
  title: "Services | Sutra Health",
  description:
    "Explore Sutra Health services including physician consultation, lifestyle medicine, nutrition, therapeutic yoga, behaviour and stress support, and traditional therapies in Faridabad.",
  alternates: { canonical: `${siteUrl}/services` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Services | Sutra Health",
    description:
      "Explore personalised health and wellbeing services at Sutra Health.",
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
    title: "Services | Sutra Health",
    description:
      "Explore personalised health and wellbeing services at Sutra Health.",
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

      <section aria-labelledby="services-hero-title" className="relative isolate flex min-h-[460px] items-end overflow-hidden bg-[#18332F] sm:min-h-[min(720px,calc(100svh-80px))]">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/yoga.webp')" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/65" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/20" />
                
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">Care and services</p>
            <h1 id="services-hero-title" className="mt-4 max-w-3xl font-[var(--font-serif)] text-[2.55rem] font-medium leading-[1.04] tracking-[-0.035em] text-white sm:mt-5 sm:text-6xl lg:text-7xl">
              Care that starts with listening.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-6 text-white/85 sm:mt-6 sm:text-lg sm:leading-8">
              Tell us what has been troubling you, what you have already tried, and what you want help with. Our team can discuss medical guidance and lifestyle support suited to your needs.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
              <Link href="/book-appointment" className="inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white">
                Book a consultation <ArrowUpRight size={16} className="ml-3" aria-hidden="true" />
              </Link>
              <span className="text-sm text-white/75">Faridabad · Delhi NCR · Online across India</span>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="services-title" className="bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Our services
            </p>
            <h2
              id="services-title"
              className="mt-4 font-[var(--font-serif)] text-4xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-6xl"
            >
              What would you like help with?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
              Read what each service involves, then discuss which options may suit your situation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group border border-[var(--sutra-border-strong)] bg-[var(--sutra-porcelain)] transition-colors duration-300 hover:border-[var(--sutra-sage)]/50"
              >
                <div className="flex min-w-0 items-start gap-3 p-4 sm:items-center sm:gap-6 sm:p-6">
                  <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden sm:h-[112px] sm:w-[112px] lg:h-[128px] lg:w-[128px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} at Sutra Health`}
                      fill
                      sizes="(max-width: 639px) 84px, (max-width: 1023px) 112px, 128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[11px] font-medium tracking-[0.12em] text-[var(--sutra-muted)]">
                      {service.number}
                    </span>
                    <h3 className="mt-1.5 break-words font-[var(--font-serif)] text-lg font-medium leading-[1.2] tracking-[-0.015em] sm:mt-2 sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.55] text-[var(--sutra-muted)] sm:mt-3 sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--sutra-sage)] sm:mt-4">
                      <span>Explore</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="health-areas-title" className="bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Health concerns
              </p>
              <h2
                id="health-areas-title"
                className="mt-3 max-w-xl font-[var(--font-serif)] text-[1.8rem] font-medium leading-[1.12] tracking-[-0.02em] sm:mt-4 sm:text-4xl"
              >
                Health concerns we can discuss.
              </h2>
            </div>
            <Link
              href="/conditions"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--sutra-sage)]"
            >
              <span>All health areas</span>
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </Link>
          </div>

          <div className="mt-10 grid border-t border-[var(--sutra-border)] sm:grid-cols-2">
            {healthAreas.map(([title, href], index) => (
              <Link
                key={title}
                href={href}
                className={`group flex items-center justify-between gap-5 border-b border-[var(--sutra-border)] py-5 sm:py-6 ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-7 lg:pr-10"
                    : "sm:pl-7 lg:pl-10"
                }`}
              >
                <span className="font-[var(--font-serif)] text-xl font-medium leading-[1.3] transition-colors duration-300 group-hover:text-[var(--sutra-sage)] sm:text-2xl">
                  {title}
                </span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--sutra-sage)]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

    

      <div className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-10">
          <p className="text-xs leading-5 text-[var(--sutra-muted)]">
            Sutra Health&apos;s lifestyle and wellness practices are
            complementary and are not a substitute for emergency care, medical
            diagnosis or treatment. Individual results may vary.
          </p>
        </div>
      </div>
    </main>
  );
}
