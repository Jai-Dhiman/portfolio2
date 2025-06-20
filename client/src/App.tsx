import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Hero from "./components/layout/Hero";
import ProjectsSection from "./components/home/ProjectsSection";
import SkillsSection from "./components/home/SkillSection";
import { ExperienceSection } from "./components/home/ExperienceSection";
import CaptureProjectSection from './components/home/CaptureProjectSection';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Hero />
        <CaptureProjectSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </Layout>
    </QueryClientProvider>
  );
} 
