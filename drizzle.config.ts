import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schemas",
  dbCredentials: {
    url:
      process.env.ENVIRONMENT === "local"
        ? "http://localhost:8080"
        : process.env.NUXT_TURSO_DB_URL || "",
    authToken: process.env.NUXT_TURSO_DB_AUTH_TOKEN,
  },
  out: "./drizzle",
  driver: "turso",
});
