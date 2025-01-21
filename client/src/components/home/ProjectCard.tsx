// components/home/ProjectCard.tsx
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card hover:-translate-y-2 transition-all duration-200">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-author font-bold mb-2">{project.title}</h3>
        <p className="text-gray-900 dark:text-gray-100 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}