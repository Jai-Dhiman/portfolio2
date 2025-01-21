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
        if (!a.startDate) return 1;
        if (!b.startDate) return -1;

        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);

        if (isNaN(dateA.getTime())) return 1;
        if (isNaN(dateB.getTime())) return -1;

        return dateB.getTime() - dateA.getTime();
      });
    },
  });
};
