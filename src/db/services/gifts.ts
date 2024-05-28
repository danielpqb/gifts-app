"use server";

import { revalidateTag, unstable_cache } from "next/cache";
import { db } from "..";
import { giftsTable } from "../schemas/gifts";

export type TCreateGift = {
  title: string;
  value: number;
};
export const create = async (props: TCreateGift) => {
  await db.insert(giftsTable).values(props);
  revalidateTag("findAll-gifts");
};

export const findAll = unstable_cache(
  async () => {
    const gifts = await db.select().from(giftsTable);
    return gifts;
  },
  ["findAll-gifts"],
  { tags: ["findAll-gifts"] }
);
