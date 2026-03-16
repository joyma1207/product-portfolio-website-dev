"use client";

import { projects } from "@/data/projects";
import { WorkGrid } from "@/components/work/WorkGrid";

type Props = {
  onOpenProject: (id: string) => void;
};

export function WorkSection({ onOpenProject }: Props) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-12 pt-[var(--hero-title-tagline-gap)]">
      <WorkGrid projects={projects} onOpenProject={onOpenProject} />
    </section>
  );
}

