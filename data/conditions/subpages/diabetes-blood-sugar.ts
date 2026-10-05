// data/conditions/subpages/diabetes-blood-sugar.ts
import type { ConditionSubpage } from "../types";

export const diabetesBloodSugarSubpages: ConditionSubpage[] = [
  {
    slug: "can-yoga-prevent-prediabetes-progressing",
    parentSlug: "diabetes-blood-sugar",
    question: "Can yoga prevent prediabetes from progressing to diabetes?",
    shortAnswer:
      "Research from India provides encouraging evidence for a structured yoga-based lifestyle programme in people at high risk of diabetes. A large multicentre trial reported lower progression to diabetes than standard-of-care advice alone. This is evidence about a structured programme, not a guarantee that yoga by itself will prevent diabetes.",
    detail: [
      {
        title: "What the trial studied",
        content: [
          "The NMB Trial was a multicentre cluster-randomised controlled trial in India that followed people with prediabetes and assessed progression to diagnosed diabetes. The intervention was a sustained yoga-based lifestyle programme rather than occasional classes.",
          "That distinction matters when interpreting the result. The finding supports further consideration of structured lifestyle intervention; it should not be reduced to the claim that any amount of yoga prevents diabetes.",
        ],
      },
      {
        title: "What to do with a prediabetes result",
        content: [
          "Prediabetes is an opportunity to review blood sugar, food habits, activity, sleep and other relevant factors with a clinician. If you choose a yoga-based programme, keep routine monitoring so changes in blood sugar can be assessed over time.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-replace-diabetes-medication", "yoga-poses-for-blood-sugar"],
  },
  {
    slug: "can-yoga-replace-diabetes-medication",
    parentSlug: "diabetes-blood-sugar",
    question: "Can yoga replace diabetes medication?",
    shortAnswer:
      "No. The diabetes studies discussed here evaluate yoga as a complementary part of care while standard treatment continues. Improvements in HbA1c or glucose do not mean medication should be stopped or changed without clinical review.",
    detail: [
      {
        title: "Yoga is studied alongside diabetes care",
        content: [
          "The trials reporting improvements in HbA1c and fasting glucose generally added yoga to standard diabetes management. They therefore support yoga as an additional lifestyle measure, not as a replacement for prescribed treatment.",
        ],
      },
      {
        title: "If your numbers improve",
        content: [
          "Bring improved readings and HbA1c results to your treating clinician. Medication decisions depend on your overall pattern of results and risk, so any change to treatment should be made as part of that review rather than by stopping medicine on your own.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-prevent-prediabetes-progressing"],
  },
  {
    slug: "yoga-poses-for-blood-sugar",
    parentSlug: "diabetes-blood-sugar",
    question: "Which yoga practices help with blood sugar control?",
    shortAnswer:
      "The studies showing changes in blood sugar generally used structured programmes combining postures, breathing and relaxation rather than testing one pose alone. Consistent practice over weeks is therefore a more evidence-aligned focus than choosing a single asana for blood sugar control.",
    detail: [
      {
        title: "What the studied programmes include",
        content: [
          "The clinical protocols behind the reported HbA1c and glucose findings commonly combine physical postures with pranayama and relaxation. Some protocols include twists and forward-folding movements, but the research does not establish one individual pose as the active ingredient.",
        ],
      },
      {
        title: "Why the whole programme matters",
        content: [
          "The trials generally run for several weeks rather than measuring an immediate response to one session. If you are using yoga as part of diabetes care, focus on a sustainable routine and continue the blood-sugar monitoring recommended by your clinician.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-prevent-prediabetes-progressing"],
  },
];
