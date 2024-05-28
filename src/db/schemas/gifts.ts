import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const giftsTable = sqliteTable("gifts", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  value: integer("value").notNull(),
  url: text("url"),
  created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  acquired: integer("acquired", { mode: "boolean" })
    .notNull()
    .default(false),
});
