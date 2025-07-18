export async function onRequest({}) {
  const skills = [
    // Product Management
    { id: 1, name: "Agile/Scrum", category: "Product Management", iconUrl: "/icons/atlassian.png" },
    { id: 2, name: "Requirements Gathering", category: "Product Management", iconUrl: "/icons/requirements.png" },
    { id: 3, name: "Stakeholder Management", category: "Product Management", iconUrl: "/icons/stakeholder.png " },
    { id: 4, name: "User Research", category: "Product Management", iconUrl: "/icons/user.png" },
    { id: 5, name: "Product Roadmapping", category: "Product Management", iconUrl: "/icons/roadmap.png" },
    { id: 6, name: "A/B Testing", category: "Product Management", iconUrl: "/icons/ab.png" },
    
    // Technical Skills
    { id: 7, name: "React Native", category: "Technical Skills", iconUrl: "/icons/react.svg" },
    { id: 8, name: "TypeScript", category: "Technical Skills", iconUrl: "/icons/typescript.svg" },
    { id: 9, name: "Rust", category: "Technical Skills", iconUrl: "/icons/rust.png" },
    { id: 10, name: "Python", category: "Technical Skills", iconUrl: "/icons/python.svg" },
    { id: 11, name: "GraphQL", category: "Technical Skills", iconUrl: "/icons/graphql.svg" },
    { id: 12, name: "RESTful API's", category: "Technical Skills", iconUrl: "/icons/rest.png" },
    { id: 13, name: "AWS", category: "Technical Skills", iconUrl: "/icons/aws.png" },
    { id: 14, name: "Cloudflare Workers", category: "Technical Skills", iconUrl: "/icons/cloudflareworkers.svg" },
    { id: 15, name: "SQLite", category: "Technical Skills", iconUrl: "/icons/sqlite.svg" },
    { id: 16, name: "Git", category: "Technical Skills", iconUrl: "/icons/git.svg" },
    { id: 17, name: "Docker", category: "Technical Skills", iconUrl: "/icons/docker.svg" },
    { id: 18, name: "CI/CD Pipeline", category: "Technical Skills", iconUrl: "/icons/ci-cd.png" },
    
    // AI/ML
    { id: 19, name: "LLM API Integration", category: "AI/ML", iconUrl: "/icons/claude.svg" },
    { id: 20, name: "Vector Embeddings", category: "AI/ML", iconUrl: "/icons/vector.png" },
    { id: 21, name: "Semantic Search", category: "AI/ML", iconUrl: "/icons/search.png" },
    { id: 22, name: "RAG Systems", category: "AI/ML", iconUrl: "/icons/rag.png" },
    { id: 23, name: "Model Context Protocol", category: "AI/ML", iconUrl: "/icons/mcp.png" },
    { id: 24, name: "Context Engineering", category: "AI/ML", iconUrl: "/icons/context.png" },
    
    // Data & Analytics
    { id: 24, name: "SQL", category: "Data & Analytics", iconUrl: "/icons/sql.png" },
    { id: 25, name: "Performance Monitoring", category: "Data & Analytics", iconUrl: "/icons/performance.png" },
    { id: 26, name: "Data Visualization", category: "Data & Analytics", iconUrl: "/icons/data.png" },
    { id: 27, name: "User Behavior Analysis", category: "Data & Analytics", iconUrl: "/icons/behavior.png" },
    { id: 28, name: "Metrics & KPIs Definition", category: "Data & Analytics", iconUrl: "/icons/kpi.png" },
    { id: 29, name: "Statistical Analysis", category: "Data & Analytics", iconUrl: "/icons/stats.png" },
    
    // Tools
    { id: 30, name: "Jira", category: "Tools", iconUrl: "/icons/jira.svg" },
    { id: 31, name: "Figma", category: "Tools", iconUrl: "/icons/figma.svg" },
    { id: 32, name: "Notion", category: "Tools", iconUrl: "/icons/notion.svg" },
    { id: 33, name: "Slack", category: "Tools", iconUrl: "/icons/slack.svg" },
    { id: 34, name: "Linear", category: "Tools", iconUrl: "/icons/linear.png" },
    { id: 35, name: "Amplitude", category: "Tools", iconUrl: "/icons/amplitude.png" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 
