// hooks/useExperiences.ts
import { useQuery } from "@tanstack/react-query";
import { getExperiences } from "../lib/api";
import { Experience } from "../types/index";

export const useExperiences = () => {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: getExperiences,
    select: (data: Experience[]) => {
      return [...data].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    },
  });
};
