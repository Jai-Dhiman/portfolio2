import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../lib/api';
import { Project, ProductThinkingExercise } from '../../types';
import Loader from '../loader'; // Assuming Loader is in ../loader/index.tsx or ../loader.tsx

const productExercises: ProductThinkingExercise[] = [
  {
    id: 1,
    title: "Strategic Deep Dive: Enhancing 'Capture'",
    problem: "How can 'Capture' evolve to not just meet current user needs for privacy-first social sharing, but also anticipate future trends in digital interaction and content ownership?",
    solution_summary: "Explore decentralized storage options (e.g., IPFS) for enhanced user data control. Investigate AI-driven content moderation that respects privacy while curbing misuse. Consider features for tokenizing unique content, allowing creators to claim verifiable ownership. Introduce tiered privacy settings for posts (e.g., 'close friends', 'acquaintances', 'public but encrypted'). A/B test UI/UX değişiklikleri to simplify privacy controls further, making them intuitive for non-technical users. Success metrics: user adoption of new features, user retention rates, qualitative feedback on perceived control and security, and opt-in rates for advanced features.",
    details_link: "#"
  },
  {
    id: 2,
    title: "Feature Prioritization: 'Capture' Monetization without Compromising Privacy",
    problem: "Develop a sustainable monetization strategy for 'Capture' that aligns with its core privacy-first principles, avoiding intrusive advertising or direct sale of user data.",
    solution_summary: "Introduce optional premium features for a subscription fee (e.g., larger encrypted storage, advanced analytics for content creators (privacy-respecting), unique themes/customization). Explore a 'tipping' or 'support a creator' model. Offer B2B services like secure, private communication channels for organizations. Ensure all monetization strategies are transparent and opt-in. Key metrics: conversion rate to premium, average revenue per user (ARPU) for premium users, user sentiment regarding monetization efforts.",
  }
];

const CaptureProjectSection: React.FC = () => {
  const { data: projects, isLoading, error } = useQuery<Project[], Error>({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  if (isLoading) {
    return (
      <section id="capture-project" className="py-20 bg-primary-50 dark:bg-dark-400 min-h-[50vh] flex items-center justify-center">
        <Loader />
      </section>
    );
  }

  if (error) {
    return (
      <section id="capture-project" className="py-20 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Error Fetching Project Data</h2>
          <p>{error.message}</p>
        </div>
      </section>
    );
  }

  const captureProject = projects?.find(p => p.id === 1 || p.title.toLowerCase() === "capture");

  if (!captureProject) {
    return (
      <section id="capture-project" className="py-20 bg-primary-50 dark:bg-dark-400 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-primary-400 dark:text-accent-coral">Capture Project Not Found</h2>
          <p className="text-gray-700 dark:text-gray-300">The featured project details could not be loaded at this time.</p>
        </div>
      </section>
    );
  }

  const renderField = (title: string, value?: string | string[], listType: 'ul' | 'ol' = 'ul') => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return null;
    }
    return (
      <div className="mb-6 md:mb-8">
        <h4 className="text-xl lg:text-2xl font-author font-semibold mb-3 text-primary-400 dark:text-accent-teal">
          {title}
        </h4>
        {Array.isArray(value) ? (
          React.createElement(listType, { className: "list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-4 " + (listType === 'ul' ? "list-disc" : "list-decimal") },
            value.map((item, index) => <li key={index}>{item}</li>)
          )
        ) : (
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{value}</p>
        )}
      </div>
    );
  };

  const formatUrl = (url: string) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `https://${url}`;
  };

  return (
    <section id="capture-project-case-study" className="py-12 md:py-20 bg-primary-100 dark:bg-dark-500">
      <div className="container mx-auto px-4">
        {/* Project Details Section */}
        <header className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-author font-bold text-gradient mb-4">
            Featured Project: {captureProject.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {captureProject.description}
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 mb-12 md:mb-20">
          <div className="md:col-span-3">
            {captureProject.image && (
              <img
                src={captureProject.image}
                alt={captureProject.title}
                className="w-full h-auto object-cover rounded-xl shadow-2xl mb-8 md:mb-0"
              />
            )}
          </div>
          <div className="md:col-span-2 space-y-4">
             {renderField("Tech Stack", captureProject.techStack)}
            {captureProject.liveUrl && (
              <div>
                <h4 className="text-xl font-semibold mb-2 text-primary-400 dark:text-accent-teal">Live Demo</h4>
                <a href={formatUrl(captureProject.liveUrl)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Live Site
                </a>
              </div>
            )}
            {captureProject.githubUrl && (
              <div>
                <h4 className="text-xl font-semibold mb-2 text-primary-400 dark:text-accent-teal">Source Code</h4>
                <a href={formatUrl(captureProject.githubUrl)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {renderField("Problem Statement", captureProject.pm_problem_statement)}
          {renderField("User Needs", captureProject.pm_user_needs)}
          {renderField("Proposed Solution", captureProject.pm_solution)}
          {renderField("Feature Prioritization", captureProject.pm_feature_prioritization)}
          {renderField("Key Design Choices", captureProject.pm_design_choices)}
          {renderField("Technical Trade-offs", captureProject.pm_technical_tradeoffs)}
          {renderField("Success Metrics", captureProject.pm_success_metrics)}
          {renderField("Project Learnings & Outcomes", captureProject.pm_learnings)}

          {captureProject.mockups && captureProject.mockups.length > 0 && (
            <div className="mb-6 md:mb-8">
              <h4 className="text-xl lg:text-2xl font-author font-semibold mb-3 text-primary-400 dark:text-accent-teal">
                Mockups & Visuals
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {captureProject.mockups.map((mockup, index) => (
                  <a key={index} href={mockup} target="_blank" rel="noopener noreferrer" className="block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-accent-coral dark:hover:border-accent-gold transition-all">
                    <img src={mockup} alt={`${captureProject.title} mockup ${index + 1}`} className="w-full h-auto object-contain aspect-video"/>
                  </a>
                ))}
              </div>
            </div>
          )}

          {captureProject.case_study_link && (
             <div className="mt-10 text-center">
                <a href={captureProject.case_study_link} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
                  Read Full Case Study Document
                </a>
            </div>
          )}
        </div>

        {/* Product Thinking Exercises Section */}
        <section className="mt-16 md:mt-24 pt-10 border-t-2 border-primary-200 dark:border-dark-300">
          <h3 className="text-2xl md:text-3xl font-author font-bold text-center mb-10 md:mb-16 text-gradient">
            Related Product Thinking
          </h3>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {productExercises.map((exercise) => (
              <div key={exercise.id} className="card p-6 bg-white dark:bg-dark-400 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl lg:text-2xl font-author font-bold mb-3 text-primary-400 dark:text-accent-coral">
                  {exercise.title}
                </h4>
                {exercise.problem && (
                  <div className="mb-3">
                    <h5 className="text-md font-semibold mb-1 text-gray-600 dark:text-gray-400">The Challenge:</h5>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {exercise.problem}
                    </p>
                  </div>
                )}
                <div className="mb-4 flex-grow">
                  <h5 className="text-md font-semibold mb-1 text-gray-600 dark:text-gray-400">My Approach & Ideas:</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {exercise.solution_summary}
                  </p>
                </div>
                {exercise.details_link && (
                  <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-600">
                    <a
                      href={exercise.details_link}
                      target={exercise.details_link === "#" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="btn-secondary btn-sm w-full text-center"
                    >
                      Explore Detailed Write-up (Soon)
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CaptureProjectSection;
