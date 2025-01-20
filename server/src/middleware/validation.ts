import { z } from "zod";
import type { Context, Next } from "hono";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  image: z.string().optional(),
  techStack: z.array(z.string()).optional(),
});

export async function validateProject(c: Context, next: Next) {
  const body = await c.req.json();
  try {
    projectSchema.parse(body);
    await next();
  } catch (error) {
    return c.json({ error: "Invalid project data" }, 400);
  }
}
