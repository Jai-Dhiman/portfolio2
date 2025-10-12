import React, { useCallback, Suspense } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Users, Target, Zap, Code } from "lucide-react";
import GradientText from "../../styles/textAnimations/GradientText/GradientText";
import { useThemeDetection } from "../../hooks/useDarkMode";
import ErrorBoundary from "../ErrorBoundary";

// Lazy load the Lanyard component
const Lanyard = React.lazy(() => import("../Lanyard"));

export default function Hero() {
  const isDarkMode = useThemeDetection();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
  }, []);

  return (
    <section className="relative -mx-4 min-h-[calc(100vh-4rem)] flex items-center overflow-hidden justify-center">
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: {
              opacity: 0,
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: isDarkMode ? "#6B7F6B" : "#8B6F47", // Sage green for dark, cognac for light
              },
              links: {
                color: isDarkMode ? "#A69080" : "#B59B7A", // Taupe for dark, light cognac for light
                distance: 150,
                enable: true,
                opacity: isDarkMode ? 0.5 : 0.15,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: isDarkMode ? 40 : 25,
              },
              opacity: {
                value: isDarkMode ? 0.3 : 0.08,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Lanyard Animation - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-80 saturate-150">
          <ErrorBoundary fallback={<div />}>
            <Suspense fallback={<div />}>
              <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} fov={12} transparent={true} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-author font-bold mb-6">
            Hi, I'm <GradientText
              animationSpeed={6}
            >
              Jai Dhiman
            </GradientText>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            I like to build things and play music.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <a
              href="#timeline"
              className="btn-primary text-lg px-8 py-4 hover-lift inline-flex items-center gap-2"
            >
              <span>Currently Building</span>
              <Code className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}