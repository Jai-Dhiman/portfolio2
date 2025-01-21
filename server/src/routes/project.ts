import { Hono } from "hono";
import type { Context } from "hono";
import { db } from "../db";
import { projects } from "../db/schema";
import { eq } from "drizzle-orm";

const projectRoutes = new Hono();

projectRoutes.get("/projects", async (c: Context) => {
  try {
    const allProjects = await db.select().from(projects);
    return c.json(allProjects);
  } catch (error) {
    return c.json({ error: "Failed to fetch projects" }, 500);
  }
});

export default projectRoutes;
