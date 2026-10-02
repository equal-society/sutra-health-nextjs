import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

const siteUrl = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Sutra Health | Personalized Lifestyle Care & Wellness",
  description:
    "Personalized lifestyle and integrative healthcare through medical guidance, nutrition, therapeutic yoga and everyday wellness practices.",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sutra Health | Personalized Lifestyle Care & Wellness",
    description:
      "A personalized approach to recovery and wellness, shaped around your health and everyday life.",
    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/hero-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },
};

const ink = "#202A26";
const muted = "#66736D";
const rule = "#E5E7E1";
const forest = "#173D38";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] ${light ? "text-white/70" : "text-[#66736D]"}`}>
      {children}
    </p>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-9 items-center gap-2 text-[13px] font-semibold text-[#17413D] underline decoration-[#17413D]/35 underline-offset-4 hover:decoration-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17413D]"
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-[560px] font-serif text-[32px] leading-[1.08] tracking-[-0.035em] sm:text-[43px]" style={{ color: ink }}>
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section aria-labelledby="home-title" className="relative isolate flex min-h-[570px] items-center overflow-hidden bg-[#14231F] sm:min-h-[630px] lg:min-h-[min(720px,calc(100svh-75px))]">
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" poster="/images/hero-desktop.webp" className="absolute inset-0 -z-20 h-full w-full object-cover object-center motion-reduce:hidden">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,29,25,0.84)_0%,rgba(12,29,25,0.58)_52%,rgba(12,29,25,0.12)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(12,29,25,0.35),transparent_50%)]" />
      <Container className="relative z-10 w-full">
        <div className="max-w-[680px] py-20 sm:py-24 lg:py-28">
          <Eyebrow light>Integrative lifestyle healthcare</Eyebrow>
          <h1 id="home-title" className="mt-5 max-w-[660px] font-serif text-[43px] font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-[58px] lg:text-[70px]">
            Your personalized lifestyle partner in <span className="text-[#D6E2D4]">recovery and wellness.</span>
          </h1>
          <p className="mt-5 max-w-[480px] text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            Medical guidance, nutrition, daily practices and therapeutic yoga—considered together.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-appointment" className="inline-flex min-h-[49px] items-center justify-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#173D38] hover:bg-white">
              Book a Consultation <ArrowUpRight size={16} className="ml-2" aria-hidden="true" />
            </Link>
            <Link href="/our-approach" className="inline-flex min-h-[49px] items-center justify-center border border-white/55 bg-black/10 px-6 text-sm font-medium text-white hover:bg-white/10">
              Our Approach <ArrowUpRight size={15} className="ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

const habits = ["Nutrition", "Movement", "Sleep", "Stress", "Relationships", "Daily choices"];

function LifestylePreview() {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid gap-7 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-[76px]">
          <div>
            <Eyebrow>Lifestyle medicine</Eyebrow>
            <h2 className="mt-3 max-w-[540px] font-serif text-[34px] leading-[1.08] tracking-[-0.035em] sm:text-[46px]" style={{ color: ink }}>
              Your everyday life is part of your health.
            </h2>
            <p className="mt-3 max-w-[500px] text-sm leading-6 sm:text-[15px] sm:leading-7" style={{ color: muted }}>
              Small, supported changes can become part of a more sustainable health routine.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {habits.map((habit) => (
                <span key={habit} className="border px-3 py-2 text-xs text-[#34433D]" style={{ borderColor: rule }}>
                  {habit}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <ArrowLink href="/services/lifestyle">Explore Lifestyle Medicine</ArrowLink>
            </div>
          </div>
          <Link href="/assessment" className="group relative block min-h-[250px] overflow-hidden bg-[#E8EEE7] sm:min-h-[320px]">
            <Image src="/images/traffic-light-system.webp" alt="Green leaves in natural light" fill sizes="(max-width: 1023px) 100vw, 48vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[#173D38]/90 px-5 py-4 text-sm font-medium text-white">
              Free 21-Point Health Assessment
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

const concernLinks = [
  "Weight management",
  "Diabetes and metabolic health",
  "High blood pressure",
  "Arthritis and joint pain",
  "Migraine and headaches",
  "Digestive and gut health",
  "Women’s health",
];

function ConditionsPreview() {
  return (
    <section className="bg-[#F7F5EF]">
      <Container>
        <div className="grid gap-6 py-14 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-[76px]">
          <div>
            <SectionHeading eyebrow="Health concerns" title="Care that sees the whole picture." />
            <div className="mt-4">
              <ArrowLink href="/conditions">Explore health concerns</ArrowLink>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {concernLinks.map((name) => (
              <Link key={name} href="/conditions" className="group flex min-h-[51px] items-center justify-between gap-3 border-b py-3 text-sm font-medium text-[#34433D] hover:text-[#17413D]" style={{ borderColor: rule }}>
                <span>{name}</span>
                <ArrowUpRight size={15} aria-hidden="true" className="shrink-0 text-[#7B8981] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const serviceLinks = [
  ["Physician consultation", "/services/physician-consultation"],
  ["Lifestyle medicine", "/services/lifestyle"],
  ["Nutrition counselling", "/services/nutrition-counselling"],
  ["Therapeutic yoga", "/services/therapeutic-yoga"],
  ["Behaviour, stress & mind", "/services/behaviour-stress-mind"],
];

function ServicesPreview() {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-14 sm:py-16 lg:py-[76px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Our services" title="Support for your next step." />
            <ArrowLink href="/services">View all services</ArrowLink>
          </div>
          <div className="mt-6 grid border-y sm:grid-cols-2 sm:gap-x-10" style={{ borderColor: rule }}>
            {serviceLinks.map(([name, href], index) => (
              <Link key={name} href={href} className="group flex min-h-[58px] items-center justify-between gap-4 border-b py-4 text-[15px] font-medium text-[#34433D] hover:text-[#17413D] sm:min-h-[62px]" style={{ borderColor: rule }}>
                {name}
                <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ApproachPreview() {
  return (
    <section className="bg-[#E8EEE7]">
      <Container>
        <div className="flex flex-col gap-4 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-[690px]">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-3 font-serif text-[32px] leading-[1.08] tracking-[-0.035em] sm:text-[42px]" style={{ color: ink }}>
              Evidence-informed care. Personalised to you.
            </h2>
            <p className="mt-2 text-sm leading-6 sm:text-[15px]" style={{ color: muted }}>
              Medical insight, traditional practices and achievable everyday steps.
            </p>
          </div>
          <Link href="/our-approach" className="inline-flex min-h-[46px] items-center justify-center self-start border border-[#17413D]/35 px-5 text-sm font-semibold text-[#17413D] hover:bg-white/50">
            Explore the approach <ArrowUpRight size={16} className="ml-2" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function DoctorPreview() {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid gap-7 py-14 sm:py-16 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-16 lg:py-[72px]">
          <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[300px] overflow-hidden bg-[#E4E6DD]">
            <Image src="/images/doctor.webp" alt="Dr. Rakesh Sarwal" fill sizes="(max-width: 1023px) 80vw, 28vw" className="object-cover" />
          </div>
          <div>
            <Eyebrow>Meet your physician</Eyebrow>
            <h2 className="mt-3 font-serif text-[33px] leading-[1.08] tracking-[-0.035em] sm:text-[44px]" style={{ color: ink }}>
              Dr. Rakesh Sarwal
            </h2>
            <p className="mt-2 text-sm text-[#17413D]">MBBS, MPH, DrPH</p>
            <div className="mt-4">
              <ArrowLink href="/doctors">Meet the doctor</ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Closing() {
  return (
    <section className="bg-[#173D38] text-white">
      <Container>
        <div className="flex flex-col gap-5 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <Eyebrow light>Begin here</Eyebrow>
            <h2 className="mt-3 max-w-[600px] font-serif text-[34px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[44px]">
              Let’s talk about your health.
            </h2>
          </div>
          <Link href="/book-appointment" className="inline-flex min-h-[49px] items-center justify-center self-start bg-[#F7F5EF] px-6 text-sm font-semibold text-[#173D38] hover:bg-white lg:self-center">
            Book a Consultation <ArrowUpRight size={16} className="ml-2" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <main className="sutraHomeEditorial">
      <Hero />
      <LifestylePreview />
      <ConditionsPreview />
      <ServicesPreview />
      <ApproachPreview />
      <DoctorPreview />
    </main>
  );
}
