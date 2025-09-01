import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Users, Target, Zap, Shield, Brain, Github, TrendingUp, AlertTriangle, Calendar, MessageCircle, Lightbulb, Award, Compass, Code, ArrowRight, Smartphone, ChefHat, Camera, Utensils } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import GradientText from '../styles/textAnimations/GradientText/GradientText';
import SpotlightCard from '../styles/components/SpotlightCard/SpotlightCard';
import DataFlowParticles from '../components/background/DataFlowParticles';
import YouTubeEmbed from '../components/YouTubeEmbed';

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Data Flow Particles Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <DataFlowParticles />
      </div>


      {/* Project 1: Capture */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16 lg:space-y-20"
          >
            {/* Project Header */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Project Preview Image */}
              <div className="max-w-xs mx-auto lg:mx-0 order-2 lg:order-1">
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <img 
                    src="/images/capture-feed.webp" 
                    alt="Capture Social Platform Feed"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </Tilt>
              </div>
              
              {/* Text Content */}
              <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-author font-bold leading-tight">
                  <GradientText>Capture: Privacy-First Social Platform</GradientText>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Building privacy-first social platform with AI-powered content discovery and ethical design
                </p>
                
                {/* Role & Timeline */}
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">My Role</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-primary-400 dark:text-dark-200">
                        <Users className="w-4 h-4 text-accent-sage dark:text-accent-coral" />
                        <span>Co-founder & Technical Product Lead</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-primary-400 dark:text-dark-200">
                        <Calendar className="w-4 h-4 text-accent-sage dark:text-accent-coral" />
                        <span>8 months, MVP shipped</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Built With</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React Native', 'TypeScript', 'Cloudflare Workers', 'Vector Embeddings'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content - Showing Full Product Lifecycle */}
            <div className="space-y-16">
              {/* Top Row: Impact & Demo */}
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                {/* Left: Impact & Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Impact & Progress</h3>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                      <div className="text-3xl font-bold text-accent-sage dark:text-accent-coral mb-2">20+</div>
                      <div className="text-base text-primary-400 dark:text-dark-200">User Interviews</div>
                    </div>
                    <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                      <div className="text-3xl font-bold text-accent-sage dark:text-accent-coral mb-2">Beta Launch</div>
                      <div className="text-base text-primary-400 dark:text-dark-200">Near Release</div>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-6">
                    <motion.a
                      href="https://github.com/Jai-Dhiman/capture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-3 px-6 py-3 text-base hover-lift"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                    <motion.a
                      href="https://capture-1.gitbook.io/capture-docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-3 px-6 py-3 text-base hover-lift"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FileText className="w-5 h-5" />
                      Technical Docs
                    </motion.a>
                  </div>
                </div>

                {/* Right: Demo Video */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">AI Content Discovery Demo</h3>
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
              </div>
              
              {/* Bottom Row: Full Product Lifecycle - Design & Architecture */}
              <div>
                <h3 className="text-2xl font-semibold mb-12 text-center text-gray-700 dark:text-gray-300">Complete Product Lifecycle: Design → Architecture → Code</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Design System */}
                  <div>
                    <h4 className="text-lg font-medium mb-6 text-primary-400 dark:text-dark-200 text-center">Design System & UX</h4>
                    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                      <img 
                        src="/images/figma.webp" 
                        alt="Design System Architecture"
                        className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-[16/9]"
                      />
                    </Tilt>
                  </div>
                  
                  {/* System Architecture */}
                  <div>
                    <h4 className="text-lg font-medium mb-6 text-primary-400 dark:text-dark-200 text-center">System Architecture & Implementation</h4>
                    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                      <img 
                        src="/images/FeedSystemArchitecture.webp" 
                        alt="Capture Feed System Architecture"
                        className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-[16/9]"
                      />
                    </Tilt>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-300">Key Deliverables</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          </motion.div>
        </div>
      </section>

      {/* Project 2: ChopAIn */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16 lg:space-y-20"
          >
            {/* Project Header */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-author font-bold leading-tight">
                <GradientText>ChopAIn: Constitutional AI for Piano Analysis</GradientText>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Building AI systems that understand musical expression - recreating academic research to predict 19 perceptual dimensions from piano performance audio
              </p>
            </div>

            {/* Project Content */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left: Project Details */}
              <div className="space-y-12">
                {/* Impact Metrics */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Research Progress</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                      <div className="text-3xl font-bold text-accent-sage dark:text-accent-coral mb-2">1202</div>
                      <div className="text-base text-primary-400 dark:text-dark-200">Performance Dataset</div>
                    </div>
                    <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                      <div className="text-3xl font-bold text-accent-sage dark:text-accent-coral mb-2">19</div>
                      <div className="text-base text-primary-400 dark:text-dark-200">Perceptual Dimensions</div>
                    </div>
                  </div>
                </div>

                {/* Role & Timeline */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">My Approach</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-base text-primary-400 dark:text-dark-200">
                      <Users className="w-5 h-5 text-accent-sage dark:text-accent-coral" />
                      <span>Solo Research & Implementation</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-primary-400 dark:text-dark-200">
                      <Calendar className="w-5 h-5 text-accent-sage dark:text-accent-coral" />
                      <span>Part of 8-month Constitutional AI learning path</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-primary-400 dark:text-dark-200">
                      <Target className="w-5 h-5 text-accent-sage dark:text-accent-coral" />
                      <span>Dataset analysis → Model training → Constitutional AI</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Built With</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'JAX/Flax', 'Audio Processing', 'Constitutional AI', 'ML Pipeline', 'Research Methods'].map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-base font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <motion.a
                    href="https://github.com/Jai-Dhiman/ml-learning/tree/main/piano-analysis-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3 px-6 py-3 text-base hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Research Code
                  </motion.a>
                </div>
              </div>

              {/* Right: Research Analysis & Features */}
              <div className="space-y-8">
                {/* Research Approach */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Constitutional AI Research</h3>
                  <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                    <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed mb-4">
                      This piano analysis work is part of my broader learning path in Constitutional AI and alignment research - building AI systems that are helpful, harmless, and honest.
                    </p>
                    <p className="text-sm text-accent-sage dark:text-accent-coral">
                      Learning to implement constitutional principles in AI systems through hands-on music analysis research.
                    </p>
                  </div>
                </div>
                
                {/* Key Insights */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Key Research Insights</h3>
                  <div className="space-y-4">
                    <SpotlightCard className="p-4">
                      <div className="flex items-start gap-3">
                        <Brain className="w-6 h-6 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-base font-semibold mb-1">Perceptual Dimensions</h4>
                          <p className="text-sm text-primary-400 dark:text-dark-200">Timing, articulation, pedal, emotion, interpretation - 19 measurable aspects of musical expression</p>
                        </div>
                      </div>
                    </SpotlightCard>
                    
                    <SpotlightCard className="p-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-6 h-6 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-base font-semibold mb-1">Dataset Recreation</h4>
                          <p className="text-sm text-primary-400 dark:text-dark-200">Rebuilding PercePiano research from scratch to understand ML fundamentals deeply</p>
                        </div>
                      </div>
                    </SpotlightCard>

                    <SpotlightCard className="p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-base font-semibold mb-1">Alignment Research Path</h4>
                          <p className="text-sm text-primary-400 dark:text-dark-200">Building toward Constitutional AI implementation with RLAIF methodology</p>
                        </div>
                      </div>
                    </SpotlightCard>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Research & Skills Development */}
            <div>
              <h3 className="text-2xl font-semibold mb-12 text-center text-gray-700 dark:text-gray-300">Research & Constitutional AI Learning</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <SpotlightCard className="p-8 text-center">
                  <Lightbulb className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">ML Research Methodology</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">Learning to reproduce academic papers, understand dataset construction, and implement research-quality code</p>
                </SpotlightCard>
                
                <SpotlightCard className="p-8 text-center">
                  <Shield className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">Constitutional AI Principles</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">Understanding alignment research through critique-revision systems and RLAIF methodology</p>
                </SpotlightCard>
                
                <SpotlightCard className="p-8 text-center">
                  <Brain className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">Domain Expertise</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">Combining music performance background with AI research to tackle novel analysis problems</p>
                </SpotlightCard>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;