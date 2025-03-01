// src/routes/skill.routes.ts
import { Hono } from "hono";
import { db } from "../db";
import { skills } from "../db/schema";
import { eq } from "drizzle-orm";

const skillRoutes = new Hono();

skillRoutes.get("/skills", async (c) => {
  try {
    const allSkills = await db.select().from(skills);
    return c.json(allSkills);
  } catch (error) {
    return c.json({ error: "Failed to fetch skills" }, 500);
  }
});

export default skillRoutes;
