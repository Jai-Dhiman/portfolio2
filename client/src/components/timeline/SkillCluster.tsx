import React from 'react';
import { Skill } from '../../types';

interface SkillClusterProps {
  category: string;
  skills: Skill[];
}

const SkillCluster: React.FC<SkillClusterProps> = ({ category, skills }) => {
  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <h3 className="text-lg font-author font-bold text-accent-sage dark:text-accent-coral mb-4">
          {category}
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-2 px-3 py-2 bg-primary-200/50 dark:bg-dark-300 text-primary-500 dark:text-dark-100 rounded-full text-sm font-medium backdrop-blur-sm"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCluster;
