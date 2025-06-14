// lib/api.ts
import { Project, Skill, Experience } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE_URL}/projects`);
  return response.json();
}

export async function getSkills(): Promise<Skill[]> {
  const response = await fetch(`${API_BASE_URL}/skills`);
  return response.json();
}

export async function getExperiences(): Promise<Experience[]> {
  const response = await fetch(`${API_BASE_URL}/experiences`);
  const data = await response.json();
  return data;
}
