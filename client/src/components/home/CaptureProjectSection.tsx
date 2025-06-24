import React, { useEffect, useRef } from 'react';

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
            Learning Product Management through building - applying PM frameworks while co-founding
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

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
            <div className="card group hover-lift transition-all duration-300">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-dark-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-accent-gold text-xl">📋</span>
                </div>
                <h3 className="font-author font-bold text-lg mb-2 text-gradient">
                  Product Strategy
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  GitBook PRD • User Research • Competitive Analysis
                </p>
              </div>
            </div>

            <div className="card group hover-lift transition-all duration-300">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-dark-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-accent-gold text-xl">🏗️</span>
                </div>
                <h3 className="font-author font-bold text-lg mb-2 text-gradient">
                  Systems Thinking
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Miro Architecture • Technical Decisions • Data Flow
                </p>
              </div>
            </div>

            <div className="card group hover-lift transition-all duration-300">
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-dark-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-accent-gold text-xl">📊</span>
                </div>
                <h3 className="font-author font-bold text-lg mb-2 text-gradient">
                  Data-Driven PM
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Analytics • A/B Testing • Success Metrics
                </p>
              </div>
            </div>
          </div>

          <a
            href="/product-manager"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3 hover-lift"
          >
            <span>View Full PM Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 