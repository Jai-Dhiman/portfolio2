import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
  image: text("image"),
  techStack: text("tech_stack").array(),
  createdAt: timestamp("created_at").defaultNow(),
});
