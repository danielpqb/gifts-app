import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { ulid } from "ulid";

export const giftsTable = sqliteTable("gifts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  uid: text("uid").default(ulid()),
  title: text("title").notNull(),
  value: integer("value").notNull(),
  url: text("url"),
  created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  acquired: integer("acquired", { mode: "boolean" }).default(false),
});
