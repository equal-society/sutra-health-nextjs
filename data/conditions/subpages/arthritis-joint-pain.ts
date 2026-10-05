// data/conditions/subpages/arthritis-joint-pain.ts
import type { ConditionSubpage } from "../types";

export const arthritisJointPainSubpages: ConditionSubpage[] = [
  {
    slug: "yoga-poses-for-arthritis",
    parentSlug: "arthritis-joint-pain",
    question: "Which yoga poses help arthritis and joint pain?",
    shortAnswer:
      "For arthritis, yoga is generally adapted around the affected joint rather than following a fixed pose list. Supported standing work, gentle seated movement and props-assisted variations can help keep movement comfortable while building or maintaining strength and flexibility.",
    detail: [
      {
        title: "What a joint-friendly practice looks like",
        content: [
          "Chair support, blocks, straps and bolsters can reduce the load on a painful joint and make a movement easier to control. The appropriate range depends on which joint is affected, how symptoms behave and whether there is an active flare.",
          "Gentle, slower practices may be more suitable than demanding sequences. The goal is to work within a manageable range rather than force a joint deeper simply to reach a particular shape.",
        ],
      },
      {
        title: "Let the affected joint guide the modification",
        content: [
          "A pose that feels comfortable for one person may aggravate another person's knee, hip, wrist or shoulder. If a movement increases joint pain or symptoms persist after practice, reduce the range, add support or stop and seek appropriate clinical advice.",
        ],
      },
    ],
    relatedSubslugs: [
      "yoga-poses-to-avoid-with-arthritis",
      "yoga-for-osteoarthritis-vs-rheumatoid-arthritis",
    ],
  },
  {
    slug: "yoga-poses-to-avoid-with-arthritis",
    parentSlug: "arthritis-joint-pain",
    question: "Which yoga poses should be avoided with arthritis?",
    shortAnswer:
      "There is no universal arthritis avoid-list because the safest practice depends on the joint involved and the type of arthritis. Deep joint flexion, heavy weight-bearing and demanding balances may need modification when they increase symptoms.",
    detail: [
      {
        title: "Movements that may need modification",
        content: [
          "Deep squats, full weight-bearing through a painful wrist, demanding balances and advanced poses such as Crane, Bow, Plow or Full Lotus can place substantial demands on joints. They are not automatically unsafe for every person, but they may be inappropriate when they reproduce or worsen symptoms.",
          "Fast or very intense styles can also make it harder to control range and load. A slower class with accessible modifications can make it easier to adjust the practice to the affected joint.",
        ],
      },
      {
        title: "Pain is the useful signal",
        content: [
          "Do not use a pose list as a reason to push through joint pain. Modify or stop a movement that increases symptoms, particularly during an active flare, and discuss persistent or significant symptoms with your clinician.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-arthritis"],
  },
  {
    slug: "yoga-for-osteoarthritis-vs-rheumatoid-arthritis",
    parentSlug: "arthritis-joint-pain",
    question: "Does yoga work differently for osteoarthritis versus rheumatoid arthritis?",
    shortAnswer:
      "Yes. Osteoarthritis and rheumatoid arthritis have different underlying processes, so the purpose and limits of a yoga programme are not identical. Research has reported functional benefits in rheumatoid arthritis and pain or function benefits in osteoarthritis, but yoga should not be presented as treating the underlying disease process in either condition.",
    detail: [
      {
        title: "The conditions are not interchangeable",
        content: [
          "Osteoarthritis is primarily associated with changes in joints and their surrounding structures, while rheumatoid arthritis is an inflammatory autoimmune condition. That difference affects how symptoms, flares and exercise tolerance are managed.",
          "For osteoarthritis, a programme may emphasise comfortable movement and strengthening around the affected joint. With rheumatoid arthritis, activity often needs closer adjustment around inflammation, fatigue and periods of increased symptoms.",
        ],
      },
      {
        title: "Set expectations around function",
        content: [
          "Yoga may be one part of a broader plan for mobility, function and quality of life. It should sit alongside appropriate medical management, particularly for rheumatoid arthritis, rather than being framed as a treatment for inflammation itself.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-arthritis", "yoga-poses-to-avoid-with-arthritis"],
  },
];
