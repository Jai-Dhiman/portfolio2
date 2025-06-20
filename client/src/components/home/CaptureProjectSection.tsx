import React, { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../lib/api';
import Loader from '../loader';
import Tilt from 'react-parallax-tilt';

// Leadership Evolution Card Component
interface LeadershipCardProps {
  title: string;
  challenge: string;
  approach: string;
  skills: string;
  index: number;
}

function LeadershipCard({ title, challenge, approach, skills, index }: LeadershipCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      className="w-full"
    >
      <div
        className="card group"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="p-6">
          <h4 className="text-lg font-author font-bold mb-3 text-gradient">
            {title}
          </h4>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-semibold text-primary-400 dark:text-accent-coral">Challenge:</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{challenge}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-400 dark:text-accent-coral">Approach:</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{approach}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-400 dark:text-accent-coral">PM Skills:</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{skills}</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

// Mobile Mockup Component with 9:16 aspect ratio
interface MobileMockupProps {
  src: string;
  alt: string;
  caption: string;
  index: number;
}

function MobileMockup({ src, alt, caption, index }: MobileMockupProps) {
  return (
    <div
      className="relative group"
      style={{ animationDelay: `${index * 300}ms` }}
    >
      <div className="aspect-[9/16] relative overflow-hidden rounded-xl bg-gray-100 dark:bg-dark-200 shadow-lg">
        <img
          src="/images/Capture.png"
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay with screen label */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-2">
          <p className="text-xs font-medium text-center">{alt}</p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">{caption}</p>
    </div>
  );
}

// Data Flow Particles Component
function DataFlowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;
        if (particle.y > canvas.offsetHeight) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`; // Primary blue
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default function CaptureProjectSection() {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });

  if (isLoading) return <Loader />;
  if (error) return null;

  const captureProject = projects?.find(project =>
    project.title.toLowerCase() === "capture" || project.id === 1
  );

  const leadershipCards = [
    {
      title: "Solo Architect → Team Lead",
      challenge: "Managing growing codebase complexity while onboarding new team members",
      approach: "Implemented Agile methodologies and code review processes",
      skills: "Team scaling, process implementation"
    },
    {
      title: "Technical Decisions → Product Strategy",
      challenge: "Balancing technical debt with feature development priorities",
      approach: "Created product roadmap prioritizing user safety and scalability",
      skills: "Strategic prioritization, roadmap planning"
    },
    {
      title: "Individual Contributor → Cross-Functional Leader",
      challenge: "Coordinating between design vision and technical constraints",
      approach: "Established design-dev sync meetings and feasibility review process",
      skills: "Cross-functional collaboration, stakeholder alignment"
    }
  ];

  const mockupData = [
    { src: "", alt: "Feed", caption: "Privacy-first chronological feed" },
    { src: "", alt: "Privacy Dashboard", caption: "User control & data transparency" },
    { src: "", alt: "Onboarding", caption: "Ethical design principles" },
    { src: "", alt: "Team Collaboration", caption: "Cross-functional development" }
  ];

  return (
    <section id="capture-project-case-study" className="py-16 relative overflow-hidden">
      {/* Data Flow Particles Background */}
      <div className="absolute inset-0 opacity-30">
        <DataFlowParticles />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-author font-bold mb-6">
            <span className="text-gradient">Capture</span>
          </h2>
          <h3 className="text-md md:text-xl font-author font-semibold mb-4 text-gradient">
            From Berklee to Building Privacy-First Innovation
          </h3>
          <p className="text-md text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            How music composition skills translate to product architecture and team leadership
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Project Overview */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-author font-bold mb-4 text-gradient">
                System Architecture & Strategic Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Co-founded privacy-first social platform built with React Native, TypeScript, Cloudflare Workers, and a sophisticated uninvasive recommendation system.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>PM Focus:</strong> Product vision balancing user wellbeing with technical scalability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-author font-bold mb-4 text-gradient">
                Co-founder to Team Lead
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Evolved from co-founding with designer to leading 3-person development team. Implemented Agile methodologies and Jira workflows.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>PM Focus:</strong> Team scaling, process improvement, stakeholder management.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Tech Stack & PM Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["React Native", "TypeScript", "Cloudflare Workers", "GraphQL", "End-to-end Encryption", "Jira", "Agile/Scrum"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 dark:bg-dark-300 text-primary-400 dark:text-dark-100 rounded-full text-sm font-medium border border-primary-200 dark:border-dark-400 hover-lift group cursor-pointer transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Mockups */}
          <div>
            <h3 className="text-2xl font-author font-bold mb-6 text-gradient">
              Product Features & User Experience
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center">
              {mockupData.map((mockup, index) => (
                <MobileMockup
                  key={mockup.alt}
                  src={mockup.src}
                  alt={mockup.alt}
                  caption={mockup.caption}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Evolution Cards */}
        <div className="mb-16 px-4">
          <h3 className="text-2xl font-author font-bold text-center mb-8 text-gradient">
            Leadership Evolution: From Music to Product Management
          </h3>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {leadershipCards.map((card, index) => (
                <LeadershipCard
                  key={card.title}
                  title={card.title}
                  challenge={card.challenge}
                  approach={card.approach}
                  skills={card.skills}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/Jai-Dhiman/capture"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <span>Explore Technical Deep-Dive</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button className="btn-secondary">
              View Product Roadmap
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            "Bringing creative problem-solving from music composition to product development,
            with proven ability to scale from individual contributor to team leader."
          </p>
        </div>
      </div>
    </section>
  );
}
