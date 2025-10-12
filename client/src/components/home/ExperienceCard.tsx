// components/ExperienceCard.tsx
import Tilt from 'react-parallax-tilt';
import { Experience } from '../../types/index';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {

  const formatDate = (date: string | Date | null, format: 'year' | 'month-year' = 'year') => {
    if (!date) return '';

    try {
      // Handle string dates by parsing them properly to avoid timezone issues
      if (typeof date === 'string') {
        // If it's in YYYY-MM-DD format, parse it as UTC to avoid timezone shifts
        const dateParts = date.split('-');
        if (dateParts.length === 3) {
          const year = parseInt(dateParts[0]);
          const month = parseInt(dateParts[1]) - 1; // Month is 0-indexed
          const day = parseInt(dateParts[2]);
          const dateObj = new Date(year, month, day);
          
          if (format === 'month-year') {
            return dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          }
          return dateObj.getFullYear().toString();
        }
      }
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      
      if (format === 'month-year') {
        return dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      }
      return dateObj.getFullYear().toString();
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  const getDateDisplay = () => {
    if (!experience?.startDate) return '';

    const startDisplay = formatDate(experience.startDate, 'month-year');
    if (experience.current) {
      return `${startDisplay} - Present`;
    }
    if (experience.endDate) {
      const endDisplay = formatDate(experience.endDate, 'month-year');
      // If same month and year, show just one date
      return startDisplay === endDisplay ? startDisplay : `${startDisplay} - ${endDisplay}`;
    }
    return startDisplay;
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