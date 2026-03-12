"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { WorkGrid } from "@/components/work/WorkGrid";
import { ProjectModal } from "@/components/work/ProjectModal";

export function WorkSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 pb-12 pt-[var(--hero-title-tagline-gap)]">
      <WorkGrid projects={projects} onOpenProject={setActiveProjectId} />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProjectId(null)}
      />
    </section>
  );
}

