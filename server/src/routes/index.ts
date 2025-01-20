import { Hono } from "hono";
import { db } from "../db";
import { projects } from "../db/schema";
import { eq } from "drizzle-orm";

const projectRoutes = new Hono();

// Get all projects
projectRoutes.get("/projects", async (c) => {
  try {
    const allProjects = await db.select().from(projects);
    return c.json(allProjects);
  } catch (error) {
    return c.json({ error: "Failed to fetch projects" }, 500);
  }
});

// Get single project
projectRoutes.get("/projects/:id", async (c) => {
  const id = Number(c.req.param("id"));
  try {
    const project = await db.select().from(projects).where(eq(projects.id, id));
    if (!project.length) {
      return c.json({ error: "Project not found" }, 404);
    }
    return c.json(project[0]);
  } catch (error) {
    return c.json({ error: "Failed to fetch project" }, 500);
  }
});

// Create project
projectRoutes.post("/projects", async (c) => {
  try {
    const body = await c.req.json();
    const newProject = await db.insert(projects).values(body).returning();
    return c.json(newProject[0], 201);
  } catch (error) {
    return c.json({ error: "Failed to create project" }, 500);
  }
});

export { projectRoutes };
