"use client";

import { Briefcase, User } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

type View = "work" | "about";

type Props = {
  view: View;
  onViewChange: (v: View) => void;
};

const WORK_ABOUT_ITEMS = [
  { name: "Work", icon: Briefcase },
  { name: "About", icon: User },
] as const;

/**
 * PRD: Switch to flip between "Work" and "About". Uses 21st.dev tubelight style, left-aligned with Hero.
 */
export function WorkAboutToggle({ view, onViewChange }: Props) {
  const activeTab = view === "work" ? "Work" : "About";

  const handleTabChange = (name: string) => {
    onViewChange(name === "Work" ? "work" : "about");
  };

  return (
    <div className="mx-auto max-w-6xl px-6 pt-4 pb-0">
      <NavBar
        items={WORK_ABOUT_ITEMS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        inline
      />
      <div className="mt-4 border-t border-gray-200/80 w-full" aria-hidden />
    </div>
  );
}
