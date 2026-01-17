import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../../lib/api";
import { Skill } from "../../types";
import TimelineItem from "./TimelineItem";
import SkillCluster from "./SkillCluster";
import MusicStaffBackground from "../../styles/backgrounds/MusicStaffBackground";
import Loader from "../loader";
import { ExternalLink, Github, Music, Cpu, Trophy, Award } from "lucide-react";

const Timeline = () => {
	const { data: skills, isLoading: skillsLoading } = useQuery({
		queryKey: ["skills"],
		queryFn: getSkills,
	});

	if (skillsLoading) {
		return <Loader />;
	}

	// Group skills by category
	const skillsByCategory =
		skills?.reduce((acc: { [key: string]: Skill[] }, skill) => {
			if (!acc[skill.category]) {
				acc[skill.category] = [];
			}
			acc[skill.category].push(skill);
			return acc;
		}, {}) || {};

	// Define timeline data with narrative descriptions
	const timelineItems = [
		{
			date: "December 2024",
			endDate: "August 2025",
			title: "Founding Engineer",
			subtitle: "Capture",
			description:
				"Built privacy-focused social platform from 0 to 50 beta users as sole engineer. Architected hybrid recommendation system and distributed ML infrastructure.",
			highlights: [
				"Hybrid recommendation system combining semantic search (Qdrant vector DB) with collaborative filtering; achieved 0.68 Recall@5 on cold-start users.",
				"Production ML infrastructure: embedding pipeline, ranking metrics framework (Recall@K, MRR, NDCG), automated backtesting, and A/B testing for model iteration.",
				"Distributed backend handling 10K+ req/min with 50ms p99 latency: Cloudflare Workers, GraphQL (Apollo), Redis caching, circuit breakers for fault tolerance.",
			],
			image: "/images/FeedSystemArchitecture.webp",
			imageLabel: "System Design:",
			logo: "/icons/capture.png",
			githubUrl: "https://github.com/Jai-Dhiman/capture",
			liveUrl: "https://www.captureapp.org",
			isProject: true,
			isLeft: true,
			wide: true,
		},
		{
			date: "October 2025",
			title: "Electricity Price Prediction",
			subtitle: "Inception Buildathon - 1st Place",
			description:
				"Built transformer-based ML model for wholesale energy price prediction. Designed time-series architecture for market arbitrage across CAISO/ERCOT markets.",
			highlights: [
				"Transformer architecture for energy price forecasting.",
				"Time-series model for cross-market arbitrage opportunities.",
				"1st place finish at Inception Buildathon.",
			],
			logo: "/icons/inception.png",
			isProject: true,
			isLeft: false,
		},
		{
			date: "August 2025",
			title: "Constitutional AI Implementation",
			subtitle: "AI Safety Research",
			description:
				"Implemented complete pipeline from Anthropic papers: safety classifier, supervised fine-tuning, and DPO alignment on Gemma 2B.",
			highlights: [
				"Safety classifier with 85% accuracy and 0.89 AUROC.",
				"Full pipeline: safety classification, supervised fine-tuning, DPO alignment.",
				"Open-source implementation and evaluation scripts.",
			],
			logo: "/icons/anthropic.png",
			githubUrl: "https://github.com/Jai-Dhiman/ml-learning",
			isProject: true,
			isLeft: true,
		},
		{
			date: "May 2025",
			endDate: "July 2025",
			title: "Software Engineering Intern",
			subtitle: "Southern Glazer's Wine & Spirits",
			description:
				"Automated CI/CD pipeline with GitHub Actions + Docker, reducing deployment time from 2 hours to 15 minutes at $26B enterprise.",
			highlights: [
				"CI/CD automation with GitHub Actions and Docker.",
				"Enterprise-scale deployment optimization.",
			],
			logo: "/icons/southern.png",
			isProject: false,
			isLeft: true,
		},
		{
			date: "June 2024",
			endDate: "December 2024",
			title: "Full-Stack Development",
			subtitle: "Actualize Coding Bootcamp",
			description:
				"Full-stack development + CS fundamentals. Self-directed ML specialization (Fast.ai, Karpathy Neural Networks).",
			highlights: [
				"Full-stack web development with modern frameworks.",
				"Self-directed ML specialization and CS fundamentals.",
			],
			logo: "/icons/actualize.png",
			isProject: false,
			isLeft: false,
		},
	];

	return (
		<div className="relative">
			{/* Music staff background */}
			<MusicStaffBackground />

			<div className="relative z-10 container mx-auto px-4 py-16">
				{/* Featured Project - CrescendAI */}
				<section
					id="featured-project"
					className="max-w-4xl mx-auto mb-20 scroll-mt-20"
				>
					<div className="text-center mb-8">
						<span className="text-sm font-medium text-primary-400 dark:text-accent-sage uppercase tracking-wider">
							Featured Project
						</span>
					</div>

					<div className="card p-8 md:p-10">
						<div className="flex items-start gap-4 mb-6">
							<img
								src="/icons/crescendai.png"
								alt="CrescendAI"
								className="w-16 h-16 rounded-xl object-contain"
							/>
							<div>
								<h2 className="text-2xl md:text-3xl font-author font-bold text-gray-900 dark:text-white">
									CrescendAI
								</h2>
								<p className="text-primary-400 dark:text-accent-sage font-medium">
									AI-Powered Piano Performance Evaluation
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									September 2025 - Present
								</p>
							</div>
						</div>

						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
							AI-powered piano performance evaluation for students in
							underserved markets. Validated product need through interviews
							with 12 music educators and 20+ students.
						</p>

						<div className="mb-6">
							<h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
								Technical Architecture
							</h3>
							<ul className="space-y-2 text-gray-700 dark:text-gray-300">
								<li className="flex items-start gap-2">
									<Cpu className="w-5 h-5 text-primary-400 dark:text-accent-sage flex-shrink-0 mt-0.5" />
									<span>
										Achieved R²=0.455 on PercePiano benchmark, surpassing published symbolic SOTA (0.397) by 15%
									</span>
								</li>
								<li className="flex items-start gap-2">
									<Cpu className="w-5 h-5 text-primary-400 dark:text-accent-sage flex-shrink-0 mt-0.5" />
									<span>
										MERT-330M audio foundation model with learned temporal aggregation; 13+ ablation experiments validating architecture (layer selection, pooling strategies, loss functions)
									</span>
								</li>
								<li className="flex items-start gap-2">
									<Cpu className="w-5 h-5 text-primary-400 dark:text-accent-sage flex-shrink-0 mt-0.5" />
									<span>
										Hybrid RAG system combining BM25 + dense vectors with Reciprocal Rank Fusion for piano pedagogy feedback with citable responses
									</span>
								</li>
								<li className="flex items-start gap-2">
									<Cpu className="w-5 h-5 text-primary-400 dark:text-accent-sage flex-shrink-0 mt-0.5" />
									<span>
										Edge-first architecture: Rust/WASM frontend, Cloudflare Workers orchestration, HF Inference Endpoints
									</span>
								</li>
							</ul>
						</div>

						<div className="flex flex-wrap gap-3 mb-6">
							{[
								"PyTorch",
								"MERT-330M",
								"Rust/WASM",
								"Cloudflare Workers",
								"librosa",
								"nnAudio",
							].map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 text-sm bg-primary-100 dark:bg-dark-300 text-primary-500 dark:text-dark-100 rounded-full"
								>
									{tech}
								</span>
							))}
						</div>

						<div className="flex flex-wrap gap-4">
							<a
								href="https://crescend.ai"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary px-6 py-3 inline-flex items-center gap-2 hover-lift"
							>
								<ExternalLink className="w-4 h-4" />
								<span>Visit crescend.ai</span>
							</a>
							<a
								href="https://github.com/Jai-Dhiman/crescendai"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-secondary px-6 py-3 inline-flex items-center gap-2 hover-lift"
							>
								<Github className="w-4 h-4" />
								<span>GitHub</span>
							</a>
						</div>

						<p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
							Active research project. Targeting ISMIR 2026.
						</p>
					</div>
				</section>

				{/* Audio ML Skills */}
				{skillsByCategory["Audio ML"] && (
					<div className="max-w-4xl mx-auto mb-16">
						<SkillCluster
							category="Audio ML"
							skills={skillsByCategory["Audio ML"]}
							hideIcons
						/>
					</div>
				)}

				{/* Projects Section */}
				<section id="projects" className="max-w-6xl mx-auto mb-20 scroll-mt-20">
					<h2 className="text-2xl font-author font-bold text-center text-gray-900 dark:text-white mb-12">
						Projects & Experience
					</h2>

					{/* Timeline items */}
					<div className="space-y-8">
						{timelineItems.map((item, index) => (
							<div key={index}>
								<TimelineItem {...item} />

								{/* Insert skill clusters after certain timeline items */}
								{index === 0 && skillsByCategory["ML Core"] && (
									<SkillCluster
										category="ML Core"
										skills={skillsByCategory["ML Core"]}
									/>
								)}
								{index === 2 &&
									skillsByCategory["Infrastructure & Deployment"] && (
										<SkillCluster
											category="Infrastructure & Deployment"
											skills={skillsByCategory["Infrastructure & Deployment"]}
										/>
									)}
								{index === 4 && skillsByCategory["Programming & Data"] && (
									<SkillCluster
										category="Programming & Data"
										skills={skillsByCategory["Programming & Data"]}
									/>
								)}
							</div>
						))}
					</div>

					{/* Hackathon Wins */}
					<div className="mt-16 max-w-4xl mx-auto">
						<h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-6">
							Hackathons
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="card p-4 text-center hover-lift">
								<Trophy className="w-6 h-6 mx-auto mb-2 text-primary-400 dark:text-accent-sage" />
								<p className="font-medium text-gray-900 dark:text-white">
									Meta Executorch
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									On-device ML
								</p>
							</div>
							<div className="card p-4 text-center hover-lift">
								<Award className="w-6 h-6 mx-auto mb-2 text-primary-400 dark:text-accent-sage" />
								<p className="font-medium text-gray-900 dark:text-white">
									Inception Buildathon
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									1st Overall
								</p>
							</div>
							<div className="card p-4 text-center hover-lift">
								<Trophy className="w-6 h-6 mx-auto mb-2 text-primary-400 dark:text-accent-sage" />
								<p className="font-medium text-gray-900 dark:text-white">
									Man vs Machine
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Creative AI Applications Track
								</p>
							</div>
						</div>
						<p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
							Invited participant at xAI and Y-Combinator Agent Mail hackathons. Active in SF AI/ML developer community.
						</p>
					</div>
				</section>

				{/* About Section */}
				<section id="about" className="max-w-4xl mx-auto mb-20 scroll-mt-20">
					<h2 className="text-2xl font-author font-bold text-center text-gray-900 dark:text-white mb-8">
						About
					</h2>

					<div className="card p-8 md:p-10">
						<div className="flex flex-col md:flex-row gap-8 items-start">
							<div className="flex-1">
								<div className="flex items-center gap-3 mb-4">
									<Music className="w-6 h-6 text-primary-400 dark:text-accent-sage" />
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										Musician First
									</h3>
								</div>
								<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
									I graduated from Berklee College of Music with a Bachelor's in
									Performance, concentrating in classical percussion. Over four
									years, I performed in 100+ concerts and completed two
									international orchestra tours. Music taught me discipline,
									attention to nuance, and how to communicate complex ideas.
								</p>

								<div className="flex items-center gap-3 mb-4">
									<Cpu className="w-6 h-6 text-primary-400 dark:text-accent-sage" />
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										Engineer Now
									</h3>
								</div>
								<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
									After Berklee, I dove into software engineering through
									Actualize and self-directed ML specialization (Fast.ai,
									Karpathy Neural Networks). I learned to build production
									systems, then specialized in ML engineering. Now I focus on
									audio ML, where my musical background gives me an edge in
									understanding what models need to learn.
								</p>
							</div>

							<div className="md:w-64 flex-shrink-0">
								<div className="card p-6 bg-primary-100/50 dark:bg-dark-400/50">
									<div className="flex items-center gap-3 mb-3">
										<img
											src="/icons/berklee.png"
											alt="Berklee College of Music"
											className="w-10 h-10 object-contain rounded-lg"
											loading="lazy"
											decoding="async"
										/>
										<h4 className="font-semibold text-gray-900 dark:text-white">
											Berklee Highlights
										</h4>
									</div>
									<p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
										May 2020 - December 2023
									</p>
									<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
										<li className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-accent-sage"></span>
											Bachelor of Music in Performance
										</li>
										<li className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-accent-sage"></span>
											Classical Percussion concentration
										</li>
										<li className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-accent-sage"></span>
											5x Dean's List
										</li>
										<li className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-accent-sage"></span>
											100+ performances
										</li>
										<li className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-accent-sage"></span>
											2 international tours
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Collaboration Tools */}
				{skillsByCategory["Product & Collaboration"] && (
					<div className="max-w-4xl mx-auto">
						<SkillCluster
							category="Product & Collaboration"
							skills={skillsByCategory["Product & Collaboration"]}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Timeline;
