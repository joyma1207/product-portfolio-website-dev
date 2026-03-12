"use client";

import type { Project } from "@/data/projects";
import { ShineBorder } from "@/components/ui/shine-border";

/** Pastel shine colors per PRD (lavender, soft orange, baby blue) */
const CARD_SHINE_COLORS = ["#E9D5FF", "#FFEDD5", "#DBEAFE"];

/** iPhone 16 portrait aspect ratio (9:19.5) */
const IPHONE_16_ASPECT = 9 / 19.5;

type Props = {
  project: Project;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: Props) {
  const imageMedia =
    project.media?.filter((m) => m.type === "image") ?? [];

  return (
    <ShineBorder
      borderRadius={30}
      borderWidth={2}
      duration={14}
      color={CARD_SHINE_COLORS}
      className="min-w-0 w-full overflow-hidden rounded-[30px] bg-white p-0 text-black shadow-sm aspect-[4/3]"
    >
      <button
        type="button"
        onClick={onOpen}
        className="group relative z-10 flex h-full w-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 rounded-[30px] min-h-0"
      >
        {/* Image area: height-based so aspect ratio is kept and text is never overlapped; same px-6 as text */}
        {imageMedia.length > 0 && (
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-6 pt-6 pb-2">
            <div className="flex h-full items-center justify-center gap-8">
              {imageMedia.slice(0, 3).map((m, i) => (
                <div
                  key={`${m.url}-${i}`}
                  className="h-full flex-shrink-0 overflow-hidden rounded-[0.5rem] bg-gray-100 shadow-inner"
                  style={{ aspectRatio: IPHONE_16_ASPECT, width: "auto" }}
                  aria-hidden
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.url}
                    alt=""
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Company + tagline: same px-6 so image and text align left/right; bottom-aligned when no images */}
        <div
          className={`min-w-0 px-6 pb-6 ${imageMedia.length > 0 ? "flex-shrink-0 pt-1" : "flex flex-1 flex-col justify-end pt-6"}`}
        >
          <h3 className="text-lg font-bold text-gray-900 tracking-brand">
            {project.company}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-gray-800">
            {project.tagline ?? project.role}
          </p>
        </div>
      </button>
    </ShineBorder>
  );
}

