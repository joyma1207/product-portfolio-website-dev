"use client";

import {
  Rocket,
  FileText,
  Code2,
  PenTool,
  TestTube,
  Send,
  type LucideIcon,
} from "lucide-react";

const STEP_ICONS: LucideIcon[] = [
  Rocket,
  FileText,
  Code2,
  PenTool,
  TestTube,
  Send,
];

export type ProcessStep = { title: string; description: string };

interface ProcessDiagramProps {
  steps: readonly ProcessStep[];
}

/**
 * Circular process diagram: 6 steps around a center label "My Process".
 * On small screens, steps stack vertically for readability.
 */
export function ProcessDiagram({ steps }: ProcessDiagramProps) {
  const radius = 155;
  const center = 175;
  const positions = steps.map((_, i) => {
    const angle = (i * 360) / steps.length - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
      angle,
    };
  });

  return (
    <div className="flex flex-col items-center gap-8 md:gap-12">
      {/* Desktop: circular layout */}
      <div className="relative hidden w-full max-w-[24rem] md:block">
        <svg
          viewBox="0 0 350 350"
          className="mx-auto h-auto w-full"
          aria-hidden
        >
          {/* Connector lines from center to each step */}
          {positions.map((pos, i) => (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={pos.x}
              y2={pos.y}
              stroke="var(--muted)"
              strokeWidth="1"
              strokeDasharray="4 2"
              opacity={0.6}
            />
          ))}
        </svg>

        {/* Center label */}
        <div
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gray-300 bg-background text-center"
          style={{ borderColor: "var(--accent-lavender)" }}
        >
          <span className="text-xs font-semibold tracking-brand text-gray-700 px-2">
            My Process
          </span>
        </div>

        {/* Step nodes */}
        {steps.map((step, i) => {
          const pos = positions[i];
          const Icon = STEP_ICONS[i % STEP_ICONS.length];
          return (
            <div
              key={i}
              className="absolute flex w-36 flex-col items-center rounded-lg border border-gray-200/70 bg-white p-3 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-[var(--accent-lavender)] focus-within:ring-offset-2"
              style={{
                left: `${(pos.x / (center * 2)) * 100}%`,
                top: `${(pos.y / (center * 2)) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              tabIndex={0}
            >
              <div
                className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-md text-teal-600"
                style={{ backgroundColor: "var(--accent-lavender)" }}
                aria-hidden
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <span className="text-center text-sm font-semibold text-gray-900">
                {step.title}
              </span>
              {step.description && (
                <span className="mt-0.5 text-center text-xs text-gray-600">
                  {step.description}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical list */}
      <ul className="flex w-full max-w-md flex-col gap-4 md:hidden" aria-label="My process steps">
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[i % STEP_ICONS.length];
          return (
            <li
              key={i}
              className="flex items-start gap-4 rounded-lg border border-gray-200/70 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-[var(--accent-lavender)] focus-within:ring-offset-2"
              tabIndex={0}
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-teal-600"
                style={{ backgroundColor: "var(--accent-lavender)" }}
                aria-hidden
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-semibold text-gray-900">{step.title}</span>
                {step.description && (
                  <p className="mt-0.5 text-sm text-gray-600">{step.description}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
