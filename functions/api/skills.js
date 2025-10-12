export async function onRequest({}) {
  const skills = [
    // ML Frameworks (expanded)
    { id: 1, name: "PyTorch", category: "ML Frameworks", iconUrl: "/icons/pytorch.svg" },
    { id: 2, name: "JAX/Flax", category: "ML Frameworks", iconUrl: "/icons/jax-flax.png" },
    { id: 3, name: "Hugging Face Transformers", category: "ML Frameworks", iconUrl: "/icons/huggingface.png" },
    { id: 4, name: "PEFT/LoRA", category: "ML Frameworks", iconUrl: "/icons/peft-lora.png" },
    { id: 5, name: "TRL", category: "ML Frameworks" },
    { id: 6, name: "scikit-learn", category: "ML Frameworks", iconUrl: "/icons/scikit.png" },
    { id: 25, name: "NumPy", category: "ML Frameworks", iconUrl: "/icons/numpy.svg" },

    // ML Systems (expanded)
    { id: 7, name: "Modal (GPU inference)", category: "ML Systems", iconUrl: "/icons/modal.png" },
    { id: 8, name: "Docker", category: "ML Systems", iconUrl: "/icons/docker.svg" },
    { id: 9, name: "Kubernetes (GKE)", category: "ML Systems", iconUrl: "/icons/kubernetes-original.svg" },
    { id: 10, name: "A/B testing", category: "ML Systems", iconUrl: "/icons/ab.png" },
    { id: 11, name: "Active learning", category: "ML Systems" },
    { id: 12, name: "Weights & Biases", category: "ML Systems", iconUrl: "/icons/wandb.png" },
    { id: 26, name: "Cloudflare Workers", category: "ML Systems", iconUrl: "/icons/cloudflareworkers.svg" },

    // Languages & Infrastructure (expanded)
    { id: 13, name: "Python", category: "Languages & Infrastructure", iconUrl: "/icons/python.svg" },
    { id: 14, name: "Rust", category: "Languages & Infrastructure", iconUrl: "/icons/rust.png" },
    { id: 15, name: "TypeScript", category: "Languages & Infrastructure", iconUrl: "/icons/typescript.svg" },
    { id: 16, name: "SQL/PostgreSQL", category: "Languages & Infrastructure", iconUrl: "/icons/postgres.png" },
    { id: 17, name: "GCP", category: "Languages & Infrastructure", iconUrl: "/icons/gcp.svg" },
    { id: 18, name: "Redis", category: "Languages & Infrastructure", iconUrl: "/icons/redis.svg" },

    // Specialized (expanded)
    { id: 19, name: "Audio Spectrogram Transformer (AST)", category: "Specialized", iconUrl: "/icons/ast.png" },
    { id: 20, name: "Mel-spectrograms", category: "Specialized", iconUrl: "/icons/mel-spectrogram.png" },
    { id: 21, name: "RAG systems", category: "Specialized", iconUrl: "/icons/langchain.png" },
    { id: 22, name: "Multi-task learning", category: "Specialized" },
    { id: 23, name: "Preference learning (DPO/LoRA)", category: "Specialized" },
    { id: 24, name: "Recommendation systems", category: "Specialized" },

    // Tools & Collaboration (new category)
    { id: 30, name: "Figma", category: "Tools & Collaboration", iconUrl: "/icons/figma.svg" },
    { id: 31, name: "Linear", category: "Tools & Collaboration", iconUrl: "/icons/linear.png" },
    { id: 32, name: "Slack", category: "Tools & Collaboration", iconUrl: "/icons/slack.svg" },
    { id: 33, name: "GitHub", category: "Tools & Collaboration", iconUrl: "/icons/github.svg" },
    { id: 34, name: "Notion", category: "Tools & Collaboration", iconUrl: "/icons/notion.svg" },
    { id: 35, name: "Amplitude", category: "Tools & Collaboration", iconUrl: "/icons/amplitude.png" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
}
