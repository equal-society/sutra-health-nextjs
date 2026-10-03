import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

const siteUrl = "https://lifequality.org.in";

const brandByline =
  "Medical guidance and practical lifestyle support for everyday health.";

export const metadata: Metadata = {
  title: "Sutra Health | Medical and Lifestyle Care",
  description:
    "Explore medical consultation, nutrition counselling, Therapeutic Yoga and lifestyle support at Sutra Health.",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sutra Health | Medical and Lifestyle Care",
    description: brandByline,
    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${siteUrl}/images/hero-desktop.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutra Health | Medical and Lifestyle Care",
    description: brandByline,
    images: [`${siteUrl}/images/hero-desktop.webp`],
  },
};

const services = [
  { label: "Physician Consultation", href: "/services/physician-consultation" },
  { label: "Lifestyle Medicine", href: "/services/lifestyle"},
  { label: "Nutrition Counselling", href: "/services/nutrition"},
  { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga"},
  { label: "Stress and Behaviour Support", href: "/services/behaviour-stress-mind"},
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-[12px] ${light ? "text-white/75" : "text-[#65736D]"}`}>
      {children}
    </p>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-10 items-center gap-2 text-[15px] font-semibold text-[#17413D] underline decoration-[#17413D]/35 underline-offset-4 transition-colors hover:decoration-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function Hero() {
  return (
     <section
      aria-labelledby="home-title"
      className="relative isolate overflow-hidden bg-[var(--color-text-primary)]"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
         
  <div className="absolute inset-0 bg-[#101C19]/45" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/20" />
</div>

      <Container>
        <div className="relative z-10 flex min-h-[580px] flex-col justify-center py-16 sm:min-h-[640px] lg:min-h-[700px]">
          <div className="max-w-[780px]">
            <Eyebrow light>Doctor-led integrative lifestyle healthcare</Eyebrow>

            <h1 id="home-title" className="mt-5 max-w-[760px] font-serif text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[62px] lg:text-[76px]">
              Your partner in recovery and wellness.
            </h1>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-white/85 sm:text-[18px] sm:leading-8">
              An evidence-informed integrative approach combining medical guidance, nutrition counselling, Therapeutic Yoga, and practical lifestyle changes to support your wellbeing and long-term health.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="inline-flex min-h-[52px] items-center justify-center bg-white px-7 text-center text-base font-semibold text-[#17413D] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Book a Consultation
                <ArrowUpRight size={17} className="ml-2" />
              </Link>
              <Link href="/approach" className="inline-flex min-h-[52px] items-center justify-center border border-white/75 px-7 text-center text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Explore Our Approach
                <ArrowUpRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-5 text-[13px] text-white/70">
              <span>1,200+ people supported</span>
              <span aria-hidden="true">·</span>
              <span>15 years of experience</span>
              <span aria-hidden="true">·</span>
              <span>Faridabad, Delhi NCR &amp; online</span>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

function EverydayHealth() {
  return (
    <section aria-labelledby="everyday-title" className="bg-white">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Lifestyle &amp; Health</Eyebrow>

          <h2 id="everyday-title" className="mt-3 max-w-[850px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[56px]">
            Your lifestyle shapes your health, longevity and happiness.
          </h2>

          <p className="mt-5 max-w-[720px] text-base leading-8 text-[#65736D] sm:text-[18px]">
            Food, physical activity, sleep and stress can affect your health.
            These factors may be considered alongside your medical history
            and treatment.
          </p>

          <div className="mt-6">
            <TextLink href="/services/lifestyle">Explore Lifestyle Medicine</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ConditionsPreview() {
  const conditions = getAllConditions();

  return (
    <section aria-labelledby="conditions-title" className="bg-[#F7F5EF]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Health concerns</Eyebrow>

          <h2 id="conditions-title" className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]">
            Explore the health concerns we support.
          </h2>

          {/* <p className="mt-4 max-w-[650px] text-base leading-7 text-[#65736D] sm:text-[17px]">
            Read about common health concerns and the medical and lifestyle
            approaches that may form part of care. Each topic includes
            information to help you discuss your options with a clinician.
          </p> */}

          <div className="mt-7 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {conditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group flex min-h-[54px] items-center justify-between gap-3 border-b border-[#202522]/15 py-3 text-[16px] font-medium text-[#202522] transition-colors hover:text-[#17413D] sm:text-[17px]"
              >
                <span>{condition.title}</span>
                <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <TextLink href="/conditions">Explore All Health Concerns</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section aria-labelledby="services-title" className="bg-white">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Services</Eyebrow>

          <h2 id="services-title" className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]">
            Services that work together, not in isolation.
          </h2>

          {/* <p className="mt-4 max-w-[650px] text-base leading-7 text-[#65736D]">
            Choose from medical consultation, lifestyle medicine, nutrition
            counselling, Therapeutic Yoga and support for stress and
            behaviour-related habits.
          </p> */}

          <div className="mt-8 grid grid-cols-1 border-y border-[#202522]/15 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col justify-center gap-2 border-b border-[#202522]/15 py-5 sm:pr-6"
              >
                <span className="flex items-center justify-between gap-3 text-[17px] font-semibold text-[#202522] transition-colors group-hover:text-[#17413D]">
                  {service.label}
                  <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <TextLink href="/services">View All Services</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ApproachPreview() {
  const steps = [
    { number: "01", title: "Discuss Your Health", detail: "Tell us what is bothering you and what your day-to-day life looks like." },
    { number: "02", title: "Plan Practical Steps", detail: "Consider care options that fit your health needs and circumstances." },
    { number: "03", title: "Put the Plan into Practice", detail: "Start with changes you can work into your routine." },
    { number: "04", title: "Review Your Progress", detail: "Discuss what is working and what may need to change." },
  ];

  return (
    <section aria-labelledby="approach-title" className="bg-[#FAF8F2]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>Our approach</Eyebrow>

          <h2 id="approach-title" className="mt-3 max-w-[760px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]">
            Science-based care. Traditional wisdom.
          </h2>

          {/* <p className="mt-4 max-w-[780px] text-base leading-8 text-[#65736D] sm:text-[17px]">
            We begin by listening to your concerns and reviewing your health
            history. Together, we discuss realistic steps that can sit
            alongside medical treatment when appropriate.
          </p> */}

          <ol className="mt-9 grid grid-cols-1 border-t border-[#202522]/20 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="border-b border-[#202522]/20 py-5 pr-5">
                <span className="text-xs tracking-[0.14em] text-[#65736D]">{step.number}</span>
                <h3 className="mt-2 font-serif text-[25px] text-[#202522]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#65736D]">{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-7">
            <TextLink href="/approach">How Care Works</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DoctorPreview() {
  return (
    <section aria-labelledby="personal-care-title" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F5EF]">
            <Image src="/images/doctor.webp" alt="Dr. Rakesh Sarwal, Sutra Health" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover object-center" />
          </div>

          <div className="max-w-[620px]">
            <Eyebrow>Your Doctor</Eyebrow>

            <h2 id="personal-care-title" className="mt-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[50px]">
              Meet Dr. Rakesh Sarwal.
            </h2>

            <p className="mt-5 text-lg font-semibold text-[#17413D]">Dr. Rakesh Sarwal, MBBS, MPH, DrPH</p>
            <p className="mt-1 text-sm text-[#65736D]">Public Health Physician and Therapeutic Yoga Consultant</p>

            <p className="mt-5 text-base leading-8 text-[#65736D] sm:text-[17px]">
              Dr. Sarwal’s profile explains his training and work in public
              health and Therapeutic Yoga. Consultation details can help
              you decide whether to get in touch.
            </p>

            <div className="mt-6">
              <TextLink href="/doctors">View Doctor Profile</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AssessmentPreview() {
  return (
    <section aria-labelledby="assessment-title" className="bg-[#F7F5EF]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div>
         
            <Eyebrow>21-Point Health Assessment</Eyebrow>
            <h2 id="assessment-title" className="mt-3 mb-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[50px]">
              Understand your everyday health habits.
            </h2>
           <p className="text-base leading-8 text-[#65736D] sm:text-[17px]">
              Answer 21 questions about sleep, digestion, movement, nutrition
              and mental wellbeing. Use your responses to reflect on your
              routines and identify topics you may want to discuss with
              a health professional.
            </p>
           
          </div>
          <div>
            
             <div className="mt-6">
              <Image
                src="/images/traffic-light-system.webp"
                alt="21-Point Health Assessment Traffic Light result"
                width={400}
                height={300}
                className="rounded-lg object-cover object-center"
              />
            </div>
           
            <div className="mt-6 "><TextLink href="/assessment">Take the Assessment</TextLink></div>
            <p className="mt-2 text-xs leading-5 text-[#65736D]">For lifestyle awareness, not medical diagnosis.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AppointmentCTA() {
  return (
    <section aria-labelledby="appointment-title" className="bg-[#17413D]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-[720px]">
            <Eyebrow light>Start a conversation</Eyebrow>
            <h2 id="appointment-title" className="mt-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[54px]">
              Let&rsquo;s talk about your next step.
            </h2>
            <p className="mt-5 max-w-[600px] text-base leading-7 text-white/85 sm:text-[18px]">
              Tell us what support you are looking for. Our team can explain
              the available consultation options and how to begin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="inline-flex min-h-[52px] items-center justify-center bg-white px-7 text-base font-semibold text-[#17413D] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Book a Consultation
                <ArrowUpRight size={17} className="ml-2" />
              </Link>
              <a href="tel:+919013103676" className="inline-flex min-h-[52px] items-center justify-center border border-white/60 px-7 text-base font-medium text-white transition-colors hover:bg-white/10">
                Call +91 90131 03676
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PatientStories() {
  const stories = [
    { quote: "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.", name: "Rahul Sharma" },
    { quote: "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.", name: "Priya Verma" },
    { quote: "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.", name: "Ankit Mehta" },
    { quote: "Meditation sessions transformed my daily routine. Stress levels are much lower now.", name: "Neha Kapoor" },
    { quote: "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.", name: "Puneet Kulshrestha" },
    { quote: "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises.", name: "Adheer Dixit" },
    { quote: "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!", name: "Sumit Kashyap" },
    { quote: "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day.", name: "Flor Riboldi" },
  ];
  return (
    <section id="patient-stories" aria-labelledby="patient-stories-title" className="overflow-hidden bg-white">
      <Container><div className="py-16 sm:py-20 lg:py-24">
        <Eyebrow>Patient experiences</Eyebrow>
        <h2 id="patient-stories-title" className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]">Voices from the Sutra Health community.</h2>
        <p className="mt-4 max-w-[650px] text-base leading-7 text-[#65736D]">These accounts describe individual experiences. They do not predict
          what another person will experience.</p>
        <div className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {stories.map((story, i) => <article key={`${story.name}-${i}`} className="flex min-w-[85%] snap-start flex-col border border-[#202522]/15 bg-[#FAF8F2] p-6 sm:min-w-[calc((100%-16px)/2)] lg:min-w-[calc((100%-32px)/3)]">
            <span className="text-xs text-[#65736D]">{String(i + 1).padStart(2, "0")}</span>
            <blockquote className="mt-6 flex-1 font-serif text-xl leading-relaxed">&ldquo;{story.quote}&rdquo;</blockquote>
            <div className="mt-6 border-t border-[#202522]/15 pt-4">
              <cite className="text-sm font-semibold not-italic">{story.name}</cite>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#65736D]">Individual experience</p>
            </div>
          </article>)}
        </div>
        <p className="mt-3 max-w-[760px] text-xs leading-5 text-[#65736D]">Individual accounts are not typical or guaranteed results and do not replace advice from a qualified healthcare professional. Publish only after verifying each account, permission and clinical wording.</p>
      </div></Container>
    </section>
  );
}

function HomeFAQs() {
  
  const faqs = [
    { question: "What is lifestyle medicine?", answer: "Lifestyle medicine uses evidence-informed changes in areas such as food, physical activity, sleep and stress management alongside appropriate medical care." },
    { question: "Can yoga therapy be part of managing conditions such as diabetes or high blood pressure?", answer: "It can be one part of your overall care alongside your doctor, but it is not a replacement for medical treatment. Medication changes should always be discussed with your physician." },
    { question: "Do you offer online consultations?", answer: "Yes. Sutra Health works with people across India. Online consultations are available for lifestyle medicine, nutrition counselling and yoga therapy. In-person sessions are also available in Faridabad, Delhi NCR." },
    { question: "How long before I see results?", answer: "There is no single timeline. Some people notice changes within weeks, while other improvements take longer. Results depend on the individual, the health concern and consistency with the plan." },
    { question: "How do I get started with Sutra Health?", answer: "You can start by booking a consultation. We will discuss your health concerns, goals and current situation and help identify the most appropriate next step." },
  ];
  return (
    <section aria-labelledby="home-faq-title" className="bg-[#FAF8F2]">
      <Container><div className="py-16 sm:py-20 lg:py-24">
        <Eyebrow>Frequently asked questions</Eyebrow>
        <h2 id="home-faq-title" className="mt-3 font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[52px]">Questions about your care.</h2>
        <div className="mt-8 max-w-[850px] border-y border-[#202522]/15">
          {faqs.map((faq) => <details key={faq.question} className="group border-b border-[#202522]/15 py-5 last:border-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17413D]">
              <span>{faq.question}</span><span aria-hidden="true" className="text-xl font-normal text-[#17413D] group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-[760px] text-sm leading-7 text-[#65736D]">{faq.answer}</p>
          </details>)}
        </div>
        <p className="mt-6 text-sm text-[#65736D]">Have another question? <Link href="/contact" className="font-medium text-[#17413D] underline underline-offset-4">Contact Sutra Health</Link>.</p>
      </div></Container>
    </section>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sutra Health",
      url: siteUrl,
      slogan: brandByline,
      founder: { "@type": "Person", name: "Dr. Rakesh Sarwal", honorificSuffix: "MBBS, MPH, DrPH", url: "https://academic.lifequality.org.in/" },
      address: { "@type": "PostalAddress", streetAddress: "House No. 229, Roof-Top, Sector 46", addressLocality: "Faridabad", addressRegion: "Haryana", postalCode: "121010", addressCountry: "IN" },
      telephone: "+91-9013103676",
      areaServed: [{ "@type": "City", name: "Faridabad" }, { "@type": "AdministrativeArea", name: "Delhi NCR" }, { "@type": "Country", name: "India" }],
      sameAs: [
        "https://academic.lifequality.org.in/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC12975079/",
        "https://www.instagram.com/sutrahealth/",
        "https://www.facebook.com/people/Sutrahealth-Equal/",
        "https://www.youtube.com/@sutra-health",
        "https://www.linkedin.com/in/equal-society-ngo",
      ],
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Sutra Health", url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-IN" },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: "Sutra Health | Medical and Lifestyle Care",
      url: siteUrl,
      description: "Medical consultation, nutrition counselling, Therapeutic Yoga and lifestyle support.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
      inLanguage: "en-IN",
    },
    { "@type": "BreadcrumbList", "@id": `${siteUrl}/#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }] },
    ...services.map((service) => ({
      "@type": "Service",
      "@id": `${siteUrl}${service.href}#service`,
      name: service.label,
      url: `${siteUrl}${service.href}`,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="sutraHomeEditorial">
        <Hero />
        <EverydayHealth />
        <ApproachPreview />
        <ConditionsPreview />
        <ServicesPreview />
        <DoctorPreview />
        <AssessmentPreview />
        <PatientStories />
        <HomeFAQs />
        {/* <AppointmentCTA /> */}
      </main>
    </>
  );
}
