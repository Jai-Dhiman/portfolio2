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
