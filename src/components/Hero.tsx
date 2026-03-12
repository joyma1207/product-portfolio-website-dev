"use client";

import { site } from "@/data/site";

/**
 * PRD: Hero with Joy's name + brief description.
 * Scrolls away with the page (normal document flow).
 */
export function Hero() {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm">
      <div
        className="mx-auto pt-16 pb-8 md:pt-24 md:pb-10 lg:pt-32 lg:pb-12"
        style={{ maxWidth: "var(--content-max-width)", paddingLeft: "var(--content-padding-x)", paddingRight: "var(--content-padding-x)" }}
      >
        <h1 className="text-4xl font-semibold tracking-brand text-gray-900 md:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-[var(--hero-title-tagline-gap)] text-gray-600 text-base md:text-lg w-full max-w-full">
          {site.tagline}
        </p>
        <p className="mt-2 text-gray-500 text-sm md:text-base">
          sports & entertainment, consulting, healthcare, banking
        </p>
      </div>
    </header>
  );
}
