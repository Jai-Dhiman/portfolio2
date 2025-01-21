// hooks/useExperiences.ts
import { useQuery } from "@tanstack/react-query";
import { getExperiences } from "../lib/api";
import { Experience } from "../types/index";

export const useExperiences = () => {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: getExperiences,
    select: (data: Experience[]) => {
      return [...data].sort((a, b) => {
        const dateA = new Date(a.startDate + 'T00:00:00');
        const dateB = new Date(b.startDate + 'T00:00:00');
        return dateB.valueOf() - dateA.valueOf();
      });
    },
  });
};
