"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
type Props = {
  projects: ReadonlyArray<Project>;
  onOpenProject: (projectId: string) => void;
};

/**
 * One card per project — order and count always match `projects` (no separate GRID_SIZE constant).
 */
export function WorkGrid({ projects, onOpenProject }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          role="button"
          tabIndex={0}
          aria-label={`Open ${project.company} case study`}
          onClick={() => onOpenProject(project.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenProject(project.id);
            }
          }}
          className="cursor-pointer rounded-[30px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20"
        >
          <motion.div
            initial={false}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={
              reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }
            }
          >
            <ProjectCard project={project} />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

