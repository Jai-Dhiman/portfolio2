// src/routes/experience.routes.ts
import { Hono } from "hono";
import { db } from "../db";
import { experiences } from "../db/schema";
import { eq } from "drizzle-orm";

const experienceRoutes = new Hono();

// GET all experiences
experienceRoutes.get("/experiences", async (c) => {
  try {
    const allExperiences = await db.select().from(experiences);
    return c.json(allExperiences);
  } catch (error) {
    return c.json({ error: "Failed to fetch experiences" }, 500);
  }
});

// Additional CRUD routes similar to projects...

export default experienceRoutes;
