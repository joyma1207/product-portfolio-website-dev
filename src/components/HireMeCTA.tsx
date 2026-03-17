"use client";

import * as React from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type HireMeCTAProps = {
  className?: string;
};

export function HireMeCTA({ className }: HireMeCTAProps) {
  return (
    <div
      className={cn(
        "fixed right-4 top-4 z-50",
        "flex items-center gap-2 rounded-full border border-gray-200/70 bg-white/90 p-1 shadow-sm backdrop-blur",
        className,
      )}
      style={{
        top: "calc(env(safe-area-inset-top, 0px) + 1rem)",
        right: "calc(env(safe-area-inset-right, 0px) + 1rem)",
      }}
    >
      <a
        href={site.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center rounded-full",
          "px-4 py-2 text-sm font-semibold",
          "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          "transition-colors",
        )}
        aria-label="Hire me — open resume"
      >
        Hire me
      </a>
      <a
        href={site.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center rounded-full",
          "px-3 py-2 text-sm font-medium",
          "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          "transition-colors",
        )}
        aria-label="Open LinkedIn profile"
      >
        LinkedIn
      </a>
    </div>
  );
}

