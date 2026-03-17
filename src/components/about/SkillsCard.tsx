"use client";

import { type LucideIcon } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";

/** Pastel shine colors to match work grid cards (lavender, soft orange, baby blue) */
const CARD_SHINE_COLORS = ["#E9D5FF", "#FFEDD5", "#DBEAFE"];

interface SkillsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Optional index to rotate shine color */
  colorIndex?: number;
}

/**
 * Skills & Capabilities card using the same visual style as the work grid
 * (ShineBorder, rounded corners, shadow). Aspect ratio tuned for 4 cards in one row.
 */
export function SkillsCard({
  icon: Icon,
  title,
  description,
  colorIndex = 0,
}: SkillsCardProps) {
  const color =
    CARD_SHINE_COLORS[colorIndex % CARD_SHINE_COLORS.length] ?? CARD_SHINE_COLORS[0];

  return (
    <ShineBorder
      borderRadius={30}
      borderWidth={2}
      duration={14}
      color={color}
      className="min-w-0 w-full overflow-visible rounded-[30px] bg-white p-0 text-black shadow-sm"
    >
      <div className="flex w-full flex-col p-5 text-left rounded-[30px]">
        <div
          className="mb-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-white"
          style={{ backgroundColor: "var(--accent-blue)" }}
          aria-hidden
        >
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h4 className="text-lg font-semibold tracking-brand text-gray-900 flex-shrink-0">
          {title}
        </h4>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed ">
          {description}
        </p>
      </div>
    </ShineBorder>
  );
}
