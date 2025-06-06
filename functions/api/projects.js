export async function onRequest({}) {
  // Replace this array with your portfolio projects
  const projects = [
    {
      id: "1",
      title: "My Cool Project",
      description: "Built with React + Workers",
      techStack: ["React", "Vite", "Cloudflare Workers"]
    }
  ];
  return new Response(JSON.stringify(projects), { headers: { "content-type": "application/json" } });
} 