import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);

  return (
    <section className="relative -mx-4 min-h-[calc(100vh-4rem)] flex items-center justify-center">
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
          <h1 className="animate-fade-in">
            Hi, I'm <span className="text-gradient">Jai Dhiman</span>
          </h1>
          <p className="text-xl animate-slide-up">
            Aspiring Product Manager from a non-traditional background bringing creative innovation to user-centered product development. Proven ability to conduct user research, lead cross-functional teams, and build products prioritizing user well-being.
          </p>
        </div>
      </div>
    </section>
  );
}