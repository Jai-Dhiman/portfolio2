export async function onRequest({}) {
  const skills = [
    { id: 1, name: "React", category: "Frontend", iconUrl: "/icons/react.svg" },
    { id: 2, name: "React Native", category: "Frontend", iconUrl: "/icons/react.svg" },
    { id: 3, name: "TypeScript", category: "Frontend", iconUrl: "/icons/typescript.svg" },
    { id: 4, name: "Tailwind CSS", category: "Frontend", iconUrl: "/icons/tailwind.svg" },
    { id: 5, name: "TanStack Query", category: "Frontend", iconUrl: "/icons/react-query.svg" },
    { id: 6, name: "Zustand", category: "Frontend", iconUrl: "/icons/zustand.png" },
    { id: 9, name: "Node.js", category: "Backend", iconUrl: "/icons/nodejs.svg" },
    { id: 10, name: "Hono", category: "Backend", iconUrl: "/icons/hono.svg" },
    { id: 11, name: "Cloudflare Workers", category: "Backend", iconUrl: "/icons/cloudflareworkers.svg" },
    { id: 14, name: "GraphQL", category: "Backend", iconUrl: "/icons/graphql.svg" },
    { id: 15, name: "tRPC", category: "Backend", iconUrl: "/icons/trpc.svg" },
    { id: 20, name: "Drizzle ORM", category: "Backend", iconUrl: "/icons/drizzle.png" },
    { id: 16, name: "CI/CD Pipelines", category: "Infrastructure & Tools", iconUrl: "/icons/ci-cd.png" },
    { id: 17, name: "Cloudflare", category: "Infrastructure & Tools", iconUrl: "/icons/cloudflare.svg" },
    { id: 18, name: "Docker", category: "Infrastructure & Tools", iconUrl: "/icons/docker.svg" },
    { id: 19, name: "Git", category: "Infrastructure & Tools", iconUrl: "/icons/git.svg" },
    { id: 21, name: "SQLite", category: "Infrastructure & Tools", iconUrl: "icons/sqlite.svg" },
    { id: 23, name: "Claude Sonnet API", category: "AI/ML", iconUrl: "/icons/claude.svg" },
    { id: 24, name: "Vector Embeddings", category: "AI/ML", iconUrl: "/icons/vector.png" },
    { id: 25, name: "Semantic Search", category: "AI/ML", iconUrl: "/icons/search.png" },
    { id: 38, name: "Vitest", category: "Infrastructure & Tools", iconUrl: "/icons/vitest.svg" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 