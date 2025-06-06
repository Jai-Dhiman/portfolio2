export async function onRequest({}) {
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Southern Glazer Wine & Spirits",
      description: "Developing automated testing pipelines using Artillery and Lighthouse for performance testing; Contributing to DevSecOps initiatives focused on CI/CD pipeline enhancement and performance monitoring",
      startDate: "2025-01-01",
      current: true
    },
    {
      id: 2,
      title: "Team Member",
      company: "Clover Food Lab",
      description: "Demonstrated project coordination and problem-solving skills in fast-paced environment",
      startDate: "2023-01-01",
      endDate: "2024-12-31",
      current: false
    }
  ];
  return new Response(JSON.stringify(experiences), { headers: { "content-type": "application/json" } });
} 