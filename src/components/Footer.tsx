"use client";

import { Footer as UIFooter } from "@/components/ui/footer";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

/**
 * PRD: Bottom footer — brand, contact (email, LinkedIn), Works (company names), About (resume, etc.).
 * Name / Work / About clicks navigate to that page (view + scroll to top).
 * Works company links switch to Work view and open that project's card overlay.
 */
export function Footer({
  onGoToHome,
  onNavigateToView,
  onOpenProject,
}: {
  onGoToHome?: () => void;
  onNavigateToView?: (view: "work" | "about") => void;
  onOpenProject?: (projectId: string) => void;
}) {
  return (
    <UIFooter
      id="footer"
      className="mt-auto border-t border-gray-200/60 bg-background/95 backdrop-blur-sm"
      brand={{
        name: site.name,
        description: site.tagline,
      }}
      hireMeHref={site.resumeUrl}
      onBrandClick={onGoToHome}
      onColumnTitleClick={(href) => {
        if (href === "#work") onNavigateToView?.("work");
        else if (href === "#about") onNavigateToView?.("about");
      }}
      socialLinks={[
        { name: "Email", href: `mailto:${site.email}` },
        { name: "LinkedIn", href: site.linkedIn },
      ]}
      socialEmail={site.email}
      socialLinkedIn={site.linkedIn}
      socialGithub={site.github}
      columns={[
        {
          title: "Works",
          titleHref: "#work",
          links: projects.map((p) => ({
            name: p.company,
            href: "#work",
            onClick: () => {
              onNavigateToView?.("work");
              onOpenProject?.(p.id);
            },
          })),
        },
        {
          title: "About",
          titleHref: "#about",
          links: [
            { name: "Resume", href: site.resumeUrl },
            { name: "Skills & Capabilities", href: "#skills-capabilities" },
            { name: "Process", href: "#process" },
            { name: "Tools I Use", href: "#tools" },
          ],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} ${site.name}`}
    />
  );
}
