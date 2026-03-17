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
              className="relative flex w-full max-w-[min(98vw,72rem)] max-h-[98vh] flex-col overflow-hidden rounded-[30px] min-h-0 cursor-pointer"
              initial={reduceMotion ? false : { y: 16, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { y: 12, scale: 0.99, opacity: 0 }}
              transition={
                reduceMotion ? { duration: 0.12 } : { type: "spring", stiffness: 260, damping: 26 }
              }
            >
              <ShineBorder
                borderRadius={30}
                borderWidth={2}
                duration={14}
                color={MODAL_SHINE_COLORS}
                className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[30px] bg-white p-0 shadow-lg"
              >
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden">
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

                {/* Problem, What I Owned, Impact — three columns aligned with Role/Timeline/Team */}
                <div className="px-6 py-4 sm:px-8 lg:py-5">
                  <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
                    <section className="min-w-0 text-left">
                      {project.id !== "caisa-fashion" && (
                        <h3 className="text-base font-semibold text-gray-900 tracking-brand">
                          The Problem
                        </h3>
                      )}
                      <p className={`text-base text-gray-600 leading-relaxed ${project.id !== "caisa-fashion" ? "mt-2" : ""}`}>
                        {project.problem}
                      </p>
                    </section>
                    <section className="min-w-0 text-left">
                      <h3 className="text-base font-semibold text-gray-900 tracking-brand">
                        What I owned
                      </h3>
                      <ul className="mt-2 space-y-2 text-base text-gray-600 leading-relaxed list-disc list-inside">
                        {project.id === "storyteller" && (
                          <>
                            <li>
                              Led end-to-end delivery of vertical video, ads, and AI-powered personalization features for multiple sports clients, translating client goals and requirements into launch roadmaps and feature launch plans.
                            </li>
                            <li>
                              Launched new AI-powered translation features for better fan content discovery and improved content accessibility.
                            </li>
                            <li>
                              Collaborated with design and engineering to build evergreen and customized UI kits and content strategies tailored to each client&apos;s brand and fan experience.
                            </li>
                            <li>
                              Directed user acceptance testing and launch readiness reviews to make sure new features felt reliable, on-brand, and ready for high-traffic moments.
                            </li>
                            <li>
                              New and updated SOPs, streamlined project documentions with AI, redesigned QA workflows and checklists to increase team velocity and reduce launch risk.
                            </li>
                          </>
                        )}
                        {project.id === "united-way" && (
                          <>
                            <li>
                              Defined the product vision and 3-phase roadmap for digital donations and donor personalization.
                            </li>
                            <li>
                              I proposed a fundraiser discovery feature, based on intent from their search and donation history data analysis - so that users can discover fundraisers that align with their interests and values.
                            </li>
                            <li>
                              Redesigned the business website for a mobile-first experience - with a personalized donor portal, a chatbot agent for a more strealined and intuitive digital experience. 
                            </li>
                            <li>
                              Conducted user research, data analysis, and competitive review to shape the portal, chatbot, and data platform.
                            </li>
                          </>
                        )}
                        {project.id === "cibc" && (
                          <>
                            <li>
                              Designed the CIBC AI Center MVP, connecting governance, use cases, and client-facing storytelling.
                            </li>
                            <li>
                              Researched on business and client needs, industry best practices, to shape website requirements.
                            </li>
                            <li>
                              I collaborated with my team to present the strategic report highlighting use cases, implementation roadmap and video product demo that secured leadership buy-in.
                            </li>
                          </>
                        )}
                        {project.id === "sickkids" && (
                          <>
                            <li>
                              Researched 3D modelling and VR use cases in complex surgery and mapped them to SickKids&apos; Precision Health goals.
                            </li>
                            <li>
                              Framed benefits and risks for clinicians and leadership, focusing on safety and efficiency.
                            </li>
                            <li>
                              Defined a change-management approach for piloting and scaling the solution.
                            </li>
                          </>
                        )}
                        {project.id === "adobe-ivey" && (
                          <>
                            <li>
                              Co-created a 6-month roadmap using Adobe Digital Experience products to drive card acquisitions.
                            </li>
                            <li>
                              Connected proposed experiences to cardmember LTV and acquisition metrics.
                            </li>
                            <li>
                              Co-led the pitch to industry judges, synthesizing complex ideas into a clear story.
                            </li>
                          </>
                        )}
                        {project.id === "caisa-fashion" && (
                          <>
                            <li>
                              Directed the overall creative vision for Canada&apos;s largest student-run charity fashion show.
                            </li>
                            <li>
                              Coordinated a 120-person team across production, marketing, and operations.
                            </li>
                            <li>
                              Led the pivot to virtual shows during COVID, including producing a 50-minute documentary.
                            </li>
                          </>
                        )}
                      </ul>
                    </section>
                    <section className="min-w-0 text-left">
                      <h3 className="text-base font-semibold text-gray-900 tracking-brand">
                        The Impact
                      </h3>
                      <ul className="mt-2 space-y-2 text-base text-gray-600 leading-relaxed list-disc list-inside">
                        {project.impact.split(/\n/).map((line, i) => (
                          <li key={i}>
                            {line.trim()}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
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

