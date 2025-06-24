import React from 'react';
import Tilt from 'react-parallax-tilt';

// Tool Integration Components
interface ToolEmbedProps {
  title: string;
  description: string;
  embedUrl?: string;
  fallbackImage?: string;
  externalUrl?: string;
}

function ToolEmbed({ title, description, embedUrl, fallbackImage, externalUrl }: ToolEmbedProps) {
  return (
    <Tilt
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      perspective={1500}
      transitionSpeed={1200}
      scale={1.01}
      className="w-full"
    >
      <div className="card group min-h-[400px]">
        <div className="p-6">
          <h3 className="text-xl font-author font-bold mb-3 text-gradient">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {description}
          </p>

          {/* Embed or Fallback */}
          <div className="relative min-h-[280px] bg-gray-100 dark:bg-dark-200 rounded-lg overflow-hidden mb-4">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                title={title}
              />
            ) : fallbackImage ? (
              <img
                src={fallbackImage}
                alt={`${title} Preview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                <span>Preview Coming Soon</span>
              </div>
            )}
          </div>

          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Open {title} →
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
}

// Pinterest Values Card Component
interface ValueCardProps {
  pinterestValue: string;
  myApplication: string;
  description: string;
  examples: string[];
  index: number;
}

function ValueCard({ pinterestValue, myApplication, description, examples, index }: ValueCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      perspective={1500}
      transitionSpeed={1200}
      scale={1.01}
      className="w-full"
    >
      <div
        className="card group min-h-[300px]"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="p-6">
          <div className="mb-4">
            <h4 className="text-lg font-author font-bold text-primary-600 dark:text-accent-gold mb-1">
              Pinterest: "{pinterestValue}"
            </h4>
            <h5 className="text-md font-author font-semibold text-gradient">
              My Work: "{myApplication}"
            </h5>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {description}
          </p>

          <div>
            <span className="text-sm font-semibold text-primary-400 dark:text-accent-gold mb-2 block">
              Examples:
            </span>
            <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
              {examples.map((example, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary-500 dark:text-accent-coral mr-2">•</span>
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default function ProductManager() {
  // Add smooth scrolling behavior
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Pinterest Values Mapping Data
  const valuesMapping = [
    {
      pinterestValue: "Put Pinners First",
      myApplication: "Put Users First",
      description: "Centering all product decisions on user well-being through research-driven development and privacy-first design.",
      examples: [
        "Conducted 5+ user interviews to validate privacy concerns",
        "Designed transparent recommendation explanations",
        "Prioritized user control over algorithmic feed curation"
      ]
    },
    {
      pinterestValue: "Aim for Extraordinary",
      myApplication: "Technical Excellence + Strategy",
      description: "Building sophisticated systems while maintaining strategic product thinking and high execution quality.",
      examples: [
        "Chose Qdrant vector DB for advanced multi-modal search",
        "Designed privacy-preserving recommendation architecture",
        "Implemented RICE prioritization for feature decisions"
      ]
    },
    {
      pinterestValue: "Act as One",
      myApplication: "Cross-Functional Leadership",
      description: "Eliminating silos through structured processes and collaborative decision-making across design and engineering.",
      examples: [
        "Implemented Agile ceremonies for 2-person → structured team",
        "Created shared Jira workspace for transparency",
        "Facilitated design-engineering alignment sessions"
      ]
    },
    {
      pinterestValue: "Win or Learn",
      myApplication: "Iterative Product Building",
      description: "Making data-informed decisions, running experiments, and documenting learnings for continuous improvement.",
      examples: [
        "A/B testing framework for recommendation algorithms",
        "Sprint retrospectives and documented learnings",
        "Analytics-driven feature prioritization decisions"
      ]
    }
  ];

  // Tool Integration Data (replace with your actual URLs)
  const tools = [
    {
      title: "GitBook PRD",
      description: "Comprehensive Product Requirements Document covering problem definition, user research synthesis, success metrics, and competitive analysis.",
      embedUrl: "", // You'll replace this with your actual GitBook embed URL
      fallbackImage: "/images/gitbook-preview.png",
      externalUrl: "https://capture-1.gitbook.io/capture-docs/"
    },
    {
      title: "System Architecture Whiteboarding using Miro",
      description: "Showing multi-modal content flow, decision matrices, and user journey mapping.",
      embedUrl: "", // You'll replace this with your actual Miro embed URL
      fallbackImage: "/images/miro-preview.png"
    },
    {
      title: "Jira Epic Tracking",
      description: "Product roadmap with RICE-scored user stories, sprint planning, and cross-functional collaboration documentation.",
      fallbackImage: "/images/jira-preview.png"
    },
    {
      title: "Amplitude Analytics",
      description: "Discovery engagement metrics, content diversity tracking, and recommendation performance analytics dashboard.",
      fallbackImage: "/images/amplitude-preview.png"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-author font-bold mb-6">
          <span className="text-gradient">Product Manager Learning Journey</span>
        </h1>
        <h2 className="text-lg md:text-2xl font-author font-semibold mb-4 text-gray-700 dark:text-gray-300">
          From Music Performance to Product Strategy
        </h2>
        <p className="text-md text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-6">
          Learning Product Management through building Capture, a privacy-first social platform while applying PM frameworks,
          conducting user research, and implementing data-driven decision making.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-dark-300 rounded-full text-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Building toward Pinterest PM Apprenticeship 2025
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral/10 dark:bg-accent-coral/20 rounded-full text-sm">
            <span className="text-accent-coral">🎯</span>
            Non-traditional background • Music → Tech transition
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <a href="#strategy" className="btn-secondary hover-lift">Strategy & Vision</a>
          <a href="#architecture" className="btn-secondary hover-lift">Systems Thinking</a>
          <a href="#analytics" className="btn-secondary hover-lift">Data-Driven Decisions</a>
          <a href="#leadership" className="btn-secondary hover-lift">Cross-Functional Leadership</a>
          <a href="#values" className="btn-secondary hover-lift">Pinterest Values Alignment</a>
        </div>
      </div>

      {/* Product Strategy Section */}
      <section id="strategy" className="mb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
            Product Strategy & User Research
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive PRD development, user research synthesis, and competitive analysis
            using PM frameworks learned through Aha! and Atlassian certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ToolEmbed {...tools[0]} />

          <div className="space-y-6">
            <div className="card">
              <div className="p-6">
                <h3 className="text-xl font-author font-bold mb-4 text-gradient">
                  Key Product Insights
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                      Problem Validation
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      User interviews revealed 64% dissatisfaction with current social media privacy practices,
                      validating our privacy-first approach.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                      Success Metrics Framework
                    </h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Discovery engagement rate (saves, comments on recommendations)</li>
                      <li>• Content diversity score (preventing filter bubbles)</li>
                      <li>• Privacy compliance score (transparent recommendations)</li>
                      <li>• User session depth in discovery feed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                      Competitive Differentiation
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Pinterest's visual search + Instagram's social features + BeReal's authenticity,
                      but with collections-first organization and privacy-by-design architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Architecture Section */}
      <section id="architecture" className="mb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
            Systems Thinking & Technical Architecture
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Interactive system design showcasing multi-modal recommendation engine,
            privacy-preserving algorithms, and technical decision frameworks.
          </p>
        </div>

        <ToolEmbed {...tools[1]} />
      </section>

      {/* Data & Analytics Section */}
      <section id="analytics" className="mb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
            Data-Driven Product Decisions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Analytics instrumentation, success metrics tracking, and A/B testing framework
            for continuous product improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ToolEmbed {...tools[3]} />
          <ToolEmbed {...tools[2]} />
        </div>
      </section>

      {/* Cross-Functional Leadership Section */}
      <section id="leadership" className="mb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
            Cross-Functional Leadership & Process Design
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Scaling from 2-person founder team to structured development process through
            Agile implementation, stakeholder alignment, and team facilitation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="p-6">
              <h3 className="text-lg font-author font-bold mb-3 text-gradient">
                Process Implementation
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• 2-week sprint cycles with daily standups</li>
                <li>• Cross-functional retrospectives</li>
                <li>• Jira workspace for transparency</li>
                <li>• Design-engineering alignment sessions</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="p-6">
              <h3 className="text-lg font-author font-bold mb-3 text-gradient">
                RICE Prioritization
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• "Recommendation transparency UI" (RICE: 10.5)</li>
                <li>• "Multi-modal embedding generation" (RICE: 8.8)</li>
                <li>• "Enhanced scoring system" (RICE: 8.0)</li>
                <li>• "Privacy-preserving context" (RICE: 6.9)</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="p-6">
              <h3 className="text-lg font-author font-bold mb-3 text-gradient">
                Team Collaboration
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Facilitated design critique sessions</li>
                <li>• Stakeholder alignment on product vision</li>
                <li>• Technical debt vs. feature prioritization</li>
                <li>• User feedback integration workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pinterest Values Alignment */}
      <section id="values" className="mb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
            Pinterest Values Alignment
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            How my Product Management learning journey aligns with Pinterest's core values
            and approach to building extraordinary products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {valuesMapping.map((value, index) => (
            <ValueCard
              key={value.pinterestValue}
              {...value}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Integration with Technical Work */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
            Technical Implementation & Engineering Collaboration
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Bridging product strategy with technical execution through collaborative development
            and engineering partnership on the Capture platform.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="btn-primary flex items-center gap-2 hover-lift"
            >
              <span>View Technical Portfolio</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://github.com/Jai-Dhiman/capture"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 hover-lift"
            >
              <span>GitHub Repository</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <div className="card max-w-4xl mx-auto">
          <div className="p-8">
            <h3 className="text-2xl font-author font-bold mb-4 text-gradient">
              Ready to Contribute to Pinterest's Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              "Bringing everyone the inspiration to create a life they love" - through thoughtful product decisions,
              user-centered design, and collaborative innovation. My journey from music to product management
              demonstrates the diverse perspective and learning mindset Pinterest values in their apprenticeship program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 italic">
                Non-traditional background • Technical execution • Strategic thinking • User-first mindset
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 