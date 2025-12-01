import { onRequest as __api_skills_js_onRequest } from "/Users/jdhiman/Documents/portfolio2/functions/api/skills.js"

export const routes = [
    {
      routePath: "/api/skills",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_skills_js_onRequest],
    },
  ]