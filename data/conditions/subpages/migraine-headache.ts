// data/conditions/subpages/migraine-headache.ts
import type { ConditionSubpage } from "../types";

export const migraineHeadacheSubpages: ConditionSubpage[] = [
  {
    slug: "can-yoga-replace-migraine-medication",
    parentSlug: "migraine-headache",
    question: "Can yoga replace migraine medication?",
    shortAnswer:
      "No. The trial described on this site studied yoga alongside standard medical therapy, not instead of it. If yoga changes your headache frequency, intensity or medication needs, that information can be reviewed with the clinician managing your migraine treatment.",
    detail: [
      {
        title: "What the trial actually compared",
        content: [
          "The CONTAIN trial followed 160 patients who continued standard medical therapy while adding a yoga programme. Medication use was one of the outcomes measured, alongside headache frequency, intensity and disability.",
          "The reported reduction in medication use therefore occurred within continued medical care. It should not be interpreted as evidence that people can safely replace prescribed migraine treatment with yoga on their own.",
        ],
      },
      {
        title: "Use improvement as information, not as a reason to self-adjust",
        content: [
          "If your headaches become less frequent or severe after adding yoga, keep track of that change and discuss it with your physician or neurologist. Any medication adjustment should follow a clinical review of the pattern over time.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-migraine-relief", "yoga-styles-to-avoid-with-migraine"],
  },
  {
    slug: "yoga-poses-for-migraine-relief",
    parentSlug: "migraine-headache",
    question: "Which yoga poses help relieve migraine?",
    shortAnswer:
      "Gentle, restorative positions that reduce physical tension may be more suitable for people with migraine than demanding sequences. Examples in the source material include Child's Pose, Legs-Up-the-Wall, Cat-Cow and Savasana, often paired with slow breathing.",
    detail: [
      {
        title: "Gentle options to consider",
        content: [
          "Child's Pose can provide a supported resting position, Legs-Up-the-Wall is a passive posture, Cat-Cow uses gentle spinal movement, and Savasana provides a period of rest. The right choice depends on whether movement feels comfortable at that point in a migraine episode.",
          "These poses should not be treated as a guaranteed way to stop an attack. Migraine triggers and responses vary considerably between people.",
        ],
      },
      {
        title: "Breathing can be part of the practice",
        content: [
          "The source material also describes slow breathing practices such as alternate-nostril breathing and three-part breathing. Keep the practice comfortable and avoid forcing the breath, especially if a technique feels unpleasant during an episode.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-styles-to-avoid-with-migraine", "can-yoga-replace-migraine-medication"],
  },
  {
    slug: "yoga-styles-to-avoid-with-migraine",
    parentSlug: "migraine-headache",
    question: "Which yoga styles should be avoided with migraine?",
    shortAnswer:
      "Heated classes, vigorous fast-paced practice and unfamiliar extreme postures may be poor choices for someone whose migraine is triggered by heat, dehydration or physical strain. A gentle, restorative format is a more cautious starting point.",
    detail: [
      {
        title: "Why class intensity can matter",
        content: [
          "Hot yoga, Bikram-style practice, Power Yoga and other vigorous formats combine factors that some people with migraine identify as triggers, including heat, dehydration and high physical demand. Individual triggers still vary, so there is no single style that must be avoided by everyone.",
        ],
      },
      {
        title: "A lower-demand alternative",
        content: [
          "Gentle Hatha, restorative yoga and yoga nidra are described in the source material as more suitable options for migraine. If you attend a class, tell the instructor about your migraine history and choose modifications that keep the practice comfortable.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-migraine-relief"],
  },
];
