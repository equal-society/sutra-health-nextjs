// data/conditions/digestive-gut-health.ts
import type { Condition } from "./types";

export const digestiveGutHealth: Condition = {
  slug: "digestive-gut-health",
  title: "Digestive & Gut Health",

  shortDescription:
    "A practical guide to digestive wellbeing, with attention to eating patterns, routine, stress and the limits of current evidence for yoga in IBS.",

  introduction:
    "Digestive symptoms can have many causes. This guide focuses on everyday factors that may be relevant to digestive wellbeing while keeping diagnosis, persistent symptoms and medical evaluation separate from general lifestyle advice.",

  concerns: [
    "Bloating, constipation or irregular bowel habits",
    "Digestive symptoms that seem related to eating patterns or timing",
    "IBS and questions about lifestyle support",
    "Stress that appears to affect digestive symptoms",
    "Uncertainty about when digestive symptoms need medical assessment",
  ],

  lifestyleFactors: [
    {
      title: "Eating patterns and timing",
      description: "Usual foods, meal timing, portion patterns and individual tolerance can be useful starting points when digestive symptoms are being tracked.",
    },
    {
      title: "Gentle movement",
      description: "Appropriate movement may support general wellbeing and can be considered around symptoms, but there is no single routine that fits every digestive condition.",
    },
    {
      title: "Stress and the gut-brain connection",
      description: "Stress can interact with digestive symptoms, particularly in functional gastrointestinal disorders, without meaning that symptoms are imaginary or caused only by stress.",
    },
    {
      title: "Routine consistency",
      description: "Regular meals, sleep, hydration and activity can make symptoms easier to observe and manage for some people.",
    },
  ],

  sections: [
    {
      title: "Start with the symptom, not a generic gut-health claim",
      content: [
        "Bloating, constipation, abdominal pain and changes in bowel habits can have different causes. Persistent, severe or changing symptoms should be medically evaluated rather than treated as a general “gut health” problem.",
        "For a diagnosed condition such as IBS, lifestyle support can be considered within the broader management plan.",
      ],
    },
    {
      title: "What the evidence says about yoga and IBS",
      content: [
        "Research on yoga and IBS is mixed. Earlier studies reported improvements in symptoms and anxiety, while more recent evidence has highlighted uncertainty and methodological differences. The selected studies are listed in the evidence section below.",
        "That is why this site should describe yoga as a possible adjunct rather than a proven stand-alone treatment for IBS.",
      ],
    },
    {
      title: "Build from the routine you already have",
      content: [
        "A useful review can start with meals, symptom timing, hydration, sleep, stress and activity. Tracking these patterns can help a person discuss relevant changes with a clinician or nutrition professional.",
        "If symptoms are persistent, severe, associated with bleeding, unexplained weight loss or other concerning changes, medical assessment should take priority over self-directed lifestyle experimentation.",
      ],
    },
  ],

  approach: [
    "Identify the digestive symptom and any existing diagnosis first",
    "Review meals, timing and individual tolerance rather than applying a generic diet",
    "Consider stress, sleep and routine as supporting factors",
    "Use yoga or movement only as complementary support where appropriate",
  ],

  support: [
    "Nutrition counselling around meals and eating patterns",
    "Behaviour and stress support where relevant",
    "Therapeutic yoga and gentle movement as an adjunct",
    "Physician consultation when symptoms need diagnosis or further assessment",
  ],

  evidence: [
    {
      claim:
        "A systematic review of 6 randomized controlled trials (273 patients) found yoga significantly decreased bowel symptoms, IBS severity, and anxiety compared to no treatment.",
      source: "PubMed, systematic review",
      url: "https://pubmed.ncbi.nlm.nih.gov/27112106/",
    },
    {
      claim:
        "A more recent, larger systematic review and meta-analysis found the evidence for yoga in IBS uncertain, citing methodological heterogeneity, and did not recommend yoga as an IBS treatment pending further large-scale trials.",
      source: "PubMed, systematic review and meta-analysis",
      url: "https://pubmed.ncbi.nlm.nih.gov/40358469/",
    },
    {
      claim:
        "An 8-week virtual yoga program for IBS patients showed a significant reduction in IBS symptom severity within the treatment group, alongside improved quality of life, fatigue, and perceived stress, though it was not statistically superior to an advice-only control group on the primary outcome.",
      source: "American Journal of Gastroenterology, RCT",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9889201/",
    },
    {
      claim:
        "A published case report documents IBS symptom remission achieved through a combined diet, lifestyle, and yoga intervention.",
      source: "Sarwal R., published case report",
      isAuthorPublication: true,
    },
  ],

  faqs: [
    {
      question: "Can lifestyle changes help digestive symptoms?",
      answer: "They can be useful for some digestive conditions, but the right changes depend on the symptom pattern and diagnosis. A generic “gut health” programme is not appropriate for every person.",
    },
    {
      question: "Is yoga proven to treat IBS?",
      answer: "The evidence is mixed. Some studies report improvements, while newer reviews have highlighted uncertainty. Yoga can be discussed as a complementary option rather than a guaranteed treatment.",
    },
    {
      question: "When should digestive symptoms be medically assessed?",
      answer: "Persistent, severe, changing or concerning symptoms should be evaluated by a healthcare professional, particularly when there are warning signs such as bleeding or unexplained weight loss.",
    },
  ],

  relatedConditions: ["weight-management", "diabetes-blood-sugar", "womens-health"],

  internalLinks: [
    { label: "Nutrition", href: "/services/nutrition" },
    { label: "Behaviour, Stress & Mind", href: "/services/behaviour-stress-mind" },
    { label: "Therapeutic Yoga & Movement", href: "/services/therapeutic-yoga" },
  ],
};
