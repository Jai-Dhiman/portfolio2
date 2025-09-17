import { onRequest as __api_experiences_js_onRequest } from "/Users/jdhiman/Documents/portfolio2/functions/api/experiences.js"
import { onRequest as __api_skills_js_onRequest } from "/Users/jdhiman/Documents/portfolio2/functions/api/skills.js"

export const routes = [
    {
      routePath: "/api/experiences",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_experiences_js_onRequest],
    },
  {
      routePath: "/api/skills",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_skills_js_onRequest],
    },
  ]