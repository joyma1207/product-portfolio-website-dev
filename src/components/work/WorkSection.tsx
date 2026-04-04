"use client";

import { projects } from "@/data/projects";
import { workedWithChipLabel } from "@/lib/workedWithChip";
import { WorkGrid } from "@/components/work/WorkGrid";

type Props = {
  onOpenProject: (id: string) => void;
};

export function WorkSection({ onOpenProject }: Props) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-12 pt-[var(--hero-title-tagline-gap)]">
      <div className="flex flex-col gap-4 pb-6">
        <h2 className="text-lg font-semibold tracking-brand text-gray-900">
          Product Case Studies
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl md:whitespace-nowrap">
          Where I've had proven experience in product thinking, cross-functional delivery, and shipped impactful outcomes.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
          <span className="font-medium uppercase tracking-wide">
            Worked with
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {projects.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onOpenProject(p.id)}
                className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200 transition-colors"
              >
                {workedWithChipLabel(p)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <WorkGrid projects={projects} onOpenProject={onOpenProject} />
    </section>
  );
}

