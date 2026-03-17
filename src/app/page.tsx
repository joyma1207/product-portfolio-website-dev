"use client";

import { useState, useEffect, useMemo } from "react";
import { Hero } from "@/components/Hero";
import { WorkAboutToggle } from "@/components/WorkAboutToggle";
import { Footer } from "@/components/Footer";
import { WorkSection } from "@/components/work/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectModal } from "@/components/work/ProjectModal";
import DiscoverButton from "@/components/ui/discover-button";
import { projects } from "@/data/projects";

export default function Home() {
  const [view, setView] = useState<"work" | "about">("work");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  const syncViewToHash = () => {
    const hash = window.location.hash;
    const aboutHashes = ["#about", "#all-about-me", "#skills-capabilities", "#process", "#tools", "#contact", "#footer"];
    if (hash === "#work") {
      setView("work");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (aboutHashes.includes(hash)) {
      setView("about");
      if (hash === "#about" || hash === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const id = hash.slice(1);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      setView("work");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    syncViewToHash();
    window.addEventListener("hashchange", syncViewToHash);
    return () => window.removeEventListener("hashchange", syncViewToHash);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <DiscoverButton />
      </div>
      <header className="relative z-20 w-full">
        <div className="w-full bg-background">
          <Hero />
        </div>
        <div className="w-full bg-background">
          <WorkAboutToggle view={view} onViewChange={setView} />
        </div>
      </header>
      <main className="relative z-0 flex-1">
        {view === "work" && (
          <div className="flex-1 min-h-full bg-background">
            <WorkSection onOpenProject={setActiveProjectId} />
          </div>
        )}
        {view === "about" && (
          <div className="bg-background min-h-full">
            <AboutSection />
          </div>
        )}
      </main>
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProjectId(null)}
      />
      <Footer
          onGoToHome={() => {
            setView("work");
            window.history.replaceState(null, "", window.location.pathname);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onNavigateToView={(view) => {
            setView(view);
            window.history.replaceState(null, "", `${window.location.pathname}#${view}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenProject={setActiveProjectId}
        />
    </div>
  );
}
