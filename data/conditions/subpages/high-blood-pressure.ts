// data/conditions/subpages/high-blood-pressure.ts
import type { ConditionSubpage } from "../types";

export const highBloodPressureSubpages: ConditionSubpage[] = [
  {
    slug: "can-yoga-replace-bp-medication",
    parentSlug: "high-blood-pressure",
    question: "Can yoga replace blood pressure medication?",
    shortAnswer:
      "No. The research on yoga and blood pressure treats yoga as an addition to standard care, not a replacement for prescribed medication. If your readings improve with regular practice or other lifestyle changes, use that information with your doctor when reviewing your treatment.",
    detail: [
      {
        title: "What the evidence is actually testing",
        content: [
          "Studies of yoga for blood pressure generally add a yoga programme to usual care. Reported reductions therefore do not show that yoga can take the place of medication prescribed for hypertension.",
          "The useful question is whether yoga can be part of a broader blood-pressure plan. The available research supports considering it as a complementary lifestyle measure rather than presenting it as a substitute treatment.",
        ],
      },
      {
        title: "If your readings are changing",
        content: [
          "Keep taking prescribed medicines unless your treating clinician tells you otherwise. Bring a record of your blood-pressure readings and any changes in your routine to the next review so treatment decisions can be based on your response over time.",
        ],
      },
    ],
    relatedSubslugs: [
      "yoga-poses-for-blood-pressure",
      "how-long-yoga-lowers-blood-pressure",
    ],
  },
  {
    slug: "yoga-poses-for-blood-pressure",
    parentSlug: "high-blood-pressure",
    question: "Which yoga poses help lower blood pressure?",
    shortAnswer:
      "Clinical yoga programmes for blood pressure commonly emphasise gentle movement, relaxation and controlled breathing. Examples include Shavasana, Balasana, Viparita Karani and seated practice with pranayama. The evidence is stronger for structured practice than for any single pose in isolation.",
    detail: [
      {
        title: "Examples used in yoga programmes",
        content: [
          "Shavasana provides a low-effort period of relaxation and slow breathing. Balasana is a gentle resting posture. Viparita Karani offers a supported, restorative position, while Sukhasana can provide a seated position for breathing practice.",
          "These examples should not be treated as a prescription for every person with hypertension. Starting position, symptoms, mobility and other health conditions can change what is appropriate.",
        ],
      },
      {
        title: "Think beyond a list of poses",
        content: [
          "The studies discussed on this site generally evaluate a programme rather than one asana. For that reason, consistency, comfortable breathing and an appropriate level of effort matter more than collecting a long list of poses.",
        ],
      },
    ],
    relatedSubslugs: [
      "yoga-poses-to-avoid-with-hypertension",
      "can-yoga-replace-bp-medication",
    ],
  },
  {
    slug: "yoga-poses-to-avoid-with-hypertension",
    parentSlug: "high-blood-pressure",
    question: "Which yoga poses should be avoided with high blood pressure?",
    shortAnswer:
      "People with high blood pressure are generally advised to be cautious with demanding inversions, intense backbends and breath-holding practices. A safer starting point is usually a gentle, supported practice rather than testing difficult postures without guidance.",
    detail: [
      {
        title: "Why intensity and inversions need care",
        content: [
          "Headstands, handstands and other demanding inversions can place substantially different demands on the body than a supported restorative posture. Intense backbends and breath-holding can also make a practice inappropriate for some people with cardiovascular concerns.",
          "The relevant question is not simply whether a pose appears on an avoid list. Your blood-pressure control, symptoms, experience level and other medical conditions all affect what should be included or modified.",
        ],
      },
      {
        title: "Choose a supported starting point",
        content: [
          "If you have hypertension and want to begin yoga, discuss the type and intensity of practice with your clinician and learn modifications from an appropriately trained instructor. Stop if a practice causes concerning symptoms rather than pushing through them.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-blood-pressure"],
  },
  {
    slug: "how-long-yoga-lowers-blood-pressure",
    parentSlug: "high-blood-pressure",
    question: "How long does it take for yoga to lower blood pressure?",
    shortAnswer:
      "There is no single timeline for everyone. Studies reporting measurable changes generally used regular practice over several weeks, with some reviews finding benefits associated with three or more sessions per week. Your own response should be judged from repeated blood-pressure readings rather than a fixed deadline.",
    detail: [
      {
        title: "What the study pattern suggests",
        content: [
          "The research reviewed for this topic includes programmes lasting roughly 8 to 12 weeks and, in some analyses, a frequency of at least three sessions per week. This describes how the research was conducted; it does not guarantee that an individual will see the same change on the same schedule.",
        ],
      },
      {
        title: "Track your own response",
        content: [
          "Blood pressure varies with medication, sleep, stress, food, activity and measurement conditions. Regular readings taken appropriately give you and your clinician a better basis for deciding whether your overall plan is helping than relying on how you feel after a few yoga sessions.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-replace-bp-medication"],
  },
];
