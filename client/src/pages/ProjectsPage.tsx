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

      {/* Page Hero */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-author font-bold mb-8"
          >
            <GradientText>Products I've Built & Shipped</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            From 0→1 product building: strategy, design, and code. Each project shows real user impact and cross-functional execution.
          </motion.p>
        </div>
      </section>

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

            {/* Project Content */}
            <div className="space-y-16">
              {/* Impact Metrics & CTA */}
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                {/* Left: Impact Metrics */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Impact & Progress</h3>
                  <div className="grid grid-cols-2 gap-6">
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
                  <div className="flex flex-wrap gap-6 pt-8">
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
              
              {/* Architecture Diagrams Side by Side */}
              <div>
                <h3 className="text-2xl font-semibold mb-12 text-center text-gray-700 dark:text-gray-300">Technical Architecture & Design</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Design System */}
                  <div>
                    <h4 className="text-lg font-medium mb-6 text-primary-400 dark:text-dark-200 text-center">Design System</h4>
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
                    <h4 className="text-lg font-medium mb-6 text-primary-400 dark:text-dark-200 text-center">System Architecture</h4>
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

            {/* Cross-Discipline Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-12 text-center text-gray-700 dark:text-gray-300">Cross-Discipline Execution</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <SpotlightCard className="p-8 text-center">
                  <Brain className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">Product Strategy</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">User research, privacy-first positioning, content discovery algorithms</p>
                </SpotlightCard>
                
                <SpotlightCard className="p-8 text-center">
                  <Compass className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">System Design</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">Vector embeddings, recommendation engine, scalable architecture</p>
                </SpotlightCard>
                
                <SpotlightCard className="p-8 text-center">
                  <Code className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">Full-Stack Development</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">React Native mobile app, Cloudflare Workers backend, AI/ML integration</p>
                </SpotlightCard>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project 2: FridgeAI */}
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
                <GradientText>FridgeAI: Computer Vision Recipe Generator</GradientText>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Learning project developing computer vision mobile app for ingredient recognition and AI-powered recipe generation using LLM integration and custom ML pipeline
              </p>
            </div>

            {/* Project Content */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left: Project Details */}
              <div className="space-y-12">
                {/* Impact Metrics */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Learning & Progress</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                      <div className="text-3xl font-bold text-accent-sage dark:text-accent-coral mb-2">End-to-End</div>
                      <div className="text-base text-primary-400 dark:text-dark-200">Product Development</div>
                    </div>
                    <div className="bg-white dark:bg-dark-400 p-6 rounded-xl border border-primary-200 dark:border-dark-300 shadow-lg">
                      <div className="text-3xl font-bold text-accent-sage dark:text-accent-coral mb-2">ML Pipeline</div>
                      <div className="text-base text-primary-400 dark:text-dark-200">In Development</div>
                    </div>
                  </div>
                </div>

                {/* Role & Timeline */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">My Role</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-base text-primary-400 dark:text-dark-200">
                      <Users className="w-5 h-5 text-accent-sage dark:text-accent-coral" />
                      <span>Solo Developer & Product Builder</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-primary-400 dark:text-dark-200">
                      <Calendar className="w-5 h-5 text-accent-sage dark:text-accent-coral" />
                      <span>Ongoing learning project</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-primary-400 dark:text-dark-200">
                      <Target className="w-5 h-5 text-accent-sage dark:text-accent-coral" />
                      <span>User research → MVP development</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Built With</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React Native', 'Python', 'Computer Vision', 'LLM Integration', 'Custom ML Pipeline'].map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-base font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <motion.button
                    className="btn-primary flex items-center gap-3 px-6 py-3 text-base hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Try Gradio Demo
                  </motion.button>
                </div>
              </div>

              {/* Right: Computer Vision Demo & Features */}
              <div className="space-y-8">
                {/* Fridge Recognition Demo */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Computer Vision Demo</h3>
                  <div className="w-full">
                    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                      <img 
                        src="/images/fridge.webp" 
                        alt="Fridge Ingredient Recognition with Boundary Boxes"
                        className="w-full h-auto rounded-xl shadow-2xl"
                      />
                    </Tilt>
                    <p className="text-sm text-primary-400 dark:text-dark-200 mt-3 text-center">AI-powered ingredient detection with boundary box recognition</p>
                  </div>
                </div>
                
                {/* Feature Cards */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Key Features</h3>
                  <div className="space-y-4">
                    <SpotlightCard className="p-4">
                      <div className="flex items-start gap-3">
                        <Camera className="w-6 h-6 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-base font-semibold mb-1">Image Recognition</h4>
                          <p className="text-sm text-primary-400 dark:text-dark-200">Custom ML pipeline for ingredient identification</p>
                        </div>
                      </div>
                    </SpotlightCard>
                    
                    <SpotlightCard className="p-4">
                      <div className="flex items-start gap-3">
                        <ChefHat className="w-6 h-6 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-base font-semibold mb-1">AI Recipe Generation</h4>
                          <p className="text-sm text-primary-400 dark:text-dark-200">LLM integration for personalized recipes</p>
                        </div>
                      </div>
                    </SpotlightCard>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Learning & Skills Development */}
            <div>
              <h3 className="text-2xl font-semibold mb-12 text-center text-gray-700 dark:text-gray-300">Learning & Skills Development</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <SpotlightCard className="p-8 text-center">
                  <Lightbulb className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">ML Pipeline Architecture</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">Learning to design end-to-end ML workflows, from data preprocessing to model deployment</p>
                </SpotlightCard>
                
                <SpotlightCard className="p-8 text-center">
                  <Code className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">Cross-Platform Development</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">Building mobile apps with camera integration, Python backends, and API orchestration</p>
                </SpotlightCard>
                
                <SpotlightCard className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-accent-sage dark:text-accent-coral mb-6 mx-auto" />
                  <h4 className="text-lg font-bold mb-4">Product Iteration</h4>
                  <p className="text-base text-primary-400 dark:text-dark-200 leading-relaxed">Rapid prototyping, user feedback integration, and balancing feature scope with technical constraints</p>
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