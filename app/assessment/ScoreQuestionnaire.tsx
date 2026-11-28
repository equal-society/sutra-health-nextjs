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



type MeasureField =
  | "height"
  | "weight"
  | "systolic"
  | "diastolic"
  | "pulse";

type MeasureValues = Record<MeasureField, string>;

type MeasureErrors = Partial<Record<MeasureField, string>>;

const emptyMeasures: MeasureValues = {
  height: "",
  weight: "",
  systolic: "",
  diastolic: "",
  pulse: "",
};



function validateMeasurement(
  value: string,
  label: string,
  min: number,
  max: number,
  unit: string,
  requiredMessage: string,
): string | undefined {

  const trimmed = value.trim();

  if (!trimmed) {
    return requiredMessage;
  }

  const number = Number(trimmed);

  if (!Number.isFinite(number)) {
    return `Enter a valid number for ${label.toLowerCase()}.`;
  }

  if (number < min || number > max) {
    return `${label} must be between ${min} and ${max} ${unit}.`;
  }

  return undefined;

}



function validateMeasures(values: MeasureValues): MeasureErrors {

  const errors: MeasureErrors = {};

  errors.height = validateMeasurement(
    values.height,
    "Height",
    50,
    250,
    "cm",
    "Height is required to calculate BMI.",
  );

  errors.weight = validateMeasurement(
    values.weight,
    "Weight",
    10,
    300,
    "kg",
    "Weight is required to calculate BMI.",
  );

  errors.systolic = validateMeasurement(
    values.systolic,
    "Systolic BP",
    70,
    250,
    "mmHg",
    "Systolic BP is required.",
  );

  errors.diastolic = validateMeasurement(
    values.diastolic,
    "Diastolic BP",
    40,
    150,
    "mmHg",
    "Diastolic BP is required.",
  );

  errors.pulse = validateMeasurement(
    values.pulse,
    "Pulse rate",
    30,
    220,
    "BPM",
    "Pulse rate is required.",
  );

  // Both readings are needed together. If only one is entered,
  // the missing one is already flagged as required above.
  if (
    !errors.systolic &&
    !errors.diastolic &&
    Number(values.systolic) <= Number(values.diastolic)
  ) {

    errors.diastolic =
      "Systolic pressure should be higher than diastolic pressure.";

  }

  return errors;

}



type CategoryStyle = {

  label: string;

  className: string;

};



const bmiCategories = {

  underweight: {
    label: "Underweight",
    className: "border-red-300 bg-red-50 text-red-800",
  },

  healthy: {
    label: "Healthy Weight",
    className: "border-green-300 bg-green-50 text-green-800",
  },

  overweight: {
    label: "Overweight",
    className: "border-orange-300 bg-orange-50 text-orange-800",
  },

  obesity: {
    label: "Obesity",
    className: "border-yellow-400 bg-yellow-50 text-yellow-900",
  },

} satisfies Record<string, CategoryStyle>;



function getBmiCategory(value: number): CategoryStyle {

  // WHO cutoffs.
  if (value < 18.5) {
    return bmiCategories.underweight;
  }

  if (value < 25) {
    return bmiCategories.healthy;
  }

  if (value < 30) {
    return bmiCategories.overweight;
  }

  return bmiCategories.obesity;

}



const bpCategories = {

  low: {
    label: "Low",
    className: "border-blue-300 bg-blue-50 text-blue-800",
  },

  normal: {
    label: "Normal",
    className: "border-green-300 bg-green-50 text-green-800",
  },

  elevated: {
    label: "Elevated",
    className: "border-yellow-400 bg-yellow-50 text-yellow-900",
  },

  stage1: {
    label: "Stage 1 High BP",
    className: "border-orange-300 bg-orange-50 text-orange-800",
  },

  stage2: {
    label: "Stage 2 High BP",
    className: "border-red-300 bg-red-50 text-red-800",
  },

  crisis: {
    label: "Hypertensive Crisis",
    className: "border-red-700 bg-red-100 text-red-900",
  },

} satisfies Record<string, CategoryStyle>;



function getBloodPressureCategory(
  systolic: number,
  diastolic: number,
): CategoryStyle {

  // Check the most severe range first so mixed readings
  // are classified by the higher category.
  if (systolic > 180 || diastolic > 120) {
    return bpCategories.crisis;
  }

  if (systolic >= 140 || diastolic >= 90) {
    return bpCategories.stage2;
  }

  if (
    (systolic >= 130 && systolic <= 139) ||
    (diastolic >= 80 && diastolic <= 89)
  ) {
    return bpCategories.stage1;
  }

  if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    return bpCategories.elevated;
  }

  if (systolic < 90 || diastolic < 60) {
    return bpCategories.low;
  }

  return bpCategories.normal;

}



const pulseCategories = {

  low: {
    label: "Low pulse",
    className: "border-blue-300 bg-blue-50 text-blue-800",
  },

  normal: {
    label: "Normal",
    className: "border-green-300 bg-green-50 text-green-800",
  },

  high: {
    label: "High pulse",
    className: "border-orange-400 bg-orange-50 text-red-700",
  },

} satisfies Record<string, CategoryStyle>;



function getPulseCategory(value: number): CategoryStyle {

  if (value < 60) {
    return pulseCategories.low;
  }

  if (value <= 100) {
    return pulseCategories.normal;
  }

  return pulseCategories.high;

}



function CategoryBadge({ category }: { category: CategoryStyle }) {

  return (

    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${category.className}`}>

      {category.label}

    </span>

  );

}



export default function ScoreQuestionnaire() {

  const [answers, setAnswers] = useState<number[]>(questions.map(() => 0));

  const [score, setScore] = useState<number | null>(null);

  const [measures, setMeasures] = useState<MeasureValues>(emptyMeasures);

  const [touchedMeasures, setTouchedMeasures] = useState<
    Record<MeasureField, boolean>
  >({
    height: false,
    weight: false,
    systolic: false,
    diastolic: false,
    pulse: false,
  });

  const [showMeasureErrors, setShowMeasureErrors] = useState(false);



  const measureErrors = validateMeasures(measures);

  const heightInCm = Number(measures.height);
  const weightInKg = Number(measures.weight);

  const bmi =
    measures.height.trim() !== "" &&
    measures.weight.trim() !== "" &&
    Number.isFinite(heightInCm) &&
    Number.isFinite(weightInKg) &&
    heightInCm > 0 &&
    weightInKg > 0
      ? weightInKg / (heightInCm / 100) ** 2
      : null;

  const bmiCategory = bmi === null ? null : getBmiCategory(bmi);

  const systolicNumber = Number(measures.systolic);
  const diastolicNumber = Number(measures.diastolic);

  // Recalculated on every keystroke once both readings are valid.
  const bpCategory =
    measures.systolic.trim() !== "" &&
    measures.diastolic.trim() !== "" &&
    !measureErrors.systolic &&
    !measureErrors.diastolic
      ? getBloodPressureCategory(systolicNumber, diastolicNumber)
      : null;

  const pulseNumber = Number(measures.pulse);

  const pulseCategory =
    measures.pulse.trim() !== "" && !measureErrors.pulse
      ? getPulseCategory(pulseNumber)
      : null;



  function visibleError(field: MeasureField): string | undefined {

    return showMeasureErrors || touchedMeasures[field]
      ? measureErrors[field]
      : undefined;

  }



  function updateMeasure(field: MeasureField, value: string) {

    setMeasures((current) => ({ ...current, [field]: value }));

    setScore(null);

    // One blood-pressure reading is never enough — require its pair.
    if (field === "systolic" || field === "diastolic") {

      setTouchedMeasures((current) => ({
        ...current,
        systolic: true,
        diastolic: true,
      }));

    }

  }



  function touchMeasure(field: MeasureField) {

    setTouchedMeasures((current) => ({ ...current, [field]: true }));

  }



  function choose(index: number, value: number) {

    setAnswers((current) => current.map((answer, i) => (i === index ? value : answer)));

    setScore(null);

  }



  function calculateScore() {

    setShowMeasureErrors(true);

    const firstInvalidField = (
      Object.keys(measureErrors) as MeasureField[]
    ).find((field) => measureErrors[field]);

    if (firstInvalidField) {

      const input = document.getElementById(`measure-${firstInvalidField}`);

      input?.scrollIntoView({ behavior: "smooth", block: "center" });
      input?.focus({ preventScroll: true });

      return;

    }

    setScore(answers.reduce((sum, value) => sum + value, 0));

    requestAnimationFrame(() =>

      document.getElementById("score-result")?.scrollIntoView({ behavior: "smooth", block: "center" })

    );

  }



  return (

    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">

      <section aria-labelledby="assessment-title" className="relative flex min-h-[min(700px,calc(100svh-80px))] items-end overflow-hidden bg-[#172D29]">

        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.webp')" }} />

        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/55" />

        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/55 to-[#101C19]/20" />

        <Container>

          <div className="relative z-10 max-w-4xl py-20 sm:py-24 lg:py-28">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">21-point lifestyle assessment</p>

            <h1 id="assessment-title" className="mt-5 max-w-4xl font-[var(--font-serif)] text-[44px] font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[76px]">

              21-Point Lifestyle Assessment

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">

              Start with your height, weight and blood pressure, then review the statements against your usual routine. The result is a simple self-reflection score, not a clinical assessment.

            </p>

            <a href="#health-snapshot" className="mt-8 inline-flex min-h-12 items-center bg-[#F7F5EF] px-6 text-sm font-semibold text-[#17413D] transition-colors hover:bg-white">

              Start the assessment <span aria-hidden="true" className="ml-3">↓</span>

            </a>

          </div>

        </Container>

      </section>



      <section id="health-snapshot" className="scroll-mt-24 border-b border-[var(--sutra-border)] bg-white">

        <Container>

          <div className="mx-auto max-w-5xl py-12 sm:py-16 lg:py-20">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--sutra-muted)]">Step 1 · Health snapshot</p>

              <h2 className="mt-3 font-[var(--font-serif)] text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">

                Record your measurements

              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--sutra-muted)]">

                Enter your height and weight to calculate your BMI, add both blood-pressure readings, and record your pulse rate. These values stay in your browser; nothing is submitted to a server.

              </p>

            </div>



            <form
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                calculateScore();
              }}
              className="mt-10 space-y-10"
            >

              <fieldset>

                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--sutra-teal)]">Body measurements</legend>

                <div className="mt-5 grid gap-5 sm:grid-cols-3">

                  <div>

                    <label htmlFor="measure-height" className="block text-sm font-medium text-[var(--sutra-ink)]">Height (cm)</label>

                    <input
                      id="measure-height"
                      type="number"
                      inputMode="decimal"
                      min={50}
                      max={250}
                      step="any"
                      placeholder="For example, 170"
                      value={measures.height}
                      onChange={(event) => updateMeasure("height", event.target.value)}
                      onBlur={() => touchMeasure("height")}
                      aria-invalid={visibleError("height") ? true : undefined}
                      aria-describedby={visibleError("height") ? "measure-height-error" : undefined}
                      className={`mt-2 h-12 w-full border bg-white px-4 text-[15px] text-[var(--sutra-ink)] outline-none transition-colors placeholder:text-[var(--sutra-muted)] focus:border-[var(--sutra-teal)] ${visibleError("height") ? "border-red-500" : "border-[var(--sutra-border-strong)]"}`}
                    />

                    {visibleError("height") && (
                      <p id="measure-height-error" role="alert" className="mt-1.5 text-xs leading-5 text-red-700">{visibleError("height")}</p>
                    )}

                  </div>

                  <div>

                    <label htmlFor="measure-weight" className="block text-sm font-medium text-[var(--sutra-ink)]">Weight (kg)</label>

                    <input
                      id="measure-weight"
                      type="number"
                      inputMode="decimal"
                      min={10}
                      max={300}
                      step="any"
                      placeholder="For example, 70"
                      value={measures.weight}
                      onChange={(event) => updateMeasure("weight", event.target.value)}
                      onBlur={() => touchMeasure("weight")}
                      aria-invalid={visibleError("weight") ? true : undefined}
                      aria-describedby={visibleError("weight") ? "measure-weight-error" : undefined}
                      className={`mt-2 h-12 w-full border bg-white px-4 text-[15px] text-[var(--sutra-ink)] outline-none transition-colors placeholder:text-[var(--sutra-muted)] focus:border-[var(--sutra-teal)] ${visibleError("weight") ? "border-red-500" : "border-[var(--sutra-border-strong)]"}`}
                    />

                    {visibleError("weight") && (
                      <p id="measure-weight-error" role="alert" className="mt-1.5 text-xs leading-5 text-red-700">{visibleError("weight")}</p>
                    )}

                  </div>

                  <div>

                    <label htmlFor="measure-bmi" className="block text-sm font-medium text-[var(--sutra-ink)]">BMI (calculated)</label>

                    <input
                      id="measure-bmi"
                      type="text"
                      readOnly
                      value={bmi === null ? "—" : bmi.toFixed(2)}
                      aria-describedby="measure-bmi-hint"
                      className="mt-2 h-12 w-full cursor-default border border-[var(--sutra-border-strong)] bg-[var(--sutra-pale-sage)] px-4 font-[var(--font-serif)] text-xl text-[var(--sutra-teal)] outline-none"
                    />

                    <p id="measure-bmi-hint" className="mt-1.5 text-xs leading-5 text-[var(--sutra-muted)]">Weight ÷ height², updated automatically.</p>

                  </div>

                </div>

              </fieldset>



              <fieldset className="border-t border-[var(--sutra-border)] pt-8">

                <legend className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--sutra-teal)]">Blood pressure</legend>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--sutra-muted)]">

                  Both readings are required. If you enter one, please enter the other as well.

                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                  <div>

                    <label htmlFor="measure-systolic" className="block text-sm font-medium text-[var(--sutra-ink)]">Systolic BP (mmHg)</label>

                    <input
                      id="measure-systolic"
                      type="number"
                      inputMode="decimal"
                      min={70}
                      max={250}
                      step="any"
                      placeholder="Upper number, for example 120"
                      value={measures.systolic}
                      onChange={(event) => updateMeasure("systolic", event.target.value)}
                      onBlur={() => touchMeasure("systolic")}
                      aria-invalid={visibleError("systolic") ? true : undefined}
                      aria-describedby={visibleError("systolic") ? "measure-systolic-error" : undefined}
                      className={`mt-2 h-12 w-full border bg-white px-4 text-[15px] text-[var(--sutra-ink)] outline-none transition-colors placeholder:text-[var(--sutra-muted)] focus:border-[var(--sutra-teal)] ${visibleError("systolic") ? "border-red-500" : "border-[var(--sutra-border-strong)]"}`}
                    />

                    {visibleError("systolic") && (
                      <p id="measure-systolic-error" role="alert" className="mt-1.5 text-xs leading-5 text-red-700">{visibleError("systolic")}</p>
                    )}

                  </div>

                  <div>

                    <label htmlFor="measure-diastolic" className="block text-sm font-medium text-[var(--sutra-ink)]">Diastolic BP (mmHg)</label>

                    <input
                      id="measure-diastolic"
                      type="number"
                      inputMode="decimal"
                      min={40}
                      max={150}
                      step="any"
                      placeholder="Lower number, for example 80"
                      value={measures.diastolic}
                      onChange={(event) => updateMeasure("diastolic", event.target.value)}
                      onBlur={() => touchMeasure("diastolic")}
                      aria-invalid={visibleError("diastolic") ? true : undefined}
                      aria-describedby={visibleError("diastolic") ? "measure-diastolic-error" : undefined}
                      className={`mt-2 h-12 w-full border bg-white px-4 text-[15px] text-[var(--sutra-ink)] outline-none transition-colors placeholder:text-[var(--sutra-muted)] focus:border-[var(--sutra-teal)] ${visibleError("diastolic") ? "border-red-500" : "border-[var(--sutra-border-strong)]"}`}
                    />

                    {visibleError("diastolic") && (
                      <p id="measure-diastolic-error" role="alert" className="mt-1.5 text-xs leading-5 text-red-700">{visibleError("diastolic")}</p>
                    )}

                  </div>

                </div>

                {bpCategory && (

                  <div role="status" aria-live="polite" className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--sutra-border)] pt-5">

                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">BP category</span>

                    <CategoryBadge category={bpCategory} />

                    <span className="text-xs text-[var(--sutra-muted)]">Updates as you change either reading.</span>

                  </div>

                )}

                <div className="mt-5 border-t border-[var(--sutra-border)] pt-6">

                  <label htmlFor="measure-pulse" className="block text-sm font-medium text-[var(--sutra-ink)]">Pulse Rate / Heart Rate (BPM)</label>

                  <input
                    id="measure-pulse"
                    type="number"
                    inputMode="numeric"
                    min={30}
                    max={220}
                    step="1"
                    placeholder="For example, 72"
                    value={measures.pulse}
                    onChange={(event) => updateMeasure("pulse", event.target.value)}
                    onBlur={() => touchMeasure("pulse")}
                    aria-invalid={visibleError("pulse") ? true : undefined}
                    aria-describedby={visibleError("pulse") ? "measure-pulse-error" : undefined}
                    className={`mt-2 h-12 w-full max-w-sm border bg-white px-4 text-[15px] text-[var(--sutra-ink)] outline-none transition-colors placeholder:text-[var(--sutra-muted)] focus:border-[var(--sutra-teal)] ${visibleError("pulse") ? "border-red-500" : "border-[var(--sutra-border-strong)]"}`}
                  />

                  {visibleError("pulse") && (
                    <p id="measure-pulse-error" role="alert" className="mt-1.5 text-xs leading-5 text-red-700">{visibleError("pulse")}</p>
                  )}

                  {pulseCategory && (
                    <div role="status" aria-live="polite" className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">

                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">Pulse category</span>

                      <CategoryBadge category={pulseCategory} />

                      <span className="text-xs text-[var(--sutra-muted)]">Updates as you change your pulse rate.</span>

                    </div>
                  )}

                </div>

              </fieldset>

            </form>

          </div>

        </Container>

      </section>



      <section id="questions" className="scroll-mt-24 bg-[var(--sutra-porcelain)]">

        <Container>

          <div className="mx-auto max-w-5xl py-12 sm:py-16 lg:py-20">

            <div className="grid gap-6 border-b border-[var(--sutra-border-strong)] pb-8 sm:grid-cols-[minmax(0,1fr)_130px] sm:items-end sm:gap-10">

              <div className="max-w-3xl">

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--sutra-muted)]">Step 2 · Lifestyle questions</p>

                <h2 className="mt-3 font-[var(--font-serif)] text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">

                  Review your usual routine

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

              <p className="max-w-xl text-sm leading-6 text-[var(--sutra-muted)]">You can change any measurement or answer before calculating your result.</p>

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

                    <h2 className="mt-2 font-[var(--font-serif)] text-3xl leading-tight text-[var(--sutra-ink)] sm:text-4xl">Your assessment results</h2>



                  </div>

                  <div className="flex items-baseline gap-2 border-t border-[var(--sutra-border-strong)] pt-5 sm:justify-end sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">

                    <strong className="font-[var(--font-serif)] text-7xl font-medium leading-none tracking-[-0.05em] text-[var(--sutra-teal)] sm:text-8xl">{score}</strong>

                    <span className="text-xl text-[var(--sutra-muted)] sm:text-2xl">/ 21</span>

                  </div>

                </div>

                <div className="mt-6 grid gap-5 border-t border-[var(--sutra-border-strong)] pt-5 sm:grid-cols-3">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">Your BMI</p>

                    <p className="mt-1 font-[var(--font-serif)] text-2xl text-[var(--sutra-ink)]">{bmi?.toFixed(2) ?? "—"}</p>

                    {bmiCategory && (
                      <div className="mt-2">
                        <CategoryBadge category={bmiCategory} />
                      </div>
                    )}

                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">Blood pressure</p>

                    <p className="mt-1 font-[var(--font-serif)] text-2xl text-[var(--sutra-ink)]">{measures.systolic}/{measures.diastolic} <span className="text-base text-[var(--sutra-muted)]">mmHg</span></p>

                    {bpCategory && (
                      <div className="mt-2">
                        <CategoryBadge category={bpCategory} />
                      </div>
                    )}

                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">Pulse rate</p>

                    <p className="mt-1 font-[var(--font-serif)] text-2xl text-[var(--sutra-ink)]">{measures.pulse} <span className="text-base text-[var(--sutra-muted)]">BPM</span></p>

                    {pulseCategory && (
                      <div className="mt-2">
                        <CategoryBadge category={pulseCategory} />
                      </div>
                    )}

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

              <Link href="/resources/articles" className="font-medium text-[var(--sutra-teal)] underline underline-offset-4">Read Our Articles</Link>

              <Link href="/services" className="font-medium text-[var(--sutra-teal)] underline underline-offset-4">Explore services</Link>

            </nav>

          </div>

        </Container>

      </section>

    </main>

  );

}
