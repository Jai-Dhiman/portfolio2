import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Users, Target, Zap, Shield, Brain, Github, TrendingUp, AlertTriangle, Calendar, MessageCircle, Lightbulb, Award, Compass, Code, ArrowRight, Smartphone, ChefHat, Camera, Utensils } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import GradientText from '../../styles/textAnimations/GradientText/GradientText';
import SpotlightCard from '../../styles/components/SpotlightCard/SpotlightCard';
import DataFlowParticles from '../background/DataFlowParticles';

const ProjectsSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Data Flow Particles Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <DataFlowParticles />
      </div>

      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16 lg:space-y-20"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-author font-bold leading-tight">
              <GradientText>Featured Projects</GradientText>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Building AI-powered applications from concept to deployment
            </p>
          </div>

          {/* Project 1: Capture */}
          <div className="space-y-16 mb-48">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Project Preview Image */}
              <div className="max-w-xs mx-auto lg:mx-0">
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <img 
                    src="/images/capture-feed.webp" 
                    alt="Capture Social Platform Feed"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </Tilt>
              </div>
              
              {/* Text Content */}
              <div className="text-center lg:text-left space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-author font-bold leading-tight">
                  <GradientText>Capture: Privacy-First Social Platform</GradientText>
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Building privacy-first social platform with AI-powered content discovery and ethical design
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-dark-400 p-4 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                    <div className="text-2xl font-bold text-accent-sage dark:text-accent-coral mb-1">20+</div>
                    <div className="text-sm text-primary-400 dark:text-dark-200">User Interviews</div>
                  </div>
                  <div className="bg-white dark:bg-dark-400 p-4 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                    <div className="text-2xl font-bold text-accent-sage dark:text-accent-coral mb-1">Beta</div>
                    <div className="text-sm text-primary-400 dark:text-dark-200">Near Launch</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {['React Native', 'TypeScript', 'Cloudflare Workers', 'Vector Embeddings'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <motion.a
                    href="https://github.com/Jai-Dhiman/capture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 px-4 py-2 text-sm hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                  <motion.a
                    href="https://capture-1.gitbook.io/capture-docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 px-4 py-2 text-sm hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileText className="w-4 h-4" />
                    Documentation
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Demo Video and Architecture */}
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
              {/* Left: Demo Video */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">AI Content Discovery Demo</h4>
                <div className="w-full h-auto">
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/-pnPIgEL2pI"
                        title="Capture Vector Embedding Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </Tilt>
                </div>
              </div>

              {/* Middle: Figma Design System */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Design System & UX</h4>
                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                  <img 
                    src="/images/figma.webp" 
                    alt="Design System Architecture"
                    className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-[16/9]"
                  />
                </Tilt>
              </div>

              {/* Right: System Architecture */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">System Architecture</h4>
                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                  <img 
                    src="/images/FeedSystemArchitecture.webp" 
                    alt="Capture Feed System Architecture"
                    className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-[16/9]"
                  />
                </Tilt>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <Brain className="w-8 h-8 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Vector Embedding Content Discovery</h4>
                    <p className="text-base text-primary-400 dark:text-dark-200">Built semantic search using sentence transformers + vector database for personalized content feeds</p>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard className="p-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="w-8 h-8 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Cross-Platform Mobile App</h4>
                    <p className="text-base text-primary-400 dark:text-dark-200">React Native app with design system, real-time features, and privacy-focused architecture</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Project 2: Piano Analysis */}
          <div className="space-y-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-author font-bold leading-tight">
                  <GradientText>Piano Performance Analysis: PercePiano Recreation</GradientText>
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Recreating academic research from scratch - building ML models to predict 19 perceptual dimensions from piano performance audio
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-dark-400 p-4 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                    <div className="text-2xl font-bold text-accent-sage dark:text-accent-coral mb-1">1202</div>
                    <div className="text-sm text-primary-400 dark:text-dark-200">Performance Dataset</div>
                  </div>
                  <div className="bg-white dark:bg-dark-400 p-4 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                    <div className="text-2xl font-bold text-accent-sage dark:text-accent-coral mb-1">19</div>
                    <div className="text-sm text-primary-400 dark:text-dark-200">Perceptual Dimensions</div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {['Python', 'JAX/Flax', 'Audio Processing', 'Deep Learning', 'Research Methods'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="flex justify-center lg:justify-start">
                  <motion.a
                    href="https://github.com/Jai-Dhiman/ml-learning/tree/main/piano-analysis-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Research Code
                  </motion.a>
                </div>
              </div>

              {/* Research Highlight */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                  <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Learning-Focused Research</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed mb-3">
                    Recreating the PercePiano research paper from scratch to understand every aspect of the ML pipeline - from dataset analysis to model implementation.
                  </p>
                  <p className="text-sm text-accent-sage dark:text-accent-coral">
                    Building everything from first principles for deep understanding of audio ML fundamentals.
                  </p>
                </div>
                
                <SpotlightCard className="p-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-base font-semibold mb-1">Key Achievement</h4>
                      <p className="text-sm text-primary-400 dark:text-dark-200">Phase 1 complete: Dataset analysis and audio preprocessing pipeline. Next: Single-task prediction models.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default ProjectsSection;