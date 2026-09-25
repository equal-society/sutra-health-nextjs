import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, HeartPulse } from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
      {children}
    </p>
  );
}

/*
  CHANGED: this replaces the previous "Evidence / Behaviour / Personal"
  three-card grid. That grid was structurally and substantively the same
  as SutraHealthModelSection's "Integration / Motivation / Personalisation"
  grid a few sections later — same shape, same abstract one-liners, same
  underlying claim, twice. This was the main source of the repetition.

  Instead of a second abstract philosophy grid, this section now does what
  "Science" should do differently from "Model": name actual studies, with
  a link to the real evidence already published on each condition page.
  Concrete claims here, abstract philosophy stays in the Model section.
*/
const evidenceHighlights = [
  {
    claim:
      "A large multicenter trial across India found a yoga-based lifestyle protocol reduced progression from prediabetes to diabetes by roughly 64% relative to standard care.",
    href: "/conditions/diabetes-blood-sugar",
    label: "See the research",
  },
  {
    claim:
      "Multiple meta-analyses of randomized trials show structured yoga practice is associated with measurable reductions in blood pressure, typically 4 to 10 mmHg.",
    href: "/conditions/high-blood-pressure",
    label: "See the research",
  },
];

export default function ScienceSection() {
  return (
    <section
      className="overflow-hidden bg-[#F7F5EF]"
      aria-labelledby="science-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-15 lg:px-12 lg:py-15">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden bg-[#E7EDE8]">
              <div className="relative aspect-[5/4] sm:aspect-[4/3]">
                <Image
                  src="/images/lifestyle-home.webp"
                  alt="Lifestyle medicine in everyday life"
                  fill
                  sizes="(max-width: 1023px) 100vw, 52vw"
                  className="object-cover"
                />

                <div
                  className="absolute inset-0 ring-1 ring-inset ring-[#202522]/10"
                  aria-hidden="true"
                />

                <div className="absolute left-3 top-3 rounded-full bg-[#F7F5EF]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#17413D] shadow-sm backdrop-blur-sm sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[11px]">
                  Evidence-informed care
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
              <div className="rounded-[1rem] border border-[#202522]/10 bg-white p-3.5 sm:rounded-2xl sm:p-5">
                <BookOpen
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#17413D]"
                  aria-hidden="true"
                />
                <p className="mt-2.5 font-serif text-[17px] leading-tight text-[#202522] sm:mt-3 sm:text-[18px]">
                  Understand
                </p>
                <p className="mt-1 text-[11px] leading-[1.45] text-[#65736D] sm:text-[13px] sm:leading-5">
                  Learn what evidence means for everyday health.
                </p>
              </div>

              <div className="rounded-[1rem] border border-[#202522]/10 bg-white p-3.5 sm:rounded-2xl sm:p-5">
                <HeartPulse
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#17413D]"
                  aria-hidden="true"
                />
                <p className="mt-2.5 font-serif text-[17px] leading-tight text-[#202522] sm:mt-3 sm:text-[18px]">
                  Apply
                </p>
                <p className="mt-1 text-[11px] leading-[1.45] text-[#65736D] sm:text-[13px] sm:leading-5">
                  Turn useful knowledge into realistic habits.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2.5">
              <Eyebrow>02 · The science</Eyebrow>
              <span className="h-px w-7 bg-[#C8BDA7] sm:w-10" aria-hidden="true" />
            </div>

            <h2
              id="science-heading"
              className="mt-4 max-w-[650px] font-serif text-[36px] leading-[1.04] tracking-[-0.035em] text-[#202522] sm:mt-5 sm:text-[52px] lg:text-[62px]"
            >
              Why does Lifestyle Medicine work?
            </h2>

            <p className="mt-5 max-w-[610px] text-[16px] leading-[1.7] text-[#202522] sm:mt-7 sm:text-[19px] sm:leading-[1.75]">
              Not as a general claim — as something studied in randomized
              controlled trials, for specific conditions.
            </p>

            {/*
              CHANGED: two real, sourced study citations, each linking to
              the full evidence on the relevant condition page, instead of
              a second abstract "Evidence / Behaviour / Personal" grid that
              duplicated the Model section further down.
            */}
            <div className="mt-7 space-y-5 border-y border-[#202522]/10 py-6 sm:mt-9">
              {evidenceHighlights.map((item) => (
                <div
                  key={item.href}
                  className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <p className="max-w-[460px] text-[13px] leading-6 text-[#65736D] sm:text-[14px]">
                    {item.claim}
                  </p>

                  <Link
                    href={item.href}
                    className="inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-[#17413D] transition-colors hover:text-[#12332F]"
                  >
                    {item.label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-7 sm:mt-8">
              <Link
                href="/approach"
                className="group inline-flex min-h-12 w-full items-center justify-center bg-[#17413D] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12332F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17413D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F5EF] sm:w-fit sm:text-[14px]"
              >
                See the Full Research
                <ArrowUpRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>

              <p className="mt-4 max-w-[520px] text-[10px] leading-4.5 text-[#65736D] sm:mt-5 sm:text-[11px] sm:leading-5">
                Evidence and recommendations vary by condition and by person.
                This information supports informed conversations with
                qualified healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}