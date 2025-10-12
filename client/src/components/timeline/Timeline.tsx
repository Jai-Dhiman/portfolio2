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
      title: "Founding Engineer at Capture",
      subtitle: "Privacy-First Social Platform",
      description: "Grew a privacy-first social platform from solo to a small engineering team, launching a 50-user beta. Drove a 40% engagement lift through systematic experiments. Built personalized discovery with safety guardrails and resilient infrastructure.",
      highlights: [
        "Personalized feed with thoughtful cold-start handling",
        "Safety-first moderation pipeline",
        "Fast, cost-aware backend (10K+ req/min, p99 <50ms)"
      ],
      image: "/images/FeedSystemArchitecture.webp",
      imageLabel: "System Design:",
      logo: "/icons/capture.png",
      githubUrl: "https://github.com/Jai-Dhiman/capture",
      liveUrl: "https://www.captureapp.org",
      isProject: true,
      isLeft: false
    },
    {
      date: "August 2024",
      title: "CrescendAI: Piano Performance Analysis",
      subtitle: "ML Research & Production",
      description: "Built a production system that helps pianists get fast, meaningful feedback from their recordings. The product combines edge preprocessing with GPU inference to deliver responsive analysis and clean, understandable results. Our model outperforms a strong baseline and the tutor makes guidance approachable.",
      highlights: [
        "Deployed edge+GPU pipeline with quick turnaround",
        "Trained a modern audio model that beats baseline correlations",
        "Tutor experience blends musical context with actionable tips"
      ],
      logo: "/icons/crescendai.png",
      githubUrl: "https://github.com/Jai-Dhiman/crescendai",
      liveUrl: "https://crescend.ai",
      isProject: true,
      isLeft: true
    },
    {
      date: "July 2024",
      title: "AI Safety Alignment Research",
      subtitle: "Constitutional AI Implementation",
      description: "Re-implemented a modern AI safety training process from Anthropic's research papers to reduce harmful outputs. Combined classifier training, instruction fine-tuning, critique-and-revision, and preference optimization. The result: measurably safer behavior in critical categories.",
      highlights: [
        "23% improvement in harmful refusal",
        "Clear safety benchmarks and evaluation",
        "Hands-on, end-to-end training pipeline"
      ],
      logo: "/icons/anthropic.png",
      githubUrl: "https://github.com/Jai-Dhiman/ml-learning",
      isProject: true,
      isLeft: false
    },
    {
      date: "May 2025",
      title: "Software Engineering Intern",
      subtitle: "Southern Glazer's Wine & Spirits",
      description: "Built automated deployment pipeline (GitHub Actions + Docker); collaborated with DevOps Team, reducing deployment time from 2hrs to 15min and eliminating 6 config errors/month at $26B wine & spirits distributor.",
      highlights: [
        "Reduced deployment time from 2 hours to 15 minutes",
        "Eliminated 6 configuration errors per month",
        "Collaborated with DevOps on CI/CD best practices"
      ],
      logo: "/icons/southern.png",
      isProject: false,
      isLeft: true
    },
    {
      date: "June 2024",
      title: "Full-Stack Development Bootcamp",
      subtitle: "Actualize Coding",
      description: "Full-stack development with algorithms, data structures, and system design. Intensive CS fundamentals self-study: CLRS algorithms, distributed systems patterns, data structures & design.",
      highlights: [
        "Completed comprehensive full-stack curriculum",
        "Self-studied advanced CS fundamentals",
        "Built multiple production-ready applications"
      ],
      logo: "/icons/actualize.png",
      isProject: false,
      isLeft: false
    },
    {
      date: "May 2020",
      title: "Bachelor of Music in Performance",
      subtitle: "Berklee College of Music",
      description: "Developed discipline, creativity, and collaborative problem-solving through rigorous performance training. Performed in 2 international orchestra tours, honing high-pressure execution and teamwork skills.",
      highlights: [
        "2x Dean's List recipient",
        "Performed in 2 international orchestra tours",
        "Developed discipline and collaborative problem-solving"
      ],
      logo: "/icons/berklee.png",
      isProject: false,
      isLeft: true
    }
  ];

  // Toolbox skills for quick scan (no duplicates across categories)
  const toolboxSkills: Skill[] = [
    { id: 1001, name: 'React', category: 'Toolbox', iconUrl: '/icons/react.svg' } as any,
    { id: 1002, name: 'GraphQL', category: 'Toolbox', iconUrl: '/icons/graphql.svg' } as any,
    { id: 1003, name: 'Figma', category: 'Toolbox', iconUrl: '/icons/figma.svg' } as any,
    { id: 1004, name: 'Git', category: 'Toolbox', iconUrl: '/icons/git.svg' } as any,
    { id: 1006, name: 'Linear', category: 'Toolbox', iconUrl: '/icons/linear.png' } as any,
    { id: 1007, name: 'Cloudflare Workers', category: 'Toolbox', iconUrl: '/icons/cloudflareworkers.svg' } as any,
    { id: 1008, name: 'GitHub', category: 'Toolbox', iconUrl: '/icons/github.svg' } as any,
    { id: 1009, name: 'Notion', category: 'Toolbox', iconUrl: '/icons/notion.svg' } as any,
    { id: 1010, name: 'Amplitude', category: 'Toolbox', iconUrl: '/icons/amplitude.png' } as any,
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
              {index === 0 && skillsByCategory['ML Frameworks'] && (
                <SkillCluster
                  category="ML Frameworks"
                  skills={skillsByCategory['ML Frameworks']}
                />
              )}
              {index === 1 && skillsByCategory['ML Systems'] && (
                <SkillCluster
                  category="ML Systems"
                  skills={skillsByCategory['ML Systems']}
                />
              )}

              {/* After AI Safety: Languages & Infrastructure */}
              {index === 2 && skillsByCategory['Languages & Infrastructure'] && (
                <SkillCluster
                  category="Languages & Infrastructure"
                  skills={skillsByCategory['Languages & Infrastructure']}
                />
              )}

              {/* After SGWS: Specialized */}
              {index === 3 && skillsByCategory['Specialized'] && (
                <SkillCluster
                  category="Specialized"
                  skills={skillsByCategory['Specialized']}
                />
              )}

              {/* After Actualize: Toolbox */}
              {index === 4 && (
                <SkillCluster
                  category="Toolbox"
                  skills={toolboxSkills}
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