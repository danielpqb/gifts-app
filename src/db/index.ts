import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const url =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "local"
    ? "http://localhost:8080"
    : process.env.NEXT_PUBLIC_DATABASE_URL || "";

const client = createClient({
  url: url,
  authToken: process.env.NEXT_PUBLIC_DATABASE_AUTH_TOKEN,
});

console.log(`Database is running at '${url}'`);

export const db = drizzle(client);
