export async function onRequest({}) {
  
const projects = [
    {
      id: 1,
      title: "Capture",
      description: "Privacy-First Social Media Platform",
      techStack: ["React Native","TypeScript","Cloudflare Workers","GraphQL"],
      createdAt: "2024-06-01",
      image: "/images/Capture.png",
      githubUrl: "github.com/Jai-Dhiman/capture",
      pm_problem_statement: "Placeholder: Describe the core user problem Capture addresses.",
      pm_user_needs: ["Placeholder: User need 1", "Placeholder: User need 2"],
      pm_solution: "Placeholder: Describe Capture's solution to the problem.",
      pm_feature_prioritization: "Placeholder: Explain the rationale behind feature choices for Capture.",
      pm_design_choices: "Placeholder: Discuss key UX/UI decisions made for Capture.",
      pm_technical_tradeoffs: "Placeholder: Detail any significant technical trade-offs considered.",
      pm_success_metrics: "Placeholder: How would/will success be measured for Capture?",
      pm_learnings: "Placeholder: Key takeaways or learnings from the Capture project.",
      case_study_link: "Placeholder: Link to full case study document (optional)",
      mockups: ["/images/Capture_mockup1.png", "/images/Capture_mockup2.png"]
    },
    {
      id: 2,
      title, "Portfolio",
      description: "This Portfolio Website",
      techStack: ["React", "Vite", "Tailwind CSS", "Cloudflare Pages"],
      createdAt: "2024-12-01",
      image: "/images/Portfolio.png",
      githubUrl: "github.com/Jai-Dhiman/portfolio2"
    },
    {
      id: 3,
      title: "Arden",
      description: "AI-Powered Personal Assistant",
      techStack: ["React Native","Cloudflare Workers","tRPC","Vector Embeddings"],
      createdAt: "2025-01-01",
      image: "/images/Arden.png",
      githubUrl: "github.com/Jai-Dhiman/Arden"
    },
    {
      id: 4,
      title: "Legacy Stories Blog",
      description: "Accessible blogging platform",
      techStack: ["Nuxt", "Typescript", "Supabase", "Tailwind CSS", "Pinia"],
      createdAt: "2024-05-01",
      image: "/images/BadeBlog.png",
      githubUrl: "github.com/Jai-Dhiman/badeblog",
      liveUrl: "www.myideasmywords.com"
    }
  ];
  return new Response(JSON.stringify(projects), { headers: { "content-type": "application/json" } });
} 
