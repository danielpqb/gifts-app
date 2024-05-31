import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const url =
  process.env.ENVIRONMENT === "local"
    ? "http://localhost:8080"
    : process.env.DATABASE_URL || "";

const client = createClient({
  url: url,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

console.log(`Database is running at '${url}'`);

export const db = drizzle(client);
