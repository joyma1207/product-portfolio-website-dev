"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { MenuVertical } from "@/components/ui/menu-vertical";

const ABOUT_MENU_ITEMS = [
  { label: "All About Me", href: "#all-about-me" },
  { label: "Download My Resume", href: site.resumeUrl, external: true },
  { label: "My experiences", href: "#experiences" },
  { label: "Things I'm super proud about", href: "#proud" },
  { label: "Contact me", href: "#contact" },
];

/**
 * Milestone 3: About section — left vertical menu + right content (profile, bio, contact).
 * Uses portfolio palette and typography.
 */
export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-[var(--hero-title-tagline-gap)]" aria-label="About">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left: vertical menu */}
        <aside className="flex-shrink-0 lg:pt-2">
          <MenuVertical menuItems={ABOUT_MENU_ITEMS} />
        </aside>

        {/* Right: profile + sections */}
        <div className="min-w-0 flex-1">
          {/* Top: name, location, education */}
          <div id="all-about-me" className="scroll-mt-24">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
              <div
                className="flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-full bg-gray-200/80 text-gray-600 text-sm font-medium tracking-brand sm:h-52 sm:w-52"
                aria-hidden
              >
                My profile picture
              </div>
              <div className="min-w-0 flex-1 space-y-3">
                <h2 className="text-xl font-semibold tracking-brand text-gray-900 sm:text-2xl">
                  Hi! My name is Joy :))
                </h2>
                <p className="text-gray-700">{site.location}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {site.education}
                </p>
                <p className="text-gray-700 text-sm">{site.certification}</p>
                <p className="flex flex-wrap items-center gap-1 pt-1 text-sm text-gray-700">
                  <Link
                    href={`mailto:${site.email}`}
                    className="hover:text-gray-900 underline-offset-2 hover:underline"
                  >
                    email
                  </Link>
                  <span className="text-gray-400" aria-hidden>|</span>
                  <Link
                    href={site.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 underline-offset-2 hover:underline"
                  >
                    LinkedIn
                  </Link>
                  <span className="text-gray-400" aria-hidden>|</span>
                  <Link
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 underline-offset-2 hover:underline"
                  >
                    Download my resume
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* All About Me — brief intro */}
          <div className="mt-8 pt-8 border-t border-gray-200/70">
            <h3 className="text-lg font-semibold tracking-brand text-gray-900">
              All About Me
            </h3>
            <div className="mt-3 space-y-4 text-sm text-gray-700 leading-relaxed">
              {site.allAboutMe.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </div>

          {/* My experiences — placeholder for your components later */}
          <div id="experiences" className="scroll-mt-24 pt-12">
            <h3 className="text-lg font-semibold tracking-brand text-gray-900">
              My experiences
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {site.experiencesIntro}
            </p>
            {/* Drop your experience components here later */}
          </div>

          {/* Things I'm super proud about */}
          <div id="proud" className="scroll-mt-24 pt-12">
            <h3 className="text-lg font-semibold tracking-brand text-gray-900">
              Things I'm super proud about
            </h3>
            <ul className="mt-4 space-y-6">
              {site.proud.map((item, i) => (
                <li key={i}>
                  <h4 className="text-base font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact me */}
          <div id="contact" className="scroll-mt-24 pt-12">
            <h3 className="text-lg font-semibold tracking-brand text-gray-900">
              Contact me
            </h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Always down to chat about product, AI, or just life. Say hi over email or LinkedIn.
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-1 text-sm text-gray-700">
              <Link
                href={`mailto:${site.email}`}
                className="hover:text-gray-900 underline-offset-2 hover:underline"
              >
                {site.email}
              </Link>
              <span className="text-gray-400" aria-hidden>|</span>
              <Link
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 underline-offset-2 hover:underline"
              >
                LinkedIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
