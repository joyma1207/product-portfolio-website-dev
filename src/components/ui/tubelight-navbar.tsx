"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url?: string;
}

interface NavBarProps {
  items: ReadonlyArray<NavItem>;
  /** Controlled: active tab name (e.g. "Work" | "About") */
  activeTab?: string;
  /** Controlled: when provided, use buttons and this callback instead of Link navigation */
  onTabChange?: (name: string) => void;
  /** When true, navbar is in-flow (no fixed positioning). Use for left-aligned toggle under hero. */
  inline?: boolean;
  className?: string;
}

export function NavBar({
  items,
  activeTab: controlledActiveTab,
  onTabChange,
  inline = false,
  className,
}: NavBarProps) {
  const isControlled = controlledActiveTab != null && onTabChange != null;
  const activeTab = (isControlled ? controlledActiveTab : undefined) ?? items[0]?.name ?? "";

  return (
    <div
      className={cn(
        "relative",
        inline
          ? "left-0 translate-x-0"
          : "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="inline-flex items-center gap-2 bg-background/95 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-md pointer-events-auto">
        {items.map((item) => {
          const isActive = activeTab === item.name;

          const lamp = isActive ? (
            <motion.div
              layoutId="lamp"
              className="pointer-events-none absolute inset-0 z-0 w-full rounded-full bg-gray-200"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="absolute left-1/2 top-full mt-0.5 h-1 w-8 -translate-x-1/2 rounded-b-full bg-primary/80">
                <div className="absolute -bottom-2 -left-2 h-6 w-12 rounded-full bg-primary/20 blur-md" />
                <div className="absolute -bottom-1 h-6 w-8 rounded-full bg-primary/20 blur-md" />
                <div className="absolute bottom-0 left-2 h-4 w-4 rounded-full bg-primary/20 blur-sm" />
              </div>
            </motion.div>
          ) : null;

          const label = (
            <span className="relative z-[1] tracking-brand">{item.name}</span>
          );

          if (isControlled) {
            return (
              <div key={item.name} className="relative inline-block rounded-full">
                {lamp}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onTabChange(item.name);
                  }}
                  className={cn(
                    "relative z-[1] cursor-pointer rounded-full px-6 py-2 text-base font-semibold transition-colors",
                    "text-foreground/80 hover:text-primary",
                    isActive && "text-gray-900",
                  )}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              </div>
            );
          }

          return (
            <div key={item.name} className="relative inline-block rounded-full">
              {lamp}
              <a
                href={item.url ?? "#"}
                className={cn(
                  "relative z-[1] inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2 text-base font-semibold transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "text-gray-900",
                )}
              >
                {label}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
