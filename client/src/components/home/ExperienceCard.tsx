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
        <h3 className="pr-24"><span className="text-primary-500 dark:text-accent-coral">{experience.title}</span></h3>
        <p className="font-semibold text-accent-sage dark:text-accent-coral">
          {experience.company}
        </p>
        <p className="text-primary-400 dark:text-dark-100 mt-2 mb-4">
          {experience.description}
        </p>
        
        {/* Add link to Capture deep dive if this is the Capture experience */}
        {experience.company === 'Capture' && (
          <a
            href="#projects"
            className="btn-primary text-sm hover-lift inline-flex items-center gap-2 mt-4"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        )}
      </div>
    </Tilt>
  );
};