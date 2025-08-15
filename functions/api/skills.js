export async function onRequest({}) {
  const skills = [
    // AI/ML Engineering
    { id: 1, name: "LLM Integration", category: "AI/ML Engineering", iconUrl: "/icons/claude.svg" },
    { id: 2, name: "Vector Embeddings", category: "AI/ML Engineering", iconUrl: "/icons/weaviate.png" },
    { id: 3, name: "Semantic Search", category: "AI/ML Engineering", iconUrl: "/icons/algolia.png" },
    { id: 4, name: "RAG Systems", category: "AI/ML Engineering", iconUrl: "/icons/langchain.png" },
    { id: 5, name: "Computer Vision", category: "AI/ML Engineering", iconUrl: "/icons/opencv.png" },
    { id: 6, name: "MLOps & Pipelines", category: "AI/ML Engineering", iconUrl: "/icons/mlflow.png" },
    
    // Product Management
    { id: 7, name: "Product Strategy", category: "Product Management", iconUrl: "/icons/roadmap.png" },
    { id: 8, name: "User Research", category: "Product Management", iconUrl: "/icons/user.png" },
    { id: 9, name: "Requirements Gathering", category: "Product Management", iconUrl: "/icons/requirements.png" },
    { id: 10, name: "Stakeholder Management", category: "Product Management", iconUrl: "/icons/stakeholder.png" },
    { id: 11, name: "Agile/Scrum", category: "Product Management", iconUrl: "/icons/atlassian.png" },
    { id: 12, name: "Feature Prioritization", category: "Product Management", iconUrl: "/icons/prioritization.png" },
    
    // Software Engineering
    { id: 13, name: "Python", category: "Software Engineering", iconUrl: "/icons/python.svg" },
    { id: 14, name: "TypeScript", category: "Software Engineering", iconUrl: "/icons/typescript.svg" },
    { id: 15, name: "C++", category: "Software Engineering", iconUrl: "/icons/c++.svg" },
    { id: 16, name: "React & React Native", category: "Software Engineering", iconUrl: "/icons/react.svg" },
    { id: 17, name: "GraphQL & REST APIs", category: "Software Engineering", iconUrl: "/icons/graphql.svg" },
    { id: 18, name: "Database Design", category: "Software Engineering", iconUrl: "/icons/postgres.png" },
    
    // Cloud & Infrastructure
    { id: 19, name: "AWS/GCP", category: "Cloud & Infrastructure", iconUrl: "/icons/aws.png" },
    { id: 20, name: "Docker & Containers", category: "Cloud & Infrastructure", iconUrl: "/icons/docker.svg" },
    { id: 21, name: "CI/CD Pipelines", category: "Cloud & Infrastructure", iconUrl: "/icons/ci-cd.png" },
    { id: 22, name: "Serverless Computing", category: "Cloud & Infrastructure", iconUrl: "/icons/cloudflareworkers.svg" },
    { id: 23, name: "API Design", category: "Cloud & Infrastructure", iconUrl: "/icons/rest.png" },
    { id: 24, name: "System Design", category: "Cloud & Infrastructure", iconUrl: "/icons/excalidraw.png" },
    
    // Data & Analytics
    { id: 25, name: "A/B Testing", category: "Data & Analytics", iconUrl: "/icons/ab.png" },
    { id: 26, name: "SQL & Data Modeling", category: "Data & Analytics", iconUrl: "/icons/sql.png" },
    { id: 27, name: "Performance Monitoring", category: "Data & Analytics", iconUrl: "/icons/performance.png" },
    { id: 28, name: "Data Visualization", category: "Data & Analytics", iconUrl: "/icons/data.png" },
    { id: 29, name: "User Behavior Analysis", category: "Data & Analytics", iconUrl: "/icons/behavior.png" },
    { id: 30, name: "KPIs & Metrics", category: "Data & Analytics", iconUrl: "/icons/kpi.png" },
    
    // Design & Tools
    { id: 31, name: "UI/UX Design", category: "Design & Tools", iconUrl: "/icons/figma.svg" },
    { id: 32, name: "Technical Documentation", category: "Design & Tools", iconUrl: "/icons/notion.svg" },
    { id: 33, name: "Project Management", category: "Design & Tools", iconUrl: "/icons/linear.png" },
    { id: 34, name: "Analytics & Insights", category: "Design & Tools", iconUrl: "/icons/amplitude.png" },
    { id: 35, name: "Version Control", category: "Design & Tools", iconUrl: "/icons/github.svg" },
    { id: 36, name: "Prototyping", category: "Design & Tools", iconUrl: "/icons/lovable.png" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
} 
