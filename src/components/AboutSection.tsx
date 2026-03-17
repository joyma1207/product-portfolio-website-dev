"use client";

import Link from "next/link";
import { BookOpen, MapPin, Rocket, Users, GitBranch, Search, LayoutTemplate, ClipboardCheck } from "lucide-react";
import { site } from "@/data/site";
import { MenuVertical } from "@/components/ui/menu-vertical";
import { SocialIcons } from "@/components/ui/social-icons";
import { SkillsCard } from "@/components/about/SkillsCard";
import { ProcessDiagram } from "@/components/about/ProcessDiagram";
import { ToolsTree } from "@/components/about/ToolsTree";

const ABOUT_MENU_ITEMS = [
  { label: "All About Me", href: "#all-about-me" },
  { label: "Download My Resume", href: site.resumeUrl, external: true },
  { label: "Skills & Capabilities", href: "#skills-capabilities" },
  { label: "My Process", href: "#process" },
  { label: "Tools I Use", href: "#tools" },
  { label: "Contact me", href: "#footer" },
];

/**
 * Milestone 3: About section — left vertical menu + right content (profile, bio, contact).
 * Uses portfolio palette and typography.
 */
export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-[var(--hero-title-tagline-gap)]" aria-label="About">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left: vertical menu — hidden on mobile, visible from lg */}
        <aside className="hidden flex-shrink-0 lg:block lg:pt-2">
          <MenuVertical menuItems={ABOUT_MENU_ITEMS} />
        </aside>

        {/* Right: profile + sections */}
        <div className="min-w-0 flex-1">
          {/* Top: name, location, education */}
          <div id="all-about-me" className="scroll-mt-24">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
              <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full bg-gray-200/80 sm:h-52 sm:w-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/profile.png"
                  alt=""
                  className="h-full w-full object-cover object-[center_40%] scale-[1.8]"
                />
              </div>
              <div className="min-w-0 flex-1 space-y-3">
                <h2 className="text-2xl font-semibold tracking-brand text-gray-900 sm:text-3xl">
                  Hi! My name is Joy :))
                </h2>
                <p className="flex items-center gap-2 text-gray-600 text-base">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-gray-600" aria-hidden />
                  {site.location}
                </p>
                <p className="flex items-center gap-2 text-gray-600 text-sm leading-relaxed">
                  <BookOpen className="h-5 w-5 flex-shrink-0 text-gray-600" aria-hidden />
                  {site.education}
                </p>
                <p className="text-gray-600 text-sm">{site.certification}</p>
                <Link
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 underline-offset-2 hover:underline w-fit block"
                >
                  Download my Resume
                </Link>
                <SocialIcons
                  email={site.email}
                  linkedIn={site.linkedIn}
                  github={site.github}
                />
              </div>
            </div>
          </div>

          {/* All About Me — brief intro */}
          <div className="mt-8 pt-8 border-t border-gray-200/70">
            <h3 className="text-xl font-semibold tracking-brand text-gray-900">
              All About Me
            </h3>
            <div className="mt-3 space-y-4 text-base text-gray-700 leading-relaxed">
              {site.allAboutMe.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </div>

          {/* My Skills & Capabilities — work grid card style, 4 cards in one row on lg */}
          <div id="skills-capabilities" className="scroll-mt-24 pt-12">
            <h3 className="text-xl font-semibold tracking-brand text-gray-900">
              My Skills & Capabilities
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
              {site.skillsCapabilities.map((cap, i) => (
                <SkillsCard
                  key={i}
                  icon={[Rocket, Users, Search, GitBranch, LayoutTemplate, ClipboardCheck][i] ?? Rocket}
                  title={cap.title}
                  description={cap.description}
                  colorIndex={i}
                />
              ))}
            </div>
          </div>

          {/* My Process */}
          <div id="process" className="scroll-mt-24 pt-12">
            <h3 className="text-xl font-semibold tracking-brand text-gray-900">
              My Process
            </h3>
            <div className="mt-6">
              <ProcessDiagram steps={site.processSteps} />
            </div>
          </div>

          {/* My Tools — tree format */}
          <div id="tools" className="scroll-mt-24 pt-12">
            <h3 className="text-xl font-semibold tracking-brand text-gray-900">
              My Tools
            </h3>
            <div className="mt-6">
              <ToolsTree nodes={site.toolsTree} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
