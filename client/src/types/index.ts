// types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  techStack: string[];
  createdAt: string;
  pm_problem_statement?: string;
  pm_user_needs?: string[];
  pm_solution?: string;
  pm_feature_prioritization?: string;
  pm_design_choices?: string;
  pm_technical_tradeoffs?: string;
  pm_success_metrics?: string;
  pm_learnings?: string;
  case_study_link?: string;
  mockups?: string[];
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  iconUrl?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  description: string;
  startDate: string | Date;
  endDate?: string | Date;
  current: boolean;
}

export interface ProductThinkingExercise {
  id: number;
  title: string; // e.g., "Improving Pinterest's Search Feature"
  problem?: string; // Optional: Brief problem description
  solution_summary: string; // Your summarized approach/ideas
  details_link?: string; // Optional: Link to a more detailed document/PRD
}
