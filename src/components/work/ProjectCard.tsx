"use client";

import type { Project } from "@/data/projects";
import { ShineBorder } from "@/components/ui/shine-border";
import { StorytellerGrid } from "@/components/work/StorytellerGrid";

/** Pastel shine colors per PRD (lavender, soft orange, baby blue) */
const CARD_SHINE_COLORS = ["#E9D5FF", "#FFEDD5", "#DBEAFE"];

/** iPhone 16 portrait aspect ratio (9:19.5) */
const IPHONE_16_ASPECT = 9 / 19.5;

type Props = {
  project: Project;
  onOpen: () => void;
};

/** Project ID that uses the 5-image staggered Storyteller grid on the card. */
const STORYTELLER_GRID_ID = "storyteller" as const;

/** Project IDs that use the three-images layout on the grid card. */
const THREE_IMAGES_LAYOUT_IDS = [] as const;

/** Right-aligned card labels (project id → pipe-separated list). */
const CARD_LABELS: Partial<Record<string, string>> = {
  storyteller: "Product Delivery | Feature Launch | AI",
  "united-way": "Personalizations | Platforms",
  sickkids: "Consulting| Growth | Strategy | ",
  cibc: "Consulting | Banking | Governance",
  "caisa-fashion": "Design | Fashion",
  "adobe-ivey": "Banking",
};

export function ProjectCard({ project, onOpen }: Props) {
  const imageMedia =
    project.media?.filter((m) => m.type === "image") ?? [];
  const isStorytellerGrid =
    project.id === STORYTELLER_GRID_ID &&
    imageMedia.length >= 5;
  const showThreeImagesLayout =
    imageMedia.length > 0 &&
    !isStorytellerGrid &&
    THREE_IMAGES_LAYOUT_IDS.includes(project.id as (typeof THREE_IMAGES_LAYOUT_IDS)[number]);
  const cardImages = project.cardImage
    ? Array.isArray(project.cardImage)
      ? project.cardImage
      : [project.cardImage]
    : [];
  const showCardImage = cardImages.length > 0 && !isStorytellerGrid;

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
        <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700 shadow-sm">
          Case Study +
        </div>
        {/* Storyteller: 5 phones side-by-side, up-down staggered, Figma shadow */}
        {isStorytellerGrid && (
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-6 pt-6 pb-7">
            <div className="flex h-full min-h-0 items-end justify-center">
              <StorytellerGrid
                imageUrls={[
                  imageMedia[0].url,
                  imageMedia[1].url,
                  imageMedia[2].url,
                  imageMedia[3].url,
                  imageMedia[4].url,
                ]}
              />
            </div>
          </div>
        )}

        {/* Card-only image(s): single full-size, side-by-side, or stagger-overlap; not used in demo. */}
        {showCardImage && (
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden p-4">
            <div
              className={`relative h-full min-h-0 w-full overflow-hidden rounded-lg flex bg-white ${
                project.cardImageLayout === "stagger-overlap" && cardImages.length === 2
                  ? ""
                  : cardImages.length > 1
                    ? "gap-2"
                    : ""
              }`}
            >
              {project.cardImageLayout === "stagger-overlap" && cardImages.length >= 2 ? (
                <>
                  {/* Back (left, vertically centered) — corporate responsibility & ethics */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[52%] h-[52%] z-0 rounded-lg overflow-hidden shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cardImages[0]}
                      alt=""
                      className="h-full w-full object-cover object-top"
                      aria-hidden
                    />
                  </div>
                  {/* Middle (top-right) — only when 3 images */}
                  {cardImages.length >= 3 && (
                    <div className="absolute right-2 top-3 w-[52%] h-[52%] z-10 rounded-lg overflow-hidden shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cardImages[1]}
                        alt=""
                        className="h-full w-full object-cover object-center"
                        aria-hidden
                      />
                    </div>
                  )}
                  {/* Front: 2 images = top-right; 3 images = bottom-right */}
                  <div
                    className={`absolute w-[52%] h-[52%] z-20 rounded-lg overflow-hidden shadow-lg ${
                      cardImages.length >= 3 ? "right-3 bottom-0" : "right-0 top-3"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cardImages[cardImages.length >= 3 ? 2 : 1]}
                      alt=""
                      className="h-full w-full object-cover object-top"
                      aria-hidden
                    />
                  </div>
                </>
              ) : project.id === "adobe-ivey" && cardImages.length >= 2 ? (
                <>
                  {/* Adobe: Conference Overview (left) — unchanged */}
                  <div className="min-w-0 flex-1 flex items-center justify-start shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cardImages[0]}
                      alt=""
                      className="h-full w-full max-h-full object-contain object-left"
                      aria-hidden
                    />
                  </div>
                  {/* Adobe: filler pattern (middle) — fills spacing, no overlap */}
                  {cardImages.length >= 3 && (
                    <div className="min-w-0 w-50 flex-shrink-0 flex items-stretch overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cardImages[1]}
                        alt=""
                        className="h-full w-full object-cover object-center"
                        aria-hidden
                      />
                    </div>
                  )}
                  {/* Adobe: Adobe Solutions (right) — unchanged */}
                  <div className="min-w-0 flex-1 flex items-center justify-end shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cardImages[cardImages.length >= 3 ? 2 : 1]}
                      alt=""
                      className="h-full w-full max-h-full object-contain object-right"
                      aria-hidden
                    />
                  </div>
                </>
              ) : (
                cardImages.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className={`${cardImages.length > 1 ? "min-w-0 flex-1" : "h-full w-full"} ${project.id === "adobe-ivey" && cardImages.length === 1 ? "flex items-center justify-center" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      className={
                        project.id === "adobe-ivey" && cardImages.length === 1
                          ? "h-full w-full max-h-full max-w-full object-contain object-center"
                          : "h-full w-full object-cover object-top"
                      }
                      aria-hidden
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Image area: three-images layout for united-way etc. */}
        {showThreeImagesLayout && (
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

        {/* Spacer: when no image layout, pushes company/tagline to bottom of card */}
        {!isStorytellerGrid && !showThreeImagesLayout && !showCardImage && (
          <div className="min-h-0 flex-1" aria-hidden />
        )}

        {/* Company + tagline + impact teaser: same px-6 so image and text align left/right; always at bottom */}
        <div
          className={`mt-auto min-w-0 flex-shrink-0 px-6 pb-6 ${isStorytellerGrid || showThreeImagesLayout || showCardImage ? "pt-1" : "pt-6"}`}
        >
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-baseline justify-start sm:justify-between gap-y-1 gap-x-3">
            <h3 className="text-xl font-bold text-gray-900 tracking-brand">
              {project.company}
            </h3>
            {CARD_LABELS[project.id] && (
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500 text-left sm:text-right">
                {CARD_LABELS[project.id]}
              </span>
            )}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-gray-500">
            {project.tagline ?? project.role}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {project.id === "storyteller" &&
              "Impact: 700% lift in high-impact engagement · 50% faster launches"}
            {project.id === "united-way" &&
              "Impact: +20% projected donations · 91% projected retention"}
            {project.id === "cibc" &&
              "Impact: +7 places in AI maturity benchmark"}
            {project.id === "sickkids" &&
              "Impact: 54% fewer errors · 230% more efficiency (projected)"}
            {project.id === "adobe-ivey" &&
              "Impact: Strategy linking digital experience to cardmember LTV and acquisition"}
            {project.id === "caisa-fashion" &&
              "Impact: $60K raised for charity · 1000+ attendees / year"}
          </p>
        </div>
      </button>
    </ShineBorder>
  );
}

