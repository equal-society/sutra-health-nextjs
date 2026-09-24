import Link from "next/link";

const services = [
  {
    title: "Lifestyle Medicine",
    href: "/what-we-do/lifestyle",
    description:
      "Build practical habits around nutrition, movement, sleep, stress and other factors that influence health.",
  },
  {
    title: "Nutrition",
    href: "/what-we-do/nutrition",
    description:
      "Get practical nutrition guidance that considers your health, preferences, routines and goals.",
  },
  {
    title: "Therapeutic Yoga",
    href: "/what-we-do/therapeutic-yoga",
    description:
      "Use therapeutic yoga practices as part of a personalised approach to movement, wellbeing and health.",
  },
  {
    title: "Behaviour, Stress & Mind",
    href: "/what-we-do/behaviour-stress-mind",
    description:
      "Explore practical ways to work with stress, behaviour and mental wellbeing as part of healthier living.",
  },
];

export default function HowWeHelpSection() {
  return (
    <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="help-heading">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
            04 · Care &amp; support
          </p>
          <h2
            id="help-heading"
            className="mt-5 max-w-[1050px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px]"
          >
            Support for healthier everyday habits
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
          <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
            <p className="max-w-[620px] font-sans text-[16px] leading-[1.7] text-[#65736D] sm:text-[17px]">
              Choose the kind of support that fits your health, circumstances
              and goals. Our services are designed to turn health information
              into practical steps you can work into everyday life.
            </p>

            <div className="mt-7 border-l border-[#C8BDA7] pl-4">
              <p className="font-sans text-[13px] leading-6 text-[#65736D] sm:text-[14px]">
                Your care can involve one service or a combination of support,
                depending on what is appropriate for you.
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
                <span className="pt-1 font-sans text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-serif text-[22px] font-medium leading-[1.08] tracking-[-0.02em] text-[#202522] transition-colors duration-300 group-hover:text-[#17413D] sm:text-[24px]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[650px] font-sans text-[13px] leading-6 text-[#65736D] sm:text-[14px] sm:leading-7">
                    {service.description}
                  </p>
                </div>

                <span
                  className="pt-1 font-sans text-[16px] text-[#17413D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            ))}

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              <Link
                href="/conditions"
                className="font-sans text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4 transition-colors hover:text-[#12332F]"
              >
                Explore health conditions →
              </Link>
              <Link
                href="/what-we-do"
                className="font-sans text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4 transition-colors hover:text-[#12332F]"
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
