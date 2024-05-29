import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { giftsApi } from "./gifts";

const api = new Elysia()
  .use(swagger({ path: "/docs" }))
  .group("/api", (app) => app.use(giftsApi))
  .listen(3000);

console.log(`Elysia is running at ${api.server?.hostname}:${api.server?.port}`);

export default api;
