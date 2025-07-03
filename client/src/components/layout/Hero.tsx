import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import GradientText from "../../styles/textAnimations/GradientText/GradientText";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
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
                value: "#4338CA",
              },
              links: {
                color: "#818CF8",
                distance: 150,
                enable: true,
                opacity: 0.5,
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
                  area: 600,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
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
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto z-10">
          <h1 className="animate-fade-in text-3xl md:text-5xl font-author font-bold mb-6">
            Hi, I'm <GradientText
              lightColors={["#4338CA", "#818CF8", "#4338CA"]}
              darkColors={["#FFD93D", "#FF6B6B", "#FFD93D"]}
              animationSpeed={6}
            >
              Jai Dhiman
            </GradientText>
          </h1>
          <p className="text-xl animate-slide-up text-gray-700 dark:text-gray-300 max-w-3xl">
            Developer with a proven track record of independently shipping production-grade applications using AI-assisted workflows. Strong foundation in React Native, TypeScript, serverless infrastructure, and scalable backend design. Creator of Capture, a privacy-first mobile social app featuring encrypted messaging, semantic feeds, and CI/CD-enabled development. Passionate about building fast, learning fast, and solving real product problems from day one.
          </p>
        </div>
      </div>
    </section>
  );
}