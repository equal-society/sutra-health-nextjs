"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      aria-labelledby="faq-title"
      className="bg-white"
    >
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          {/* Header */}
          <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#91A298]"
                />

                <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                  Frequently asked
                </p>
              </div>
            </div>

            <div className="max-w-[760px]">
              <h2
                id="faq-title"
                className="
                  font-serif
                  text-[36px]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.025em]
                  text-[#202522]
                  sm:text-[44px]
                  lg:text-[52px]
                "
              >
                Questions, answered
                <br className="hidden sm:block" />
                <span className="text-[#17413D]"> simply.</span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-[620px]
                  font-sans
                  text-[16px]
                  leading-[1.7]
                  text-[#4F5A54]
                  sm:text-[17px]
                "
              >
                A few things people commonly want to know before
                getting started with Sutra Health.
              </p>
            </div>
          </div>

          {/* FAQ list */}
          <div className="mt-9 border-t border-[#202522]/10 sm:mt-10 lg:mt-12">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="border-b border-[#202522]/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      py-5
                      text-left
                      sm:py-6
                      lg:py-7
                    "
                  >
                    <span
                      className="
                        max-w-[900px]
                        font-sans
                        text-[17px]
                        font-medium
                        leading-[1.45]
                        tracking-[-0.005em]
                        text-[#202522]
                        sm:text-[18px]
                        lg:text-[19px]
                      "
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-[#202522]/12
                        text-[#17413D]
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-45 border-[#17413D]/30 bg-[#E7EDE8]"
                            : ""
                        }
                      `}
                    >
                      <Plus
                        size={17}
                        strokeWidth={1.4}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          max-w-[760px]
                          pb-6
                          pr-8
                          font-sans
                          text-[16px]
                          leading-[1.72]
                          text-[#4F5A54]
                          sm:pb-7
                          sm:text-[17px]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact */}
          <div className="mt-6">
            <p className="font-sans text-[13px] leading-[1.6] text-[#65736D]">
              Have another question?{" "}
              <a
                href="/contact"
                className="
                  font-medium
                  text-[#17413D]
                  underline
                  decoration-[#17413D]/25
                  underline-offset-4
                  transition-colors
                  hover:decoration-[#17413D]
                "
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