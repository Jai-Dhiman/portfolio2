import React from 'react';
import { Skill } from '../../types';

interface SkillClusterProps {
  category: string;
  skills: Skill[];
  hideIcons?: boolean;
}

const SkillCluster: React.FC<SkillClusterProps> = ({ category, skills, hideIcons = false }) => {
  return (
    <div className="py-8">
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          {category}
        </h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-dark-300/50 border border-primary-200 dark:border-dark-300 text-sm text-gray-700 dark:text-gray-300 hover:border-primary-400 dark:hover:border-accent-sage transition-colors"
            >
              {!hideIcons && skill.iconUrl && (
                <img
                  src={skill.iconUrl}
                  alt=""
                  className="w-4 h-4 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCluster;
