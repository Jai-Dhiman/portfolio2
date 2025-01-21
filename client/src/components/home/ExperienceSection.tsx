// components/home/ExperienceSection.tsx
import { useQuery } from '@tanstack/react-query';
import { getExperiences } from '../../lib/api';

export default function ExperienceSection() {
  const { data: experiences, isLoading, error } = useQuery({
    queryKey: ['experiences'],
    queryFn: getExperiences
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-author">Loading experiences...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-author text-red-500">Error loading experiences</p>
      </div>
    );
  }

  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl font-author font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences?.map((experience) => (
          <div
            key={experience.id}
            className="card hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-author font-bold">{experience.title}</h3>
                <p className="text-primary-300 dark:text-primary-200">{experience.company}</p>
              </div>
              <div className="text-right text-sm text-primary-300 dark:text-primary-200">
                <p>
                  {new Date(experience.startDate).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                  {' - '}
                  {experience.current
                    ? 'Present'
                    : new Date(experience.endDate!).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })
                  }
                </p>
              </div>
            </div>
            <p className="text-gray-900 dark:text-gray-100">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}