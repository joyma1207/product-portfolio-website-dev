"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FavouriteIcon,
  Fire02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { site } from "@/data/site";

const TABS = [
  {
    id: "hire-me",
    label: "Hire me",
    icon: Fire02Icon,
    color: "text-red-500",
    fill: "fill-red-500",
    bg: "bg-red-50",
    href: site.resumeUrl,
  },
  {
    id: "connect",
    label: "Connect",
    icon: FavouriteIcon,
    color: "text-gray-900",
    fill: "fill-gray-900",
    bg: "bg-gray-100",
    href: site.linkedIn,
  },
] as const;

export function DiscoverButton() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>(
    TABS[0].id,
  );

  const handleTabClick = (tabId: (typeof TABS)[number]["id"]) => {
    const tab = TABS.find((t) => t.id === tabId);
    setActiveTab(tabId);
    if (tab?.href) {
      window.open(tab.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex items-center gap-3 p-2 h-full">
      <motion.div
        layout
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 230,
          mass: 1.2,
        }}
        className="flex items-center bg-white rounded-[3rem] shadow-lg h-[60px] overflow-hidden relative"
      >
        <div className="overflow-hidden relative h-full flex items-center">
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              width: "auto",
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex items-center whitespace-nowrap"
          >
            <div className="flex items-center gap-2 px-[6px]">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-[3rem] transition-colors relative ${
                    activeTab === tab.id ? tab.color : "text-gray-700"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="bubble"
                      className={`absolute inset-0 z-0 ${tab.bg}`}
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.19,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <HugeiconsIcon
                    icon={tab.icon}
                    className={`w-5 h-5 relative z-10 ${
                      activeTab === tab.id ? tab.fill : ""
                    }`}
                  />
                  <span className="font-semibold font-mono uppercase relative z-10">
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default DiscoverButton;

