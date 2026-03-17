"use client";

import { useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Building2, Maximize2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { ShineBorder } from "@/components/ui/shine-border";

const MODAL_SHINE_COLORS = ["#E9D5FF", "#FFEDD5", "#DBEAFE"];

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  const isOpen = project != null;
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  const titleId = useMemo(() => (project ? `project-title-${project.id}` : ""), [project]);

  useEffect(() => {
    if (!isOpen) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus?.();
      restoreFocusTo.current = null;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close project"
            className="absolute inset-0 h-full w-full bg-black/10 backdrop-blur-sm"
            onClick={onClose}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div
            className="absolute inset-0 flex min-h-full items-center justify-center overflow-y-auto p-1 sm:p-2"
            onClick={onClose}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="relative flex w-full max-w-[min(98vw,72rem)] max-h-[98vh] flex-col overflow-hidden rounded-[30px] min-h-0"
              initial={reduceMotion ? false : { y: 16, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { y: 12, scale: 0.99, opacity: 0 }}
              transition={
                reduceMotion ? { duration: 0.12 } : { type: "spring", stiffness: 260, damping: 26 }
              }
              onClick={(e) => e.stopPropagation()}
            >
              <ShineBorder
                borderRadius={30}
                borderWidth={2}
                duration={14}
                color={MODAL_SHINE_COLORS}
                className="flex h-full min-h-0 w-full flex-col overflow-y-auto overflow-x-hidden rounded-[30px] bg-white p-0 shadow-lg"
              >
                {/* Header: company logo, company name below — left aligned (no divider below) */}
                <div className="flex flex-shrink-0 w-full items-start justify-between gap-4 px-6 pt-5 pb-2 sm:px-8 sm:pt-6 sm:pb-3">
                  <div className="flex min-w-0 flex-col items-start gap-2 text-left">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt=""
                        className="h-20 w-20 shrink-0 rounded-lg object-contain object-center sm:h-24 sm:w-24"
                      />
                    ) : (
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 sm:h-24 sm:w-24">
                        <Building2 className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                    )}
                    <h2
                      id={titleId}
                      className="text-left text-2xl font-semibold text-gray-900 tracking-brand sm:text-3xl"
                    >
                      {project.company}
                    </h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/10 sm:h-10 sm:w-10"
                      aria-label="Expand"
                    >
                      <Maximize2 size={18} />
                    </button>
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={onClose}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/70 bg-white/70 text-gray-700 shadow-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/10 sm:h-10 sm:w-10"
                      aria-label="Close"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Role, timeline, team — full-width 3-column grid, all content left-aligned */}
                <div className="grid w-full grid-cols-1 gap-4 border-b border-gray-200/70 px-6 pt-2 pb-4 sm:px-8 lg:grid-cols-3 lg:gap-6 lg:pt-2.5 lg:pb-5">
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Role</p>
                    <p className="mt-1 text-base text-gray-900">{project.role}</p>
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Timeline</p>
                    <p className="mt-1 text-base text-gray-900">{project.timeline}</p>
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Team</p>
                    <div className="mt-1 space-y-1">
                      {project.teamSize.split(/\n/).map((s, i) => (
                        <p key={i} className="text-base text-gray-900">
                          {s.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Problem, Solution, Impact — three columns aligned with Role/Timeline/Team */}
                <div className="px-6 py-4 sm:px-8 lg:py-5">
                  <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
                    <section className="min-w-0 text-left">
                      <h3 className="text-base font-semibold text-gray-900 tracking-brand">
                        The Problem
                      </h3>
                      <p className="mt-2 text-base text-gray-600 leading-relaxed">{project.problem}</p>
                    </section>
                    <section className="min-w-0 text-left">
                      <h3 className="text-base font-semibold text-gray-900 tracking-brand">
                        The Solution
                      </h3>
                      <div className="mt-2 space-y-3">
                        {project.solution.split(/\n\n+/).map((para, i) => (
                          <p key={i} className="text-base text-gray-600 leading-relaxed">
                            {para.trim()}
                          </p>
                        ))}
                      </div>
                    </section>
                    <section className="min-w-0 text-left">
                      <h3 className="text-base font-semibold text-gray-900 tracking-brand">
                        The Impact
                      </h3>
                      <div className="mt-2 space-y-2">
                        {project.impact.split(/\n/).map((line, i) => (
                          <p key={i} className="text-base text-gray-600 leading-relaxed">
                            {line.trim()}
                          </p>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </ShineBorder>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

