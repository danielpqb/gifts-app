import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schemas",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL || "",
    authToken: process.env.NEXT_PUBLIC_DATABASE_AUTH_TOKEN,
  },
  out: "./drizzle",
});
