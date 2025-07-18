export async function onRequest({}) {
  const experiences = [
    {
      id: 1,
      title: "Co-Founder & Technical Product Lead",
      company: "Capture",
      description: "Led product strategy and technical development for privacy-first social media platform from concept to pre-beta.",
      startDate: "2024-06-01",
      current: true
    },
    {
      id: 2,
      title: "DevSecOps Engineering Intern",
      company: "Southern Glazer Wine & Spirits",
      description: "Analyzed enterprise AI workflow requirements and collaborated with stakeholders to define product specifications. Contributed to internal tool development improving developer productivity by 25%.",
      startDate: "2025-05-01",
      current: false
    },
    {
      id: 3,
      title: "Full-Stack Developer Student",
      company: "Actualize Coding Bootcamp",
      description: "500+ hours intensive full-stack dev training with focus on collaborative workflows and technology adoption. Completed comprehensive program covering React, Ruby on Rails, JavaScript, HTML/CSS, database management, agile methodologies, version control, and testing.",
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