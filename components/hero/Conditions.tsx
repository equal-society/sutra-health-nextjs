import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const conditions = [
  {
    number: "01",
    title: "Weight Management",
    description:
      "Not another crash diet. A plan built around food you'll actually keep eating.",
    href: "/conditions/weight-management",
    image: "/images/conditions/weight-management.webp",
  },
  {
    number: "02",
    title: "Metabolic Health",
    description:
      "A closer look at your diet, movement, and daily routine — alongside your existing medical care.",
    href: "/conditions/metabolic-health",
    image: "/images/conditions/metabolic-health.webp",
  },
  {
    number: "03",
    title: "High Blood Pressure",
    description:
      "Lifestyle changes worth exploring, done in coordination with your doctor.",
    href: "/conditions/high-blood-pressure",
    image: "/images/conditions/high-blood-pressure.webp",
  },
  {
    number: "04",
    title: "Arthritis & Joint Pain",
    description:
      "Movement-based practices adapted for your body and everyday mobility.",
    href: "/conditions/arthritis-joint-pain",
    image: "/images/conditions/arthritis-joint-pain.webp",
  },
];

export default function Conditions() {
  return (
    <section
      aria-labelledby="conditions-heading"
      className="bg-[#F5F6F0] py-14 sm:py-18 lg:py-20"
    >
      <Container>
        <div className="flex flex-col gap-5 border-b border-[#202522]/10 pb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#91A298]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[10px]">
                Health Concerns
              </p>
            </div>

            <h2
              id="conditions-heading"
              className="mt-4 font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[46px] lg:text-[52px]"
            >
              Health conditions we support{" "}
              <span className="italic font-normal text-[#17413D]">
                through lifestyle-focused care.
              </span>
            </h2>

            <p className="mt-4 max-w-[610px] text-[12px] leading-6 text-[#687A73] sm:text-[13px] sm:leading-7">
              Explore selected health concerns where lifestyle, nutrition,
              movement and other supportive practices may form part of a
              broader care plan.
            </p>
          </div>

          <Link
            href="/conditions"
            className="group hidden shrink-0 items-center gap-2 pb-1 text-[11px] font-semibold text-[#17413D] sm:inline-flex"
          >
            Explore all conditions
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-5">
          {conditions.map((condition) => (
            <Link
              key={condition.href}
              href={condition.href}
              className="group w-[78vw] shrink-0 snap-start sm:w-auto sm:shrink"
            >
              <article className="h-full overflow-hidden rounded-[14px] border border-[#202522]/10 bg-[#FCFCF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(23,63,53,0.07)]">
                <div className="relative aspect-[4/2.55] overflow-hidden bg-[#E2E8E0]">
                  <Image
                    src={condition.image}
                    alt={`${condition.title} lifestyle healthcare`}
                    fill
                    sizes="(max-width: 639px) 78vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="flex min-h-[142px] flex-col p-4 sm:min-h-[150px] sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-semibold tracking-[0.16em] text-[#91A298]">
                      {condition.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#17413D]/10 text-[12px] text-[#17413D] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#17413D] group-hover:text-white"
                    >
                      →
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-[20px] leading-[1.08] tracking-[-0.025em] text-[#17413D] sm:text-[21px]">
                    {condition.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-[#71817A] sm:text-[11px]">
                    {condition.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-5 sm:hidden">
          <Link
            href="/conditions"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold text-[#17413D]"
          >
            Explore all conditions
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
