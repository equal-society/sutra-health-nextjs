import Link from "next/link";

const faqs = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine uses evidence-informed changes in areas such as food, physical activity, sleep and stress management alongside appropriate medical care.",
  },
  {
    question:
      "Can yoga therapy be part of managing conditions such as diabetes or high blood pressure?",
    answer:
      "It can be one part of your overall care alongside your doctor, but it is not a replacement for medical treatment. Medication changes should always be discussed with your physician.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Sutra Health works with people across India. Online consultations are available for lifestyle medicine, nutrition counselling and yoga therapy. In-person sessions are also available in Faridabad, Delhi NCR.",
  },
  {
    question: "How long before I see results?",
    answer:
      "There is no single timeline that applies to everyone. The next steps depend on the individual, the health concern and the plan discussed with the healthcare professional.",
  },
  {
    question: "How do I get started with Sutra Health?",
    answer:
      "You can start by booking a consultation. The discussion can cover your health concerns, goals and current situation before the next step is considered.",
  },
];

export default function FAQsPage() {
  return (
    <main className="bg-[#FAF8F2]">
      <section aria-labelledby="faqs-title">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="py-16 sm:py-20 lg:py-24">
            {/* Page introduction */}
            <div className="max-w-3xl">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#65736D]">
                Frequently asked questions
              </span>

              <h1
                id="faqs-title"
                className="mt-4 font-serif text-[40px] leading-[1.08] tracking-[-0.035em] text-[#202522] sm:text-[56px] lg:text-[64px]"
              >
                Clear answers to help you begin.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#65736D] sm:text-lg">
                Learn more about lifestyle medicine, our consultations
                and how Sutra Health approaches your wellbeing.
              </p>
            </div>

            {/* FAQ accordion */}
            <div className="mt-12 max-w-4xl border-y border-[#202522]/15">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-[#202522]/15 last:border-0"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17413D]">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="mt-1 text-xs tabular-nums text-[#8A9690]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className="max-w-3xl text-base font-medium leading-7 text-[#202522] sm:text-lg">
                        {faq.question}
                      </h2>
                    </div>

                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#202522]/15 text-lg font-light text-[#17413D] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="pb-6 pl-9 sm:pl-12">
                    <p className="max-w-3xl text-sm leading-7 text-[#65736D] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 flex flex-col gap-4 border border-[#202522]/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="font-serif text-2xl text-[#202522]">
                  Still have a question?
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#65736D]">
                  Our team can help you understand the next step.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#17413D] underline underline-offset-4"
              >
                Contact Sutra Health
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link
                href="/"
                className="text-sm text-[#65736D] underline underline-offset-4 hover:text-[#17413D]"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 