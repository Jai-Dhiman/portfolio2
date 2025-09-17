// components/home/SkillSection.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../../lib/api';
import { useReducedMotion } from '../../hooks/useDarkMode';
import Loader from '../loader';

export default React.memo(function SkillsSection() {
  const { data: skills, isLoading, error } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills
  });
  const prefersReducedMotion = useReducedMotion();

  if (isLoading) {
    return (
      <Loader />
    )
  }

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-accent-sage dark:text-accent-coral animate-fade-in">
          Error loading skills
        </p>
      </div>
    );
  }

  const categories = [...new Set(skills?.map(skill => skill.category))];

  return (
    <section id="skills" className="pt-8 pb-16 animate-slide-up scroll-mt-24">
      <h2 className="section-heading">Skills & Technologies</h2>
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category} className="animate-fade-in">
            <h3 className="text-accent-sage dark:text-accent-coral capitalize mb-6 text-xl font-author font-bold">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                ?.filter(skill => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.id}
                    className="card hover-lift group flex items-center gap-3 p-4"
                  >
                    {skill.iconUrl && (
                      <img
                        src={skill.iconUrl}
                        alt={skill.name}
                        className={`w-8 h-8 object-contain ${!prefersReducedMotion ? 'group-hover:animate-continuous-spin' : ''}`}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <span className="font-medium block break-words whitespace-normal">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});