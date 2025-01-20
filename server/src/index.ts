import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { errorHandler } from "./middleware/error";
import projectRoutes from "./routes/project";
import skillRoutes from "./routes/skill";
import experienceRoutes from "./routes/experience";

const app = new Hono();
const port = 3000;

// Middleware
app.use("*", cors());
app.use("*", errorHandler);

// Routes
app.route("/api", projectRoutes);
app.route("/api", skillRoutes);
app.route("/api", experienceRoutes);

// Health check
app.get("/", (c) => c.json({ status: "ok" }));

const server = serve({
  fetch: app.fetch,
  port,
});

server.listen(() => {
  console.log(`Server is running on port ${port}`);
});
