import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const url =
  process.env.ENVIRONMENT === "local"
    ? "http://localhost:8080"
    : process.env.NUXT_TURSO_DB_URL || "";

const client = createClient({
  url: url,
  authToken: process.env.NUXT_TURSO_DB_AUTH_TOKEN,
});

console.log(`Database is running at '${url}'`);

export const db = drizzle(client);
