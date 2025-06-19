import React from 'react';
import { Project } from '../../types';

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onClose }) => {
  const renderField = (title: string, value?: string | string[]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return null;
    }
    return (
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-400 dark:text-accent-teal">{title}</h3>
        {Array.isArray(value) ? (
          <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 dark:text-gray-300">
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{value}</p>
        )}
      </section>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gradient">{project.title}</h2>
          {project.description && <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">{project.description}</p>}
        </header>

        <div className="space-y-6">
          {renderField("Problem Statement", project.pm_problem_statement)}
          {renderField("User Needs", project.pm_user_needs)}
          {renderField("Solution", project.pm_solution)}
          {renderField("Feature Prioritization", project.pm_feature_prioritization)}
          {renderField("Design Choices", project.pm_design_choices)}
          {renderField("Technical Trade-offs", project.pm_technical_tradeoffs)}
          {renderField("Success Metrics", project.pm_success_metrics)}
          {renderField("Learnings", project.pm_learnings)}

          {project.case_study_link && (
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-400 dark:text-accent-teal">Case Study</h3>
              <a
                href={project.case_study_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral dark:text-accent-gold hover:underline"
              >
                View Full Case Study Document
              </a>
            </section>
          )}

          {project.mockups && project.mockups.length > 0 && (
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-400 dark:text-accent-teal">Mockups</h3>
              <div className="mockups-container">
                {project.mockups.map((mockup, index) => (
                  <a href={mockup} target="_blank" rel="noopener noreferrer" key={index} className="mockup-image-link">
                    <img
                      src={mockup}
                      alt={`${project.title} mockup ${index + 1}`}
                      className="mockup-image"
                    />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        <footer className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetailView;
