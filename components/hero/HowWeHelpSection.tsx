import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Practical support around everyday habits, health and lifestyle alongside appropriate medical care.",
    href: "/services/lifestyle",
    image: "/images/program-lifestyle.webp",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Personalised guidance around food and healthier eating habits shaped around your health and daily life.",
    href: "/services/nutrition",
    image: "/images/what-we-do/nutrition-counselling.webp",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Yoga practices adapted around your health, needs and ability.",
    href: "/services/therapeutic-yoga",
    image: "/images/what-we-do/therapeutic-yoga.webp",
  },
  {
    number: "04",
    title: "Behaviour, Stress & Mind",
    description:
      "Support for stress, habits and sustainable behaviour change.",
    href: "/services/behaviour-stress-mind",
    image: "/images/what-we-do/behaviour-mind.webp",
  },
];

export default function HowWeHelpSection() {
  return (
    <section
      aria-labelledby="help-heading"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-32">

          {/* Introduction */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[var(--sutra-sage)]"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[11px]">
                How We Help
              </p>
            </div>

            <h2
              id="help-heading"
              className="mt-5 max-w-[560px] font-serif text-[40px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[50px] lg:text-[58px]"
            >
              Care shaped around what you need.
            </h2>

            <p className="mt-6 max-w-[500px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">
              We bring together different areas of care and support according
              to your health, goals and circumstances.
            </p>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center border-b border-[var(--sutra-ink)] pb-2 font-sans text-[13px] font-medium text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-sage)] hover:text-[var(--sutra-sage)] sm:text-[14px]"
            >
              Explore our services

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
                className="group grid gap-5 border-b border-[var(--sutra-border)] py-6 sm:grid-cols-[38px_110px_1fr_auto] sm:items-center sm:gap-6 sm:py-7"
              >
                {/* Number */}
                <span className="font-sans text-[10px] font-medium tracking-[0.12em] text-[var(--sutra-sage)]">
                  {service.number}
                </span>

                {/* Image */}
                <div className="relative aspect-[4/3] w-[110px] overflow-hidden bg-[var(--sutra-soft-beige)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="110px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-[23px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] transition-colors  sm:text-[29px]">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-[520px] font-sans text-[13px] leading-6 text-[var(--sutra-muted)] sm:text-[14px]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="hidden h-9 w-9 shrink-0 items-center justify-center border border-[var(--sutra-border)] text-[var(--sutra-ink)] transition-colors duration-300 group-hover:border-[var(--sutra-sage)] group-hover:bg-[var(--sutra-teal)] group-hover:text-white sm:flex"
                >
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}