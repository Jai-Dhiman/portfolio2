// components/ExperienceSection.tsx
import { useExperiences } from '../../hooks/useExperiences';
import Loader from '../loader';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection = () => {
  const { data: experiences, isLoading, error } = useExperiences();

  if (isLoading) {
    return (
    <Loader />
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-author text-red-500">Error loading Experiences</p>
      </div>
    );
  }

  return (
    <section id="experience" className="py-16">
      <h2 className="section-heading">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {experiences?.sort((a, b) => {
          // Sort by current status first (current = true comes first)
          if (a.current && !b.current) return -1;
          if (!a.current && b.current) return 1;
          // Then sort by start date (most recent first)
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        }).map((experience) => (
          <ExperienceCard 
            key={experience.id} 
            experience={experience} 
          />
        ))}
      </div>
    </section>
  );
};