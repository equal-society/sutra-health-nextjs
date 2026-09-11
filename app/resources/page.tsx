import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import Container from "@/components/shared/Container";

const topics = [
  {
    label: "Stress & Mindfulness",
    href: "/resources/articles/stress",
  },
  {
    label: "Gut Health & Digestion",
    href: "/resources/articles/gut-health",
  },
  {
    label: "Nutrition",
    href: "/resources/articles/nutrition",
  },
  {
    label: "Yoga & Movement",
    href: "/resources/articles/yoga-movement",
  },
  {
    label: "Sleep & Recovery",
    href: "/resources/articles/sleep",
  },
  {
    label: "Healthy Habits",
    href: "/resources/articles/healthy-habits",
  },
  {
    label: "Women's Health",
    href: "/resources/articles/womens-health",
  },
  {
    label: "Men's Health",
    href: "/resources/articles/mens-health",
  },
  {
    label: "Health Conditions",
    href: "/conditions",
  },
  {
    label: "Preventive Health",
    href: "/resources/articles/preventive-health",
  },
  {
    label: "Ayurveda & Indian Wellness",
    href: "/resources/articles/ayurveda",
  },
  {
    label: "Retreat & Wellbeing",
    href: "/resources/articles/retreat-wellbeing",
  },
];

const articleTypes = [
  {
    label: "Health Guides",
    description: "Practical guides for understanding everyday health questions.",
  },
  {
    label: "Explainers",
    description: "Clear explanations of health concepts, approaches and practices.",
  },
  {
    label: "How-to Guides",
    description: "Simple, practical steps you can consider in everyday life.",
  },
  {
    label: "Yoga & Movement",
    description: "Articles about yoga, movement, mobility and physical wellbeing.",
  },
  {
    label: "Breathing & Mindfulness",
    description: "Breathing practices, mindfulness and approaches to stress.",
  },
  {
    label: "Nutrition",
    description: "Food, eating patterns and practical nutrition guidance.",
  },
  {
    label: "Condition Guides",
    description: "Lifestyle and wellbeing information related to health conditions.",
  },
  {
    label: "Research & Evidence",
    description: "Evidence-informed perspectives on health and wellbeing.",
  },
  {
    label: "Wellness",
    description: "Everyday practices that support rest, recovery and wellbeing.",
  },
  {
    label: "Sutra Perspective",
    description: "How we think about sustainable and personalised health change.",
  },
];

const articles = [
  {
    category: "Stress & Mindfulness",
    type: "Health Guide",
    title: "How to Manage Stress Naturally",
    description:
      "Practical ways to approach everyday stress through breathing, movement, sleep and sustainable routines.",
    href: "/resources/articles/how-to-manage-stress",
    date: "September 2026",
    readTime: "7 min read",
  },
  {
    category: "Yoga & Movement",
    type: "Yoga Guide",
    title: "Yoga for Stress Relief",
    description:
      "Understand how yoga, mindful movement and breathing may fit into a broader approach to stress management.",
    href: "/resources/articles/yoga-for-stress-relief",
    date: "September 2026",
    readTime: "6 min read",
  },
  {
    category: "Breathing & Mindfulness",
    type: "How-to Guide",
    title: "Deep Breathing Exercises for Stress Relief",
    description:
      "A practical introduction to breathing exercises and how they can become part of a daily relaxation routine.",
    href: "/resources/articles/deep-breathing-exercises-for-stress-relief",
    date: "September 2026",
    readTime: "6 min read",
  },
  {
    category: "Gut Health & Digestion",
    type: "Health Guide",
    title: "How to Improve Gut Health",
    description:
      "Explore everyday lifestyle and nutrition factors that may support digestive and gut health.",
    href: "/resources/articles/how-to-improve-gut-health",
    date: "September 2026",
    readTime: "7 min read",
  },
  {
    category: "Nutrition",
    type: "Nutrition Guide",
    title: "Healthy Diet Tips for Everyday Health",
    description:
      "Simple principles for building balanced eating habits that are practical and sustainable.",
    href: "/resources/articles/healthy-diet-tips",
    date: "September 2026",
    readTime: "6 min read",
  },
  {
    category: "Yoga & Movement",
    type: "Movement Guide",
    title: "Yoga for Back Pain Relief",
    description:
      "What to consider when using yoga and movement as part of a thoughtful approach to back health.",
    href: "/resources/articles/yoga-for-back-pain-relief",
    date: "September 2026",
    readTime: "7 min read",
  },
];

const questions = [
  {
    question: "How can I improve my gut health?",
    href: "/resources/articles/how-to-improve-gut-health",
  },
  {
    question: "How can I manage stress naturally?",
    href: "/resources/articles/how-to-manage-stress",
  },
  {
    question: "Can yoga help with stress?",
    href: "/resources/articles/yoga-for-stress-relief",
  },
  {
    question: "How can I improve my digestion?",
    href: "/resources/articles/how-to-improve-digestion",
  },
  {
    question: "How can I improve my sleep quality?",
    href: "/resources/articles/how-to-improve-sleep-quality",
  },
  {
    question: "How can I build healthier habits?",
    href: "/resources/articles/how-to-build-good-habits",
  },
];

export default function ArticlesPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <a
              href="/resources"
              className="inline-flex items-center gap-2 text-[11px] font-medium text-[#65966F] transition-colors hover:text-[#173F35]"
            >
              <span aria-hidden="true">←</span>
              Resources
            </a>

            <div className="mt-10 max-w-[900px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Sutra Health · Health Articles
              </p>

              <h1 className="mt-4 font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[60px] lg:text-[72px]">
                Practical health knowledge
                <br />
                for{" "}
                <span className="italic text-[#65966F]">
                  everyday life.
                </span>
              </h1>

              <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#687A73] sm:text-[17px] sm:leading-8">
                Explore evidence-informed health articles about nutrition,
                stress, gut health, yoga, movement, breathing, sleep,
                healthy habits and more. Each article is designed to answer
                practical health questions in clear, accessible language.
              </p>
            </div>

            {/* Search */}
            <div className="mt-10 max-w-[620px]">
              <div className="flex items-center gap-3 rounded-full border border-[#173F35]/10 bg-white/60 px-5 py-3.5">
                <Search
                  size={17}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#65966F]"
                />

                <input
                  type="search"
                  placeholder="Search health articles..."
                  aria-label="Search health articles"
                  className="w-full bg-transparent text-[13px] text-[#173F35] outline-none placeholder:text-[#8A9892]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          BROWSE BY TOPIC
      ========================================================= */}

      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-[650px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Browse the collection
              </p>

              <h2 className="mt-3 font-serif text-[32px] leading-tight tracking-[-0.035em] sm:text-[42px]">
                Explore articles by topic.
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-[#71817A]">
                Start with the area closest to your health question and
                explore related information from there.
              </p>
            </div>

            <div className="mt-10 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {topics.map((topic, index) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="w-7 font-serif text-[14px] text-[#A2B1A9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-serif text-[20px] tracking-[-0.02em] sm:text-[23px]">
                      {topic.label}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-[#65966F] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          ARTICLE TYPES
      ========================================================= */}

      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-[650px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Article types
              </p>

              <h2 className="mt-3 font-serif text-[32px] leading-tight tracking-[-0.035em] sm:text-[42px]">
                Choose the kind of information you need.
              </h2>
            </div>

            <div className="mt-10 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {articleTypes.map((type, index) => (
                <div
                  key={type.label}
                  className="grid gap-3 py-6 sm:grid-cols-[55px_0.75fr_1.25fr] sm:items-center sm:gap-8"
                >
                  <span className="font-serif text-[15px] text-[#A2B1A9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-serif text-[21px] tracking-[-0.02em] sm:text-[24px]">
                    {type.label}
                  </h3>

                  <p className="text-[13px] leading-6 text-[#71817A]">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          ALL ARTICLES
      ========================================================= */}

      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Health article collection
                </p>

                <h2 className="mt-3 font-serif text-[32px] leading-tight tracking-[-0.035em] sm:text-[42px]">
                  All articles.
                </h2>
              </div>

              <p className="text-[12px] text-[#8A9892]">
                {articles.length} articles
              </p>
            </div>

            <div className="mt-10 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {articles.map((article, index) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block py-8"
                >
                  <div className="grid gap-5 sm:grid-cols-[55px_0.9fr_1.1fr_auto] sm:items-center sm:gap-8">
                    <span className="font-serif text-[16px] text-[#A2B1A9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#65966F]">
                          {article.category}
                        </span>

                        <span className="text-[10px] text-[#A2AAA5]">
                          {article.type}
                        </span>
                      </div>

                      <h3 className="mt-2 font-serif text-[23px] leading-tight tracking-[-0.025em] sm:text-[27px]">
                        {article.title}
                      </h3>

                      <p className="mt-2 text-[10px] text-[#8A9892]">
                        {article.date} · {article.readTime}
                      </p>
                    </div>

                    <p className="max-w-[520px] text-[13px] leading-6 text-[#71817A]">
                      {article.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#173F35]/10 transition-all group-hover:translate-x-1 group-hover:border-[#173F35]/20"
                    >
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          COMMON QUESTIONS
      ========================================================= */}

      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Common health questions
              </p>

              <h2 className="mt-3 max-w-[440px] font-serif text-[32px] leading-tight tracking-[-0.035em] sm:text-[40px]">
                Looking for a specific answer?
              </h2>

              <p className="mt-5 max-w-[440px] text-[14px] leading-7 text-[#71817A]">
                Start with a question. Our health articles explain common
                topics in a practical and easy-to-follow way.
              </p>
            </div>

            <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {questions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="font-serif text-[18px] tracking-[-0.02em] sm:text-[21px]">
                    {item.question}
                  </span>

                  <ArrowRight
                    size={15}
                    aria-hidden="true"
                    className="shrink-0 text-[#65966F] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          EXPLORE SUTRA HEALTH
      ========================================================= */}

      <section>
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-[650px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Explore Sutra Health
              </p>

              <h2 className="mt-3 font-serif text-[32px] leading-tight tracking-[-0.035em] sm:text-[42px]">
                Go beyond the articles.
              </h2>

              <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-[#71817A]">
                Learn about our approach, explore our medical and wellness
                services, meet our doctor, or take the next step with a
                consultation or retreat.
              </p>
            </div>

            <div className="mt-10 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {/* Doctor */}
              <a
                href="/doctor"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Medical Expertise
                  </p>

                  <h3 className="mt-1 font-serif text-[22px] tracking-[-0.02em]">
                    Meet Our Doctor
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[#71817A]">
                    Explore the doctor&apos;s academic background,
                    qualifications and professional expertise.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[#65966F] transition-transform group-hover:translate-x-1"
                />
              </a>

              {/* What We Do */}
              <Link
                href="/what-we-do"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Our Services
                  </p>

                  <h3 className="mt-1 font-serif text-[22px] tracking-[-0.02em]">
                    Explore What We Do
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[#71817A]">
                    Discover lifestyle medicine, nutrition, therapeutic yoga,
                    breath & mindfulness and other Sutra Health services.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[#65966F] transition-transform group-hover:translate-x-1"
                />
              </Link>

              {/* Appointment */}
              <Link
                href="/book-appointment"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Personalised Support
                  </p>

                  <h3 className="mt-1 font-serif text-[22px] tracking-[-0.02em]">
                    Book an Appointment
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[#71817A]">
                    Discuss your health goals and explore whether Sutra Health
                    may be appropriate for you.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[#65966F] transition-transform group-hover:translate-x-1"
                />
              </Link>

              {/* Retreat */}
              <Link
                href="/retreat"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Retreat
                  </p>

                  <h3 className="mt-1 font-serif text-[22px] tracking-[-0.02em]">
                    Book a Retreat
                  </h3>

                  <p className="mt-1 max-w-[650px] text-[13px] leading-6 text-[#71817A]">
                    Step away from your routine with yoga, nutrition,
                    mindfulness, wellness and restorative time near Delhi.
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-[#65966F] transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}