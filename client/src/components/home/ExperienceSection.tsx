// components/ExperienceSection.tsx
import { useExperiences } from '../../hooks/useExperiences';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceSection = () => {
  const { data: experiences, isLoading, error } = useExperiences();

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-primary-200 dark:bg-dark-300 rounded w-1/4 mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 bg-primary-100 dark:bg-dark-400 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-accent-coral dark:text-accent-gold">
        Error loading experiences
      </div>
    );
  }

  return (
    <section id="experience" className="py-16">
      <h2 className="section-heading">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {experiences?.map((experience) => (
          <ExperienceCard 
            key={experience.id} 
            experience={experience} 
          />
        ))}
      </div>
    </section>
  );
};