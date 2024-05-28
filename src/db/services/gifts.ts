import { db } from "..";
import { giftsTable } from "../schemas/gifts";

async function create() {
  await db.insert(giftsTable).values({ title: "", value: 1000 });
}

export const giftsServices = { create };
