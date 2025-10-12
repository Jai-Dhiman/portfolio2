import React, { Suspense, useState, useEffect, useRef } from "react";
import Hero from "../components/layout/Hero";
import Timeline from "../components/timeline/Timeline";

// Keep old sections as lazy-loaded fallbacks for now
const ProjectsSection = React.lazy(() => import("../components/home/ProjectsSection"));
const SkillsSection = React.lazy(() => import("../components/home/SkillSection"));
const ExperienceSection = React.lazy(() => import("../components/home/ExperienceSection").then(module => ({ default: module.ExperienceSection })));

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>
      
      {/* Main Timeline */}
      <div id="timeline" className="scroll-mt-24">
        <Timeline />
      </div>
    </>
  );
}
