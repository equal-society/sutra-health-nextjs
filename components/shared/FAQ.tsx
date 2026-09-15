"use client";

import { useState } from "react";
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
      "Lifestyle medicine uses evidence-informed changes in areas such as food, physical activity, sleep and stress management alongside appropriate medical care.",
  },
  {
    question:
      "Can yoga therapy be part of managing something like diabetes or blood pressure?",
    answer:
      "It can be one part of your overall care, alongside your doctor — not a replacement for it. Any medication changes should always go through your physician.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. We work with people across India, not just Faridabad. Online consultations are available for lifestyle medicine, nutrition counselling, and yoga therapy. In-person sessions are also available in Faridabad.",
  },
  {
    question: "How long before I see results?",
    answer:
      "It depends on you and your consistency. Some people notice changes within weeks, while other improvements take longer. We do not promise a timeline that cannot be guaranteed.",
  },
  {
    question: "Is this right for everyone?",
    answer:
      "If you are managing a serious medical condition or taking medication, talk to your doctor before starting. Sutra Health is designed to complement appropriate medical care, not replace it.",
  },
];

export default function FAQ({ faqs = defaultFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-24">
          {/* Intro */}
          <div className="max-w-[480px] lg:pt-1">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="text-[9px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[10px]">
                Frequently asked questions
              </p>
            </div>

            <h2
              id="faq-heading"
              className="mt-5 font-serif text-[39px] font-medium leading-[0.99] tracking-[-0.045em] text-[#202522] sm:text-[47px] lg:text-[53px]"
            >
              A few things you may
              <span className="italic font-normal text-[#17413D]">
                {" "}want to know.
              </span>
            </h2>

            <p className="mt-6 max-w-[390px] text-[13px] leading-7 text-[#687A73] sm:text-[14px]">
              Simple answers about Sutra Health, our doctor-led integrative
              approach, and how our consultations work.
            </p>
          </div>

          {/* Questions */}
          <div className="border-t border-[#202522]/12">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#202522]/12"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                  >
                    <span className="max-w-[680px] text-[14px] font-medium leading-6 text-[#17413D] transition-colors group-hover:text-[#4F8060] sm:text-[15px] sm:leading-7">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`relative flex h-6 w-6 shrink-0 items-center justify-center text-[19px] font-light text-[#65966F] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer remains in the DOM for search/AEO,
                      while the accordion controls its visual display. */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[690px] pb-5 pr-8 text-[13px] leading-7 text-[#687A73] sm:pb-6 sm:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}