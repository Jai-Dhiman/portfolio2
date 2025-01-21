// components/home/SkillSection.tsx
import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../../lib/api';
import Loader from '../loader';

export default function SkillsSection() {
  const { data: skills, isLoading, error } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills
  });
  
  if (isLoading) {
    return (
    <Loader />
    )
  }

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-accent-coral dark:text-accent-gold animate-fade-in">
          Error loading skills
        </p>
      </div>
    );
  }

  const categories = [...new Set(skills?.map(skill => skill.category))];

  return (
    <section id="skills" className="py-16 animate-slide-up">
      <h2 className="section-heading">Skills & Technologies</h2>
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category} className="animate-fade-in">
            <h3 className="text-gradient capitalize mb-6">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                ?.filter(skill => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.id}
                    className="card hover-lift flex items-center gap-3 p-4"
                  >
                    {skill.iconUrl && (
                      <img
                        src={skill.iconUrl}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}