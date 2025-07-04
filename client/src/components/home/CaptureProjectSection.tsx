import React, { useEffect, useRef, useMemo } from 'react';
import { Smartphone, Brain, Zap, Users, Database, Code, Shield, TrendingUp } from 'lucide-react';
import SpotlightCard from '../../styles/components/SpotlightCard/SpotlightCard';
import { useReducedMotion } from '../../hooks/useDarkMode';
import Tilt from 'react-parallax-tilt';

// Optimized Data Flow Particles Component
const DataFlowParticles = React.memo(function DataFlowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return; // Skip animation for reduced motion

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();

    // Optimized particle count for better performance
    const particleCount = Math.min(15, Math.floor(canvas.offsetWidth / 50)); // Reduced particles for better performance
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3, // Slower for better performance
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.2
      });
    }

    let lastTime = 0;
    const targetFPS = 30; // Lower FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

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

      lastTime = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  // Don't render canvas if reduced motion is preferred
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
});

// Tool Embed Component
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
      <SpotlightCard className="group min-h-[300px]">
        <div className="p-6">
          <h3 className="text-xl font-author font-bold mb-3 text-gradient">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {description}
          </p>

          {/* Embed or Fallback */}
          <div className="relative w-full aspect-[16/9] bg-gray-50 dark:bg-dark-100 rounded-lg overflow-hidden mb-4">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                title={title}
              />
            ) : fallbackImage ? (
              <img
                src={fallbackImage}
                alt={`${title} Preview`}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
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
      </SpotlightCard>
    </Tilt>
  );
}

// Screenshot Gallery Component
const ScreenshotGallery = React.memo(function ScreenshotGallery() {
  const screenshots = useMemo(() => [
    {
      src: "/images/capture-collections.png",
      alt: "Capture Collections Feature",
      title: "Collections & Organization"
    },
    {
      src: "/images/capture-collaboration.png",
      alt: "Capture Collaboration Feature",
      title: "Collaborative Features"
    },
    {
      src: "/images/capture-notifications.png",
      alt: "Capture Notifications",
      title: "Smart Notifications"
    }
  ], []);

  return (
    <div className="max-w-6xl mx-auto mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-author font-bold mb-2 text-primary-600 dark:text-accent-gold">
          Product Screenshots
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Key features of the Capture mobile application
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {screenshots.map((screenshot, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            perspective={1200}
            transitionSpeed={1000}
            scale={1.01}
            className="w-full"
          >
            <SpotlightCard className="group">
              <div className="p-4">
                <div className="relative w-full aspect-[1/2] bg-gray-50 dark:bg-dark-100 rounded-lg overflow-hidden mb-3">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-author font-semibold text-sm text-center text-gradient">
                  {screenshot.title}
                </h4>
              </div>
            </SpotlightCard>
          </Tilt>
        ))}
      </div>
    </div>
  );
});

// Combined Tech Stack & Architecture Cards with Mixed UI
const TechArchitectureCards = React.memo(function TechArchitectureCards() {
  const cardData = useMemo(() => [
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "React Native • Expo • TypeScript • Zustand",
      type: "primary",
      size: "large"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Vector DB • CLIP Embeddings • Recommendation Engine",
      type: "accent",
      size: "large"
    },
    {
      icon: Database,
      title: "Vector Database",
      description: "Qdrant for multi-modal embeddings, privacy-preserving recommendations",
      type: "secondary",
      size: "small"
    },
    {
      icon: Code,
      title: "Rust/WASM",
      description: "Compute-heavy operations, performance-critical algorithms",
      type: "secondary",
      size: "small"
    },
    {
      icon: Shield,
      title: "Privacy Architecture",
      description: "Transparent recommendations, user control over data",
      type: "secondary",
      size: "small"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Sub-100ms latency, 99.9% uptime, serverless architecture",
      type: "secondary",
      size: "small"
    }
  ], []);

  return (
    <div className="max-w-6xl mx-auto mb-8">
      {/* Top Row - Two Large Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {cardData.slice(0, 2).map((card, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={1200}
            transitionSpeed={1000}
            scale={1.02}
            className="w-full"
          >
            <SpotlightCard className="group transition-all duration-300 min-h-[200px]">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${card.type === 'primary'
                      ? 'bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900'
                      : 'bg-gradient-to-br from-accent-coral/20 to-accent-gold/20 dark:from-accent-coral/30 dark:to-accent-gold/30'
                    }`}>
                    <card.icon className={`w-8 h-8 ${card.type === 'primary'
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-accent-coral dark:text-accent-gold'
                      }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-author font-bold text-xl mb-3 text-gradient">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Tilt>
        ))}
      </div>

      {/* Bottom Row - Four Compact Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.slice(2).map((card, index) => (
          <SpotlightCard key={index + 2} className="group transition-all duration-300 hover:scale-105">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-300 dark:to-dark-400 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <card.icon className="text-primary-600 dark:text-accent-gold w-6 h-6" />
              </div>
              <h3 className="font-author font-bold text-lg mb-2 text-gradient">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
});

// Capture Project Section
export default function CaptureProjectSection() {
  // Tool Integration Data
  const tools = [
    {
      title: "GitBook Technical Documentation",
      description: "Comprehensive technical architecture, API documentation, and recommendation system implementation details.",
      embedUrl: "", // You can add your GitBook embed URL here
      fallbackImage: "/images/gitbook-preview.png"
    }
  ];

  return (
    <section className="pt-16 pb-4 relative overflow-hidden">
      {/* Data Flow Particles Background */}
      <div className="absolute inset-0 opacity-20">
        <DataFlowParticles />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-author font-bold mb-4">
            <span className="text-gradient">Capture</span>
            <span className="text-gray-700 dark:text-gray-300"> - Privacy-First Social Platform</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-6">
            Co-founding and building a full-stack mobile app that reimagines social media through AI-powered
            recommendations, serverless architecture, and a focus on mental wellbeing. Currently leading a 4-person
            team toward beta launch.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-dark-300 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Co-founder & Technical Lead
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 rounded-full text-sm backdrop-blur-sm">
              <span className="text-accent-coral">🚀</span>
              Beta-ready • Vector DB • Rust/WASM
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 rounded-full text-sm backdrop-blur-sm">
              <span className="text-accent-coral">🎯</span>
              AI-driven development with Claude + MCP
            </div>
          </div>

          <ScreenshotGallery />

          <TechArchitectureCards />

          {/* Documentation Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <ToolEmbed {...tools[0]} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Jai-Dhiman/capture"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3 hover-lift"
            >
              <span>View on GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://capture-1.gitbook.io/capture-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-3 hover-lift"
            >
              <span>Technical Docs</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}