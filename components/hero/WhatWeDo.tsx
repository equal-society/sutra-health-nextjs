
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Practical support around nutrition, movement, sleep, stress and everyday habits.",
    image: "/images/services/lifestyle-medicine.webp",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Personalised guidance on food and eating habits shaped around your health and daily life.",
    image: "/images/services/nutrition-counselling.webp",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga, movement, breathing and relaxation practices designed around your needs.",
    image: "/images/services/therapeutic-yoga.webp",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Behaviour & Mind Practices",
    description:
      "Practical support for habits, stress, routines and making health changes more sustainable.",
    image: "/images/services/meditation-stress-support.webp",
    href: "/what-we-do/behaviour-mind",
  },
];

export default function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-title"
      className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        {/* Introduction */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[620px]">
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
              className="mt-5 font-serif text-[42px] font-medium leading-[1.02] tracking-[-0.045em] text-[#202522] sm:text-[52px] lg:text-[62px]"
            >
              Different ways to support{" "}
              <span className="font-normal italic text-[#17413D]">
                your health.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[16px] leading-7 text-[#4E5B56] sm:text-[18px] sm:leading-8 lg:pb-1">
            Choose the area that feels most relevant to you, or start with a
            conversation about what you need.
          </p>
        </div>

        {/* Desktop services */}
        <div className="mt-12 hidden border-t border-[#202522]/10 sm:block lg:mt-16">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group grid gap-6 border-b border-[#202522]/10 py-8 transition-colors duration-300 hover:bg-[#E7EDE8]/40 sm:grid-cols-[50px_150px_1fr_auto] sm:items-center sm:gap-7 sm:px-3 lg:grid-cols-[60px_190px_1fr_auto] lg:gap-9 lg:py-9"
            >
              <span className="font-serif text-[20px] text-[#91A298] lg:text-[22px]">
                {service.number}
              </span>

              <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[#E7EDE8]">
                <Image
                  src={service.image}
                  alt={`${service.title} at Sutra Health`}
                  fill
                  sizes="190px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="max-w-[650px]">
                <h3 className="font-serif text-[28px] leading-tight tracking-[-0.025em] text-[#202522] sm:text-[30px] lg:text-[34px]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[16px] leading-7 text-[#65736D]">
                  {service.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden text-[20px] text-[#17413D] transition-transform duration-300 group-hover:translate-x-1 sm:block"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile swipe */}
        <div className="mt-10 sm:hidden">
          <div
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Sutra Health services"
          >
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group w-[86vw] max-w-[360px] shrink-0 snap-center"
              >
                <article className="overflow-hidden border border-[#202522]/10 bg-[#FFFFFF]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E7EDE8]">
                    <Image
                      src={service.image}
                      alt={`${service.title} at Sutra Health`}
                      fill
                      sizes="86vw"
                      className="object-cover transition-transform duration-700 ease-out group-active:scale-[1.02]"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-[15px] text-[#91A298]">
                        {service.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17413D]/15 text-[16px] text-[#17413D]"
                      >
                        →
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-[315px] font-serif text-[30px] leading-[1.03] tracking-[-0.03em] text-[#17413D]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[315px] text-[15px] leading-7 text-[#65736D]">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {services.map((service, index) => (
                <span
                  key={service.number}
                  className={`h-1.5 rounded-full ${
                    index === 0
                      ? "w-6 bg-[#17413D]"
                      : "w-1.5 bg-[#91A298]/60"
                  }`}
                />
              ))}
            </div>

            <Link
              href="/what-we-do"
              className="group inline-flex items-center gap-2 border-b border-[#17413D]/20 pb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#17413D]"
            >
              All services
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
