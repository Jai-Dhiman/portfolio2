import React, { useMemo } from 'react';
import Tilt from 'react-parallax-tilt';
import { Project } from '../../types';
import SpotlightCard from '../../styles/components/SpotlightCard/SpotlightCard';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = React.memo(function ProjectCard({ project }: ProjectCardProps) {
  // Memoize URL formatting to avoid recalculation on every render
  const formattedUrls = useMemo(() => ({
    live: project.liveUrl && !project.liveUrl.startsWith('http')
      ? `https://${project.liveUrl}`
      : project.liveUrl,
    github: project.githubUrl && !project.githubUrl.startsWith('http')
      ? `https://${project.githubUrl}`
      : project.githubUrl
  }), [project.liveUrl, project.githubUrl]);

  // Memoize tech stack rendering
  const techStackElements = useMemo(() =>
    project.techStack.map((tech) => (
      <span
        key={tech}
        className="px-3 py-1 bg-primary-100 dark:bg-dark-300 text-primary-400 dark:text-dark-100 rounded-full text-sm font-medium"
      >
        {tech}
      </span>
    )), [project.techStack]);

  return (
    <Tilt
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      className="w-full"
    >
      <SpotlightCard className="group w-full overflow-hidden rounded-lg">
        <article className="w-full">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg bg-gray-50 dark:bg-dark-100">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-author font-bold mb-3 text-gradient">
              {project.title}
            </h3>
            <p className="text-gray-900 dark:text-gray-100 mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {techStackElements}
            </div>
            <div className="flex gap-4">
              {formattedUrls.live && (
                <a
                  href={formattedUrls.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <span>Link</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              {formattedUrls.github && (
                <a
                  href={formattedUrls.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </article>
      </SpotlightCard>
    </Tilt>
  );
});

export default ProjectCard;
