import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../../lib/api';
import { Skill } from '../../types';
import TimelineItem from './TimelineItem';
import SkillCluster from './SkillCluster';
import MusicStaffBackground from '../../styles/backgrounds/MusicStaffBackground';
import Loader from '../loader';

const Timeline = () => {
  const { data: skills, isLoading: skillsLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills
  });

  if (skillsLoading) {
    return <Loader />;
  }

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc: { [key: string]: Skill[] }, skill) => {
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
      endDate: "Present",
      title: "Founding Engineer at Capture",
      subtitle: "Privacy-First Social Platform",
      description: "Co-Founded a privacy-first social platform (50-user beta) and scaled from sole]o builder to a 3-engineer team. Drove +40% engagement through systematic A/B testing and shipped a fast, safety-focused recommendation engine backed by resilient infra.",
      highlights: [
        "Personalized feed with robust cold-start handling (Recall@5 = 0.68)",
        "Moderation pipeline achieving 99.2% safe content rate across 10K+ posts",
        "<50 ms p99 latency at 10K+ req/min across replicated services"
      ],
      image: "/images/FeedSystemArchitecture.webp",
      imageLabel: "System Design:",
      logo: "/icons/capture.png",
      githubUrl: "https://github.com/Jai-Dhiman/capture",
      liveUrl: "https://www.captureapp.org",
      isProject: true,
      isLeft: false,
      wide: true
    },
    {
      date: "August 2025",
      endDate: "Present",
      title: "CrescendAI: Piano Performance Analysis",
      subtitle: "ML Research & Production",
      description: "Built an advanced AI tutor for pianists. Edge preprocessing + GPU inference for <100 ms global response. Deployed for early users and achieved 0.65–0.72 correlation vs baseline 0.42–0.48 across 16 performance dimensions.",
      highlights: [
        "End-to-end pipeline: Rust (Cloudflare Workers) → Modal GPU → SvelteKit UI",
        "Outperformed baseline model by +30% correlation on timing & articulation",
        "Designed feedback UX blending symbolic analysis with actionable guidance"
      ],
      logo: "/icons/crescendai.png",
      githubUrl: "https://github.com/Jai-Dhiman/crescendai",
      liveUrl: "https://crescend.ai",
      isProject: true,
      isLeft: true
    },
    {
      date: "July 2025",
      endDate: "September 2025",
      title: "AI Safety Alignment Research",
      subtitle: "Constitutional AI Implementation",
      description: "Re-implemented Anthropic’s Constitutional AI pipeline end-to-end (JAX/Flax, Kubernetes, LoRA fine-tuning). Achieved 23% reduction in harmful outputs across toxic, self-harm, and dangerous-advice categories.",
      highlights: [
        "4-stage alignment process: safety classifier → instruction fine-tuning → critique & revision → DPO training",
        "Distributed training with 85%+ accuracy across safety classes",
        "Published clear safety benchmarks and evaluation scripts"
      ],
      logo: "/icons/anthropic.png",
      githubUrl: "https://github.com/Jai-Dhiman/ml-learning",
      isProject: true,
      isLeft: false
    },
    {
      date: "May 2025",
      endDate: "July 2025",
      title: "Software Engineering Intern",
      subtitle: "Southern Glazer's Wine & Spirits",
      description: "Automated CI/CD with GitHub Actions + Docker, cutting deploy time 2 hrs → 15 min and eliminating 6 config errors/month at $26B wine & spirits distributor.",
      highlights: [
        "Collaborated cross-functionally with DevOps team",
        "Established consistent containerized workflows for 3 apps"
      ],
      logo: "/icons/southern.png",
      isProject: false,
      isLeft: true
    },
    {
      date: "June 2024",
      endDate: "December 2024",
      title: "Full-Stack Development",
      subtitle: "Actualize Coding Bootcamp",
      description: "Completed full-stack software program; self-studied CS fundamentals (algorithms, systems, design patterns). Built multiple production-ready applications applying distributed systems and data-structure concepts.",
      highlights: [
        "Advanced projects in Python, JS, SQL",
        "Self-studied advanced CS fundamentals",
      ],
      logo: "/icons/actualize.png",
      isProject: false,
      isLeft: false
    },
    {
      date: "May 2020",
      endDate: "December 2023",
      title: "Bachelor of Music in Performance",
      subtitle: "Berklee College of Music",
      description: "Developed discipline, creativity, and collaborative problem-solving through rigorous performance training.",
      highlights: [
        "2x Dean's List recipient",
        "Performed in 2 international orchestra tours",
        "Developed Leadership under pressure"
      ],
      logo: "/icons/berklee.png",
      isProject: false,
      isLeft: true
    }
  ];


  return (
    <div className="relative">
      {/* Music staff background */}
      <MusicStaffBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Timeline items with interspersed skill clusters */}
        <div className="max-w-6xl mx-auto">
          {timelineItems.map((item, index) => (
            <div key={index}>
              <TimelineItem {...item} />
              
              {/* Insert skill clusters after certain timeline items */}
              {index === 0 && skillsByCategory['ML Core'] && (
                <SkillCluster
                  category="ML Core"
                  skills={skillsByCategory['ML Core']}
                />
              )}
              {index === 1 && skillsByCategory['Programming & Data'] && (
                <SkillCluster
                  category="Programming & Data"
                  skills={skillsByCategory['Programming & Data']}
                />
              )}

              {/* After AI Safety: Infrastructure & Deployment */}
              {index === 2 && skillsByCategory['Infrastructure & Deployment'] && (
                <SkillCluster
                  category="Infrastructure & Deployment"
                  skills={skillsByCategory['Infrastructure & Deployment']}
                />
              )}

              {/* After SGWS: Product & Collaboration */}
              {index === 3 && skillsByCategory['Product & Collaboration'] && (
                <SkillCluster
                  category="Product & Collaboration"
                  skills={skillsByCategory['Product & Collaboration']}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;