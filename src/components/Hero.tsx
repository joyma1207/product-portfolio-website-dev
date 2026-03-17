"use client";

import { site } from "@/data/site";
import { Typewriter } from "@/components/ui/typewriter";

type HeroProps = {
  /** When "onGradient", hero has transparent bg so gradient shows (e.g. About view). */
  variant?: "default" | "onGradient";
};

const HERO_TYPEWRITER_WORDS = [
  "you",
  "consulting",
  "tech",
  "sports & entertainment",
  "non profit",
  "healthcare",
  "and more",
];

/**
 * PRD: Hero with Joy's name + brief description.
 */
export function Hero({ variant = "default" }: HeroProps) {
  return (
    <header
      className={
        variant === "onGradient"
          ? "w-full bg-transparent"
          : "w-full bg-background/95 backdrop-blur-sm"
      }
    >
      <div
        className="mx-auto pt-16 pb-4 md:pt-20 md:pb-6 lg:pt-28 lg:pb-6"
        style={{
          maxWidth: "var(--content-max-width)",
          paddingLeft: "var(--content-padding-x)",
          paddingRight: "var(--content-padding-x)",
        }}
      >
        <h1 className="text-4xl font-semibold tracking-brand text-gray-900 md:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-[var(--hero-title-tagline-gap)] text-gray-600 text-lg md:text-xl w-full max-w-full">
          Launching consumer products and features that grow engagement, loyalty, and love for {" "}
          <span className="inline-block whitespace-nowrap">
            <Typewriter
              text={HERO_TYPEWRITER_WORDS}
              speed={70}
              waitTime={1500}
              deleteSpeed={20}
              className="text-[#2563EB] font-medium"
              cursorChar="|"
            />
          </span>
          .
        </p>
        <p className="mt-2 text-gray-500 text-base md:text-lg w-full max-w-full">
          With creative solutions and user-first thinking, I&apos;ve helped businesses lift content engagement by 700% and ship features 50% faster.
        </p>
      </div>
    </header>
  );
}
