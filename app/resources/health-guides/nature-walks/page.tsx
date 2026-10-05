import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/resources/health-guides/nature-walks`;

export const metadata: Metadata = {
  title: "Nature Walks & Indoor Plants for Everyday Wellbeing | Sutra Health",
  description:
    "A practical guide to walking in natural settings, building a manageable walking habit and caring for familiar indoor plants.",
  keywords: [
    "nature walks benefits",
    "walking in nature benefits",
    "nature walk for wellbeing",
    "indoor plants for home",
    "indoor plants and wellbeing",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Nature Walks & Indoor Plants for Everyday Wellbeing | Sutra Health",
    description:
      "A practical guide to walking in natural settings, building a manageable walking habit and caring for familiar indoor plants.",
    siteName: "Sutra Health",
    locale: "en_IN",
  },
};

const plants = [
  ["Peace Lily", "Spathiphyllum", "/images/Peace-Lily.jpg", "A flowering houseplant that generally prefers indirect light and consistent moisture."],
  ["Spider Plant", "Chlorophytum comosum", "/images/Spider-Plant.jpg", "A familiar, relatively easy-to-grow houseplant that can adapt to a range of indoor conditions."],
  ["Money Plant", "Golden Pothos", "/images/money-plant.jpg", "A hardy trailing plant that can add greenery to indoor spaces when given suitable care."],
  ["Snake Plant", "Dracaena trifasciata", "/images/snake-plant.jpg", "A relatively low-maintenance houseplant that tolerates a range of indoor conditions."],
  ["Boston Fern", "Nephrolepis exaltata", "/images/Boston-Fern.jpg", "A leafy fern that can bring texture and greenery indoors and generally prefers consistent moisture."],
];

const routine = [
  ["01", "Choose a comfortable route", "Select a safe path, park or green space that suits your surroundings, mobility and available time."],
  ["02", "Walk at a sustainable pace", "Choose an intensity appropriate for you and build gradually if you are becoming more active."],
  ["03", "Reduce digital distractions", "When practical and safe, use some of the walk to step away from continuous screen use and notice your surroundings."],
  ["04", "Make it repeatable", "A short walk that fits your week is more useful than a target you cannot maintain."],
];

const faqs = [
  ["What are the benefits of walking in nature?", "Walking provides physical activity, while a natural setting can offer a change of environment and an opportunity to spend time outdoors. The experience will vary with the person, route and surroundings."],
  ["Is a nature walk different from regular walking?", "The physical activity is still walking. A nature walk simply takes place in a natural or green environment such as a park, trail or suitable outdoor space."],
  ["How can I start a nature-walking habit?", "Start with a safe route and an amount of time that fits your routine. You can gradually increase activity as appropriate."],
  ["Can indoor plants clean the air in my home?", "Some plants have been studied for pollutant removal under controlled laboratory conditions. They should not replace ventilation, source control or appropriate air-cleaning measures."],
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Nature Walks and Indoor Plants",
  description:
    "An educational guide to walking in natural settings, building a manageable walking habit and caring for familiar indoor plants.",
  mainEntityOfPage: PAGE_URL,
  author: { "@type": "Organization", name: "Sutra Health", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Sutra Health", url: SITE_URL },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
    { "@type": "ListItem", position: 3, name: "Health Guides", item: `${SITE_URL}/resources/health-guides` },
    { "@type": "ListItem", position: 4, name: "Nature Walks & Indoor Plants", item: PAGE_URL },
  ],
};

export default function NatureWalksPage() {
  return (
    <main className="bg-[#F7F5EF] text-[#202522]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="relative isolate overflow-hidden border-b border-[var(--sutra-border)] bg-[var(--sutra-ink)]">
  {/* Background image */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/indoor.jpg')",
    }}
  />

  {/* Sutra brand overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-[var(--sutra-ink)]/60"
  />

  {/* Additional gradient for text readability */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--sutra-ink)]/85 via-[var(--sutra-ink)]/60 to-[var(--sutra-ink)]/25"
  />

  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--sutra-ink)]/65 via-transparent to-[var(--sutra-ink)]/15"
  />

  <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-14 pt-6 sm:px-8 lg:px-12 lg:pb-24">

    

    <div className="grid items-center gap-12 mt-6 lg:grid-cols-[1fr_0.92fr] lg:gap-20">

      {/* Hero content */}
      <div>
        <div className="mb-7 flex items-center gap-3">
          <span
            className="h-px w-10 bg-[var(--sutra-sage)]"
            aria-hidden="true"
          />

          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-sage)]">
            Health Guide · Movement & Nature
          </p>
        </div>

        <h1 className="max-w-4xl font-[var(--font-serif)] text-[48px] leading-[0.97] tracking-[-0.035em] text-[var(--sutra-white)] sm:text-[66px] lg:text-[80px]">
          Nature Walks &
          <br />
          Indoor Plants
        </h1>

        <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[var(--sutra-white)]/85 sm:text-[18px]">
          Simple ways to spend time outdoors, build a walking habit that fits
          your routine and bring greenery into your home.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--sutra-white)]/70">
          <span>Health Guide</span>

          <span
            className="text-[var(--sutra-sage)]"
            aria-hidden="true"
          >
            •
          </span>

          <span>Movement &amp; nature</span>
        </div>
      </div>

     

    </div>
  </div>
</header>

      <section className="border-b border-[rgba(32,37,34,0.10)] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-9 px-5 py-14 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-16 lg:px-12 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">The simple idea</p>
          <div>
            <p className="max-w-4xl font-serif text-[30px] leading-[1.2] sm:text-[42px]">
              Make room for movement outdoors and greenery indoors.
            </p>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              Walking in a natural setting does not need a special programme. A suitable route, a comfortable pace and a realistic amount of time can be enough to get started. Indoor plants offer a separate, simple way to bring greenery into a living or working space.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(32,37,34,0.10)] bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] overflow-x-auto px-5 sm:px-8 lg:px-12">
          <nav className="flex min-w-max gap-8 py-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#65736D]">
            <a href="#nature-walks">Nature walks</a><a href="#plants">Indoor plants</a><a href="#routine">Routine</a><a href="#questions">Questions</a>
          </nav>
        </div>
      </section>

      <section id="nature-walks" className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">Nature walks</p>
            <div className="mt-6 h-px w-16 bg-[#91A298]" />
          </div>
          <div>
            <h2 className="max-w-3xl font-serif text-[38px] leading-[1.05] tracking-[-0.025em] sm:text-[54px]">
              Walking is simple physical activity. Nature adds the setting.
            </h2>
            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              Walking is a straightforward form of physical activity that can be fitted around everyday life. Choose a route, pace and duration that match your current ability, surroundings and available time.
            </p>
            <p className="mt-5 max-w-3xl text-[17px] leading-8 text-[#65736D]">
              A natural or green setting can provide a change from indoor or built-up surroundings. The practical question is not how far you have to walk, but how to choose an environment and routine that you can use safely and consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E7EDE8]" id="plants">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">Bring nature indoors</p>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] sm:text-[56px]">Indoor plants for a pleasant home environment.</h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#65736D]">
              These five familiar houseplants are included as practical examples of indoor greenery. Their care needs differ, so choose according to available light, watering requirements, space and household circumstances.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map(([name, botanical, image, text]) => (
              <article key={name} className="overflow-hidden rounded-[24px] border border-[rgba(32,37,34,0.10)] bg-white">
                <div className="relative aspect-square overflow-hidden bg-[#F7F5EF]">
                  <Image src={image} alt={`${name} indoor plant`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
                </div>
                <div className="p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#17413D]">{botanical}</span>
                  <h3 className="mt-2 font-serif text-[28px] leading-tight">{name}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#65736D]">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-[rgba(32,37,34,0.12)] pt-7">
            <p className="max-w-3xl text-[13px] leading-6 text-[#65736D]">
              Indoor plants can be enjoyable additions to a home, but they should not be treated as a replacement for ventilation, filtration or other appropriate indoor-air-quality measures.
            </p>
          </div>
        </div>
      </section>

      <section id="routine" className="border-y border-[rgba(32,37,34,0.10)] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">Everyday routine</p>
              <h2 className="mt-5 max-w-md font-serif text-[40px] leading-[1.04] sm:text-[54px]">Keep the habit realistic.</h2>
              <p className="mt-6 max-w-md text-[16px] leading-7 text-[#65736D]">
                A walking habit is easier to maintain when the route, pace and timing fit the way your week actually works.
              </p>
            </div>

            <div className="border-t border-[rgba(32,37,34,0.10)]">
              {routine.map(([number, title, text]) => (
                <article key={number} className="grid gap-4 border-b border-[rgba(32,37,34,0.10)] py-7 sm:grid-cols-[70px_1fr] sm:gap-8 sm:py-9">
                  <span className="text-[12px] font-semibold tracking-[0.12em] text-[#91A298]">{number}</span>
                  <div>
                    <h3 className="font-serif text-[25px] sm:text-[30px]">{title}</h3>
                    <p className="mt-3 max-w-2xl text-[16px] leading-7 text-[#65736D]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

    

      <section id="questions" className="bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-10 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17413D]">Questions</p>
            <h2 className="mt-5 font-serif text-[38px] leading-[1.05] sm:text-[52px]">Common questions about nature walks and indoor plants</h2>
          </div>
          <div className="border-t border-[rgba(32,37,34,0.10)]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[rgba(32,37,34,0.10)] py-6">
                <summary className="flex cursor-pointer list-none justify-between gap-8 font-serif text-[21px] sm:text-[25px]">
                  <span>{question}</span><span className="text-2xl text-[#17413D] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 text-[16px] leading-7 text-[#65736D]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(32,37,34,0.10)] bg-[#F7F5EF]">
        <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <p className="max-w-4xl text-[13px] leading-6 text-[#65736D]">
            This guide is for general education and does not replace individual medical advice. If a health condition, mobility concern or other circumstance affects your ability to exercise, seek appropriate professional guidance before changing your activity level.
          </p>
        </div>
      </section>

   
    </main>
  );
}
