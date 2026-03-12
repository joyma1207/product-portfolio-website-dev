"use client";

import { Footer as UIFooter } from "@/components/ui/footer";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

/**
 * PRD: Bottom footer — brand, contact (email, LinkedIn), Works (company names), About (resume, experiences).
 * Name / Work / About clicks navigate to that page (view + scroll to top).
 */
export function Footer({
  onGoToHome,
  onNavigateToView,
}: {
  onGoToHome?: () => void;
  onNavigateToView?: (view: "work" | "about") => void;
}) {
  return (
    <UIFooter
      className="mt-auto border-t border-gray-200/60 bg-background/95 backdrop-blur-sm"
      brand={{
        name: site.name,
        description: site.tagline,
      }}
      onBrandClick={onGoToHome}
      onColumnTitleClick={(href) => {
        if (href === "#work") onNavigateToView?.("work");
        else if (href === "#about") onNavigateToView?.("about");
      }}
      socialLinks={[
        { name: "Email", href: `mailto:${site.email}` },
        { name: "LinkedIn", href: site.linkedIn },
      ]}
      columns={[
        {
          title: "Works",
          titleHref: "#work",
          links: projects.map((p) => ({
            name: p.company,
            href: "#work",
          })),
        },
        {
          title: "About",
          titleHref: "#about",
          links: [
            { name: "Resume", href: site.resumeUrl },
            { name: "Experiences", href: "#experiences" },
          ],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} ${site.name}`}
    />
  );
}
