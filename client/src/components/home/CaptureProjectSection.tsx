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
              <span className="text-sm font-semibold text-primary-400 dark:text-accent-gold">Challenge:</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{challenge}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-400 dark:text-accent-gold">Approach:</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{approach}</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-400 dark:text-accent-gold">PM Skills:</span>
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
      title: "Engineering Mindset → Product Thinking",
      challenge: "Initially focused on technical implementation without validating user needs",
      approach: "Conducting user interviews and applying PM frameworks to prioritize features based on user value over technical complexity",
      skills: "User research, hypothesis validation, problem-solution fit"
    },
    {
      title: "Building Features → Building Strategy",
      challenge: "Making product decisions based on assumptions rather than data",
      approach: "Learning to define success metrics, create user personas, and apply competitive analysis before building",
      skills: "Strategic frameworks, metrics definition, market positioning"
    },
    {
      title: "Individual Work → Team Leadership",
      challenge: "Scaling from 2-person founder team to structured development process",
      approach: "Implementing Agile ceremonies, cross-functional communication, and stakeholder alignment practices",
      skills: "Process design, team facilitation, stakeholder management"
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
            Learning Product Management Through Building
          </h3>
          <p className="text-md text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My journey from music performance to product strategy, applying PM frameworks while co-founding a privacy-first social platform
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-dark-300 rounded-full text-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Currently in development - Building my first product from 0→1
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Project Overview */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
                Problem Discovery & Strategy Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>The Challenge:</strong> What started as an Instagram clone evolved into exploring privacy-first social media after recognizing user dissatisfaction with invasive data practices.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>My PM Learning:</strong> Currently conducting user interviews to validate our hypothesis and applying competitive analysis frameworks from Aha! PM certification.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Next Steps:</strong> Implementing RICE prioritization and defining OKRs based on user research findings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
                Building PM Process & Team Culture
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Process Implementation:</strong> Introducing Agile/Scrum methodologies through Atlassian certification learnings - 2-week sprints, daily standups, and retrospectives.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Cross-functional Collaboration:</strong> Facilitating design-engineering alignment through structured workflows and open communication forums.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Lessons Learned:</strong> Balancing process adoption with team autonomy while maintaining product momentum.
              </p>
            </div>

            {/* Skills & Learning */}
            <div>
              <h4 className="text-lg font-semibold mb-3">PM Skills in Development</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "User Research", "Competitive Analysis", "Agile/Scrum",
                  "Jira Workflows", "Product Strategy",
                  "Cross-functional Leadership", "RICE Prioritization"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-100 dark:bg-dark-300 text-primary-400 dark:text-dark-100 rounded-full text-sm font-medium border border-primary-200 dark:border-dark-400 hover-lift group cursor-pointer transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                Building through Atlassian & Aha! PM certifications + hands-on application
              </p>
            </div>
          </div>

          {/* Right Column - Product Vision */}
          <div>
            <h3 className="text-2xl font-author font-bold mb-6 text-primary-600 dark:text-accent-gold">
              Core Features & Differentiation
            </h3>
            <div className="space-y-6 px-4">
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                className="w-full"
              >
                <div className="card group">
                  <div className="p-4">
                    <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                      Collections-First Organization
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Pinterest-inspired saving system with privacy controls - users can create private bookmarks, public themed collections, and collaborative group boards.
                    </p>
                  </div>
                </div>
              </Tilt>

              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                className="w-full"
              >
                <div className="card group">
                  <div className="p-4">
                    <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                      Privacy-by-Design Architecture
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Granular privacy controls, transparent data practices, and user-controlled recommendation settings prioritizing wellbeing over engagement.
                    </p>
                  </div>
                </div>
              </Tilt>

              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                className="w-full"
              >
                <div className="card group">
                  <div className="p-4">
                    <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                      Collaborative Discovery
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Shared collections for group planning (travel, events, projects) that prioritize meaningful connections over algorithmic content distribution.
                    </p>
                  </div>
                </div>
              </Tilt>

              <div className="p-3 bg-white/10 rounded-lg border border-primary-200/30 dark:border-dark-400/30 backdrop-blur-sm">
                <p className="text-xs text-primary-600 dark:text-accent-gold">
                  <strong>PM Insight:</strong> These features emerged from competitive analysis showing gaps in current privacy-focused platforms - they either sacrifice usability for privacy or lack collaborative features.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Evolution Cards */}
        <div className="mb-16 px-4">
          <h3 className="text-2xl font-author font-bold text-center mb-8 text-primary-600 dark:text-accent-gold">
            My Product Management Learning Journey
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

        {/* Product Screenshots */}
        <div className="mb-16">
          <h3 className="text-2xl font-author font-bold text-center mb-8 text-primary-600 dark:text-accent-gold">
            Key Features in Development
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Collections Feature */}
            <div className="text-center">
              <div className="aspect-[9/19] max-w-[200px] mx-auto mb-4 overflow-hidden rounded-xl shadow-lg bg-gray-100 dark:bg-dark-200">
                <img
                  src="/images/capture-collections.png"
                  alt="Collections and bookmarks with privacy controls"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                Collections & Privacy Controls
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pinterest-inspired organization with granular privacy settings for personal and collaborative collections.
              </p>
            </div>

            {/* Collaborative Feature */}
            <div className="text-center">
              <div className="aspect-[9/19] max-w-[200px] mx-auto mb-4 overflow-hidden rounded-xl shadow-lg bg-gray-100 dark:bg-dark-200">
                <img
                  src="/images/capture-collaboration.png"
                  alt="Collaborative travel planning collection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                Collaborative Discovery
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Shared collections for group planning that prioritize meaningful connections over algorithmic distribution.
              </p>
            </div>

            {/* Privacy Features */}
            <div className="text-center">
              <div className="aspect-[9/19] max-w-[200px] mx-auto mb-4 overflow-hidden rounded-xl shadow-lg bg-gray-100 dark:bg-dark-200">
                <img
                  src="/images/capture-notifications.png"
                  alt="Privacy-focused notifications and security features"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-semibold text-primary-600 dark:text-accent-coral mb-2">
                Transparent Communications
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clear, user-friendly notifications about privacy settings, security, and content moderation decisions.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-primary-200/30 dark:border-dark-400/30 backdrop-blur-sm text-sm">
              <span className="w-2 h-2 bg-primary-500 dark:bg-accent-gold rounded-full animate-pulse"></span>
              <span className="text-primary-600 dark:text-accent-gold">
                Screenshots from current development build - iterating based on user feedback
              </span>
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
              <span>View Technical Implementation</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            "Learning to think like a PM while building - combining creative problem-solving with systematic product methodologies."
          </p>
        </div>
      </div>
    </section>
  );
}
