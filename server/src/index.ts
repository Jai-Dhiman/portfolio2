import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import projectRoutes from "./routes/project";
import skillRoutes from "./routes/skill";
import experienceRoutes from "./routes/experience";

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length", "X-Requested-With"],
  })
);

app.get("/api/health", (c) => c.json({ status: "ok" }));

app.route("/api", projectRoutes);
app.route("/api", skillRoutes);
app.route("/api", experienceRoutes);

if (process.env.NODE_ENV === "production") {
  app.use("/*", serveStatic({ root: "../client/dist" }));

  // For SPA routing, serve index.html for all non-API routes
  app.get("*", async (c) => {
    return serveStatic({ root: "../client/dist" })(c);
  });
}

const port = parseInt(process.env.PORT || "3000", 10);
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
