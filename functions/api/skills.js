export async function onRequest({}) {
  const skills = [
    // Machine Learning & AI (ordered by workflow: training → evaluation → deployment)
    { id: 1, name: "PyTorch & JAX/Flax", category: "Machine Learning & AI", iconUrl: "/icons/pytorch.svg" },
    { id: 2, name: "HuggingFace & Transformers", category: "Machine Learning & AI", iconUrl: "/icons/huggingface.png" },
    { id: 3, name: "LLM Integration & Fine-tuning", category: "Machine Learning & AI", iconUrl: "/icons/claude.svg" },
    { id: 4, name: "Model Evaluation & Testing", category: "Machine Learning & AI", iconUrl: "/icons/wandb.png" },
    { id: 5, name: "Vector Embeddings & Search", category: "Machine Learning & AI", iconUrl: "/icons/pinecone.png" },
    { id: 6, name: "RAG & Context Engineering", category: "Machine Learning & AI", iconUrl: "/icons/langchain.png" },
    
    // Full-Stack Development (ordered by stack: languages → frameworks → infrastructure)
    { id: 7, name: "Python", category: "Full-Stack Development", iconUrl: "/icons/python.svg" },
    { id: 8, name: "C++ & Rust", category: "Full-Stack Development", iconUrl: "/icons/c++.svg" },
    { id: 9, name: "React & React Native", category: "Full-Stack Development", iconUrl: "/icons/react.svg" },
    { id: 10, name: "API Design & GraphQL", category: "Full-Stack Development", iconUrl: "/icons/graphql.svg" },
    { id: 11, name: "SQL & Database Design", category: "Full-Stack Development", iconUrl: "/icons/postgres.png" },
    { id: 12, name: "Serverless Functions", category: "Full-Stack Development", iconUrl: "/icons/cloudflareworkers.svg" },
    
    // Cloud & DevOps (ordered by deployment workflow: containerization → orchestration → monitoring)
    { id: 13, name: "Docker & Kubernetes", category: "Cloud & DevOps", iconUrl: "/icons/docker.svg" },
    { id: 14, name: "AWS & GCP", category: "Cloud & DevOps", iconUrl: "/icons/aws.png" },
    { id: 15, name: "CI/CD Pipelines", category: "Cloud & DevOps", iconUrl: "/icons/ci-cd.png" },
    { id: 16, name: "Distributed Systems", category: "Cloud & DevOps", iconUrl: "/icons/redis.svg" },
    { id: 17, name: "Monitoring & Observability", category: "Cloud & DevOps", iconUrl: "/icons/grafana.svg" },
    { id: 18, name: "Data Pipelines", category: "Cloud & DevOps", iconUrl: "/icons/apacheairflow.svg" },
    
    // Product & Leadership (ordered by product workflow: strategy → research → execution → measurement)
    { id: 19, name: "Product Strategy", category: "Product & Leadership", iconUrl: "/icons/roadmap.png" },
    { id: 20, name: "User Research", category: "Product & Leadership", iconUrl: "/icons/user.png" },
    { id: 21, name: "Feature Prioritization", category: "Product & Leadership", iconUrl: "/icons/prioritization.png" },
    { id: 22, name: "Cross-functional Leadership", category: "Product & Leadership", iconUrl: "/icons/stakeholder.png" },
    { id: 23, name: "A/B Testing Frameworks", category: "Product & Leadership", iconUrl: "/icons/ab.png" },
    { id: 24, name: "Agile/Scrum", category: "Product & Leadership", iconUrl: "/icons/atlassian.png" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 
