import React from "react";
import Hero from "../components/layout/Hero";
import Timeline from "../components/timeline/Timeline";

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
