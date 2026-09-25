"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type AcademicType = "All" | "Blog" | "Publication" | "Teaching" | "Talk";

type AcademicItem = {
  type: Exclude<AcademicType, "All">;
  date: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  source?: string;
};

const academicItems: AcademicItem[] = [
  {
    type: "Blog",
    date: "26 Jun 2026",
    title: "Empowering patients through three Evidence-Based Lifestyle Practices",
    description:
      "An introduction to the Three-Layered Approach, bringing Lifestyle Medicine, Integrative Medicine and Natural Healing together to help patients make informed decisions with healthcare professionals.",
    href: "https://academic.lifequality.org.in/posts/2026/06/empowering-patients-tla/",
    source: "Academic site",
  },
  {
    type: "Blog",
    date: "24 Jun 2026",
    title:
      "Micronutrient Deficiencies: Why Dietary Diversity, Not More Pills, May Be the Sustainable Fix",
    description:
      "A discussion of dietary diversity and a sustainable approach to micronutrient deficiencies, published through the Integrative Wellness Journal on Medium.",
    href: "https://academic.lifequality.org.in/posts/2026/06/micronutrient-deficiencies-tla/",
    source: "Academic site",
  },
  {
    type: "Blog",
    date: "04 May 2026",
    title:
      "A CT Scan Said IBD. A Colonoscopy Said Otherwise. What Finally Helped This IBS Patient Wasn’t a Drug",
    description:
      "A case-based account describing structured diet, yoga and a traffic-light system in the management of a chronic IBS case.",
    href: "https://academic.lifequality.org.in/posts/2026/05/restlessness-to-actively-calm",
    source: "Academic site",
  },
  {
    type: "Blog",
    date: "24 Apr 2026",
    title: "From Restlessness to Actively Calm",
    description:
      "A six-step practical pathway built around acceptance, gratitude, stillness, yoga, joy and right action.",
    href: "https://academic.lifequality.org.in/posts/2026/04/restlessness-to-actively-calm",
    source: "Academic site",
  },
  {
    type: "Blog",
    date: "19 Apr 2026",
    title:
      "Red, Yellow, Green: A Simple System Changing How We Fight Chronic Disease",
    description:
      "An explanation of the Traffic Light approach and its relevance to chronic disease driven by unhealthy behaviours.",
    href: "https://academic.lifequality.org.in/blog/",
    source: "Academic site",
  },
  {
    type: "Blog",
    date: "14 Feb 2026",
    title: "Universal health coverage begins with prevention, not insurance",
    description:
      "A prevention-focused perspective on personal lifestyle and health systems, published in Policy Circle.",
    href: "https://academic.lifequality.org.in/blog/",
    source: "Policy Circle / Academic site",
  },
  {
    type: "Teaching",
    date: "2026",
    title: "Indian Systems of Medicine to Lifestyle Medicine: A continuum",
    description:
      "An MBBS undergraduate lecture connecting the history of Indian medical systems with prevention, self-care, Yoga and Lifestyle Medicine.",
    href: "https://academic.lifequality.org.in/teaching/2026-ISM-Lifestyle",
    source: "Academic site",
  },
  {
    type: "Teaching",
    date: "2026",
    title:
      "Learning to Learn: A Framework for Self-Directed Knowledge Management in Medical and Public Health Education",
    description:
      "A postgraduate seminar on personal knowledge management, metacognition, learning systems, time-based learning and practical tools.",
    href: "https://academic.lifequality.org.in/teaching/2026-Learning-to-Learn",
    source: "Academic site",
  },
  {
    type: "Teaching",
    date: "2026",
    title: "Teaching Yoga by personal demonstration",
    description:
      "A global video collection introducing selected Yoga material and practical demonstrations.",
    href: "https://academic.lifequality.org.in/teaching/2026-Yoga",
    source: "Academic site",
  },
  {
    type: "Teaching",
    date: "2026",
    title: "Integrated Health Clinic at ESIC, Faridabad",
    description:
      "A presentation for faculty and MD students describing the experience of starting and managing an Integrated Health Clinic for chronic disease care.",
    href: "https://academic.lifequality.org.in/teaching/2026-MD-teaching",
    source: "Academic site",
  },
  {
    type: "Talk",
    date: "20 Jul 2026",
    title:
      "From Risk to Resilience — Healthy People in Healthy Communities through Lifestyle",
    description:
      "A talk at LBSNAA, Mussoorie connecting individual and population health, risks, mitigation choices and the unrealized potential for advancing health.",
    href: "https://academic.lifequality.org.in/talks/2026-07-20-Disaster-Resilience",
    source: "Academic site",
  },
  {
    type: "Talk",
    date: "11 Jul 2025",
    title: "Women, Health and Economics",
    description:
      "A presentation at LBSNAA, Mussoorie for an in-service programme focused on women’s economic inclusion.",
    href: "https://academic.lifequality.org.in/talks/2025-07-11-Women-Economics",
    source: "Academic site",
  },
  {
    type: "Publication",
    date: "2026",
    title:
      "Learning to Learn: A Framework for Self-Directed Knowledge Management in Medical and Public Health Education",
    description:
      "Research and educational work on building efficient personal knowledge-management and information-processing systems.",
    href: "https://doi.org/10.5281/ZENODO.22107119",
    external: true,
    source: "Zenodo",
  },
  {
    type: "Publication",
    date: "2026",
    title:
      "From Risk to Resilience: Healthy People in Healthy Communities through Lifestyle",
    description:
      "A 2026 publication connected with the lifestyle and resilience perspective presented at LBSNAA, Mussoorie.",
    href: "https://doi.org/10.5281/ZENODO.21472905",
    external: true,
    source: "Zenodo",
  },
  {
    type: "Publication",
    date: "2026",
    title:
      "Remission of Irritable Bowel Syndrome Achieved Through Combined Diet, Lifestyle Modification, and Yoga: A Case Report",
    description:
      "A case report examining a combined diet, lifestyle modification and Yoga approach in IBS.",
    href: "https://doi.org/10.20944/preprints202603.0183.v1",
    external: true,
    source: "MDPI",
  },
  {
    type: "Publication",
    date: "2022",
    title:
      "Dietary diversity as a sustainable approach towards micronutrient deficiencies in India",
    description:
      "Published research examining dietary diversity as a sustainable approach to micronutrient deficiencies in India.",
    href: "https://doi.org/10.4103/ijmr.ijmr_3314_21",
    external: true,
    source: "Indian Journal of Medical Research",
  },
];

const filters: AcademicType[] = [
  "All",
  "Blog",
  "Publication",
  "Teaching",
  "Talk",
];

const typeLabel: Record<AcademicItem["type"], string> = {
  Blog: "Blog",
  Publication: "Publication",
  Teaching: "Teaching",
  Talk: "Talk",
};

export default function AcademicResearchPage() {
  const [activeFilter, setActiveFilter] = useState<AcademicType>("All");

  const visibleItems = useMemo(
    () =>
      activeFilter === "All"
        ? academicItems
        : academicItems.filter((item) => item.type === activeFilter),
    [activeFilter]
  );

  return (
    <main className="bg-[#F7F5EF] text-[#202522]">
      {/* Hero */}
      <section
        aria-labelledby="academic-research-title"
        className="overflow-hidden border-b border-[#202522]/10 bg-[#F7F5EF]"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Eyebrow */}
          <div className=" py-6 sm:py-8">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D] sm:text-[11px] sm:tracking-[0.24em]">
              <span
                className="h-px w-6 shrink-0 bg-[#91A298] sm:w-8"
                aria-hidden="true"
              />
              Academic &amp; Research
            </p>
          </div>

          {/* Main statement */}
          <div className="border-b border-[#202522]/10 py-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h1
                id="academic-research-title"
                className="max-w-[1080px] font-serif text-[clamp(2.75rem,5.8vw,5.75rem)] leading-[0.93] tracking-[-0.04em] text-[#202522] sm:leading-[0.88]"
              >
                Academic &amp; Research
                <br className="hidden sm:block" />
                behind better health.
              </h1>

            
            </div>
          </div>

          {/* Intro */}
          <div className=" py-3 sm:py-5">
            <p className="max-w-4xl text-[1.125rem] leading-7 tracking-[-0.01em] text-[#202522] sm:text-2xl sm:leading-9">
              Research, publications, teaching, talks and practical writing connected
              with the work behind Sutra Health.
            </p>
          </div>

          {/* Supporting copy */}
          <div className="border-b border-[#202522]/10">
            <p className="max-w-3xl text-[13px] leading-6 text-[#65736D] sm:text-base sm:leading-7">
              Explore recent articles, publications, lectures and talks. When
              you want the complete work, follow the link to its original
              academic or publishing source.
            </p>
          </div>

          {/* CTA */}
          <div className="border-b border-[#202522]/10 py-6 sm:py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#latest-work"
                className="inline-flex min-h-11 w-full items-center justify-center gap-3 bg-[#17413D] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12332F] focus:outline-none focus:ring-2 focus:ring-[#17413D] focus:ring-offset-2 focus:ring-offset-[#F7F5EF] sm:w-auto"
              >
                Explore latest work
                <span aria-hidden="true">↓</span>
              </Link>

              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[#202522]/15 px-5 py-3 text-sm font-semibold text-[#17413D] transition-colors hover:border-[#17413D] focus:outline-none focus:ring-2 focus:ring-[#17413D] focus:ring-offset-2 focus:ring-offset-[#F7F5EF] sm:w-auto"
              >
                Academic site
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Brand line */}
          <div className="py-5 sm:py-6">
            <p className="max-w-xl text-[10px] leading-5 text-[#65736D] sm:text-[11px]">
              Your partner in recovery and wellness through science-based
              traditional wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Latest work */}
      <section
        id="latest-work"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
      >
        <div className="mb-8 border-b border-black/10 pb-7 sm:mb-10 sm:pb-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D] sm:text-[11px]">
                The knowledge feed
              </p>

              <h2 className="font-serif text-[2.35rem] leading-none tracking-[-0.025em] sm:text-5xl">
                Latest academic work
              </h2>
            </div>

            {/* Filter rail */}
            <div
              className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-none lg:max-w-[620px] lg:flex-wrap lg:justify-end lg:overflow-visible"
              aria-label="Filter academic work"
            >
              {filters.map((filter) => {
                const active = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={active}
                    className={`min-h-10 shrink-0 border px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-[#17413D] focus:ring-offset-2 ${
                      active
                        ? "border-[#17413D] bg-[#17413D] text-white"
                        : "border-black/15 bg-transparent text-[#65736D] hover:border-[#17413D] hover:text-[#17413D]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Editorial feed */}
        <div className="divide-y divide-black/10 border-y border-black/10">
          {visibleItems.map((item, index) => (
            <article
              key={`${item.type}-${item.title}`}
              className="group py-7 sm:py-8 lg:grid lg:grid-cols-[110px_minmax(0,1fr)_auto] lg:gap-8"
            >
              {/* Type */}
              <div className="mb-4 flex items-center gap-3 lg:mb-0 lg:pt-1">
                <span className="font-mono text-[10px] text-[#91A298]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#65736D]">
                  {typeLabel[item.type]}
                </span>
              </div>

              {/* Content */}
              <div className="max-w-4xl">
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#65736D] sm:gap-x-3 sm:text-xs">
                  <span>{item.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.source}</span>
                </div>

                <h3 className="font-serif text-[1.55rem] leading-[1.08] tracking-[-0.02em] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-3xl text-[13px] leading-6 text-[#65736D] sm:text-[15px]">
                  {item.description}
                </p>
              </div>

              {/* Link */}
              <div className="mt-5 lg:mt-0 lg:self-start lg:pt-8">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#17413D] underline decoration-[#17413D]/30 underline-offset-4 transition-colors hover:decoration-[#17413D] focus:outline-none focus:ring-2 focus:ring-[#17413D] focus:ring-offset-2"
                >
                  {item.external ? "Read full work" : "Read full article"}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Feed note */}
        <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[13px] leading-6 text-[#65736D] sm:text-sm">
            Content is presented as a discovery layer. Full articles,
            presentations and publications remain at their original source.
          </p>

          <a
            href="https://academic.lifequality.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 text-sm font-semibold text-[#17413D] focus:outline-none focus:ring-2 focus:ring-[#17413D] focus:ring-offset-2"
          >
            Explore the complete academic site
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-black/10 bg-[#E7EDE8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-9 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D] sm:text-[11px]">
                About the work
              </p>

              <h2 className="mt-4 font-serif text-[2.35rem] leading-[1.05] tracking-[-0.025em] sm:text-5xl">
                From research to practical health knowledge.
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-7">
              <p className="text-[15px] leading-7 text-[#202522]/80 sm:text-lg sm:leading-8">
                The academic work spans Lifestyle Medicine, Nutrition, Yoga,
                health systems and public health policy. It combines research,
                teaching, clinical experience and practical writing rather
                than treating academic knowledge as separate from everyday
                health decisions.
              </p>

              <div className="mt-7 flex flex-col gap-3 text-sm font-semibold text-[#17413D] sm:flex-row sm:flex-wrap sm:gap-x-7">
                <Link
                  href="/doctors/dr-rakesh-sarwal"
                  className="w-fit underline-offset-4 hover:underline"
                >
                  Meet Dr. Rakesh Sarwal →
                </Link>

                <a
                  href="https://academic.lifequality.org.in/publications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit underline-offset-4 hover:underline"
                >
                  Browse publications →
                </a>

                <a
                  href="https://academic.lifequality.org.in/teaching/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit underline-offset-4 hover:underline"
                >
                  Browse teaching →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge ecosystem */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D] sm:text-[11px]">
              One connected knowledge ecosystem
            </p>

            <h2 className="max-w-3xl font-serif text-[2.35rem] leading-[1.05] tracking-[-0.025em] sm:text-5xl">
              Research can inform practice. Practice can generate learning.
            </h2>
          </div>

          <p className="max-w-xl text-[13px] leading-6 text-[#65736D] sm:text-base sm:leading-7">
            Sutra Health is the patient-facing front door, while the academic
            site provides the deeper research, teaching and knowledge record
            behind the work.
          </p>
        </div>

        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {[
            ["01", "Research", "Publications, evidence and academic work."],
            ["02", "Teaching", "Lectures, seminars and practical learning."],
            ["03", "Practice", "Health knowledge translated into care."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="grid grid-cols-[40px_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[60px_180px_minmax(0,1fr)] sm:items-center sm:gap-7 sm:py-7"
            >
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#91A298]">
                {number}
              </span>

              <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em]">
                {title}
              </h3>

              <p className="col-start-2 text-[13px] leading-6 text-[#65736D] sm:col-start-auto sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#17413D] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:text-[11px]">
                Continue exploring
              </p>

              <h2 className="mt-3 max-w-2xl font-serif text-[2.35rem] leading-[1.05] tracking-[-0.025em] sm:text-5xl">
                Go deeper into the original research and teaching record.
              </h2>
            </div>

            <a
              href="https://academic.lifequality.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 w-fit items-center gap-3 border-b border-white/50 pb-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#17413D]"
            >
              Visit the academic site
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
