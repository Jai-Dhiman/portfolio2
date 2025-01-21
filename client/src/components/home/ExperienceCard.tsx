// components/ExperienceCard.tsx
import { Experience } from '../../types/index';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const formatDate = (date: string | Date | null) => {
    if (!date) return '';

    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      return dateObj.getFullYear().toString();
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  const getDateDisplay = () => {
    if (!experience?.startDate) return '';

    const startYear = formatDate(experience.startDate);
    if (experience.current) {
      return `${startYear} - Present`;
    }
    if (experience.endDate) {
      const endYear = formatDate(experience.endDate);
      return startYear === endYear ? startYear : `${startYear} - ${endYear}`;
    }
    return startYear;
  };

  return (
    <div className="card hover-lift relative">
      <div className="absolute top-6 right-6 text-sm text-primary-300 dark:text-dark-200">
        {getDateDisplay()}
      </div>
      <h3 className="text-gradient pr-24">{experience.title}</h3>
      <p className="font-semibold text-accent-coral dark:text-accent-gold">
        {experience.company}
      </p>
      <p className="text-primary-400 dark:text-dark-100 mt-2">
        {experience.description}
      </p>
    </div>
  );
};