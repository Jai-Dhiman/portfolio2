import { Hono } from "hono";
import type { Context } from "hono";
import { db } from "../db";
import { projects } from "../db/schema";
import { eq } from "drizzle-orm";

const projectRoutes = new Hono();

// GET all projects
projectRoutes.get("/projects", async (c: Context) => {
  try {
    const allProjects = await db.select().from(projects);
    return c.json(allProjects);
  } catch (error) {
    return c.json({ error: "Failed to fetch projects" }, 500);
  }
});

// GET single project
projectRoutes.get("/projects/:id", async (c: Context) => {
  const id = Number(c.req.param("id"));
  try {
    const project = await db.select().from(projects).where(eq(projects.id, id));

    if (project.length === 0) {
      return c.json({ error: "Project not found" }, 404);
    }

    return c.json(project[0]);
  } catch (error) {
    return c.json({ error: "Failed to fetch project" }, 500);
  }
});

// POST new project
projectRoutes.post("/projects", async (c: Context) => {
  try {
    const body = await c.req.json();
    const newProject = await db.insert(projects).values(body).returning();
    return c.json(newProject[0], 201);
  } catch (error) {
    return c.json({ error: "Failed to create project" }, 500);
  }
});

// PUT update project
projectRoutes.put("/projects/:id", async (c: Context) => {
  const id = Number(c.req.param("id"));
  try {
    const body = await c.req.json();
    const updatedProject = await db.update(projects).set(body).where(eq(projects.id, id)).returning();

    if (updatedProject.length === 0) {
      return c.json({ error: "Project not found" }, 404);
    }

    return c.json(updatedProject[0]);
  } catch (error) {
    return c.json({ error: "Failed to update project" }, 500);
  }
});

// DELETE project
projectRoutes.delete("/projects/:id", async (c: Context) => {
  const id = Number(c.req.param("id"));
  try {
    const deletedProject = await db.delete(projects).where(eq(projects.id, id)).returning();

    if (deletedProject.length === 0) {
      return c.json({ error: "Project not found" }, 404);
    }

    return c.json({ message: "Project deleted successfully" });
  } catch (error) {
    return c.json({ error: "Failed to delete project" }, 500);
  }
});

export default projectRoutes;
