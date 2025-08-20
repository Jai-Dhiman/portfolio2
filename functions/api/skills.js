export async function onRequest({}) {
  const skills = [
    // Machine Learning & AI
    { id: 1, name: "PyTorch & JAX/Flax", category: "Machine Learning & AI", iconUrl: "/icons/pytorch.svg" },
    { id: 2, name: "LLM Integration & Fine-tuning", category: "Machine Learning & AI", iconUrl: "/icons/claude.svg" },
    { id: 3, name: "Vector Embeddings & Search", category: "Machine Learning & AI", iconUrl: "/icons/pinecone.png" },
    { id: 4, name: "RAG & Context Engineering", category: "Machine Learning & AI", iconUrl: "/icons/langchain.png" },
    { id: 5, name: "Computer Vision APIs", category: "Machine Learning & AI", iconUrl: "/icons/opencv.svg" },
    { id: 6, name: "HuggingFace & Transformers", category: "Machine Learning & AI", iconUrl: "/icons/huggingface.png" },
    
    // Programming & Systems
    { id: 7, name: "Python", category: "Programming & Systems", iconUrl: "/icons/python.svg" },
    { id: 8, name: "C++ & Rust", category: "Programming & Systems", iconUrl: "/icons/c++.svg" },
    { id: 9, name: "TypeScript & JavaScript", category: "Programming & Systems", iconUrl: "/icons/typescript.svg" },
    { id: 10, name: "SQL & Database Design", category: "Programming & Systems", iconUrl: "/icons/postgres.png" },
    { id: 11, name: "React & React Native", category: "Programming & Systems", iconUrl: "/icons/react.svg" },
    { id: 12, name: "API Design & GraphQL", category: "Programming & Systems", iconUrl: "/icons/graphql.svg" },
    
    // Cloud & Infrastructure
    { id: 13, name: "AWS & GCP", category: "Cloud & Infrastructure", iconUrl: "/icons/aws.png" },
    { id: 14, name: "Docker & Kubernetes", category: "Cloud & Infrastructure", iconUrl: "/icons/docker.svg" },
    { id: 15, name: "Database Scaling", category: "Cloud & Infrastructure", iconUrl: "/icons/mongodb.svg" },
    { id: 16, name: "CI/CD Pipelines", category: "Cloud & Infrastructure", iconUrl: "/icons/ci-cd.png" },
    { id: 17, name: "Distributed Systems", category: "Cloud & Infrastructure", iconUrl: "/icons/redis.svg" },
    { id: 18, name: "MLOps & Experiment Tracking", category: "Cloud & Infrastructure", iconUrl: "/icons/mlflow.png" },
    
    // Data & Experimentation
    { id: 19, name: "A/B Testing Frameworks", category: "Data & Experimentation", iconUrl: "/icons/ab.png" },
    { id: 20, name: "Statistical Analysis", category: "Data & Experimentation", iconUrl: "/icons/numpy.svg" },
    { id: 21, name: "Model Evaluation & Testing", category: "Data & Experimentation", iconUrl: "/icons/wandb.png" },
    { id: 22, name: "Data Pipelines", category: "Data & Experimentation", iconUrl: "/icons/apacheairflow.svg" },
    { id: 23, name: "Metric Design", category: "Data & Experimentation", iconUrl: "/icons/grafana.svg" },
    { id: 24, name: "User Behavior Analysis", category: "Data & Experimentation", iconUrl: "/icons/amplitude.png" },
    
    // Product & Leadership
    { id: 25, name: "Product Strategy", category: "Product & Leadership", iconUrl: "/icons/roadmap.png" },
    { id: 26, name: "Cross-functional Leadership", category: "Product & Leadership", iconUrl: "/icons/stakeholder.png" },
    { id: 27, name: "User Research", category: "Product & Leadership", iconUrl: "/icons/user.png" },
    { id: 28, name: "Feature Prioritization", category: "Product & Leadership", iconUrl: "/icons/prioritization.png" },
    { id: 29, name: "Agile/Scrum", category: "Product & Leadership", iconUrl: "/icons/atlassian.png" },
    { id: 30, name: "Technical Documentation", category: "Product & Leadership", iconUrl: "/icons/notion.svg" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 
