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
    },
    {
      id: 3,
      title: "Full-Stack Developer Student",
      company: "Actualize Coding Bootcamp",
      description: "Completed 500+ hour immersive full-stack development program covering React, Ruby on Rails, JavaScript, HTML/CSS, database management, agile methodologies, version control, and testing.",
      startDate: "2024-01-01",
      endDate: "2024-06-30",
      current: false
    },
    {
      id: 4,
      title: "Bachelor of Music in Performance",
      company: "Berklee College of Music",
      description: "Emphasis on composition and arrangement, developing analytical thinking and project management skills.",
      startDate: "2020-01-01",
      endDate: "2023-05-01",
      current: false
    }
  ];
  return new Response(JSON.stringify(experiences), { headers: { "content-type": "application/json" } });
} 