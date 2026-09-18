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
          {/* =====================================================
              CONTENT
          ====================================================== */}
          <div className="max-w-[650px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                Doctor-led integrative healthcare
              </p>
            </div>

            {/* Heading */}
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
                lg:text-[62px]
                xl:text-[66px]
              "
            >
              Better health starts
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              with understanding{" "}
              <em className="not-italic text-[#17413D]">you.</em>
            </h1>

            {/* Supporting copy */}
            <p
              className="
                mt-7
                max-w-[570px]
                font-sans
                text-[17px]
                leading-[1.7]
                text-[#4F5A54]
                sm:mt-8
                sm:text-[18px]
              "
            >
              Sutra Health brings together evidence-informed lifestyle
              medicine, nutrition and therapeutic yoga to help you build
              healthier habits and support long-term wellbeing.
            </p>

            {/* Actions */}
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
                "
              >
                Book a Consultation

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
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
                href="/what-we-do"
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
                "
              >
                See how we can help

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
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

            {/* Trust line */}
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
                <span>Doctor-led</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#91A298]"
                />

                <span>Evidence-informed</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#91A298]"
                />

                <span>Whole-person care</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              IMAGE
          ====================================================== */}
          <div className="relative lg:ml-auto lg:w-full">
            <div
              className="
                relative
                aspect-[4/3.7]
                w-full
                overflow-hidden
                sm:aspect-[4/3.6]
                lg:aspect-[4/4.35]
              "
            >
              {/* Desktop image */}
              <Image
                src="/images/dr.png"
                alt="Doctor-led consultation at Sutra Health"
                fill
                priority
                sizes="(max-width: 1023px) 0vw, 44vw"
                className="
                  hidden
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.015]
                  lg:block
                "
              />

              {/* Mobile image */}
              <Image
                src="/images/dr.png"
                alt="Doctor-led consultation at Sutra Health"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 0vw"
                className="
                  block
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.015]
                  lg:hidden
                "
              />
            </div>

            {/* Editorial image label */}
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
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#4F5A54]">
                Care designed around you
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}