export async function onRequest({}) {
  
const projects = [
    {
      id: 1,
      title: "Capture",
      description: "Privacy-First Social Media Platform",
      techStack: ["React Native","TypeScript","Cloudflare Workers","GraphQL"],
      createdAt: "2024-06-01",
      image: "/images/Capture.png",
      githubUrl: "github.com/Jai-Dhiman/capture"
    },
    {
      id: 2,
      title: "Arden",
      description: "AI-Powered Personal Assistant",
      techStack: ["React Native","Cloudflare Workers","tRPC","Vector Embeddings"],
      createdAt: "2025-01-01",
      image: "/images/Arden.png",
      githubUrl: "github.com/Jai-Dhiman/Arden"
    },
    {
      id: 3,
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