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