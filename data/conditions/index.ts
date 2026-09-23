// data/conditions/index.ts
//
// Central access point. page.tsx files should import ONLY from here,
// never reach into individual condition files directly — keeps the
// data source swappable (e.g. to a CMS later) without touching routes.

import type { Condition, ConditionSubpage } from "./types";

import { weightManagement } from "./weight-management";
import { diabetesBloodSugar } from "./diabetes-blood-sugar";
import { highBloodPressure } from "./high-blood-pressure";
import { arthritisJointPain } from "./arthritis-joint-pain";
import { migraineHeadache } from "./migraine-headache";
import { digestiveGutHealth } from "./digestive-gut-health";
import { womensHealth } from "./womens-health";

import { highBloodPressureSubpages } from "./subpages/high-blood-pressure";
import { arthritisJointPainSubpages } from "./subpages/arthritis-joint-pain";
/*
  NOT YET RENAMED: this still imports from "./subpages/metabolic-health"
  because that file hasn't been provided. That file's contents almost
  certainly still reference the OLD slug "metabolic-health" internally
  (breadcrumbs, canonical URLs, parentSlug fields) — those question pages
  will be broken now that the parent slug here is "diabetes-blood-sugar".
  Rename this import (and the file itself, and everything inside it,
  replacing "metabolic-health" with "diabetes-blood-sugar") once that
  file is available.
*/
import { metabolicHealthSubpages } from "./subpages/metabolic-health";
import { migraineHeadacheSubpages } from "./subpages/migraine-headache";
import { digestiveGutHealthSubpages } from "./subpages/digestive-gut-health";
// weight-management and womens-health remain unresearched — see the
// TODO comments in their respective data files. Add their subpage
// imports here once the same capture-and-triage process is run on them.

export const conditions: Condition[] = [
  weightManagement,
  diabetesBloodSugar,
  highBloodPressure,
  arthritisJointPain,
  migraineHeadache,
  digestiveGutHealth,
  womensHealth,
];

// Map of parent condition slug -> its subpages.
// Conditions with no researched subpages yet simply have an empty array —
// this is intentional. Do not populate this with placeholder/guessed
// content; only add entries once the capture-and-triage process (see the
// pilot brief) has actually been run for that condition.
const subpagesByCondition: Record<string, ConditionSubpage[]> = {
 "high-blood-pressure": highBloodPressureSubpages,
  "arthritis-joint-pain": arthritisJointPainSubpages,
  "diabetes-blood-sugar": metabolicHealthSubpages,
  "migraine-headache": migraineHeadacheSubpages,
  "digestive-gut-health": digestiveGutHealthSubpages,
  // Not yet researched — intentionally empty, not placeholder content.
  "weight-management": [],
  "womens-health": [],
};

export function getAllConditions(): Condition[] {
  return conditions;
}

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((condition) => condition.slug === slug);
}

export function getSubpages(parentSlug: string): ConditionSubpage[] {
  return subpagesByCondition[parentSlug] ?? [];
}

export function getSubpage(
  parentSlug: string,
  subslug: string,
): ConditionSubpage | undefined {
  return getSubpages(parentSlug).find((sub) => sub.slug === subslug);
}

// Used by generateStaticParams in the [slug]/[subslug]/page.tsx route —
// flattens every condition+subpage pair the site needs to pre-render.
export function getAllSubpageParams(): { slug: string; subslug: string }[] {
  return conditions.flatMap((condition) =>
    getSubpages(condition.slug).map((sub) => ({
      slug: condition.slug,
      subslug: sub.slug,
    })),
  );
}