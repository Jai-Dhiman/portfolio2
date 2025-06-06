export async function onRequest({}) {
  // Replace this array with your portfolio projects
  const projects = [
    {
      id: 1,
      title: "Capture",
      description: "Privacy-First Social Media Platform",
      techStack: ["React Native","TypeScript","Cloudflare Workers","GraphQL"],
      createdAt: "2024-06-01",
      image: "/images/Capture.png"
    },
    {
      id: 2,
      title: "Arden",
      description: "AI-Powered Personal Assistant",
      techStack: ["React Native","Cloudflare Workers","Hono RPC","Vector Embeddings"],
      createdAt: "2025-01-01",
      image: "/images/Arden.png"
    }
  ];
  return new Response(JSON.stringify(projects), { headers: { "content-type": "application/json" } });
} 