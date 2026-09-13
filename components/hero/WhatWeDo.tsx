import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "A practical medical approach that looks at nutrition, movement, sleep, stress and everyday habits as part of your health.",
    image: "/images/services/lifestyle-medicine.webp",
    href: "/approach/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Personalised food and nutrition guidance shaped around your health needs, preferences and everyday routine.",
    image: "/images/services/nutrition-counselling.webp",
    href: "/approach/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga and movement practices designed around your needs, ability and health goals.",
    image: "/images/services/therapeutic-yoga.webp",
    href: "/approach/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Breath & Mindfulness",
    description:
      "Simple practices that support breathing awareness, attention and working with everyday stress.",
    image: "/images/services/meditation-stress-support.webp",
    href: "/approach/breath-mindfulness",
  },
];

export default function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-title"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-24 h-[520px] w-[520px] rounded-full bg-[#DCE5DD]/30 blur-3xl"
      />

      <Container>
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#91A298]"
                />
                <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                  What we do
                </p>
              </div>

              <h2
                id="what-we-do-title"
                className="mt-5 max-w-[620px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#202522] sm:text-[50px] lg:text-[60px]"
              >
                Different practices.
                <br />
                <span className="italic text-[#17413D]">
                  One coordinated approach.
                </span>
              </h2>
            </div>

            <div className="max-w-[650px] lg:pb-1">
              <p className="text-[14px] leading-7 text-[#53605B] sm:text-[15px] sm:leading-8">
                Sutra Health brings together lifestyle medicine, nutrition
                counselling, therapeutic yoga, and breath &amp; mindfulness
                according to your health needs, goals and everyday life.
              </p>

              <p className="mt-4 text-[12px] leading-6 text-[#71817B] sm:text-[13px] sm:leading-7">
                You do not need to know which practice you need before you
                start. The right place to begin is understanding your health
                and what you want to change.
              </p>
            </div>
          </div>

          {/* Desktop: editorial rows */}
          <div className="mt-12 hidden border-t border-[#202522]/12 sm:mt-16 sm:block">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group grid gap-5 border-b border-[#202522]/12 py-7 transition-colors duration-300 hover:bg-[#F1EFE7] sm:grid-cols-[52px_150px_1fr_auto] sm:items-center sm:gap-7 sm:px-3 lg:grid-cols-[64px_190px_1fr_auto] lg:gap-9 lg:py-8"
              >
                <span className="font-serif text-[20px] text-[#9AAF9F] lg:text-[22px]">
                  {service.number}
                </span>

                <div className="relative aspect-square w-full overflow-hidden rounded-[10px] bg-[#E8EEE7]">
                  <Image
                    src={service.image}
                    alt={`${service.title} at Sutra Health`}
                    fill
                    sizes="190px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                </div>

                <div className="max-w-[650px]">
                  <h3 className="font-serif text-[27px] leading-tight tracking-[-0.025em] text-[#202522] lg:text-[34px]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 max-w-[600px] text-[13px] leading-6 text-[#65736D] lg:text-[14px] lg:leading-7">
                    {service.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#4F8060] lg:text-[13px]">
                  Explore
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile: horizontal snap slider */}
          <div className="mt-10 sm:hidden">
            <div
              className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Our services"
            >
              {services.map((service) => (
                <Link
                  key={service.number}
                  href={service.href}
                  className="group w-[82vw] max-w-[330px] shrink-0 snap-start overflow-hidden rounded-[18px] border border-[#202522]/10 bg-[#FBFAF6] shadow-[0_8px_30px_rgba(32,37,34,0.06)]"
                >
                  <div className="relative aspect-[1.18] w-full overflow-hidden bg-[#E8EEE7]">
                    <Image
                      src={service.image}
                      alt={`${service.title} at Sutra Health`}
                      fill
                      sizes="82vw"
                      className="object-cover transition-transform duration-700 ease-out group-active:scale-[1.02]"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#F7F5EF]/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#17413D] backdrop-blur-sm">
                      {service.number}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-[27px] leading-tight tracking-[-0.025em] text-[#202522]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[#65736D]">
                      {service.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#17413D]">
                      Explore
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-1 flex items-center justify-between px-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A9891]">
                Swipe to explore
              </p>

              <div
                aria-hidden="true"
                className="h-px w-16 bg-[#B9C5BD]"
              />
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-5 border-t border-[#202522]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[650px] text-[11px] leading-5 text-[#71817B] sm:text-[12px] sm:leading-6">
              These practices are intended to complement appropriate medical
              care, not replace diagnosis, prescribed treatment or emergency
              care.
            </p>

            <Link
              href="/what-we-do"
              className="inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold text-[#17413D] transition-colors hover:text-[#4F8060] sm:text-[13px]"
            >
              See all we do
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
