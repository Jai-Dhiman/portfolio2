import { motion } from "framer-motion";
import { Brain, Github, Lightbulb } from "lucide-react";
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
          <div className="text-left">
            <h2 className="section-heading">Projects</h2>
          </div>


          {/* Project: Capture */}
          <div className="space-y-12 mb-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: text + small system design */}
              <div className="space-y-6">
                <div className="text-left space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-author font-bold leading-tight">
                    <GradientText>Capture: Privacy-First Social Platform</GradientText>
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Built personalized recommendation system with safety guardrails and evaluation for ethical content discovery.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 justify-start">
                    {['React Native', 'TypeScript', 'Cloudflare Workers', 'Vector Embeddings'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 justify-start">
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
                      href="https://www.captureapp.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 px-4 py-2 text-sm hover-lift"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Link</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Smaller System Design */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">System Design</h4>
                    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                      <img 
                        src="/images/FeedSystemArchitecture.webp" 
                        alt="Capture System Design"
                        className="w-full max-w-md h-auto rounded-xl shadow-2xl object-cover aspect-[16/9]"
                      />
                    </Tilt>
                  </div>
                </div>
              </div>

              {/* Right: Recommender System highlight (matches placement of other project boxes) */}
              <div className="space-y-6">
                <SpotlightCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Brain className="w-8 h-8 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Recommender System</h4>
                      <p className="text-base text-primary-400 dark:text-dark-200">Two-tower retrieval + ranking; evaluation with NDCG@K/AUC and A/B harness.</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>

          {/* Project: CrescendAI */}
          <div className="space-y-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="text-left space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-author font-bold leading-tight">
                  <GradientText>CrescendAI</GradientText>
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  AI-powered piano performance analysis and learning assistant.
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-start">
                  {['Python', 'JAX/Flax', 'Audio Processing', 'Deep Learning', 'Research Methods'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-start">
                  <motion.a
                    href="https://github.com/Jai-Dhiman/crescendai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                  <motion.a
                    href="https://crescend.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2 px-4 py-2 text-sm hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Live</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Research Highlight */}
              <div className="space-y-6">
                <SpotlightCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-8 h-8 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Research Focus</h4>
                      <ul className="list-disc pl-5 space-y-1 text-base text-primary-400 dark:text-dark-200">
                        <li>86M‑parameter AST for 19‑dimensional performance analysis</li>
                        <li>Rust edge preprocessing + GPU inference (Modal) for ~10–15s end‑to‑end analysis</li>
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
            </div>
          </div>
          </div>
          {/* Project: AI Safety Alignment */}
          <div className="space-y-12 mb-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="text-left space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-author font-bold leading-tight">
                  <GradientText>AI Safety Alignment</GradientText>
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Re-implementing Constitutional AI research.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-start">
                  {['PyTorch', 'scikit-learn', 'Python', 'W&B', 'JAX/Flax'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-200 dark:bg-gray-700 text-primary-500 dark:text-gray-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <motion.a
                    href="https://github.com/Jai-Dhiman/ml-learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm hover-lift"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                </div>
              </div>

              {/* Highlight Card */}
              <div className="space-y-6">
                <SpotlightCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-8 h-8 text-accent-sage dark:text-accent-coral mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Highlights</h4>
                      <ul className="list-disc pl-5 space-y-2 text-base text-primary-400 dark:text-dark-200">
                        <li>Safety Text Classifier with calibrated confidence; evaluates precision/recall/F1 on adversarial tests.</li>
                        <li>Gemma 7B‑IT fine‑tuning with LoRA; side‑by‑side evaluation and human feedback collection.</li>
                        <li>Critique/Revision workflow and full CAI with RLAIF (reward modeling + PPO), with rigorous safety benchmarks.</li>
                      </ul>
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
