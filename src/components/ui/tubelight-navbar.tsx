"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
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

          const content = (
            <>
              <span className="relative z-10 tracking-brand">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="pointer-events-none absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/80 rounded-b-full mt-0.5">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -bottom-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -bottom-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm bottom-0 left-2" />
                  </div>
                </motion.div>
              )}
            </>
          );

          if (isControlled) {
            return (
              <button
                key={item.name}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onTabChange(item.name);
                }}
                className={cn(
                  "relative z-0 cursor-pointer text-base font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
                aria-pressed={isActive}
              >
                {content}
              </button>
            );
          }

          return (
            <a
              key={item.name}
              href={item.url ?? "#"}
              className={cn(
                "relative cursor-pointer text-base font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
