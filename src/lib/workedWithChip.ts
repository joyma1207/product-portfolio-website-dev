import type { Project } from "@/data/projects";

/** Shorter chip text where `company` is too long for the pill row. */
const CHIP_NAME_BY_ID: Partial<Record<string, string>> = {
  aritzia: "Aritzia Virtual Try-On",
  "adobe-ivey": "Adobe",
  sickkids: "SickKids",
};

/** Last 4-digit year in timeline (end of range for multi-year strings). */
function yearFromTimeline(timeline: string): string {
  const years = timeline.match(/\d{4}/g);
  return years?.length ? years[years.length - 1]! : "";
}

/** Label for the "Worked with" row — stays in sync with `projects` order. */
export function workedWithChipLabel(project: Project): string {
  const name = CHIP_NAME_BY_ID[project.id] ?? project.company;
  const y = yearFromTimeline(project.timeline);
  return y ? `${name} · ${y}` : name;
}
