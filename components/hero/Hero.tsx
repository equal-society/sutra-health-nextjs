import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-[#F7F5EF]"
    >
      <Container>
        <div
          className="
            grid
            items-center
            gap-10
            py-12
            sm:py-14
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-12
            lg:px-10
            lg:py-16
            xl:gap-16
          "
        >
          {/* Content */}
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                Doctor-guided yoga therapy & lifestyle medicine
              </p>
            </div>

          
            <h1
              id="hero-title"
              className="
                mt-6
                max-w-[650px]
                font-serif
                text-[42px]
                font-medium
                leading-[1.06]
                tracking-[-0.025em]
                text-[#202522]
                sm:mt-7
                sm:text-[50px]
                md:text-[56px]
                lg:text-[58px]
                xl:text-[62px]
              "
            >
              A doctor-guided approach to{" "}
              <em className="not-italic text-[#17413D]">
                yoga therapy and lifestyle medicine.
              </em>
            </h1>

            <p
              className="
                mt-7
                max-w-[570px]
                font-sans
                text-[17px]
                leading-[1.7]
                text-[#65736D]
                sm:mt-8
                sm:text-[18px]
              "
            >
              Sutra Health combines therapeutic yoga, nutrition counselling
              and lifestyle coaching to support healthier habits and
              long-term wellbeing — alongside your medical care, not instead
              of it.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                items-start
                gap-5
                sm:mt-9
                sm:flex-row
                sm:items-center
                sm:gap-6
              "
            >
              <Link
                href="/book-appointment"
                className="
                  group
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  bg-[#17413D]
                  px-6
                  font-sans
                  text-[14px]
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#12332F]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-3
                  focus-visible:outline-[#17413D]
                "
              >
                Book a Consultation

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="
                    ml-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>

              <Link
                href="/assessment"
                className="
                  group
                  inline-flex
                  items-center
                  font-sans
                  text-[14px]
                  font-medium
                  text-[#202522]
                  transition-colors
                  duration-300
                  hover:text-[#17413D]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#17413D]
                "
              >
                {/* "Free" added — the old site calls this assessment free,
                    and naming it lowers the barrier to click. */}
                Take the Free 21-Point Assessment

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="
                    ml-2
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>

            {/*
              CHANGED: replaced the vague "Doctor-led · Evidence-informed ·
              Whole-person care" badges with the real, specific numbers
              already published on lifequality.org.in. Concrete, checkable
              facts build more trust than adjectives, and they're exactly
              the kind of content AI answer tools and Google favor citing.
            */}
            <div
              className="
                mt-8
                border-t
                border-[#202522]/10
                pt-5
                sm:mt-9
                sm:pt-6
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  font-sans
                  text-[12px]
                  font-medium
                  text-[#65736D]
                "
              >
                <span>1,200+ people supported</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#91A298]"
                />

                <span>15 years of experience</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#91A298]"
                />

                <span>Serving Delhi NCR & online across India</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:ml-auto lg:w-full">
            <div
              className="
                relative
                aspect-[4/3.7]
                w-full
                overflow-hidden
                border border-[#202522]/10
                sm:aspect-[4/3.6]
                lg:aspect-[4/4.35]
              "
            >
              <Image
                src="/images/dr.png"
                alt="Doctor-guided yoga therapy consultation at Sutra Health"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 44vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.015]
                "
              />
            </div>

            <div
              className="
                absolute
                bottom-4
                left-4
                bg-[#F7F5EF]/95
                px-4
                py-3
                sm:bottom-5
                sm:left-5
              "
            >
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#65736D]">
                Care designed around you
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}