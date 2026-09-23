"use client";

import Container from "@/components/shared/Container";
import { useState } from "react";

const questions = [
  "Deep fried foods – Fries, Pakoras, Samosa, Kachori etc. / डीप फ्राइड फूड्स – फ्राइज, पकोड़े, समोसा, कचौरी आदि",
  "Processed / Packaged food – Chips, Patties, Bread, Biscuits, Sauces / प्रोसेस्ड / पैकेज्ड फूड – चिप्स, पैटीज़, ब्रेड, बिस्किट, सॉस",
  "Confectionery – Sweets, Chocolates, Toffees, Cakes, Pastries, Ice-Cream / मिठाइयाँ – स्वीट्स, चॉकलेट, टॉफ़ी, केक, पेस्ट्री, आइसक्रीम",
  "Carbonated drinks – Soft drinks, Sodas / कार्बोनेटेड ड्रिंक्स – सॉफ्ट ड्रिंक्स, सोडा",
  "Caffeinated drinks – Tea and Coffee with Milk / कैफीन युक्त पेय – दूध वाली चाय और कॉफी",
  "Meat – Red Meat / मांस – रेड मीट",
  "Alcohol / शराब",
  "Vegetables – Seasonal and green leafy vegetables, salads, chutney / सब्जियाँ – मौसमी और हरी पत्तेदार सब्जियाँ, सलाद, चटनी",
  "Fruits – Seasonal fruits / फल – मौसमी फल",
  "Cereals – Whole wheat, parboiled rice, millets, fermented cereals / अनाज – साबुत गेहूं, उबला चावल, मोटे अनाज, फर्मेंटेड अनाज",
  "Pulses – Whole pulses, beans, sprouted lentils and gram / दालें – साबुत दालें, बीन्स, अंकुरित दाल और चना",
  "Dairy – Toned milk, curd, buttermilk / डेयरी – टोंड दूध, दही, छाछ",
  "Oils & Fats – Cook in little oil, steam or boil food, add ghee on top / तेल और वसा – कम तेल में पकाएँ, भाप या उबालकर पकाएँ, ऊपर से घी डालें",
  "Sugars – Jaggery, honey, dates, raisins (in moderation) / शक्कर – गुड़, शहद, खजूर, किशमिश (सीमित मात्रा में)",
  "Walk / Exercise / Yoga / Pranayama for at least 30 minutes daily / प्रतिदिन कम से कम 30 मिनट टहलना / व्यायाम / योग / प्राणायाम",
  "Daily Sun Exposure / प्रतिदिन धूप लेना",
  "Maintain Healthy Body Weight (BMI below 25) / स्वस्थ शरीर वजन बनाए रखें (BMI 25 से कम)",
  "Drink Adequate Water / पर्याप्त पानी पिएँ",
  "Live Stress-Free Life and Proper Sleep / तनावमुक्त जीवन और पर्याप्त नींद",
  "Abstain from Addiction (Tobacco, Alcohol, Drugs, Screen) / नशे से दूर रहें (तंबाकू, शराब, ड्रग्स, स्क्रीन)",
  "Meal Times Should Be Fixed. Avoid Overeating / भोजन का समय निश्चित रखें। अधिक खाने से बचें",
];

export default function ScoreQuestionnaire() {
  const [answers, setAnswers] = useState<number[]>(
    questions.map((_, index) => (index < 7 ? 1 : 0))
  );
  const [score, setScore] = useState<number | null>(null);

  function choose(index: number, value: number) {
    setAnswers((current) => {
      const next = [...current];
      next[index] = value;
      return next;
    });
    setScore(null);
  }

  function calculateScore() {
    const total = answers.reduce((sum, value) => sum + value, 0);
    setScore(total);

    requestAnimationFrame(() => {
      document.getElementById("score-result")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="max-w-5xl py-14 sm:py-18 lg:py-22 xl:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-xs">
              21-Point Health Assessment
            </p>
            <h1 className="mt-5 max-w-[920px] font-[var(--font-serif)] text-[46px] font-medium leading-[0.98] tracking-[-0.04em] text-[var(--sutra-ink)] sm:text-[58px] md:text-[64px] lg:text-[76px] xl:text-[82px]">
              How do your everyday habits
              <br />
              <span className="text-[var(--sutra-teal)]">measure up?</span>
            </h1>
            <div className="mt-7 flex items-start gap-4 sm:mt-8">
              <span aria-hidden="true" className="mt-2 h-10 w-px shrink-0 bg-[var(--sutra-sand)]" />
              <p className="max-w-[680px] text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                Review 21 everyday food, movement, sleep and lifestyle habits.
                Answer each statement and calculate your lifestyle score.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-white)]">
        <Container>
          <div className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end lg:gap-16 lg:py-14">
            <div className="max-w-[760px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                Before you begin
              </p>
              <h2 className="mt-3 font-[var(--font-serif)] text-[32px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[40px]">
                Start with an honest look at your routine.
              </h2>
              <p className="mt-5 max-w-[680px] text-[14px] leading-7 text-[var(--sutra-muted)] sm:text-[15px] sm:leading-8">
                Select Yes or No for every statement. The first seven questions
                use reverse scoring, following the original questionnaire.
              </p>
            </div>
            <div className="border-t border-[var(--sutra-border-strong)] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                Questions
              </p>
              <p className="mt-1 font-[var(--font-serif)] text-[44px] font-medium leading-none tracking-[-0.04em] text-[var(--sutra-teal)]">
                21
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="21-point lifestyle questionnaire">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[920px]">
              <div className="border-y border-[var(--sutra-border)]">
                {questions.map((question, index) => {
                  const yesValue = index < 7 ? 0 : 1;
                  const noValue = index < 7 ? 1 : 0;

                  return (
                    <fieldset
                      key={question}
                      className="m-0 min-w-0 border-0 border-b border-[var(--sutra-border)] px-0 py-7 last:border-b-0 sm:py-8"
                    >
                      <legend className="w-full p-0">
                        <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5">
                          <span className="pt-0.5 font-[var(--font-serif)] text-[16px] font-medium leading-none text-[var(--sutra-sand)] sm:text-[18px]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="max-w-[760px] text-[14px] font-medium leading-7 text-[var(--sutra-ink)] sm:text-[15px] sm:leading-8">
                            {question}
                          </span>
                        </div>
                      </legend>

                      <div className="ml-[52px] mt-5 flex gap-5 sm:ml-[64px] sm:gap-7">
                        <label className="group inline-flex cursor-pointer items-center gap-2 text-[12px] font-semibold text-[var(--sutra-muted)]">
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={yesValue}
                            checked={answers[index] === yesValue}
                            onChange={() => choose(index, yesValue)}
                            className="peer sr-only"
                          />
                          <span
                            className="flex h-5 w-5 items-center justify-center border border-[var(--sutra-border-strong)] transition-colors peer-checked:border-[var(--sutra-teal)] peer-checked:bg-[var(--sutra-teal)]"
                            aria-hidden="true"
                          >
                            <span className="h-1.5 w-1.5 bg-white opacity-0 transition-opacity peer-checked:opacity-100" />
                          </span>
                          <span className="transition-colors group-hover:text-[var(--sutra-ink)]">Yes</span>
                        </label>

                        <label className="group inline-flex cursor-pointer items-center gap-2 text-[12px] font-semibold text-[var(--sutra-muted)]">
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={noValue}
                            checked={answers[index] === noValue}
                            onChange={() => choose(index, noValue)}
                            className="peer sr-only"
                          />
                          <span
                            className="flex h-5 w-5 items-center justify-center border border-[var(--sutra-border-strong)] transition-colors peer-checked:border-[var(--sutra-teal)] peer-checked:bg-[var(--sutra-teal)]"
                            aria-hidden="true"
                          >
                            <span className="h-1.5 w-1.5 bg-white opacity-0 transition-opacity peer-checked:opacity-100" />
                          </span>
                          <span className="transition-colors group-hover:text-[var(--sutra-ink)]">No</span>
                        </label>
                      </div>
                    </fieldset>
                  );
                })}
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={calculateScore}
                  className="group inline-flex w-full items-center justify-center gap-3 border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[var(--sutra-teal-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--sutra-sage)] focus:ring-offset-2 focus:ring-offset-[var(--sutra-porcelain)] sm:w-auto sm:min-w-[260px]"
                >
                  Calculate My Score
                  <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {score !== null && (
                  <div
                    id="score-result"
                    role="status"
                    aria-live="polite"
                    className="mt-8 border-y border-[var(--sutra-border-strong)] bg-[var(--sutra-pale-sage)] px-5 py-6 sm:px-7 sm:py-7"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                      <div className="max-w-[560px]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                          Your lifestyle score
                        </p>
                        <p className="mt-3 font-[var(--font-serif)] text-[28px] font-medium leading-tight tracking-[-0.03em] text-[var(--sutra-ink)]">
                          A snapshot of the habits you reviewed today.
                        </p>
                        <p className="mt-3 text-[13px] leading-6 text-[var(--sutra-muted)]">
                          Your result is based on the 21-point questionnaire.
                        </p>
                      </div>
                      <strong className="shrink-0 font-[var(--font-serif)] text-[52px] font-medium leading-none tracking-[-0.05em] text-[var(--sutra-teal)]">
                        {score} / 21
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              <p className="mt-8 max-w-[760px] border-l border-[var(--sutra-sand)] pl-4 text-[12px] leading-6 text-[var(--sutra-muted)]">
                <span className="font-semibold text-[var(--sutra-ink)]">Please note:</span>{" "}
                This is a lifestyle self-assessment, not a medical diagnosis
                or a substitute for professional medical advice.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
