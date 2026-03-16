"use client";

import { useState, useEffect, useMemo } from "react";
import { Hero } from "@/components/Hero";
import { WorkAboutToggle } from "@/components/WorkAboutToggle";
import { Footer } from "@/components/Footer";
import { WorkSection } from "@/components/work/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectModal } from "@/components/work/ProjectModal";
import { projects } from "@/data/projects";
import { GradientBackground, ABOUT_PAGE_GRADIENTS } from "@/components/ui/gradient-background";

export default function Home() {
  const [view, setView] = useState<"work" | "about">("work");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  const syncViewToHash = () => {
    const hash = window.location.hash;
    const aboutHashes = ["#about", "#experiences", "#all-about-me", "#proud", "#contact"];
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
      <header className="relative z-20 w-full">
        {view === "about" ? (
          <GradientBackground
            gradients={ABOUT_PAGE_GRADIENTS}
            enableCenterContent={false}
            fullPage={false}
            animationDuration={10}
            className="min-h-0"
          >
            <Hero variant="onGradient" />
          </GradientBackground>
        ) : (
          <div className="w-full bg-background">
            <Hero />
          </div>
        )}
        <div className="w-full bg-background">
          <WorkAboutToggle view={view} onViewChange={setView} />
        </div>
      </header>
      <main className="relative z-0 flex-1">
        {view === "work" && (
          <GradientBackground
            gradients={ABOUT_PAGE_GRADIENTS}
            enableCenterContent={false}
            contentClassName="flex-col flex-1"
            animationDuration={10}
            className="flex-1 min-h-full"
          >
            <WorkSection onOpenProject={setActiveProjectId} />
          </GradientBackground>
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
        />
    </div>
  );
}
