// components/ExperienceCard.tsx
import Tilt from 'react-parallax-tilt';
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
    <Tilt
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      className="w-full h-full"
    >
      <div className="card relative">
        <div className="absolute top-6 right-6 text-sm text-primary-300 dark:text-dark-200">
          {getDateDisplay()}
        </div>
        <h3 className="pr-24"><span className="text-gradient">{experience.title}</span></h3>
        <p className="font-semibold text-primary-300 dark:text-accent-gold">
          {experience.company}
        </p>
        <p className="text-primary-400 dark:text-dark-100 mt-2">
          {experience.description}
        </p>
      </div>
    </Tilt>
  );
};