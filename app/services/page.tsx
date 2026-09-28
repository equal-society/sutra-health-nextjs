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
    image: "/images/what-we-do/nutrition-counselling.webp",
    href: "/services/nutrition",
  },
  {
    number: "04",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga practices shaped around your health, ability and comfort.",
    image: "/images/what-we-do/therapeutic-yoga.webp",
    href: "/services/therapeutic-yoga",
  },
  {
    number: "05",
    title: "Behaviour, Stress & Mind",
    description:
      "Practical support for habits, stress and changes you can sustain in everyday life.",
    image: "/images/what-we-do/behaviour-mind.webp",
    href: "/services/behaviour-stress-mind",
  },
  {
    number: "06",
    title: "Traditional Therapies",
    description:
      "Traditional wellness practices including Shirodhara and Abhyanga, offered with attention to individual suitability.",
    image: "/images/what-we-do/traditional-therapies.webp",
    href: "/services/traditional-therapies",
  },
];

const waysOfWorking = [
  {
    number: "01",
    title: "Understand",
    description: "Start with your health, concerns, goals and everyday routine.",
  },
  {
    number: "02",
    title: "Personalise",
    description: "Build practical recommendations around your needs and ability.",
  },
  {
    number: "03",
    title: "Practise",
    description: "Introduce changes through nutrition, yoga and lifestyle practices.",
  },
  {
    number: "04",
    title: "Review",
    description: "Review what is working and adapt the approach as your needs change.",
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
              Sutra Health brings together physician consultation, lifestyle
              medicine, nutrition, therapeutic yoga, behaviour support and
              traditional therapies to help you understand your health and
              build practical habits around everyday life.
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
              Ways we can support you.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
              Start with the support that is relevant to where you are now.
              Your care can bring together more than one of these practices.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group border border-[var(--sutra-border-strong)] bg-[var(--sutra-porcelain)] transition-colors duration-300 hover:border-[var(--sutra-teal)]/30"
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
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--sutra-teal)]">
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

      <section aria-labelledby="how-we-work-title" className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                How we work
              </p>
              <h2
                id="how-we-work-title"
                className="mt-4 max-w-md font-[var(--font-serif)] text-3xl font-medium leading-[1.12] tracking-[-0.02em] sm:text-4xl"
              >
                Start where you are.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
                Your care begins with understanding your health, your routine
                and what matters to you. From there, we build practical steps
                that can fit into everyday life.
              </p>
              <Link
                href="/approach"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sutra-teal)]"
              >
                Explore our approach
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </Link>
            </div>

            <div className="border-t border-[var(--sutra-border)]">
              {waysOfWorking.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[42px_1fr] gap-4 border-b border-[var(--sutra-border)] py-5 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-6"
                >
                  <span className="pt-1 text-[11px] font-medium tracking-[0.1em] text-[var(--sutra-muted)]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-serif)] text-xl font-medium leading-[1.25] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--sutra-muted)] sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--sutra-teal)]"
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
                <span className="font-[var(--font-serif)] text-xl font-medium leading-[1.3] transition-colors duration-300 group-hover:text-[var(--sutra-teal)] sm:text-2xl">
                  {title}
                </span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--sutra-teal)]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                A simple place to start
              </p>
              <h2 className="mt-4 max-w-2xl font-[var(--font-serif)] text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                Understand your health before changing it.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
                The Sutra 21-Point Health Assessment provides a structured way
                to reflect on important aspects of your health and lifestyle.
              </p>
              <Link
                href="/assessment"
                className="mt-7 inline-flex min-h-12 items-center gap-2 bg-[var(--sutra-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--sutra-teal-hover)]"
              >
                Take the assessment
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </Link>
              <p className="mt-4 text-xs leading-5 text-[var(--sutra-muted)]">
                The assessment is for health and lifestyle awareness and is not
                a medical diagnosis.
              </p>
            </div>

            <div className="border border-[var(--sutra-border-strong)] bg-[var(--sutra-white)] p-6 sm:p-8">
              <div className="flex items-end gap-3 border-b border-[var(--sutra-border)] pb-6">
                <span className="font-[var(--font-serif)] text-6xl font-medium leading-none text-[var(--sutra-teal)] sm:text-7xl">
                  21
                </span>
                <span className="pb-1 text-xs uppercase tracking-[0.12em] text-[var(--sutra-muted)]">
                  points
                </span>
              </div>
              <div className="divide-y divide-[var(--sutra-border)]">
                {["Nutrition", "Sleep", "Digestion", "Physical activity", "Mental wellbeing"].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-4">
                    <Check
                      size={15}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="shrink-0 text-[var(--sutra-teal)]"
                    />
                    <span className="text-sm leading-6 text-[var(--sutra-muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Your next step
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-3xl font-medium leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                Start with a conversation.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Get practical, evidence-informed support to build healthier
                habits that fit your life.
              </p>
            </div>
            <Link
              href="/book-appointment"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-white px-7 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors duration-300 hover:bg-[var(--sutra-porcelain)]"
            >
              Book a Consultation
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </Link>
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
