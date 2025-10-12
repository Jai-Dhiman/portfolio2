export async function onRequest({}) {
  const skills = [
    // ML Core (frameworks + techniques)
    { id: 1, name: "PyTorch", category: "ML Core", iconUrl: "/icons/pytorch.svg" },
    { id: 2, name: "JAX/Flax", category: "ML Core", iconUrl: "/icons/jax-flax.png" },
    { id: 3, name: "Hugging Face Transformers", category: "ML Core", iconUrl: "/icons/huggingface.png" },
    { id: 4, name: "PEFT/LoRA", category: "ML Core", iconUrl: "/icons/peft-lora.png" },
    { id: 6, name: "scikit-learn", category: "ML Core", iconUrl: "/icons/scikit.png" },
    { id: 21, name: "RAG systems", category: "ML Core", iconUrl: "/icons/langchain.png" },
    { id: 23, name: "Preference learning (DPO)", category: "ML Core" },
    { id: 24, name: "Recommendation systems", category: "ML Core" },
    { id: 19, name: "Audio Spectrogram Transformer (AST)", category: "ML Core", iconUrl: "/icons/ast.png" },

    // Programming & Data (languages + data tools)
    { id: 13, name: "Python", category: "Programming & Data", iconUrl: "/icons/python.svg" },
    { id: 15, name: "TypeScript", category: "Programming & Data", iconUrl: "/icons/typescript.svg" },
    { id: 14, name: "Rust", category: "Programming & Data", iconUrl: "/icons/rust.png" },
    { id: 16, name: "PostgreSQL", category: "Programming & Data", iconUrl: "/icons/postgres.png" },
    { id: 25, name: "NumPy", category: "Programming & Data", iconUrl: "/icons/numpy.svg" },
    { id: 37, name: "Pandas", category: "Programming & Data", iconUrl: "/icons/pandas.svg" },

    // Infrastructure & Deployment (cloud + systems)
    { id: 17, name: "GCP", category: "Infrastructure & Deployment", iconUrl: "/icons/gcp.svg" },
    { id: 7, name: "Modal (GPU inference)", category: "Infrastructure & Deployment", iconUrl: "/icons/modal.png" },
    { id: 8, name: "Docker", category: "Infrastructure & Deployment", iconUrl: "/icons/docker.svg" },
    { id: 9, name: "Kubernetes", category: "Infrastructure & Deployment", iconUrl: "/icons/kubernetes-original.svg" },
    { id: 12, name: "Weights & Biases", category: "Infrastructure & Deployment", iconUrl: "/icons/wandb.png" },
    { id: 18, name: "Redis", category: "Infrastructure & Deployment", iconUrl: "/icons/redis.svg" },
    { id: 26, name: "Cloudflare Workers", category: "Infrastructure & Deployment", iconUrl: "/icons/cloudflareworkers.svg" },
    { id: 38, name: "FastAPI", category: "Infrastructure & Deployment", iconUrl: "/icons/fastapi.svg" },
    { id: 39, name: "GitHub Actions (CI/CD)", category: "Infrastructure & Deployment", iconUrl: "/icons/cicd.svg" },

    // Product & Collaboration (full-stack + tools)
    { id: 33, name: "GitHub", category: "Product & Collaboration", iconUrl: "/icons/github.svg" },
    { id: 30, name: "Figma", category: "Product & Collaboration", iconUrl: "/icons/figma.svg" },
    { id: 31, name: "Linear", category: "Product & Collaboration", iconUrl: "/icons/linear.png" },
    { id: 34, name: "Notion", category: "Product & Collaboration", iconUrl: "/icons/notion.svg" },
    { id: 32, name: "Slack", category: "Product & Collaboration", iconUrl: "/icons/slack.svg" },
    { id: 35, name: "Amplitude", category: "Product & Collaboration", iconUrl: "/icons/amplitude.png" },
    { id: 40, name: "Google Colab", category: "Product & Collaboration", iconUrl: "/icons/colab.svg" },
    { id: 41, name: "Streamlit", category: "Product & Collaboration", iconUrl: "/icons/streamlit.svg" },
    { id: 42, name: "Jupyter Notebooks", category: "Product & Collaboration", iconUrl: "/icons/jupyter.svg" },
  ];
  return new Response(JSON.stringify(skills), { headers: { "content-type": "application/json" } });
}
