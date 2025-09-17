export async function onRequest({}) {
  const skills = [
    // Machine Learning & AI (exactly 6)
    { id: 7, name: "PyTorch & JAX/Flax", category: "Machine Learning & AI", iconUrl: "/icons/pytorch.svg" },
    { id: 8, name: "HuggingFace & Transformers", category: "Machine Learning & AI", iconUrl: "/icons/huggingface.png" },
    { id: 9, name: "LLM Integration & Fine-tuning", category: "Machine Learning & AI", iconUrl: "/icons/claude.svg" },
    { id: 10, name: "Model Evaluation & Testing", category: "Machine Learning & AI", iconUrl: "/icons/wandb.png" },
    { id: 11, name: "Vector Embeddings & Search", category: "Machine Learning & AI", iconUrl: "/icons/pinecone.png" },
    { id: 12, name: "RAG & Context Engineering", category: "Machine Learning & AI", iconUrl: "/icons/langchain.png" },

    // Full-Stack Development (exactly 6)
    { id: 13, name: "Python", category: "Full-Stack Development", iconUrl: "/icons/python.svg" },
    { id: 14, name: "C++ & Rust", category: "Full-Stack Development", iconUrl: "/icons/c++.svg" },
    { id: 15, name: "React & React Native", category: "Full-Stack Development", iconUrl: "/icons/react.svg" },
    { id: 16, name: "API Design & GraphQL", category: "Full-Stack Development", iconUrl: "/icons/graphql.svg" },
    { id: 17, name: "SQL & Database Design", category: "Full-Stack Development", iconUrl: "/icons/postgres.png" },
    { id: 18, name: "Serverless Functions", category: "Full-Stack Development", iconUrl: "/icons/cloudflareworkers.svg" },

    // Cloud & DevOps (exactly 6)
    { id: 19, name: "Docker & Kubernetes", category: "Cloud & DevOps", iconUrl: "/icons/docker.svg" },
    { id: 20, name: "AWS & GCP", category: "Cloud & DevOps", iconUrl: "/icons/aws.png" },
    { id: 21, name: "CI/CD Pipelines", category: "Cloud & DevOps", iconUrl: "/icons/ci-cd.png" },
    { id: 22, name: "Distributed Systems", category: "Cloud & DevOps", iconUrl: "/icons/redis.svg" },
    { id: 23, name: "Monitoring & Observability", category: "Cloud & DevOps", iconUrl: "/icons/grafana.svg" },
    { id: 24, name: "Data Pipelines", category: "Cloud & DevOps", iconUrl: "/icons/apacheairflow.svg" },

    // Product & Leadership (exactly 6)
    { id: 25, name: "Product Strategy", category: "Product & Leadership", iconUrl: "/icons/roadmap.png" },
    { id: 26, name: "User Research", category: "Product & Leadership", iconUrl: "/icons/user.png" },
    { id: 27, name: "Feature Prioritization", category: "Product & Leadership", iconUrl: "/icons/prioritization.png" },
    { id: 28, name: "Cross-functional Leadership", category: "Product & Leadership", iconUrl: "/icons/stakeholder.png" },
    { id: 29, name: "A/B Testing Frameworks", category: "Product & Leadership", iconUrl: "/icons/ab.png" },
    { id: 30, name: "Agile/Scrum", category: "Product & Leadership", iconUrl: "/icons/atlassian.png" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 
