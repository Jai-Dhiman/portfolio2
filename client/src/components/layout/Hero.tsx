export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-author font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-gradient">Jai Dhiman</span>
        </h1>
        <p className="text-xl text-dark-100 dark:text-dark-400 animate-slide-up">
        I'm a Full-Stack Developer with strong foundations in React, Node.js, and TypeScript, combining analytical thinking with creative problem-solving to deliver scalable web applications.
        </p>
      </div>
    </section>
  );
}