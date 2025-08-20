export async function onRequest({}) {
  const experiences = [
    {
      id: 1,
      title: "Co-Founder & Technical Product Lead",
      company: "Capture",
      description: "Built full-stack platform with semantic search using vector embeddings and database. Implemented custom evaluation harnesses for ML recommendation systems with real-time A/B testing frameworks.",
      startDate: "2024-06-01",
      current: true
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "Southern Glazer Wine & Spirits",
      description: "Automated enterprise workflows with Python and built monitoring dashboards using statistical analysis. Collaborated on secure deployment pipelines and CI/CD tooling, improving developer productivity by 25%.",
      startDate: "2025-05-01",
      current: false
    },
    {
      id: 3,
      title: "Full-Stack Developer Student",
      company: "Actualize Coding Bootcamp",
      description: "500+ hours intensive program emphasizing data structures, algorithms, and system design foundations. Built full-stack applications with focus on performance optimization, database design, and scalable architecture patterns.",
      startDate: "2024-01-01",
      endDate: "2024-06-30",
      current: false
    },
    {
      id: 4,
      title: "Bachelor of Music in Performance",
      company: "Berklee College of Music",
      description: "Emphasis on composition and arrangement, developing analytical thinking and project management skills. Graduated with comprehensive understanding of creative project management and collaborative workflows.",
      startDate: "2020-01-01",
      endDate: "2023-05-01",
      current: false
    },
    {
      id: 5,
      title: "Atlassian Agile Project Management Professional Certificate",
      description: "Comprehensive certification covering agile methodologies, project management frameworks, and cross-functional team leadership. Focused on practical application of agile principles in product development environments.",
      startDate: "2025-02-01",
      endDate: "2025-02-01",
      current: false
    },
    {
      id: 6,
      title: "Aha! Product Management Professional Certificate",
      description: "Professional certification in product management fundamentals, roadmap planning, stakeholder management, and product strategy. Covered user research methodologies, analytics, and data-driven decision making.",
      startDate: "2025-02-01",
      endDate: "2025-02-01",
      current: false
    }
  ];
  return new Response(JSON.stringify(experiences), { headers: { "content-type": "application/json" } });
} 