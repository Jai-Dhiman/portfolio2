import React, { useEffect, useRef, useMemo } from 'react';
import { Notebook, TowerControl, Database } from 'lucide-react';
import SpotlightCard from '../../styles/components/SpotlightCard/SpotlightCard';
import { useReducedMotion } from '../../hooks/useDarkMode';

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
    const particleCount = Math.min(20, Math.floor(canvas.offsetWidth / 40)); // Slightly more particles but still optimized
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
        vx: (Math.random() - 0.5) * 0.4, // Slightly faster than before
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1, // Slightly larger particles
        opacity: Math.random() * 0.4 + 0.2 // Better visibility
      });
    }

    let lastTime = 0;
    const targetFPS = 45; // Higher FPS for smoother animation
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

// Memoized PM Cards
const PMCards = React.memo(function PMCards() {
  const cardData = useMemo(() => [
    {
      icon: Notebook,
      title: "Product Strategy",
      description: "GitBook PRD • User Research • Competitive Analysis"
    },
    {
      icon: TowerControl,
      title: "Systems Thinking",
      description: "Miro Architecture • Technical Decisions • Data Flow"
    },
    {
      icon: Database,
      title: "Data-Driven PM",
      description: "Analytics • A/B Testing • Success Metrics"
    }
  ], []);

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
      {cardData.map((card, index) => (
        <SpotlightCard key={index} className="group transition-all duration-300">
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-dark-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
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
  );
});

// PM Teaser Component with floating background
export default function CaptureProjectSection() {
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
            <span className="text-gradient">Product Management Journey</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Practicing Product Management through building - applying PM frameworks while co-founding
            a privacy-first social platform for the Pinterest PM Apprenticeship.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-dark-300 rounded-full text-sm">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              Building toward Pinterest PM Apprenticeship 2025
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 rounded-full text-sm backdrop-blur-sm">
              <span className="text-accent-coral">🎯</span>
              Music → Tech transition story
            </div>
          </div>

          <PMCards />

          <a
            href="/product-manager"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3 hover-lift"
          >
            <span>View Full PM Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}