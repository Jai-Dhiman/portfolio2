import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { projectRoutes } from "./routes";

const app = new Hono();

app.use(cors());
app.route("/api", projectRoutes);

// Health check route
app.get("/", (c) => c.json({ status: "ok" }));

serve(app, { port: 3000 });
console.log("Server is running on port 3000");
