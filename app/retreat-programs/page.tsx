import type { Metadata } from "next";
import Link from "next/link";
import RetreatHeroSlider from "@/components/retreat/RetreatHeroSlider";
import Container from "@/components/shared/Container";

const siteUrl = "https://lifequality.org.in";
const pageUrl = `${siteUrl}/retreat-programs`;
const bookingUrl = "https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india";
const whatsappUrl = "https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20wellness%20retreat%20in%20Faridabad.";

export const metadata: Metadata = {
  title: "Wellness Retreat Near Delhi | Sutra Health",
  description: "Wellness retreat in Faridabad near Delhi with guided Yoga, meditation, nutrition guidance and traditional wellness experiences.",
  alternates: { canonical: pageUrl },
};

const services = [
  ["Physician Consultation", "/services/physician-consultation"],
  ["Nutrition Counselling", "/services/nutrition"],
  ["Shirodhara", "/services/shirodhara"],
  ["My Buddy", "/services/my-buddy"],
  ["Singing, Kirtan & Dance", "/services/singing-kirtan-dance"],
  ["Meditation", "/services/therapeutic-yoga/meditation"],
  ["Pranayama", "/services/therapeutic-yoga/pranayama"],
  ["Yoga Asana Protocol", "/services/therapeutic-yoga/yoga-asana-protocol"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: "Wellness Retreat Near Delhi | Sutra Health", isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${siteUrl}/` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Sutra Health", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Retreats", item: pageUrl },
    ] },
  ],
};

const eyebrow = "text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--sutra-muted)] sm:text-[12px]";
const button = "inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]";

export default function RetreatProgramsPage() {
  return (
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="border-b border-[var(--sutra-border)]">
        <RetreatHeroSlider />
        <Container>
          <div className="grid gap-5 py-6 sm:grid-cols-3 sm:py-8">
            {["Wellness stay near Delhi", "Guided Yoga, breath & reflection", "Faridabad, Haryana"].map((item) => <p key={item} className="border-l-2 border-[var(--sutra-sage)] pl-4 text-sm text-[var(--sutra-muted)]">{item}</p>)}
          </div>
        </Container>
      </section>
      <section className="bg-[var(--sutra-pale-sage)] py-12 sm:py-16">
        <Container>
          <p className={eyebrow}>The retreat</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">A wellness retreat near Delhi, with space for a different pace.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--sutra-muted)]">Stay in Faridabad and explore guided wellness practices, practical health conversations and time away from your usual routine.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={button}>View Retreat & Book ↗</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center px-4 text-sm font-semibold text-[var(--sutra-teal)]">Ask a Question ↗</a>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          <p className={eyebrow}>Services & experiences</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Explore what may be available.</h2>
          <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {services.map(([title, href]) => <Link key={href} href={href} className="border-t border-[var(--sutra-border-strong)] py-4 text-base font-semibold text-[var(--sutra-teal)]">{title} →</Link>)}
          </div>
        </Container>
      </section>
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)] py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className={eyebrow}>Stay</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Simple residential accommodation.</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--sutra-muted)]">Sector 46, Faridabad · near the Aravallis</p>
            </div>
            <div className="grid grid-cols-2 gap-5 border-t border-[var(--sutra-border-strong)] pt-5 sm:border-t-0 sm:pt-0">
              {["3 Bedrooms", "6 Beds", "3 Bathrooms", "6 Guests"].map((item) => <p key={item} className="text-sm text-[var(--sutra-muted)]">{item}</p>)}
              <p className="col-span-2 text-sm text-[var(--sutra-muted)]">Rooftop terrace · Wi-Fi · Parking · Full kitchen</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 sm:items-end">
            <div>
              <p className={eyebrow}>Before booking</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Check availability and suitability for your dates.</h2>
            </div>
            <p className="text-sm leading-7 text-[var(--sutra-muted)]">The retreat is a wellness experience and does not replace medical diagnosis or treatment. Ask the team about scheduled activities and any health concerns before participating.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={button}>Book the Retreat ↗</a>
            <Link href="/contact" className="inline-flex min-h-12 items-center px-4 text-sm font-semibold text-[var(--sutra-teal)]">Contact Sutra Health →</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
