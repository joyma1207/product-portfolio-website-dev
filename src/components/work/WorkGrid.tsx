"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ShineBorder } from "@/components/ui/shine-border";

const GRID_SIZE = 6; // 6 project cards
const EMPTY_SHINE_COLOR = "#E5E5E5";

type Props = {
  projects: ReadonlyArray<Project>;
  onOpenProject: (projectId: string) => void;
};

export function WorkGrid({ projects, onOpenProject }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
      {Array.from({ length: GRID_SIZE }, (_, i) => {
        const project = projects[i];
        if (project) {
          return (
            <motion.div
              key={project.id}
              initial={false}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={
                reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }
              }
            >
              <ProjectCard project={project} onOpen={() => onOpenProject(project.id)} />
            </motion.div>
          );
        }
        return (
          <ShineBorder
            key={`empty-${i}`}
            borderRadius={30}
            borderWidth={2}
            duration={14}
            color={EMPTY_SHINE_COLOR}
            className="aspect-[4/3] min-w-0 w-full overflow-hidden rounded-[30px] bg-background p-0 shadow-sm"
          >
            <div className="min-h-0 rounded-[30px]" aria-hidden />
          </ShineBorder>
        );
      })}
    </div>
  );
}

