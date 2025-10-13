import React from 'react';
import { Github, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  endDate?: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  image?: string;
  imageLabel?: string;
  githubUrl?: string;
  liveUrl?: string;
  isProject?: boolean;
  isLeft?: boolean;
  logo?: string;
  wide?: boolean; // allow slightly wider content area
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  endDate,
  title,
  subtitle,
  description,
  highlights = [],
  image,
  imageLabel,
  githubUrl,
  liveUrl,
  isProject = false,
  isLeft = false,
  logo,
  wide = false
}) => {
  const formatUrls = (url?: string) => {
    if (!url) return undefined;
    return url.startsWith('http') ? url : `https://${url}`;
  };

  return (
    <div className={`timeline-item flex flex-col md:flex-row md:items-center mb-16 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Date marker - on top for mobile, side for desktop */}
      <div className="flex-shrink-0 md:w-32 mb-4 md:mb-0 text-center md:text-right pr-2">
        <div className="inline-flex flex-col items-center md:items-end gap-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-sage/20 dark:bg-accent-coral/20 text-accent-sage dark:text-accent-coral rounded-full text-sm font-medium">
            <Calendar className="w-3 h-3" />
            <span className="whitespace-nowrap">{date}</span>
          </div>
          {endDate && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-sage/20 dark:bg-accent-coral/20 text-accent-sage dark:text-accent-coral rounded-full text-sm font-medium">
              <span className="whitespace-nowrap">{endDate}</span>
            </div>
          )}
        </div>
      </div>

      {/* Timeline line - hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0 mx-10 flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-accent-sage dark:bg-accent-coral border-4 border-primary-100 dark:border-dark-400 shadow-lg"></div>
        <div className="w-0.5 h-16 bg-gradient-to-b from-accent-sage/50 to-transparent dark:from-accent-coral/50"></div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 ${wide ? 'md:max-w-3xl' : 'md:max-w-2xl'}`}
      >
        <div className="bg-primary-100/80 dark:bg-dark-300/80 backdrop-blur-sm rounded-xl p-6 border border-primary-200/50 dark:border-dark-200/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Text content */}
            <div className="flex-1">
              <div className="mb-4">
                <div className="flex items-start gap-3 mb-2">
                  {/** Optional logo */}
                  {logo && (
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg flex-shrink-0 mt-1" // Increased logo size and prevent shrinking
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="flex-1 min-w-0"> {/* Allow text to shrink if needed */}
                    <h3 className="text-xl font-author font-bold text-primary-500 dark:text-dark-100 leading-tight">
                      {title}
                    </h3>
                    {subtitle && (
                      <p className="text-accent-sage dark:text-accent-coral font-medium flex items-center gap-2 mt-1 text-base">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        {subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-primary-400 dark:text-dark-200 leading-relaxed mb-4">
                {description}
              </p>

              {highlights.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent-sage dark:text-accent-coral mb-2 uppercase tracking-wide">
                    Key Results
                  </h4>
                  <ul className="space-y-1">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-primary-400 dark:text-dark-200 flex items-center gap-2">
                        <span className="text-accent-sage dark:text-accent-coral">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action buttons */}
              {(githubUrl || liveUrl) && (
                <div className="flex flex-wrap gap-3">
                  {githubUrl && (
                    <a
                      href={formatUrls(githubUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-dark-400 hover:bg-dark-300 dark:bg-primary-500 dark:hover:bg-primary-400 text-primary-100 dark:text-dark-100 rounded-lg text-sm font-medium transition-colors border border-primary-400 dark:border-primary-400"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {liveUrl && (
                    <a
                      href={formatUrls(liveUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent-sage hover:bg-accent-sage/80 dark:bg-accent-coral dark:hover:bg-accent-coral/80 text-primary-100 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Image */}
            {image && (
              <div className="w-full lg:w-80 flex-shrink-0">
                <div className="w-full rounded-lg shadow-lg bg-primary-100 dark:bg-dark-400">
                  {imageLabel && (
                    <div className="px-3 pt-3 text-sm font-semibold text-primary-500 dark:text-dark-100">
                      {imageLabel}
                    </div>
                  )}
                  <div className="px-3 pb-3">
                    <div className="mt-2 aspect-[16/9] overflow-hidden rounded-md">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain rounded-md"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;