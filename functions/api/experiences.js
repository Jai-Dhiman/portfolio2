export async function onRequest({}) {

	const experiences = [
		{
			id: 1,
			title: "Founding Software Engineer",
			company: "Capture (AI-Powered Social Discovery)",
			description:
				"Built production recommendation engine (10K+ items) with semantic search; implemented safety evaluation (Recall@K/MRR/NDCG) and A/B testing; designed multi-layer safety systems and monitoring dashboards.",
			startDate: "2024-12-01",
			current: true,
		},
		{
			id: 2,
			title: "Software Engineering Intern",
			company: "Southern Glazer's Wine & Spirits",
			description:
				"Automated Python ML workflows and built monitoring dashboards (reduced manual interventions by ~25%); contributed to secure CI/CD deployment infrastructure.",
			startDate: "2025-05-01",
			endDate: "2025-07-31",
			current: false,
		},
		{
			id: 3,
			title: "Full-Stack Developer Student",
			company: "Actualize Coding Bootcamp",
			description:
				"Full‑stack development with emphasis on data structures, algorithms, and distributed system design.",
			startDate: "2024-06-01",
			endDate: "2024-12-01",
			current: false,
		},
		{
			id: 4,
			title: "Bachelor of Music in Performance",
			company: "Berklee College of Music",
			description:
				"Developed discipline, creativity, and collaborative problem‑solving through rigorous performance training.",
			startDate: "2020-05-01",
			endDate: "2023-12-01",
			current: false,
		},
	];
	return new Response(JSON.stringify(experiences), {
		headers: { "content-type": "application/json" },
	});
}
