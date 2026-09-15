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
    <main className=" text-[#173F35]">
  
<section className="relative isolate overflow-hidden ">
  {/* Background */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#FAF8F1_0%,#F4F2E8_42%,#E7EFE7_100%)]"
  />

  {/* Organic gradient shapes */}
  <div
    aria-hidden="true"
    className="absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#A9C5AC]/35 blur-3xl sm:h-[520px] sm:w-[520px]"
  />

  <div
    aria-hidden="true"
    className="absolute -bottom-48 left-[38%] -z-10 h-[420px] w-[420px] rounded-full bg-[#D8C9A9]/25 blur-3xl"
  />

  <div
    aria-hidden="true"
    className="absolute -left-32 top-[28%] -z-10 h-[260px] w-[260px] rounded-full bg-[#C6D9CA]/25 blur-3xl"
  />

  {/* Fine editorial grid */}
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(#173F35 1px, transparent 1px), linear-gradient(90deg, #173F35 1px, transparent 1px)",
      backgroundSize: "56px 56px",
    }}
  />

  {/* Decorative rings */}
  <div
    aria-hidden="true"
    className="absolute right-[7%] top-[16%] -z-10 hidden h-44 w-44 rounded-full border border-[#173F35]/10 lg:block"
  />

  <div
    aria-hidden="true"
    className="absolute right-[10%] top-[21%] -z-10 hidden h-28 w-28 rounded-full border border-[#65966F]/15 lg:block"
  />

  <div
    aria-hidden="true"
    className="absolute bottom-[13%] left-[8%] -z-10 hidden h-20 w-20 rounded-full border border-[#173F35]/10 lg:block"
  />
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Self-assessment → Lifestyle
            </p>

            <h1 className="mt-4 max-w-[820px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[56px] lg:text-[68px]">
              How do your everyday habits{" "}
              <span className="italic text-[#65966F]">measure up?</span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
              Review 21 everyday food, movement, sleep and lifestyle habits.
              Answer each question and calculate your lifestyle score.
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-12 sm:py-14 lg:py-16">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[720px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  21-point assessment
                </p>
                <h2 className="mt-3 font-serif text-[32px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[40px]">
                  Start with an honest look at your routine.
                </h2>
                <p className="mt-5 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                  Select Yes or No for every statement. The first seven
                  questions use reverse scoring, following the original
                  questionnaire.
                </p>
              </div>

              <div className="rounded-2xl border border-[#173F35]/10 bg-white px-5 py-4 lg:min-w-[150px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#65966F]">
                  Questions
                </p>
                <p className="mt-1 font-serif text-[32px] leading-none tracking-[-0.03em] text-[#173F35]">
                  21
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* QUESTIONNAIRE */}
      <section>
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[900px]">
              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {questions.map((question, index) => {
                  const yesValue = index < 7 ? 0 : 1;
                  const noValue = index < 7 ? 1 : 0;

                  return (
                    <fieldset
                      key={question}
                      className="m-0 min-w-0 border-0 px-0 py-6 sm:py-7"
                    >
                      <legend className="w-full p-0">
                        <div className="flex items-start gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0F4ED] text-[10px] font-bold tracking-[0.04em] text-[#173F35]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="pt-0.5 text-[13px] font-semibold leading-6 text-[#1E2A1C] sm:text-[14px] sm:leading-7">
                            {question}
                          </span>
                        </div>
                      </legend>

                      <div className="ml-12 mt-4 flex gap-2">
                        <label
                          className={`cursor-pointer rounded-full border px-5 py-2.5 text-[12px] font-semibold transition-colors ${
                            answers[index] === yesValue
                              ? "border-[#65966F] bg-[#F0F4ED] text-[#173F35]"
                              : "border-[#173F35]/15 bg-white text-[#687A73] hover:border-[#65966F]/60 hover:text-[#173F35]"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={yesValue}
                            checked={answers[index] === yesValue}
                            onChange={() => choose(index, yesValue)}
                            className="sr-only"
                          />
                          Yes
                        </label>

                        <label
                          className={`cursor-pointer rounded-full border px-5 py-2.5 text-[12px] font-semibold transition-colors ${
                            answers[index] === noValue
                              ? "border-[#65966F] bg-[#F0F4ED] text-[#173F35]"
                              : "border-[#173F35]/15 bg-white text-[#687A73] hover:border-[#65966F]/60 hover:text-[#173F35]"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={noValue}
                            checked={answers[index] === noValue}
                            onChange={() => choose(index, noValue)}
                            className="sr-only"
                          />
                          No
                        </label>
                      </div>
                    </fieldset>
                  );
                })}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={calculateScore}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D] focus:outline-none focus:ring-2 focus:ring-[#65966F] focus:ring-offset-2 focus:ring-offset-[#FAF8F1]"
                >
                  Calculate My Score
                  <span aria-hidden="true">→</span>
                </button>

                {score !== null && (
                  <div
                    id="score-result"
                    role="status"
                    aria-live="polite"
                    className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#65966F]/25 bg-[#F0F4ED] p-6 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                        Your lifestyle score
                      </p>
                      <p className="mt-2 text-[13px] leading-6 text-[#687A73]">
                        Your result is based on the 21-point questionnaire.
                      </p>
                    </div>
                    <strong className="font-serif text-[38px] leading-none tracking-[-0.04em] text-[#173F35]">
                      {score} / 21
                    </strong>
                  </div>
                )}
              </div>

              <p className="mt-7 border-l-2 border-[#65966F] pl-4 text-[12px] leading-6 text-[#687A73]">
                <span className="font-semibold text-[#173F35]">Please note:</span>{" "}
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
