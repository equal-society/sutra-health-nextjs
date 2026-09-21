 "use client";

import { useId, useState } from "react";
import Container from "@/components/shared/Container";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs?: FAQItem[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine focuses on everyday factors that influence health, including nutrition, physical activity, sleep, stress and other habits. At Sutra Health, these areas are considered together to build practical changes around your needs and circumstances.",
  },
  {
    question:
      "Can yoga therapy be part of managing conditions such as diabetes or high blood pressure?",
    answer:
      "Therapeutic yoga can be used as part of a broader lifestyle approach for some health conditions. Practices are adapted to your health, current ability and goals, and may include yoga postures, breathing practices and relaxation.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Please contact Sutra Health to confirm current consultation options and availability. The appropriate format depends on your needs and the type of support being considered.",
  },
  {
    question: "How long before I see results?",
    answer:
      "There is no single timeline. It depends on your health, goals, starting point and the changes you are able to maintain. The focus is on practical habits that can become part of everyday life over time.",
  },
  {
    question: "How do I get started with Sutra Health?",
    answer:
      "You can begin by booking a consultation. The first conversation helps you discuss your health concerns, goals and everyday routine so that the next steps can be considered around your needs.",
  },
];

export default function FAQ({ faqs = defaultFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const instanceId = useId();

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      aria-labelledby={`${instanceId}-title`}
      className="bg-white"
    >
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[var(--sutra-sage)]"
                />
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--sutra-muted)]">
                  Frequently asked
                </p>
              </div>
            </div>

            <div className="max-w-[760px]">
              <h2
                id={`${instanceId}-title`}
                className="font-[var(--font-dm-serif)] text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[44px] lg:text-[52px]"
              >
                Questions, answered
                <br className="hidden sm:block" />
                <span className="text-[var(--sutra-teal)]"> simply.</span>
              </h2>

              <p className="mt-4 max-w-[620px] text-[16px] leading-[1.7] text-[var(--sutra-muted)] sm:text-[17px]">
                A few things people commonly want to know before getting
                started with Sutra Health.
              </p>
            </div>
          </div>

          <div className="mt-9 border-t border-[var(--sutra-border)] sm:mt-10 lg:mt-12">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const questionId = `${instanceId}-question-${index}`;
              const answerId = `${instanceId}-answer-${index}`;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="border-b border-[var(--sutra-border)]"
                >
                  <button
                    id={questionId}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="group flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-inset sm:min-h-[72px] sm:py-6 lg:py-7"
                  >
                    <span className="max-w-[900px] text-[17px] font-medium leading-[1.45] tracking-[-0.005em] text-[var(--sutra-ink)] sm:text-[18px] lg:text-[19px]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center border text-[var(--sutra-teal)] transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[var(--sutra-teal)]/30 bg-[var(--sutra-pale-sage)]"
                          : "border-[var(--sutra-border-strong)] group-hover:border-[var(--sutra-teal)]/30"
                      }`}
                    >
                      <span className="absolute h-px w-[17px] bg-current" />
                      <span className="absolute h-[17px] w-px bg-current" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className="pb-6 pr-8 sm:pb-7"
                    >
                      <p className="max-w-[760px] text-[16px] leading-[1.72] text-[var(--sutra-muted)] sm:text-[17px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <p className="text-[13px] leading-[1.6] text-[var(--sutra-muted)]">
              Have another question?{" "}
              <a
                href="/contact"
                className="font-medium text-[var(--sutra-teal)] underline decoration-[var(--sutra-teal)]/25 underline-offset-4 transition-colors hover:decoration-[var(--sutra-teal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-4"
              >
                Contact Sutra Health
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
