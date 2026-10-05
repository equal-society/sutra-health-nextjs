 "use client";

import Container from "@/components/shared/Container";
import Link from "next/link";
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
  const [answers, setAnswers] = useState<number[]>(questions.map((_, i) => (i < 7 ? 1 : 0)));
  const [score, setScore] = useState<number | null>(null);

  function choose(index: number, value: number) {
    setAnswers((current) => current.map((answer, i) => (i === index ? value : answer)));
    setScore(null);
  }

  function calculateScore() {
    setScore(answers.reduce((sum, value) => sum + value, 0));
    requestAnimationFrame(() =>
      document.getElementById("score-result")?.scrollIntoView({ behavior: "smooth", block: "center" })
    );
  }

  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section aria-labelledby="assessment-title" className="relative flex min-h-[min(700px,calc(100svh-80px))] items-end overflow-hidden bg-[#172D29]">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/nature.jpg')" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/55" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/20" />
        <Container>
          <div className="relative z-10 max-w-4xl py-20 sm:py-24 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">21-point lifestyle assessment</p>
            <h1 id="assessment-title" className="mt-5 max-w-4xl font-[var(--font-serif)] text-[44px] font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[76px]">
              Use 21 questions to review the habits covered by this assessment.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Review the statements against your usual routine. The questionnaire covers food choices, activity, sleep, substances and other everyday practices; the result is a simple self-reflection score, not a clinical assessment.
            </p>
            <a href="#questions" className="mt-8 inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white">
              Start the questions <span aria-hidden="true" className="ml-3">↓</span>
            </a>
          </div>
        </Container>
      </section>

      <section id="questions" className="scroll-mt-24 bg-[var(--sutra-porcelain)]">
        <Container>
          <div className="mx-auto max-w-5xl py-12 sm:py-16 lg:py-20">
            <div className="grid gap-6 border-b border-[var(--sutra-border-strong)] pb-8 sm:grid-cols-[minmax(0,1fr)_130px] sm:items-end sm:gap-10">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--sutra-muted)]">Before you answer</p>
                <h2 className="mt-3 font-[var(--font-serif)] text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">
                  Think about your usual routine.
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--sutra-muted)]">
                  Choose Yes or No based on what is typical for you rather than an unusual day. The first seven statements use the questionnaire’s reverse-scoring rule, so answer each statement as written.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-[var(--sutra-border)] pt-4 sm:block sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">Questions</span>
                <span className="font-[var(--font-serif)] text-5xl leading-none text-[var(--sutra-teal)]">21</span>
              </div>
            </div>

            <div className="mt-8 space-y-3 sm:mt-10">
              {questions.map((question, index) => {
                const yesValue = index < 7 ? 0 : 1;
                const noValue = index < 7 ? 1 : 0;
                return (
                  <fieldset key={index} className="grid min-w-0 scroll-mt-28 gap-4 border border-[var(--sutra-border)] bg-white px-4 py-5 transition-colors sm:grid-cols-[minmax(0,1fr)_176px] sm:items-center sm:gap-8 sm:px-6 sm:py-5">
                    <legend className="sr-only">Question {index + 1}: {question}</legend>
                    <div className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 sm:gap-4">
                      <span aria-hidden="true" className="pt-0.5 font-[var(--font-serif)] text-base text-[var(--sutra-sand)]">{String(index + 1).padStart(2, "0")}</span>
                      <p className="text-[15px] font-medium leading-7 text-[var(--sutra-ink)] sm:text-base sm:leading-7">{question}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {[["Yes", yesValue], ["No", noValue]].map(([label, value]) => {
                        const selected = answers[index] === value;
                        return (
                          <label key={label} className="group cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={value}
                              checked={selected}
                              onChange={() => choose(index, Number(value))}
                              className="peer sr-only"
                            />
                            <span className={`flex min-h-11 items-center justify-center gap-2 border px-3 text-sm font-medium transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--sutra-teal)] ${selected ? "border-[var(--sutra-teal)] bg-[var(--sutra-teal)] text-white" : "border-[var(--sutra-border-strong)] bg-white text-[var(--sutra-muted)] group-hover:border-[var(--sutra-teal)] group-hover:text-[var(--sutra-ink)]"}`}>
                              <span aria-hidden="true" className={`flex h-4 w-4 items-center justify-center border ${selected ? "border-white bg-white" : "border-[var(--sutra-border-strong)] bg-transparent"}`}>
                                {selected && <span className="h-2 w-2 bg-[var(--sutra-teal)]" />}
                              </span>
                              {label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-4 border-t border-[var(--sutra-border-strong)] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-[var(--sutra-muted)]">You can change any answer before calculating your result.</p>
              <button
                type="button"
                onClick={calculateScore}
                className="inline-flex min-h-12 w-full items-center justify-center bg-[var(--sutra-teal)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-2 sm:w-auto"
              >
                Calculate my score <span aria-hidden="true" className="ml-3">→</span>
              </button>
            </div>

            {score !== null && (
              <div id="score-result" role="status" aria-live="polite" className="mt-8 border border-[var(--sutra-border-strong)] bg-[var(--sutra-pale-sage)] p-5 sm:p-8 scroll-mt-28">
                <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(180px,240px)] sm:items-center sm:gap-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--sutra-muted)]">Your result</p>
                    <h2 className="mt-2 font-[var(--font-serif)] text-3xl leading-tight text-[var(--sutra-ink)] sm:text-4xl">Your questionnaire score</h2>
                   
                  </div>
                  <div className="flex items-baseline gap-2 border-t border-[var(--sutra-border-strong)] pt-5 sm:justify-end sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                    <strong className="font-[var(--font-serif)] text-7xl font-medium leading-none tracking-[-0.05em] text-[var(--sutra-teal)] sm:text-8xl">{score}</strong>
                    <span className="text-xl text-[var(--sutra-muted)] sm:text-2xl">/ 21</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 border-t border-[var(--sutra-border-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xl text-sm leading-6 text-[var(--sutra-muted)]">
                    Use the result as a prompt for discussion, not as a measure of disease risk or treatment need. If you want personal guidance, discuss your responses with an appropriate healthcare professional.
                  </p>
                  <Link href="/book-appointment" className="inline-flex min-h-11 shrink-0 items-center justify-center bg-[var(--sutra-teal)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]">
                    Book a consultation <span aria-hidden="true" className="ml-3">→</span>
                  </Link>
                </div>
              </div>
            )}
            <div className="mt-8 border-l-2 border-[var(--sutra-sand)] pl-4">
              <p className="text-sm leading-6 text-[var(--sutra-muted)]">
                This questionnaire is for reflection only. It is not a diagnosis, clinical risk score or substitute for professional medical advice. Do not start, stop or change prescribed treatment based on this result.
              </p>
            </div>
            <nav aria-label="Related information" className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link href="/approach" className="font-medium text-[var(--sutra-teal)] underline underline-offset-4">Our approach</Link>
              <Link href="/services" className="font-medium text-[var(--sutra-teal)] underline underline-offset-4">Explore services</Link>
            </nav>
          </div>
        </Container>
      </section>
    </main>
  );
}
