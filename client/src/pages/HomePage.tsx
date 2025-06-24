import Hero from "../components/layout/Hero";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillsSection from "../components/home/SkillSection";
import { ExperienceSection } from "../components/home/ExperienceSection";
import CaptureProjectSection from "../components/home/CaptureProjectSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CaptureProjectSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
} 