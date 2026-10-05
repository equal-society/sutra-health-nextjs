// data/conditions/womens-health.ts
import type { Condition } from "./types";

export const womensHealth: Condition = {
  slug: "womens-health",
  title: "Women's Health",

  shortDescription:
    "A focused guide to the areas currently covered here: PCOS and menopause-related symptoms, with lifestyle evidence kept alongside appropriate medical care.",

  introduction:
    "Women’s health covers many medical needs. This page deliberately focuses on PCOS and menopause-related symptoms because those are the areas supported by the evidence and scope represented on this site. Pregnancy care and gynecological conditions requiring medical management belong with the appropriate specialist.",

  concerns: [
    "PCOS and questions about insulin resistance or lifestyle support",
    "Irregular cycles associated with PCOS",
    "Menopause-related symptoms affecting mood or sleep",
    "Questions about structured yoga or mindfulness alongside medical care",
    "Uncertainty about which lifestyle practices have condition-specific evidence",
  ],

  lifestyleFactors: [
    {
      title: "PCOS and structured movement",
      description: "Research on PCOS includes structured yoga interventions, including outcomes related to insulin resistance and androgen levels.",
    },
    {
      title: "Dietary pattern",
      description: "Nutrition may be relevant to metabolic health in PCOS and should be considered in the context of the person’s broader clinical picture.",
    },
    {
      title: "Mindfulness for menopause",
      description: "Structured mindfulness programmes have been studied for menopausal symptoms, including mood-related outcomes.",
    },
    {
      title: "Sleep",
      description: "Sleep disruption can accompany both PCOS and menopause and may be worth addressing as part of broader support.",
    },
  ],

  sections: [
    {
      title: "Keep the scope specific",
      content: [
        "This page is intentionally narrower than the term “women’s health” suggests. The current evidence and service scope represented here concern PCOS and menopause-related symptoms.",
        "Pregnancy care, gynecological diagnosis and conditions requiring obstetric or gynecological management should be handled by the relevant medical specialist.",
      ],
    },
    {
      title: "What the selected evidence shows",
      content: [
        "The research represented on this page includes studies of structured yoga in PCOS and mindfulness-based practice for menopause-related symptoms. The evidence section provides the selected studies and their sources.",
        "These findings support specific adjunctive practices; they do not mean that yoga, nutrition or mindfulness can replace endocrine, gynecological or other medical care.",
      ],
    },
    {
      title: "Choose support around the clinical need",
      content: [
        "For PCOS, the useful discussion may involve metabolic health, nutrition and appropriate movement. For menopause-related symptoms, sleep, stress and structured mindfulness may be relevant.",
        "The right starting point depends on the individual symptoms, diagnosis, current treatment and questions they want to discuss with their healthcare team.",
      ],
    },
  ],

  approach: [
    "Keep the underlying diagnosis and specialist care central",
    "Use condition-specific evidence rather than generic women’s-health claims",
    "Review nutrition and movement in the context of PCOS when relevant",
    "Use structured mindfulness and sleep support for appropriate menopause-related concerns",
  ],

  support: [
    "Nutrition counselling where metabolic or dietary questions are relevant",
    "Therapeutic yoga and movement for appropriate PCOS-related support",
    "Behaviour and stress support for relevant menopause-related concerns",
    "Coordination with the treating gynecologist, endocrinologist or other clinician",
  ],

  evidence: [
    {
      claim:
        "A Bayesian network meta-analysis of 19 RCTs (808 women with PCOS) found yoga ranked highest among six exercise modalities for reducing insulin resistance (HOMA-IR), ahead of HIIT, moderate training, and resistance training.",
      source: "Network meta-analysis",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12427719/",
    },
    {
      claim:
        "A randomized controlled trial found regular mindful yoga practice improved androgen levels in women with PCOS.",
      source: "RCT, Journal of Osteopathic Medicine",
      url: "https://www.degruyterbrill.com/document/doi/10.7556/jaoa.2020.050/html",
    },
    {
      claim:
        "A randomized controlled trial found an 8-week MBSR program produced significantly greater reductions in anxiety and depression symptoms related to menopause than a menopause-education control group.",
      source: "RCT",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5919973/",
    },
  ],

  faqs: [
    {
      question: "What women’s health concerns are covered here?",
      answer: "The current scope is focused on PCOS and menopause-related symptoms because these are the areas represented by the evidence and content on this site.",
    },
    {
      question: "Can yoga help with PCOS?",
      answer: "The selected research includes clinical studies of structured yoga in PCOS, including outcomes related to insulin resistance and androgen levels. It should be considered alongside appropriate medical care.",
    },
    {
      question: "Do you provide pregnancy or gynecological care?",
      answer: "No. Pregnancy care and gynecological conditions requiring medical management should be handled by the appropriate obstetric or gynecological specialist.",
    },
  ],

  relatedConditions: ["diabetes-blood-sugar", "weight-management", "high-blood-pressure"],

  internalLinks: [
    { label: "Diabetes & Blood Sugar", href: "/conditions/diabetes-blood-sugar" },
    { label: "Behaviour, Stress & Mind", href: "/services/behaviour-stress-mind" },
    { label: "Therapeutic Yoga & Movement", href: "/services/therapeutic-yoga" },
    { label: "Nutrition", href: "/services/nutrition" },
  ],
};
