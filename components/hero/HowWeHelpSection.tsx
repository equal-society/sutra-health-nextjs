import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
      {children}
    </p>
  );
}

const services = [
  {
    title: "Lifestyle Medicine",
    href: "/what-we-do/lifestyle",
    image: "/images/program-lifestyle.webp",
    description:
      "Build practical habits around nutrition, movement, sleep, stress and other factors that influence health.",
  },
  {
    title: "Nutrition",
    href: "/what-we-do/nutrition",
    image: "/images/what-we-do/nutrition-counselling.webp",
    description:
      "Get practical nutrition guidance that considers your health, preferences, routines and goals.",
  },
  {
    title: "Therapeutic Yoga",
    href: "/what-we-do/therapeutic-yoga",
    image: "/images/what-we-do/therapeutic-yoga.webp",
    description:
      "Use therapeutic yoga practices as part of a personalised approach to movement, wellbeing and health.",
  },
  {
    title: "Behaviour, Stress & Mind",
    href: "/what-we-do/behaviour-stress-mind",
    image: "/images/what-we-do/behaviour-mind.webp",
    description:
      "Explore practical ways to work with stress, behaviour and mental wellbeing as part of healthier living.",
  },
];

export default function HowWeHelpSection() {
  return (
    <section
      className="overflow-hidden bg-white"
      aria-labelledby="help-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-15 lg:px-12 lg:py-15">
        <div className="flex flex-col gap-5 border-b border-[#202522]/10 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-[780px]">
            <div className="flex items-center gap-3">
              <Eyebrow>04 · How we help</Eyebrow>
              <span
                className="h-px w-8 bg-[#C8BDA7] sm:w-10"
                aria-hidden="true"
              />
            </div>

            <h2
              id="help-heading"
              className="mt-4 max-w-[760px] font-serif text-[38px] leading-[1.04] tracking-[-0.035em] text-[#202522] sm:mt-5 sm:text-[54px] lg:text-[64px]"
            >
              How we help you develop healthier habits
            </h2>
          </div>

          <Link
            href="/what-we-do"
            className="group inline-flex min-h-11 w-fit items-center rounded-full border border-[#17413D]/20 px-5 py-2.5 text-[13px] font-semibold text-[#17413D] transition-colors hover:border-[#17413D] hover:bg-[#17413D] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17413D] focus-visible:ring-offset-2"
          >
            Explore all
            <ArrowUpRight
              size={15}
              className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-2 md:gap-4">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative min-h-[390px] overflow-hidden bg-[#202522] sm:min-h-[400px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-[#202522]/98 via-[#202522]/55 to-[#202522]/10"
                aria-hidden="true"
              />

              <div className="absolute inset-x-4 top-4 flex items-center justify-between sm:inset-x-6 sm:top-6">
                <span className="rounded-full border border-white/20 bg-[#202522]/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:text-[10px]">
                  0{index + 1}
                </span>

                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-[#17413D]"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-9">
                <h3 className="max-w-[500px] font-serif text-[30px] leading-[1.02] tracking-[-0.025em] text-white sm:text-[38px]">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-[500px] text-[13px] leading-6 text-white/75 sm:text-[14px]">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center text-[12px] font-semibold text-white sm:text-[13px]">
                  Explore service
                  <ArrowUpRight
                    size={15}
                    className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[620px] text-[12px] leading-5 text-[#65736D] sm:text-[13px]">
            Our services can be combined according to your needs, goals and
            circumstances.
          </p>

          <span
            className="hidden h-px flex-1 bg-[#202522]/10 sm:ml-8 sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}