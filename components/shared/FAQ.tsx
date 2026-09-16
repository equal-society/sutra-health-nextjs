"use client";

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
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-24">
          {/* Intro */}
          <div className="max-w-[480px] lg:pt-1">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Frequently asked questions
              </p>
            </div>

            <h2
              id="faq-heading"
              className="mt-5 max-w-[520px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.045em] text-[#202522] sm:text-[50px] lg:text-[56px]"
            >
              A few things you may{" "}
              <span className="font-normal italic text-[#17413D]">
                want to know.
              </span>
            </h2>

            <p className="mt-6 max-w-[400px] text-[16px] leading-7 text-[#65736D] sm:text-[17px] sm:leading-8">
              Simple answers about Sutra Health, our approach, and how
              consultations work.
            </p>
          </div>

          {/* FAQ list */}
          <div className="border-t border-[#202522]/12">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-[#202522]/12"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:hidden sm:py-7 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[720px] pr-2 text-[16px] font-medium leading-7 text-[#17413D] sm:text-[17px] sm:leading-7">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#17413D]/15 text-[20px] font-light leading-none text-[#17413D] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="pb-6 pr-12 sm:pb-7 sm:pr-14">
                  <p className="max-w-[720px] text-[16px] leading-7 text-[#65736D] sm:text-[17px] sm:leading-8">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
