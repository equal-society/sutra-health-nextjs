// data/conditions/subpages/digestive-gut-health.ts
import type { ConditionSubpage } from "../types";

export const digestiveGutHealthSubpages: ConditionSubpage[] = [
  {
    slug: "yoga-for-ibs-what-evidence-says",
    parentSlug: "digestive-gut-health",
    question: "What does the research actually say about yoga for IBS?",
    shortAnswer:
      "The evidence is promising but not settled. Earlier reviews reported improvements in IBS symptoms and anxiety, while a more recent systematic review judged the evidence uncertain because trials varied in quality and design. Yoga can be discussed as a supportive option, but current evidence does not establish it as a proven IBS treatment.",
    detail: [
      {
        title: "Why the evidence is mixed",
        content: [
          "Studies have used different yoga programmes, comparison groups and outcome measures, often with relatively small samples. Earlier reviews therefore found a positive signal, while later analysis placed more weight on the limitations and inconsistency across trials.",
          "An 8-week virtual yoga trial reported improvement within the yoga group, including IBS severity, quality of life and stress, but did not show clear superiority over an advice-only control on the main measure. That is useful evidence, but it is not the same as proof of effectiveness.",
        ],
      },
      {
        title: "Where the Sutra Health evidence fits",
        content: [
          "The site also references a case report by Dr. Rakesh Sarwal involving a combined diet, lifestyle and yoga approach for IBS. A single case report can illustrate clinical experience, but it cannot establish that the same outcome will occur broadly.",
          "If you are considering yoga for IBS, treat it as one possible supportive practice and continue appropriate medical assessment and management for persistent or changing digestive symptoms.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-bloating-and-constipation"],
  },
  {
    slug: "yoga-poses-for-bloating-and-constipation",
    parentSlug: "digestive-gut-health",
    question: "Which yoga poses help with bloating and constipation?",
    shortAnswer:
      "Gentle movements involving the abdomen and spine are commonly used in yoga routines for bloating or constipation, including Pawanmuktasana, Ardha Matsyendrasana, Cat-Cow and Malasana. These poses should be adapted to comfort rather than treated as a guaranteed way to relieve digestive symptoms.",
    detail: [
      {
        title: "Common examples",
        content: [
          "Pawanmuktasana is a gentle abdominal-compression posture. Ardha Matsyendrasana adds a seated spinal rotation, Cat-Cow uses repeated spinal flexion and extension, and Malasana uses a squat position. These movements are commonly included in routines aimed at comfortable abdominal movement.",
          "There is a difference between traditional use of a pose and clinical evidence that it treats constipation or bloating. These examples are best understood as movement options, not as a replacement for assessment when symptoms persist.",
        ],
      },
      {
        title: "When to practise",
        content: [
          "The source material recommends avoiding stronger twists or deep abdominal compression immediately after a meal and suggests waiting around 2 to 3 hours before deeper practice. Gentle movement may be tolerated sooner, depending on the individual.",
          "After abdominal surgery or with a known abdominal condition, get appropriate medical advice before using strong twists or compression-based poses.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-for-ibs-what-evidence-says"],
  },
];
