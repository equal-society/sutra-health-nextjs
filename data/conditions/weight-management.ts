// data/conditions/weight-management.ts
import type { Condition } from "./types";

export const weightManagement: Condition = {
  slug: "weight-management",
  title: "Weight Management",

  shortDescription:
    "A practical guide to weight management, with attention to eating patterns, activity, sleep, stress and the behaviours that make changes easier to sustain.",

  introduction:
    "Weight management is not determined by one food, exercise or practice. This guide focuses on the everyday factors that can influence weight and related health, while keeping the discussion separate from treatment of an underlying medical condition.",

  concerns: [
    "Difficulty maintaining a healthy weight",
    "Repeated weight-loss and weight-gain cycles",
    "Stress eating or eating patterns that feel difficult to manage",
    "Difficulty sustaining nutrition or activity changes",
    "Weight goals connected with blood pressure, blood sugar or another health concern",
  ],

  lifestyleFactors: [
    {
      title: "Dietary pattern",
      description: "Regular eating patterns and the overall quality of the diet are central to weight management. The useful question is what can be maintained within your usual routine, preferences and health needs.",
    },
    {
      title: "Sleep and stress",
      description: "Sleep and stress can affect appetite, eating behaviour and daily routines. They are useful areas to review when weight-related changes repeatedly become difficult to sustain.",
    },
    {
      title: "Eating behaviour",
      description: "Stress eating, overeating and difficulty maintaining planned eating patterns can be relevant even when someone understands what they want to change.",
    },
    {
      title: "Movement",
      description: "Regular physical activity matters for overall health and weight management. The type and amount should fit current ability, preferences and any medical considerations.",
    },
  ],

  sections: [
    {
      title: "What matters beyond the number on the scale",
      content: [
        "Weight management is better understood as a long-term health goal than as a short-term diet. Eating patterns, movement, sleep, stress and behaviour can interact, so the most useful starting point is to identify which of these factors is actually getting in the way.",
        "The research on yoga is more limited for direct weight loss than wellness marketing often suggests. That distinction matters: a practice may be useful for behaviour, stress or activity without being a stand-alone weight-loss treatment.",
      ],
    },
    {
      title: "Where the evidence is strongest",
      content: [
        "Dietary patterns and sustained behaviour change have a more established role in weight-related care than any single exercise or wellness practice. The evidence section below summarises the research available for yoga specifically.",
        "If weight is accompanied by diabetes, high blood pressure, medication use or another diagnosed condition, lifestyle changes should be considered alongside appropriate medical care rather than as a replacement for it.",
      ],
    },
    {
      title: "A useful starting point",
      content: [
        "Begin with the part of your routine that is most realistic to review: what you eat and when, how active you are, how you sleep, or situations that lead to unplanned eating.",
        "The aim is not to change everything at once. A focused conversation can help identify a manageable priority and clarify when nutrition, lifestyle or medical support is appropriate.",
      ],
    },
  ],

  approach: [
    "Review the eating pattern before choosing a restrictive plan",
    "Match physical activity to current ability and routine",
    "Consider sleep and stress when eating behaviour is difficult to sustain",
    "Use yoga or mindfulness only for roles supported by the available evidence",
  ],

  support: [
    "Nutrition counselling for eating patterns and practical dietary changes",
    "Lifestyle support around activity, sleep and daily routines",
    "Behaviour and stress support when eating patterns are difficult to sustain",
    "Physician involvement when weight is connected with another medical concern",
  ],

  evidence: [
    {
      claim:
        "A systematic review and meta-analysis of 30 RCTs (2,173 participants) found yoga did not significantly affect weight, body fat percentage, or waist circumference in general populations studied.",
      source: "Systematic review and meta-analysis",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0091743516300366",
    },
    {
      claim:
        "In a randomized trial, participants combining yoga with behavioral weight-loss treatment reported fewer dietary lapses (less overeating, stress eating, and difficulty resisting temptation) than a contact-matched control group.",
      source: "PATH Trial protocol and preliminary findings, RCT",
      url: "https://www.researchgate.net/publication/401230703",
    },
    {
      claim:
        "Among participants with high initial weight loss (5%+ in the first 3 months), those also practicing yoga lost significantly more weight by 6 months (-9.0kg vs -6.7kg) than a non-yoga control group.",
      source: "Randomized trial on long-term weight loss",
      url: "https://pubmed.ncbi.nlm.nih.gov/35120162/",
    },
  ],

  faqs: [
    {
      question: "Is weight management only about diet?",
      answer: "No. Eating patterns are important, but activity, sleep, stress and behaviour can also affect how sustainable weight-related changes are.",
    },
    {
      question: "Does yoga directly cause weight loss?",
      answer: "The available research does not support presenting yoga alone as a reliable weight-loss treatment. Some research suggests a role in behaviour and self-regulation, which is different from claiming a direct effect on body weight.",
    },
    {
      question: "When should I discuss weight with a doctor?",
      answer: "Discuss weight with a clinician when it is linked with a diagnosed condition, medication, significant or unexplained change, or when you are unsure which approach is medically appropriate.",
    },
  ],

  relatedConditions: ["diabetes-blood-sugar", "high-blood-pressure", "digestive-gut-health"],

  internalLinks: [
    { label: "Nutrition", href: "/services/nutrition" },
    { label: "Lifestyle Medicine", href: "/services/lifestyle" },
    { label: "Behaviour, Stress & Mind", href: "/services/behaviour-stress-mind" },
    { label: "Diabetes & Blood Sugar", href: "/conditions/diabetes-blood-sugar" },
  ],
};
