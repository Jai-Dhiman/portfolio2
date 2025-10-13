import React from 'react';
import { Skill } from '../../types';

interface SkillClusterProps {
  category: string;
  skills: Skill[];
}

const SkillCluster: React.FC<SkillClusterProps> = ({ category, skills }) => {
  // Mono border color based on theme (set via Tailwind classes on element)

  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <h3 className="text-lg font-author font-bold text-accent-sage dark:text-accent-coral mb-4">
          {category}
        </h3>
        <div className="flex flex-wrap justify-center gap-1 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`relative skill-parallelogram px-5 py-2 bg-primary-200/40 dark:bg-dark-300 text-primary-500 dark:text-dark-100 text-sm font-medium backdrop-blur-sm border-2 border-primary-400 dark:border-primary-300 ${index > 0 ? '-ml-2' : ''}`}
              style={{ zIndex: skills.length - index }}
            >
              <div className="skill-parallelogram-inner flex items-center gap-2">
                {skill.iconUrl && (
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="w-4 h-4 object-contain rounded-md"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="whitespace-nowrap">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCluster;
