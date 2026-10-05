// data/conditions/high-blood-pressure.ts
import type { Condition } from "./types";

export const highBloodPressure: Condition = {
  slug: "high-blood-pressure",
  title: "High Blood Pressure",

  shortDescription:
    "A practical guide to lifestyle factors relevant to blood pressure, including diet, activity, sleep, stress and the evidence on yoga as an adjunct to care.",

  introduction:
    "High blood pressure is influenced by several factors, and lifestyle changes are usually considered alongside appropriate medical assessment and treatment. This guide focuses on the everyday factors most relevant to blood-pressure care and explains where the available yoga evidence fits.",

  concerns: [
    "A new or repeatedly elevated blood-pressure reading",
    "Questions about diet, sodium, activity or sleep",
    "Stress or routines that make healthy habits difficult to maintain",
    "Interest in yoga or breathing practices alongside standard care",
    "Wanting to understand which lifestyle changes are worth prioritising",
  ],

  lifestyleFactors: [
    {
      title: "Diet and sodium",
      description: "Dietary pattern and sodium intake are established areas to review as part of blood-pressure management, with individual needs depending on overall health and medical advice.",
    },
    {
      title: "Physical activity",
      description: "Regular appropriate activity can be part of cardiovascular risk reduction. The right intensity depends on fitness, symptoms and medical circumstances.",
    },
    {
      title: "Sleep",
      description: "Sleep quality and regularity can be relevant to cardiovascular health and are worth discussing when sleep is consistently poor.",
    },
    {
      title: "Stress and breathing",
      description: "Stress management may support healthier routines. Breathing practices can be considered as a complementary practice, but they should not replace blood-pressure treatment or monitoring.",
    },
  ],

  sections: [
    {
      title: "Know the reading before choosing the intervention",
      content: [
        "A single reading does not provide the full clinical picture. Persistent elevation, the measurement context and other cardiovascular risk factors all matter.",
        "If you have been diagnosed with hypertension, lifestyle measures should sit alongside the monitoring and treatment plan recommended by your clinician.",
      ],
    },
    {
      title: "What the yoga evidence shows",
      content: [
        "The selected research on this site suggests yoga can produce modest improvements in blood pressure when used as an adjunct to standard lifestyle care. The evidence section gives the specific studies and findings rather than treating yoga as a stand-alone treatment.",
        "The size of any effect varies between studies and populations, so an evidence-based approach should avoid promising a particular reduction for an individual.",
      ],
    },
    {
      title: "Choose priorities you can maintain",
      content: [
        "A useful starting point is to identify one or two practical areas: dietary pattern, activity, sleep or stress. The priority should fit your current health status and existing medical plan.",
        "If readings are substantially high, symptoms are concerning or medication decisions are needed, seek medical care rather than relying on lifestyle practices alone.",
      ],
    },
  ],

  approach: [
    "Review blood-pressure readings and existing medical advice first",
    "Prioritise practical dietary and activity changes that fit the person",
    "Address sleep and stress where they interfere with routine",
    "Use yoga or breathing practices as complementary options, not substitutes for treatment",
  ],

  support: [
    "Nutrition counselling around dietary patterns and sodium",
    "Lifestyle support for activity, sleep and routines",
    "Therapeutic yoga or movement as an adjunct to care",
    "Physician consultation when readings, symptoms or treatment decisions need review",
  ],

  evidence: [
    {
      claim:
        "Adding yoga to standard lifestyle modification produced a greater reduction in systolic blood pressure (6 mmHg) than lifestyle modification alone (4 mmHg) in a randomized controlled study.",
      source: "Hypertension Research (Nature), prehypertensive subjects RCT",
      url: "https://www.nature.com/articles/hr2014126",
    },
    {
      claim:
        "A meta-analysis of 16 studies (962 participants) found yoga reduced systolic blood pressure by 4.35 mmHg on average, with larger effects in Asian populations specifically.",
      source: "Meta-analysis reported via Medscape",
      url: "https://www.medscape.com/viewarticle/yoga-can-reduce-blood-pressure-adults-high-bmi-2026a1000d13",
    },
    {
      claim:
        "A systematic review of 49 clinical trials found yoga practiced at least three times weekly was associated with a 10 mmHg systolic / 6 mmHg diastolic reduction.",
      source: "Wu et al., systematic review (cited via PMC)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7981931/",
    },
    {
      claim:
        "A traffic-light lifestyle-change framework for NCD outpatients in India, providing structured guidance across sleep, diet, movement and stress.",
      source: "Sarwal R. et al., published research",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12975079/",
      isAuthorPublication: true,
    },
  ],

  faqs: [
    {
      question: "Can lifestyle changes help lower blood pressure?",
      answer: "They can be part of blood-pressure management, particularly around diet, physical activity, weight, sleep and other cardiovascular risk factors. The appropriate plan depends on the individual.",
    },
    {
      question: "Can yoga replace blood-pressure medication?",
      answer: "No. The research represented here studies yoga as a complementary intervention. Do not stop or change prescribed medication without discussing it with your clinician.",
    },
    {
      question: "When should high blood pressure be medically assessed?",
      answer: "Repeated elevated readings should be discussed with a qualified clinician. Very high readings or concerning symptoms require prompt medical assessment rather than self-management alone.",
    },
  ],

  relatedConditions: ["diabetes-blood-sugar", "weight-management", "digestive-gut-health"],

  internalLinks: [
    { label: "Nutrition", href: "/services/nutrition" },
    { label: "Therapeutic Yoga & Movement", href: "/services/therapeutic-yoga" },
    { label: "Behaviour, Stress & Mind", href: "/services/behaviour-stress-mind" },
    { label: "Diabetes & Blood Sugar", href: "/conditions/diabetes-blood-sugar" },
  ],
};
