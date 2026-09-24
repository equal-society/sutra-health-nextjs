import BookingCTA from "@/components/hero/BookingCTA";
import Testimonials from "@/components/hero/Testimonials";
import FAQ from "@/components/shared/FAQ";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Sutra Health | Integrative Lifestyle Healthcare",
  description:
    "Sutra Health brings together lifestyle medicine, nutrition counselling, therapeutic yoga and practical behaviour support to help people make sustainable changes alongside appropriate medical care.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Lifestyle medicine, nutrition counselling, therapeutic yoga and practical health support, designed around everyday life.",
    url: SITE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/images/hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },
};

const lifestyleAreas = [
  ["01", "Diet", "What we eat, how we eat and the routines that shape our everyday nutrition."],
  ["02", "Exercise", "Regular movement and physical activity that can be adapted to everyday life."],
  ["03", "Sleep", "Rest and recovery that help the body and mind function well."],
  ["04", "Stress-free living", "Learning healthier ways to respond to pressure and recover from it."],
  ["05", "Social networks", "The relationships, support and sense of connection around us."],
  ["06", "Addiction-free living", "Reducing habits and substance use that can undermine health."],
];

const services = [
  {
    title: "Lifestyle Medicine",
    description:
      "A structured way to understand everyday health behaviours and work on realistic changes alongside appropriate medical care.",
    href: "/what-we-do/lifestyle",
  },
  {
    title: "Nutrition Counselling",
    description:
      "Practical guidance around food and eating patterns that can fit your health needs, preferences and routine.",
    href: "/what-we-do/nutrition",
  },
  {
    title: "Therapeutic Yoga",
    description:
      "Yoga, breathing and relaxation practices adapted to individual needs, abilities and goals.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    title: "Behaviour & Mind Practices",
    description:
      "Support for stress, routines, motivation and the behavioural changes that can be difficult to sustain.",
    href: "/what-we-do/behaviour-mind",
  },
];

const model = [
  [
    "01",
    "Integration",
    "We bring lifestyle, nutrition, movement, yoga and behaviour support together rather than treating each part of life in isolation.",
  ],
  [
    "02",
    "Motivation",
    "The focus is on helping you understand why a change matters and finding practical steps you are more likely to continue.",
  ],
  [
    "03",
    "Personalisation",
    "Recommendations are shaped around your health, routine, circumstances, abilities and goals rather than a one-size-fits-all plan.",
  ],
];

const faqs = [
  {
    question: "What is Lifestyle Medicine?",
    answer:
      "Lifestyle medicine is an evidence-informed approach that uses healthy lifestyle behaviours such as nutritious eating, physical activity, restorative sleep, stress management and social connection as part of healthcare, alongside appropriate medical care.",
  },
  {
    question: "What does Sutra Health help with?",
    answer:
      "Sutra Health provides lifestyle medicine, nutrition counselling, therapeutic yoga and behaviour-focused support. These services can form part of care for a range of lifestyle-related health concerns and are shaped around individual needs.",
  },
  {
    question: "Can I consult from outside Faridabad?",
    answer:
      "Yes. Online consultations are available across India. In-person services are available in Faridabad.",
  },
  {
    question: "Is Sutra Health a replacement for medical treatment?",
    answer:
      "No. Sutra Health's lifestyle and yoga-based services are intended to complement appropriate medical care. Prescribed medicines or treatment should not be stopped or changed without advice from your healthcare professional.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Sutra Health",
  url: SITE_URL,
  founder: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationSchema],
          }),
        }}
      />

      <main className="bg-[#F7F5EF] text-[#202522]">
        {/* HERO — same editorial language, but with a strong first answer */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid min-h-[min(760px,calc(100svh-88px))] items-stretch lg:grid-cols-[1fr_0.82fr]">
              <div className="flex items-center py-14 sm:py-16 lg:py-20 lg:pr-14 xl:pr-20">
                <div className="max-w-[760px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D] sm:text-[11px]">
                    Sutra Health
                  </p>
                  <h1 className="mt-5 max-w-[760px] font-serif text-[44px] font-medium leading-[0.97] tracking-[-0.045em] sm:text-[56px] md:text-[64px] lg:text-[70px] xl:text-[78px]">
                    Integrative healthcare,
                    <span className="block text-[#17413D]">
                      built around your life.
                    </span>
                  </h1>
                  <div className="mt-6 border-l border-[#C8BDA7] pl-4 sm:pl-5">
                    <p className="max-w-[650px] text-[15px] leading-7 text-[#65736D] sm:text-[17px] sm:leading-8">
                      Sutra Health brings together lifestyle medicine, nutrition
                      counselling, therapeutic yoga and practical behaviour
                      support to help you work on changes that can fit into real
                      life, alongside appropriate medical care.
                    </p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/assessment"
                      className="inline-flex min-h-12 items-center justify-center bg-[#17413D] px-7 text-[12px] font-semibold uppercase tracking-[0.05em] text-white hover:bg-[#12332F]"
                    >
                      Take the 21-question assessment
                    </Link>
                    <Link
                      href="/what-we-do"
                      className="inline-flex min-h-12 items-center justify-center border border-[#202522]/10 px-7 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#202522] hover:border-[#17413D] hover:text-[#17413D]"
                    >
                      How we help
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[360px] border-t border-[#202522]/10 lg:min-h-0 lg:border-l lg:border-t-0">
                <Image
                  src="/images/yoga-hero.jpg"
                  alt="Therapeutic yoga practice at Sutra Health"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  className="object-cover lg:object-[center_45%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 01 — SAME EDITORIAL SYSTEM:
            full-width heading -> two-column content below */}
        <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="lifestyle-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D] sm:text-[11px]">
                01 · Lifestyle &amp; health
              </p>
              <h2
                id="lifestyle-heading"
                className="mt-4 max-w-[1120px] font-serif text-[36px] font-medium leading-[1.03] tracking-[-0.04em] sm:text-[46px] lg:text-[56px] xl:text-[62px]"
              >
                Do you know how your lifestyle shapes your current and future
                health, longevity and happiness?
              </h2>
            </div>

            <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
              <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
                <p className="max-w-[650px] text-[17px] leading-8 text-[#65736D] sm:text-[18px] sm:leading-9">
                  Much of what happens to our health is connected to how we live
                  every day. Diet, exercise, sleep, stress, relationships and
                  addictive habits can influence health over time. Many common
                  chronic diseases are strongly associated with unhealthy
                  lifestyle patterns.
                </p>
                <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
                  The point is not to suggest that every illness is caused by
                  lifestyle. Genetics, environment, age, access to care and many
                  other factors matter too. The practical question is: what can
                  you change that may support better health now and in the years
                  ahead?
                </p>
              </div>

              <div className="lg:pl-12 xl:pl-16">
                <div className="grid sm:grid-cols-2">
                  {lifestyleAreas.map(([number, title, description]) => (
                    <div
                      key={number}
                      className="border-b border-[#202522]/10 py-6 sm:min-h-[132px] sm:px-6 sm:first:pl-0 sm:even:pr-0 lg:min-h-[140px] lg:px-7"
                    >
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {number}
                      </span>
                      <h3 className="mt-3 font-serif text-[22px] leading-[1.08] tracking-[-0.02em] sm:text-[24px]">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-[280px] text-[12px] leading-6 text-[#65736D] sm:text-[13px]">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — SCIENCE */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]" aria-labelledby="science-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D] sm:text-[11px]">
                02 · The science
              </p>
              <h2
                id="science-heading"
                className="mt-4 max-w-[1000px] font-serif text-[36px] font-medium leading-[1.03] tracking-[-0.04em] sm:text-[46px] lg:text-[56px]"
              >
                Why does Lifestyle Medicine work?
              </h2>
            </div>

            <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
              <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
                <p className="text-[19px] leading-9 text-[#202522] sm:text-[21px] sm:leading-10">
                  Lifestyle Medicine uses evidence-informed changes in areas such
                  as nutrition, physical activity, sleep, stress management and
                  social connection as part of healthcare.
                </p>
              </div>
              <div className="py-9 lg:py-12 lg:pl-12 xl:pl-16">
                <p className="max-w-[700px] text-[16px] leading-8 text-[#65736D] sm:text-[17px] sm:leading-9">
                  These behaviours can influence important aspects of health,
                  including metabolic health, cardiovascular risk, physical
                  function and wellbeing. The value of the approach is not only
                  knowing what healthy behaviour looks like; it is helping people
                  translate that knowledge into changes they can realistically
                  maintain.
                </p>
                <div className="mt-8 border-t border-[#202522]/10 pt-5">
                  <div className="flex flex-wrap gap-x-7 gap-y-3">
                    <Link href="/resources/research" className="text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4">
                      Explore research and evidence →
                    </Link>
                    <Link href="/approach" className="text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4">
                      How Sutra Health approaches care →
                    </Link>
                  </div>
                </div>
                <p className="mt-5 text-[11px] leading-5 text-[#65736D]">
                  Evidence and recommendations vary by condition and by person.
                  Health information on this website is intended to support
                  informed conversations with qualified healthcare professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — ASSESSMENT */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]" aria-labelledby="assessment-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D] sm:text-[11px]">
                03 · Free self assessment
              </p>
              <h2
                id="assessment-heading"
                className="mt-4 max-w-[1050px] font-serif text-[36px] font-medium leading-[1.03] tracking-[-0.04em] sm:text-[46px] lg:text-[56px]"
              >
                How healthy is your current Lifestyle?
              </h2>
            </div>

            <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
              <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
                <p className="max-w-[650px] text-[17px] leading-8 text-[#202522]/80 sm:text-[18px] sm:leading-9">
                  Answer 21 simple questions about everyday health habits. The
                  Traffic Light result helps you see where your current patterns
                  are going well and where you may want to pay more attention.
                </p>
                <p className="mt-5 max-w-[620px] text-[13px] leading-6 text-[#202522]/60">
                  This is a self-assessment for reflection and discussion, not a
                  medical diagnosis or clinical risk score.
                </p>
                <Link href="/assessment" className="mt-7 inline-flex min-h-12 items-center bg-[#17413D] px-7 text-[12px] font-semibold uppercase tracking-[0.05em] text-white hover:bg-[#12332F]">
                  Start the free assessment →
                </Link>
              </div>

              <div className="lg:pl-12 xl:pl-16">
                {[
                  ["Green", "Continue", "Habits that are already serving you well.", "#6FA77B"],
                  ["Yellow", "Review", "Areas where a small change may be worthwhile.", "#C8B36A"],
                  ["Red", "Focus", "Areas where a more meaningful change may be useful.", "#C47770"],
                ].map(([label, title, description, dot]) => (
                  <div key={label} className="grid grid-cols-[10px_86px_1fr] items-start gap-4 border-b border-[#202522]/10 py-5 sm:grid-cols-[10px_100px_1fr] sm:gap-5">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: dot }} />
                    <span className="pt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#202522]/55">
                      {label}
                    </span>
                    <div>
                      <p className="font-serif text-[22px] leading-tight sm:text-[25px]">{title}</p>
                      <p className="mt-1 text-[12px] leading-6 text-[#202522]/60">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 — HOW WE HELP */}
        <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="help-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D] sm:text-[11px]">
                04 · Care &amp; support
              </p>
              <h2
                id="help-heading"
                className="mt-4 max-w-[1050px] font-serif text-[36px] font-medium leading-[1.03] tracking-[-0.04em] sm:text-[46px] lg:text-[56px]"
              >
                How we help you develop healthier habits
              </h2>
            </div>

            <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
              <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
                <p className="max-w-[620px] text-[17px] leading-8 text-[#65736D] sm:text-[18px] sm:leading-9">
                  We focus on practical changes that can become part of everyday
                  life, rather than giving you a long list of instructions.
                </p>
                <div className="mt-7 border-l border-[#C8BDA7] pl-4">
                  <p className="text-[13px] leading-6 text-[#65736D]">
                    The right support depends on your health, circumstances and
                    goals.
                  </p>
                </div>
              </div>

              <div className="lg:pl-12 xl:pl-16">
                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group grid grid-cols-[34px_1fr_18px] gap-4 border-b border-[#202522]/10 py-5 sm:grid-cols-[42px_1fr_20px] sm:gap-5"
                  >
                    <span className="pt-1 text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-[23px] tracking-[-0.02em] group-hover:text-[#17413D] sm:text-[26px]">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-[650px] text-[13px] leading-6 text-[#65736D] sm:text-[14px] sm:leading-7">
                        {service.description}
                      </p>
                    </div>
                    <span className="pt-1 text-[#17413D]" aria-hidden="true">↗</span>
                  </Link>
                ))}
                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                  <Link href="/conditions" className="text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4">
                    Explore health conditions →
                  </Link>
                  <Link href="/what-we-do" className="text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4">
                    View all services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — UNIQUENESS */}
        <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="model-heading">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65736D] sm:text-[11px]">
                05 · The Sutra Health model
              </p>
              <h2
                id="model-heading"
                className="mt-4 max-w-[1100px] font-serif text-[36px] font-medium leading-[1.03] tracking-[-0.04em] sm:text-[46px] lg:text-[56px]"
              >
                What makes the Sutra Health model unique?
              </h2>
            </div>

            <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
              <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
                <p className="max-w-[650px] text-[17px] leading-8 text-[#65736D] sm:text-[18px] sm:leading-9">
                  Sutra Health brings several parts of health support together,
                  with three principles at the centre: integration, motivation
                  and personalisation.
                </p>
                <Link href="/approach" className="mt-7 inline-block text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4">
                  Explore the Sutra Health approach →
                </Link>
              </div>

              <div className="lg:pl-12 xl:pl-16">
                {model.map(([number, title, description]) => (
                  <div key={number} className="border-b border-[#202522]/10 py-6">
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                        {number}
                      </span>
                      <div>
                        <h3 className="font-serif text-[25px] tracking-[-0.02em] sm:text-[28px]">
                          {title}
                        </h3>
                        <p className="mt-2 max-w-[650px] text-[13px] leading-7 text-[#65736D] sm:text-[14px]">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

    <Testimonials />
    <FAQ />
    <BookingCTA />

       
      </main>
    </>
  );
}
