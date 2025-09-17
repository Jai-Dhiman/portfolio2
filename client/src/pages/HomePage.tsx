import React, { Suspense, useState, useEffect, useRef } from "react";
import Hero from "../components/layout/Hero";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillsSection from "../components/home/SkillSection";
import { ExperienceSection } from "../components/home/ExperienceSection";

// Lazy load LetterGlitch for better performance
const LetterGlitch = React.lazy(() => import("../styles/backgrounds/LetterGlitch/LetterGlitch"));

export default function HomePage() {
  const [shouldLoadBackground, setShouldLoadBackground] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to lazy load background
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadBackground(true);
            observer.disconnect(); // Only load once
          }
        });
      },
      {
        rootMargin: "100px", // Start loading 100px before section is visible
        threshold: 0.1
      }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </div>
      <div className="relative" ref={skillsSectionRef}>
        {shouldLoadBackground && (
          <div className="absolute -inset-x-16 inset-y-0 opacity-5">
            <Suspense fallback={null}>
              <LetterGlitch />
            </Suspense>
          </div>
        )}
        <div className="relative z-10">
          <SkillsSection />
          <ExperienceSection />
        </div>
      </div>
    </>
  );
} 