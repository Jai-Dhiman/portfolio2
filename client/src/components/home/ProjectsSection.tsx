// components/home/ProjectsSection.tsx
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../lib/api';
import ProjectCard from './ProjectCard';
import Loader from '../loader';

export default function ProjectsSection() {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });

  if (isLoading) {
    return (
    <Loader />
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-author text-red-500">Error loading projects</p>
      </div>
    );
  }

  return (
    <section id="projects" className="py-16">
  <h2 className="section-heading">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
    {projects?.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
</section>
  );
}