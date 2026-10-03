import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Physician Consultation",
    description:
      "Doctor-led consultation to understand your health concerns, medical history, lifestyle and next steps.",
    image: "/images/retreat/doctor.webp",
    href: "/services/physician-consultation",
  },
  {
    number: "02",
    title: "Lifestyle Medicine",
    description:
      "Practical support around nutrition, sleep, stress and everyday habits.",
    image: "/images/what-we-do/lifestyle-medicine.webp",
    href: "/services/lifestyle",
  },
  {
    number: "03",
    title: "Nutrition",
    description:
      "Personalised guidance around food and eating habits that fits your daily life.",
    image: "/images/what-we-do/diet.webp",
    href: "/services/nutrition",
  },
  {
    number: "04",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga practices shaped around your health, ability and comfort.",
    image: "/images/what-we-do/yoga.png",
    href: "/services/therapeutic-yoga",
  },
  {
    number: "05",
    title: "Behaviour, Stress & Mind",
    description:
      "Practical support for habits, stress and changes you can sustain in everyday life.",
    image: "/images/what-we-do/mind.png",
    href: "/services/behaviour-stress-mind",
  },
  {
    number: "06",
    title: "Traditional Therapies",
    description:
      "Traditional wellness practices including Shirodhara and Abhyanga, offered with attention to individual suitability.",
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

      <section className="border-b border-[var(--sutra-border)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Services
            </p>
            <h1 className="mt-5 max-w-4xl font-[var(--font-serif)] text-4xl font-medium leading-[1.06] tracking-[-0.025em] sm:text-5xl lg:text-7xl">
              Care built around
              <br className="hidden sm:block" />
              the whole you.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
              Sutra Health offers doctor-led consultation, lifestyle and nutrition support,
              Therapeutic Yoga, behaviour and stress support, and traditional
              therapies. The right combination depends on your health, needs and goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--sutra-muted)]">
              <span>Doctor-led</span>
              <span>Evidence-informed</span>
              <span>Faridabad, Delhi NCR & online across India</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="services-title" className="bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Our services
            </p>
            <h2
              id="services-title"
              className="mt-4 font-[var(--font-serif)] text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl"
            >
              Choose the support that fits your needs.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
              Each service has a distinct role. Where appropriate, more than one service can be part of your wider care.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group border border-[var(--sutra-border-strong)] bg-[var(--sutra-porcelain)] transition-colors duration-300 hover:border-[var(--sutra-sage)]/50"
              >
                <div className="flex gap-5 p-5 sm:gap-6 sm:p-6">
                  <div className="relative h-[116px] w-[116px] shrink-0 overflow-hidden sm:h-[128px] sm:w-[128px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} at Sutra Health`}
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[11px] font-medium tracking-[0.12em] text-[var(--sutra-muted)]">
                      {service.number}
                    </span>
                    <h3 className="mt-2 font-[var(--font-serif)] text-xl font-medium leading-[1.2] tracking-[-0.015em] sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--sutra-muted)] sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--sutra-sage)]">
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
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Health areas
              </p>
              <h2
                id="health-areas-title"
                className="mt-4 font-[var(--font-serif)] text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl"
              >
                Explore the areas we support.
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
