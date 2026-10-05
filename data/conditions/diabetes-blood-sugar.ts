// data/conditions/diabetes-blood-sugar.ts
import type { Condition } from "./types";

export const diabetesBloodSugar: Condition = {
  slug: "diabetes-blood-sugar",
  title: "Diabetes & Blood Sugar",

  shortDescription:
    "A condition guide to blood-sugar management, with evidence on nutrition, physical activity, yoga and structured lifestyle support alongside medical care.",

  introduction:
    "Blood-sugar health involves more than one behaviour. Nutrition, physical activity, sleep, stress and prescribed treatment can all be relevant, with the right combination depending on whether the concern is prediabetes, type 2 diabetes or another metabolic issue.",

  concerns: [
    "Prediabetes and concern about progression to diabetes",
    "Type 2 diabetes with blood sugar that is difficult to keep in range",
    "Questions about lifestyle changes alongside prescribed treatment",
    "Elevated HbA1c or fasting glucose results",
    "Wanting a structured way to review everyday factors affecting metabolic health",
  ],

  lifestyleFactors: [
    {
      title: "Eating pattern",
      description: "Meal composition, timing and overall dietary pattern can be reviewed alongside blood-sugar goals and existing medical advice.",
    },
    {
      title: "Physical activity",
      description: "Regular movement can support metabolic health. The appropriate activity depends on health status, fitness and any complications or restrictions.",
    },
    {
      title: "Yoga and structured practice",
      description: "Clinical studies have examined yoga as an adjunct to standard care, including research on HbA1c and fasting glucose. It should not be presented as a replacement for diabetes treatment.",
    },
    {
      title: "Sleep and stress",
      description: "Sleep quality and stress can affect routines and self-management. They may be useful targets when day-to-day diabetes care is difficult to sustain.",
    },
  ],

  sections: [
    {
      title: "Start with the type of blood-sugar concern",
      content: [
        "Prediabetes and established type 2 diabetes are not the same clinical situation. The appropriate next step depends on the diagnosis, laboratory results, current treatment and other health factors.",
        "This page provides lifestyle context rather than a substitute for diagnosis, medication decisions or individual diabetes management.",
      ],
    },
    {
      title: "What the research can and cannot tell us",
      content: [
        "Clinical research has examined yoga and other lifestyle interventions as additions to standard diabetes care. The evidence section summarises the studies already selected for this site, including an India-based prevention trial.",
        "Research findings should be interpreted as evidence about a studied intervention and population, not as a promise that the same result will occur for every person.",
      ],
    },
    {
      title: "Use lifestyle support alongside medical care",
      content: [
        "A practical plan can focus on the parts of daily life that are most relevant to blood-sugar management: food, movement, sleep, stress and adherence to prescribed care.",
        "Do not stop, reduce or change diabetes medication because of lifestyle changes without discussing it with the prescribing clinician.",
      ],
    },
  ],

  approach: [
    "Clarify whether the question concerns prediabetes or diagnosed diabetes",
    "Review eating and activity patterns alongside current treatment",
    "Use structured yoga or movement only as an adjunct to medical care",
    "Track relevant results with the treating clinician",
  ],

  support: [
    "Nutrition counselling around everyday eating patterns",
    "Lifestyle support for activity, sleep and stress",
    "Therapeutic yoga or movement as an adjunct where appropriate",
    "Physician consultation for questions about diagnosis, results or treatment",
  ],

  evidence: [
    {
      claim:
        "A Bayesian meta-analysis of RCTs in adults with type 2 diabetes found yoga reduced HbA1c by 0.64% and fasting blood glucose by 1.36 mmol/L, exceeding standard clinical significance thresholds.",
      source: "Frontiers in Endocrinology, Bayesian three-level meta-analysis",
      url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2026.1889124/full",
    },
    {
      claim:
        "A systematic review and meta-analysis of 13 studies found yoga significantly improved HbA1c, fasting glucose, post-prandial glucose, and triglycerides in type 2 diabetes patients.",
      source: "PMC, systematic review and meta-analysis",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9259958/",
    },
    {
      claim:
        "A multicenter cluster-randomized controlled trial across India found a yoga-based lifestyle protocol reduced progression from prediabetes to diabetes by an adjusted relative risk reduction of approximately 64% compared to standard care.",
      source: "PMC, NMB Trial (India)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8231281/",
    },
    {
      claim:
        "A four-arm randomized controlled study of 120 type 2 diabetes patients found significant reductions in HbA1c and perceived stress following a yoga intervention.",
      source: "PMC, four-arm RCT",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12853005/",
    },
  ],

  faqs: [
    {
      question: "Can lifestyle changes help with blood sugar?",
      answer: "Yes. Nutrition, physical activity, sleep and stress management can be part of diabetes and prediabetes care, but the appropriate plan depends on the individual diagnosis and treatment.",
    },
    {
      question: "Can yoga replace diabetes medication?",
      answer: "No. The clinical studies represented on this site evaluate yoga as an addition to standard care, not as a replacement for prescribed diabetes treatment.",
    },
    {
      question: "What should I do if I have an elevated HbA1c?",
      answer: "Discuss the result with a qualified clinician who can interpret it in context, confirm the diagnosis when needed and advise on appropriate treatment and follow-up.",
    },
  ],

  relatedConditions: ["weight-management", "high-blood-pressure", "digestive-gut-health"],

  internalLinks: [
    { label: "Nutrition", href: "/services/nutrition" },
    { label: "Therapeutic Yoga & Movement", href: "/services/therapeutic-yoga" },
    { label: "Weight Management", href: "/conditions/weight-management" },
    { label: "High Blood Pressure", href: "/conditions/high-blood-pressure" },
  ],
};
