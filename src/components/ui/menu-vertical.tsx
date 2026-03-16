"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export type MenuItem = {
  label: string;
  href: string;
  /** If true, opens in new tab (e.g. resume PDF). */
  external?: boolean;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  skew?: number;
}

const MotionLink = motion(Link);

/**
 * Vertical nav menu for About. Uses same font size, colors, and spacing as
 * Work/About toggle and Hero (see globals.css vars). No arrow icon; move-right on hover only.
 */
export function MenuVertical({
  menuItems = [],
  skew = 0,
}: MenuVerticalProps) {
  return (
    <div
      className="flex w-fit flex-col pl-[var(--nav-menu-indent)]"
      style={{ gap: "var(--hero-title-tagline-gap)" }}
    >
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex cursor-pointer items-center text-foreground/80"
          initial="initial"
          whileHover="hover"
        >
          {item.external ? (
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                initial: { x: -12 },
                hover: { x: 0, skewX: skew },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-base font-semibold tracking-brand no-underline hover:text-primary"
            >
              {item.label}
            </motion.a>
          ) : (
            <MotionLink
              href={item.href}
              variants={{
                initial: { x: -12 },
                hover: { x: 0, skewX: skew },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-base font-semibold tracking-brand no-underline hover:text-primary"
            >
              {item.label}
            </MotionLink>
          )}
        </motion.div>
      ))}
    </div>
  );
}
