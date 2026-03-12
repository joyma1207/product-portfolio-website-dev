"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { WorkAboutToggle } from "@/components/WorkAboutToggle";
import { Footer } from "@/components/Footer";
import { WorkSection } from "@/components/work/WorkSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  const [view, setView] = useState<"work" | "about">("work");

  const syncViewToHash = () => {
    const hash = window.location.hash;
    if (hash === "#work") setView("work");
    else if (hash === "#about") setView("about");
    else setView("work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    syncViewToHash();
    window.addEventListener("hashchange", syncViewToHash);
    return () => window.removeEventListener("hashchange", syncViewToHash);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full bg-background">
        <Hero />
        <WorkAboutToggle view={view} onViewChange={setView} />
      </header>
      <main className="flex-1">
        {view === "work" && (
          <WorkSection />
        )}
        {view === "about" && <AboutSection />}
      </main>
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
