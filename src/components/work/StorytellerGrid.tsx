"use client";

/** iPhone 16 portrait aspect ratio (9:19.5) */
const IPHONE_16_ASPECT = 9 / 19.5;

/**
 * Figma-matching shadow: soft, diffused dark grey, extending to bottom and
 * slightly right (light from top-left). Same on all 5 phones.
 */
const PHONE_SHADOW =
  "0 10px 28px -4px rgba(0, 0, 0, 0.18), 0 6px 14px -2px rgba(0, 0, 0, 0.1)";

/** Vertical stagger (px): 1=highest, 2=lower, 3=mid, 4=lowest, 5=mid-high. No overlaps. */
const STAGGER_PX = [0, 14, 6, 22, 10] as const;

type Props = {
  imageUrls: [string, string, string, string, string];
};

export function StorytellerGrid({ imageUrls }: Props) {
  return (
    <div
      className="flex h-full items-end justify-center gap-3 sm:gap-4 w-full"
      aria-hidden
    >
      {imageUrls.map((url, i) => (
        <div
          key={`${url}-${i}`}
          className="flex-shrink-0 overflow-hidden rounded-[0.5rem] bg-gray-100"
          style={{
            aspectRatio: `${IPHONE_16_ASPECT}`,
            width: "auto",
            height: "100%",
            transform: `translateY(${STAGGER_PX[i]}px)`,
            boxShadow: PHONE_SHADOW,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}
