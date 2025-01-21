// components/home/SkillSection.tsx
import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../../lib/api';

export default function SkillsSection() {
  const { data: skills, isLoading, error } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-author">Loading skills...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-author text-red-500">Error loading skills</p>
      </div>
    );
  }

  const categories = [...new Set(skills?.map(skill => skill.category))];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-author font-bold mb-8">Skills</h2>
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-2xl font-author font-bold mb-4 capitalize">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills
                ?.filter(skill => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.id}
                    className="card flex items-center gap-2 p-3 hover:shadow-md transition-shadow duration-200"
                  >
                    {skill.iconUrl && (
                      <img
                        src={skill.iconUrl}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                    )}
                    <span className="text-gray-900 dark:text-gray-100">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}