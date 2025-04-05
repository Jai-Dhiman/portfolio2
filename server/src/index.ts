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
  })
);

app.get("/health", (c) => c.json({ status: "ok" }));
//comment for redploy
app.get("/api/health", (c) => c.json({ status: "ok" }));

app.route("/api", projectRoutes);
app.route("/api", skillRoutes);
app.route("/api", experienceRoutes);

if (process.env.NODE_ENV === "production") {
  app.use("/*", async (c, next) => {
    try {
      return await serveStatic({ root: "./client/dist" })(c, next);
    } catch {
      return next();
    }
  });

  app.get("*", async (c) => {
    return c.newResponse(await Bun.file("./client/dist/index.html").text(), {
      headers: {
        "Content-Type": "text/html",
      },
    });
  });
}

const port = parseInt(process.env.PORT || "3000", 10);
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
