import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Users, Target, Zap, Shield, Brain, Github, TrendingUp, AlertTriangle, Calendar, MessageCircle, Lightbulb, Award, Compass, Code, ArrowRight } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import GradientText from '../styles/textAnimations/GradientText/GradientText';
import SpotlightCard from '../styles/components/SpotlightCard/SpotlightCard';
import DataFlowParticles from '../components/background/DataFlowParticles';

const CaptureDeepDive = () => {
  return (
    <div className="relative py-16 min-h-screen overflow-hidden">
      {/* Data Flow Particles Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <DataFlowParticles />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-5xl font-author font-bold mb-6"
              >
                <GradientText>Capture: Privacy-First Social Platform</GradientText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8"
              >
                Building ethical social media with AI-powered content discovery and privacy by design
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Co-founder & Technical Product Lead</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>8 months, ongoing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>4-person team (2 engineers, 2 interns)</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6"
              >
                <motion.a
                  href="https://github.com/Jai-Dhiman/capture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 hover-lift w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 flex justify-center"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1500}
                transitionSpeed={1200}
                scale={1.02}
                className="inline-block"
              >
                <img
                  src="/images/capture-feed.png"
                  alt="Capture App Interface"
                  className="w-80 h-auto rounded-2xl shadow-2xl"
                />
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10" id="problem">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Current social media platforms prioritize engagement over user wellbeing,
              creating addictive experiences that harm mental health and privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <TrendingUp className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Market Opportunity</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    $159B social media market with growing demand for privacy-focused alternatives
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <AlertTriangle className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Privacy Concerns</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    78% of users are concerned about how their data is used, yet current platforms offer limited privacy controls
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Brain className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Technical Challenge</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Building personalized content discovery without invasive tracking requires innovative AI approaches
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10" id="solution">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
              Solution & Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Privacy-first social platform with ethical AI that prioritizes user wellbeing
              and meaningful connections over engagement metrics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Shield className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Privacy by Design</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Local data processing with edge computing ensures user data never leaves their device
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Brain className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Ethical AI</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vector embeddings for semantic content discovery without invasive tracking
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Users className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Meaningful Connections</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Focus on quality interactions and shared interests rather than viral content
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10" id="technical">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
              Technical Architecture
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Edge-first architecture with privacy-preserving vector embeddings and key technical decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1500}
                transitionSpeed={1200}
                scale={1.01}
                className="w-full"
              >
                <img
                  src="/images/FeedSystemArchitecture.png"
                  alt="Feed System Architecture"
                  className="w-full rounded-lg shadow-2xl"
                />
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">React Native Decision</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Chose React Native over native apps for rapid iteration and unified codebase
                    while maintaining native performance for core features
                  </p>
                </SpotlightCard>
              </Tilt>

              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Edge Computing Strategy</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cloudflare Workers for edge processing enables real-time features
                    while keeping sensitive data processing local
                  </p>
                </SpotlightCard>
              </Tilt>

              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">AI/ML Integration</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vector embeddings for semantic search and content recommendations
                    without compromising user privacy
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10" id="demo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
              Vector Embedding Demo
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Real-time semantic search and content discovery without invasive tracking
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1500}
                transitionSpeed={1200}
                scale={1.01}
                className="w-full"
              >
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    className="w-full h-full rounded-lg shadow-2xl"
                    src="https://www.youtube.com/embed/-pnPIgEL2pI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Semantic Search</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Users can discover content based on meaning and context, not just keywords
                  </p>
                </SpotlightCard>
              </Tilt>

              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Privacy-First AI</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vector embeddings processed locally ensure user data never leaves their device
                  </p>
                </SpotlightCard>
              </Tilt>

              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Performance Metrics</h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 90% faster content discovery</li>
                    <li>• 95% reduction in server requests</li>
                    <li>• Real-time semantic matching</li>
                    <li>• Zero user data collection</li>
                  </ul>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Product Strategy Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10" id="documentation">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
              Product Strategy & Research
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive product strategy document outlining market analysis, user research, and technical roadmap
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1500}
                transitionSpeed={1200}
                scale={1.01}
                className="w-full"
              >
                <img
                  src="/images/gitbook-preview.png"
                  alt="Product Strategy Documentation"
                  className="w-full rounded-lg shadow-2xl"
                />
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Market Analysis</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Deep dive into the $159B social media market and privacy-focused alternatives opportunity
                  </p>
                </SpotlightCard>
              </Tilt>

              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">User Research</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Comprehensive user interviews and behavioral analysis informing product decisions
                  </p>
                </SpotlightCard>
              </Tilt>

              <motion.a
                href="https://capture-1.gitbook.io/capture-docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 hover-lift w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                <span>Read Full Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10" id="leadership">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
              Team Leadership
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Managing a cross-functional team through iterative product development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Calendar className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Sprint Planning</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Led weekly sprints with clear priorities, balancing technical debt with feature development
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <MessageCircle className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Technical Communication</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Translated complex technical concepts into actionable product requirements and user stories
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Users className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Cross-functional Collaboration</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Coordinated between engineering, design, and business stakeholders to align on product vision
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Award className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Intern Mentorship</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Guided 2 interns through their first product development experience, focusing on learning and growth
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10" id="lessons">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-author font-bold mb-4 text-primary-600 dark:text-accent-gold">
              Lessons Learned
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Key insights from building a privacy-first social platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Compass className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Product-Market Fit</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Privacy concerns are growing, but users need compelling features beyond just privacy to switch platforms
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <Code className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">Technical Debt</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Prioritizing user experience over perfect architecture in early stages accelerated learning and iteration
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1200}
                transitionSpeed={1000}
                scale={1.01}
                className="w-full"
              >
                <SpotlightCard>
                  <ArrowRight className="w-12 h-12 text-primary-600 dark:text-accent-gold mb-4" />
                  <h3 className="text-xl font-author font-bold mb-3 text-primary-600 dark:text-accent-coral">What's Next</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Focus on community building features and user-generated content tools to drive organic growth
                  </p>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaptureDeepDive;