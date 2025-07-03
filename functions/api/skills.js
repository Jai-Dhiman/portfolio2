export async function onRequest({}) {
  const skills = [
    { id: 1, name: "React Native", category: "Frontend", iconUrl: "/icons/react.svg" },
    { id: 2, name: "TypeScript", category: "Frontend", iconUrl: "/icons/typescript.svg" },
    { id: 3, name: "SvelteKit", category: "Frontend", iconUrl: "/icons/sveltekit.svg" },
    { id: 4, name: "Tailwind CSS", category: "Frontend", iconUrl: "/icons/tailwind.svg" },
    { id: 5, name: "TanStack Query", category: "Frontend", iconUrl: "/icons/react-query.svg" },
    { id: 6, name: "Zustand", category: "Frontend", iconUrl: "/icons/zustand.png" },
    { id: 7, name: "Node.js", category: "Backend", iconUrl: "/icons/nodejs.svg" },
    { id: 8, name: "Rust", category: "Backend", iconUrl: "/icons/rust.png" },
    { id: 9, name: "Cloudflare Workers", category: "Backend", iconUrl: "/icons/cloudflareworkers.svg" },
    { id: 10, name: "GraphQL", category: "Backend", iconUrl: "/icons/graphql.svg" },
    { id: 11, name: "tRPC", category: "Backend", iconUrl: "/icons/trpc.svg" },
    { id: 12, name: "Drizzle ORM", category: "Backend", iconUrl: "/icons/drizzle.png" },
    { id: 13, name: "Docker", category: "Infrastructure & Tools", iconUrl: "/icons/docker.svg" },
    { id: 14, name: "Git", category: "Infrastructure & Tools", iconUrl: "/icons/git.svg" },
    { id: 15, name: "Cloudflare", category: "Infrastructure & Tools", iconUrl: "/icons/cloudflare.svg" },
    { id: 16, name: "SQLite", category: "Infrastructure & Tools", iconUrl: "icons/sqlite.svg" },
    { id: 17, name: "Vite", category: "Infrastructure & Tools", iconUrl: "/icons/vite.svg" },
    { id: 18, name: "CI/CD Pipelines", category: "Infrastructure & Tools", iconUrl: "/icons/ci-cd.png" },
    { id: 19, name: "Vector Embeddings", category: "AI/ML", iconUrl: "/icons/vector.png" },
    { id: 20, name: "Semantic Search", category: "AI/ML", iconUrl: "/icons/search.png" },
    { id: 21, name: "Retrieval Augemented Generation", category: "AI/ML", iconUrl: "/icons/rag.png" },
    { id: 22, name: "Model Context Protocol", category: "AI/ML", iconUrl: "/icons/mcp.png" },
    { id: 23, name: "Claude Sonnet API", category: "AI/ML", iconUrl: "/icons/claude.svg" },
    { id: 24, name: "OpenAI API", category: "AI/ML", iconUrl: "/icons/openai.png" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 
