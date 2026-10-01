import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Guidance to connect everyday health habits with your clinical care.",
    href: "/services/lifestyle",
    image: "/images/program-lifestyle.webp",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Food choices and meal routines discussed around your needs and preferences.",
    href: "/services/nutrition",
    image: "/images/retreat/diet.webp",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Guided practices adapted to your mobility, comfort and health context.",
    href: "/services/therapeutic-yoga",
    image: "/images/what-we-do/yoga.png",
  },
  {
    number: "04",
    title: "Behaviour, Stress & Mind",
    description:
      "Tools to work through barriers, stress and routines that are hard to sustain.",
    href: "/services/behaviour-stress-mind",
    image: "/images/what-we-do/mind.png",
  },
];

export default function HowWeHelpSection() {
  return (
    <section
      aria-labelledby="help-heading"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          {/* Introduction */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                Our Services
              </p>
            </div>

            <h2
              id="help-heading"
              className="mt-5 max-w-[600px] font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px] lg:text-[58px]"
            >
              Care shaped around what you need.
            </h2>

            <p className="mt-5 max-w-[500px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px] sm:leading-8">
              Choose from consultations and focused support in nutrition, Yoga
              and behaviour change. Each service has its own role in your care plan.
            </p>

            <Link
              href="/services"
              className="group mt-6 inline-flex items-center border-b border-[var(--sutra-ink)] pb-2 font-sans text-[13px] font-medium text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-sage)] hover:text-[var(--sutra-sage)] sm:text-[14px]"
            >
              View all services
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Services */}
          <div className="border-t border-[var(--sutra-border)]">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group grid grid-cols-[76px_1fr_auto] items-center gap-4 border-b border-[var(--sutra-border)] py-4 sm:grid-cols-[90px_1fr_auto] sm:gap-5 sm:py-5"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-[76px] overflow-hidden bg-[var(--sutra-soft-beige)] sm:w-[90px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 76px, 90px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-serif text-[19px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[24px]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 max-w-[480px] font-sans text-[12px] leading-5 text-[var(--sutra-muted)] sm:text-[14px] sm:leading-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--sutra-teal)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
