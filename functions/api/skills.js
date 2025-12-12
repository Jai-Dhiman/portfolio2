export async function onRequest({}) {
	const skills = [
		// Audio ML (lead with audio-specific stack)
		{
			id: 50,
			name: "MERT",
			category: "Audio ML",
			iconUrl: "/icons/mert.png",
		},
		{
			id: 51,
			name: "Wav2Vec2",
			category: "Audio ML",
			iconUrl: "/icons/wav2vec.png",
		},
		{
			id: 52,
			name: "librosa",
			category: "Audio ML",
			iconUrl: "/icons/librosa.png",
		},
		{
			id: 53,
			name: "Spectrograms",
			category: "Audio ML",
			iconUrl: "/icons/spectrogram.png",
		},
		{
			id: 19,
			name: "Audio Spectrogram Transformer",
			category: "Audio ML",
			iconUrl: "/icons/ast.png",
		},
		{
			id: 54,
			name: "pretty_midi",
			category: "Audio ML",
			iconUrl: "/icons/midi.png",
		},
		{
			id: 55,
			name: "torchaudio",
			category: "Audio ML",
			iconUrl: "/icons/pytorch.svg",
		},
		{
			id: 56,
			name: "nnAudio",
			category: "Audio ML",
			iconUrl: "/icons/nnaudio.png",
		},
		{
			id: 57,
			name: "CQT/mel-spectrograms",
			category: "Audio ML",
			iconUrl: "/icons/spectrogram.png",
		},

		// ML Core (frameworks + techniques)
		{
			id: 1,
			name: "PyTorch",
			category: "ML Core",
			iconUrl: "/icons/pytorch.svg",
		},
		{
			id: 2,
			name: "JAX/Flax",
			category: "ML Core",
			iconUrl: "/icons/jax-flax.png",
		},
		{
			id: 3,
			name: "Hugging Face Transformers",
			category: "ML Core",
			iconUrl: "/icons/huggingface.png",
		},
		{
			id: 6,
			name: "scikit-learn",
			category: "ML Core",
			iconUrl: "/icons/scikit.png",
		},
		{
			id: 12,
			name: "Weights & Biases",
			category: "ML Core",
			iconUrl: "/icons/wandb.png",
		},
		{
			id: 61,
			name: "LoRA/DPO Fine-Tuning",
			category: "ML Core",
			iconUrl: "/icons/finetune.png",
		},

		// Search & Retrieval
		{
			id: 70,
			name: "Semantic Search",
			category: "Search & Retrieval",
			iconUrl: "/icons/search.png",
		},
		{
			id: 71,
			name: "Vector DB",
			category: "Search & Retrieval",
			iconUrl: "/icons/vectordb.png",
		},
		{
			id: 72,
			name: "RAG",
			category: "Search & Retrieval",
			iconUrl: "/icons/rag.png",
		},
		{
			id: 73,
			name: "Ranking Systems",
			category: "Search & Retrieval",
			iconUrl: "/icons/ranking.png",
		},

		// LLM/Alignment
		{
			id: 80,
			name: "Constitutional AI",
			category: "LLM/Alignment",
			iconUrl: "/icons/anthropic.png",
		},
		{
			id: 81,
			name: "RLHF/DPO",
			category: "LLM/Alignment",
			iconUrl: "/icons/rlhf.png",
		},
		{
			id: 82,
			name: "LangChain",
			category: "LLM/Alignment",
			iconUrl: "/icons/langchain.png",
		},
		{
			id: 83,
			name: "Multi-Agent Systems",
			category: "LLM/Alignment",
			iconUrl: "/icons/agents.png",
		},
		{
			id: 84,
			name: "Prompt Engineering",
			category: "LLM/Alignment",
			iconUrl: "/icons/prompt.png",
		},

		// Programming & Data (languages + data tools)
		{
			id: 13,
			name: "Python",
			category: "Programming & Data",
			iconUrl: "/icons/python.svg",
		},
		{
			id: 15,
			name: "TypeScript",
			category: "Programming & Data",
			iconUrl: "/icons/typescript.svg",
		},
		{
			id: 14,
			name: "Rust",
			category: "Programming & Data",
			iconUrl: "/icons/rust.png",
		},
		{
			id: 60,
			name: "C++",
			category: "Programming & Data",
			iconUrl: "/icons/cpp.png",
		},
		{
			id: 16,
			name: "SQL",
			category: "Programming & Data",
			iconUrl: "/icons/postgres.png",
		},
		{
			id: 25,
			name: "NumPy",
			category: "Programming & Data",
			iconUrl: "/icons/numpy.svg",
		},
		{
			id: 37,
			name: "Pandas",
			category: "Programming & Data",
			iconUrl: "/icons/pandas.svg",
		},
		{
			id: 38,
			name: "GraphQL",
			category: "Programming & Data",
			iconUrl: "/icons/graphql.svg",
		},

		// Infrastructure & Deployment (cloud + systems)
		{
			id: 7,
			name: "Modal",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/modal.png",
		},
		{
			id: 17,
			name: "GCP",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/gcp.svg",
		},
		{
			id: 58,
			name: "AWS",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/aws.svg",
		},
		{
			id: 8,
			name: "Docker",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/docker.svg",
		},
		{
			id: 9,
			name: "Kubernetes",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/kubernetes-original.svg",
		},
		{
			id: 18,
			name: "Redis",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/redis.svg",
		},
		{
			id: 26,
			name: "Cloudflare Workers",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/cloudflareworkers.svg",
		},
		{
			id: 38,
			name: "FastAPI",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/fastapi.svg",
		},
		{
			id: 39,
			name: "GitHub Actions",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/cicd.svg",
		},
		{
			id: 62,
			name: "PostgreSQL",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/postgres.png",
		},
		{
			id: 63,
			name: "CI/CD",
			category: "Infrastructure & Deployment",
			iconUrl: "/icons/cicd.svg",
		},

		// Product & Collaboration
		{
			id: 33,
			name: "GitHub",
			category: "Product & Collaboration",
			iconUrl: "/icons/github.svg",
		},
		{
			id: 30,
			name: "Figma",
			category: "Product & Collaboration",
			iconUrl: "/icons/figma.svg",
		},
		{
			id: 31,
			name: "Linear",
			category: "Product & Collaboration",
			iconUrl: "/icons/linear.png",
		},
		{
			id: 34,
			name: "Notion",
			category: "Product & Collaboration",
			iconUrl: "/icons/notion.svg",
		},
		{
			id: 42,
			name: "Jupyter",
			category: "Product & Collaboration",
			iconUrl: "/icons/jupyter.svg",
		},
		{
			id: 43,
			name: "Amplitude",
			category: "Product & Collaboration",
			iconUrl: "/icons/amplitude.png",
		},
		{
			id: 44,
			name: "Colab",
			category: "Product & Collaboration",
			iconUrl: "/icons/colab.svg",
		},
	];
	return new Response(JSON.stringify(skills), {
		headers: { "content-type": "application/json" },
	});
}
