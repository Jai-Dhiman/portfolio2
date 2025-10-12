export async function onRequest({}) {

	const experiences = [
		{
			id: 1,
			title: "Founding Engineer",
			company: "Capture",
			description:
				"Led expansion from solo engineering team to 3 engineers, launching 50-user beta with systematic A/B testing achieving 40% engagement improvement; mentored 2 engineers on code review and Git workflow practices.",
			startDate: "2024-12-01",
			current: true,
		},
		{
			id: 2,
			title: "ML Research & Production",
			company: "Classical Piano Performance Analysis System",
			description:
				"Deployed production audio ML system: Rust preprocessing (Cloudflare Workers), Modal GPU inference (2-5s), SvelteKit web app with real-time recording achieving <100ms global edge response times.",
			startDate: "2025-08-01",
			current: true,
		},
		{
			id: 3,
			title: "Software Engineering Intern",
			company: "Southern Glazer's Wine & Spirits",
			description:
				"Built automated deployment pipeline (GitHub Actions + Docker); collaborated with DevOps Team, reducing deployment time from 2hrs to 15min and eliminating 6 config errors/month at $26B wine & spirits distributor.",
			startDate: "2025-05-01",
			endDate: "2025-07-31",
			current: false,
		},
		{
			id: 4,
			title: "AI Alignment Research",
			company: "Constitutional AI Implementation",
			description:
				"Implemented 4-stage Constitutional AI pipeline from Anthropic papers (JAX/Flax safety classifier, LoRA fine-tuning, 400-pair critique-revision, DPO training) achieving 23% improvement in harmful refusal.",
			startDate: "2025-07-01",
			endDate: "2025-09-30",
			current: false,
		},
		{
			id: 5,
			title: "Full-Stack Development Student",
			company: "Actualize Coding Bootcamp",
			description:
				"Full-stack development with algorithms, data structures, and system design.",
			startDate: "2024-06-01",
			endDate: "2024-12-01",
			current: false,
		},
		{
			id: 6,
			title: "Bachelor of Music in Performance (2x Dean's List)",
			company: "Berklee College of Music",
			description:
				"Developed discipline, creativity, and collaborative problem-solving through rigorous performance training.",
			startDate: "2020-05-01",
			endDate: "2023-12-01",
			current: false,
		},
	];
	return new Response(JSON.stringify(experiences), {
		headers: { "content-type": "application/json" },
	});
}
