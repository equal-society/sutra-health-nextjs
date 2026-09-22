import Link from "next/link";
import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

export default function HealthBridge() {
  return (
    <section
      aria-labelledby="sutra-introduction-title"
      className="bg-[#FFFFFF]"
    >
      <Container>
        <div
          className="
            grid
            gap-10
            py-16
            sm:py-20
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
            lg:py-24
            xl:py-24
          "
        >
          {/* Main introduction */}
          <div className="max-w-[760px]">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
              What is Sutra Health?
            </p>

            <h2
              id="sutra-introduction-title"
              className="
                mt-5
                max-w-[720px]
                font-serif
                text-[36px]
                font-medium
                leading-[1.08]
                tracking-[-0.025em]
                text-[#202522]
                sm:text-[44px]
                lg:text-[52px]
                xl:text-[56px]
              "
            >
              Healthcare that looks at the{" "}
              <em className="not-italic text-[#17413D]">
                whole picture.
              </em>
            </h2>

            <div className="mt-7 max-w-[650px] space-y-4 font-sans text-[16px] leading-[1.75] text-[#65736D] sm:text-[17px]">
              <p>
                Sutra Health is a doctor-led approach to healthcare that brings
                medical care together with lifestyle medicine, nutrition,
                therapeutic Yoga and behaviour support.
              </p>

              <p>
                Most healthcare stops at a diagnosis and a prescription. We go
                further — looking at how you eat, sleep, move and manage
                stress, and building a plan around those specifics, alongside
                your doctor&apos;s care.
              </p>
            </div>

            <Link
              href="/about"
              className="
                group
                mt-7
                inline-flex
                items-center
                font-sans
                text-[14px]
                font-medium
                text-[#17413D]
                transition-colors
                duration-300
                hover:text-[#12332F]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#17413D]
              "
            >
              Learn our story

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

          {/* EQUAL Society credibility */}
          <div className="flex items-end lg:justify-end">
            <div
              className="
                w-full
                max-w-[390px]
                border-t
                border-[#202522]/10
                pt-6
                lg:pb-1
              "
            >
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                Rooted in work that began in 1997
              </p>

              <h3 className="mt-3 font-serif text-[27px] font-medium leading-[1.15] tracking-[-0.02em] text-[#17413D]">
                EQUAL Society
              </h3>

              <p className="mt-3 font-sans text-[14px] leading-7 text-[#65736D]">
                Sutra Health grows from the work of EQUAL Society, a
                Faridabad-based not-for-profit organisation working across
                health, wellbeing, education and quality of life.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#91A298]">
                <span>Health</span>
                <span aria-hidden="true">·</span>
                <span>Wellbeing</span>
                <span aria-hidden="true">·</span>
                <span>Community</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}