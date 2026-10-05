// data/conditions/migraine-headache.ts
import type { Condition } from "./types";

export const migraineHeadache: Condition = {
  slug: "migraine-headache",
  title: "Migraine & Headache",

  shortDescription:
    "A practical guide to migraine-related lifestyle factors, including sleep, regular meals, hydration, stress and the evidence on yoga as an adjunct to treatment.",

  introduction:
    "Migraine is a neurological condition, not simply a stress or lifestyle problem. Lifestyle factors can influence patterns and day-to-day management, while diagnosis and appropriate treatment remain important.",

  concerns: [
    "Recurring migraine attacks or headache days",
    "Irregular sleep or meals around headache episodes",
    "Stress or routines that appear to influence symptoms",
    "Questions about yoga or movement during migraine care",
    "Wanting to understand when lifestyle support is appropriate alongside medical treatment",
  ],

  lifestyleFactors: [
    {
      title: "Sleep consistency",
      description: "Regular sleep and wake times can be worth reviewing when attacks appear connected with disrupted sleep or changing routines.",
    },
    {
      title: "Meal and hydration patterns",
      description: "Skipping meals or inconsistent hydration may be relevant for some people. Individual triggers vary, so tracking patterns can be more useful than assuming one trigger applies to everyone.",
    },
    {
      title: "Stress and nervous-system load",
      description: "Stress can be relevant to migraine patterns, but migraine should not be reduced to stress alone.",
    },
    {
      title: "Gentle, appropriate movement",
      description: "Movement may be useful between attacks for some people, while intensity and specific practices may need adjustment around symptoms.",
    },
  ],

  sections: [
    {
      title: "Understand migraine before treating it as a lifestyle issue",
      content: [
        "Recurring headaches have different causes, and migraine has specific diagnostic features. New, severe or changing headaches should be medically assessed rather than attributed to lifestyle factors.",
        "For people with an established migraine diagnosis, lifestyle review can complement — but not replace — appropriate medical treatment.",
      ],
    },
    {
      title: "What the yoga research shows",
      content: [
        "Clinical trials have studied yoga as an add-on to medical therapy for migraine. The evidence section summarises the selected trials and reviews without turning those findings into a promise of medication reduction or symptom elimination.",
        "The specific question pages can address yoga practice choices in more detail; this parent page keeps the focus on migraine management as a whole.",
      ],
    },
    {
      title: "Look for patterns that are useful to you",
      content: [
        "Sleep regularity, meal timing, hydration, stress and activity are reasonable areas to observe when looking for patterns. A headache diary can help separate recurring associations from assumptions.",
        "The most useful lifestyle change is one that is safe, practical and compatible with the person’s migraine treatment plan.",
      ],
    },
  ],

  approach: [
    "Keep migraine diagnosis and medical treatment at the centre",
    "Review sleep, meals, hydration and stress patterns",
    "Choose movement appropriate to the person and current symptoms",
    "Use yoga as an adjunct rather than a replacement for preventive or acute treatment",
  ],

  support: [
    "Therapeutic yoga and movement where appropriate",
    "Behaviour and stress support for relevant routines",
    "Lifestyle guidance around sleep, meals and activity",
    "Physician consultation for diagnosis, changing symptoms or treatment questions",
  ],

  evidence: [
    {
      claim:
        "In a randomized controlled trial of 160 patients with episodic migraine, yoga as an add-on to medical therapy significantly reduced headache frequency, intensity, and disability compared to medical therapy alone, with patients also reducing medication use substantially.",
      source: "Neurology (CONTAIN Trial), New Delhi, India",
      url: "https://www.neurology.org/doi/10.1212/WNL.0000000000009473",
    },
    {
      claim:
        "A randomized controlled trial of patients with migraine without aura found significant reductions in headache frequency, intensity, and pain scores after 3 months of yoga therapy compared to self-care alone.",
      source: "Headache journal, RCT",
      url: "https://www.ovid.com/journals/head/fulltext/00004014-200705000-00005~effectiveness-of-yoga-therapy-in-the-treatment-of-migraine",
    },
    {
      claim:
        "Multiple systematic reviews and randomized trials support a grade B recommendation for yoga as an adjunct preventive treatment for migraine.",
      source: "Clinical review, cited via multiple RCTs",
    },
  ],

  faqs: [
    {
      question: "Can lifestyle changes help with migraine?",
      answer: "Lifestyle measures can be part of migraine management, particularly around regular sleep, meals, hydration and activity. Individual triggers and responses vary.",
    },
    {
      question: "Can yoga replace migraine medication?",
      answer: "No. Research has generally examined yoga as an adjunct to medical treatment. Medication decisions should be made with the treating clinician.",
    },
    {
      question: "When should a new headache be medically assessed?",
      answer: "A new, unusually severe, rapidly changing or otherwise concerning headache should be medically assessed rather than assumed to be migraine or a lifestyle-related symptom.",
    },
  ],

  relatedConditions: ["digestive-gut-health", "womens-health", "high-blood-pressure"],

  internalLinks: [
    { label: "Behaviour, Stress & Mind", href: "/services/behaviour-stress-mind" },
    { label: "Therapeutic Yoga & Movement", href: "/services/therapeutic-yoga" },
    { label: "Digestive & Gut Health", href: "/conditions/digestive-gut-health" },
  ],
};
