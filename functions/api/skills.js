export async function onRequest({}) {
  const skills = [
    { id: 1, name: "React Native", category: "Frontend" },
    { id: 2, name: "React.js", category: "Frontend" },
    { id: 3, name: "TypeScript", category: "Frontend" },
    { id: 4, name: "TanStack Suite", category: "Frontend" },
    { id: 5, name: "Tailwind CSS", category: "Frontend" },
    { id: 6, name: "Zustand", category: "Frontend" },
    { id: 7, name: "Jotai", category: "Frontend" },
    { id: 8, name: "SvelteKit", category: "Frontend" },
    { id: 9, name: "Node.js", category: "Backend" },
    { id: 10, name: "Hono", category: "Backend" },
    { id: 11, name: "Cloudflare Workers", category: "Backend" },
    { id: 12, name: "Convex", category: "Backend" },
    { id: 13, name: "Ruby on Rails", category: "Backend" },
    { id: 14, name: "GraphQL", category: "Backend" },
    { id: 15, name: "Drizzle ORM", category: "Backend" },
    { id: 16, name: "CI/CD Pipelines", category: "Infrastructure & Tools" },
    { id: 17, name: "AWS/Cloudflare", category: "Infrastructure & Tools" },
    { id: 18, name: "Docker", category: "Infrastructure & Tools" },
    { id: 19, name: "Git", category: "Infrastructure & Tools" },
    { id: 20, name: "PostgreSQL", category: "Infrastructure & Tools" },
    { id: 21, name: "SQLite", category: "Infrastructure & Tools" },
    { id: 22, name: "Artillery", category: "Infrastructure & Tools" },
    { id: 23, name: "Claude Sonnet API Integration", category: "AI/ML" },
    { id: 24, name: "Vector Embeddings", category: "AI/ML" },
    { id: 25, name: "Semantic Search", category: "AI/ML" }
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 